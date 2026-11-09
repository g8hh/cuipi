/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.7.0 - 2026-11 性能版
 @website : http://www.g8hh.com
 @changes : 1) 精确匹配改 Map，O(1)；2) 输入→输出记忆表（含负缓存），有上限；
            3) 纯数字/符号节点直接放行；4) 单例守卫 + 观察者可注销；
            5) 同值不回写；6) 叶子节点用 textContent 避免强制重排。

 调试：
   window.__cnStats()  看命中率/缓存大小
   window.__cnOff = true / false  运行中开关翻译（做 A/B 对照用，不用改文件）

*/

var CNITEM_DEBUG = 0;

/* ---------- 索引：启动时建一次 ---------- */
var cnItemMap = new Map();      // 英文原文 -> 译文，只收字符串条目
var cnTagEntries = [];          // 值仍是对象的选择器型条目（当前词表里没有）
var cnHasTagRules = false;
var cnItemMemo = new Map();     // 原文 -> 输出（含"查过没有"的负缓存）
var CN_MEMO_MAX = 5000;         // 上限，防止数字/时间戳类文本把缓存撑大

for (var _cnKey in cnItems) {
    if (_cnKey === '_OTHER_') continue;
    if (typeof cnItems[_cnKey] === 'string') {
        cnItemMap.set(_cnKey, cnItems[_cnKey]);
    } else if (cnItems[_cnKey] && typeof cnItems[_cnKey] === 'object') {
        cnTagEntries.push(_cnKey);
    }
}
cnHasTagRules = cnTagEntries.length > 0;

var CN_STATS = { lookups: 0, memoHits: 0, mapHits: 0, fastNumeric: 0, misses: 0, batches: 0, mutations: 0 };

/* 纯数字 / 纯符号：数字节点占 DOM 文本节点的绝大多数，直接放行。
   注意：这里必须先查一次 cnItemMap，因为 ', '、'.'、'0+'、'1/2/' 这类
   标点/数字键本身就在词表里，不能漏掉。 */
var CN_NUMERIC = /^[\d.,%+\-×x/]+$/;

function cnItem(text, node) {
    if (typeof (text) != "string") return text;
    CN_STATS.lookups++;
    // 纯数字/符号放行：不查缓存、不入缓存，避免每秒变化的上百个数字把缓存刷满
    if (text.length > 0 && CN_NUMERIC.test(text) && /\d/.test(text) && !cnItemMap.has(text)) {
        CN_STATS.fastNumeric++;
        return text;
    }
    if (cnHasTagRules) return cnTranslate(text, node);   // 有选择器条目时不能按文本缓存
    var cached = cnItemMemo.get(text);
    if (cached !== undefined) { CN_STATS.memoHits++; return cached; }
    var out = cnTranslate(text, node);
    if (cnItemMemo.size >= CN_MEMO_MAX) cnItemMemo.clear();
    cnItemMemo.set(text, out);
    return out;
}

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') { //匹配节点及其父节点的class
            let current_node = node;
            while (current_node) {
                if (current_node.classList && current_node.classList.contains(i.substr(1))) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '#') { //匹配节点及其父节点的id
            let current_node = node;
            while (current_node) {
                if (current_node.id == i.substr(1)) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '$') { //执行document.querySelector
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') { //搜索原始文本
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        } else {
            CNITEM_DEBUG && console.log({ text, itemgroup, dsc: "不识别的标签" + i })
        }
    }
    return null;
}

function cnTranslate(text, node) {
    var textori = text;

    //处理前缀
    var text_prefix = "";
    for (var prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    var text_postfix = "";
    for (var postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    var text_reg_exclude_postfix = "";
    for (var reg of cnExcludePostfix) {
        var result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (var ex of cnExcludeWhole) {
        if (ex.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //尝试正则替换
    for (var [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //精确匹配：O(1)
    //（旧版还会反向匹配"译文 == 原文"，但那只可能得到与输入相同的字符串，
    //  且含中文的文本早已被 cnExcludeWhole 拦掉，所以结果等价。）
    var hit = cnItemMap.get(text);
    if (hit !== undefined) {
        CN_STATS.mapHits++;
        return text_prefix + hit + text_reg_exclude_postfix + text_postfix;
    }
    if (cnHasTagRules) {
        for (var tagKey of cnTagEntries) {
            if (text == tagKey) {
                var tagResult = cnItemByTag(tagKey, cnItems[tagKey], node, textori);
                if (tagResult != null) {
                    return text_prefix + tagResult + text_reg_exclude_postfix + text_postfix;
                }
            }
        }
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    var save_cfg = 1;
    var save_text = save_cfg ? text : textori;
    //遍历生词表是否收录
    for (var i = 0; i < cnItems._OTHER_.length; i++) {
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 500) {
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(function (a, b) { return a.localeCompare(b) });
    }
    CN_STATS.misses++;

    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);

    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
}

var transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({ node, attr, text })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.textContent;   // 叶子节点：textContent 与 innerText 同值，但不会强制重排
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

! function () {
    if (typeof window !== 'undefined' && window.__cnInit) {
        console.log("汉化模块已加载，跳过重复初始化");
        return;
    }
    if (typeof window !== 'undefined') window.__cnInit = true;
    console.log("加载汉化模块 (V0.7.0)");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();

    let observer = new MutationObserver(function (e) {
        if (typeof window !== 'undefined' && window.__cnOff) return;
        CN_STATS.batches++;
        CN_STATS.mutations += e.length;
        observer.disconnect();
        try {
            for (let mutation of e) {
                if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
                if (mutation.target.nodeName === "#text") {
                    let text = mutation.target.textContent;
                    let cnText = cnItem(text, mutation.target);
                    if (cnText !== text) mutation.target.textContent = cnText;   // 同值不回写，避免无谓的再派发
                } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                    let text = mutation.target.textContent;
                    let cnText = cnItem(text, mutation.target);
                    if (cnText !== text) mutation.target.textContent = cnText;
                } else if (mutation.addedNodes.length > 0) {
                    for (let node of mutation.addedNodes) {
                        if (!targetNode.contains(node)) continue; //不要和空气斗智斗勇
                        if (node.nodeName === "#text") {
                            let text = node.textContent;
                            let cnText = cnItem(text, node);
                            if (cnText !== text) node.textContent = cnText;
                        } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA" && node.nodeName !== "BR") {
                            if (!node.childNodes || node.childNodes.length == 0) {
                                if (node.textContent)
                                    node.textContent = cnItem(node.textContent, node);
                            } else {
                                TransSubTextNode(node);
                            }
                        }
                    }
                }
            }
        } finally {
            transTaskMgr.doTask();
            observer.observe(targetNode, observer_config);
        }
    });
    observer.observe(targetNode, observer_config);
    if (typeof window !== 'undefined') window.__cnObserver = observer;

    if (typeof window !== 'undefined') {
        window.__cnStats = function () {
            return {
                mapSize: cnItemMap.size,
                memoSize: cnItemMemo.size,
                otherSize: (cnItems._OTHER_ || []).length,
                lookups: CN_STATS.lookups,
                memoHits: CN_STATS.memoHits,
                mapHits: CN_STATS.mapHits,
                fastNumeric: CN_STATS.fastNumeric,
                misses: CN_STATS.misses,
                batches: CN_STATS.batches,
                mutations: CN_STATS.mutations
            };
        };
        window.__cnRebuild = function () {
            cnItemMap.clear(); cnTagEntries.length = 0; cnHasTagRules = false;
            for (var k in cnItems) {
                if (k === '_OTHER_') continue;
                if (typeof cnItems[k] === 'string') cnItemMap.set(k, cnItems[k]);
                else if (cnItems[k] && typeof cnItems[k] === 'object') cnTagEntries.push(k);
            }
            cnHasTagRules = cnTagEntries.length > 0;
            cnItemMemo.clear();
        };
    }
}();
