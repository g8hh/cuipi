/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //标题：
    'Trimps Updates!': '脆皮更新日志！',

    //更新大类：
    'Balance': '平衡性调整',
    'Bug Fix': '错误修复',
    'Bug Fixes': '错误修复',
    'Content': '游戏内容',
    'Content/Balance': '游戏内容/平衡性调整',
    'Misc': '杂项',
    'Other': '其他',
    'QOL': '游戏体验',
    'Screen Reader': '屏幕阅读版',
    'Screen Reader Version': '屏幕阅读版',
    'UI/QOL': '游戏界面/游戏体验',
    'UI/Quality Of Life': '游戏界面/游戏体验',
    'UI/Quality of Life': '游戏界面/游戏体验',
    'UI / Quality of Life Stuff': '游戏界面/游戏体验等',

    //5.4.4
    'Added a new repeatable Challenge to U2 Z130, and a new Perk that can be unlocked from the new Challenge.': '增加了一个宇宙2区域130解锁的可重复挑战，该挑战可以解锁一个新的特权。',

    //5.4.3
    'Note: A new U2 Challenge and Perk are in the works and currently being tested on our Discord server. However they need a few more days of testing/balance and I really wanted to switch to snow! Expect another patch in the next few days.': '注意：新的宇宙2挑战和特权已经制作完毕，在Discord上进行测试了。它还需要一定的时间来测试并完善，但我已经迫不及待想把雪换进来了！下个补丁之后一定来，不会鸽的。',
    'Pumpkimps have gone in to hiding until next year': '脆皮南瓜怪躲起来了，明年再见',
    'Snow and Presimpts have returned to the World for the rest of the year!': '雪和脆皮小礼又回到世界上了，直到年底为止它们都会存在！',
    'Added 5 placeholder levels to Scruffy that only grant bonus damage.': '污污追加了5级上限，暂时只是用来占位置的，只提供伤害加成。',
    'You can now pat your pets!': '可以给绒绒污污拍头了！',
    'Centered the Equality Scaling popup over the left side of the screen rather than the entire screen, so that the battle pane is fully visible.': '平等缩放的提示框从屏幕中央移到了屏幕左边，这样就不会遮住战斗界面了。',

    //5.4.2
    'Pumpkimps have made their return to Trimps for the next few weeks! Find a Pumpkimp Patch in Zones, or lone Pumpkimps in maps for a chance at some treats!': '脆皮南瓜怪们又回来啦！接下来几周内，世界上可能出现一个由脆皮南瓜怪组成的图案，地图中也有零星落单的脆皮南瓜怪出现，击败它们可以获得很多好东西！',

    //5.4.1
    'Fixed an issue that was causing U2 Improbability stats to inflate as if Corruption was present in U': '修复了宇宙2乌有者数值不正常的问题，该问题原因是腐化错误生效于宇宙',
    'Fixed an issue that could cause Mayhem bosses to not gain any extra health or attack in certain situations': '修复了暴乱挑战的首领在某些情况下数值不上涨的问题',
    'Fixed a spot on Golden Radon that said Helium': '修正一处金色氡仍然被称为金色氦的文本错误',

    //原样
    '': '',
    '': '',
}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
]);