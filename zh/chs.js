/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

var cnItems = {
    _OTHER_: [],
    //段末标点处理
    '.': '。',
    '"': '',
    //段末标点处理结束
    //主界面
    'Gather': '采集',
    'Gathering': '采集中',
    'Chop': '砍伐',
    'Chopping': '砍伐中',
    'Mine': '采矿',
    'Mining': '采矿中',
    'Science': '科学点',
    'Research': '研究',
    'Researching': '研究中',
    'Fragments': '碎片',
    'Base': '基础值',
    'Total': '总计',
    'Min': '最小',
    'Farmers': '农民',
    'Lumberjacks': '伐木工',
    'Gatherer (Scruffy': '采集者(污污',
    'Huge (Size': '巨大(尺寸挑战',
    'Solitary (Downsize': '孤僻(精简挑战',
    'Tweaky (Toxicity': '扭曲(毒性挑战',
    'Strength (Balance': '力量(平衡挑战',
    'Strength (Unbalance': '力量(不平衡挑战',
    'Sanity (Decay': '理性(衰变挑战',
    'Sanity (Melt': '理性(熔化挑战',
    'Sleepy (Watch': '困倦(守望挑战',
    'Determined (Lead': '决心(领导挑战',
    'Insane (Insanity': '癫狂(失智挑战',
    'Dedicated (Daily': '专注(日常挑战',
    'Famine (Daily': '饥荒(日常挑战',
    'Antenna Network': '气象网络',
    'Parity (Staff': '对等(权杖',
    'Swiftness (Wind': '迅捷(风',
    'Heirloom (Staff': '传家宝(权杖',
    'Sharing Food': '分享食物',
    'Average Loot': '劫掠平均值',
    'Breeding': '繁殖中',
    'Nurseries': '托儿所',
    'Broken Planet': '行星破碎',
    'Quick Trimps': '快枪手脆皮',
    'Dysfunctional (Daily': '无能(日常挑战',
    'Toxic (Daily': '毒性(日常挑战',
    'Toxic Air': '毒气',
    'Heirloom (Shield': '传家宝(盾牌',
    'Item Attack': '攻击明细',
    'Item Block': '格挡明细',
    'Item Health': '生命值明细',
    'Attack': '攻击力',
    'Block': '格挡',
    'Health': '生命值',
    'Lack Discipline': '缺乏纪律',
    'Unharnessed Luck': '脱缰之运',
    'Minimalist (Daily': '极简主义(日常挑战',
    'Prodigal (Daily': '浪费(日常挑战',
    'Prismatic (Z': '棱镜护盾(区域',
    'Prismalicious (Z': '优质棱镜(区域',
    'Prisms (Scruffy': '棱镜(污污',
    'Prismal (Perk': '棱镜化(特权',
    'Bublé (Challenge': '泡影(挑战',
    'Shield Layer': '护盾层数',
    'Soldiers': '士兵',
    'Antenna Array': '气象天线阵列',
    'Scruffy is Life': '为污而生',
    'Geneticists': '遗传学家',
    'Formation': '阵型',
    'Mayhem Completions': '暴乱挑战完成次数',
    'Pandemonium Completions': '群魔乱舞挑战完成次数',
    'Spire Assault Stats': '尖塔突击状态',
    'Unliving (Life': '亡灵化(生命挑战',
    'Rallying Cry (Duel': '集结号(决斗挑战',
    'Winning (Duel': '胜者(决斗挑战',
    'Weakness (Balance': '弱化(平衡挑战',
    'Exhausted (Quagmire': '疲惫不堪(泥淖挑战',
    'Finished Quests!': '任务完成奖励！',
    'Relic Strength': '遗物之力',
    'Beta Trimps': '贝塔脆皮',
    'Weakness (Daily': '弱化(日常挑战',
    'Oddly Weak (Daily': '奇数弱化(日常挑战',
    'Even Stronger (Daily': '偶数强化(日常挑战',
    'Rampage (Daily': '暴走(日常挑战',
    'Pressure (Daily': '压力(日常挑战',
    'Hardness (Wither': '硬化(凋零挑战',
    'Golden Battle': '金色战斗',
    'Void Power': '虚空力量',
    'Rewards': '奖励',
    'Chilled Enemy': '冰冻敌人',
    'Void Siphon (Fluffy E': '虚空吸收(绒绒进化次数',
    'Overheating (Magma': '过热(岩浆',
    'Strength Tower': '力量塔',
    'Strength Towers': '力量塔',
    'Sharp Trimps': '锋锐脆皮',
    'Weakness (Unbalance': '弱化(不平衡挑战',
    'Chance': '概率',
    'Housing': '住房',
    'Generated Housing': '发生器住房',
    'Territory Bonus': '战斗领土加成',
    'Huge': '巨大',
    'Large (Daily': '大型(日常挑战',
    'Max Trimps': '脆皮上限',
    'Max Food': '食物上限',
    'Max Wood': '木头上限',
    'Max Metal': '金属上限',
    'Food/Wood/Metal': '食物/木头/金属',
    'Amount': '数量',
    'Line Total': '合计',
    'Dragimp Scouting': '脆皮龙收集',
    'Omnipotrimp Bonus': '全能者加成',
    'Improbability Bonus': '乌有者加成',
    'Corruption Bonus': '腐化加成',
    'Completed Quest!': '任务完成奖励！',
    'Extra Map Zones': '额外地图区域',
    'Low Map Level': '低地图等级',
    'Map Loot': '地图劫掠',
    'Looting (perk': '劫掠(特权',
    'Looting II (perk': '劫掠 II(特权',
    'Greed (perk': '贪婪(特权',
    'Motivated (Quagmire': '积极前进(泥淖挑战',
    'Wealthy (Scruffy': '富裕(污污',
    'Karma (Daily': '业力(日常挑战',
    'Spire Rows': '尖塔每行劫掠加成',
    'Void Special': '虚空特化',
    'Heirloom - Food (Staff': '传家宝-食物(权杖',
    'Heirloom - Wood (Staff': '传家宝-木头(权杖',
    'Heirloom - Metal (Staff': '传家宝-金属(权杖',
    'Condenser Tower': '冷凝塔',
    'Condenser Towers': '冷凝塔',
    'Heliumy': '氦奇',
    'Radonculous': '氡丰',
    'Spire Assault Radon': '尖塔突击氡',
    'Domination (Boss Only': '统治(只对Boss生效',
    'Corruption Value': '腐化价值',
    'Per Cell': '每格子',
    'Per Zone': '每区域',
    'Healthy Value': '健康价值',
    'Mutation Total': '变异总和',
    'Stacked Map (Fluffy': '融合地图(绒绒',
    'Stacked Maps (Fluffy': '融合地图(绒绒',
    'Challenge²': '挑战²',
    'Food/Wood/Metal Loot Breakdown': '食物/木头/金属 劫掠明细',
    'Fragments Loot Breakdown': '碎片 劫掠明细',
    'Gems Loot Breakdown': '宝石 劫掠明细',
    'Helium Loot Breakdown': '氦 劫掠明细',
    'Radon Loot Breakdown': '氡 劫掠明细',
    'Long Time': '时间极长',
    'Complete Z': '通过区域',
    'Well Fed': '营养充足',
    'That Turkimp was delicious, and you have leftovers. If you set yourself to gather Food, Wood, or Metal while this buff is active, you can share with your workers to increase their gather speed by': '脆皮火鸡着实量大又美味，尽管您胃口很好，还是吃不完。不过您也有办法，在此加成生效期间，如果您进行采集食物，砍伐木头或者采矿金属，则可以将剩下的脆皮火鸡与工人们分享，使它们相应资源的获取速度增加',
    'Fluffy': '绒绒',
    'Scruffy': '污污',
    'Cruffys': '朽朽',
    'Story': '故事',
    'Loot': '劫掠',
    'Unlocks': '解锁',
    'Combat': '战斗',
    'Story off': '故事 关闭',
    'Loot off': '劫掠 关闭',
    'Unlocks off': '解锁 关闭',
    'Combat off': '战斗 关闭',
    'Message Config': '消息设置',
    'Here you can finely tune your message settings, to see only what you want from each category. Mouse over the name of a filter for more info.': '在此处设置想要看到的消息种类。鼠标停留在消息名称上可以获取更详细的信息。',
    '- Primary': '- 主要',
    '- Log the common loot items: Food, Wood, and Metal.': '- 显示普通战利品的消息：食物，木头和金属。',
    'Primary': '主要',
    '- Secondary': '- 次要',
    '- Log the less common loot items: Gems, Fragments, Territory Bonus, and others.': '- 显示不普通战利品的消息：宝石，碎片，战斗领土加成和其他等。',
    'Secondary': '次要',
    '- Events': '- 活动',
    '- Log drops and messages from temporary events, such as holidays.': '- 显示活动相关的消息，例如节日活动。',
    'Events': '活动',
    '- Exotic': '- 奇异',
    '- Log the rewards granted by Exotic Imports.': '- 显示奇异外皮奖励的消息。',
    'Exotic': '奇异',
    '- Log Helium rewards.': '- 显示氦相关奖励的消息。',
    '- Log Radon rewards.': '- 显示氡相关奖励的消息。',
    '- Repeated': '- 重复',
    '- Log all unlocks that drop more than once per run, such as Speedfarming or Coordination.': '- 显示每次传送时掉落超过一次的升级的消息，例如耕作加速或协作。',
    'Repeated': '重复',
    '- Unique': '- 独特',
    '- Log all unlocks that only drop once per portal, such as Gyms or Miners.': '- 显示每次传送时只掉落一次的升级的消息，例如健身房或矿工。',
    'Unique': '独特',
    '- Trimp': '- 脆皮',
    '- Log all combat messages involving your Trimps.': '- 显示所有与您的脆皮有关的战斗的消息。',
    '- Enemy': '- 敌人',
    '- Log all combat messages involving the enemy.': '- 显示所有与敌人有关的战斗的消息。',
    'Enemy': '敌人',
    '- Essence': '- 精华',
    '- Log all Dark Essence found by scrying.': '- 显示所有使用占卜者阵型找到的黑暗精华的消息。',
    'Essence': '精华',
    '- Magma': '- 岩浆',
    '- Log drops from Magma cells, including Fuel and Magmite.': '- 显示所有岩浆格子掉落的消息，包括燃料和岩浆岩。',
    '- Token': '- 符记',
    '- Log Nature Tokens.': '- 显示自然符记的消息。',
    'Token': '符记',
    '- Cache': '- 储藏箱',
    '- Log drops from Caches in maps.': '- 显示所有地图中储藏箱掉落的消息。',
    'Cache': '储藏箱',
    '- Log Bone drops from Skeletimps.': '- 显示脆皮骷髅骨头掉落的消息。',
    '- Exp': '- 经验值',
    '- Log Exp gained by pets.': '- 显示绒绒或污污获得经验值的消息。',
    'Exp': '经验值',
    'AutoTraps On': '开启自动陷阱捕捉',
    'AutoTraps Off': '关闭自动陷阱捕捉',
    'Build': '建造',
    'Building': '建造中',
    'Nothing in queue...': '队列空无一物……',
    'Queue': '队列',
    'This is a building in your queue, you\'ll need to click "Build" to build it. Clicking an item in the queue will cancel it for a full refund.': '您的队列中有建筑存在，您需要点击 建造 来进行建造。点击队列中的建筑将取消建造并全额返还资源。',
    'All': '全部',
    'Buildings': '建筑',
    'You can only purchase 1 Barn at a time.': '您一次只能购买1个谷仓。',
    'You can only purchase 1 Forge at a time.': '您一次只能购买1个锻造厂。',
    'You can only purchase 1 Shed at a time.': '您一次只能购买1个窝棚。',
    'You can only purchase 1 Antenna at a time.': '您一次只能购买1个气象天线。',
    'Jobs': '工作',
    'Upgrades': '升级',
    '(Research first)': '(先研究吧)',
    'Equipment': '装备',
    'Mastery': '专精',
    'Click to view your masteries.': '点击可以查看您的专精。',
    'Nature': '自然',
    'SA': '尖塔突击',
    'Custom': '自定义',
    'Type a number below to purchase a specific amount. You can also use shorthand such as 2e5 and 200k to select that large number, or fractions such as 1/2 and 50% to select that fraction of your available workspaces.': '在下方输入数字，以设定每次点击购买的数量。您还可以使用例如2e5或200k之类的缩写来输入大数字。',
    'Max of 1,000 for most perks': '对于绝大多数特权来说数字最大为1000',
    'Max': '最大',
    'Buy Max': '购买最大数量',
    'Switching to this option will spend the majority of your resources with each purchase.': '切换为此选项，则每次购买都会使用绝大部分的资源。',
    'Click twice to customize.': '双击以自定义。',
    'No reason to spend everything in one place! Here you can set the ratio of your resources to spend when using the \'Max\' button. Setting this to 0.5 will spend no more than half of your resources per click, etc.': '俗话说的好，不能把鸡蛋放在同一个篮子里！在这里可以设定点击 最大 按钮时使用的资源比例。例如设为0.5，则每次点击至多使用一半资源。',
    'AutoStructure On': '开启自动建造',
    'AutoStructure Off': '关闭自动建造',
    'Your mastery of this world has enabled your Foremen to handle fairly complicated orders regarding which buildings should be built. Click the cog icon on the right side of this button to tell your Foremen what you want and when you want it, then click the left side of the button to tell them to start or stop.': '您深化了对这个世界的掌握，工头们现在可以理解复杂的命令，也就是说，它们可以自己控制建造建筑了。点击右边的齿轮部分可以告诉工头们您想要建造什么，还有什么时候建造什么，点击左边部分可以切换工头们是否自动进行建造。',
    'Configure AutoStructure': '自动建造设置',
    'Here you can choose which structures will be automatically purchased when AutoStructure is toggled on. Check a box to enable the automatic purchasing of that structure, set the dropdown to specify the cost-to-resource % that the structure should be purchased below, and set the \'Up To:\' box to the maximum number of that structure you\'d like purchased': '此处可以设置开启自动建造时建造的建筑类型。选择一个建筑前面的方框以启用它的自动建造，后面的下拉菜单可以用于设置至多使用多少百分比的资源来建造建筑， 上限 输入框里可以限制建造建筑的最大数量',
    '. For example, setting the dropdown to 10% and the \'Up To:\' box to 50 for \'House\' will cause a House to be automatically purchased whenever the costs of the next house are less than 10% of your Food, Metal, and Wood, as long as you have less than 50 houses. \'W\' for Gigastation is the required minimum amount of Warpstations before a Gigastation is purchased.': '。例如，将 小屋 的下拉菜单设为10%，并且在 上限 输入框内输入50，则只要小屋数量低于50，就会在小屋花费不超过当前食物，金属和木头10%的时候立刻建造小屋。千兆核心的 跃迁 可以用于设置达到相应数量的跃迁核心后才购买千兆核心升级。',
    'Up To': '上限',
    'At W': '跃迁',
    'Don\'t buy Nurseries Until Z': '托儿所建造起始区',
    'Apply Percent to All': '设置所有选项的百分比',
    'Toggle All Structures Off': '关闭所有建筑',
    'Toggle All Structures On': '开启所有建筑',
    'Enabling this will cause your Trimps to automatically add a storage building to the queue if you reach max capacity. This will work on and offline if enabled.': '启用后，当资源到达上限时，自动建造相应的存储建筑。在线和离线时都将生效。',
    'AutoStorage On': '开启自动存储',
    'AutoStorage Off': '关闭自动存储',
    'Purchase a Hut, House, Mansion, Hotel, Resort, or Gateway': '建造一个小屋、宅院、豪宅、宾馆、度假村、维度裂隙或汲能设施',
    'AutoJobs On': '开启自动工作',
    'AutoJobs Off': '关闭自动工作',
    'Your continued mastery of this world has enabled you to set rules for automatic job allocation. Click the cog icon on the right side of this button to tell your Human Resourceimps what you want and when you want it, then click the left side of the button to tell them to start or stop.': '您继续深化了对这个世界的掌握，现在可以设置自动分配工作了。点击右边的齿轮部分可以告诉脆皮HR们您想要什么，还有什么时候要什么，点击左边部分可以切换脆皮HR们是否自动分配工作。',
    'Configure AutoJobs': '自动工作设置',
    'Welcome to AutoJobs!': '欢迎来到自动工作！',
    'The left side of this window is dedicated to jobs that are limited more by workspaces than resources. 1:1:1:1 will purchase all 4 of these ratio-based jobs evenly, and the ratio refers to the amount of workspaces you wish to dedicate to each job. You can use any number larger than 0. Ratio-based jobs will be purchased once at the end of every Zone AND once every 30 seconds, but not more often than once every 2 seconds.': '左边的几个选项是基本上只受工作区限制，而不是受资源限制的工作。四项比例都设为1的话，将雇佣相同数量的四种工人，比例意味着每种工作使用的工作区比例。您可以将比例设为任何大于0的数字。这四项工作将在每个区域的末尾，及每30秒雇佣一次工人，但雇佣频率不会超过2秒一次。',
    'The right side of this window is dedicated to jobs limited more by resources than workspaces. Set the dropdown to the percentage of resources that you\'d like to be spent on each job, and add a max amount if you wish (0 for unlimited). Percentage-based jobs are purchased once every 2 seconds.': '右边的几个选项是基本上只受资源限制，而不是受工作区限制的工作。后面的下拉菜单可以用于设置至多使用多少百分比的资源来雇佣工人，并且可以为工人数量设置上限(设为0则无限制)。右边的这些工作每2秒雇佣一次。',
    'Ratio': '比例',
    'Gather on Portal': '传送时采集',
    'Nothing': '无',
    'Hide Help': '隐藏帮助',
    'Firing': '解雇模式',
    'Activate firing mode, turning the job buttons red, and forcing them to fire trimps rather than hire them. The newly unemployed Trimps will start breeding instead of working, but you will not receive a refund on resources.': '开启解雇模式，此按钮将变为红色，此时点击任何工作都将解雇脆皮而非雇佣脆皮。被解雇的脆皮将开始繁殖，您不会获得任何资源返还。',
    'Disable firing mode': '关闭解雇模式',
    'Fire  a  Farmer. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个农民。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Lumberjack. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个伐木工。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Miner. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个矿工。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Scientist. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个科学家。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Trainer. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个训练师。不返还任何资源，只是会挪出工作区。',
    'Fire  an  Explorer. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个探险家。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Geneticist. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个遗传学家。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Magmamancer. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个岩浆巫师。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Meteorologist. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个气象学家。不返还任何资源，只是会挪出工作区。',
    'Fire  a  Worshipper. Refunds no resources, but frees up some workspace for your Trimps.': '解雇一个崇信者。不返还任何资源，只是会挪出工作区。',
    'AutoGold': '自动金色升级',
    'AutoGold Off': '关闭自动金色升级',
    'AutoGold Battle': '金色升级战斗',
    'AutoGold Voidlium': '金色升级虚空氦',
    'AutoGold Voidtle': '金色升级虚空战斗',
    'AutoGold Voidon': '金色升级虚空氡',
    'Thanks to your brilliant Scientists, you can designate Golden Upgrades to be purchased automatically! Toggle between': '多亏您睿智的科学家们，您可以自动购买金色升级了！在以下选项中切换',
    'when you\'re not feeling particularly trusting.': '如果您不太相信这个功能的话，可以选择此项。',
    'when you\'re looking to boost your Perk game. 4/5 Trimps agree that this will increase your overall Helium earned, though none of the 5 really understood the question.': '当您要加速获取特权时可以选择。大部分脆皮都认同这能增加氦获取量，但它们完全不知道原理是什么。',
    'when you\'re looking to boost your Perk game. 4/5 Trimps agree that this will increase your overall Radon earned, though none of the 5 really understood the question.': '当您要加速获取特权时可以选择。大部分脆皮都认同这能增加氡获取量，但它们完全不知道原理是什么。',
    'if your Trimps have a tendency to slack off when you turn your back.': '当您怀疑脆皮们不盯着就开始划水时可以选择，可以增加脆皮们的攻击力和生命值。',
    'which comes in 2 different flavors': '有两种选项',
    'which comes in 2 different flavors, but you can\'t find Void Maps until you\'ve found the Portal Device at least once, so you can\'t use them.': '有两种选项，但您只有在发现过传送门装置后才能开始发现虚空地图，所以无法使用它们。',
    'Voidlium': '虚空氦',
    'Voidon': '虚空氡',
    '- Will entrust your Scientists with purchasing as many Golden Voids as possible (to reach 72%) before switching to Golden Helium, or...': '- 将购买最大数量的金色升级虚空(直到达到72%加成)，然后切换为金色升级氦，又或者……',
    '- Will entrust your Scientists with purchasing as many Golden Voids as possible (to reach 72%) before switching to Golden Radon, or...': '- 将购买最大数量的金色升级虚空(直到达到72%加成)，然后切换为金色升级氡，又或者……',
    'Voidtle': '虚空战斗',
    '- Where your Scientists will again attempt to buy as many Golden Voids as possible (to reach 72%), but will instead switch to Golden Battle afterwards.': '- 将购买最大数量的金色升级虚空(直到达到72%加成)，然后切换为金色升级战斗。',
    'Custom AutoGold': '自定义自动金色升级',
    'Custom AutoGolden': '自定义自动金色升级',
    '- For the advanced Trimp commander/archaeologist who wants even more control.': '- 提供给脆皮高玩和资深考古学家的高级工具。',
    'Ctrl Click to customize your string': '按下Ctrl键再点击可以自定义您的字符串',
    'Please allow 4 seconds for Trimp retraining after clicking this button before any Golden Upgrades are automatically purchased, and don\'t forget to frequently thank your scientists! Seriously, they get moody.': '请在切换了金色升级选项后等待4秒，之后金色升级选项才会生效。另外，不要忘了感谢科学家们！真的，不然它们情绪会很低落的。',
    'Below you\'ll need to enter a string for the Automator to parse. Your string should be separated by commas, and will indicate priority for Golden Upgrade purchases.': '最下方的输入框中，您可以输入一串字符，让自动金色升级进行分析。您输入的字符需要用英文逗号来分隔，并且将决定金色升级的顺序。',
    'An example of a viable string would be \'8v,10b,10r,10b\'.': '可行的字符串可举例如下：“8v,10b,10r,10b”。',
    'Use \'r\' for Golden Radon (interchangeable with \'h\' for Golden Helium), \'b\' for Golden Battle, and \'v\' for Golden Void.': 'r代表金色升级氡(写成h也可以生效，h代表金色升级氦，两者通用)，b代表金色升级战斗，v代表金色升级虚空。',
    'As previously stated, each rule (separated by commas) in this string dictates the priority of that particular upgrade. With the given example string, the Automator will first buy 8 Golden Voids, then 10 Golden Battle, then 10 Golden Radon, then 10 Golden Battle. Requests to buy Golden Void will be skipped above 72%.': '如上所述，字符串中每一条规则(由逗号分隔开来的)决定了特定升级的顺序。如果输入上面举例的字符串，那么自动考古将会先购买8次金色升级虚空，然后购买10次金色升级战斗，然后再购买10次金色升级氡，最后再购买10次金色升级战斗。如果设置超过72%的金色升级虚空，超出的部分将被忽略。注意：请正确输入字符串(只使用上述四个字母，字母前后正确使用数字和逗号，并且数字不可超过999，规则不可超过25条)，否则上方会有红字报错。',
    'AutoPrestige': '自动重铸装备',
    'AutoPrestige Off': '关闭自动重铸',
    'AutoPrestige All': '全部自动重铸',
    'Weapons Only': '只重铸武器',
    'Weapons First': '优先重铸武器',
    'PANTS ONLY': '胖次最好了',
    'Your scientists have come a long way since you first crashed here, and can now purchase prestige upgrades automatically for you with hardly any catastrophic mistakes. They understand the word "No" and the following three commands': '自从您第一次坠落在这个行星以来，科学家们一直在进步，终于，它们可以在几乎不搞出什么灾难性后果的前提下自动重铸装备了。它们可以看懂 关闭自动重铸 以及接下来三个指令',
    'will always purchase the cheapest prestige available first.': '将总是购买最便宜的重铸升级。',
    'as you may be able to guess, will only purchase Weapon prestiges.': '您可能已经猜到了意思，就是只购买武器重铸升级。',
    'will only purchase Weapon prestiges unless the cheapest Armor prestige is less than 5% of the cost of the cheapest Weapon. If there are no Weapon prestiges available, the cheapest Armor prestige will be purchased only if its cost is 5% or less of your total resources.': '除非最便宜的护甲重铸升级花费低于最便宜的武器重铸升级花费的5%，否则只会购买武器重铸升级。如果购买完了所有武器重铸升级，那么只在最便宜的护甲重铸升级花费小于总资源5%时购买它。',
    'AutoUpgrade': '自动升级',
    'AutoUpgrade On': '开启自动升级',
    'AutoUpgrade Off': '关闭自动升级',
    'Your scientists can finally handle some upgrades on their own! Toggling this on will cause most upgrades to be purchased automatically. Does not include equipment prestiges or upgrades that would trigger a confirmation popup.': '您的科学家终于学会自动升级了！开启此项后将自动购买绝大多数升级。不会购买重铸升级或者会跳出提示框确认的升级。',
    'AutoEquip On': '开启自动装备',
    'AutoEquip Off': '关闭自动装备',
    'The Auspicious Presence has blessed your Trimps with the ability to automatically upgrade their own equipment! Click the cog icon on the right side of this button to tell your Trimps what they should upgrade and when to do it, then click the left side of the button to tell them to start or stop.': '多亏了那只瑞兽的恩赐，脆皮们获得了自动升级装备的能力！点击右边的齿轮部分可以告诉脆皮们您想要升级什么，还有什么时候升级什么，点击左边部分可以切换脆皮们是否自动升级装备。',
    'Configure AutoEquip': '自动装备设置',
    'Welcome to AutoEquip!': '欢迎来到自动装备！',
    'Here you can choose which equipment will be automatically purchased when AutoEquip is toggled on. Check a box to enable the automatic purchasing of that equipment type, set the dropdown to specify the cost-to-resource % that the equipment should be purchased below, and set the \'Up To:\' box to the maximum number of that equipment you\'d like purchased (0 for no limit).': '此处可以设置开启自动装备时购买的装备类型。选择一种装备前面的方框将启用它的自动购买，后面的下拉菜单可以用于设置至多使用多少百分比的资源来购买装备， 上限 输入框里可以限制购买装备的最大数量(设为0则无限制)。',
    'For example, setting the dropdown to 10% and the \'Up To:\' box to 50 for \'Shield\' will cause a Shield to be automatically purchased whenever the cost of the next Shield is less than 10% of your Wood, as long as you have less than 50 Shields.': '例如，将 盾牌 的下拉菜单设为10%，并且在 上限 输入框内输入50，则只要盾牌等级低于50，就会在盾牌花费不超过当前木头10%的时候立刻购买盾牌。',
    'Toggle All Armor Off': '关闭所有护甲',
    'Toggle All Armor On': '开启所有护甲',
    'Only Buy From Highest Tier Off': '关闭只升级阶级最大的装备',
    'Only Buy From Highest Tier On': '开启只升级阶级最大的装备',
    'Toggle All Weapons Off': '关闭所有武器',
    'Toggle All Weapons On': '开启所有武器',
    'Respec Masteries': '专精洗点',
    'Click to Respec, refunding all Dark Essence that was spent on Masteries.': '点击开始洗点，返还花费在专精上的所有黑暗精华。',
    'Your first 3 Respecs are free, and you still have 3 left! When there are no more left, each respec will cost 20 Bones.': '前3次洗点是免费的，您还剩下3次机会！用完3次免费洗点机会以后，每次洗点需要花费20骨头。',
    'Your first 3 Respecs are free, and you still have 2 left! When there are no more left, each respec will cost 20 Bones.': '前3次洗点是免费的，您还剩下2次机会！用完3次免费洗点机会以后，每次洗点需要花费20骨头。',
    'Your first 3 Respecs are free, and you still have 1 left! When there are no more left, each respec will cost 20 Bones.': '前3次洗点是免费的，您还剩下1次机会！用完3次免费洗点机会以后，每次洗点需要花费20骨头。',
    'Free!': '免费！',
    'Respec (': '洗点(',
    'Confirm Respec Masteries': '确认专精洗点',
    'This will return all Dark Essence that was spent on Masteries at the cost of 20 bones. Are you sure?': '这将花费20骨头并返还所有花费过的黑暗精华。您确定要这么做吗？',
    'This will return all Dark Essence that was spent on Masteries, and will use one of your remaining 3 free Mastery Respecs.': '这将返还所有花费过的黑暗精华，但也将消耗3次免费洗点机会中的1次。',
    'This will return all Dark Essence that was spent on Masteries, and will use one of your remaining 2 free Mastery Respecs.': '这将返还所有花费过的黑暗精华，但也将消耗2次免费洗点机会中的1次。',
    'This will return all Dark Essence that was spent on Masteries, and will use your remaining 1 free Mastery Respec.': '这将返还所有花费过的黑暗精华，但也将消耗最后1次免费洗点机会。',
    'Your next mastery costs': '下一个专精花费',
    'No Formation': '无阵型',
    'Clear your formations, return to normal stats, and derp around the battlefield. (Hotkeys: X or': '取消阵型，恢复正常状态，在战场上瞎转悠。(快捷键： X 或',
    'Heap Formation': '堆叠阵型',
    'Trimps gain 4x health but lose half of their attack and block. (Hotkeys: H or': '脆皮生命值变为4倍，但减少一半的攻击力和格挡。(快捷键： H 或',
    'Dominance Formation': '支配阵型',
    'Trimps gain 4x attack but lose half of their health and block. (Hotkeys: D or': '脆皮攻击力变为4倍，但减少一半的生命值和格挡。(快捷键： D 或',
    'Barrier Formation': '屏障阵型',
    'Trimps gain 4x block and 50% block pierce reduction but lose half of their health and attack. (Hotkeys: B or': '脆皮格挡变为4倍，并且使敌人的格挡穿透伤害减少50%，但减少一半的生命值和攻击力。(快捷键： B 或',
    'Scryer Formation': '占卜者阵型',
    'Trimps lose half of their attack, health and block but gain 2x resources from loot (not including Helium) and have a chance to find Dark Essence above Z180 in the world. This formation must be active for the entire fight to receive any bonus from enemies, and must be active for the entire map to earn a bonus from a Cache.': '脆皮减少一半的攻击力，生命值和格挡，但非氦资源获取量变为2倍，并且在区域180以上的世界区域有概率发现黑暗精华。此阵型必须在一场战斗中从战斗开始持续开启到战斗结束才可以从敌人身上获得额外的资源，同时必须在整张地图中持续开启到完成地图才能使地图最后的储藏箱获得额外加成。',
    'Hotkeys: S or': '快捷键： S 或',
    'Wind Formation': '风阵型',
    'Hotkeys: W or': '快捷键： W 或',
    'You recently switched to Scryer Formation and will': '您才刚切换到占卜者阵型， ',
    'You recently switched to Wind Formation and will': '您才刚切换到风阵型， ',
    'not': '不',
    'earn a bonus from this enemy.': '会在这个敌人身上获得加成。',
    'You will earn a bonus from this enemy!': '您可以在这个敌人身上获得加成！',
    'You will earn a bonus from the Cache at the end of this map!': '您可以从地图最后的储藏箱获得加成！',
    'You completed some of this map outside of Scryer Formation, and will': '您在地图中切换到了占卜者阵型以外的阵型，因此',
    'You completed some of this map outside of Wind Formation, and will': '您在地图中切换到了风阵型以外的阵型，因此',
    'earn a bonus from the Cache.': '会从储藏箱获得加成。',
    'You will earn bonus Helium at the end of this map from Scryhard II!': '由于努力占卜 II的效果，您可以从地图最后获得氦加成！',
    'earn a bonus to Helium from Scryhard II': '会因努力占卜 II的效果获得氦加成',
    'DMG': '攻击力',
    'Weak!': '虚弱!',
    'Crit!': '暴击!',
    'CRIT!': '暴击!',
    'CRIT!!': '暴击!!',
    'CRIT': '暴击',
    'BLK': '格挡',
    'Dodge!': '闪避!',
    'MagnetoShriek': '电磁尖啸',
    'MagnetoShriek is currently active and will fire on the next Improbability.': '电磁尖啸已经激活，将对下个乌有者发射。',
    'MagnetoShriek is NOT active and will not fire.': '电磁尖啸未激活，将不会发射。',
    'Crushing Blows': '粉碎之击',
    'Your current health is higher than your block, making you vulnerable to critical strikes from your enemies. Better fix that...': '您目前的生命值高于格挡，敌人的攻击可能造成暴击。最好做点什么……',
    'Void Attack': '虚空突击',
    'This Bad Guy attacks twice - once before you, and once again after you.': '此敌人每次攻击两下-在您攻击前和攻击后各攻击一下。',
    'Void Gas': '虚空毒气',
    'This map is reducing the repopulation speed of your Trimps by 80%.': '此地图减少脆皮80%的繁殖速度。',
    'Void Strength': '虚空暴击',
    'This Bad Guy has a 25% chance to crit you for 400% extra damage.': '此敌人有25%的概率额外造成400%的伤害。',
    'Void Bleed': '虚空血祭',
    'Every time this Bad Guy attacks, you will lose an additional 20% of your': '此敌人每次攻击时，使您额外失去20%的 ',
    'current': '当前',
    'health.': '生命值。',
    'Poisoned': '中毒',
    'Chilled': '冰冻',
    'Breezy': '风卷',
    'Domination: Dominating': '统治：支配者',
    'This Bad Guy is Dominating! It has 2.5x attack, 7.5x health, and heals for 5% of its max health after each attack. However, it will also drop 3x Helium!': '此敌人是支配者！它的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，但它会掉落三倍的氦！',
    'Domination: Weak': '统治：弱者',
    'This Bad Guy is having its power siphoned by an even worse Bad Guy! It deals 90% less damage and has 90% less health.': '此敌人的力量被支配者吸收了！它的生命值和攻击力减少了90%。',
    'Emptiness': '空白',
    'This enemy is missing an effect thanks to Fluffy! It will still drop 7.5% of the helium you would normally get from completing this Zone.': '多亏了绒绒，此敌人失去了一项能力！尽管如此，它仍然会掉落氦，数值为通过此区域所得氦的7.5%。',
    'This enemy is missing an effect thanks to Fluffy! It will still drop 15% of the helium you would normally get from completing this Zone.': '多亏了绒绒，此敌人失去了一项能力！尽管如此，它仍然会掉落氦，数值为通过此区域所得氦的15%。',
    'Corrupted Stamina': '腐化耐力',
    'Corrupted Precision': '腐化精准',
    'Corrupted Sharpness': '腐化锋锐',
    'Corrupted Strength': '腐化力量',
    'Corrupted Toughness': '腐化坚韧',
    'Corrupted Agility': '腐化敏捷',
    'Obsidian': '黑曜石',
    'This enemy is rock solid, and there is no way to get past. This Zone is even more rocky and solid than anything you\'ve seen before. You don\'t think there\'s any way to get past for now.': '此敌人坚如磐石，想要通过这里简直是天方夜谭。此区域的坚硬程度超过了之前所有区域。看起来您的征途到此为止了。',
    'This enemy is rock solid, and there is no way to get past. Time to go to the Radon Universe and find a way to melt these Zones!': '此敌人坚如磐石，想要通过这里简直是天方夜谭。前往氡之宇宙吧，那里有熔化这些区域的方法。',
    'This enemy is rock solid, and there is no way to get past. Fluffy suggests that you find a way to get him to Evolution 8 Level 10 as quickly as possible so he can help you melt these Zones!': '此敌人坚如磐石，想要通过这里简直是天方夜谭。绒绒建议您尽快将它升级到进化次数8等级10，这样它就能帮您熔化这些区域了！',
    'This enemy is missing an effect thanks to Fluffy! It will still drop 45% of the helium you would normally get from completing this Zone.': '多亏了绒绒，此敌人失去了一项能力！尽管如此，它仍然会掉落氦，数值为通过此区域所得氦的45%。',
    'Healthy and Tireless': '健康不倦',
    'Healthy and Precise': '健康精准',
    'Healthy and Sharp': '健康锋锐',
    'Healthy and Strong': '健康强壮',
    'Healthy and Tough': '健康坚韧',
    'Void Corruption': '虚空腐化',
    'Map Corruption': '地图腐化',
    'Superheated': '过热',
    'This Omnipotrimp is Superheated, and will explode on death.': '此全能者过热了，死亡时会发生爆炸。',
    'Pierce': '格挡穿透',
    'Fast': '快速',
    'This Bad Guy is fast and attacks first': '此敌人速度很快，永远抢先攻击',
    'This Bad Guy is electric and stacks a debuff on your Trimps': '此敌人带电，会对您的脆皮施加减益',
    'Your Trimps are determined to succeed. They gain 50% attack and earn double resources from all sources.': '您的脆皮们决心取得胜利。它们的攻击力增加了50%，资源获取量变为双倍。',
    'Unliving': '亡灵化',
    'Your Trimps look perfectly normal and healthy now, which is not what you want in this dimension.': '您的脆皮们看起来完全正常，非常健康，在此维度中这可不是件好事情。',
    'The Bad Guys in this dimension seem to be way more dead than your Trimps!': '敌人看起来比您的脆皮们更亡灵！',
    'Your Trimps are starting to look more lively and slow down, but at least they\'re still fairly pale.': '您的脆皮们开始有生气了，它们的动作开始慢了下来，好在它们面色还算苍白。',
    'Your Trimps are looking quite dead, which is very healthy in this dimension. You\'re doing a great job!': '您的脆皮们已经面无皮色了，在此维度中是相当健康的情况。您干得很好！',
    'Electrified': '触电',
    'Your Trimps are dealing double damage, thanks to the ': '您的脆皮现在可以造成双倍伤害，多亏了',
    'This Bad Guy is nice and plump from eating Trimps. Increases attack damage by 25% per stack': '此敌人由于吃掉脆皮变得更肥了。每层增加25%攻击力',
    'Sugar Rush': '甜蜜冲刺',
    'Trimps are not at all used to sugar, but they seem to be really enjoying it!': '脆皮们还没习惯吃糖，但它们看起来很喜欢那甜味！',
    'World Info': '世界信息',
    'Scaling': '轮转',
    'Fight': '战斗',
    'Send your poor Trimps to certain doom in the battlefield. You\'ll get cool stuff though, they\'ll understand. (Hotkey: F': '将可怜的脆皮们送入战场，迎接它们注定的结局。它们一定能理解您的，因为这样您能获得好东西。(快捷键：F',
    'AutoFight On': '开启自动战斗',
    'AutoFight Off': '关闭自动战斗',
    'AutoFight': '自动战斗',
    'Allow the Trimps to start fighting on their own whenever their town gets overcrowded (Hotkey: A': '当脆皮们塞满城镇时，让它们自己开始战斗(快捷键：A',
    'Maps': '地图',
    'Travel to the Map Chamber. Maps are filled with goodies, and for each max level map you clear you will gain a 20% stacking damage bonus for that Zone (stacks up to 10 times). (Hotkey: M': '进入地图界面。地图中有很多好东西，每通过一张等级等于当前区域的地图，在当前区域就获得20%的伤害奖励(相互叠加，上限为10次)。(快捷键：M',
    'Go back to the World Map. (Hotkey: M': '回到世界上。(快捷键：M',
    'Abandon Soldiers': '放弃士兵',
    'World': '世界',
    'Maps (': '地图 (',
    'Void Maps (': '虚空地图 (',
    'Back': '返回',
    'Configure Maps': '地图设置',
    'Customize your settings for running maps!': '设置运行地图的相关选项！',
    'Repeat Map': '重复地图',
    'Repeat On': '开启重复',
    'Repeat Off': '关闭重复',
    'Allow the Trimps to find their way back to square 1 once they finish without your help. They grow up so fast.': '允许脆皮们在自己完成地图后回到第1个格子。它们繁殖得可真快。',
    'If you are': '如果您 ',
    'repeating, your current group of Trimps will not be abandoned after the map ends. (Hotkey: R': '是开启了重复，那么当前的军队将不会在完成地图后被放弃。(快捷键：R',
    'Heirlooms': '传家宝',
    'Finish Daily': '完成日常',
    'Clicking': '点击下方的 ',
    'Finish': '完成',
    'below will end your daily challenge and you will be unable to attempt it again. You will earn': '按钮将结束日常挑战，您将永远无法再次进行那一天的日常挑战。您将获得',
    'Exit Spire': '退出尖塔',
    'This will exit the spire, and you will be unable to re-enter until your next portal. Are you sure?': '您将退出尖塔，直到下次传送前无法再进入尖塔。您确定要这么做吗？',
    'Show/Hide Map Config': '显示/隐藏地图设置',
    'Click this to collapse/expand the map configuration options.': '点击以切换显示/隐藏地图设置选项。',
    'Map Preset': '地图预设',
    'You can save up to 5 different map configurations to switch between at will. The most recently selected setting will load each time you enter your map chamber.': '您最多可以保存5套不同的地图设置来随时进行切换。最近一次选择的设置将在进入地图界面时自动读取。',
    'Save Map Settings': '保存地图设置',
    'Click this to save your current map configuration settings to your currently selected preset. These settings will load by default every time you come in to the map chamber or select this preset.': '点击以将当前的地图设置保存到当前选择的地图预设。在进入地图界面或选择预设时将默认读取这些地图设置。',
    'Reset Map Settings': '重置地图设置',
    'Click this to reset all settings to their default positions. This will not clear your saved setting, which will still be loaded next time you enter the map chamber.': '点击以重置所有地图设置为默认值。这么做并不会使地图预设中的地图设置被清空，下次进入地图界面时仍然会读取。',
    'Recycle All': '全部回收',
    'Recycle all maps below the selected level.': '回收低于当前选择等级的所有地图。',
    'Mass Recycle': '大量回收',
    'You are about to abandon this Void Map, which will cause you to lose all current progress in this map. Are you sure?': '您将放弃此虚空地图，失去所有该地图中的进度。您确定要这么做吗？',
    'Abandon Void Map': '放弃虚空地图',
    'You are about to abandon The Black Bog, which will cause you to lose all current progress in this map. Are you sure?': '您将放弃黑色泥沼，失去所有该地图中的进度。您确定要这么做吗？',
    'Abandon Black ': '放弃黑色',
    'This slider allows you to fine tune the map Loot modifier. Moving this slider from left to right will guarantee more loot from the map, but increase the cost.': '此滑块可以用于微调地图劫掠加成。将滑块从左往右移动，将使劫掠加成更容易变高，但同时也增加碎片花费。',
    'This slider allows you to fine tune the map Size modifier. Moving this slider from left to right will guarantee a smaller map, but increase the cost.': '此滑块可以用于微调地图尺寸。将滑块从左往右移动，将使地图尺寸更容易变小，但同时也增加碎片花费。',
    'Difficulty': '难度',
    'This slider allows you to fine tune the map Difficulty modifier. Moving this slider from left to right will guarantee an easier map, but increase the cost.': '此滑块可以用于微调地图难度。将滑块从左往右移动，将使地图难度更容易降低，但同时也增加碎片花费。',
    'Biome': '生物群落',
    'If you\'re looking to farm something specific, you can select the biome here. Anything other than random will increase the cost of the map.': '如果您想要刷什么特定的资源，您可以在这里选择生物群落。除随机以外的其他选项都将增加地图的碎片花费。',
    '- Contains a lot of Metal': '- 含有许多金属',
    '- A great place to find some Wood': '- 可以发现不少木头',
    '- Just filled with food to catch': '- 食物可谓是唾手可得',
    '- Ancient Gem mines': '- 远古的宝石矿',
    '- 25% extra loot and a random assortment of resources': '- 劫掠加成额外增加25%，富含各种资源',
    '- 100% extra loot in Universe 2, 50% extra Herbs. Mimics Mountains on Z6, Forest on Z7, Sea on Z8, Depths at Z9, Gardens at Z10. Continues on rotating every World Zone.': '- 在宇宙2中劫掠加成额外增加100%，额外获得50%的药草。按照以下方式来决定资源类型：区域6为山脉，区域7为森林，区域8为大海，区域9为深渊，区域10为花园，之后继续轮转下去。',
    'Random': '随机',
    'Farmlands': '农场',
    'Special Modifier': '特殊修饰符',
    'Select a special modifier to add to your map from the drop-down below! You can only add one of these to each map. The following bonuses are currently available': '请从下拉菜单中选择要使用的特殊修饰符！每张地图只能使用一个特殊修饰符。目前可以使用以下的特殊修饰符',
    'Fast Attacks (FA': '快速攻击 (FA',
    'Large Cache (LC': '大储藏箱 (LC',
    'Small Savory Cache (SSC': '小美味储藏箱 (SSC',
    'Small Wooden Cache (SWC': '小木头储藏箱 (SWC',
    'Small Metal Cache (SMC': '小金属储藏箱 (SMC',
    'Small Research Cache (SRC': '小研究储藏箱 (SRC',
    'Prestigious (P': '重铸 (P',
    'Huge Cache (HC': '巨大储藏箱 (HC',
    'Large Savory Cache (LSC': '大美味储藏箱 (LSC',
    'Large Wooden Cache (LWC': '大木头储藏箱 (LWC',
    'Large Metal Cache (LMC': '大金属储藏箱 (LMC',
    'Large Research Cache (LRC': '大研究储藏箱 (LRC',
    'No Modifier': '无修饰符',
    'Fast Attacks': '快速攻击',
    '- All attacks in this map happen 100ms faster.': '- 此地图中，所有攻击都快100毫秒。',
    'Does not stack with Hyperspeed II': '无法与风驰电掣 II叠加',
    'Large Cache': '大储藏箱',
    '- Earn 20 seconds of production for either food, wood, or metal at random each time you complete this map.': '- 完成地图时，获得食物，木头和金属三种资源中随机一种20秒的产量。',
    'Small Savory Cache': '小美味储藏箱',
    '- Earn 10 seconds of food production each time you complete this map.': '- 完成地图时，获得10秒的食物产量。',
    'Small Wooden Cache': '小木头储藏箱',
    '- Earn 10 seconds of wood production each time you complete this map.': '- 完成地图时，获得10秒的木头产量。',
    'Small Metal Cache': '小金属储藏箱',
    '- Earn 10 seconds of metal production each time you complete this map.': '- 完成地图时，获得10秒的金属产量。',
    'Small Research Cache': '小研究储藏箱',
    '- Earn 10 seconds of science production each time you complete this map.': '- 完成地图时，获得10秒的科学点产量。',
    'Prestigious': '重铸',
    '- This map can hold two different equipment prestige upgrades, if two are available.': '- 只要未获取的重铸升级不少于两个，从此地图就可以获得两个重铸升级。',
    'Huge Cache': '巨大储藏箱',
    '- Earn 40 seconds of production for either food, wood, or metal at random each time you complete this map.': '- 完成地图时，获得食物，木头和金属三种资源中随机一种40秒的产量。',
    'Large Savory Cache': '大美味储藏箱',
    '- Earn 20 seconds of food production each time you complete this map.': '- 完成地图时，获得20秒的食物产量。',
    'Large Wooden Cache': '大木头储藏箱',
    '- Earn 20 seconds of wood production each time you complete this map.': '- 完成地图时，获得20秒的木头产量。',
    'Large Metal Cache': '大金属储藏箱',
    '- Earn 20 seconds of metal production each time you complete this map.': '- 完成地图时，获得20秒的金属产量。',
    'Large Research Cache': '大研究储藏箱',
    '- Earn 20 seconds of science production each time you complete this map.': '- 完成地图时，获得20秒的科学点产量。',
    'Next modifier unlocks at Z': '下个修饰符解锁区域为区域',
    'Perfect Sliders': '完美滑块',
    'This option takes all of the RNG out of map generation! If sliders are maxxed and the box is checked, you have a 100% chance to get a perfect roll on Loot, Size, and Difficulty.': '此选项可以使制造地图时的随机因素彻底消除！如果所有滑块都滑到最大，且此项被选中，那么您一定可以在劫掠，尺寸和难度三项上获得最好的结果。',
    'You can only choose this setting if the sliders for Loot, Size, and Difficulty are at the max.': '您只能在劫掠，尺寸和难度的三个滑块都滑到最大时选择此项。',
    'Extra Zones': '额外区域',
    'Create a map up to 10 Zones higher than your current Zone number. This map will gain +10% loot per extra level (compounding), and can drop Prestige upgrades higher than you could get from a world level map.': '最高可以制造高于当前区域10级的地图。每高1级，此地图就获得10%的劫掠加成(相互叠乘)，可以掉落更高阶级的装备。',
    'A green background indicates that you could afford a map at this Extra Zone amount with your selected Special Modifier and Perfect Sliders. A gold background indicates that you could afford that map with your selected Special Modifier and some combination of non-perfect sliders.': '如果区域背景色为绿色，意味着您可以制造带有您选择的特殊修饰符和完美滑块的地图。如果区域背景色为金色，意味着您只能制造带有您选择的特殊修饰符，但不带有完美滑块的地图。',
    'You can only use this setting when creating a max level map.': '您只能在制造等级等于世界区域数的地图时使用此设置。',
    'Unlock at Z': '解锁区域：',
    'Select a Map!': '选择一张地图！',
    'Run Map': '运行地图',
    'Recycle Map': '回收地图',
    'Abandon Map': '放弃地图',
    'Void Map': '虚空地图',
    'This Map will scale in level to your current Zone Number, enemies have a random buff, and the boss at the final cell will drop Helium. This map will disappear after it is completed once, and leaving the map will reset its progress.': '此地图的等级永远等于您当前区域，敌人将获得随机增益，最后一格的首领敌人将掉落氦。通过此地图以后它将消失，退出地图将重置此地图中的进度。',
    'This Map will scale in level to your current Zone Number, enemies have a random buff, and the boss at the final cell will drop Radon. This map will disappear after it is completed once, and leaving the map will reset its progress.': '此地图的等级永远等于您当前区域，敌人将获得随机增益，最后一格的首领敌人将掉落氡。通过此地图以后它将消失，退出地图将重置此地图中的进度。',
    'This Map will scale in level to your current Zone Number. Completing this map will reduce your stacks of Exhausted and Motivated by 1.': '此地图的等级永远等于您当前区域，通过此地图以后将使疲惫不堪和积极前进的层数各减少1层。',
    'Current Heirloom Drop Rates': '当前区域传家宝掉率',
    '- Next Rarity Increase at Z': '- 稀有度下次提升发生在区域',
    'Common': '普通',
    'Uncommon': '罕见',
    'Rare': '稀有',
    'Epic': '史诗',
    'Legendary': '传奇',
    'Magnificent': '华丽',
    'Ethereal': '超凡',
    'Magmatic': '岩浆',
    'Plagued': '天灾',
    'Radiating': '辐射',
    'Hazardous': '厄劫',
    'Items': '物品',
    'Resource': '资源',
    'Continue': '继续',
    'Achievements': '成就',
    'You are dealing': '您可以多造成',
    '% extra damage': '%伤害',
    'better get some more achievements': '最好多获得一些成就',
    'you\'d do fine with a few more achievements': '再来一点成就会更好',
    'but you wish you had a few more achievements': '您希望再多获得一些成就',
    'your achievement game shows promise': '您的成就显露出了希望',
    'on your path to achievement': '在通往成就的路上',
    'thanks to your achievements': '多亏了您的成就',
    'thanks to your bounty of achievements': '多亏了您的大量成就',
    'must be all those achievements': '一定是因为这些成就',
    'you are one with the achievements': '您是有成就之人',
    'and you water your achievements daily': '您每天给成就浇水',
    'your Trimps are mighty impressed': '您的脆皮对此印象深刻',
    'your achievements are mind blowing': '您的成就令人振奋',
    'You wake up, achieve, then sleep': '您醒来，您成就，您睡去',
    'you have achievement in your blood': '成就在您的血脉中流动',
    'your achievements are beyond mortal comprehension': '您的成就已经超凡脱俗了',
    'Trimps far and wide tell stories of your achievement': '脆皮在到处传颂您的成就故事',
    'you have achieved achievement': '您已经成就了成就',
    'everything you touch turns to achievement': '您已经点石成就了',
    'your achievements have achieved achievement': '您的成就已经成就了成就',
    'news of your achievement spreads throughout the galaxy': '您成就的新闻传遍星空',
    'achievements bend to your will': '成就服从您的意志',
    'your achievements transcend reality': '您的成就已经超越现实了',
    'word of your achievement spreads throughout the universe': '您成就的只言片语传遍了整个宇宙',
    'everyone else is super jealous': '其他所有人都超级羡慕您',
    'the achievements of your achievements have achieved achievement': '您成就的成就已经成就了成就',
    'your achievements have gained sentience': '您的成就已经获得了知觉',
    'everyone else just stays home': '其他所有人只是待在家里了',
    'you appear if someone says \'Achievement\' 3 times in a mirror': '如果有人对着镜子喊三声 成就 ，您就会出现',
    'news of your achievement spreads throughout the multiverse': '您成就的新闻传遍了整个多元宇宙',
    '. It\'s actually over': '。实际上它已经超过',
    'everyone else is legitimately impressed': '其他所有人都对此印象深刻',
    'your great great grand achievements have achieved achievement': '您伟大的伟大成就已经成就了成就',
    'If achievement was a game, you would win': '如果成就是一个游戏，那么您已经赢了',
    '. You achieved enlightenment, then your enlightenment started achieving': '。您获得了启迪，然后您的启迪开始成就了',
    'your Trimps tell all their friends how cool you are': '您的脆皮告诉它们的朋友您有多棒',
    'you now gain your sustenance from achievements': '只要有成就的地方就有您的存在',
    'your achievements bring all the Trimps to the Barn': '您的成就让所有脆皮们陷入了狂欢',
    'Click on an Achievement on this screen to track it!': '点击任一成就以追踪进度！',
    'Export': '导出',
    'This is your save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的存档字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'Got it': '知道了',
    'Copy to Clipboard': '复制到剪贴板',
    'Download as File': '下载文件',
    'Import': '导入',
    'Import your save string! It\'ll be fun, I promise.': '导入存档字符串！我保证这会很有趣的。',
    'Import From PlayFab': '从PlayFab导入',
    'Stats': '统计',
    'Statistics!': '统计!',
    'Trimps Info': '游戏相关信息',
    'Need help, found a bug or just want to talk about Trimps? Check out the': '您是否需要帮助，发现了BUG，或者想聊聊？无论是哪种情况，您都可以进入',
    '/r/Trimps SubReddit': 'Reddit上的/r/Trimps子板块',
    'or come hang out in the new': '或者新的',
    'Trimps Official Discord': '脆皮官方Discord频道',
    'If you want to read about or discuss the finer details of Trimps mechanics, check out the': '如果您想要获取或者是讨论脆皮的相关机制，可以查看',
    'community-created Trimps Wiki!': '由玩家社区创建的脆皮Wiki！',
    'If you need to contact the developer for any reason,': '如果您出于任何原因需要与游戏开发者联系，',
    'click here to send a message on Reddit': '可以点击此处以在Reddit上发送消息',
    'or find Greensatellite in the Trimps Discord.': '或者是在脆皮官方Discord频道中联系Greensatellite。',
    'If you would like to make a donation to help support the development of Trimps, you can now do so with PayPal! If you want to contribute but can\'t afford a donation, you can still give back by joining the community and sharing your feedback or helping others. Thank you either way, you\'re awesome!': '如果您想要捐款赞助脆皮的开发，您可以通过PayPal来完成！如果您想要做出一些贡献但囊中羞涩，您也可以加入上述的社区来分享您的意见或者是帮助他人。不管是哪种方式，都很感谢您，您是最棒的！',
    'Achieves': '成就',
    'Settings': '设置',
    'Browse All': '查看全部选项',
    'Choose a Category Below, or Search for a Setting/Keyword': '选择一个类别，或者搜索一个设置/关键字',
    'New': '新',
    'General': '常规',
    'Performance': '性能',
    'Quality of Life': '生活质量',
    'Pop-ups and Alerts': '弹出窗口和提醒',
    'Layout': '布局',
    'Other': '其它',
    'Back to Search': '返回搜索',
    'YOUR GAME IS PAUSED!': '游戏已暂停！',
    'Click the flashing timer in the bottom right to unpause.': '点击右下方闪烁的计时器来取消暂停。',
    'Click the flashing timer in the bottom right, or press the spacebar to unpause.': '点击右下方闪烁的计时器，或者按下空格键来取消暂停。',
    //主界面结束
    //建筑相关
    'Trap': '陷阱',
    'Barn': '谷仓',
    'Increases your maximum food by 100%.': '将食物上限增加100%。',
    'Shed': '窝棚',
    'Increases your maximum wood by 100%.': '将木头上限增加100%。',
    'Forge': '锻造厂',
    'Increases your maximum metal by 100%.': '将金属上限增加100%。',
    'Hut': '小屋',
    'House': '宅院',
    'Mansion': '豪宅',
    'Hotel': '宾馆',
    'Resort': '度假村',
    'Gateway': '维度裂隙',
    'Wormhole': '虫洞',
    'This building costs helium to create.': '此建筑需要花费氦来进行建造，请注意。',
    'which cost helium': '它需要花费氦来建造',
    '. Make sure you can earn back what you spend!': '。请确保您能够赚回花费的氦！',
    'Collector': '汲能设施',
    'Hub': '中心枢纽',
    'Automatically unlocks on reaching Zone 60 in Universe': '自动解锁于到达区域60于宇宙',
    'Build a Smithy to help produce better Equipment for your Trimps. Each Smithy in your village increases Trimp Attack and Health by 25% (compounding).': '建造铁匠铺，以帮助制造更好的装备。每个铁匠铺可以使脆皮的攻击力和生命值增加25%(效果叠乘)。',
    'Tribute': '贡品',
    'Pay a tribute of food to your Dragimp, increasing his appetite and his speed. He will gather gems 5% faster (compounding).': '向您的脆皮龙献上贡品，增加它的食欲和速度。它收集宝石的速度将加快5%(效果叠乘)。',
    'Magma is generally not conductive to a healthy Nursery environment. Each Nursery will still increase Trimps per second from breeding by 1% (compounding), but 10% of your active Nurseries will shut down each Zone as the Magma moves closer. Safety first!': '岩浆环境并不适合托儿所。每个托儿所仍然可以增加1%繁殖速度(效果叠乘)，但通过一个区域后，当前数量10%的托儿所将因岩浆逼近而被迫关闭。安全为先！',
    'Construct a gem-powered nursery, where baby Trimps can grow up faster. Increases Trimps per second from breeding by 1% (compounding).': '建造一个宝石供能的托儿所，使脆皮宝宝们成长的更快。每个托儿所可以增加1%繁殖速度(效果叠乘)。',
    'Microchip': '微型芯片',
    'Unlocks a Scientist level, upgrading your portal and': '解锁一级科学家，升级传送门并',
    'Unlocks another Scientist level, upgrading your portal and': '解锁另一级科学家，升级传送门并',
    'allowing you to start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏',
    'allowing you to start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏',
    'allowing you to start with full Trimps and 200% player efficiency every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏',
    'allowing you to earn two levels of each prestige upgrade per map. This bonus will apply every time you Portal to this Universe': '使您在这个宇宙中每次使用传送门后，每张地图可以获得两级装备重铸升级',
    'allowing you to permanently increase all Radon found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you Portal to this Universe': '使您的氡获取量每层区域永久比上一层区域多0.5%。且在这个宇宙中每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏',
    'Microchips attach directly to your Portal Device, and only ever have to be purchased once. Your Portal Device has room for 5 total Microchips.': '微型芯片与传送门装置绑定，只需购买一次即可永久生效。传送门装置一共可以容纳5颗芯片。',
    'Antenna': '气象天线',
    'Build an antenna for your Meteorologists to use in their meteorological duties. Each Antenna increases the bonus granted per Meteorologist by a flat 0.05% (20 Antennas would double their bonus), but only 1 Antenna can be built for every 5 Zones completed above Z100 in Universe 2 on your highest run ever. Thanks to the extra-dimensional origin of the Antenna design, these Antennas persist in the world when you use your Time Portal!': '为气象学家们建造一个气象天线用于观测。每个气象天线可以使每个气象学家的加成数值增加0.05%(20个气象天线将使加成数值变为2%，即原始数值的两倍)，但气象天线的数量上限受到宇宙2最高通过区域的限制。每在宇宙2超过区域100五个区域，气象天线的数量上限就加1。由于气象天线的超维设计，它可以在您传送后仍然存在！',
    'Once 5 antennas have been built, your Trimps can use the new advanced weather data to increase the yield of crops, granting 50% of the Meteorologist\'s bonus percentage to Food income as well.': '当建造了5个气象天线以后，您的脆皮们可以使用相应的气象数据来增加食物产量，使气象学家加成的一半也对食物产量生效。',
    'Once 10 Antennas have been built, your Soldiers can use the data to always properly dress for the weather, granting 50% of the Meteorologist\'s bonus percentage to Soldier Health.': '当建造了10个气象天线以后，士兵们可以根据气象数据来合理选择护甲，使气象学家加成的一半也对士兵生命值生效。',
    'Once 15 Antennas have been built, the network will be strong enough to locate rich mineral deposits all over the planet, granting 50% of the Meteorologist\'s bonus percentage to Mining income!': '当建造了15个气象天线以后，气象网络将强化到可以用于定位矿脉，使气象学家加成的一半也对金属产量生效！',
    'Once 20 Antennas have been built, the network becomes so strong that all non-Radon Meteorologist bonuses are increased to 75% of the Meteorologist\'s bonus! For each 5 Antennas built after 20, the Meteorologists\' non-Radon bonuses are increased by another 25%.': '当建造了20个气象天线以后，气象网络将更加强化，使之前所有非氡的加成从气象学家加成的一半变为气象学家加成的75%！且在20个气象天线后，每建造5个气象天线，该加成数值再增加25%(25个气象天线将使加成数值变为100%)。',
    'Laboratory': '实验室',
    'Build a giant Laboratory that Cruffys can use for research. Each Laboratory constructed increases Cruffys\' Exp gain by 10% (compounding), but will pollute the world with toxic waste and research chemicals, increasing all Enemy attack and health by 3.5% (compounding).': '建造一个巨型实验室以供朽朽进行研究。每个实验室可以使朽朽经验值获取量增加10%(效果叠乘)，但是同时，也会向大气排放有害物质，从而使所有敌人的攻击力和生命值增加3.5%(效果叠乘)。',
    //建筑相关结束
    //工作相关
    'Farmer': '农民',
    'Lumberjack': '伐木工',
    'Each Geneticist will increase the health of each Trimp by 1% (compounding), but slows the rate at which baby Trimps grow by 2% (compounding).': '每个遗传学家使脆皮的生命值增加1%(效果叠乘)，但使脆皮宝宝的成长速度减少2%(效果叠乘)。',
    'I\'m your Geneticistassist! I\'ll hire and fire Geneticists until your total breed time is as close as possible to the target time you choose. I will fire a Farmer, Lumberjack, or Miner at random if there aren\'t enough workspaces, I will never spend more than 1% of your food on a Geneticist, and you can customize my target time options in Settings': '我是您的遗传学家助手！我会调整遗传学家数量，直到您的繁殖计时尽可能接近您的目标时间。如果工作区不足，我将随机解雇一名农民，伐木工或者矿工，我至多只会使用总食物1%的食物来雇佣遗传学家，您可以在设置中自定义我的目标时间',
    'or by holding Ctrl and clicking me': '，或者是按下Ctrl键再点击我',
    '. I have uploaded myself to your portal and will never leave you.': '。我已与您的传送门装置融为一体，将永远不离不弃。',
    'Disabled': '关闭',
    'Train a Magmamancer to craft pickaxe heads infused with Gems and Magma, custom for the unique rocks in each Zone. The more Magmamancers you have and the longer you spend in one Zone, the more Metal your Trimps will be able to gather!': '训练一个岩浆巫师来锻造加入宝石和岩浆的镐头，根据每个区域岩石的不同情况来定制。岩浆巫师越多，或者在当前区域停留的时间越长，脆皮就可以采集更多的金属！',
    'M = Magmamancer count. T = Time on Zone in minutes, divided by 10, rounded down.': 'M=岩浆巫师数量。T=在当前区域停留的分钟数除以10，结果向下取整。',
    'Metal/Sec *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1)': '金属/秒 *= 1+(((1-(0.9999^M))*3)*((1.2^T)-1)',
    'Amalgamator': '合并者',
    'Amalgamators cannot be hired or fired manually. They are magical beings that could barely be considered Trimps anymore, and they will automatically show up to your town whenever your total population to army size ratio rises above': '合并者无法手动雇佣或解雇。它们已经超越了脆皮的范畴，当总人口与军队规模的比值超过 ',
    '. At your current army size, you need': '。以目前军队规模来看，您还需要 ',
    'total Trimps to trigger the next Amalgamator.': '总人口，下个合并者才会出现。',
    'Amalgamators fuse some of your spare Trimps to other soldiers, greatly strengthening them. Each Amalgamator increases the amount of Trimps that must be sent into each battle by 1000x (compounding), increases health by 40x (compounding), and increases damage by 50% (compounding).': '合并者将一些空闲的脆皮与其他士兵融合，极大地强化它们。每个合并者将军队规模变为1000倍(效果叠乘)，将生命值变为40倍(效果叠乘)，将伤害值增加50%(效果叠乘)。',
    'Amalgamators fuse some of your spare Trimps to other soldiers, greatly strengthening them. Each Amalgamator increases the amount of Trimps that must be sent into each battle by 1000x (compounding), increases health by 40x (compounding), and increases damage by 50% (additive).': '合并者将一些空闲的脆皮与其他士兵融合，极大地强化它们。每个合并者将军队规模变为1000倍(效果叠乘)，将生命值变为40倍(效果叠乘)，将伤害值增加50%(效果叠加)。',
    'In addition, having at least one Amalgamator will cause Anticipation stacks to increase based on when the last soldiers were sent, rather than being based on time spent actually breeding.': '此外，至少有一个合并者时，预期效果将基于最后一次士兵被派遣的时间而定，而不是基于实际繁殖的时间。',
    'This particular Universe seems to directly conflict with the Amalgamators, yet they\'re here and the Trimps they Amalgamate seem immune to the dimensional restrictions. Things are getting weird though.': '合并者看合起来跟这个宇宙格格合并不入，但它们还并是出现了，它们所者合并的脆皮似乎不受到维并者度法则的限制。这可真是越合并者来越奇怪了。',
    'Some say the Amalgamators are a curse, some say they\'re a blessing. The Amalgamators themselves mostly just say "Blerghhhh".': '有人说合并者是祸，有人说合并者是福，而合并者们自己对此的评价为“布勒尔尔尔尔”。',
    'Meteorologist': '气象学家',
    'Worshipper': '崇信者',
    'Worshippers always cost 25% of the total amount of Food gathered and looted from World or Maps in your previous 4 Zones (not including current Zone). Each Worshipper grants a 0.5% chance to grant 25-50% of an entire Zone worth of Scruffy Exp per World Cell cleared. However, 2 Worshippers will stop Worshipping after each Zone cleared. Max of 50.': '崇信者的花费总是等于之前四个区域在世界或地图内获取的食物总量的25%(不包括当前区域)。每个崇信者在通过一个格子时，都有0.5%的概率获得整个区域污污经验的25%至50%。但是，每通过一个区域，将有2名崇信者离开您。崇信者最高为50名。',
    //工作相关结束
    //敌人名称相关
    'Liquimp': '液化者',
    'Arachnimp': '脆皮蜘蛛',
    'Beetlimp': '脆皮甲虫',
    'Mantimp': '脆皮螳螂',
    'Butterflimp': '脆皮蝴蝶',
    'Horrimp': '脆皮惊骇者',
    'Presimpt': '脆皮小礼',
    'Turkimp': '脆皮火鸡',
    'Randimp': '脆皮百变怪',
    'Corrupt Randimp': '腐化脆皮百变怪',
    'Magma Randimp': '岩浆脆皮百变怪',
    'Healthy Randimp': '健康脆皮百变怪',
    'Hardened Randimp': '硬化脆皮百变怪',
    'Snowy Randimp': '积雪脆皮百变怪',
    'Toxic Randimp': '毒性脆皮百变怪',
    'Gusty Randimp': '阵风脆皮百变怪',
    'Squimp': '脆皮乌贼',
    'Elephimp': '脆皮象',
    'Turtlimp': '脆皮龟',
    'Chimp': '脆皮黑猩猩',
    'Penguimp': '脆皮企鹅',
    'Snimp': '脆皮蛇',
    'Gorillimp': '脆皮大猩猩',
    'Blimp': '脆皮飞艇',
    'Dragimp': '脆皮龙',
    'Improbability': '乌有者',
    'Omnipotrimp': '全能者',
    'Mutimp': '脆皮变异者',
    'Hulking Mutimp': '脆皮大型变异者',
    'Feyimp': '脆皮小妖',
    'Tauntimp': '脆皮咚咚',
    'Grants an extra 0.3% of current Trimps': '脆皮数量及上限增加当前上限的0.3%',
    'Whipimp': '脆皮鞭者',
    'Grants 0.3% Trimp resource production speed': '脆皮资源获取速度增加0.3%',
    'Venimp': '脆皮爱神',
    'Grants 0.3% Trimp breed speed': '脆皮繁殖速度增加0.3%',
    'Magnimp': '脆皮磁王',
    '0.3% extra loot from maps and Zones (Not氦': '地图和世界上获得的战利品增加0.3%(不包括氦',
    'Skeletimp': '脆皮骷髅',
    'Megaskeletimp': '脆皮超级骷髅',
    'Pumpkimp': '脆皮南瓜怪',
    'Shrimp': '脆皮虾',
    'Mountimp': '脆皮山怪',
    'Frimp': '脆皮森精',
    'Chickimp': '脆皮小鸡',
    'Hippopotamimp': '脆皮河马',
    'Onoudidimp': '脆皮蜗牛',
    'Kittimp': '脆皮小猫',
    'Grimp': '脆皮护林者',
    'Golimp': '脆皮魔像',
    'Seirimp': '脆皮矿精',
    'Slagimp': '脆皮炉渣怪',
    'Moltimp': '脆皮熔金怪',
    'Lavimp': '脆皮火岩怪',
    'Flowimp': '脆皮花妖',
    'Kangarimp': '脆皮袋鼠',
    'Gnomimp': '脆皮侏儒',
    'Slosnimp': '脆皮慢蛇',
    'Entimp': '脆皮树人',
    'Squirrimp': '脆皮松鼠',
    'Gravelimp': '脆皮碎石怪',
    'Cthulimp': '脆皮克苏鲁',
    'Shadimp': '脆皮暗影怪',
    'Voidsnimp': '脆皮虚空蛇',
    'Goblimp': '脆皮地精',
    'Flutimp': '脆皮飘兽',
    'Drops Fragments': '掉落碎片',
    'Jestimp': '脆皮弄臣',
    '45 seconds of production for 1 random resource': '获得随机1种资源45秒的产量',
    'Titimp': '脆皮泰坦',
    '100% damage for 30 seconds in maps': '100%攻击力，持续30秒，只在地图中生效',
    'Chronoimp': '脆皮时者',
    '5 seconds of production for all basic resources': '获得所有基本资源5秒的产量',
    'Megablimp': '脆皮超级飞艇',
    'Mitschimp': '脆皮巨猩猩',
    'Brickimp': '脆皮砖汉',
    'Indianimp': '脆皮印第安人',
    'Poseidimp': '脆皮海王',
    'Warden': '典狱长',
    'Robotrimp': '脆皮机器人',
    'Mechimp': '脆皮机甲',
    'Destructimp': '脆皮破灭者',
    'Terminatimp': '脆皮终结者',
    'Autoimp': '脆皮汽车',
    'Artimp': '脆皮机器艺术家',
    'Neutrimp': '脆皮中子怪',
    'Fusimp': '脆皮聚变怪',
    'Hydrogimp': '脆皮氢怪',
    'Carbimp': '脆皮碳怪',
    'Prismimp': '脆皮棱镜怪',
    'Rainbimp': '脆皮彩虹兽',
    'Lightimp': '脆皮光怪',
    'Meltimp': '脆皮熔怪',
    'Sweltimp': '脆皮酷热者',
    'Darknimp': '脆皮暗罪者',
    'Druopitee': '德罗披提',
    'Echo of Druopitee': '德罗披提的幻影',
    'Corrupt': '腐化',
    'Magma': '岩浆',
    'Healthy': '健康',
    'Snowy': '积雪',
    'Snowy Druopitee': '积雪德罗披提',
    'Snowy Echo of Druopitee': '积雪德罗披提的幻影',
    'Living': '非亡灵',
    'Gusty': '阵风',
    'Druopitee and Pals': '德罗披提和随从们',
    'Echoes of Druopitee and Pals': '德罗披提和随从们的幻影',
    'Improbabilities': '乌有者们',
    'Snowy Druopitee and Pals': '积雪德罗披提和随从们',
    'Snowy Improbabilities': '积雪乌有者们',
    'Liquimps (': '液化者们 (',
    'Presimpts (': '脆皮小礼们 (',
    'Turkimps (': '脆皮火鸡们 (',
    'Squimps (': '脆皮乌贼们 (',
    'Elephimps (': '脆皮象们 (',
    'Turtlimps (': '脆皮龟们 (',
    'Chimps (': '脆皮黑猩猩们 (',
    'Penguimps (': '脆皮企鹅们 (',
    'Snimps (': '脆皮蛇们 (',
    'Gorillimps (': '脆皮大猩猩们 (',
    'Blimps (': '脆皮飞艇们 (',
    'Dragimps (': '脆皮龙们 (',
    'Omnipotrimps (': '全能者们 (',
    'Feyimps (': '脆皮小妖们 (',
    'Tauntimps (': '脆皮咚咚们 (',
    'Whipimps (': '脆皮鞭者们 (',
    'Venimps (': '脆皮爱神们 (',
    'Magnimps (': '脆皮磁王们 (',
    'Skeletimps (': '脆皮骷髅们 (',
    'Megaskeletimps (': '脆皮超级骷髅们 (',
    'Pumpkimps (': '脆皮南瓜怪们 (',
    'Shrimps (': '脆皮虾们 (',
    'Mountimps (': '脆皮山怪们 (',
    'Frimps (': '脆皮森精们 (',
    'Chickimps (': '脆皮小鸡们 (',
    'Hippopotamimps (': '脆皮河马们 (',
    'Onoudidimps (': '脆皮蜗牛们 (',
    'Kittimps (': '脆皮小猫们 (',
    'Grimps (': '脆皮护林者们 (',
    'Golimps (': '脆皮魔像们 (',
    'Seirimps (': '脆皮矿精们 (',
    'Slagimps (': '脆皮炉渣怪们 (',
    'Moltimps (': '脆皮熔金怪们 (',
    'Lavimps (': '脆皮火岩怪们 (',
    'Flowimps (': '脆皮花妖们 (',
    'Kangarimps (': '脆皮袋鼠们 (',
    'Gnomimps (': '脆皮侏儒们 (',
    'Slosnimps (': '脆皮慢蛇们 (',
    'Entimps (': '脆皮树人们 (',
    'Squirrimps (': '脆皮松鼠们 (',
    'Gravelimps (': '脆皮碎石怪们 (',
    'Cthulimps (': '脆皮克苏鲁们 (',
    'Shadimps (': '脆皮暗影怪们 (',
    'Voidsnimps (': '脆皮虚空蛇们 (',
    'Goblimps (': '脆皮地精们 (',
    'Flutimps (': '脆皮飘兽们 (',
    'Jestimps (': '脆皮弄臣们 (',
    'Titimps (': '脆皮泰坦们 (',
    'Chronoimps (': '脆皮时者们 (',
    'Megablimps (': '脆皮超级飞艇们 (',
    'Mitschimps (': '脆皮巨猩猩们 (',
    'Brickimps (': '脆皮砖汉们 (',
    'Indianimps (': '脆皮印第安人们 (',
    'Wardens (': '典狱长们 (',
    'Robotrimps (': '脆皮机器人们 (',
    'Mechimps (': '脆皮机甲们 (',
    'Destructimps (': '脆皮破灭者们 (',
    'Terminatimps (': '脆皮终结者们 (',
    'Autoimps (': '脆皮汽车们 (',
    'Artimps (': '脆皮机器艺术家们 (',
    'Neutrimps (': '脆皮中子怪们 (',
    'Fusimps (': '脆皮聚变怪们 (',
    'Hydrogimps (': '脆皮氢怪们 (',
    'Carbimps (': '脆皮碳怪们 (',
    'Presimpts': '脆皮小礼们',
    'Turkimps': '脆皮火鸡们',
    'Randimps': '脆皮百变怪们',
    'Squimps': '脆皮乌贼们',
    'Elephimps': '脆皮象们',
    'Turtlimps': '脆皮龟们',
    'Chimps': '脆皮黑猩猩们',
    'Penguimps': '脆皮企鹅们',
    'Snimps': '脆皮蛇们',
    'Gorillimps': '脆皮大猩猩们',
    'Dragimps': '脆皮龙们',
    'Mutimps': '脆皮变异者们',
    'Hulking Mutimps': '脆皮大型变异者们',
    'Feyimps': '脆皮小妖们',
    'Tauntimps': '脆皮咚咚们',
    'Whipimps': '脆皮鞭者们',
    'Venimps': '脆皮爱神们',
    'Magnimps': '脆皮磁王们',
    'Skeletimps': '脆皮骷髅们',
    'Megaskeletimps': '脆皮超级骷髅们',
    'Pumpkimps': '脆皮南瓜怪们',
    //敌人名称相关结束
    //装备相关
    'Shield': '盾牌',
    'Dagger': '匕首',
    'Boots': '靴子',
    'Mace': '狼牙棒',
    'Helmet': '头盔',
    'Polearm': '战戟',
    'Pants': '裤子',
    'Battleaxe': '战斧',
    'Shoulderguards': '护肩',
    'Greatsword': '巨剑',
    'Breastplate': '胸铠',
    'Arbalest': '强弩',
    'Gambeson': '棉甲',
    //装备相关结束
    //世界解锁相关
    'Bloodlust': '嗜血',
    'Gym': '健身房',
    'TrainTacular': '格挡提升',
    'Smithy': '铁匠铺',
    'Warpstation': '跃迁核心',
    'Gymystic': '健身学',
    'Meteorologists': '气象学家',
    'Dominance': '支配',
    'Barrier': '屏障',
    'Potency': '繁殖效率',
    'Miner': '矿工',
    'Trainer': '训练师',
    'Explorer': '探险家',
    'Speedscience': '研究加速',
    'Megascience': '超级研究',
    'Gigastation': '千兆核心',
    'Magmamancer': '岩浆巫师',
    'Speedfarming': '耕作加速',
    'Megafarming': '超级耕作',
    'Speedlumber': '砍伐加速',
    'Megalumber': '超级砍伐',
    'Speedminer': '采矿加速',
    'Megaminer': '超级采矿',
    'Geneticist': '遗传学家',
    'Foreman': '工头',
    'Anger': '愤怒',
    'Rage': '暴怒',
    'Prismatic Palace': '棱镜宫殿',
    'Coordination': '协作',
    'Blockmaster': '格挡大师',
    'Egg': '蛋',
    'Doom': '末日神殿',
    'Trimple Of Doom': '末日神殿',
    'Atlantrimp': '亚特兰蒂皮',
    'Tricky Paradise': '整蛊天堂',
    //世界解锁相关结束
    //地图解锁相关
    'There seems to be a small RoboTrimp that you appear to have orphaned. You decide to take him with you, since you\'re pretty good at training stuff. He deals': '您发现了一个失去双亲的小脆皮机器人。您决定带着它一起走，毕竟您有特别的训练技巧。它可以让您的脆皮多造成 ',
    'extra damage for you, and has a special ability. You can learn more about the special ability by hovering over the new': '伤害，并且还有一个特殊能力。您可以将鼠标停留到士兵旁边的 ',
    'icon by your soldiers.': '图标上来了解这个能力的详细信息。',
    'You also found a map to a more powerful version of the Bionic Wonderland. You would bet there\'s another RoboTrimp who needs \'rescuing\' in there.': '您同时还发现了一张通往更高级的仿生仙境的地图。您很肯定那里一定也有另一个小脆皮机器人等待“拯救”。',
    'Just a heads up': '给您提个醒',
    'You have tooltips disabled, so you will need to hold shift when you mouse over the': '您关闭了提示框，所以当鼠标停留在 ',
    'to read about it.': '图标上时，您需要按下shift键才能看到提示。',
    'Special Bionic Wonderland QOL Bonuses': '特殊的仿生仙境生活质量奖励',
    'You will also find some special new Quality of Life bonuses in Bionic Wonderland maps! If you see a Bionic Wonderland map with a yellow background, that means there\'s a permanent QOL unlock inside. For your first map, you\'ve unlocked Foremany!': '您同时还可以在之后的仿生仙境地图中找到一些特殊的生活质量奖励！如果您看到了一张仿生仙境地图背景颜色是黄色，这意味着这张地图中可以解锁永久的生活质量升级。对于您通过的第一张仿生仙境地图而言，您解锁了大群工头！',
    'RoboTrimp': '脆皮机器人',
    'AutoStorage': '自动存储',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most, and without a second thought you reply that you wish your Trimps were smart enough to manage storage structures on their own. The presence lets you know that it is done, then dissipates. You instantly regret not asking to go home.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您不加思索地回答，希望脆皮们能聪明到自动建造存储建筑。它告诉您愿望已经实现，然后就重归于虚无了。您马上就后悔了，怎么没让它送您回家呢……',
    'Auspicious Presence': '瑞兽',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... hasn\'t this happened before? Last time you asked for your Trimps to be smart enough to manage storage structures on their own. You can make it better this time! You excitedly ask for your Trimps to waste less resources when managing resources on their own. The presence lets you know that it is done, then dissipates. You get serious déjà-vu while regretting not asking to go home.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，好像这在之前发生过？上次您是希望脆皮们能聪明到自动建造存储建筑。这次您可以许个更好的愿望！您兴奋地问道，是否能让脆皮们管理资源时浪费更少。它告诉您愿望已经实现，然后就重归于虚无了。您对于后悔没让它送您回家这一点有了非常严重的即视感……',
    'From now on, storage facilities will be constructed instantly. If you collect more resources from one source than you can hold, the extra resources will be used to build new storage facilities without wasting any resources. You may not be home, but your Trimps are now quite talented!': '从现在起，存储建筑将跳过队列直接建造完成。如果您获取了超过上限的资源，多余的资源将自动被用于建造存储建筑，不会造成浪费。虽然您还没法回家，但至少脆皮们变得更有才了！',
    'Auspicious Presence Part II': '瑞兽 II',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... how many times has this happened now? You\'re fairly positive that there was something you regretted not asking last time, but you can\'t quite remember. You\'ve asked for Trimps to be able to manage storage structures, and you\'ve asked for them to be better at managing those structures. Even though you\'re content with your storage solutions, you suddenly realize the perfect request! You wish the Trimps would stop pushing so far through the Zones while you\'re sleeping, so you ask for a way to tell the Trimps to stop fighting at a Zone of your choosing. The presence lets you know that it is done, then dissipates. You realize as soon as it leaves that you could have asked to go home, but you don\'t really want to anymore. Next time you\'ll make sure to ask for invincible Trimps though, that may have been a better choice.': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，这已经发生几次了？您记得上次到最后，是后悔没有许愿了什么东西，但是您记不起来那东西是啥了。您已经请求过脆皮们能聪明到自动建造存储建筑，而且您也请求过脆皮们自动建造存储建筑时浪费更少。您对存储已经很满意了，所以……等等，您知道该许什么愿望了！您希望在睡觉时，脆皮们别冲到那么后面的区域，所以您请求获得一种方法，让脆皮能够在特定的区域停止战斗。它告诉您愿望已经实现，然后就重归于虚无了。它一离开，您就想起来应该许愿回家的，但其实现在您也没那么想回家了。下次不如直接许愿让脆皮变成无敌好了，您想，这应该会是个更好的主意。',
    'From now on, you have access to the Map At Zone setting. This setting can be accessed through the Map Sidebar, Settings, or the \'Configure Maps\' popup!': '从现在起，您可以使用自动进图设置了。您可以从地图侧边栏，设置菜单，或者是“设置地图”窗口中进行设置！',
    'Auspicious Presence Part III': '瑞兽 III',
    'AutoEquip': '自动装备',
    'From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... This has DEFINITELY happened before... hasn\'t it? You\'re pretty sure it has, but you have no actual memory of it. But you do... but also you don\'t. Wait, who even are you? Where are you? What are you?': '一只瑞兽从虚空中出现，占满了您的意识。一时间您感觉与世无争。它询问您最想要的是什么，您……等等，这绝对发生过的……有吗？您很确信它发生过，但您完全没有任何印象了。但是您记得……但您又不记得。等等，您是谁？您在哪？您在干什么？',
    'You sit on the ground and contemplate things for a few hours while the Auspicious Presence waits patiently. You finally stand up and demand that the Trimps become smart enough to level up their own equipment! You can\'t see how this could go badly. The presence lets you know that it is done, then it dissipates. As soon as it is gone, you realize you could have just asked for invincible Trimps, but you\'re pretty sure you\'ll remember next time.': '您坐在地上苦思冥想了许久，瑞兽在一旁，只是静静地等着。最后您站了起来，开口道，希望脆皮们能聪明到自动升级装备！这绝对是天底下最好的事了。它告诉您愿望已经实现，然后就重归于虚无了。它一离开，您就想起来应该许愿让脆皮变成无敌的，下次绝对会记得这么干的，您这么确信着。',
    'From now on, you have access to AutoEquip!': '从现在起，您可以使用自动装备设置了！',
    'Auspicious Presence Part IV': '瑞兽 IV',
    'Portal': '传送门',
    'The portal device you found shines green in the lab. Such a familiar shade... (Hotkey: T': '您找到的传送门装置在实验室中闪着绿光。好熟悉的光啊……(快捷键：T',
    'The portal device you found shines blue in the lab. Such a familiar shade... (Hotkey: T': '您找到的传送门装置在实验室中闪着蓝光。好熟悉的光啊……(快捷键：T',
    'Prismalicious': '优质棱镜',
    'Shieldblock': '盾牌格挡',
    'Bounty': '赏金',
    'Supershield': '超级盾牌',
    'Dagadder': '诗歌匕首',
    'Bootboost': '神行靴',
    'Megamace': '巨型狼牙棒',
    'Hellishmet': '地狱头盔',
    'Polierarm': '画戟',
    'Pantastic': '护腿',
    'Axeidic': '强酸战斧',
    'Smoldershoulder': '闷火护肩',
    'Greatersword': '双手巨剑',
    'Bestplate': '精良胸铠',
    'Harmbalest': '高强弩',
    'GambesOP': '强棉甲',
    'Speedexplorer': '探险家加速',
    'The Block': '障碍区',
    'The Wall': '高墙',
    'Wall': '墙',
    'The Prison': '监狱',
    'Imploding Star': '爆炸之星',
    'UberHut': '超级小屋',
    'UberHouse': '超级宅院',
    'UberMansion': '超级豪宅',
    'UberHotel': '超级宾馆',
    'UberResort': '超级度假村',
    'Trapstorm': '自动陷阱',
    'Nursery': '托儿所',
    'Gems': '宝石',
    'Metal': '金属',
    'Food': '食物',
    'Wood': '木头',
    //地图解锁相关结束
    //其他升级相关
    'Prestige your Warpstation, increasing the amount of Trimps it can house by 20% and the base cost by 75%. There\'s no turning back, learning these blueprints will make your previous model of Warpstation obsolete but functional, and you will keep all Trimps housed there. Learning this will build one new Warpstation.': '重铸您的跃迁核心，使它可以多容纳20%的脆皮，但同时基础花费也增加75%。这个操作无法反悔，重铸后，您之前的跃迁核心蓝图将被废弃，但上一次升级后已经建造好的跃迁核心仍然可以运作，容纳的脆皮也将完整保留。研究后将直接建造一个新的跃迁核心。',
    'Holding Ctrl will cause as many Warpstations as you currently own to be purchased immediately after Gigastation, if you can afford them.': '按下Ctrl键再研究此项，则将在购买千兆核心后尽可能多地购买跃迁核心，直到资源不足以再建造为止。',
    'You are about to purchase a Gigastation,': '您将购买千兆核心升级，',
    'which is not a renewable upgrade': '升级后将无法反悔',
    '. Make sure you have purchased all of the Warpstations you can afford first!': '。请确保您已经尽可能多地购买了跃迁核心！',
    'Figure out how to teach these Trimps to kill some Bad Guys.': '搞清楚教这些脆皮击杀敌人的方法。',
    'This book will teach your Trimps to Battle on their own.': '这本书可以教会脆皮们自己进行战斗。',
    'Prismatic': '棱镜护盾',
    'Polish the strange Prism you found. When your Trimps bring the polished Prism to Battle, they gain': '将您发现的奇怪棱镜进行抛光。当脆皮带着抛光后的棱镜战斗时，它们可以获得最大生命值 ',
    'of their maximum Health as': '数值的',
    '!. All enemy damage hits your Prismatic Shield before Health, and Prismatic Shield always regenerates to full after an enemy is killed.': '！所有敌人必须先击穿棱镜护盾后才能开始减少脆皮生命值，而且在一个敌人被击杀后，棱镜护盾将恢复全满。',
    'This book will increase the block gained from each Gym by 50%.': '这本书可以使每个健身房增加的格挡数值提升50%。',
    'This book details the fine art of teaching your foremen to actually do stuff instead of just sitting around. When asked, your foremen will start construction on a new Trap if the queue is empty.': '这本书详细介绍了让工头们干活的艺术，现在它们不会再无所事事了。开启相应功能后，在队列为空时，工头们将自动建造陷阱。',
    'This book explains methods of using a shield to actually block damage. The current shield will need to be completely destroyed and rebuilt, but it will give block instead of health.': '这本书说明了使用盾牌来格挡伤害的方法。目前的盾牌将被彻底摧毁，需要重新制造才行，重新制造后盾牌将提供格挡，而不再提供生命值。',
    'This is permanent': '此升级在下次传送前一直生效',
    'Your Shield Must be Prestige III or higher': '您至少需要重铸等级 III或者更高的盾牌才能购买此升级',
    'You are about to modify your Shield, causing it to block instead of grant health until your next portal. Are you sure?': '您将使盾牌从增加生命值变为增加格挡，直到传送前一直生效。您确定要这么做吗？',
    'This book will teach your Farmers, Lumberjacks, Miners, Scientists, and Explorers to all be twice as productive.': '这本书将使农民，伐木工，矿工，科学家和探险家的产量翻倍。',
    'Your top scientists are pretty sure this is a Dragimp egg. They know Dragimps love shiny things, maybe it\'ll come out for some gems.': '您的顶尖科学家非常确信，这就是一个脆皮龙蛋。脆皮龙最爱闪闪发光的东西，也许它可以帮忙寻找宝石。',
    'Once again, this Prism will need to be polished before it can offer your Trimps any protection. After it\'s polished, this Prism will grant an additional 50% Prismatic Shield to your Trimps!': '棱镜又需要抛光了，不然没法提供保护。抛光后，棱镜可以额外增加50%的棱镜护盾！',
    'Your scientists are pissed. Not because of anything you did, but this gem seems to be making them mad. It\'ll take some research, but you think you can create a map to the place the gem originated from.': '您的科学家们看起来怒气冲冲，可您什么也没做，显然是那块宝石搞的鬼了。您需要点时间来研究它，您相信可以借此制造出通往宝石发源地的地图。',
    'Dimension of Anger': '愤怒维度',
    'Unsurprisingly, that Rage Gem you brought back has everyone up the walls. You should probably hurry up and figure out a way to extract the map from inside before your Scientists end up killing eachother.': '不出所料，您带回的暴怒宝石让所有人都抓狂了。您得抓紧时间从中提取出地图，不然科学家们迟早要开始自相残杀了。',
    'Dimension of Rage': '暴怒维度',
    'This book will cause each gym you purchase to increase the block provided by all Gyms by 5%. Each consecutive level of this upgrade will increase the block provided by an additional 1%.': '这本书将使每个健身房都可以提升所有健身房5%的格挡。后续的此升级每级使格挡效果再增加1%。',
    'The extra block provided compounds per Gym.': '每个健身房获得的额外格挡之间相互叠乘。',
    'Formations': '阵型',
    'The air may be filled with pollution, but your Trimps seem to be getting smarter and a battle technique from what could only be a past life has crept into your memory. This would probably be a good opportunity to teach it to your Trimps. Once researched, you will be able to enter the \'Heap Formation\'. This can be toggled to increase your Trimps\' health by 4x, but reduce block and attack by half.': '空气仍然污浊，但脆皮们似乎变得更聪明了，而此时，一种显然只能来自于前世的战技悄悄地从您的记忆中浮现了出来。如果要把这教给脆皮的话，现在可能就是个好时机。研究后您就可以使用"堆叠阵型"了。切换到此阵型后，您的脆皮生命值将变为4倍，但减少一半的格挡和攻击力。',
    'Another formation has crept back into your memory. Where are these coming from? Who are you? Who cares, this one will allow your Trimps to deal 4x damage at the cost of half health and block.': '另一个阵型又悄悄地在您的记忆中浮现了。这是从哪来的？您又是谁？管他呢，此阵型可以使您的脆皮攻击力变为4倍，代价是生命值和格挡减半。',
    'Woah, you just remembered that all Trimps lifting their shields in the same direction at the same time can produce a nice protecting wall. Seems like common sense now that you thought of it. This formation increases block by 4x and cuts the amount of block that enemies can pierce by 50%, at the cost of half attack and health.': '哇哦，您刚想起所有脆皮同时同方向举起盾牌能产生一个很好的防护墙。现在想想，这不是常识嘛。此阵型可以使您的脆皮格挡变为4倍，并且使敌人的格挡穿透伤害减少50%，但代价是减少一半的攻击力和生命值。',
    'Miners': '矿工',
    'You really don\'t like reading books, but it seems better than mining yourself.': '您其实并不喜欢看书，但是，这总比要自己挖矿来的好。',
    'Scientists': '科学家',
    'You really don\'t believe it, but that book indicates that Trimps can be smart. Better read it and find out how.': '那本书指出脆皮也可以变聪明，其实您是真不信的。怎么样也好，还是看看需要怎么做吧。',
    'Trainers': '训练师',
    'This book holds all of the secrets of upper management. Train your Trimps to train other Trimps.': '这本书包含了高层管理的所有秘密。还可以让脆皮学会训练其他脆皮。',
    'Explorers': '探险家',
    'This book will allow you to hire trimps who can create map fragments for you!': '这本书将允许您雇佣能为您制造地图碎片的脆皮！',
    'Magmamancers': '岩浆巫师',
    'Your scientists think they can study this book to figure out how to train Trimps as Magmamancers. According to your scientists, according to legend, Magmamancers require gems instead of food as sustainance and can increase the rate of Metal gathering more and more as they stay on the same Zone.': '科学家们认为，它们可以通过研究这本书，弄明白将脆皮训练为岩浆巫师的方法。根据科学家们的说法，传说中岩浆巫师需要宝石而不是食物来供养，而且随着它们在同一区域的时间越来越长，金属的产量也会越来越高。',
    'This book will increase the space gained from each Hut by 100%.': '这本书将使每个小屋提供的空间增加100%。',
    'This book will increase the space gained from each House by 100%.': '这本书将使每个宅院提供的空间增加100%。',
    'This book will increase the space gained from each Mansion by 100%.': '这本书将使每个豪宅提供的空间增加100%。',
    'This book will increase the space gained from each Hotel by 100%.': '这本书将使每个宾馆提供的空间增加100%。',
    'This book will increase the space gained from each Resort by 100%.': '这本书将使每个度假村提供的空间增加100%。',
    'You may not want to do this right away.': '您可能不会想马上就这么做的。',
    'Researching this will prestige your shield. This will bring your shield to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of stats given.': '此升级将重铸盾牌。使盾牌回到1级，升级成本极大增加，但同时效果也极大增加。',
    'Researching this will prestige your dagger. This will bring your dagger to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸匕首。使匕首回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your boots. This will bring your boots to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸靴子。使靴子回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your mace. This will bring your mace to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸狼牙棒。使狼牙棒回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your helmet. This will bring your helmet to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸头盔。使头盔回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your polearm. This will bring your polearm to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸战戟。使战戟回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your pants. This will bring your pants to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸裤子。使裤子回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your axe. This will bring your axe to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸战斧。使战斧回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your shoulderguards. This will bring your shoulderguards to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸护肩。使护肩回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your greatsword. This will bring your greatsword to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸巨剑。使巨剑回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your breastplate. This will bring your breastplate to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸胸铠。使胸铠回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'Researching this will prestige your arbalest. This will bring your arbalest to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given.': '此升级将重铸强弩。使强弩回到1级，升级成本极大增加，但同时提升的攻击力也极大增加。',
    'Researching this will prestige your gambeson. This will bring your gambeson to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given.': '此升级将重铸棉甲。使棉甲回到1级，升级成本极大增加，但同时提升的生命值也极大增加。',
    'This book will teach your trimps how to be 10% more efficient at making baby Trimps!': '这本书将使脆皮造宝宝的速度更快，提高10%的繁殖速度！',
    'This book will teach your Trainers to increase block by an additional 5%!': '这本书将使训练师额外增加5%的格挡！',
    'This book will teach you how to be twice as productive in everything you do! Hurray!': '这本书将使您自己做事情的效率翻倍！万岁！',
    'Note that this applies only to your productivity, not workers.': '请注意，此升级只对您自己生效，对工人无效。',
    'This book will teach your Trimps how to mine 25% faster!': '这本书将使脆皮采矿速度提高25%！',
    'This book will teach your Trimps how to cut wood 25% faster!': '这本书将使脆皮砍伐速度提高25%！',
    'This book will teach your Trimps how to farm 25% faster!': '这本书将使脆皮耕作速度提高25%！',
    'This book will teach your Trimps how to science things 25% faster!': '这本书将使脆皮研究速度提高25%！',
    'This book will teach your Trimps how to explore 300% more efficiently!': '这本书将使脆皮探险效率提高300%！',
    'This book will teach your Trimps how to mine 50% faster!': '这本书将使脆皮采矿速度提高50%！',
    'This book will teach your Trimps how to mine 60% faster!': '这本书将使脆皮采矿速度提高60%！',
    'This book will teach your Trimps how to chop wood 50% faster!': '这本书将使脆皮砍伐速度提高50%！',
    'This book will teach your Trimps how to chop wood 60% faster!': '这本书将使脆皮砍伐速度提高60%！',
    'This book will teach your Trimps how to farm 50% faster!': '这本书将使脆皮耕作速度提高50%！',
    'This book will teach your Trimps how to farm 60% faster!': '这本书将使脆皮耕作速度提高60%！',
    'This book will teach your Trimps how to science things 50% faster!': '这本书将使脆皮研究速度提高50%！',
    'This book will teach your Trimps how to science things 60% faster!': '这本书将使脆皮研究速度提高60%！',
    'Foremany': '大群工头',
    'Repurpose some of those RoboTrimps you found into an army of Robotic Foremen. Permanently adds 50000 Foreman to your town to aid in construction.': '把一些脆皮机器人改造成机械工头。永久增加50000工头。',
    'AutoJobs': '自动工作',
    'Unlock the Job Automator, the envy of Human Resourceimps across the Universe.': '解锁自动工作功能，全宇宙的脆皮HR们都会羡慕您的。',
    'AutoStructure': '自动建造',
    'Unlock the AutoStructure tool, allowing you to automatically purchase structures. In addition, all housing and battle territory bonuses will come with ready-to-fight Trimps inside (Not including the Dimensional Generator)!': '解锁自动建造功能，可以自动建造建筑。另外，所有住房和战斗领土加成在增加脆皮上限的同时，也会同时增加相应数量的脆皮(不包括维度发生器)！',
    'Unlock the AutoStructure tool, allowing you to automatically purchase structures. In addition, all housing and battle territory bonuses will come with ready-to-fight Trimps inside!': '解锁自动建造功能，可以自动建造建筑。另外，所有住房和战斗领土加成在增加脆皮上限的同时，也会同时增加相应数量的脆皮！',
    'Geneticistassist': '遗传学家助手',
    'Unlock Geneticistassist, the most powerful Geneticist Automator in this side of the galaxy!': '解锁遗传学家助手，它在星系的此端是最强大的遗传学家管理者！',
    'The Geneticistassist': '遗传学家助手',
    'Greetings, friend! I\'m your new robotic pal': '欢迎，朋友！我是您的新机器伙伴 ',
    'and I am here to assist you with your Geneticists. I will hang out in your Jobs tab, and will appear every run after Geneticists are unlocked. You can customize me in Settings under \'General\'!': '，我可以帮助您管理遗传学家。我会一直停留在您的工作选项卡下，在每次传送后解锁遗传学家时同时出现。您可以在设置的 常规选项卡 下设置我的相关参数！',
    'Thanks, Geneticistassist!': '谢了，遗传学家助手！',
    'DoubleBuild': '二重建造',
    'Stacked items in the Building Queue will be constructed two at a time.': '可以同时建造两个建筑。',
    //其他升级相关结束
    //游戏统计相关
    'Dead Trimps': '脆皮阵亡数',
    'Battles Won': '战斗胜利数',
    'Battles Lost': '战斗失败数',
    'Gems Collected': '宝石收集数',
    'Maps Cleared': '地图通过数',
    'Zones Cleared': '区域通过数',
    'Trimps Fired': '脆皮解雇数',
    'Wormholed氦': '虫洞上消耗的氦',
    'Golden Upgrades': '黄金升级数',
    'He/Hour this Run': '自上次传送后氦/小时',
    'Rn/Hour this Run': '自上次传送后氡/小时',
    'Best He/Hour this Run': '自上次传送后最高的氦/小时',
    'Best Rn/Hour this Run': '自上次传送后最高的氡/小时',
    'Total Helium Earned': '氦总获取量',
    'Best He/Hour all Runs': '所有游戏中最高的氦/小时',
    'Daily Challenge氦': '日常挑战获取的氦',
    'Total Radon Earned': '氡总获取量',
    'Best Rn/Hour all Runs': '所有游戏中最高的氡/小时',
    'Daily Challenge氡': '日常挑战获取的氡',
    'Zones Liquified': '区域液化数',
    'Highest Void Map Clear': '虚空地图最高通过区域',
    'Highest U2 Void Map': '宇宙2虚空地图最高通过区域',
    'Total Void Maps Cleared': '虚空地图通过数',
    'Heirlooms Found': '传家宝收集数',
    'Cores Found': '核心收集数',
    'World Cells Overkilled': '世界格子超杀总数',
    'Trimps from Generator': '维度发生器生产的脆皮数',
    'Burned Nurseries': '岩浆烧掉的托儿所数',
    'Tokens This Run': '自上次传送后获得的符记',
    'Most 符记': '符记最高数量',
    'Amalgamators Befriended': '合并者数量',
    'Fluffy Exp This Run': '自上次传送后绒绒经验',
    'Best Fluffy Exp': '最高绒绒经验',
    'Scruffy Exp This Run': '自上次传送后污污经验',
    'Best U2 Scruffy Exp': '最高污污经验',
    'Fluffy Exp/Hr this Run': '自上次传送后绒绒经验/小时',
    'Scruffy Exp/Hr this Run': '自上次传送后污污经验/小时',
    'Best Fluffy Exp/Hr this Run': '自上次传送后最高绒绒经验/小时',
    'Best Scruffy Exp/Hr this Run': '自上次传送后最高污污经验/小时',
    'Best Fluffy Exp/Hr': '最高绒绒经验/小时',
    'Best Scruffy Exp/Hr': '最高污污经验/小时',
    'Fluffy Pats': '绒绒拍头次数',
    'Scruffy Pats': '污污拍头次数',
    'Total Portals Used': '传送门使用次数',
    'Total Radon Portals': '宇宙2传送门使用次数',
    'Planets Broken': '行星破碎数',
    'Highest Zone': '最高区域',
    'Highest Zone U': '最高区域于宇宙',
    'Trap/Tower Kills': '陷阱/塔击杀数',
    'SA Dust Earned': '尖塔突击获取的魔尘',
    'SA Enemies Killed': '尖塔突击击杀的敌人数量',
    //游戏统计相关结束
    //游戏成就相关
    'Zone Progress': '区域进度',
    'Complete Zone': '通过区域',
    'Reward': '奖励',
    'Row Finished!': '此类成就全部完成！',
    'Row Finished! (Highest is': '此类成就全部完成！(最高为',
    'This is Easy': '易如反掌',
    'Blimp Slayer': '脆皮飞艇杀手',
    'Groundbreaker': '开拓者',
    'The Beginning': '自此而始',
    'Determined': '决心已定',
    'Professor': '教授',
    'Trimp Aficionado': '脆皮酷爱者',
    'Slayer of Planets': '行星杀手',
    'Electric': '电气',
    'Stronk': '强大',
    'Endurance': '耐久力',
    'Unwavering': '绝不动摇',
    'Resolved': '坚定不移',
    'Steadfast': '矢志不渝',
    'Grit': '坚毅果敢',
    'Perseverance': '不屈不挠',
    'Persistence': '锲而不舍',
    'The Instigator': '煽动者',
    'The Destroyer': '破坏者',
    'The Eradicator': '歼灭者',
    'The Exterminator': '毁灭者',
    'Heat Maker': '制热者',
    'Heat Hater': '绝热者',
    'Heat Breaker': '断热者',
    'Heat Slayer': '除热者',
    'Heat Expert': '热专家',
    'Heat Bender': '饮热者',
    'Volcanic': '火山',
    'Magma Master': '岩浆大师',
    'Acre of Nature': '自然之地',
    'Aspirer': '野望者',
    'Insane': '癫狂',
    'Spire Master': '尖塔大师',
    'Zone Progress: U': '区域进度：宇宙',
    'This is Harder': '难度上升',
    'Second Coming': '基督复临',
    'Blimp Destroyer': '脆皮飞艇毁灭者',
    'Improbable Again': '乌有再临',
    'Unstoppable': '不可阻挡',
    'Progresser': '继续推进',
    'Fifty Fifty': '五五开',
    'Actually Unbroken': '这次没碎',
    'Lucky': '幸运',
    'Apt': '恰如其分',
    'The Unshocked': '不动如山',
    'Universalist': '博识大贤者',
    'Through the Unknown': '觅神之旅',
    'Swarming': '成群结队',
    'Steamroller': '势不可挡',
    'Universal Destroyer': '博识毁灭者',
    'Eater of Zones': '区域食客',
    'Bringer of Progress': '进展使者',
    'Major Zonage': '主要区域',
    'Master of Alchemy': '炼金术大师',
    'Ballistic': '弹道术',
    'Neverending Journey': '无尽旅途',
    'Trimp Damage': '脆皮伤害值',
    'Lead Trimps': '领导脆皮',
    'Silver Trimps': '脆银脆皮',
    'Golden Trimps': '软金脆皮',
    'Copper Trimps': '黄铜脆皮',
    'Platinum Trimps': '白金脆皮',
    'Iron Trimps': '镔铁脆皮',
    'Steel Trimps': '精钢脆皮',
    'Obsidian Trimps': '黑曜石脆皮',
    'Cobalt Trimps': '钴制脆皮',
    'Topaz Trimps': '黄玉脆皮',
    'Diamond Trimps': '钻石脆皮',
    'Transcendental Trimps': '超越脆皮',
    'Trimps Owned': '脆皮总数',
    'Too Many Trimps': '脆皮过量',
    'Overcrowding': '人满为患',
    'This Is Trimp': '这是脆皮',
    'It Takes a Tribe': '部落之力',
    'It Takes a Town': '一镇之力',
    'It Takes a City': '一城之力',
    'A Milli Trimpi': '百万脆皮',
    'Trimpsponential Growth': '脆皮指数增长',
    'MMMEGATRIMPS': '百百万脆皮',
    'It Takes a Nation': '举国之力',
    'It Takes a Planet': '行星之力',
    'It Takes a Universe': '宇宙之力',
    'Real Estate': '不动产',
    'Build your first  Hut': '首次建造小屋',
    'Build your first  House': '首次建造宅院',
    'Build your first  Mansion': '首次建造豪宅',
    'Build your first  Hotel': '首次建造宾馆',
    'Build your first  Resort': '首次建造度假村',
    'Build your first  Gateway': '首次建造维度裂隙',
    'Build your first  Wormhole': '首次建造虫洞',
    'Build your first  Collector': '首次建造汲能设施',
    'Build your first  Warpstation': '首次建造跃迁核心',
    'Use the Dimensional Generator': '使用过维度发生器',
    'Tiny Homes': '小小的家',
    'Residential Development': '住宅开发',
    'Taste for Luxury': '品味奢华',
    'Fancy': '梦想成真',
    'The Skyline': '天际线',
    'Dimensional Drift': '维度漂移',
    'Space From Stars': '星星空间',
    'To Infinity and Beyond': '飞向宇宙，浩瀚无垠',
    'Mass Generation': '质量发生',
    'Total Portals': '传送门总次数',
    'A Trimp Through Time': '穿越时空的一个脆皮',
    'When The Wild Things Are': '狂野时空',
    'A Time Like No Other': '独一无二的时空',
    'Venti Timeachino': '来一大杯时间奇诺',
    'Time of Your Life': '流金岁月',
    'Centennial Trimper': '百重脆皮',
    'Amnesia': '健忘症',
    'Dedicated Traveller': '专注的旅行者',
    'Total Zone Clears': '区域通过总数',
    'Pathfinder': '探路者',
    'Bushwhacker': '荒野旅者',
    'Pioneer': '拓荒者',
    'Seeker': '探求者',
    'Adventurer': '冒险者',
    'Lucky Resolve': '幸运数的信念',
    'GigaClearer': '千区踏破',
    'Globetrotter': '环球旅者',
    'Vanquisher': '审判者',
    'Conquistador': '征服者',
    'Total Map Clears': '地图通过总数',
    'Map Maker': '地图绘制者',
    'Map Runner': '地图运行者',
    'Map Destroyer': '地图毁灭者',
    'Map Annihilator': '地图歼灭者',
    'Map Slaughterer': '地图屠杀者',
    'Map Commander': '地图指挥官',
    'Maptain': '地图队长',
    'Cartographer': '制图宗师',
    'Helium Collection': '氦收集量',
    'Cool': '凉快',
    'Crisp': '凉爽',
    'Brisk': '清凉',
    'Chilly': '冰冷',
    'Frosty': '寒霜',
    'Frigid': '寒冷',
    'Frozen': '冻结',
    'Gelid': '冷冽',
    'Glacial': '冰川',
    'Freaking Cold': '酷寒',
    'Arctic': '极地',
    'Absolute Zero': '绝对零度',
    'Radon Collection': '氡收集量',
    'Radon Runner': '氡之运行者',
    'The Irradiated': '辐照',
    'Radonlicious': '优质氡',
    'Radon Quixote': '氡吉诃德',
    'Radon Racer': '氡之车手',
    'Radon Wrangler': '氡之牧者',
    'All Said and Radone': '氡埃落定',
    'Radominating': '氡之支配',
    'Rads to Riches': '氡之富足',
    'Helium Per Hour': '氦每小时',
    'Row Finished! (Currently at': '此类成就全部完成！(目前为',
    'Coldlector': '汲冷者',
    'Centelium': '百氦长',
    'Frosty Tanker': '寒霜气罐',
    'Blimp Snatcher': '脆皮飞艇掠夺者',
    'Squeaky Dasher': '嘎吱冲锋',
    'Quick N Cool': '快速冷却',
    'Hour Bender': '小时狂欢',
    'Acquired Frost': '后天霜冻',
    'Vacuum': '真空',
    'Levitator': '飘浮者',
    'Soarer': '滑翔者',
    'Cool Runnings': '冰上轻驰',
    'Heirloom Collection': '传家宝收集量',
    'Finder': '发现者',
    'Gatherer': '采集者',
    'Accumulator': '积聚者',
    'Fancier': '爱好者',
    'Aficionado': '酷爱者',
    'Devotee': '狂热信徒',
    'Connoisseur': '鉴定大师',
    'Expert': '专家',
    'Curator': '主管',
    'Gem Collection': '宝石收集量',
    'What\'s This For?': '这是干什么用的？',
    'Collector of Shinies': '亮闪闪收藏家',
    'Dragimp Lover': '脆皮龙爱好者',
    'Expert of Shinies': '亮闪闪专家',
    'Jeweller': '珠宝商',
    'Gemaster': '宝石大师',
    'Daily Bonus': '日常奖励',
    'Daytermined': '日之决意',
    'Daydicated': '日之献身',
    'Daystiny': '日之命运',
    'Daylighted': '日之愉悦',
    'Daystroyer': '日之破坏',
    'Daylusional': '日之妄想',
    'Dayrailed': '日之脱轨',
    'Daypocalyptic': '日之灾变',
    'Humane Run': '仁慈的战斗',
    'Progress': '进度',
    'Complete!': '完成！',
    'Not Earnable!': '无法获得！',
    'Still Earnable!': '仍然可获得！',
    'Progress: You need to portal to become eligible': '进度：您需要使用传送门后才可以开始尝试成就',
    'Progress: You lost more than once on Z': '进度：您已经战败超过一次了，发生在区域',
    'Progress: You lost too many fights!': '进度：您输了太多次战斗了！',
    'Progress: You\'ve lost once this Zone, be careful!': '进度：此区域您已经战败了一次，请小心了！',
    'Progress: Still Earnable!': '进度：仍然可获得！',
    'Row Finished! (You need to portal to become eligible': '此类成就全部完成！(您需要使用传送门后才可以开始尝试成就',
    'Row Finished! (You lost more than once on Z': '此类成就全部完成！(您已经战败超过一次了，发生在区域',
    'Row Finished! (You lost too many fights!': '此类成就全部完成！(您输了太多次战斗了！',
    'Row Finished! (You\'ve lost once this Zone, be careful!': '此类成就全部完成！(此区域您已经战败了一次，请小心了！',
    'Row Finished! (Still Earnable!': '此类成就全部完成！(仍然可获得！',
    'Sitter': '护工',
    'Watchdog': '看门狗',
    'Nanny': '保姆',
    'Caretaker': '监护人',
    'Supervisor': '主管人',
    'Advocate': '拥护者',
    'Guardian': '守护者',
    'Coddler': '纵容者',
    'Savior': '拯救者',
    'Defender': '防御者', //包括两个成就名称
    'Trimp Lover': '脆皮爱人',
    'Righteous': '公平正义',
    'Mapless Drifter': '无图漂泊者',
    'Progress: You must be in Universe 2!': '进度：您需要在宇宙2中才可以尝试成就！',
    'Progress: You ran a Map on Z': '进度：您运行了地图，发生在区域',
    'Map Misser': '地图思念者',
    'Map Lacker': '地图缺乏者',
    'Mapophobia': '地图恐惧症',
    'GPS': '导航系统',
    'Undisoriented': '方位确定',
    'Need No Map': '无需地图',
    'The Efficient': '高效',
    'Bulldozer': '推土机',
    'Worldly': '世界之子',
    'Pusher': '型推进者',
    'Defragmented': '碎片消除',
    'Stubborn': '顽固不化',
    'Shielded': '护盾相关',
    'Progress: Already earned!': '进度：已经获得！',
    'Progress: Still Earnable! Lowest is': '进度：仍然可获得！最低为 ',
    'Row Finished! (Already earned!': '此类成就全部完成！(已经获得！',
    'Crumb of Comfort': '聊可解忧',
    'Common Comfort': '普通慰藉',
    'Controlled Comfort': '可控慰藉',
    'Certain Comfort': '特定慰藉',
    'Copious Comfort': '充裕慰藉',
    'Critical Comfort': '关键慰藉',
    'Cosmic Comfort': '宇宙慰藉',
    'Colossal Comfort': '巨大慰藉',
    'Ceaseless Comfort': '无休慰藉',
    'Complete Comfort': '完全慰藉',
    'Speed: The Block': '最速: 障碍区',
    'You\'re in the wrong Universe! Best run is': '您进入了错误的宇宙！最快为',
    'Progress: Best run is': '进度：最快为',
    'Progress: Too slow! Best run is': '进度：因太慢失败了！最快为',
    'Row Finished! (Best run is': '此类成就全部完成！(最快为',
    'Block Hobbyist': '障碍业余爱好者',
    'Block Apprentice': '障碍学徒',
    'Block Professional': '障碍专家',
    'Block Rockstar': '障碍摇滚巨星',
    'Speed: The Wall': '最速: 高墙',
    'Wall Novice': '高墙萌新',
    'Wall Student': '高墙学生',
    'Wall Contender': '高墙争夺者',
    'Wall Scaler': '高墙攀登者',
    'Speed: Anger': '最速: 愤怒维度',
    'Angry Jogger': '愤怒慢跑者',
    'Angry Runner': '愤怒运行者',
    'Angry Sprinter': '愤怒冲刺者',
    'Angry Racer': '愤怒车手',
    'Angry Teleporter': '愤怒传送者',
    'Speed: Doom': '最速: 末日神殿',
    'Walk to Doom': '末日漫步',
    'Trot to Doom': '末日疾走',
    'Canter to Doom': '末日小跑',
    'Gallop to Doom': '末日疾驰',
    'Speed: The Prison': '最速: 监狱',
    'Prison Odyssey': '监狱跋涉',
    'Prison Expedition': '监狱远征',
    'Prison Adventure': '监狱冒险',
    'Prison Trek': '监狱远行',
    'Prison Tour': '监狱之旅',
    'Prison Road Trip': '监狱路途',
    'Prison Hike': '监狱远足',
    'Prison Jog': '监狱慢跑',
    'Prison Sprint': '监狱冲刺',
    'Speed: Bionic': '最速: 仿生仙境',
    'Lover of Bots': '机器人爱人',
    'Friend of Bots': '机器人之友',
    'Acquaintance of Bots': '机器人熟人',
    'Bot Disliker': '机器人厌恶者',
    'Bot Hater': '机器人憎恨者',
    'Bot Slayer': '机器人杀手',
    'Speed: Star': '最速: 爆炸之星',
    'Cosmic Curiosity': '宇宙求知欲',
    'Star Struck': '星际碰撞',
    'Space Speeder': '太空变速器',
    'Intense Inertia': '强大惯性',
    'Stellar Striker': '恒星大冲撞',
    'Insane Imploder': '疯狂爆炸',
    'Born Imploded': '生而爆炸',
    'Speed: Spire': '最速: 尖塔',
    'Spire Trialer': '尖塔试炼者',
    'Spire Rider': '尖塔骑手',
    'Spire Strider': '尖塔漫游者',
    'Spire Glider': '尖塔滑翔者',
    'Spire Flier': '尖塔飞行家',
    'Inspired': '尖塔启迪',
    'Spire Spirer': '尖塔螺旋者',
    'Speed: Spire II': '最速: 尖塔 II',
    'Toxic Treader': '毒之踏破者',
    'Toxic Trotter': '毒之疾走者',
    'Toxic Traveller': '毒之旅行者',
    'Toxic Tempo': '毒之节奏',
    'Toxic Teleporter': '毒之传送者',
    'Speed: Spire III': '最速: 尖塔 III',
    'Chillin': '冰冷刺骨',
    'Arctic Accelerator': '极地加速器',
    'Rimy Runner': '霜冻运行者',
    'Subzero Sprinter': '零下冲刺者',
    'Frigid and Furious': '寒冷之怒',
    'Speed: Spire IV': '最速: 尖塔 IV',
    'Walker': '行者',
    'Gusty Gait': '阵风步法',
    'Breeze Breaker': '微风破坏者',
    'Zippy Zephyr': '迅捷微风',
    'Temporal Tempest': '暂时风暴',
    'Stratus Screamer': '卷云尖啸',
    'Tearin\' Tornado': '撕裂狂风',
    'Speed: Spire V': '最速: 尖塔 V',
    'actiVe': 'V激活',
    'resolVed': 'V决心',
    'traVeler': 'V旅者',
    'driVen': 'V驱动',
    'triVialized': 'V轻视',
    'U2 Speed: Big Wall': '宇宙2最速：巨墙',
    'Wall Crawler': '墙爬行者',
    'Wall Scholar': '墙学者',
    'Wall Mauler': '墙槌手',
    'Wall Baller': '墙土豪',
    'U2 Speed: Palace': '宇宙2最速：棱镜宫殿',
    'Peasant': '佃农',
    'Jester': '弄臣',
    'Advisor': '顾问',
    'Ruler': '支配者',
    'U2 Speed: Atlantrimp': '宇宙2最速：亚特兰蒂皮',
    'Sinker': '沉没者',
    'Floater': '漂浮者',
    'Swimmer': '游泳者',
    'U2 Speed: Melting': '宇宙2最速：熔点',
    'Thawed': '解冻',
    'Tempered': '升温',
    'Melty': '熔化',
    'Molten': '熔融',
    'Feats': '壮举',
    'Forgot Something': '忘了件事',
    'Complete the Dimension of Anger before buying Bounty': '在购买赏金升级前通过愤怒维度地图',
    'Underachiever': '后进者',
    'Reach Z30 with no respec and 60 or less He spent': '在氦花费不超过60，且未在传送后进行特权洗点的前提下到达区域30',
    'Hoarder': '囤积者',
    'Needs Block': '需要格挡',
    'Die 50 times to a single Voidsnimp': '在同一只脆皮虚空蛇上战败50次',
    'Underbalanced': '平衡不足',
    'Beat Balance, never having more than 100 stacks': '在平衡从未超过100层的前提下，完成平衡挑战',
    'Peacekeeper': '和平使者',
    'Reach Zone 10 with 5 or fewer dead Trimps': '在脆皮死亡数未超过5的前提下，到达区域10',
    'Elite Feat': '精英壮举',
    'Reach exactly 1337 He/Hr': '氦/小时正好达到1337',
    'Grounded': '踏实',
    'Attack 20 times without dying in Electricity': '在电流挑战中，连续攻击20次不死亡',
    'Maptastic': '有图有资源',
    'Create a perfect Map': '制造一张完美的地图',
    'Now What': '就这',
    'Use up all 7 Daily Challenges': '完成当前全部的7次日常挑战',
    'Swag': '有型',
    'Equip a magnificent or better Staff and Shield': '同时装备华丽及以上级别的权杖和盾牌',
    'Workplace Safety': '安全生产',
    'Reach Z60 with 1000 or fewer dead Trimps': '在脆皮死亡数未超过1000的前提下，到达区域60',
    'No Time for That': '没空理它',
    'Reach Z120 without using manual research': '在不使用手动研究的前提下，到达区域120',
    'Tent City': '帐篷城',
    'Reach Z75 without buying any housing': '在不建造任何住房的前提下，到达区域75',
    'Consolation Prize': '安慰奖',
    'Find an uncommon heirloom at Z146 or higher': '在区域146及以上获得一个罕见传家宝',
    'Holey': '多洞',
    'Shaggy': '粗糙',
    'Reach Z60 with rank III or lower equipment': '在装备未超过III级的前提下，到达区域60',
    'One-Hit Wonder': '一鸣惊人',
    'Kill an Improbability in one hit': '一击杀死一个乌有者',
    'Survivor': '生还者',
    'Beat a Lv 60+ Destructive Void Map with no deaths': '在没有战败过的前提下，通过一张60级以上的破灭虚空地图',
    'Thick Skinned': '皮糙肉厚',
    'Beat Crushed without being crit past Z': '在到达特定区域后未受到过敌人暴击的前提下，完成粉碎挑战。该区域为区域',
    'Great Host': '热情好客的主人',
    'Kill an enemy with 100 stacks of Nom': '杀死一个有100层美味的敌人',
    'Unbroken': '坚不可摧',
    'Break the Planet with 5 or fewer lost battles': '在战败不超过5次的前提下破碎行星',
    'Unemployment': '失业',
    'Reach Z60 without hiring a single Trimp': '在不雇佣脆皮工作的前提下，到达区域60',
    'Very Sneaky': '打枪的不要',
    'Complete a Zone above 99 without falling below 150 stacks on Life': '生命挑战中，在区域99以上的一个区域中从未低于150层亡灵化',
    'Extra Crispy': '嘎蹦脆',
    'Spend at least 10 minutes breeding an army with Geneticists': '利用遗传学家，花费至少10分钟繁殖一队士兵',
    'Trimp is Poison': '脆皮有毒',
    'Beat Toxicity, never having more than 400 stacks': '在毒性从未超过400层的前提下，完成毒性挑战',
    'Realtor': '房产中介',
    'Own 100 of all housing buildings': '所有类型住房的数量都至少为100',
    'Gotta Go Fast': '抓紧时间',
    'Overkill every possible world cell before Z': '在到达特定区域之前，超杀世界上的每个格子。该区域为区域',
    'Grindless': '佛系玩家',
    'Complete Watch without entering maps or buying Nurseries': '在未进入过地图，也没有建造托儿所的前提下，完成守望挑战',
    'Leadership': '领导才能',
    'Complete Lead with 100 or fewer lost battles': '在战败不超过100次的前提下，完成领导挑战',
    'Build your 10th Spire Floor': '建造第10层尖塔',
    'Stoned': '上头了',
    'Swagmatic': '岩浆套装',
    'Equip a Magmatic Staff and Shield': '同时装备岩浆级别的权杖和盾牌',
    'Brr': '冷冷冷冷冷',
    'Bring a world enemy\'s attack below': '让世界上一名敌人的攻击力低于',
    'Unsatisfied Customer': '不满的顾客',
    'Complete Lead with 1 or fewer Gigastations': '在千兆核心不超过1个的前提下，完成领导挑战',
    'Organic Trimps': '有机脆皮',
    'Complete Corrupted without Geneticists': '在不使用遗传学家的前提下，完成腐化挑战',
    'Fhtagn': '克总发糖',
    'Complete a Void Map at Z215 on Domination': '统治挑战中，在区域215通过一张虚空地图',
    'Invincible': '天下无敌',
    'Complete The Spire with 0 deaths': '在无战败的前提下通过尖塔',
    'Mighty': '非凡',
    'Overkill an Omnipotrimp': '超杀一名全能者',
    'Mother Lode': '肥羊',
    'Defeat a Healthy enemy with 200 stacks of wind': '击杀一名有200层风的健康敌人',
    'Infected': '感染者',
    'Build up a Poison debuff that\'s 1000x higher than your attack': '使您毒的效果达到您攻击力的1000倍',
    'Challenged': '挑战达人',
    'Earn a Challenge': '使挑战',
    'bonus of': '的加成达到',
    'Bionic Sniper': '仿生狙击手',
    'Complete a Bionic Wonderland map 45 levels higher than your Zone number': '通过一张地图等级高于您当前区域45级的仿生仙境地图',
    'Nerfed': '弱化',
    'Obliterate': '抹消',
    'Defeat an enemy on Obliterated': '抹杀挑战中，击杀一个敌人',
    'M\'Algamator': '初并者',
    'Find an Amalgamator on Z': '在初始区域就获得一个合并者，也就是在区域',
    'Critical Luck': '暴击豪运',
    'Get 10 Red Crits in a row': '连着10次红色暴击',
    'AntiScience': '科学无用',
    'Beat Z75 on the Scientist V challenge': '科学家 V挑战中，通过区域75',
    'HeMergency': '氦急情况',
    'Gain at least 01189998819991197253 He from one Bone Portal': '一次骨头传送门获得01189998819991197253氦(译者注：即科学记数法下的1.19e18)',
    'Eradicate': '杀绝',
    'Kill an Enemy on Eradicated': '灭绝挑战中，击杀一个敌人',
    'Invisible': '匿迹隐形',
    'Complete Spire V with no deaths': '在塔内没有战败过的前提下，通过尖塔 V',
    'Power Tower': '力量之塔',
    'Build your 20th Spire Floor': '建造第20层尖塔',
    'Bionic Nuker': '仿生爆发',
    'Complete a Bionic Wonderland map 200 levels higher than your Zone number': '通过一张地图等级高于您当前区域200级的仿生仙境地图',
    'Hypercoordinated': '超级协同',
    'Complete Spire II on the Coordinate challenge': '协同挑战中，通过尖塔 II',
    'Nerfeder': '超级弱化',
    'Imploderated': '抹杀爆星',
    'Beat Imploding Star on Obliterated': '抹杀挑战中，通过爆炸之星地图',
    'Wildfire': '野火',
    'Close 750 Nurseries at the same time': '一次性关闭750个托儿所',
    'Unessenceted': '究极精华',
    'Earn Dark Essence with no respec and 0 He spent': '在氦花费为0，且未在传送后进行特权洗点的前提下获得黑暗精华',
    'Melted': '岩杀',
    'Reach Magma on Obliterated': '抹杀挑战中，达到岩浆的区域',
    'Screwed': '万事皆休',
    'Break the Planet on Eradicated': '灭绝挑战中，破碎行星',
    'Eliter Feat': '超精英壮举',
    'Reach exactly 1337 Rn/Hr': '氡/小时正好达到1337',
    'Don\'t Need Luck': '无需运气',
    'One-shot a Dimension of Rage enemy on Unlucky while Unlucky': '不幸挑战中，当最低伤害数值第一位是奇数时，秒杀暴怒维度中的一个敌人',
    'Perfectly Balanced': '完全平衡',
    'Complete Downsize with an equal amount of Huts, Houses, Mansions, Hotels and Resorts': '在小屋、宅院、豪宅、宾馆和度假村数量完全相同的前提下，完成精简挑战',
    'Resourceyphobe': '资源恐惧症',
    'Complete Transmute without hiring a single Trimp': '在不雇佣脆皮工作的前提下，完成变形挑战',
    'Upsized': '增员',
    'Complete Unbalance with 500 stacks of Unbalance': '在拥有500层不平衡的前提下，完成不平衡挑战',
    'Unpoppable': '牢不可破',
    'Complete Bublé without using Prismal or respeccing Perks': '在未加点棱镜化，也未在传送后进行特权洗点的前提下，完成泡影挑战',
    'Pwnd': '大获全胜',
    'Complete Duel without ever falling below 20 points': '在从未低于20决斗点数的前提下，完成决斗挑战',
    'Solid': '固体',
    'Complete Melt without ever having more than 150 stacks': '在从未高于150层熔化的前提下，完成熔化挑战',
    'Coastapalooza': '捕手道滑行达人',
    'Complete Trappapalooza without Trapping on or above Z': '在到达特定区域后未使用过陷阱的前提下，完成捕手道达人挑战。该区域为区域',
    'Witherproof': '防止凋零',
    'Huffstle': '怒怒之城',
    'Kill 100 L5+ SA Enemies without dying': '在没有战败过的前提下，击杀100名等级5及以上的尖塔突击敌人',
    'Just Smack It': '事在人为',
    'Kill a L20+ SA Enemy without Shock, Bleed or Poison': '不使用震荡，流血或者剧毒的前提下，击杀1名等级20及以上的尖塔突击敌人',
    'Close Call': '有惊无险',
    'Complete Revenge with exactly 19 stacks': '在正好拥有19层复仇的前提下，完成复仇挑战',
    'Level Up': '等级提升',
    'Complete 80/80 quests on Quest': '在完成全部80次任务的前提下，完成任务挑战',
    'Unassisted': '一己之力',
    'Complete Archaeology without ever having more than 0 of one Relic': '在任意遗物数量从未超过0的前提下，完成考古学挑战',
    'Clear Skies': '晴空万里',
    'Complete Storm without ever encountering a Stormcloud': '在未使敌人获得过风暴云层数的前提下，完成风暴挑战',
    'Actually Insane': '完全失智',
    'Complete Insanity with 500 stacks without running a map above lvl': '在未运行过高于特定等级地图，且拥有500层失智的前提下，完成失智挑战。该等级为',
    'You\'re Doing it Wrong': '力挽狂澜',
    'Finish Berserk after reaching 20 Weakened Stacks before Z': '在到达特定区域前，至少拥有20层虚弱，然后完成狂战挑战。该区域为区域',
    'The Tortoise and the Bugs': '龟与虫',
    'Reach 100 Swarm Stacks by Z120 then complete Exterminate': '在区域120至少拥有100层虫群成长壮大层数，然后完成灭虫挑战',
    'Nurtured AF': '茁壮成长',
    'Reach L19 Cruffys by Z70 then complete Nurture': '在区域70朽朽达到19级，然后完成培养挑战',
    'Heavy Trinker': '符饰好重',
    'Collect 7500 Runetrinkets': '拥有7500个小符饰',
    'Peace': '和平终至',
    'Complete all 25 Mayhems': '完成所有25次暴乱挑战',
    'Mad Scientist': '疯狂科学家',
    'Complete a Z155 Void Map with 10 Gas Brews and 0 Void Pots': '在使用10次气态特饮且不使用魔药·虚空的前提下，通过一张155级的虚空地图',
    'You have completed every Achievement!': '您完成了所有的成就！',
    //游戏成就相关结束
    //游戏设置相关
    'Not Saving': '不自动保存',
    'Auto Saving': '自动保存',
    'Automatically save the game once per minute': '每分钟自动保存一次游戏',
    'AutoSaving': '自动保存',
    'Not AutoSaving': '不自动保存',
    'Not Saving Online': '不在线保存',
    'Saving with PlayFab': '使用PlayFab在线保存',
    'When the game saves, every 30 minutes also back up a copy online with PlayFab. While using this setting, you will be asked if you want to download your online save if it is ever ahead of the version on your computer. You can also manually import your save from PlayFab through the Import menu.': '当游戏保存时，每半小时还会在线备份到PlayFab。如果在线备份存档较为新一些，那么在使用此设置时，系统会询问您是否要下载在线存档替换。您也可以通过“导入”菜单手动从PlayFab导入存档。',
    'PlayFab Login': 'PlayFab 登录',
    'Login to PlayFab': '登录PlayFab',
    'Your Email': '您的电子邮箱',
    'For recovery, not required': '仅用于找回帐号，非必须',
    'PlayFab Username': 'PlayFab用户名',
    'Password': '密码',
    '6-30 Chars': '6-30字符',
    'Confirm Password': '确认密码',
    'Remember Account Info': '记住账号信息',
    'Login': '登录',
    'Register': '注册',
    'Send Password Reset Email': '发送密码重置邮件',
    'Register Playfab Account': '注册Playfab账号',
    'Recover Account Info': '找回账号信息',
    'While connected to PlayFab, every time you manually save and': '登录PlayFab后，每次手动保存和',
    'once per 30 minutes when auto-saving': '每隔30分钟自动保存时',
    'your file will also be sent to PlayFab\'s servers.': '您的存档也会同时备份到PlayFab的服务器。',
    'Data will be cleared from PlayFab\'s servers after 3 months of inactivity, this is not a permanent save!': '如果超过3个月没有任何活动迹象，那么PlayFab服务器将清除您的数据，请注意存档不是永久存在的！',
    'Register a PlayFab Account': '注册PlayFab账号',
    'Recover PlayFab Account Info -': '找回PlayFab帐号信息-',
    'Must have provided Email during registration': '注册时必须输入过电子邮箱',
    'Recovery Email Sent!': '找回帐号的邮件已发送！',
    'Unable to Initialize the PlayFab API. Please check to make sure third-party scripts are enabled for Trimps, and that PlayFab is not blocked.': '无法初始化PlayFab接口，请确保浏览器允许第三方脚本，且PlayFab未被阻止。',
    'Passwords do not match!': '两次输入的密码不一致！',
    'Unable to send registration request to PlayFab.': '无法向PlayFab发送注册请求。',
    'Unable to send login request to PlayFab.': '无法向PlayFab发送登录请求。',
    'PlayFab Conflict': 'PlayFab存档冲突',
    'It looks like your save stored at PlayFab is further along than the save on your computer.': '看起来PlayFab上的存档比您目前电脑上的存档要新一些。',
    'Would you like to Download your save from PlayFab, Overwrite your online save with this one, or Cancel and do nothing?': '您是想要从PlayFab上下载存档，还是用本地存档覆盖PlayFab上的存档，抑或者是什么都不做，退出？',
    'Download From PlayFab': '从PlayFab下载',
    'Overwrite PlayFab Save': '覆盖PlayFab存档',
    'Scientific Notation': '科学记数法',
    'Standard Formatting': '标准格式',
    'Engineering Notation': '工程记数法',
    'Alphabetic Notation': '字母记数法',
    'Hybrid Notation': '混合记数法',
    'Logarithmic Notation': '对数记数法',
    'Swap between Standard Formatting (12.7M, 540B), Engineering Notation (12.7e6, 540e9), Scientific Notation (1.27e7, 5.40e11), Alphabetic Notation (12.7b, 540c), Hybrid Notation (Standard up to e96, then Engineering. Mimics Standard pre 4.6), and Logarithmic Notation (10^7.10, 10^8.73). Hold Ctrl while clicking Logarithmic Notation to change the base.': '在标准格式(12.7M，540B)，工程记数法(12.7e6，540e9)，字母记数法(12.7b，540c)，混合记数法(直到e96之前使用标准格式，之后使用工程记数法)，对数记数法(10^7.10，10^8.73)，以及科学记数法(1.27e7，5.40e11)之间切换。当使用对数记数法时，按下Ctrl键再点击可以切换底数。',
    'Enter a number here to use as the base for your logarithmic numbers! (Default is': '设置对数记数法使用的底数！(默认值为',
    'Configure Log': '设置对数',
    'Shift for Tooltips': '按Shift键显示提示框',
    'Showing Tooltips': '显示提示框',
    'will ensure that all tooltips are shown when you mouse over them.': '可以在鼠标停留时显示所有提示框。',
    'will hide most tooltips by default, unless you are holding your shift key. Keep this setting in mind when unlocking new things to do, as much of the game is explained in tooltips!': '将默认隐藏绝大部分提示框，除非按住Shift键。解锁新内容时最好注意一下这边的设置，因为大部分游戏内容都是在提示框里进行说明的！',
    'Top Right Tips': '提示框顶部靠右',
    'Center Bottom Tips': '提示框底部居中',
    'Center Top Tips': '提示框顶部居中',
    'Toggle the position of your tooltips between top right, centered above or centered below the mouse.': '切换提示框处于您的鼠标顶部靠右、底部居中还是顶部居中。',
    'No Queue Animation': '关闭队列动画',
    'Queue Animation': '开启队列动画',
    'Toggle on or off the building queue blue color animation.': '切换队列蓝色动画的开关。',
    'No Outline': '无进度条轮廓线',
    'Outline': '有进度条轮廓线',
    'Toggle on or off a black bar at the end of all progress bars. Can help discern where the progress bar ends.': '切换进度条末端是否有一条轮廓线。可以帮助辨识进度条的末端。',
    'No Menu Formatting': '不启用工作及建筑大数字',
    'Formatting Menu': '启用工作及建筑大数字',
    'Toggle on or off large number formatting for jobs and buildings on the left menu.': '切换是否对左端菜单中工作及建筑的大数字启用大数记数法。',
    'No Perk Formatting': '不启用特权等级大数字',
    'Formatting Perk Levels': '启用特权等级大数字',
    'Toggle on or off large number formatting for Perk levels.': '切换是否对特权等级的大数字启用大数记数法。',
    'Large Perk Buttons': '特权按钮布局：大',
    'Small Perk Buttons': '特权按钮布局：小',
    'Tiny Perk Buttons': '特权按钮布局：微小',
    'Shrink the size of perk buttons in the Portal and View Perks windows.': '修改传送门和查看特权界面中特权按钮的大小。',
    'is default and fits 5 buttons per row.': '为默认选项，一行可以容纳5个按钮。',
    'shrinks the size to fit 6 per row, and': '缩小了一些，一行可以容纳6个按钮，而 ',
    'fits 7 per row.': '一行可以容纳7个按钮。',
    'No Progress Bars': '关闭进度条',
    'Progress Bars': '开启进度条',
    'Performance Bars': '开启性能进度条',
    'Toggle progress bars to on, off, or performance. Performance and off will reduce CPU usage.': '切换进度条的开关。性能进度条或关闭进度条可以减少CPU占用。',
    'Not Confirming': '风险购买不弹出确认框',
    'Confirming': '风险购买弹出确认框',
    'Toggles on or off the confirmation popup on scary purchases like Wormholes.': '切换是否在有风险的购买，如建造虫洞、盾牌格挡升级和千兆核心升级时弹出确认框。',
    'Not Locking': '解锁后不锁定队列',
    'Locking': '解锁后锁定队列',
    'Enables/disables the locking of buildings, jobs, upgrades, and equipment for 1 second after unlocking something new. Useful to prevent accidental purchases.': '切换解锁新建筑、工作、升级和装备后是否在1秒内锁定队列。可以有效避免误操作。',
    'No Achieve Popup': '不弹出获得成就提示框',
    'Popup Achievements': '弹出获得成就提示框',
    'Decide whether or not you want popups on completing an achievement.': '切换是否在获得成就以后弹出提示框。',
    'Tier First': '阶级优先',
    'Tier first': '阶级优先',
    'Equip first': '装备优先',
    'Equip First': '装备优先',
    'Choose which upgrades you want first if it has been a while since you last ran maps.': '选择想要在地图中先获得的升级。',
    'will cause maps to drop all items for the lowest tier before moving to the next. (Greatsword II -> Breastplate II -> Shield III': '地图在掉落更高阶升级前会优先掉落所有更低阶升级 (巨剑 II -> 胸铠 II -> 盾牌 III',
    'will start from Shield and drop all available Shield prestiges before continuing to Dagger and so on. (Shield III -> Shield IV -> Dagger III': '地图从盾牌的升级开始掉落，全部掉落完以后，再开始掉落匕首的升级，依此类推 (盾牌 III -> 盾牌 IV -> 匕首 III',
    'Repeat Forever': '永远重复',
    'Repeat to': '重复次数：',
    'Repeat for Any': '重复到全满',
    'Repeat for Items': '重复到无特殊',
    'will cause the map to continually repeat if Repeat Maps is enabled.': '启用时，地图将不停重复运行。',
    'will repeat unless there are no more special items left for that level of map.': '启用时，只有在该地图已经获得全部装备以后才关闭重复。',
    'will repeat unless you have 10 Map Bonus stacks.': '启用时，只有在地图奖励层数达到10层后才关闭重复。',
    'will repeat unless there are no special items available AND you can not earn more Map Bonus stacks.': '启用时，只有在该地图已经获得全部特殊掉落(装备、升级及地图奖励)后才关闭重复。',
    'This setting only matters if Repeat is on. Toggling Repeat off will still leave the map when it is finished no matter what.': '只有在开启重复时此设置才会生效。如果关闭重复，那么通过地图以后将会离开。',
    'Exit to Maps': '退回选地图',
    'Exit to World': '退回世界',
    'Choose whether to go to the Maps Screen or World after completing a map.': '在通过地图以后返回选地图界面还是返回世界。',
    'One Void Map': '只运行一张虚空地图',
    'Finish All Voids': '运行所有虚空地图',
    'Decide if you want to continue running the rest of your Void Maps after finishing one.': '切换在通过一张虚空地图后，是否继续运行剩余的虚空地图。',
    'Not Confirming Rare': '不确认稀有资源使用',
    'Confirming Rare Stuff': '确认稀有资源使用',
    'Hide popup confirmation messages when spending rare resources in the Bone Trader or Heirlooms menus.': '切换在骨法商人或传家宝菜单花费稀有资源时，是否弹出提示框。',
    'Not Alerting': '关闭提醒',
    'Alerting': '开启提醒',
    'Toggle on or off the display of yellow alert icons when unlocking something new.': '切换是否在解锁新东西的时候显示黄色感叹号提醒。',
    'Less Breed Timer': '简略繁殖计时',
    'More Breed Timer': '详尽繁殖计时',
    'Display time to breed a full group of soldiers next to the current breed timer.': '切换是否在当前繁殖计时旁边显示一整队士兵繁殖所需的时间。',
    'Background': '背景',
    'Default Theme': '默认主题',
    'Theme': '主题',
    'Gradient Theme': '渐变主题',
    'Toggle between the default Trimps theme, a custom dark theme made by u/Grabarz19, a gradient theme by u/k1d_5h31d0n, and the default theme with a black background.': '在以下主题之间切换：默认脆皮主题，u/Grabarz19创作的黑暗主题，u/k1d_5h31d0n创作的渐变主题，以及黑色背景的默认主题。',
    'Not Fading': '关闭渐隐效果',
    'Fading': '开启渐隐效果',
    'Toggle on or off the fade in effect on elements.': '切换是否开启游戏元素的渐隐效果。',
    'Minimalist Maps': '关闭额外地图信息',
    'Extra Map Info': '开启额外地图信息',
    'Toggle on or off adding extra information to map items.': '切换是否在选地图界面显示额外的地图物品信息。',
    'Not Averaging': '不平均计算劫掠明细',
    'Averaging': '平均计算劫掠明细',
    'Toggle whether or not loot from maps and the world should be counted in the loot breakdown and tooltip calculations. Calculates a moving average of the loot. If you want to clear the average, try toggling it off and on again.': '切换是否在劫掠明细及相应提示框中平均计算地图和世界的战利品。根据当前情况进行计算。如果您想要重新计算，可以关闭再开启此项。',
    'No Heirloom Pop': '不弹出获得传家宝提示框',
    'Popping Heirlooms': '弹出获得传家宝提示框',
    'Decide whether or not you want popups on looting an Heirloom.': '切换是否在获得传家宝以后弹出提示框。',
    'Minimal Perk Info': '简单特权信息',
    'Extra Perk Info': '额外特权信息',
    'Decide whether or not to show extra information on Perk buttons': '切换是否在特权按钮上显示额外的信息。',
    'Wait to Travel': '等待士兵战死',
    'Auto Abandon': '自动放弃士兵',
    'Decide whether or not to wait for soldiers to die on switching between maps and world. Toggling this on will automatically abandon your soldiers.': '切换在世界和地图之间切换时等待士兵战死还是自动放弃士兵。',
    'Less Map Buttons': '关闭额外地图按钮',
    'Extra Map Buttons': '开启额外地图按钮',
    'Toggle the button menu to the right of the map grid': '切换是否开启地图区域右侧的按钮菜单。',
    'Geneticistassist Settings': '遗传学家助手设置',
    'Customize your three available Geneticistassist targets, choose options for firing and sending, and decide whether or not Geneticistassist should start automatically when unlocked each run.': '为您的遗传学家设置三个目标，设置解雇和雇佣的选项，以及设置是否在每轮解锁后立刻启用遗传学家助手。',
    'Unable to pull info from input boxes. Try saving and refreshing?': '无法读取输入数据。请保存后尝试刷新？',
    'Sorry, all numbers must be less than 5000.': '抱歉，所有的数字必须不大于5000。',
    'Customize the target thresholds for your Geneticistassist! Use a number between 0.5 and 5000 seconds for all 3 boxes. Each box corresponds to a Geneticistassist toggle threshold.': '设置遗传学家助手的目标阈值！在下面的三个输入框内，请输入0.5至5000秒之间的数字。每个输入框内的数值都代表了遗传学家的一个阈值。',
    'Liquification Off': '关闭液化',
    'Liquification On': '开启液化',
    'Enable or disable Liquification. Nothing in game should be impossible to complete with Liquification enabled, but if you just want to slow things down then you have every right to do so.': '开启或关闭液化。没有什么东西是在液化下做不到的，不过是否关闭您说了算。',
    'No Overcolors': '无超杀效果颜色',
    'Normal Overkill Colors': '普通超杀效果颜色',
    'Connected Overkill Colors': '连带超杀效果颜色',
    'Choose if you would like to see a different cell color for cells that you overkilled.': '选择是否用特别的颜色标记超杀格子。',
    'will not change any colors based on Overkill.': '在超杀时不改变格子颜色。',
    'is the default setting, and shows a special color for cells that were Overkilled.': '为默认选项，会改变被超杀格子的颜色。',
    'will show the Overkill cell colors for all cells while Overkilling.': '在超杀时改变所有格子的颜色。',
    'Not Forcing Queue': '不强制使用队列',
    'Forcing Queue': '强制使用队列',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  only to Warpstation. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前只对跃迁核心生效。可能对于检查建筑成本会有帮助！',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  to Warpstation and AutoStorage. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前对跃迁核心和自动存储生效。可能对于检查建筑成本会有帮助！',
    'Keep Fighting at Spires': '入塔：继续战斗',
    'Map at Spires': '入塔：进图',
    'Map at Top 2 Spires': '入塔：前2塔进图',
    'Map at Top Spire': '入塔：顶塔进图',
    'Choose whether you would like the game to pause combat by sending you to maps when you reach a Spire.': '切换是否在进入尖塔时停止战斗并切换到地图。',
    'will not interrupt you when reaching a Spire,': '不会切换到地图，',
    'will send you to maps on every Spire,': '在每次进入尖塔时都会切换到地图，',
    'will send you to maps at the highest and second highest level Spire reached, and': '在进入曾到达过的最高两个尖塔时切换到地图，而 ',
    'will switch to maps only on the single highest Spire reached.': '只在进入曾到达过的最高尖塔时切换到地图。',
    'No Map At Zone': '不自动进图',
    'Map At Zone': '自动进图',
    'Map At Z': '进图区域：',
    'Map At Zone (A': '自动进图(A',
    'Map At Zone (B': '自动进图(B',
    'When enabled, you will automatically abandon your Trimps in the World and enter the Map Chamber as soon as you hit your specified Zone number.': '切换是否在到达特定层数以后放弃士兵并立刻进入地图界面。',
    'Configure with hotkey Z': '可以使用快捷键：Z来快速设置',
    'Set Map At Zone': '自动进图设置，预设区域必须为10以上，1000以下，且重复区域和预设区域、格子不可冲突，否则下方会有红字报错',
    'Active?': '激活？',
    'Start': '起点',
    'End': '终点',
    'Exit At': '退出',
    'Run Map?': '进图？',
    'Use': '使用',
    'Map': '地图',
    'Repeat': '重复',
    'Set': '设置',
    'Repeat Until': '重复次数',
    'Exit To': '退出到',
    'Run Bionic': '运行仿生',
    'Run ': '运行',
    'Don\'t Change': '不作变更',
    'X Times': 'X的值',
    'Just This Zone': '仅此区域',
    'Run Every Zone': '每个区域都运行',
    'Run Every Other Zone': '其他区域都运行',
    'Run Every 3 Zones': '每3个区域运行',
    'Run Every 5 Zones': '每5个区域运行',
    'Run Every 10 Zones': '每10个区域运行',
    'Run Every 30 Zones': '每30个区域运行',
    'Add Row': '增加一行',
    'Swap to Preset A': '切换为预设A',
    'Swap to Preset B': '切换为预设B',
    'No Timestamps': '关闭时间戳',
    'Local Timestamps': '本地时间戳',
    'Run Timestamps': '自上次传送时间戳',
    'Choose whether or not to display timestamps in the message log.': '切换是否在消息框内显示时间戳。',
    'will log the current time according to your computer,': '根据您电脑本地的时间来记录时间，',
    'will log how long it has been since your run started. Note that toggling this setting will not add or remove timestamps from previous messages, but will add or remove them to or from any new ones.': '根据上次使用传送门开始已用的时间来记录时间。此设置只对新的消息生效。',
    'Limited GA Firing': '遗传学家限制解雇',
    'Geneticistassist Fire': '遗传学家解雇',
    'No GA Firing': '遗传学家不解雇',
    'Toggle between': '在以下三者中切换：',
    'and': ' 及 ',
    'will prevent Geneticistassist from firing Farmers, Lumberjacks, or Miners.': '限制遗传学家解雇农民、伐木工和矿工。',
    'is the default value, and allows Geneticistassist to fire anything.': '为默认选项，遗传学家可以解雇任何人。',
    'prevents your Geneticistassist from being able to fire anything at all, including other Geneticists.': '不允许遗传学家解雇任何人，哪怕是它们自己。',
    'Large Buttons': '大按钮',
    'Small Buttons': '小按钮',
    'Tiny Buttons': '微小按钮',
    'Shrink the buttons in the menu where you purchase Buildings, Upgrades, Jobs, and Equipment.': '修改购买建筑、升级、工作和装备菜单的按钮大小。',
    'is default and fits 4 buttons per row.': '为默认选项，一行可以容纳4个按钮。',
    'shrinks the size to fit 5 per row, and': '缩小了一些，一行可以容纳5个按钮，而 ',
    'fits 6 per row. Small and Tiny may not be readable on small screens.': '一行可以容纳6个按钮。小按钮和微小按钮在较小的屏幕上可能无法看清楚。',
    'No Mastery Info': '无专精信息',
    'Alert Mastery': '专精提醒',
    'Show Essence': '显示精华数',
    'Hybrid Alerts': '混合专精提醒',
    'Choose what you would like to see on your Mastery Tab!': '切换您想要在专精选项卡上看到的信息！',
    'will keep the tab clean and static.': '不会显示任何额外信息。',
    'will show an alert on the tab as soon as a new Mastery becomes affordable.': '将在黑暗精华足够升级新的专精时用感叹号进行提醒。',
    'will always show your total amount of unspent essence on the tab.': '在选项卡上一直显示未使用的黑暗精华数量。',
    'Hybrid Essence': '混合专精提醒',
    'will show your total amount of unspent essence on the tab, but will switch to the alert icon once you have enough essence for a new Mastery.': '在选项卡上显示未使用的黑暗精华数量，但当黑暗精华足够升级新的专精时切换为感叹号提醒。',
    'Block Big Popups': '禁止弹出大窗口',
    'Allow Big Popups': '允许弹出大窗口',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire, and the popup on reaching Magma.': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示，岩浆提示。',
    'Note that this setting only blocks large popups once your Highest Zone Reached is 20 Zones past the location of the popup': '注意：此设置只在最高通过区域高于提示所在区域20层以上时禁止弹出大窗口',
    'Default Generator': '默认发生器',
    'Gain Fuel': '得燃料',
    'Hybrid': '混合型',
    'Choose what mode the Dimensional Generator should start each run on.': '切换每轮游戏维度发生器的初始运行模式。',
    'will continue with whatever setting you were using at the end of your last run.': '将继续使用您上次传送前游戏的设置。',
    'The Rest of The Settings': '剩余的选项',
    'are named by what mode will be set to active at the start of each run.': '决定每轮游戏初始运行在哪个模式下。',
    'Hold Ctrl while clicking to open the Generator State Configuration menu': '按下Ctrl键再点击可以打开维度发生器状态设置菜单',
    'No Snow': '不显示雪',
    'Show Snow': '显示雪',
    'Disable the snow effect in the world.': '切换世界中雪的效果。',
    'This will take effect on the next Zone after this setting is changed': '切换选项后在下个区域才生效',
    '. This setting is temporary, and will melt when the snow does.': '。此设置为临时设置，雪融后将消失。',
    'No Pumpkimps': '无脆皮南瓜怪',
    'Show Pumpkimps': '显示脆皮南瓜怪',
    'Bordered Pumpkimps': '脆皮南瓜怪边框',
    'Choose between': '在以下三者中切换：',
    '. This setting applies only to the visual effect of Pumpkimp Zones in the world, does not apply to maps, and has no impact on how many Pumpkimps or Pumpkimp Zones actually spawn. This setting is temporary and will rot away after the Pumpkimp season!': '。此设置只对世界上的脆皮南瓜怪区域显示效果生效，对地图无效，且不会影响脆皮南瓜怪的数量或区域。此设置为临时设置，在脆皮南瓜怪活动期满后将消失！',
    'is the default, and displays Pumpkimp Zones as normal.': '为默认选项，正常显示脆皮南瓜怪区域。',
    'displays Pumpkimp cells by changing the border color instead of the background color.': '不会改变脆皮南瓜怪区域的颜色，取而代之的是改变相应边框的颜色。',
    'will not show any indicator at all that a world Zone is a Pumpkimp Zone. Pumpkimps will still spawn at the same rate.': '不显示脆皮南瓜怪区域。但脆皮南瓜怪仍然正常生成。',
    'No Gene Sending': '无遗传行军',
    'Using Gene Send': '使用遗传行军',
    'Enforce Gene Send': '强制遗传行军',
    'Wait For Gene Send': '等待遗传行军',
    'When': '当 ',
    'is enabled, as long as you have one Geneticist, AutoFight will automatically send soldiers to fight if they have been breeding for longer than your Geneticistassist setting.': '时，只要您拥有遗传学家，就会在士兵繁殖计时超过遗传学家设置时间的情况下开始自动战斗。',
    'is enabled, as long as you have one Geneticist, AutoFight will never send a group of Trimps to fight unless you are at max population or you have reached your set Geneticistassist timer.': '时，如果您拥有遗传学家，那么只在人口到达最大或者士兵繁殖计时超过遗传学家设置时间的情况下开始自动战斗。',
    'Finally, if you choose': '最后，如果选择 ',
    'and have at least one Geneticist, AutoFight will only send Trimps to fight after they have been breeding long enough to reach your set Geneticistassist timer. This guarantees that Anticipation and Geneticist levels build up for as long as your set timer, but may result in no soldiers being sent for some time while you sit at full population.': '并拥有遗传学家，那么只在士兵繁殖计时超过遗传学家设置时间的情况下开始自动战斗。此选项可以保证预期特权和遗传学家尽可能的到达最大效果，但可能导致人口最大时一段时间不自动战斗。',
    'Not Firing For Jobs': '关闭为工作而解雇',
    'Firing For Jobs': '开启为工作而解雇',
    'When enabled, hiring Trimps for jobs with scaling price increases (Trainer, Explorer, etc) while you have no workspaces will attempt to fire Farmers, Lumberjacks and Miners until you have enough room.': '切换是否在工作区不足以分配给价格累积的工作(训练师，探险家等)时解雇农民、伐木工或矿工腾出人手。',
    'Dynamic Giga Ctrl': '千兆核心动态Ctrl',
    'Always Giga Ctrl': '千兆核心常时Ctrl',
    'When enabled, all Gigastation purchases will act as if the Ctrl key was held, regardless of whether or not it actually was held. When disabled, you will have to hold Ctrl to tell Gigastations to automatically purchase Warpstations (See Gigastation tooltip for more info).': '当开启常时Ctrl时，所有千兆核心视为按下Ctrl再进行升级。当开启动态Ctrl时，您将需要自己按下Ctrl才能自动购买跃迁核心(详情可查看千兆核心提示框)。',
    'No Heirloom Animations': '关闭传家宝动画',
    'Heirloom Animations': '开启传家宝动画',
    'Enable/Disable animations on Heirlooms.': '切换传家宝动画的开关。',
    'Disable Hotkeys': '关闭快捷键',
    'Enable Hotkeys': '开启快捷键',
    'Enable or disable hotkeys.': '切换快捷键的开关。',
    'Don\'t Climb BW': '关闭仿生冲层',
    'Climb BW': '开启仿生冲层',
    'Decide whether or not you want your Trimps to automatically run the next Bionic Wonderland once they\'ve gotten all of the items from their current one. Repeat Maps must be toggled on for Climb BW to work.': '切换是否在获得当前仿生仙境地图全部升级后继续进入下一层仿生仙境地图。必须开启重复地图才能使此选项生效。',
    'No Offline Progress': '关闭离线进度',
    'Hybrid Offline': '混合离线',
    'Time Warp Only': '只使用时间跃迁',
    'Trustworthy Trimps Only': '只使用可信的脆皮',
    'will cause no extra resources to be earned and no time to be warped when you return to the game. The Portal and Zone timers will not advance while offline, and the game will be in the same state you left it when you come back. This can be useful for speedrun achievements or if you just really really don\'t trust your Trimps when you\'re gone.': '当返回游戏时不会获得任何额外资源，也不会触发时间跃迁。传送门和区域计时与离线前一致，游戏状态也保持不变。这在做最速系列成就时很有用，如果您真不信任脆皮的话也可以考虑使用。',
    'combines Time Warp and Trustworthy Trimps into the best offline experience that Science can buy. Time Warp caps at 24 hours, so using Hybrid Offline will grant Trustworthy Trimps at the beginning of your Time Warp for all offline time over 24 hours, and will also grant Trustworthy Trimps for any extra time should you choose to end Time Warp early. Note that the Portal Time and Time in Zone clocks will advance for all time granted by Trustworthy Trimps and by Time Warp.': '把时间跃迁和可信的脆皮结合起来使用。时间跃迁最多可以持续24小时，因此对于超过24小时的部分将启用可信的脆皮，如果中断了时间跃迁，剩余的时间将仍然触发可信的脆皮。传送门计时和区域计时将依照时间跃迁和可信的脆皮生效的时间增加相应数值。',
    'will grant up to 24 hours of your offline progress as Time Warp without granting any extra resources from Trustworthy Trimps at the beginning (for time over 24 hours), or at the end (for canceled Time Warp time). This can also be useful for timed runs or tracking stats, as the time added will be capped to however much time you spend in Time Warp.': '最多可以从时间跃迁中获得24小时的收益，并且不触发可信的脆皮。对于定时游戏或研究数据会很有用，因为游戏时间被时间跃迁限制了。',
    'will skip Time Warp when you come back and grant resources for all time offline from Trustworthy Trimps. For when you want to get back in the game as soon as possible!': '将跳过时间跃迁并从可信的脆皮获取全部离线收益。如果您想要尽快回到游戏中，可以选择这个。',
    'This setting can be changed from the Time Warp screen': '可以在时间跃迁画面中修改此设置',
    'or in Settings -> Other': '在设置的其它选项卡下也可以进行修改',
    'Archaeology Automator': '自动考古',
    'Customize the Archaeology Automator. Has no effect unless running the Archaeology Challenge.': '设置自动考古。只在考古学挑战中有效。',
    'Unpause Automator': '取消暂停考古',
    'Pause Automator': '暂停考古',
    'Hiding Achieves': '隐藏完成的成就',
    'Showing all Achieves': '显示所有成就',
    'Show or hide completed achievements.': '切换显示还是隐藏已完成的成就。',
    'View the Spire': '查看尖塔',
    'Your Spire is Sealed, but you can look at it here if you want to.': '尖塔暂时关闭了，但您可以在这里查看它。',
    'Don\'t Save on Pause': '暂停时不进行保存',
    'Save on Pause': '暂停时进行保存',
    'Save when pausing the game. Note that regardless of this setting, the game will not be saved on pause if AutoSave is disabled.': '切换是否可以在暂停时保存。请注意，如果自动保存被关闭了，那么无论此项的设置是什么，都不会在暂停时保存。',
    'Not Paused': '未暂停',
    'Paused': '已暂停',
    'Pause the game': '暂停游戏',
    'Pause your game. This will pause all resource gathering, offline progress, and timers. (Hotkey: Space': '暂停游戏。所有资源收益、离线进度和计时器都将暂停。(快捷键：空格',
    'Disable Pausing': '禁用暂停键',
    'Enable Pausing': '启用暂停键',
    'You can pause the game by clicking the run timer in the bottom right of the screen. This setting allows you to remove that ability!': '您可以点击右下角的计时器来暂停游戏。此设置决定是否关闭此功能！',
    'Delete Save': '删除存档',
    'Delete your save and start fresh. Your Trimps will not be happy.': '删除存档重新开始。您的脆皮可能不会对这个决定高兴的。',
    'Reset': '重置',
    'Are you sure you want to reset? This will really actually reset your game. You won\'t get anything cool. It will be gone.': '您确定要重置吗？您的所有游戏进度都将被抹除，您将一无所有的。',
    'This is not the soft-reset you\'re looking for. This will delete your save.': '这并不是您想象中的软重置。这只会删除您的存档。',
    //游戏设置相关结束
    //离线相关
    'Starting...': '开始……',
    'Cell': '格子',
    'Wanna run a map?': '想运行地图吗？',
    'World Level Map': '世界等级的地图',
    'Back to World': '返回世界',
    'What is This?!': '这是什么？！',
    'Lost Time': '时间补偿',
    'Neat': '很棒',
    'Stop Here': '停止补偿时间',
    'Your Trimps really missed you': '脆皮们真的想您',
    'Your Trimps didn\'t do dishes while you were gone': '您不在的时候脆皮们连碗都不洗',
    'A Scientist has been locked outside all night': '一名科学家一整晚都被锁在了外面',
    'There\'s a Snimp in the pantry': '储藏室冒出来了一只脆皮蛇',
    'Your Trimps threw a party while you were out': '您不在的时候脆皮们开了个派对',
    'Your Trimps raided your fridge while you were gone': '您不在的时候脆皮们把冰箱搬空了',
    'Some Trimps toilet papered your ship': '某几个脆皮把您的飞船弄得到处都是厕纸',
    'Your Trimps were a few minutes away from burning the place down': '脆皮们差点就把这地方烧掉了',
    'The Turkimps escaped again': '脆皮火鸡又逃跑了',
    'Your Trimps ran the AC all night': '脆皮们开了一晚上的空调',
    'Wow, such speed': '哇哦，这么快',
    'Your Trimps dinged your ship while out on a joyride': '脆皮们开着飞船兜风时把它弄坏了',
    'One of your Trimps got a tattoo while you were gone': '您不在的时候一个脆皮纹了个身',
    'Fluffy reminds you that he\'s not a babysitter': '绒绒友情提示：它不是保姆',
    'Scruffy reminds you that he\'s not a babysitter': '污污友情提示：它不是保姆',
    'Fluffy wrote a novel while you were gone': '您不在的时候，绒绒写了本小说',
    'Scruffy wrote a novel while you were gone': '您不在的时候，污污写了本小说',
    'Fluffy really missed you': '绒绒真的想您',
    'Scruffy really missed you': '污污真的想您',
    'Fluffy greets you excitedly': '绒绒很兴奋地欢迎了您',
    'Scruffy greets you excitedly': '污污很兴奋地欢迎了您',
    'Fluffy forgives you for leaving': '绒绒原谅了您的离去',
    'Scruffy forgives you for leaving': '污污原谅了您的离去',
    'No maps available': '无可用的地图',
    'Gain 1 map for each 8 hours away': '每离线8个小时可以获得一张地图',
    'Oof, you don\'t have enough fragments to run a map.': '哎呀，您的碎片不够了，无法制造地图。',
    'You can run': '等待时，您可以运行',
    'while you wait!': '！',
    'Use it wisely...': '请善加利用……',
    'Use them wisely...': '请善加利用……',
    'While you were out, your Trimps didn\'t get much done - unless you count destruction of property. Luckily you have a Time Portal! While you can\'t go forward in time, you can go back to keep the Trimps in line and I\'ll wait here for you.': '您不在的时候，脆皮们基本没什么进展——除非您把毁坏也算上。还好您有一个时空传送门！尽管您无法前往未来，您还是可以回到过去管管脆皮们，而我会在这里等着您。',
    'While you\'re in the past, everything will progress like normal, just much faster. The temporal displacement effects give you blurry vision and a headache (making fine control impossible), but you can force your Trimps to stop and run 1 map whenever you want for each 8 hours spent offline! Maps created this way will use your first preset settings at your selected level with Repeat for Items and Exit to World.': '当您回到过去时，一切都比正常来得更快。时移效应使您的视线模糊不清，且使您头疼欲裂(因此无法精密控制)，但每离线8个小时，您就可以强制脆皮们停下来运行1张地图！以此方法制造的地图等级与您选择的等级相同，将使用您的地图预设1，且启用重复到无特殊设置和退回世界设置。',
    'If your Trimps look stuck, you can always': '如果脆皮们卡住了，您可以随时 ',
    'to regain full control of your Trimps, and you\'ll still receieve resources from Trustworthy Trimps for any unused Time Warp time!': '来恢复脆皮的控制，而且您仍然可以从可信的脆皮那边获得时间跃迁剩余时间所对应的资源！',
    'You can Time Warp for 100% of the time you spent offline, up to a maximum of 24 hours.': '您可以在离线的全部时间内进行时间跃迁，但上限为24小时。',
    'You can change your Offline Progress setting to suit your needs!': '您可以根据需要，修改离线进度设置！',
    'Creek (': '海湾(',
    'Coast (': '海岸(',
    'Swamp (': '沼泽(',
    'Forest (': '森林(',
    'Mountain (': '山脉(',
    'Beach (': '海滩(',
    'Hill (': '山丘(',
    'Butte (': '孤峰(',
    'Ridge (': '山脊(',
    'Mesa (': '方山(',
    'Valley (': '山谷(',
    'Peak (': '顶峰(',
    'Canyon (': '峡谷(',
    'Plateau (': '高原(',
    'Crag (': '峭壁(',
    'Crater (': '陨坑(',
    'Oaks (': '橡林(',
    'Volcano (': '火山(',
    'Glacier (': '冰川(',
    'Brook (': '小溪(',
    'Cave (': '洞穴(',
    'Sea (': '大海(',
    'Ocean (': '大洋(',
    'Lake (': '湖泊(',
    'Jungle (': '丛林(',
    'Island (': '岛屿(',
    'Ruins (': '遗迹(',
    'Temple (': '神殿(',
    'Bog (': '泥沼(',
    'Grove (': '果林(',
    'Thicket (': '树丛(',
    'Woods (': '树林(',
    'Oasis (': '绿地(',
    'Mineshaft (': '深井(',
    'Tunnel (': '隧道(',
    'Depths (': '深渊(',
    'Cavern (': '山洞(',
    'Gardens (': '花园(',
    'Farms (': '农场(',
    'Nightmare (': '梦魇(',
    'Void (': '虚空(',
    'Descent (': '落穴(',
    'Pit (': '深坑(',
    'The Black Bog (': '黑色泥沼(',
    'The Block (': '障碍区(',
    'The Wall (': '高墙(',
    'The Prison (': '监狱(',
    'Imploding Star (': '爆炸之星(',
    'Prismatic Palace (': '棱镜宫殿(',
    'Trimple Of Doom (': '末日神殿(',
    'Atlantrimp (': '亚特兰蒂皮(',
    'Tricky Paradise (': '整蛊天堂(',
    'Dimension of Anger (': '愤怒维度(',
    'Dimension of Rage (': '暴怒维度(',
    'Looks like you still haven\'t cleared this map. If you want to leave and make an easier one, I won\'t count it against you!': '看起来您还没有通过这张地图。如果您想要离开并运行一张更容易的地图，我是不会怪您的！',
    'Sitting in the Map Chamber (lame': '在地图界面无所事事(弱鸡',
    'Starting Offline Progress... (Updates every 2000 processed loops': '离线进度启动中……(每处理2000个循环就刷新一次',
    'Progress has slowed to a crawl!': '进度简直是慢如蜗牛！',
    'after buying': '并且建造了',
    'Your Spire Traps and Towers have also produced': '同时在您离开时，您的尖塔中陷阱和防御塔产生了 ',
    'Runestones while you were away!': '符石！',
    'Trustworthy Trimps': '可信的脆皮',
    'Sweet, thanks.': '太好了，谢谢。',
    //离线相关结束
    //骨头相关
    'The Bone Trader takes the bones, casts a spell, then begins to make soup': '骨法商人接过骨头，施了个咒，然后做汤去了',
    'Boosts': '提升',
    'Instantly earn the next 12 or 36 hours worth of resources! If you don\'t have enough storage, storage will be purchased (and the cost deducted) automatically.': '立刻获得价值12个小时或36个小时的资源！如果资源上限不足，则会自动购买相应存储建筑(并扣除费用)。',
    'Barns Auto-purchased': '个自动购买的谷仓',
    'Sheds Auto-purchased': '个自动购买的窝棚',
    'Forges Auto-purchased': '个自动购买的锻造厂',
    'Confirm Purchase': '确认购买',
    'Make Purchase': '确定购买',
    'You are about to purchase 12 hours of instant production for 20 bones. Is this what you wanted to do?': '您将花费20骨头购买立刻获得12小时的产量。您确定要购买吗？',
    'You are about to purchase 36 hours of instant production for 40 bones. Is this what you wanted to do?': '您将花费40骨头购买立刻获得36小时的产量。您确定要购买吗？',
    'Exotic Imp-orts': '奇异外皮',
    'Exotic Imp-orts will be unlocked permanently once purchased, and will stick around through portals. Each has a 3% chance to spawn per cell and better loot than normal enemies. Collect them all!': '奇异外皮在购买后永久解锁，传送后也仍然存在。对于每种奇异外皮来说，每个格子都分别有3%的概率生成，比起普通敌人来说，战利品更好。早买早享受，晚买无折扣！',
    'Spawns in World': '在世界中出现',
    'Spawns in Maps': '在地图中出现',
    'Buy Feyimp (50 bones': '购买脆皮小妖(50骨头',
    'Buy Tauntimp (50 bones': '购买脆皮咚咚(50骨头',
    'Buy Venimp (50 bones': '购买脆皮爱神(50骨头',
    'Buy Whipimp (50 bones': '购买脆皮鞭者(50骨头',
    'Buy Magnimp (50 bones': '购买脆皮磁王(50骨头',
    'Buy Goblimp (50 bones': '购买脆皮地精(50骨头',
    'Buy Flutimp (50 bones': '购买脆皮飘兽(50骨头',
    'Buy Jestimp (50 bones': '购买脆皮弄臣(50骨头',
    'Buy Titimp (50 bones': '购买脆皮泰坦(50骨头',
    'Buy Chronoimp (50 bones': '购买脆皮时者(50骨头',
    'First, select an Imp (50 bones': '首先，选择一个奇异外皮(50骨头',
    'You are about to purchase a new Exotic Import for 50 bones. This new Bad Guy will begin spawning in your next Zone or Map at about an average of 3 spawns per 100 squares. Is this what you wanted to do?': '您将花费50骨头购买新的奇异外皮。它将在下个区域或地图中开始出现，平均100个格子中有3个格子出现。您确定要购买吗？',
    'Other Goodies': '其它的好东西',
    'You are about to purchase one Instant Portal for 100 bones. Your new helium will appear in the View Perks menu at the bottom of the screen. Is this what you wanted to do?': '您将花费100骨头购买骨头传送门。新获得的氦将立刻可用于升级特权。您确定要购买吗？',
    'Automatically gain Helium equal to the amount you earned on your best run.': '自动获得一定数量的氦，该数量与之前单次传送获得最多的数值相等。',
    'Automatically gain Radon equal to the amount you earned on your best run.': '自动获得一定数量的氡，该数量与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium and Nature Tokens equal to the amount you earned on your best run.': '自动获得一定数量的氦和自然符记，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium and Fluffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氦和绒绒经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium, Nature Tokens equal to the amount you earned on your best run.': '自动获得一定数量的氦和自然符记，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium, Nature Tokens and Fluffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氦，自然符记和绒绒经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Helium and Nature Tokens and Fluffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氦，自然符记和绒绒经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Automatically gain Radon and Scruffy Exp equal to the amount you earned on your best run.': '自动获得一定数量的氡和污污经验，该数量分别与之前单次传送获得最多的数值相等。',
    'Fluffy is at Level 10 and will not gain Exp!': '绒绒已经达到了10级，无法再获得经验了！',
    'Scruffy is at Level 10 and will not gain Exp!': '污污已经达到了10级，无法再获得经验了！',
    'Fluffy Exp does not include bonuses from Dailies': '绒绒经验不包含日常挑战的加成',
    'Scruffy Exp does not include bonuses from Dailies': '污污经验不包含日常挑战的加成',
    'Single Run Bonuses': '传送后失效的升级',
    'These all last until your next soft reset. Use them wisely!': '以下升级持续到软重置之前。请善加利用！',
    'These all last until your next Portal. Use them wisely!': '以下升级持续到使用传送门之前。请善加利用！',
    'Golden Maps (20 bones': '金色地图(20骨头',
    'You are about to purchase Golden Maps for 20 bones. All of your current and future maps will gain +100% loot added to their normal loot roll': '您将花费20骨头购买金色地图。购买后，所有当前和之后的地图中获取资源加倍，',
    'until your next Portal': '直到您使用传送门为止',
    '. Is this what you wanted to do?': '。您确定要购买吗？',
    'Active!': '已激活！',
    'Disabled on C': '无法购买于挑战',
    'Disabled on Trapper': '捕手挑战无法购买',
    'Disabled on Trappapalooza': '捕手道达人挑战无法购买',
    'Quick Trimps (20 bones': '快枪手脆皮(20骨头',
    'You are about to purchase Quick Trimps for 20 bones. This will cause your Trimps to breed twice as fast': '您将花费20骨头购买快枪手脆皮。购买后，脆皮繁殖速度将加倍，',
    'Sharp Trimps (25 bones': '锋锐脆皮(25骨头',
    'You are about to purchase Sharp Trimps for 25 bones. This will cause your Trimps to deal 50% more damage': '您将花费25骨头购买锋锐脆皮。购买后，脆皮造成的伤害将增加50%，',
    'Heliumy (100 bones': '氦奇(100骨头',
    'Radonculous (100 bones': '氡丰(100骨头',
    'You are about to purchase Heliumy for 100 bones. This will cause you to earn 25% more Helium from all sources': '您将花费100骨头购买氦奇。购买后，所有获取的氦将增加25%，',
    'You are about to purchase Radonculous for 100 bones. This will cause you to earn 25% more Radon from all sources': '您将花费100骨头购买氡丰。购买后，所有获取的氡将增加25%，',
    'You are about to purchase one Heirloom for 30 bones. This will be created at a random rarity, and will be just like completing a Void Map at your highest ever Zone reached. Are you sure?': '您将花费30骨头购买一个传家宝。购买后产生一个随机稀有度的传家宝，稀有度根据您的最高通过区域决定。您确定要购买吗？',
    //骨头相关结束
    //传家宝相关
    'Heirlooms - Gifts to past you from future you': '传家宝-来自于未来，生效于过去',
    'You have': '您有',
    'Nullifium': '虚空物质',
    ' and': '和 ',
    'Spirestones': '尖塔石',
    'Help': '帮助',
    'You can click a stat to upgrade or replace it.': '您可以点击某条属性来升级或是替换它。',
    'The currency to upgrade and replace stats,': '用于升级或替换的货币，即',
    'Nullifium, or Nu,': '虚空物质',
    'can only be gathered by recycling an Heirloom.': '只能通过回收传家宝获得。',
    'You can also click on the Heirloom\'s name on this menu to rename it, or click on the icon to change it!': '您还可以点击传家宝名称来重命名，或者点击图标来更改图标！',
    'You can upgrade any Staff and Shield to HALF the value of your total earned Nu. Nu is not spent, but dictates how powerful your Heirlooms can be!': '您可以使用总虚空物质的一半来升级权杖和盾牌。虚空物质不会在此过程中被消耗，它对传家宝的强度有着决定性的作用！',
    'Any Heirlooms in the "Temporary" section will be recycled for Nullifium on portal.': '“临时栏”中的传家宝在使用传送门时将被回收为虚空物质。',
    'Nothing.': '空无一宝',
    'Unequip': '取消装备',
    'Unequip Heirloom': '取消装备传家宝',
    'You have no more room to carry another Heirloom, and you\'ve already purchased the maximum amount of slots.': '您没有足够位置携带更多传家宝了，而且您已经购买了最大数量的携带数。',
    'Would you like to leave this Heirloom equipped or put it in Temporary Storage?': '您是想要保持装备此传家宝，还是将它放入临时栏？',
    'If you use your Portal while this Heirloom is in Temporary Storage, it will be recycled!': '如果此传家宝在传送时还在临时栏中，它将被回收！',
    'You have no more room to carry another Heirloom, and don\'t have enough Nullifium to purchase another Carried slot.': '您没有足够位置携带更多传家宝了，而且您的虚空物质不足以购买携带数。',
    'You have no more room to carry another Heirloom, but you do have enough Nullifium to purchase another Carried slot!': '您没有足够位置携带更多传家宝了，但您可以使用虚空物质购买携带数！',
    'Would you like to purchase another Carried slot, leave this Heirloom equipped, or put it in Temporary Storage?': '您是想要购买携带数，保持装备此传家宝，还是将它放入临时栏？',
    'Leave it equipped': '保持装备',
    'Place in Temporary': '放入临时栏',
    '- You can carry': '- 您可以携带 ',
    'additional Heirloom through the Portal.': '个传家宝通过传送门。',
    'additional Heirlooms through the Portal.': '个传家宝通过传送门。',
    'Upgrade Carried Slots': '升级携带传家宝数',
    'Equip': '装备',
    'Swap': '切换装备',
    'Stop Carrying': '不再携带',
    'You are not carrying any Heirlooms': '携带栏中没有传家宝',
    'Sort': '排序',
    'Carry': '携带',
    'Recycle': '回收',
    'Replace': '替换',
    'You have no extra Heirlooms': '临时栏中没有传家宝',
    'Upgrade': '升级',
    'Recycle Heirloom': '回收传家宝',
    'Recycle All Heirlooms': '回收全部传家宝',
    'Change Heirloom Icon': '切换传家宝图标',
    'Equipped': '已装备',
    'Common Core': '普通核心',
    'Common Shield': '普通盾牌',
    'Common Staff': '普通权杖',
    'Uncommon Core': '罕见核心',
    'Uncommon Shield': '罕见盾牌',
    'Uncommon Staff': '罕见权杖',
    'Rare Core': '稀有核心',
    'Rare Shield': '稀有盾牌',
    'Rare Staff': '稀有权杖',
    'Epic Core': '史诗核心',
    'Epic Shield': '史诗盾牌',
    'Epic Staff': '史诗权杖',
    'Legendary Core': '传奇核心',
    'Legendary Shield': '传奇盾牌',
    'Legendary Staff': '传奇权杖',
    'Staff': '权杖',
    'Ethereal Core': '超凡核心',
    'Ethereal Shield': '超凡盾牌',
    'Ethereal Staff': '超凡权杖',
    'Magmatic Shield': '岩浆盾牌',
    'Magmatic Staff': '岩浆权杖',
    'Plagued Shield': '天灾盾牌',
    'Plagued Staff': '天灾权杖',
    'Radiating Shield': '辐射盾牌',
    'Radiating Staff': '辐射权杖',
    'Hazardous Shield': '厄劫盾牌',
    'Hazardous Staff': '厄劫权杖',
    'Empty': '空',
    '*Void Map Drop Chance on Hazardous and higher Heirlooms has a lower percentage than previous Heirloom tiers, but also causes 1 extra Void Map to drop every 10th zone you clear.': '*厄劫及以上稀有度的传家宝上，虚空地图掉落概率比之前稀有度的传家宝要低，但每通过10个区域，就可以额外掉落1张虚空地图。',
    'Can\'t replace mods other than \'Empty\' at this tier.': '此稀有度的传家宝无法替换修饰符，只能新增修饰符。',
    'Select a Mod': '选择一个修饰符',
    'Each upgrade adds': '每次升级增加',
    'Max of': '最大值为',
    'At Max!': '已达到最大值！',
    'Nu': '虚空物质',
    'Ss': '尖塔石',
    'Upgrade Mod': '升级修饰符',
    'Add Mod': '新增修饰符',
    'Replace Mod': '替换修饰符',
    'FEED ME': '求投食求养大',
    'Gain a gathering bonus based on worker distribution equality': '根据工人的数量接近情况获得产量加成',
    'Tip: You can click on this Heirloom\'s name or icon in this window to change them!': '提示：您可以点击此窗口中的传家宝名称或者图标来进行修改！',
    'ADDS this amount on to your total Prismatic Shield. This modifier can only function in the Radon Universe.': '将此数值加算到棱镜护盾数值中。只在氡之宇宙内有效。',
    'Charging': '蓄能',
    //传家宝相关结束
    //挑战相关
    'Change Universe': '切换宇宙',
    'Earned All Time': '总获取量',
    'Spent on Perks': '用于特权',
    'Portals Used': '传送次数',
    'Perks': '特权',
    'Preset': '预设',
    'This Preset slot is empty!': '此特权预设空空如也！',
    'Select this slot and then click \'Save\' to save your current Perk configuration to this slot. You\'ll be able to load this configuration back whenever you want, as long as you have your Respec active.': '选择此预设并点击 保存 可以将您当前的特权设置保存至此。只要您有洗点次数，您可以在任何时候加载此设置。',
    'This Preset holds': '此特权预设包含',
    'Save': '保存',
    'Save Perk Preset': '保存特权预设',
    'Click to save your current perk loadout to the selected preset': '将当前的特权布局保存到选择的预设中',
    'Load': '加载',
    'Load Perk Preset': '加载特权预设',
    'Click to load your currently selected perk preset.': '加载选择的预设。',
    'You must have your Respec active to load a preset!': '您必须有洗点次数才能加载预设！',
    'Rename': '重命名',
    'Rename Perk Preset': '重命名特权预设',
    'Click to set a name for your currently selected perk preset': '重命名选择的预设',
    'Rename Preset': '重命名预设',
    'Type a name below for your Perk Preset! This name will show up on the Preset bar and make it easy to identify which Preset is which.': '为您的特权预设起个名字！此名字将出现在预设按钮上，使您能够更容易分辨出哪个预设是做什么的。',
    'Export Perk Setup': '导出特权设置',
    'Click to export a copy of your current perk setup to share with friends, or to save and import later!': '导出您目前的特权设置，您可以与朋友分享，也可以保存下来在之后导入！',
    'Export Perks': '导出特权',
    'It may not look like much, but all of your perks are in here! You can share this string with friends, or save it to your computer to import later!': '可能看起来不太长，但您的特权设置都在这里了！您可以与朋友分享，也可以保存下来在之后导入！',
    'Import Perk Preset': '导入特权预设',
    'Click to import a perk setup from a text string': '从特定字符串中导入特权预设',
    'Import Perks': '导入特权',
    'Import your perks from a text string!': '从特定字符串中导入特权设置！',
    'Less Info': '简略信息',
    'More Info': '详细信息',
    'Remove': '移除',
    '% bonus': '%加成',
    'Challenge': '挑战',
    'You do not currently have an active challenge.': '目前没有进行中的挑战。',
    'Abandon Challenge': '放弃挑战',
    'Challenges': '挑战',
    'You can also choose to activate a challenge before using your portal. Completing a challenge will earn you a permanent reward. You can abandon or view an active challenge at any time by clicking the "View Perks" button.': '您还可以在传送前选择一个挑战激活。完成挑战可以获得永久加成。您可以点击“查看特权”按钮来在任何时候放弃或查看激活的挑战。',
    'If you abandon this challenge, the portal will become unstable and the world will restart (you\'ll keep permanent bonuses like helium': '如果您放弃这个挑战，传送门将变得不稳定，整个世界将进行重置(但您仍然可以保留永久的加成，例如氦',
    'Activate Portal': '激活传送门',
    'Cancel': '取消',
    'View Current Challenge': '查看当前的挑战',
    'Swap the Challenge Selection pane to instead display your current challenge, or vice versa': '将挑战选择界面切换为显示您当前的挑战，或者是由显示您当前的挑战切换回挑战选择界面',
    'Clear All Perks': '清空所有特权',
    'Close': '关闭',
    'Helium goes in, victory comes out': '有氦者，事竟成',
    'Radon goes in, victory comes out': '得氡者，得天下',
    'Reach Zone 50 in Universe 2 to unlock Challenge': '在宇宙2中到达区域50后可以解锁挑战',
    'which combine multiplicatively with your Challenge': '其加成将乘上挑战',
    '. Just imagine the possibilities!': '的加成。未来将一片光明！',
    'Click to toggle a challenge mode for your challenges!': '点击以切换为挑战模式，挑战自我，超越自我！',
    'In Challenge': '挑战',
    'mode, you can re-run some challenges in order to earn a permanent attack, health, and Helium bonus for your Trimps. MOST Challenge': '中, 您可以重新进行一些挑战，这些挑战可以让您的脆皮获得永久的攻击力、生命值和氦获取量加成。大多数挑战',
    'mode, you can re-run some challenges in order to earn a permanent attack, health, and Radon bonus for your Trimps. MOST Challenge': '中, 您可以重新进行一些挑战，这些挑战可以让您的脆皮获得永久的攻击力、生命值和氡获取量加成。大多数挑战',
    's will grant': '可获得',
    '. This bonus is additive with all available Challenge': '。此加成与所有的挑战',
    's, and your highest Zone reached for each challenge is saved and used.': '加成叠加，且您的每个挑战中最高通过区域都将被单独记录并生效。',
    'No Challenge': '所有的挑战',
    's end at any specific Zone': '都没有终点',
    'they can only be completed by using your portal or abandoning through the \'View Perks\' menu. However,': '只能通过传送或者在“查看特权”界面中放弃来完成它们。另外，',
    'no Helium can drop, and no bonus Helium will be earned during or after the run': '挑战过程中不会掉落氦，且无论选择什么挑战，氦获取量也不会获得任何加成',
    'no Radon can drop, and no bonus Radon will be earned during or after the run': '挑战过程中不会掉落氡，且无论选择什么挑战，氡获取量也不会获得任何加成',
    'Note that your Headstart mastery will be disabled during Challenge': '请注意先声夺人专精在挑战',
    'runs.': '中无效。',
    'Note that Challenge': '请注意挑战',
    '. Void Maps will still drop heirlooms, and all other currency can still be earned.': '。虚空地图仍然会掉落传家宝，其他东西也可以正常获得。',
    'stacks multiplicatively with Challenge': '的加成将乘以挑战',
    'creating one big, beautiful Challenge': '最终获得一个巨大而美妙的挑战',
    'modifier': '加成倍率',
    'in Universe 2. This brings your total Challenge': '加成。因此，挑战',
    'bonus to': '的总加成变为',
    'Well, you did it. You followed your instincts through this strange world, made your way through the Dimension of Anger, and obtained this portal. But why? Maybe there will be answers through this portal... Your scientists tell you they can overclock it to bring more memories and items back, but they\'ll need helium to cool it.': '很好，您做到了。您凭着直觉在这个奇怪的世界里一路披荆斩棘，通过了愤怒维度，最后获得了这个传送门。这么做的意义又是什么？或许通过这个传送门以后，您就能找到答案了……科学家们告诉您，它们可以将传送门进行超频，带回更多的记忆和物品，但需要氦来冷却传送门。',
    'The Radon Universe is harsh. Your Portal still retains some information about the Scientist upgrades, but it\'ll need an upgrade of its own to be able to utilize them in this new Universe.': '氡之宇宙的环境真的是太严苛了。您的传送门还保留有一些关于科学家升级的信息，但是看来需要在这个宇宙中升级后才能利用这些信息。',
    'Be ready to manually Gather some Food!': '得准备好，要手动收集一些食物了！',
    'Don\'t forget to bring a challenge': '传送前，不要忘了选择挑战',
    'Respec': '洗点',
    'You can respec your perks once per portal. Clicking cancel after clicking this button will not consume your respec.': '每次传送后您有一次洗点特权的机会。开始洗点后点击取消退出不会消耗洗点次数。',
    'Click a challenge below to learn more about and/or run it!': '点击下方的挑战来获取详细信息及/或运行它！',
    'None': '无',
    'Your highest Zone reached for this Challenge': '您的最高通过区域于此挑战',
    'bonus.': '加成。',
    'bonus!': '加成！',
    'You will not earn a new perk.': '您不会因此获得新的特权。',
    'You will also earn a new Perk!': '您还可以获得一个新的特权！',
    'You have already completed this challenge!': '您已经完成了此挑战！',
    'Are you sure you want to abandon this challenge?': '您确定要放弃此挑战吗？',
    'Abandoning this challenge will cause the portal to become unstable and start you from the beginning of this run. (You\'ll keep your permanent rewards like helium and perks': '放弃挑战后，传送门将变得不稳定，使您从本次传送初始状态重新开始(保留永久的加成，例如氦和特权',
    'Click Confirm to abandon the challenge and restart at Z1, Cancel to go back, or Restart to go back to Z1 with the same challenge.': '点击确认后将放弃挑战并从区域1重新开始游戏，点击取消则返回，点击重新开始挑战则从区域1重新开始此挑战。',
    'Restart Challenge': '重新开始挑战',
    'This challenge issues rewards differently than most other Challenge': '此挑战的加成不同于其他大多数挑战',
    's.': '。',
    'You don\'t have an active challenge.': '您目前未激活任何挑战。',
    'If you can\'t handle this Universe, you can always return to Universe 1. However, returning before finding the Portal Device will invalidate all Scruffy Exp and Radon earned.': '如果您在这个宇宙中感觉力不从心，您可以随时返回宇宙1。但如果在找到传送门装置前就这么做的话，上次传送后获得的污污经验和氡将全部丢失。',
    'View Perks': '查看特权',
    'Return to Universe': '返回宇宙',
    'Helium Left Over': '剩余的氦',
    'Radon Left Over': '剩余的氡',
    'These are all of your perks! You can reset them once per run.': '以下是您所有的特权。每次传送后您可以洗点一次。',
    'Are you sure you want to return to Universe 1? You will lose any Radon and Scruffy Exp earned so far.': '您确定要返回宇宙1吗？目前获得的氡和污污经验将全部丢失。',
    'Abandon Scruffy': '放弃污污',
    'I\'m sure he\'ll be fine': '它会没事的',
    'Select New Challenge': '选择新的挑战',
    'Level: ': '等级：',
    'Price': '价格',
    'Spent': '已花',
    'Equality Scaling': '平等缩放',
    'You can enable or disable Equality Scaling at any time.': '您可以在任何时候启用和禁用平等缩放。',
    'Scale Equality': '平等缩放',
    'On': '开启',
    'Off': '关闭',
    'With Equality Scaling On, each Portal starts with 0 levels of Equality active. If a group of Trimps dies after attacking': '启用平等缩放时，每次传送后平等生效等级从0级开始。每当一队脆皮在攻击 ',
    'or fewer time, one level of Equality will activate, up to your purchased level of Equality.': '次或者更少次就阵亡时，平等生效等级就增加1级，最高可达到平等特权的等级。',
    'or fewer times, one level of Equality will activate, up to your purchased level of Equality.': '次或者更少次就阵亡时，平等生效等级就增加1级，最高可达到平等特权的等级。',
    'Ctrl Click this button to customize your Equality settings.': '按下Ctrl键再点击可以自定义平等缩放设置。',
    'Hotkey: E': '(快捷键：E',
    'Scale Equality Scaling': '平等缩放设置',
    'Change this Slider to change the maximum amount of attacks Trimps need to make in order to not trigger Equality Scaling. Setting this slider to 0 will increase scaling whenever a group of Trimps is one-shot, 1 will increase if Trimps attack one or fewer times, 5 will only increase if they attack 5 or fewer times, etc.': '修改滑块的数值影响脆皮在阵亡前攻击了多少次才不会触发平等缩放。滑块设置为0时，当一队脆皮被秒杀时增加平等生效等级。设置为1时，当一队脆皮只攻击了1次或者更少次就阵亡时增加平等生效等级。设置为5时，当一队脆皮只攻击了5次或者更少次就阵亡时增加平等生效等级。依此类推。',
    'Your current setting is': '当前的平等滑块设置为 ',
    'If Reversing is allowed, Equality stacks will also decrease after the set amount of attacks against the same bad guy.': '如果开启了平等消除，那么在脆皮攻击超过平等消除滑块相应次数击杀敌人后，减少平等生效等级。',
    'Your current reversing setting is': '当前的平等消除滑块设置为 ',
    'Allow Reversing': '开启平等消除',
    'You can also manually set how many stacks of Equality should be used if Scaling is disabled by changing the slider below. This allows you to customize exactly how many stacks of Equality to use without having to respec your Perks.': '如果关闭平等缩放，您还可以直接在下方设置平等生效等级。这样您就不必洗点特权也可以设置平等生效等级了。',
    'Your Equality stacks when Scaling is disabled will be': '关闭平等缩放时，平等生效等级为 ',
    'You can only respec once per run. Clicking cancel will not consume this use.': '每次传送后您可以洗点一次。点击取消则不会消耗次数。',
    'Respec Perks': '特权洗点',
    'Change to Universe': '切换到宇宙',
    'Confirm': '确认',
    'You are about to run the': '您将进行',
    'Daily Challenge': '日常挑战',
    'Discipline Challenge': '纪律挑战',
    'Metal Challenge': '金属挑战',
    'Size Challenge': '尺寸挑战',
    'Balance Challenge': '平衡挑战',
    'Scientist Challenge': '科学家挑战',
    'Meditate Challenge': '冥想挑战',
    'Decay Challenge': '衰变挑战',
    'Trimp Challenge': '脆皮挑战',
    'Trapper Challenge': '捕手挑战',
    'Electricity Challenge': '电流挑战',
    'Frugal Challenge': '节俭挑战',
    'Life Challenge': '生命挑战',
    'Mapocalypse Challenge': '天启地图挑战',
    'Coordinate Challenge': '协同挑战',
    'Crushed Challenge': '粉碎挑战',
    'Slow Challenge': '迟缓挑战',
    'Nom Challenge': '美味挑战',
    'Mapology Challenge': '地图学挑战',
    'Toxicity Challenge': '毒性挑战',
    'Devastation Challenge': '破坏挑战',
    'Watch Challenge': '守望挑战',
    'Lead Challenge': '领导挑战',
    'Corrupted Challenge': '腐化挑战',
    'Domination Challenge': '统治挑战',
    'Obliterated Challenge': '抹杀挑战',
    'Eradicated Challenge': '灭绝挑战',
    'Unlucky Challenge': '不幸挑战',
    'Downsize Challenge': '精简挑战',
    'Transmute Challenge': '变形挑战',
    'Unbalance Challenge': '不平衡挑战',
    'Bublé Challenge': '泡影挑战',
    'Duel Challenge': '决斗挑战',
    'Melt Challenge': '熔化挑战',
    'Trappapalooza Challenge': '捕手道达人挑战',
    'Quagmire Challenge': '泥淖挑战',
    'Wither Challenge': '凋零挑战',
    'Revenge Challenge': '复仇挑战',
    'Quest Challenge': '任务挑战',
    'Archaeology Challenge': '考古学挑战',
    'Mayhem Challenge': '暴乱挑战',
    'Storm Challenge': '风暴挑战',
    'Insanity Challenge': '失智挑战',
    'Berserk Challenge': '狂战挑战',
    'Exterminate Challenge': '灭虫挑战',
    'Nurture Challenge': '培养挑战',
    'Pandemonium Challenge': '群魔乱舞挑战',
    'Alchemy Challenge': '炼金术挑战',
    'Are you sure you want to enter the portal? You will lose all progress other than the portal-compatible upgrades you\'ve earned, such as Helium, Perks, Bones, and Exotic Imports. Who knows where or when it will send you.': '您确定要进入传送门吗？传送后您只能保留兼容传送门的升级，例如氦，特权，骨头和奇异外皮之类的。天知道它会把您送到何时何地去。',
    'You still have the Daily challenge active! If you portal right now, your reward will be applied at the beginning of your next run. Alternatively, click \'Finish Daily\' in the World or inside \'View Perks\' to get the bonus now.': '您正在进行日常挑战！如果您现在使用传送门，那么传送后才能获得奖励。相反，如果在世界上或者“查看特权”选项卡中点击“完成日常”，那么可以立刻获得奖励。',
    'Spend Magmite': '分配岩浆岩',
    'Let\'s do it.': '就这样，走吧。',
    'Wait, I\'m not ready!': '等等，我还没准备好！',
    'Something went really wrong, what did you even just try to do?!': '情况不对，您到底要干什么？！',
    'This doesn\'t look like a valid perk string.': '看上去这并不像有效的特权字符串。',
    'This looks like a save string, rather than a perk string. To import a save string, use the Import button on the main screen.': '看起来这像是存档的字符串，并不是特权的。想要导入存档字符串的话，请使用主界面的导入按钮。',
    'You don\'t have enough Helium to afford this perk setup.': '氦不足，无法使用此特权设置。',
    'You don\'t have enough Radon to afford this perk setup.': '氡不足，无法使用此特权设置。',
    'This perk setup would require a respec, but you don\'t have one available.': '此特权设置需要进行洗点，但您已经洗点过了。',
    'You do not have enough max Trimps with this Perk setup to sustain your Coordination.': '如果使用此特权设置，脆皮上限将不足以维持现有的协作等级。',
    'You have too many workers assigned for this Perk setup.': '如果使用此特权设置，工人数量将不足。',
    'You do not have enough max Trimps with this Perk setup to sustain your Coordination. You have too many workers assigned for this Perk setup.': '如果使用此特权设置，脆皮上限将不足以维持现有的协作等级。且工人数量将不足。',
    'The daily challenge has changed since you looked at it. The challenge description has been refreshed, click Activate Portal to run it!': '在您查看的时候，日常挑战的内容已经发生了变化。挑战描述也已更新，点击激活传送门来进行挑战！',
    'You will unlock this challenge once you reach Zone': '欲解锁此挑战，您需要到达区域',
    'You will unlock this challenge once you  reach Zone': '欲解锁此挑战，您需要到达区域',
    'Daily': '日常',
    'Plague': '天灾',
    'Weakness': '弱化',
    'Karma': '业力',
    'Toxic': '毒性',
    'Bloodthirst': '嗜血',
    'Rampage': '暴走',
    '40% of Bad Guys in  the World will be mutated into Mutimps.': '世界上有40%的敌人会变异为脆皮变异者。',
    '40% of Bad Guys in  the World will be mutated into Hulking Mutimps.': '世界上有40%的敌人会变异为脆皮大型变异者。',
    'Empower': '赋能',
    'Pressure': '压力',
    'Every 15 seconds, your stored Food is reduced by': '每15秒，您存储的食物减少',
    'Every 15 seconds, your stored Wood is reduced by': '每15秒，您存储的木头减少',
    'Every 15 seconds, your stored Metal is reduced by': '每15秒，您存储的金属减少',
    'Every 15 seconds, your stored Food and Wood is reduced by': '每15秒，您存储的食物和木头减少',
    'Every 15 seconds, your stored Food and Metal is reduced by': '每15秒，您存储的食物和金属减少',
    'Every 15 seconds, your stored Wood and Metal is reduced by': '每15秒，您存储的木头和金属减少',
    'Every 15 seconds, your stored Food, Wood, and Metal is reduced by': '每15秒，您存储的食物，木头和金属减少',
    'Challenge has no end point, and grants an': '日常挑战没有终点，完成时根据相应情况，获得 ',
    'additional': '额外',
    'of all Helium, and Nu from Heirlooms earned during the run earned before finishing.': '的相应资源，包括：氦，挑战中获得的传家宝价值的虚空物质。',
    'of all Helium,  Nu from Heirlooms earned during the run, and Dark Essence earned before finishing.': '的相应资源，包括：氦，挑战中获得的传家宝价值的虚空物质，黑暗精华。',
    'of all Helium,  Nu from Heirlooms earned during the run, Dark Essence, and Nature Tokens earned before finishing.': '的相应资源，包括：氦，挑战中获得的传家宝价值的虚空物质，黑暗精华，自然符记。',
    'of all Helium,  Nu from Heirlooms earned during the run, Dark Essence, Nature Tokens, and Fluffy Exp earned before finishing.': '的相应资源，包括：氦，挑战中获得的传家宝价值的虚空物质，黑暗精华，自然符记，绒绒经验。',
    'of all Radon, Nu from Heirlooms earned during the run, and Scruffy Exp earned before finishing.': '的相应资源，包括：氡，挑战中获得的传家宝价值的虚空物质，污污经验。',
    'Switch Daily': '选择日常挑战',
    'Sunday resets in': '周日重置于：',
    'Monday resets in': '周一重置于：',
    'Tuesday resets in': '周二重置于：',
    'Wednesday resets in': '周三重置于：',
    'Thursday resets in': '周四重置于：',
    'Friday resets in': '周五重置于：',
    'Saturday resets in': '周六重置于：',
    'You have already attempted this Daily Challenge!': '您已经进行过此日常挑战了！',
    'Can only be run once!': '每个日常挑战只能运行一次！(译者注：就算用其他手段回到这一天也没法再运行了)',
    'Reward does not count toward Bone Portals or affect best Rn/Hr stat.': '日常挑战的奖励不影响骨头传送门的奖励，也不影响最高的氡/小时统计。',
    'Reward does not count toward Bone Portals or affect best He/Hr stat.': '日常挑战的奖励不影响骨头传送门的奖励，也不影响最高的氦/小时统计。',
    'Discipline': '纪律',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。',
    'Discipline Challenge!': '纪律挑战！',
    'You have unlocked a new perk, and your Trimps have regained their Discipline.': '您解锁了一个新的特权，并且您的脆皮们又重新变得有纪律了。',
    'You have the Discipline challenge active. Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'You have the Discipline challenge active. "Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher."': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。',
    'Metal Challenge!': '金属挑战！',
    'You have unlocked a new perk, and Miners have returned to your game.': '您解锁了一个新的特权，并且矿工们又回到了游戏中。',
    'You have the Metal challenge active. Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'You have the Metal challenge active. "Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies."': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Size': '尺寸',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Size Challenge!': '尺寸挑战！',
    'You have unlocked a new perk, and your Trimps have been reduced down to their normal size.': '您解锁了一个新的特权，并且脆皮又回到了正常尺寸。',
    'You have the Size challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'You have the Size challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps."': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Balance': '平衡',
    'Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人多造成135%伤害。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
    'Zone': '区域',
    'with this challenge active will grant an additional 100% of all helium earned up to that point. This challenge is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%。此挑战可重复完成！',
    'Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250.': '您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然储量很大，但无法收集。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人多造成135%伤害。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'You have the Balance challenge active. Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您目前正在进行平衡挑战。您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人多造成135%伤害。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
    'You have the Balance challenge active. "Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250."': '您目前正在进行平衡挑战。您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然储量很大，但无法收集。所有敌人生命值增加100%，世界上的敌人多造成17%伤害，地图中的敌人多造成135%伤害。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'Scientist': '科学家',
    'Scientist II': '科学家 II',
    'Scientist III': '科学家 III',
    'Scientist IV': '科学家 IV',
    'Scientist V': '科学家 V',
    'Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将初始拥有 ',
    'Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将初始拥有 ',
    'science but will be unable to research or hire scientists and': '科学点，但无法研究或者雇佣科学家。并且',
    'all enemy damage will be 10X higher': '所有敌人的攻击力变为10倍',
    '. Choose your upgrades wisely! Clearing': '。仔细选择您的研究！通过 ',
    'science but will be unable to research or hire scientists. Choose your upgrades wisely! Clearing': '科学点，但无法研究或者雇佣科学家。仔细选择您的研究！在此挑战激活的前提下通过 ',
    '\'The Block\' (': '障碍区地图(',
    'with this challenge active will cause you to start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman each time you use your portal.': '将使您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。',
    'with this challenge active will cause you to start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked each time you use your portal.': '将使您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。',
    'with this challenge active will cause you to start with full Trimps and 200% player efficiency each time you use your portal.': '将使您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。',
    'with this challenge active will cause you to earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply each time you use your portal.': '将使您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。',
    'with this challenge active will cause you to permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges each time you use your portal.': '将使您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。',
    'Scientist Challenge!': '科学家挑战！',
    'From now on, you\'ll start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with full Trimps and 200% player efficiency every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。您也重新解锁了科学家，并且',
    'From now on, you\'ll permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you portal. You\'ve unlocked Scientists, and': '从现在起，您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。您也重新解锁了科学家，并且',
    'Don\'t forget that you can click Research on your Science again!': '不要忘了您又可以进行科学研究了！',
    'You have the Scientist challenge active. Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将初始拥有 ',
    'You have the Scientist challenge active. Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将初始拥有 ',
    'Meditate': '冥想',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    '\'Trimple of Doom\' (': '末日神殿地图(',
    'will return the world to normal.': '后世界将回归正常。',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster.': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'You have the Meditate challenge active. Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    'You have the Meditate challenge active. "Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster."': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'Decay': '衰变',
    'Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当击杀每个区域最后的脆皮飞艇时层数重置，层数最高为999。在此挑战激活的前提下通过 ',
    'with this challenge active will allow you to select the Gardens biome when creating maps, and all future Gardens maps created will gain +25% loot.': '将使您可以在制造地图时选择花园生物群落，且后续所有花园地图战利品获取量增加25%。',
    'You have the Decay challenge active. Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '您目前正在进行衰变挑战。调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当击杀每个区域最后的脆皮飞艇时层数重置，衰变最高为999层。在此挑战激活的前提下通过 ',
    'Trimp': '脆皮',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
    'will teach you how to keep your Trimps alive for much longer.': '后可以学会如何让脆皮存活更久。',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination.': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trimp Challenge!': '脆皮挑战！',
    'Trimps': '脆皮们',
    'You have unlocked the \'Resilience\' perk, and your Trimps can fight together again.': '您解锁了“弹性”特权，并且脆皮又可以共同作战了。',
    'You have the Trimp challenge active. Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
    'You have the Trimp challenge active. "Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination."': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trapper': '捕手',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖速度做些什么。在此挑战激活的前提下通过 ',
    '\'Trimple Of Doom\' (': '末日神殿地图(',
    'with this challenge active will return your breeding rate to normal. Note that any bonuses that cause housing to come prefilled with Trimps will not work in a dimension where Trimps cannot breed.': '后繁殖速度将恢复正常。注意，在脆皮无法繁殖的维度中，任何在住房建造完立刻使其获得满人口的加成均无效。',
    'Travel to a dimension where Trimps refuse to breed in captivity, good luck!': '前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'bored': '无所事事',
    'breeding': '繁殖中',
    'You have the Trapper challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖速度做些什么。在此挑战激活的前提下通过 ',
    'You have the Trapper challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, good luck!"': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'Electricity': '电流',
    'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
    '\'The Prison\' (': '监狱地图 (',
    'will reward you with an additional 200% of all helium earned up to but not including Zone 80. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%(不包含区域80获取的)。此挑战可重复完成！',
    'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack.': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'You will unlock this challenge once you clear \'The Prison\' at Zone': '欲解锁此挑战，您需要通过监狱地图，它在区域',
    'You have the Electricity challenge active. Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
    'You have the Electricity challenge active. "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack."': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'Frugal': '节俭',
    'Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
    '\'Dimension of Anger\' (': '愤怒维度地图 (',
    'with this challenge active will return missing books to maps, and your new skills in Frugality will permanently cause MegaBooks to increase gather speed by 60% instead of 50%.': '后可重新获得重铸升级，且您新学会的节俭能力可以永久将超级升级由原来的资源获取速度提升50%变为资源获取速度提升60%。',
    'You have the Frugal challenge active. Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '您目前正在进行节俭挑战。将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
    'Life': '生命',
    'Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
    'will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'You have the Life challenge active. Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '您目前正在进行生命挑战。探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
    'Mapocalypse': '天启地图',
    'Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
    'will': '可以',
    'receive the Helium reward from Electricity.': '获得电流挑战中的氦奖励。',
    'You have the Mapocalypse challenge active. Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '您目前正在进行天启地图挑战。体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
    'Coordinate': '协同',
    'Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
    'with this challenge active will cause all enemies to lose their Coordination.': '后，敌人将失去协作效果。',
    'Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!': '造访一个敌人协同作战但没有快速效果的维度。嫩死它们！',
    'You have the Coordinate challenge active. Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
    'You have the Coordinate challenge active. "Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!"': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。嫩死它们！',
    'Crushed': '粉碎',
    'Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'will reward you with an additional 400% of all helium earned up to but not including Z125. This challenge is repeatable.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%(不包含区域125获取的)。此挑战可重复完成。',
    'You have the Crushed challenge active. Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '您目前正在进行粉碎挑战。前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'Slow': '迟缓',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，等着您来让它们重见天日。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'with this challenge active will forever-after allow you to create these new pieces of equipment.': '后，您可以永久解锁这些新装备。',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!': '传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'You have the Slow challenge active. Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，等着您来让它们重见天日。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'You have the Slow challenge active. "Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!"': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'Nom': '美味',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'will reward you with an additional 450% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的450%。此挑战可重复完成！',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first.': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'You have the Nom challenge active. Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'You have the Nom challenge active. "Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first."': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'Mapology': '地图学',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'with this challenge active will return you to your original dimension. Double prestige from Scientist IV will not work during this challenge.': '可以将您送回原来的维度。科学家 IV 的双倍锻造升级加成在此挑战期间无效。',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Double prestige from Scientist IV and the Blacksmithery mastery will not function while this challenge is active.': '科学家 IV 的双倍锻造升级加成和锻铁术系列专精在此挑战期间无效。',
    'You have the Mapology challenge active. Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'You have the Mapology challenge active. "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Toxicity': '毒性',
    'Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮将失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone.': '前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮将失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%，此效果最高为1500层。在通过一个区域后层数重置。',
    'You have the Toxicity challenge active. Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '您目前正在进行毒性挑战。前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮将失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'You have the Toxicity challenge active. "Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone."': '您目前正在进行毒性挑战。前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮将失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%，此效果最高为1500层。在通过一个区域后层数重置。',
    'Devastation': '破坏',
    'Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。通过 ',
    'Imploding Star (Zone': '爆炸之星地图 (区域',
    'You have the Devastation challenge active. Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '您目前正在进行破坏挑战。前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。通过 ',
    'Watch': '守望',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 200% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%。',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to.': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'You have the Watch challenge active. Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'You have the Watch challenge active. "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to."': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'Lead': '领导',
    'Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'Momentum': '动量',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack. Completing': ' 。每在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 300% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的300%。',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack.': ' 。每在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'You have the Lead challenge active. Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'You have the Lead challenge active. "Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack."': ' 。每在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且格挡穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'Corrupted': '腐化',
    'with this challenge active will reward you with an extra 200% helium earned from any source up to that point, and will instantly transport you back to your normal dimension.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%，并立刻将您送回原来的维度。',
    'Domination': '统治',
    'Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，但它们会掉落三倍的氦！通过 ',
    'will also reward you with an extra 100% of helium earned from any source up to that point, and will instantly teleport you back to your normal dimension!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%，并立刻将您送回原来的维度！',
    'You have the Domination challenge active. Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '您目前正在进行统治挑战。前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，但它们会掉落三倍的氦！通过 ',
    'Obliterated': '抹杀',
    'Eradicated': '灭绝',
    'However, you\'ll earn 1 extra Coordination per Zone you clear! Oh and Magma, Corruption, and Nature start at Z1.': '但是，您每通过一个区域，可以多获得一个协作升级！另外，岩浆、腐化和自然赋能均从区域1开始出现。',
    'You will unlock this challenge once you reach 4500% Challenge': '欲解锁此挑战，您需要到达4500%的挑战',
    'bonus': '加成',
    'Unlucky': '不幸', //U2挑战
    'Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'Dimension of Rage (Zone': '暴怒维度 (区域',
    'will complete this Challenge!': '后可以完成此挑战！',
    'Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality.': '调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Unlucky Challenge!': '不幸挑战！',
    'You have unlocked a new perk, and your Trimps\' damage has normalized.': '您解锁了一个新的特权，并且脆皮的伤害又回归正常了。',
    'You have the Unlucky challenge active. Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '您目前正在进行不幸挑战。在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'You have the Unlucky challenge active. "Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality."': '您目前正在进行不幸挑战。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Downsize': '精简',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'Prismatic Palace (Zone': '棱镜宫殿 (区域',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second.': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Downsize Challenge!': '精简挑战！',
    'You have unlocked a new perk, and your Trimps are once again willing to share houses.': '您解锁了一个新的特权，并且脆皮又愿意分享住房了。',
    'You have the Downsize challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'You have the Downsize challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second."': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Transmute': '变形',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal.': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Transmute Challenge!': '变形挑战！',
    'You have the Transmute challenge active. Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'You have the Transmute challenge active. "Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal."': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Unbalance': '不平衡',
    'Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%.': '前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'You have the Unbalance challenge active. Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '您目前正在进行不平衡挑战。科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'You have the Unbalance challenge active. "Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%."': '您目前正在进行不平衡挑战。前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上击杀一名敌人，您获得一层“不平衡”。而每在地图中击杀一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'Bublé': '泡影',
    'Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要它们的生命值减少了，它们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'without failing will complete this Challenge - granting an additional 500% of all Radon earned up to that point. Failing this Challenge will grant an additional 200% of all Radon earned up to the spot where you failed.': '后可以完成此挑战并额外获得氡，数值等于本次挑战完成前氡获取量的500%。挑战失败的话，可额外获得氡，数值等于本次挑战失败前氡获取量的200%。',
    'You have the Bublé challenge active. Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '您目前正在进行泡影挑战。调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要它们的生命值减少了，它们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'Duel': '决斗',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    'Duel Points': '决斗点数',
    'Trimps cannot become Fast on this Challenge in Challenge': '脆皮无法抢先攻击，因为它们在挑战',
    'mode!': '模式！',
    '), and any team above 50 points gains 3x damage.': ')，而决斗点数大于50的一方造成3倍伤害。',
    'You have the Duel challenge active. It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'You have the Duel challenge active. "It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    '), and any team above 50 points gains 3x damage."': ')，而决斗点数大于50的一方造成3倍伤害。',
    'Melt': '熔化',
    'Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'or': ' 或者',
    'will complete this Challenge - granting an additional 400% of all Radon collected through Z50. This Challenge is repeatable!': '后可以完成此挑战并额外获得氡，数值等于本次挑战到区域50为止氡获取量的400%。此挑战可重复完成！',
    'You have the Melt challenge active. Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '您目前正在进行熔化挑战。调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'Trappapalooza': '捕手道达人',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这一点。通过 ',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that.': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这一点。',
    'You have the Trappapalooza challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这一点。通过 ',
    'You have the Trappapalooza challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that."': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这一点。',
    'Quagmire': '泥淖',
    'Travel to an extremely muddy dimension. It\'s hard to walk out here, making Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 250% of all Radon earned.': '前往一个异常泥泞的维度。此维度极难行走，所以敏捷变得更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100毫秒。但同时，您可以进入一张叫做“黑色泥沼”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色泥沼将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的250%。',
    'The Black ': '黑色',
    'Motivated': '积极前进', //包括成就描述
    'Exhausted': '疲惫不堪',
    'You have the Quagmire challenge active. Travel to an extremely muddy dimension. It\'s hard to walk out here, making Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 250% of all Radon earned.': '您目前正在进行泥淖挑战。前往一个异常泥泞的维度。此维度极难行走，所以敏捷更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100毫秒。但同时，您可以进入一张叫做“黑色泥沼”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色泥沼将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0层后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的250%。',
    'Wither': '凋零',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中击杀1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'will complete this Challenge.': '后可以完成此挑战。',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Plaguebringer is disabled during Wither': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中击杀1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。瘟疫使者效果无效于凋零',
    'Hardened': '硬化',
    'Horror': '恐惧',
    'Wither Immunity': '免疫凋零',
    'Enemies cannot heal or inflict Wither while your Trimps have Wither Immunity.': '当脆皮免疫凋零时，敌人无法恢复生命值，也无法触发凋零。',
    'You have the Wither challenge active. Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中击杀1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'You have the Wither challenge active. "Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Plaguebringer is disabled during Wither': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中击杀1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。瘟疫使者效果无效于凋零',
    'Revenge': '复仇',
    'Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。每有一队脆皮死于溢出伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'with less than 20 stacks of Revenge will complete this Challenge.': '后可以完成此挑战。',
    'You have the Revenge challenge active. Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '您目前正在进行复仇挑战。前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到溢出伤害750%的伤害。每有一队脆皮死于溢出伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'Quest': '任务',
    'Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每个区域也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'will complete this Challenge, returning Trimp Attack and Enemy Health to normal.': '后可以完成此挑战，并使脆皮攻击力和敌人生命值恢复正常。',
    'Quintuple (x5) your food': '将食物变为5倍',
    'Quintuple (x5) your wood': '将木头变为5倍',
    'Quintuple (x5) your metal': '将金属变为5倍',
    'Quintuple (x5) your gems': '将宝石变为5倍',
    'Quintuple (x5) your science': '将科学点变为5倍',
    'Double your food': '将食物变为2倍',
    'Double your wood': '将木头变为2倍',
    'Double your metal': '将金属变为2倍',
    'Double your gems': '将宝石变为2倍',
    'Double your science': '将科学点变为2倍',
    'Complete 5 Maps at Zone level': '通过5张等级为区域层数的地图',
    'One-shot 5 world enemies': '秒杀世界上的5名敌人',
    'Don\'t let your shield break before Cell': '护盾不可破碎，直到到达格子',
    'Don\'t run a map before Cell': '不进入地图，直到到达格子',
    'Buy a Smithy': '建造一个铁匠铺',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Quest Complete!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Failed!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Still Earnable!': '任务内容：护盾不可破碎，直到到达格子100。进度：仍然可获得！',
    'Quest: Don\'t run a map before Cell 100. Progress: Quest Complete!': '任务内容：不进入地图，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t run a map before Cell 100. Progress: Failed!': '任务内容：不进入地图，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t run a map before Cell 100. Progress: Still Earnable!': '任务内容：不进入地图，直到到达格子100。进度：仍然可获得！',
    'Quest: Buy a Smithy. Progress: Quest Complete!': '任务内容：建造一个铁匠铺。进度：任务完成！',
    'Quest: Buy a Smithy. Progress: 0 /': '任务内容：建造一个铁匠铺。进度：0 /',
    '. Good luck!': ' 。祝您好运！',
    'You have the Quest challenge active. Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每个区域也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'Archaeology': '考古学',
    'Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension. Completing': '前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant an additional +500% of all Radon earned. After the first time you complete this Challenge, you\'ll gain the ability to create maps with Small and Large Research Caches! After the second time you complete this Challenge, you\'ll unlock powerful customization for AutoGold.': '后，可额外获得氡，数值等于本次挑战完成前氡获取量的500%。并且首次完成此挑战以后，您就可以制造前缀为小研究储藏箱和大研究储藏箱的地图了。另外，在第二次完成此挑战以后，您还可以解锁进一步自定义自动金色升级的能力。',
    'The Archaeology Automator is any Archaeologist\'s best friend (once they figure out how to use it)! Below you\'ll need to enter a string for the Automator to parse. Your string should be separated by commas, and will indicate priority for Relic purchases.': '自动考古是考古学家们最好的朋友(只要他们明白了使用方法)！最下方的输入框中，您可以输入一串字符，让自动考古进行分析。您输入的字符需要用英文逗号来分隔，并且将决定遗物升级的顺序。',
    'An example of a viable string would be \'-10a,5s,5r,10s,10r,5a\'.': '可行的字符串可举例如下：“-10a,5s,5r,10s,10r,5a”。',
    'Use \'a\' for trimp Attack, \'e\' for Enemy attack, \'r\' for Radon, \'s\' for reSource, and \'b\' for Breed speed.': 'a代表脆皮攻击力，e代表敌人攻击力，r代表氡获得量，s代表非氡资源获取量，b代表繁殖速度。',
    'As previously stated, each rule (separated by commas) in this string dictates the priority of that particular upgrade. With the given example string, the Automator will first buy Trimp Attack Relics until they\'re at or above -10, then will attempt to get the Resource Relic up to positive 5 points, then it will do the same with Radon. Once all of these Relics lose a point, the Automator will go back and fill Attack back up to -10 first, then Resource back up to 5, then Radon back to 5, then will move on to trying to get Resource to 10. Each time points are lost in a Relic, or if the Automator string is modified, the Automator will start back at the first rule and work its way back up.': '如上所述，字符串中每一条规则(由逗号分隔开来的)决定了特定升级的顺序。如果输入上面举例的字符串，那么自动考古将会先购买脆皮攻击力遗物，直到它达到或者超过-10级，接下来它将会购买非氡资源获取量遗物，直到5级，最后再购买氡获取量遗物。之后以此类推。当所有遗物等级减少1级以后，或者自动考古字符串变更了以后，自动考古将从头读取字符串，重新按照字符串的顺序从头开始升级，直到字符串末尾。注意：请正确输入字符串(只使用上述五个字母，字母前后正确使用数字和逗号，并且数字不可超过50，规则不可超过25条)，否则上方会有红字报错。',
    'Purchase when the Relic cost is less than or equal to': '当遗物的花费小于或等于总科学点数的',
    'of your total Science': '时，购买遗物升级',
    'Hold Ctrl while clicking any relic upgrade to access the Relic Automator!': '按下Ctrl键再点击任意遗物升级，可进入自动考古设置！',
    'Attack Relic': '脆皮攻击力遗物',
    'Enemy Attack Relic': '敌人攻击力遗物',
    'Radon Relic': '氡获取量遗物',
    'Resource Relic': '非氡资源获取量遗物',
    'Breed Relic': '繁殖速度遗物',
    'You have the Archaeology challenge active. Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension. Completing': '您目前正在进行考古学挑战。前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%。在此挑战激活的前提下通过区域 ',
    'Mayhem': '暴乱',
    'with this Challenge active will grant your Trimps a permanent, stacking, additive': '后，永久产生以下效果：增加',
    'Your Trimps are Poisoned! They take': '脆皮中毒了！每次攻击后受到 ',
    'damage after each attack. Poison bypasses Prismatic Shield!': '点伤害。毒伤害可以穿透棱镜护盾！',
    'You have the Mayhem challenge active.': '您目前正在进行暴乱挑战。',
    'Storm': '风暴',
    'with this Challenge active will return the Dimension to normal.': '后，世界将恢复正常。',
    'with this Challenge active will return the Dimension to normal and reward you with a brand new building to help with the weather!': '后，世界将恢复正常，同时您还可以解锁控制天气的新建筑！',
    'Same as storm but longer. You remember Storm, right?': '此挑战与普通的风暴挑战规则相同，只是持续区域更长了。您知道规则的，对吧？',
    'You have the Storm challenge active. "Same as storm but longer. You remember Storm, right?"': '您目前正在进行风暴挑战。此挑战与普通的风暴挑战规则相同，只是持续区域更长了。您知道规则的，对吧？',
    'Static': '静电',
    'Cloudy': '云',
    'Stormcloud': '风暴云',
    'Insanity': '失智',
    'Travel to a dimension where instability takes over the mind. Maps above your World level have a chance to spawn a Horrimp in each cell, with the chance based on both actual map level and its level relative to your current World Zone. Horrimps are stronger than regular imps and when killed, give you a stack of Insanity. Maximum stacks is 500. Insanity decreases your health by 1% (compounding) but increases all resources gained (including radon) by 13.133% (additive). Every map (n below map level) ran reduces your current insanity by 2n and your maximum insanity by n. Challenge ends after clearing Z110. Completing this challenge will reward you with an additional 500% of all Radon earned and a feeling of deep satisfaction.': '前往一个意识不稳定的维度。只要是高于您世界区域等级的地图，每格都有概率出现脆皮惊骇者，概率与地图等级及世界区域有关。脆皮惊骇者比普通的脆皮来得更强大，击杀它以后您获得一层失智。失智最高叠加到500层。每层失智减少1%生命值(叠乘)，但使所有资源的获取量(包括氡)增加13.133%(叠加)。每次运行低于当前区域等级的地图时，每低1级，就减少2层失智，并使失智层数叠加上限减少1层。挑战在通过区域110后结束。通过此挑战后您会获得极大的满足，并额外获得氡，数值等于本次挑战完成前氡获取量的500%。',
    'You have the Insanity challenge active. Travel to a dimension where instability takes over the mind. Maps above your World level have a chance to spawn a Horrimp in each cell, with the chance based on both actual map level and its level relative to your current World Zone. Horrimps are stronger than regular imps and when killed, give you a stack of Insanity. Maximum stacks is 500. Insanity decreases your health by 1% (compounding) but increases all resources gained (including radon) by 13.133% (additive). Every map (n below map level) ran reduces your current insanity by 2n and your maximum insanity by n. Challenge ends after clearing Z110. Completing this challenge will reward you with an additional 500% of all Radon earned and a feeling of deep satisfaction.': '您目前正在进行失智挑战。前往一个意识不稳定的维度。只要是高于您世界区域等级的地图，每格都有概率出现脆皮惊骇者，概率与地图等级及世界区域有关。脆皮惊骇者比普通的脆皮来得更强大，击杀它以后您获得一层失智。失智最高叠加到500层。每层失智减少1%生命值(叠乘)，但使所有资源的获取量(包括氡)增加13.133%(叠加)。每次运行低于当前区域等级的地图时，每低1级，就减少2层失智，并使失智层数叠加上限减少1层。挑战在通过区域110后结束。通过此挑战后您会获得极大的满足，并额外获得氡，数值等于本次挑战完成前氡获取量的500%。',
    'YOU ARE GOING CRAZY.': '您去失理了智。',
    'Berserk': '狂战',
    'Travel to a dimension filled with lots of mild annoyances, sure to drive your Trimps berserk. All enemies in this dimension have 50% more attack and health. Every time your Trimps attack they have a 5% chance to become Frenzied, causing all kills to heal for 1% of max health, and also stack +50% attack and -2% max health, up to 25 times. If a frenzied group dies or is abandoned, your Trimps gain a permanent Weakened stack, reducing health by 4.99% per stack when outside of frenzy. If weakened stacks reach 20, Trimps can no longer become frenzied. Due to this dimension\'s annoying nature, the Angelic Mastery does not work. Completing Z115 will unlock a new perk!': '前往一个充满了会让脆皮们抓狂的细碎琐事的维度。此维度中的所有敌人攻击力和生命值增加50%。每次您的脆皮们攻击时都有5%的概率进入战狂状态，此状态下，每次击杀一名敌人，可以恢复最大生命值1%的生命值，并且每层战狂增加50%攻击力，减少2%生命值上限，层数最高为25。如果一队触发战狂的脆皮阵亡或者是被放弃了，那么您的脆皮将获得一层虚弱层数，虚弱效果将一直持续，在没有战狂效果时，每层减少4.99%的生命值。如果虚弱层数到达了20层，那么将无法进入战狂状态。由于此维度令人抓狂的特性，天之赐福专精无法生效。通过区域115后可以完成此挑战！',
    'Travel to a dimension filled with lots of mild annoyances, sure to drive your Trimps berserk. All enemies in this dimension have 50% more attack and health. Every time your Trimps attack they have a 5% chance to become Frenzied, causing all kills to heal for 1% of max health, and also stack +50% attack and -2% max health, up to 25 times. If a frenzied group dies or is abandoned, your Trimps gain a permanent Weakened stack, reducing health by 4.99% per stack when outside of frenzy. If weakened stacks reach 20, Trimps can no longer become frenzied. Due to this dimension\'s annoying nature, the Angelic Mastery and Frenzy Perk do not work.': '前往一个充满了会让脆皮们抓狂的细碎琐事的维度。此维度中的所有敌人攻击力和生命值增加50%。每次您的脆皮们攻击时都有5%的概率进入战狂状态，此状态下，每次击杀一名敌人，可以恢复最大生命值1%的生命值，并且每层战狂增加50%攻击力，减少2%生命值上限，层数最高为25。如果一队触发战狂的脆皮阵亡或者是被放弃了，那么您的脆皮将获得一层虚弱层数，虚弱效果将一直持续，在没有战狂效果时，每层减少4.99%的生命值。如果虚弱层数到达了20层，那么将无法进入战狂状态。由于此维度令人抓狂的特性，天之赐福专精和战狂特权无法生效。',
    'You have the Berserk challenge active. Travel to a dimension filled with lots of mild annoyances, sure to drive your Trimps berserk. All enemies in this dimension have 50% more attack and health. Every time your Trimps attack they have a 5% chance to become Frenzied, causing all kills to heal for 1% of max health, and also stack +50% attack and -2% max health, up to 25 times. If a frenzied group dies or is abandoned, your Trimps gain a permanent Weakened stack, reducing health by 4.99% per stack when outside of frenzy. If weakened stacks reach 20, Trimps can no longer become frenzied. Due to this dimension\'s annoying nature, the Angelic Mastery does not work. Completing Z115 will unlock a new perk!': '您目前正在进行狂战挑战。前往一个充满了会让脆皮们抓狂的细碎琐事的维度。此维度中的所有敌人攻击力和生命值增加50%。每次您的脆皮们攻击时都有5%的概率进入战狂状态，此状态下，每次击杀一名敌人，可以恢复最大生命值1%的生命值，并且每层战狂增加50%攻击力，减少2%生命值上限，层数最高为25。如果一队触发战狂的脆皮阵亡或者是被放弃了，那么您的脆皮将获得一层虚弱层数，虚弱效果将一直持续，在没有战狂效果时，每层减少4.99%的生命值。如果虚弱层数到达了20层，那么将无法进入战狂状态。由于此维度令人抓狂的特性，天之赐福专精无法生效。通过区域115后可以完成此挑战！',
    'You have the Berserk challenge active. "Travel to a dimension filled with lots of mild annoyances, sure to drive your Trimps berserk. All enemies in this dimension have 50% more attack and health. Every time your Trimps attack they have a 5% chance to become Frenzied, causing all kills to heal for 1% of max health, and also stack +50% attack and -2% max health, up to 25 times. If a frenzied group dies or is abandoned, your Trimps gain a permanent Weakened stack, reducing health by 4.99% per stack when outside of frenzy. If weakened stacks reach 20, Trimps can no longer become frenzied. Due to this dimension\'s annoying nature, the Angelic Mastery and Frenzy Perk do not work."': '您目前正在进行狂战挑战。前往一个充满了会让脆皮们抓狂的细碎琐事的维度。此维度中的所有敌人攻击力和生命值增加50%。每次您的脆皮们攻击时都有5%的概率进入战狂状态，此状态下，每次击杀一名敌人，可以恢复最大生命值1%的生命值，并且每层战狂增加50%攻击力，减少2%生命值上限，层数最高为25。如果一队触发战狂的脆皮阵亡或者是被放弃了，那么您的脆皮将获得一层虚弱层数，虚弱效果将一直持续，在没有战狂效果时，每层减少4.99%的生命值。如果虚弱层数到达了20层，那么将无法进入战狂状态。由于此维度令人抓狂的特性，天之赐福专精和战狂特权无法生效。',
    'Weakened': '虚弱',
    'Your Trimps are currently chillin, but they have a 5% chance per attack to enter a frenzy!': '您的脆皮目前挺冷静，但它们有5%的概率进入战狂状态！',
    'Your Trimps currently are not weakened! Keep it up, save your Frenzied Trimps!': '您的脆皮们目前还没有虚弱过！保持这个势头，保护好您触发战狂的脆皮们！',
    'Be careful! At 20 stacks, your Trimps will no longer be able to become frenzied.': '请小心了！如果虚弱层数到达了20层，那么您的脆皮们将无法再进入战狂状态.',
    'Exterminate': '灭虫',
    'Travel to a dimension filled with nasty bugs. All non-special World enemies are high attack, low health, fast bug enemies. Whenever a group of Trimps kills a bug enemy, that group of Trimps will become Experienced until death, allowing them to attack first against fast enemies. However, wasting time in Maps allows the swarm to grow, granting +50% permanent additive attack and health to all World enemies per map started in this Universe. Completing Z120 with this Challenge active will unlock a special new Building!': '前往一个充满了讨厌虫子的维度。世界上所有非特殊的敌人都是高攻击力，低生命值，且快速的虫子。当一队脆皮击杀一只虫子后，它们将变得经验丰富，直到阵亡前，它们可以无视敌人快速状态，抢先攻击。但是，每进入一次地图，虫群都将变得更加庞大，使世界上的所有敌人增加50%的攻击力和生命值。在此挑战激活的前提下通过区域120后，将解锁一个新建筑！',
    'You have the Exterminate challenge active. Travel to a dimension filled with nasty bugs. All non-special World enemies are high attack, low health, fast bug enemies. Whenever a group of Trimps kills a bug enemy, that group of Trimps will become Experienced until death, allowing them to attack first against fast enemies. However, wasting time in Maps allows the swarm to grow, granting +50% permanent additive attack and health to all World enemies per map started in this Universe. Completing Z120 with this Challenge active will unlock a special new Building!': '您目前正在进行灭虫挑战。前往一个充满了讨厌虫子的维度。世界上所有非特殊的敌人都是高攻击力，低生命值，且快速的虫子。当一队脆皮击杀一只虫子后，它们将变得经验丰富，直到阵亡前，它们可以无视敌人快速状态，抢先攻击。但是，每进入一次地图，虫群都将成长壮大，使世界上的所有敌人增加50%的攻击力和生命值。在此挑战激活的前提下通过区域120后，将解锁一个新建筑！',
    'Experienced': '经验丰富',
    'This group of Trimps has killed a bug and knows their weakness, allowing them to attack first.': '这队脆皮击杀过虫子，了解它们的弱点，所以可以抢先攻击。',
    'The Swarm Grows': '虫群成长壮大',
    'Nurture': '培养',
    'Travel to a dimension filled with gigantic monsters. All enemies have 2x attack, World enemies have 2x health and map enemies have 10x health. Luckily, Scruffy has a brother in this dimension who will help you out if you level him up! You\'ll gain access to the special Laboratory building while on this challenge, which will give bonus Exp to Scruffy\'s brother, Cruffys. Check the Scruffy and Laboratory tooltips while on this Challenge for more info. Clearing': '前往一个充满了巨型怪物的维度。所有敌人获得2倍攻击力，世界上的敌人生命值变为2倍，地图中的敌人生命值变为10倍。但幸运的是，污污在此维度中有一个兄弟，如果善加培养，它就能帮到大忙了！此挑战中您可以建造特殊的实验室建筑，可为污污的兄弟，朽朽提供额外的经验值。在此挑战中查看污污或实验室的提示框可以获取更详细的信息。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant an additional 400% of all Radon earned up until that point, and will (mostly) return the world to normal.': '后，可额外获得氡，数值等于本次挑战完成前氡获取量的400%，然后世界将(基本上)回归正常。',
    'Complete this Challenge with Cruffys at Level 10 or higher to earn a new Perk!': '在朽朽达到10级的前提下完成此挑战将获得一个新的特权！',
    'You have the Nurture challenge active. Travel to a dimension filled with gigantic monsters. All enemies have 2x attack, World enemies have 2x health and map enemies have 10x health. Luckily, Scruffy has a brother in this dimension who will help you out if you level him up! You\'ll gain access to the special Laboratory building while on this challenge, which will give bonus Exp to Scruffy\'s brother, Cruffys. Check the Scruffy and Laboratory tooltips while on this Challenge for more info. Clearing': '您目前正在进行培养挑战。前往一个充满了巨型怪物的维度。所有敌人获得2倍攻击力，世界上的敌人生命值变为2倍，地图中的敌人生命值变为10倍。但幸运的是，污污在此维度中有一个兄弟，如果善加培养，它就能帮到大忙了！此挑战中您可以建造特殊的实验室建筑，可为污污的兄弟，朽朽提供额外的经验值。在此挑战中查看污污或实验室的提示框可以获取更详细的信息。在此挑战激活的前提下通过区域 ',
    'You will unlock this challenge once you  reach Zone 130.': '欲解锁此挑战，您需要到达区域130。',
    'Pandemonium': '群魔乱舞',
    'Travel to a chaotically windy dimension. Map enemies at or below World level will obliterate 75% of your Metal, Wood and Food after each enemy killed. For each map level above world level, 5% (additively) fewer resources will be destroyed, with +10 map enemies destroying only 25%. You start the Challenge with 100 stacks of Order. Each Zone, 10% of your current Order stacks will be converted into Pandemonium stacks on the Enemy. Each Pandemonium stack increases Enemy\'s attack and health by 100% per stack, and has 10x effect on the final boss of each Zone. The final boss is a Windy enemy who will blow away 1% of your Food, Wood and Metal per stack of Pandemonium per attack. Completing a map grants you 1 Order stack for each level above your World Zone (Max 100), and reduces enemy Pandemonium by the same amount. Completing': '前往一个怪风阵阵的维度。在不高于当前区域等级的地图中每击杀一名敌人，食物，木头和金属都将减少75%。地图等级每高于当前区域等级1级，则击杀敌人时减少的数值小5%(相互叠加)，这意味着如果地图等级高于当前区域等级10级，则击杀敌人后食物，木头和金属只减少25%。脆皮初始拥有100层秩序。通过每个区域后，当前秩序层数的10%将转换为敌人的群魔乱舞层数。每层群魔乱舞可以使敌人的攻击力和生命值增加100%，对于区域末尾的首领效果变为10倍。并且首领在每次攻击后，根据当前的群魔乱舞层数，每层使食物，木头和金属减少1%。通过一张地图后，地图等级每高于当前区域等级1级，则可以获得1层秩序(上限为100)，并使敌人的群魔乱舞层数减少相应数值。在此挑战激活的前提下通过区域 ',
    'bonus to Helium or Radon, Trimp Attack, Trimp Health, and Resources Gathered in Universe 1 and 2. Each time Pandemonium is completed, the reward for next time increases by an additional 10%, Enemies gain 5x damage and health, and Equipment is 5x more expensive for all future runs of Pandemonium. Starting on your fourth run, the Wind will be too strong for Trimps to hold a Shield. Another piece of equipment will be disabled every 2 completions after Shield is lost.': '宇宙1和宇宙2中的氦或氡获取量，脆皮攻击力，脆皮生命值，资源获取量。每完成一次群魔乱舞挑战，下次挑战的奖励就增加10%，但敌人也会增加5倍攻击力和生命值，且装备价格变为之前的5倍。另外，从第四次挑战开始，怪风将使脆皮开始无法使用盾牌。且在这之后每完成2次挑战，都将再无法使用另一个装备。',
    'You have the Pandemonium challenge active. Travel to a chaotically windy dimension. Map enemies at or below World level will obliterate 75% of your Metal, Wood and Food after each enemy killed. For each map level above world level, 5% (additively) fewer resources will be destroyed, with +10 map enemies destroying only 25%. You start the Challenge with 100 stacks of Order. Each Zone, 10% of your current Order stacks will be converted into Pandemonium stacks on the Enemy. Each Pandemonium stack increases Enemy\'s attack and health by 100% per stack, and has 10x effect on the final boss of each Zone. The final boss is a Windy enemy who will blow away 1% of your Food, Wood and Metal per stack of Pandemonium per attack. Completing a map grants you 1 Order stack for each level above your World Zone (Max 100), and reduces enemy Pandemonium by the same amount. Completing': '您目前正在进行群魔乱舞挑战。前往一个怪风阵阵的维度。在不高于当前区域等级的地图中每击杀一名敌人，食物，木头和金属都将减少75%。地图等级每高于当前区域等级1级，则击杀敌人时减少的数值小5%(相互叠加)，这意味着如果地图等级高于当前区域等级10级，则击杀敌人后食物，木头和金属只减少25%。脆皮初始拥有100层秩序。通过每个区域后，当前秩序层数的10%将转换为敌人的群魔乱舞层数。每层群魔乱舞可以使敌人的攻击力和生命值增加100%，对于区域末尾的首领效果变为10倍。并且首领在每次攻击后，根据当前的群魔乱舞层数，每层使食物，木头和金属减少1%。通过一张地图后，地图等级每高于当前区域等级1级，则可以获得1层秩序(上限为100)，并使敌人的群魔乱舞层数减少相应数值。在此挑战激活的前提下通过区域 ',
    'You have the Pandemonium challenge active.': '您目前正在进行群魔乱舞挑战。',
    'Order': '秩序',
    'There is no Order. Your Trimps are in full blown panic and one of them seems to have stolen your shoe.': '这已经毫无秩序可言了。脆皮们乱成了一片，其中一只氦偷走了您的鞋子。',
    'Alchemy': '炼金术',
    'Travel to a dimension where maps are filled with useful herbs. Collect different herbs from different types of maps, and use Alchemy to create powerful potions to strengthen your Trimps. Clearing': '前往一个地图中充满了药草的维度。您可以在地图中收集不同的药草，然后利用炼金术将它们制成强大的药剂来强化脆皮们。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant an additional 400% of all Radon earned up until that point, and will return the world to normal. You can repeat this challenge!': '后可以完成此挑战并额外获得氡，数值等于本次挑战完成前氡获取量的400%，然后世界将回归正常。此挑战可重复完成！',
    'You have the Alchemy challenge active. Travel to a dimension where maps are filled with useful herbs. Collect different herbs from different types of maps, and use Alchemy to create powerful potions to strengthen your Trimps. Clearing': '您目前正在进行炼金术挑战。前往一个地图中充满了药草的维度。您可以在地图中收集不同的药草，然后利用炼金术将它们制成强大的药剂来强化脆皮们。在此挑战激活的前提下通过区域 ',
    'Complete this Challenge once to unlock the ability to create a brand new type of map that should greatly aid your Alchemy.': '首次完成此挑战后还可以解锁一种新的地图，它对炼金术的帮助很大。',
    'You will unlock this challenge once you  reach Zone 155.': '欲解锁此挑战，您需要到达区域155。',
    //挑战相关结束
    //特权相关
    'Apply your skills at salvaging things from the Spire to increase all loot gained by 0.25% per level. The price for this perk increases additively, and each level will cost exactly 10000 more than the previous level.': '将您搜刮尖塔的本事用在劫掠上，每级提升0.25%劫掠效果。此特权的价格线性增加，每级都比上一级贵10000。',
    'You\'ve learned to look more objectively at the no longer mysterious building designs, allowing you to increase housing space by 0.25% per level. This multiplies on top of Carpentry I, but the bonus stacks additively. The price for this perk also increases additively, and each level will cost exactly 10000 more than the previous level.': '那些建筑图纸再也不是神秘莫测的了，您学会了如何更客观地看待它们，每级可以增加0.25%居住空间。此加成与木工的效果叠乘，但加成是线性的。此特权的价格也是线性增加的，每级都比上一级贵10000。',
    'Corruption and impending doom are great motivators to work a bit harder! Increases Trimp gather speed by 1% per level. The price for this perk increases additively, and each level will cost exactly 1000 more than the previous level.': '腐化与死亡威胁可以更好地鼓舞脆皮们工作！每级提升脆皮1%的资源获取速度。此特权的价格线性增加，每级都比上一级贵1000。',
    'You find strength in the desire to some day return home. Anger your Trimps by making them listen to you talk about it all the time, increasing their damage by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '回家的渴望给了您力量。对着脆皮一直不停地说，以此激怒它们从而每级增加1%攻击力。此特权的价格线性增加，每级都比上一级贵500。',
    'You feel more grounded as you remember where you came from. Spread your toughness to your Trimps, increasing health by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '想起故乡在何方以后，您感觉更踏实了。用这些教会脆皮何为坚韧，每级增加1%生命值。此特权的价格线性增加，每级都比上一级贵500。',
    'Capable': '能力',
    'You can sense great power within Fluffy, but he\'ll need some training. Each level of Capable allows Fluffy to gain 1 level of Experience. Respeccing to remove Capable will temporarily remove any bonuses associated with Fluffy\'s level and Experience, but all Exp will be saved until you add points back. Each level of Capable is 10x more expensive than the last, and buying the first level will allow Fluffy to take Portals with you.': '绒绒潜力巨大，但它需要接受训练。每级能力特权都可以让绒绒多获得1级经验值。此特权洗点后，绒绒相应的等级和经验值加成会暂时失效，但重新加点后一切就会恢复。每级能力特权都比上一级贵10倍，购买1级以后，绒绒可以跟您一起通过传送门。',
    'Cunning': '灵巧',
    'Fluffy demands more helium! Each level of Cunning will increase the final amount of Experience Fluffy gains from each Zone by 25% (additive).': '绒绒想要更多的氦！每级灵巧将绒绒每个区域获得的经验值增加25%(相互叠加)。',
    'Curious': '好奇',
    'Fluffy is coming along, but he\'s coming along slowly. Each point of Curious will speed up Fluffy\'s progression by adding 60 Exp to the base amount he gains per Zone clear.': '绒绒在进步, 但还不够快。每级好奇可以将通过区域的基础经验奖励增加60。',
    'Classy': '上等',
    'Overkill': '超杀',
    'You have overcome the otherworldly objective of obtaining Overkill, outstanding! Each level of this perk will allow 0.5% of your overkill damage to harm the next enemy. If this damage kills the next enemy, you will lose no time moving through that cell.': '这不是痴人说梦，您真的获得了超杀升级，太出色了！每级可以将0.5%的溢出伤害用来攻击下个敌人。如果下个敌人被此伤害击杀，那么您就可以直接通过该格子了。',
    'Resourceful': '足智多谋',
    'Spending time with limited maps has taught you how to be more resourceful. Each level will allow you to spend 5% fewer resources': '经历过只能制造有限数量的地图以后，您学会了如何变得更加足智多谋。每级可以让所有建筑 ',
    'per level on all structures.': '少花费5%的资源。',
    'Coordinated': '协同', //包括成就描述
    'Use knowledge gained while studying Coordinated Bad Guys to reduce the amount of Trimps required per level of Coordination by': '通过研究协同作战的敌人，您明白了如何减少协作升级所需的脆皮。每级可以将协作升级所需的脆皮数量减少',
    'of current amount (compounding': '(叠乘',
    'while keeping the stat bonus the same.': '同时协作的加成不变。',
    'Siphonology': '虹吸学',
    'Use strategies discovered in alternate dimensions to siphon Map Bonus Damage stacks from lower level maps. For each level of Siphonology, you will earn stacks from maps one level lower than your current Zone number.': '在其他维度中，您发现了从更低级的地图中虹吸地图奖励的方法。通常您只能从与当前区域等级相同的地图中获取地图奖励，但每级虹吸学可以使此等级数值减少1级。',
    'Anticipation': '预期',
    'Resilience': '弹性',
    'Use your acquired skills in Trimp strengthening to gain a': '利用您的脆皮强化技能，使脆皮生命值每级增加',
    'compounding': '(效果叠乘)',
    'increase to total Trimp health.': '。',
    'Meditation': '冥想',
    'Your experiences in the Dimension of Strong Things have taught you the value of taking your time. Every level of Meditation will increase your Trimps\' gather speed by 1% for every 10 minutes spent on the same Zone, up to 1 hour, even when offline. This bonus is reset after clearing the current Zone.': '经历过那个敌人强化的维度后，您明白了慢条斯理的价值。每在同一个区域停留10分钟，每级冥想就可以使脆皮的资源获取速度增加1%。此加成时间上限1小时，离线生效。通过当前区域后此加成重置。',
    'Relentlessness': '无情',
    'You\'ve seen too many Trimps fall, it\'s time for more aggressive training. Bringing back these memories will cause your Trimps to gain a 5% chance to critically strike for +130% damage at level 1, and they will gain an additional 5% crit chance and 30% crit damage per level.': '您见过太多脆皮死去了，应该让它们进行更积极的训练。带回这些记忆后，脆皮在第1级可以获得5%暴击率，暴击伤害增加130%，且此后每级增加5%暴击率，暴击伤害30%。',
    'Greed': '贪婪',
    'Feeling poor? Just get more resources! Each level increases all loot gained by 2.5% (compounding). Starting once you have 600 Tributes, every Tribute you purchase (up to 1250) will': '感觉太穷了？那就想办法多搞点资源！每级可以使所有战利品获取量增加2.5%(相互叠乘)。而且当拥有600贡品后(效果上限1250贡品)，每个贡品还可以使该加成的数值 ',
    'add': '增加',
    '0.015% to the compounding bonus. Every 25th Tribute you purchase will also add an additional 0.35% to the compounding bonus. For example: If you have 750 Tributes, you\'ll earn a 6.8% compounding Loot bonus for each level of Greed.': '0.015%。另外每25个贡品还会使此数值额外再增加0.35%。举个例子：如果您有750个贡品，那么每级贪婪的叠乘加成为6.8%。',
    'Tenacity': '坚持', //包括成就描述
    'If things seem tough, just try hitting them harder. Each level increases your Trimps\' Attack by 10% (compounding). For every 4 minutes you spend on one Zone, 1% is': '如果敌人皮糙肉厚的话，只需要更用力就行了。每级提升脆皮10%的攻击力(相互叠乘)。并且每在一个区域停留4分钟，该加成的数值再 ',
    'added': '增加',
    'to the compounding bonus, with a max of 2 hours. When you clear a Zone, you carry 50% of the time you spent last Zone (up to 2 hours) with you to the new Zone. For example: If you have spent an hour on one Zone, you\'ll earn a 25% compounding Attack bonus for each level of Tenacity.': '1%，此加成时间上限为2小时。进入新区域以后，您可以将上个区域时间的一半计入下个区域的加成。举个例子：如果您在一个区域停留了1个小时，那么每级坚持的叠乘加成为25%。',
    'Criticality': '暴击限界',
    'When your Critical Strikes just aren\'t doing enough, try Criticality! Each level increases your Trimps\' Critical Strike Damage by 10% (additive).': '觉得暴击伤害不够看？试试暴击限界吧！每级提升脆皮10%的暴击伤害(相互叠加)。',
    'Equality': '平等',
    'Produce a Calming Aura from your Portal Device, reducing the Attack of Bad Guys AND Trimps by 10% (compounding). You can enable Equality Scaling, which causes Equality to start inactive and gain one level each time your Trimps die up to your purchased Perk level.': '用传送门装置发出一个镇静力场，同时减少脆皮和敌人10%的攻击力(相互叠乘)。您也可以激活平等缩放，激活后，平等在一开始不生效，而脆皮每阵亡一次，平等效果增加一级，最高等于您的平等特权等级。',
    'Carpentry': '木工',
    'You\'ve built quite a few houses and you\'re getting pretty good at it. Bringing your expertise in construction back through the portal will allow you to house 10% more Trimps per level': '您建了不少房子，已经开始摸到门道了。之前建造的心得使您每级可以比上一级多容纳10%的脆皮',
    'than the current amount (compounds': '(相互叠乘',
    'Artisanistry': '手艺娴熟',
    'You\'re beginning to notice ways to make equally powerful equipment with considerably fewer resources. Bringing back these new ideas will allow you to spend 5% fewer resources': '对于如何用更少的资源制造同样强度的装备，您已经有了头绪。每级可以使您在制造装备时 ',
    'than the current cost': '比上一级',
    'per level on all equipment.': '少花费5%的资源。',
    'Range': '范围',
    'Use your new-found leadership skills in order to increase the minimum damage your Trimps deal by 2% per level. Stacks up to 10 times, doesn\'t affect max damage. At 10 levels, you will get a minimum of 100% benefit from all attack damage per strike.': '您新发现的领导技艺可以帮助提高脆皮的最低伤害。每级提高2%脆皮的最低伤害。最高10级，且不会影响最高伤害。10级时，每次攻击至少造成100%的伤害。',
    'Agility': '敏捷',
    'Crank your portal into overdrive, increasing the clock speed of the Universe. Each level reduces the time between Trimp and Bad Guy attacks by': '把您的传送门调成超速，增加宇宙中的时间流速。每级可使脆皮和敌人的攻击间隔比上一级减少',
    'of the current time (compounds': '(相互叠乘',
    'Bait': '诱饵',
    'A few of these in your traps are sure to bring in extra Trimps. Each level allows traps to catch 1 extra Trimp.': '放点这些东西在陷阱里，就肯定能多抓到一些脆皮。每级使陷阱多抓1个脆皮。',
    'Trumps': '王牌',
    'Practicing aggressive strategizing allows you to earn 1 extra max population from each battle territory bonus.': '实施激进的战略以后，每个战斗领土加成可以额外获得1点人口上限。',
    'Pheromones': '信息素',
    'Bring some pheromones with you to ensure that your Trimps will permanently breed 10% faster.': '带上一些信息素，可以确保脆皮繁殖速度永久增加10%。',
    'Packrat': '囤积成瘾',
    'Study the ancient, secret Trimp methods of hoarding. Each level increases the amount of stuff you can shove in each Barn, Shed, and Forge by 20%.': '研究古老神秘的贮藏方法。谷仓、窝棚和锻造厂每级增加20%存储上限。',
    'Motivation': '鼓舞',
    'Practice public speaking with your Trimps. Each level increases the amount of resources that workers produce by 5%.': '练习在脆皮面前进行演讲。每级增加5%工人的资源获取量。',
    'Power': '力量',
    'Trimps learn through example. Spending some time bench pressing dead Elephimps should inspire any future Trimps to become stronger too. Adds 5% attack permanently to your Trimps.': '身体力行，方得真意。花点时间让脆皮们用死去的脆皮象练习卧推可以让它们变得更加强大。永久增加脆皮5%攻击力。',
    'Toughness': '坚韧',
    'Pay your Trimps to knock you around a little bit. By learning to not be such a wuss, your Trimps will be less wussy as well. Adds 5% health permanently to your Trimps.': '让您的脆皮跟您对着练练，好好学学什么是纯爷们。永久增加脆皮5%生命值。',
    'Looting': '劫掠',
    'Walk back through the empty Zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle (Including Helium) by 5%.': '回到之前的区域，学会如何榨干敌人身上的每一个铜板。每级永久增加5%战利品获取量(包括氦)。',
    'Walk back through the empty Zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle (Including Radon) by 5%.': '回到之前的区域，学会如何榨干敌人身上的每一个铜板。每级永久增加5%战利品获取量(包括氡)。',
    'Prismal': '棱镜化',
    'Crystallize some Radon, creating an interdimensional Prism that you can carry back through Portals. Each level adds 1% to your Trimps\' Prismatic Shield and makes your Trimps feel 5% more comfortable in battle. Once you have 20 or more points of Prismal, you will automatically collect Prismalicious from the Prismatic Palace after completing Z20.': '将一些氡晶化，制造一个超次元的棱镜，这样就可以带着它通过传送门了。每级增加1%的棱镜护盾，并且可以使脆皮在战斗中舒适度增加5%（译者注：后半句无实际效果）。当棱镜化特权等级到达20级以上后，您就可以在通过区域20后自动获得棱镜宫殿的优质棱镜升级。',
    'Hunger': '饥饿',
    'If Soldiers get hungry, the enemies are free food! Use your extra Overkill damage to process World enemies into healthy free-range meat! Each level of Hunger will allow your Trimps to turn 3% of their Overkill damage into some permanent damage.': '饿急眼的士兵们什么都做得出来！利用溢出的伤害，它们可以把世界上的敌人变成绿色健康的有机食品！每级可以将3%的溢出伤害转换为永久的伤害加成。',
    'Championism': '乐于助人',
    'Frenzy': '战狂',
    'Each level grants your Trimps a 0.1% chance on attack to enter a Frenzy for 5 seconds per perk level, granting +50% attack (additive) per perk level. If your Trimps die while Frenzied, half of the remaining time on Frenzy is removed. Frenzy time can be refreshed once half of its total time has elapsed, but only if the group of Trimps that earned the buff has not died yet.': '使脆皮们每级增加0.1%的概率进入战狂状态，且每级使战狂持续时间增加5秒，攻击力多增加50%(相互叠加)。如果脆皮们在战狂状态下阵亡，那么剩余的战狂状态持续时间将减少一半。当战狂状态持续时间过半时，可以通过再次进入战狂状态来刷新它的持续时间，但前提是，最初触发战狂的那队脆皮们不可阵亡。',
    'Frenzied': '战狂',
    'Your Trimps are no longer frenzied!': '您的脆皮不再有战狂状态了！',
    'Your Trimps have died under this Frenzy buff and will be unable to recharge it.': '最初触发战狂的脆皮们已经阵亡了，战狂状态持续时间无法再刷新了。',
    'Your Trimps are able to refresh this Frenzy buff!': '脆皮们可以刷新战狂状态的持续时间！',
    'Observation': '洞察',
    'You will have a': '您将有',
    'chance to find a Runetrinket at Z100.': '概率在区域100找到一个小符饰。',
    'You have a': '您有',
    'chance to find a Runetrinket at the end of this Zone.': '概率在通过这个区域后找到一个小符饰。',
    //特权相关结束
    //专精相关
    'Portal Generator': '传送门发生器',
    'Unlock Portal immediately after clearing Z20.': '通过区域20以后立刻解锁传送门。',
    'Bionic Magnet I': '仿生磁铁 I',
    'Automatically pick up each level of Bionic Wonderland (BW) as you pass a BW Zone. Will not work if you have already missed any BWs this run, or if you reach a Zone higher than any BW you have ever cleared before.': '自动通过仿生仙境，如果之前已经错过仿生仙境，或者之前未手动通过该层仿生仙境，则无效。',
    'In addition, give all current and future copies of Bionic Wonderland the \'Fast Attacks\' special modifier.': '另外，所有仿生仙境地图视为具有“快速进攻”特殊修饰符。',
    'Turkimp Tamer I': '脆皮火鸡饲主 I',
    'Increases the chance of finding a Turkimp by 33%, the bonus time from each Turkimp by 5 minutes, and increases the time cap by 10 minutes.': '脆皮火鸡出现率增加33%，加成持续时间增加5分钟，加成上限时间增加10分钟。',
    'Home Detector': '家园探测器',
    'Unlock Mansion, Hotel, Nursery, Resort, Gateway, Wormhole, and Collector automatically when passing the Zone they drop at.': '通过对应区域后立刻解锁豪宅、宾馆、托儿所、度假村、维度裂隙、虫洞和汲能设施。',
    'Bounty Hunter': '赏金猎人',
    'Unlock Bounty immediately after clearing Z15.': '通过区域15后立刻解锁赏金升级。',
    'Explorer Aura I': '探险家光环 I',
    'Automatically picks up SpeedExplorer books when you pass their Zone.': '通过对应区域后立刻获得探险家加速升级。',
    'Void Power I': '虚空力量 I',
    'Your Trimps gain 15% attack and health inside Void Maps.': '虚空地图中脆皮增加15%攻击力和生命值。',
    'Metallic Coat': '金属外套',
    'Reduce the amount of enemy damage that can pierce block by 25%.': '降低敌人25%的格挡穿透。',
    'Heirnuum I': '传家虚物 I',
    'You can spend an extra 10% of your Nu on your Heirlooms, bringing the total to 60%.': '每个传家宝的可使用虚空物质上限额外增加10%，总计可达到虚空物质总量的60%。',
    'Herbalist': '神农',
    'Headstart I': '先声夺人 I',
    'Corruption begins 5 levels earlier, at Zone 176.': '腐化提前5个区域，在区域176出现。',
    'Scryhard I': '努力占卜 I',
    'When fighting Corrupted or Healthy cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化或健康敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'When fighting Corrupted cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'Void Power II': '虚空力量 II',
    'Your Trimps gain an additional 20% attack and health inside Void Maps.': '虚空地图中脆皮再度增加20%攻击力和生命值。',
    'Map Reducer I': '地图减压 I',
    'Reduces the starting point of the Low Map Level Loot Penalty by 1 level. This allows you to earn the same amount of loot by doing a map at your current Zone number, or at your current Zone number minus 1.': '将地图中劫掠的低地图等级减成起始点降低1层。在跟区域相同层地图或比区域低1层的地图中劫掠的资源量相等。',
    'King of Bones I': '骨头之王 I',
    'Double the chance for a Megaskeletimp to appear instead of a Skeletimp.': '脆皮超级骷髅取代脆皮骷髅出现的概率翻倍。',
    'Safe Mapping': '安全绘图',
    'Your Trimps gain +100% health in maps.': '脆皮在地图中生命值翻倍。',
    'Headstart II': '先声夺人 II',
    'Corruption begins an additional 10 levels earlier, at Zone 166.': '腐化再提前10个区域, 在区域166出现。',
    'Legs for Days': '日残腿法',
    'Gain +50% attack when running a Daily Challenge.': '进行日常挑战时攻击力增加50%。',
    'Hyperspeed I': '风驰电掣 I',
    'Reduce the time in between fights and attacks by 100ms.': '将战斗间隔和攻击间隔减少100毫秒。',
    'Blacksmithery I': '锻铁术 I',
    'Turkimp Tamer II': '脆皮火鸡饲主 II',
    'Learn to grow your own Turkimp, increasing the bonus from +50% to +100%, and making the Turkimp bonus available permanently.': '学习如何自己饲养脆皮火鸡，加成从50%变为100%，且永久持续。',
    'Grants a 2% chance to find a Randimp in World and Maps. Randimps will grant the bonus of a random World or Map Exotic Import (based on current location) on death.': '脆皮百变怪有2%的概率出现在世界或地图中。脆皮百变怪死亡时随机给予世界或地图(根据当前所在的位置而定)中一个奇异外皮的效果。',
    'Headstart III': '先声夺人 III',
    'Corruption begins an additional 15 levels earlier, at Zone 151.': '腐化再提前15个区域，在区域151出现。',
    'Map Battery': '地图电池',
    'Doubles the Zone bonus for completing maps once you reach 10 stacks.': '当完成十次地图后，地图奖励翻倍。',
    'Hyperspeed II': '风驰电掣 II',
    'Blacksmithery II': '锻铁术 II',
    'King of Bones II': '骨头之王 II',
    'Reduce the minimum time between Skeletimp spawns by 10 minutes.': '将脆皮骷髅的最小生成时间减少10分钟。',
    'Expert Gen': '发生器专家',
    'Increase the amount of speed that the Dimensional Generator gains per Zone by 50%. In addition, completing a Void Map at or above Z230 grants +10 Magmite.': '每通过一个区域，维度发生器产生住房的时间间隔就减少一定数值，此升级可以使时间间隔减少的速度提高50%。另外，每在区域230及以上的区域通过一张虚空地图可以获得10岩浆岩。',
    'Magma Flow': '岩浆流',
    'Cause two extra Magma cells to appear on any Zone that already has Magma.': '有岩浆的区域额外生成两个岩浆格子。',
    'Explorer Aura II': '探险家光环 II',
    'Start with an extra SpeedExplorer book after each Portal.': '每次使用传送门后起始额外获得1级探险家加速升级。',
    'Void Power III': '虚空力量 III',
    'Your Trimps gain an additional 30% attack and health inside Void Maps, and all current and future Void Maps gain the \'Fast Attacks\' special modifier.': '虚空地图中脆皮再度增加30%攻击力和生命值，且所有虚空地图视为具有“快速进攻”特殊修饰符。',
    'Blacksmithery III': '锻铁术 III',
    'Heirnuum II': '传家虚物 II',
    'You can spend another extra 10% of your Nu on your Heirlooms, bringing the total to 70%.': '每个传家宝的可使用虚空物质上限再额外增加10%，总计可达到虚空物质总量的70%。',
    'Liquification I': '液化 I',
    'This Mastery is currently disabled in Universe': '此专精无法生效，因为目前处于宇宙',
    'Map at Zonier': '自动进图员',
    'Unlock a second preset to use with Map At Zone!': '自动进图可以使用第二套预设！',
    'Scryhard II': '努力占卜 II',
    'Complete an entire Void Map in Scryer Formation to earn an additional 50% Helium.': '全程使用占卜者阵型完成一张虚空地图可以额外获得50%氦。',
    'Magmamancermancy': '岩浆巫师学',
    'Magmamancers will now increase Trimp Attack by the same amount that they increase Metal. In addition, start every post-magma Zone with 5 minutes of credit already applied to your Magmamancers.': '岩浆巫师不仅提高金属获取量，还同时提高脆皮攻击力，二者加成数值相等。另外，进入岩浆以后的区域时，岩浆巫师视为已经获得5分钟的加成。',
    'Map Reducer II': '地图减压 II',
    'Reduces the min and max number of cells by 5 when creating maps.': '制造地图时最大格子和最小格子数均减少5。',
    'Diplomacy I': '斡旋 I',
    'Increase your token trading ratio from 10:5 to 10:8.': '将符记的转换比例由10:5提高到10:8。',
    'Deca Build': '十重建造',
    'Buildings in the queue are constructed 10 at a time. In addition, buildings added to the queue via AutoStructure are added 10 at a time if needed.': '可以同时建造十个建筑。另外，建筑能以10为单位加入队列。',
    'Still Rowing I': '尖塔排行 I',
    'Increase the looting bonus for completing a full row in a Spire by 50%, from 2% extra loot to 3%.': '完成尖塔一行的劫掠加成增加50%，从2%增加为3%。',
    'Patience': '耐心',
    'Anticipation can now reach 45 stacks.': '预期特权时间上限提高为45秒。',
    'Void Specialization I': '虚空特化 I',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Helium from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氦就增加0.25%。',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Radon from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氡就增加0.25%。',
    'You reached': '您上次传送前最高到达了区域 ',
    'Your value for "Last Portal Zone" only changes if you Portal after Z99 or collect an Heirloom, meaning it won\'t be reset by early restarts.': '上次传送前通过的区域只在上次传送前到达区域99或获得一个传家宝后才会开始计算，早早使用传送门不会对这个数值造成影响。',
    'Your Trimps gain 15% additive damage per Healthy cell in your current Zone.': '当前区域中每有一个健康的格子，您的脆皮就获得15%额外伤害，伤害叠加。',
    'Diplomacy II': '斡旋 II',
    'Add 5 levels to the Upgrade and Stack Transfer of all 3 Empowerments of Nature, without increasing the costs.': '将全部3种自然赋能的赋能等级和层数传递率等级提高5级，且不增加成本。',
    'Liquification II': '液化 II',
    'Still Rowing II': '尖塔排行 II',
    'Your Trimps will now gain attack equal to 2x their looting bonus from each Spire row cleared.': '完成尖塔一行的劫掠加成现在还可以增加脆皮的攻击力，数值为劫掠加成的2倍。',
    'Amalgagreater': '超级合并者',
    'Causes the 50% damage bonus from each Amalgamator to be compounding rather than additive.': '合并者的50%伤害加成从叠加变为叠乘。',
    'Void Specialization II': '虚空特化 II',
    'Gain a second Void Map per 100 Zones cleared last run, but the first one is earned at Z50 (then 150, 250 etc). In addition, if Fluffy\'s level 6 bonus is active, this allows Fluffy to stack 1 additional Void Map, adding another 50% Helium bonus to the stack.': '在虚空特化 I的基础上，从区域50开始，上次传送前每通过100个区域，传送后就多获得一张虚空地图。另外，绒绒的6级加成如果激活，则绒绒的虚空地图融合上限再增加1。',
    'Bionic Magnet II': '仿生磁铁 II',
    'Adds Prestigious to Bionic Wonderland maps. This will make every Bionic Wonderland have two Prestige upgrades, including your first run that normally just has a RoboTrimp upgrade. In addition, gain +50% attack whenever you\'re in a map that is higher than your current World.': '使仿生仙境地图增加重铸升级，每张仿生仙境地图可以获得两个重铸升级，包括第一次运行某张仿生仙境地图时(通常只有一个脆皮机器人升级)。而且当您进入大于当前区域等级的地图时，攻击力增加50%。',
    'Flufffocus': '绒绒专注',
    'Scrufffocus': '污污专注',
    'Flufffinity': '绒绒限界',
    'Scrufffinity': '污污限界',
    'Gain one extra Fluffy ability. This works as if Fluffy Evolved, but doesn\'t increase Fluffy\'s damage bonus.': '绒绒获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Gain one extra Scruffy ability. This works as if Scruffy Evolved, but doesn\'t increase Scruffy\'s damage bonus.': '污污获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Excessive': '超超杀',
    'Allows you to Overkill yet another cell.': '超杀格子上限增加1个。',
    'Charged Crits': '蓄力暴击',
    'Adds +1 to your MegaCrit modifier, and adds 50% of your Shield Heirloom\'s Crit Chance to your Crit Chance again.': '超暴击倍率加1，并且暴击率增加您盾牌暴击率的50%。',
    'However, you do not currently have Crit Chance on your Shield.': '但目前您的盾牌并没有暴击率的加成。',
    'Master of the ': '掌握',
    'Grants 3 spectacular bonuses to your Void Maps, though the first two are incompatible with Scruffy. Scruffy tries but seriously just can\'t figure out the whole stacking thing yet.': '虚空地图获得以下三个强大的加成，但前两个对污污无效。污污很努力了，但是它真的搞不明白地图融合之类的事。',
    'Grants 3 spectacular bonuses to your Void Maps!': '虚空地图获得以下三个强大的加成！',
    '1. The Fluffy bonus for stacked Void Maps calculates with compounding gains, rather than additive. Each Void Map in the stack increases the Helium gain from the stack by x1.5 rather than +50%.': '1. 绒绒的融合虚空地图加成从叠加变为叠乘。融合每张虚空地图的氦加成从增加50%变为乘以1.5倍。',
    '3. Your Trimps gain 5x damage inside Void Maps': '3. 您的脆皮在虚空地图中获得5倍攻击力。',
    'Adds 1 extra Healthy cell for every Spire completed this run. Healthy cells will also drop an additional 20% of the Zone\'s value in Helium, bringing the total up to 65%. Spire I will count for 1 Healthy cell once Healthy cells begin to appear in the World, but does not cause them to start spawning earlier.': '自上次传送后每通过1个尖塔，就额外生成1个健康格子。健康格子额外掉落本区域氦数量的20%，将该掉落量总和提升到65%。尖塔 I可以额外生成1个健康格子，但只在健康格子开始出现以后生效(不会使健康格子提前出现)。',
    'On your current run, you have cleared no Spires, so this Mastery is granting 0 extra Healthy cells. On your current Zone, you\'re finding 0 Healthy cells.': '自上次传送后您还没有通过尖塔，此专精可获得0个额外健康格子。当前区域中有0个健康格子。',
    'Still Magmamancing': '尖塔岩浆巫术',
    'Start every post-magma Zone with an additional 60 seconds of credit already applied to your Magmamancers per Spire row completed this run. In addition, every 2 Spires you complete this run increases the maximum time that Magmamancers can stack by 10 minutes!': '自上次传送后每通过1行尖塔，进入岩浆以后的区域时岩浆巫师就额外获得60秒的加成。另外，自上次传送后每完成2个尖塔，岩浆巫师的时间上限就增加10分钟。',
    'Liquification III': '液化 III',
    'Liquification is disabled in Universe 2, but': '液化在宇宙2中无法生效，但',
    'Increase your Liquification bonus by': '增加液化效果 ',
    'as if you had completed': '等同于额外完成了',
    '2 extra Spires': '2个尖塔',
    '. In addition,': '。另外，',
    'Mesmer': '梅斯梅尔',
    'Triples the Challenge': '将所有 挑战',
    'bonus for all Challenge': '的加成变为三倍，但只对挑战',
    's that have normal reward scaling (Does not include Trappapalooza, Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手道达人、捕手、协同、脆皮、抹杀、灭绝)。',
    's that have normal reward scaling (Does not include Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手、协同、脆皮、抹杀、灭绝)。',
    'You currently have a C': '您目前 挑战',
    'Angelic': '天之赐福',
    'Your Trimps heal for 50% of their remaining health immediately before each attack. Due to the intense amount of evil present, Trimps cannot heal in never-before-cleared Spires.': '每次脆皮被攻击前恢复剩余生命值的50%。由于尖塔中邪恶存在过多，脆皮无法在从未通过的尖塔中恢复生命值。',
    'You have already purchased this tier!': '您已经购买了这一层的所有升级！',
    'You must buy this entire tier to be able to spend all of your Dark Essence.': '想要花费所有黑暗精华的话，您必须购买这一层的所有升级。',
    'You can afford to purchase this entire tier!': '您有足够的黑暗精华来购买这一层的所有升级！',
    'However, purchasing this entire tier right now may limit which other Masteries you can reach.': '但如果这么做的话，将影响您购买更高层的升级。',
    'You cannot afford to purchase this entire tier.': '您的黑暗精华不足，无法购买这一层的所有升级。',
    'Purchased': '已购买',
    'Requires Void Power I': '需要购买过虚空力量 I',
    'Requires Headstart I': '需要购买过先声夺人 I',
    'Requires Turkimp Tamer I': '需要购买过脆皮火鸡饲主 I',
    'Requires Headstart II': '需要购买过先声夺人 II',
    'Requires Hyperspeed I': '需要购买过风驰电掣 I',
    'Requires Blacksmithery I': '需要购买过锻铁术 I',
    'Requires King of Bones I': '需要购买过骨头之王 I',
    'Requires Explorer Aura I': '需要购买过探险家光环 I',
    'Requires Void Power II': '需要购买过虚空力量 II',
    'Requires Blacksmithery II': '需要购买过锻铁术 II',
    'Requires Heirnuum I': '需要购买过传家虚物 I',
    'Requires Scryhard I': '需要购买过努力占卜 I',
    'Requires Map Reducer I': '需要购买过地图减压 I',
    'Requires Natural Diplomacy I': '需要购买过自然斡旋 I',
    'Requires Liquification I': '需要购买过液化 I',
    'Requires Still Rowing I': '需要购买过尖塔排行 I',
    'Requires Void Specialization I': '需要购买过虚空特化 I',
    'Requires Void Specialization II': '需要购买过虚空特化 II',
    'Requires Strength in Health I': '需要购买过健康之力 I',
    'Requires Still Rowing II': '需要购买过尖塔排行 II',
    'Requires Magmamancermancy': '需要购买过岩浆巫师学',
    'Requires Still Rowing II and Magmamancermancy': '需要购买过尖塔排行 II和岩浆巫师学',
    'Requires Liquification II': '需要购买过液化 II',
    'You can afford to purchase this whole row! Hold Ctrl when clicking to buy this entire row and any uncompleted rows before it.': '您的黑暗精华足以购买这一层的所有升级！按下Ctrl键再点击这一层的任意升级，将购买这一层及之前的所有升级。',
    //专精相关结束
    //金色升级相关
    'Helium': '氦',
    'Radon': '氡',
    'Battle': '战斗',
    'Void': '虚空',
    'You can only choose one of these three Golden Upgrades. Choose wisely...': '您只能选择这三个金色升级中的一个。请仔细思考后再选择……',
    'You can only choose one of these two Golden Upgrades. Choose wisely...': '您只能选择这两个金色升级中的一个。请仔细思考后再选择……',
    'This upgrade would put you over 72% increased Void Map chance, which would destabilize the universe. You don\'t want to destabilize the universe, do you?': '该升级将使金色虚空加成达到72%以上，使宇宙开始崩坏。您不会想让宇宙崩坏的，对吧？',
    'Note: The absolute maximum value for Golden Void is +72%. Golden Void will no longer be able to be purchased if it would increase your bonus above 72%. Plan carefully!': '注意：金色虚空加成最高为72%。您无法购买使此加成高于72%的升级。请谋定后动！',
    'You can\'t earn helium while running a Challenge': '您无法获得氦，因为您正在进行挑战',
    'Free': '免费',
    //金色升级相关结束
    //尖塔相关
    'Runestones': '符石',
    'Rs': '符',
    'Runestones (Rs) are earned by killing Bad Guys in your Spire, and the amount of Runestones gained is directly proportional to the Max Health of the slain Bad Guy.': '符石(缩写为符)可以通过在您的尖塔里击杀敌人获得，获得的符石数量与敌人的生命值成正比。',
    'Rs/S': '符/秒',
    'Enemies': '敌人',
    'The amount of enemies currently allowed in your Spire.': '目前尖塔中的敌人情况。',
    'Your Spire can hold 1 Bad Guy, plus an additional 2.5 Bad Guys for each Floor in your Spire (rounded up).': '您的尖塔一开始最多可以容纳1名敌人，每多一层尖塔可以多容纳2.5名敌人(向上取整)。',
    'Current Enemies in Spire': '当前尖塔中的敌人数量',
    'Maximum Enemies Allowed in Spire': ' 尖塔可容纳的敌人上限',
    'Spirestones (Ss) can only be earned by recycling Spire Cores found from Spires in the World, and can be used to add Floors to your Spire or upgrade other Cores.': '尖塔石只能通过回收尖塔核心获得，可以用于增加您的尖塔层数，或者是升级尖塔核心。',
    'Current Spirestones': '当前的尖塔石数量',
    'Spirestones Required for Next Floor': ' 下一层尖塔需要的尖塔石数量',
    'Unseal Spire': '开启尖塔',
    'The Spire is Sealed, but you are still earning bonuses from having 11 of each Tower.': '尖塔已经关闭了，但您仍然可以获得拥有每种塔11个的加成。',
    'You can unseal the Spire if you want to, but will lose your 11th towers.': '如果有需要，您仍然可以开启尖塔，但也将失去第11个的加成。',
    'Threat': '威胁度',
    'Threat rises as you kill Bad Guys in your Spire, and falls as they escape. Threat is an average of kills/escapes over some time and may not always rise immediately after a kill or fall immediately after an escape, but will always stay near what your Spire can handle.': '当您在您的尖塔中击杀敌人时威胁度增加，当敌人逃脱时威胁度减少。威胁度由击杀数与逃脱数的比值决定，需要一定时间后才会稳定下来，在击杀一个敌人或一个敌人逃脱后并不会立刻变化，但最终会稳定在您的尖塔布局决定的数值上。',
    'More Threat means Healthier Bad Guys, which means more Runestones. Threat is also required for adding additional Floors to your Spire, increasing by 100 Threat required per Floor.': '威胁度越高，您的尖塔中敌人的生命值就越高，符石也就越多。增加尖塔层数时也需要一定的威胁度，每层的威胁度需求高100。',
    'The highest Threat your Spire has ever reached is': '您的尖塔最高达到的威胁度为',
    'Displayed As': '面板上显示数值的意义为',
    'Current Threat': '当前威胁度',
    'Threat Required for Next Floor': ' 下一层尖塔需要的威胁度',
    'Shrink Window': '缩小窗口',
    'Enlarge': '放大',
    'Sell': '出售',
    'Are you sure you want to sell all Traps and Towers? You will get back 100% of Runestones spent on them.': '您确定要出售所有陷阱和塔吗？您将获得全额的符石返还。',
    'Protip': '特别提示',
    'Pause your Spire before selling your defenses if you want to avoid leaking!': '如果想要避免敌人大量通过，请在出售所有之前暂停尖塔！',
    'Sell All?': '确定要出售所有吗？',
    'Sell All': '出售所有',
    'Unpause': '取消暂停',
    'Pause Spire': '暂停尖塔',
    'Shift Up': '上移',
    'Shift your Traps and Towers up one cell!': '将陷阱和塔上移一格！',
    'Click this to select Shift Up Mode, then click a Trap or Tower in your Spire. The Trap/Tower you select and all Traps/Towers after it will shift up one cell until the first empty space is hit.': '点击进入上移模式，然后点击您的尖塔中的一个陷阱或塔。您所选择的陷阱/塔以及它之后的所有陷阱/塔将上移一格，直到碰到第一个空位为止。',
    'If there is no empty space, your last Trap/Tower will be sold.': '如果没有空位，那么您的最后一个陷阱/塔将被出售。',
    'Shift Down': '下移',
    'Shift your Traps and Towers down one cell!': '将陷阱和塔下移一格！',
    'Click this to select Shift Down Mode, then click a Trap or Tower in your Spire. The Trap/Tower you select and all Traps/Towers before it will shift down one cell until the first empty space is hit.': '点击进入下移模式，然后点击您的尖塔中的一个陷阱或塔。您所选择的陷阱/塔以及它之后的所有陷阱/塔将下移一格，直到碰到第一个空位为止。',
    'If there is no empty space, your first Trap/Tower will be sold.': '如果没有空位，那么您的第一个陷阱/塔将被出售。',
    'Sell a Trap/Tower': '出售一个陷阱/塔',
    'Sell Trap/Tower': '出售陷阱/塔',
    'Sell a Trap or Tower! You\'ll get back 100% of what you spent on the last Trap or Tower of that type.': '出售一个陷阱或一个塔！您将获得全额返还。',
    'Max Level': '达到上限',
    'Seal Spire': '关闭尖塔',
    'You now have 10 of each Tower and have successfully reinforced every floor of this Spire. Your Trimps would be incredibly proud of you if they could process such strong emotions, for this was no small feat! Your Scientists can now construct one more of each Tower for free, but doing so will seal the Spire. If you choose to Seal the Spire, you\'ll earn World bonuses as if you had 11 of each Tower, but enemies will no longer spawn in the Spire.': '您的每种塔都达到了10个，每层也都强化过了。如果脆皮们能再聪明一点的话，它们早已经对您崇拜到五体投地了！科学家们现在可以免费再建造每种塔各一个，但这需要将尖塔进行关闭。关闭尖塔后，您仍然可以获得相应的加成，但尖塔中将不再出现敌人。',
    'NOTE: Sealing the Spire will remove the tab used to access this window, but a Setting will be added under Other should you want to unseal it for any reason.': '注意：关闭尖塔后，您将无法直接从主界面上直接进入此界面，但设置的其他选项卡下将新增一个选项，您可以在那里重新开启尖塔。',
    'Reach Z': '到达区域',
    'Hotkey 0 or \'': '快捷键：0或\'',
    'Trap Layout': '陷阱布局',
    'This saved layout contains': '此陷阱布局包括',
    'This layout is currently empty. You can save your current setup to this layout, and load it later!': '此布局目前空无一物。您可以将当前的布局保存到这里，以便以后读取！',
    'You wanted to remind yourself': '之前保存时您留下了以下信息',
    'You cannot afford to load this Trap layout.': '符石不足，无法读取此陷阱布局。',
    'You don\'t have enough Floors available in your Spire to load this layout.': '层数不足，无法读取此陷阱布局。',
    'Are you sure you want to save your current Spire layout to Preset 1? This will overwrite your currently saved layout.': '您确定要把当前的陷阱布局保存到布局1吗？之前保存过的布局将被覆盖。',
    'Are you sure you want to save your current Spire layout to Preset 2? This will overwrite your currently saved layout.': '您确定要把当前的陷阱布局保存到布局2吗？之前保存过的布局将被覆盖。',
    'If you want, you can also type a note to your future self below!': '如果有需要的话，您还可以在下面留下一些信息！',
    'Save to Layout 1?': '确定要保存到布局1吗？',
    'Save to Layout 2?': '确定要保存到布局2吗？',
    'Save Current Layout Here': '将当前陷阱布局进行保存',
    'Are you sure you want to load layout 1? This will remove all Traps and Towers currently placed in your Spire!': '您确定要读取布局1吗？您当前尖塔中的陷阱和塔将被全部覆盖！',
    'Are you sure you want to load layout 2? This will remove all Traps and Towers currently placed in your Spire!': '您确定要读取布局2吗？您当前尖塔中的陷阱和塔将被全部覆盖！',
    'Load Layout 1?': '确定要读取布局1吗？',
    'Load Layout 2?': '确定要读取布局2吗？',
    'Load This Layout': '读取此布局',
    'Spire Settings': '尖塔设置',
    'Floating Combat Text': '浮动的战况文本',
    'Make Static': '固定文本',
    'Trap Damage': '陷阱伤害',
    'Visual Settings': '视觉设置',
    'Trap Icons': '陷阱图标',
    'Enemy Icons': '敌人图标',
    'Chill Effect': '冰冻效果',
    'Shock Effect': '震荡效果',
    'Health as ': '显示生命值',
    'Are you sure you want to upgrade your Fire Trap? This upgrade is non-refundable!': '您确定要升级火焰陷阱吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Frost Trap? This upgrade is non-refundable!': '您确定要升级冰霜陷阱吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Poison Trap? This upgrade is non-refundable!': '您确定要升级剧毒陷阱吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Lightning Trap? This upgrade is non-refundable!': '您确定要升级闪电陷阱吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Strength Tower? This upgrade is non-refundable!': '您确定要升级力量塔吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Condenser Tower? This upgrade is non-refundable!': '您确定要升级冷凝塔吗？升级后将无法反悔！',
    'Are you sure you want to upgrade your Knowledge Tower? This upgrade is non-refundable!': '您确定要升级知识塔吗？升级后将无法反悔！',
    'Upgrade Fire Trap?': '确定升级火焰陷阱吗？',
    'Upgrade Frost Trap?': '确定升级冰霜陷阱吗？',
    'Upgrade Poison Trap?': '确定升级剧毒陷阱吗？',
    'Upgrade Lightning Trap?': '确定升级闪电陷阱吗？',
    'Upgrade Strength Tower?': '确定升级力量塔吗？',
    'Upgrade Condenser Tower?': '确定升级冷凝塔吗？',
    'Upgrade Knowledge Tower?': '确定升级知识塔吗？',
    'All Fire Traps gain': '所有火焰陷阱增加 ',
    '"All Fire Traps gain': '所有火焰陷阱增加 ',
    'damage.': '伤害。',
    'damage."': '伤害。',
    'Double': '翻倍',
    'the damage of all Fire Traps, and all Fire Traps will instantly kill any enemy that has 20% or less health.': '火焰陷阱的伤害，并使所有火焰陷阱秒杀20%以下生命值的敌人。',
    'the damage of all Fire Traps, and all Fire Traps will instantly kill any enemy that has 20% or less health."': '火焰陷阱的伤害，并使所有火焰陷阱秒杀20%以下生命值的敌人。',
    'the damage of all Fire Traps.': '火焰陷阱的伤害。',
    'the damage of all Fire Traps."': '火焰陷阱的伤害。',
    'Dectuple': '十倍化',
    'the damage of all Fire Traps once more, and all enemies drop 20% extra Runestones when they die on a Fire Trap.': '火焰陷阱的伤害，并使被火焰陷阱击杀的敌人额外掉落20%的符石。',
    'the damage of all Fire Traps once more, and all enemies drop 20% extra Runestones when they die on a Fire Trap."': '火焰陷阱的伤害，并使被火焰陷阱击杀的敌人额外掉落20%的符石。',
    'If an enemy with 20% health or less steps on a Fire Trap, it dies instantly.': '当低于20%生命值的敌人进入火焰陷阱时，它立刻死亡。',
    'All Fire Traps grant 20% extra Runestones when they get the killing blow on an enemy.': '当火焰陷阱击杀敌人时额外获得20%符石。',
    'Hotkey': '快捷键',
    'Multiply Frost Trap damage': '将冰霜陷阱的伤害乘以',
    '"Multiply Frost Trap damage': '将冰霜陷阱的伤害乘以',
    'by': '数字',
    'and increase the duration of Chilled by 1 cell.': '并使冰冻的效果多持续1格。',
    'and increase the duration of Chilled by 1 cell."': '并使冰冻的效果多持续1格。',
    '. Chilled enemies now take 25% more damage from Fire Traps.': '。被冰冻的敌人受到火焰陷阱的伤害额外增加25%。',
    '. Chilled enemies now take 25% more damage from Fire Traps."': '。被冰冻的敌人受到火焰陷阱的伤害额外增加25%。',
    '. If there is a Poison Trap directly before a Frost Trap, that Poison Trap becomes 4x as effective.': '。如果冰霜陷阱前一格有一个剧毒陷阱，则剧毒陷阱的效果变为4倍。',
    '. If there is a Poison Trap directly before a Frost Trap, that Poison Trap becomes 4x as effective."': '。如果冰霜陷阱前一格有一个剧毒陷阱，则剧毒陷阱的效果变为4倍。',
    'and each time an enemy can\'t move because it is slowed, that enemy becomes worth 2% more Runestones. This effect stacks additively.': '每当一名敌人因被减速而无法移动，它掉落的符石就增加2%。此效果相互叠加。',
    'and each time an enemy can\'t move because it is slowed, that enemy becomes worth 2% more Runestones. This effect stacks additively."': '每当一名敌人因被减速而无法移动，它掉落的符石就增加2%。此效果相互叠加。',
    'and each time an enemy can\'t move because it is slowed, that enemy becomes worth +2% more Runestones. This effect stacks additively.': '每当一名敌人因被减速而无法移动，它掉落的符石就再增加2%。此效果相互叠加。',
    'and each time an enemy can\'t move because it is slowed, that enemy becomes worth +2% more Runestones. This effect stacks additively."': '每当一名敌人因被减速而无法移动，它掉落的符石就再增加2%。此效果相互叠加。',
    'Enemies chilled by Frost Traps take 25% extra damage from Fire Traps.': '被冰霜陷阱冰冻的敌人受到火焰陷阱的伤害额外增加25%。',
    'Any Poison Traps placed directly before a Frost Trap become 4x as effective.': '放置在冰霜陷阱前一格的剧毒陷阱效果变为4倍。',
    'Each time an enemy can\'t move because it\'s slowed (from Chilled or Frozen), it becomes worth 2% more Runestones. This effect stacks additively.': '每当一名敌人因被减速(冰冻或冻结)而无法移动，它掉落的符石就增加2%。此效果相互叠加。',
    'Each time an enemy can\'t move because it\'s slowed (from Chilled or Frozen), it becomes worth 4% more Runestones. This effect stacks additively.': '每当一名敌人因被减速(冰冻或冻结)而无法移动，它掉落的符石就增加4%。此效果相互叠加。',
    'Each time an enemy can\'t move because it\'s slowed (from Chilled or Frozen), it becomes worth 6% more Runestones. This effect stacks additively.': '每当一名敌人因被减速(冰冻或冻结)而无法移动，它掉落的符石就增加6%。此效果相互叠加。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap.': '当敌人进入剧毒陷阱时增加的毒性数量。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap."': '当敌人进入剧毒陷阱时增加的毒性数量。',
    'If there is a Poison Trap either directly before or after another Poison Trap, both Traps gain 3x damage. If a Poison Trap has Poison Traps on both sides of itself, it gains 9x damage instead.': '如果一个剧毒陷阱前一格或后一格有另一个剧毒陷阱的话，两个陷阱都增加3倍伤害。如果一个剧毒陷阱前后一格都有另外的剧毒陷阱，那么它的伤害增加9倍。',
    '"If there is a Poison Trap either directly before or after another Poison Trap, both Traps gain 3x damage. If a Poison Trap has Poison Traps on both sides of itself, it gains 9x damage instead."': '如果一个剧毒陷阱前一格或后一格有另一个剧毒陷阱的话，两个陷阱都增加3倍伤害。如果一个剧毒陷阱前后一格都有另外的剧毒陷阱，那么它的伤害增加9倍。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap. In addition, if the enemy has 75% or less health remaining, the final amount of Toxicity added is multiplied by 5.': '当敌人进入剧毒陷阱时增加的毒性数量。另外，如果进入陷阱时敌人生命值不高于75%，那么最终增加的毒性数量再乘以5。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap. In addition, if the enemy has 75% or less health remaining, the final amount of Toxicity added is multiplied by 5."': '当敌人进入剧毒陷阱时增加的毒性数量。另外，如果进入陷阱时敌人生命值不高于75%，那么最终增加的毒性数量再乘以5。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap. In addition, if an enemy leaks, gain 10% of its total Toxicity as Runestones.': '当敌人进入剧毒陷阱时增加的毒性数量。另外，敌人被击杀时还可以额外获得总毒性数量10%的符石。',
    'the amount of Toxicity added when an enemy steps on any Poison Trap. In addition, if an enemy leaks, gain 10% of its total Toxicity as Runestones."': '当敌人进入剧毒陷阱时增加的毒性数量。另外，敌人被击杀时还可以额外获得总毒性数量10%的符石。',
    'Triple': '三倍化',
    'Quadruple': '四倍化',
    'If a Poison Trap is placed directly next to another Poison Trap, both Traps gain 3x damage. If a Poison Trap has other Poison Traps on both sides of itself, it gains 9x damage instead.': '如果一个剧毒陷阱的前一格或后一格有另一个剧毒陷阱的话，两个陷阱都增加3倍伤害。如果一个剧毒陷阱前后一格都有另外的剧毒陷阱，那么它的伤害增加9倍。',
    'If an enemy leaks, gain 10% of its total Toxicity as Runestones.': '敌人被击杀时可以额外获得总毒性数量10%的符石。',
    'Lightning Trap gains': '闪电陷阱增加 ',
    '"Lightning Trap gains': '闪电陷阱增加 ',
    'damage, and Lightning Trap now adds': '伤害，并且闪电陷阱从此增加 ',
    'stacks of Shocked.': '层震荡。',
    'stacks of Shocked."': '层震荡。',
    'damage, and Shocked now causes the target to take 4x damage and Toxicity from Traps. Towers and slows are not boosted by this extra damage.': '伤害，并且震荡效果可以使敌人受到4倍陷阱伤害，增加4倍陷阱毒性。塔和减速不受此效果加成。',
    'damage, and Shocked now causes the target to take 4x damage and Toxicity from Traps. Towers and slows are not boosted by this extra damage."': '伤害，并且震荡效果可以使敌人受到4倍陷阱伤害，增加4倍陷阱毒性。塔和减速不受此效果加成。',
    'Lightning Trap increases the damage and effect of Fire and Poison Traps in its column by 10%, stacking additively with other Lightning Traps in the column.': '闪电陷阱将同一列的火焰陷阱和剧毒陷阱的效果增加10%，同一列的闪电陷阱此效果叠加。',
    '"Lightning Trap increases the damage and effect of Fire and Poison Traps in its column by 10%, stacking additively with other Lightning Traps in the column."': '闪电陷阱将同一列的火焰陷阱和剧毒陷阱的效果增加10%，同一列的闪电陷阱此效果叠加。',
    'damage, and Shocked now causes the target to take 8x damage and Toxicity from Traps. Towers and slows are not boosted by this extra damage.': '伤害，并且震荡效果可以使敌人受到8倍陷阱伤害，增加8倍陷阱毒性。塔和减速不受此效果加成。',
    'damage, and Shocked now causes the target to take 8x damage and Toxicity from Traps. Towers and slows are not boosted by this extra damage."': '伤害，并且震荡效果可以使敌人受到8倍陷阱伤害，增加8倍陷阱毒性。塔和减速不受此效果加成。',
    'Each Strength Tower grants an additional 15% attack to your Trimps.': '每个力量塔增加的脆皮攻击力多15%。',
    '"Each Strength Tower grants an additional 15% attack to your Trimps."': '每个力量塔增加的脆皮攻击力多15%。',
    'Your Strength Towers are currently granting a total of': '您的力量塔目前有 ',
    'attack to your Trimps.': '的脆皮攻击力加成。',
    'Each Condenser Tower grants an additional 5% Helium earned from all sources.': '每个冷凝塔增加的氦获取量多5%。',
    '"Each Condenser Tower grants an additional 5% Helium earned from all sources."': '每个冷凝塔增加的氦获取量多5%。',
    'Each Condenser Tower grants an additional 5% Radon earned from all sources.': '每个冷凝塔增加的氡获取量多5%。',
    '"Each Condenser Tower grants an additional 5% Radon earned from all sources."': '每个冷凝塔增加的氡获取量多5%。',
    'Your Condenser Towers are currently granting a total of': '您的冷凝塔目前有 ',
    'additional Helium from all sources.': '的氦获取量加成。',
    'additional Radon from all sources.': '的氡获取量加成。',
    'Each Knowledge Tower grants an additional 7.5% Fluffy Exp earned from all sources.': '每个知识塔增加的绒绒经验值多7.5%。',
    'Each Knowledge Tower grants an additional 7.5% Fluffy Exp  earned from all sources.': '每个知识塔增加的绒绒经验值多7.5%。',
    '"Each Knowledge Tower grants an additional 7.5% Fluffy Exp earned from all sources."': '每个知识塔增加的绒绒经验值多7.5%。',
    '"Each Knowledge Tower grants an additional 7.5% Fluffy Exp  earned from all sources."': '每个知识塔增加的绒绒经验值多7.5%。',
    'Each Knowledge Tower grants an additional 7.5% Scruffy Exp earned from all sources.': '每个知识塔增加的污污经验值多7.5%。',
    'Each Knowledge Tower grants an additional 7.5% Scruffy Exp  earned from all sources.': '每个知识塔增加的污污经验值多7.5%。',
    '"Each Knowledge Tower grants an additional 7.5% Scruffy Exp earned from all sources."': '每个知识塔增加的污污经验值多7.5%。',
    '"Each Knowledge Tower grants an additional 7.5% Scruffy Exp  earned from all sources."': '每个知识塔增加的污污经验值多7.5%。',
    'Your Knowledge Towers are currently granting a total of': '您的知识塔目前有 ',
    'additional Fluffy Exp.': '的绒绒经验值加成。',
    'additional Scruffy Exp.': '的污污经验值加成。',
    'Welcome to your Spire! You\'ve killed Druopitee and stolen some Spirestones: ancient construction materials that duplicate themselves across dimensions, traditionally used to create powerful Spires. Druopitee thought that he was the only one who could build tall buildings, but you\'re on a mission to prove him wrong!': '欢迎来到您的尖塔！您已经干掉了德罗披提，并且拿到了一些尖塔石，这些古老的建筑材料可以穿越维度复制自身，通常用于建造强大的尖塔。德罗披提觉得只有他才能建造出这么高的东西，是时候证明他的错误了！',
    'You were able to finish constructing the first Floor of your very own Spire with the Spirestones you found, and you still have a few left over to try to make it even taller. You had your Trimps build a wall around the entire town, making your new Spire the only entrance and exit point. You feel super safe for a few seconds, and your Trimps are super stoked on their new fortress.': '您成功建成了您的第一层尖塔，而尖塔石还有一些剩余，或许还可以让它变得更高。您让您的脆皮们在整个城镇外修了一圈围墙，让尖塔成为了唯一的出入口。有一阵子，您觉得已经高枕无忧了，而与此同时，脆皮们对着它们的新堡垒指指点点兴奋不已。',
    'After those few seconds are up, you see that the Spire is attracting a decent amount of unwanted attention from jealous enemies, who seem to take your Spire as a challenge.': '过了一会儿，您发现您的尖塔吸引了一些不速之客，这些敌人似乎把您的尖塔当成了什么挑战目标。',
    'Luckily, your Scientists have managed to come up with a few Trap designs that can hopefully stop the flow of enemies into your town.': '幸好的是，科学家们设计出了一些陷阱来阻挡敌人。',
    'Try placing a Frost Trap in the leftmost cell of your Spire, and a Fire Trap directly to the right of it.': '请试着在最左边放置一个冰霜陷阱，然后在它的右边放置一个火焰陷阱。',
    'Perfect, everything seems to be working just as your Scientists explained. The Frost Trap slows the enemies down, and the Fire Trap finishes them off.': '太完美了，一切都像科学家们预料的那样。用冰霜陷阱使敌人减速，然后再用火焰陷阱结果了它们。',
    'Unfortunately, it seems like each enemy you kill in here makes your Spire a more important target, causing stronger and stronger enemies to come through.': '不过坏消息是，您每在您的尖塔中干掉一个敌人，您的尖塔就会成为更重要的目标，吸引更强大的敌人进入。',
    'Fortunately though, your Magical Spire Traps convert Bad Guys into a new type of resource whenever they kill one, which your Scientists call \'Runestones\'. Even more fortunately, larger enemies with more Max Health convert into larger amounts of Runestones! As your Spire\'s Threat increases, so will your Runestones per second, and so will your Spire\'s defenses (if you\'re doing your job).': '好消息是，您的陷阱击杀敌人时可以将它们转换为一种新的资源，科学家们把它命名为 符石 。更好的消息是，敌人越强，生命值越高，击杀后获得的符石也就越多！随着您的尖塔威胁度越来越高，您的每秒符石也会越来越高，依靠这些符石，您也能构筑出越来越完备的防御(如果您没有划水的话)。',
    'You don\'t have to stay here while Runestones build up, you can go back to leading your Trimps while your Traps do some work. The enchanted Spirestones copy your progress to all possible dimensions, so you won\'t even lose your Traps if you Portal!': '您没必要一直在这个界面盯着符石变多，您可以继续去指派脆皮们干活，陷阱能自己搞定敌人。前面提到过，这些尖塔石可以穿越维度复制自身，这意味着哪怕传送后，尖塔内的一切也将保持原样！',
    'Keep an eye on your Runestones, and add more Traps whenever you can. Try to fill this entire Floor with Traps!': '注意符石数量，尽可能多的增加陷阱。请试着用陷阱填满这一层尖塔！',
    'You\'re a natural Spiarchitect! Your Scientists have finally finished adding the second Floor of your Spire, and the added height seems to be attracting even more enemies. Cool, more Runestones for you! You\'re starting to really like the idea of enemies constantly climbing to their demise in the teeth of your Traps.': '您真是个天生的尖塔建筑师！科学家们终于建成了第二层尖塔，尖塔变高以后，似乎吸引了更多的敌人进入。很好，这样就能获得更多符石了！您开始喜欢上敌人冲进尖塔送死然后被陷阱干掉的感觉了。',
    'While you\'re appreciating your deadly handiwork, a small group of Scientists runs up to you and shares some new research. They say that the Runestones can also be used to create mini-towers that broadcast their energy to all Trimps in the World. Wasting no time, they hand you the schematics for the Strength Tower, which increases the effect of all Fire Traps on its Floor, and grants all of your Trimps an attack bonus.': '您还沉浸在这种感觉中时，一小队科学家向您跑来，然后跟您分享了最新的科研成果。它们表示，符石还可以用来建造一些小型的塔，用于将能量传播至世界上的所有脆皮。接着它们马上拿出了力量塔的原理图，它可以增加同一行火焰陷阱的效果，还可以使脆皮们获得攻击力加成。',
    'Continue placing more Traps and Towers to fill out your Spire, and raise your Threat level to 300.': '请继续放置更多陷阱和塔，填满您的尖塔，并使威胁度提升到300。',
    'Beautiful. It seems like you\'re getting the hang of this!': '很好，看起来您找到诀窍了！',
    'You\'ve finished constructing the third Floor of your Spire, but it seems as if you\'ve used up your entire intial supply of Spirestones. You\'ll need to clear a Spire and crush its Core to earn more! Note that you\'ll find considerably better Cores worth more Spirestones from more difficult Spires.': '您已经建造了第三层尖塔，但看起来您已经用完了尖塔石。您需要通过更多的尖塔，获得核心，然后将它打碎后获得尖塔石。注意，通过更高难度的尖塔后，您可以获得更好的核心，从而获得数量多很多的尖塔石。',
    'Collect 20 Spirestones and raise your Spire\'s Threat to 400 to build your fourth Floor.': '请获取20尖塔石，并将威胁度提升到400，这样就可以建造第四层尖塔了。',
    'It\'s getting huge! However, the Traps are getting more expensive as you place more and more of them. At this rate you\'ll never be able to afford enough Strength Towers to make a huge impact on your Trimps.': '您的尖塔越来越大了！但是，您的陷阱的花费也越来越昂贵。这么下去，您就没法建造更多力量塔来加强脆皮们了。',
    'You consult with your Scientists, who tell you that they can create upgrades for your Traps, but that they need to study corpses of high level enemies in order to exploit their weaknesses.': '于是，您找科学家们来出谋划策。它们表示可以升级陷阱，但需要研究更高级敌人的尸体才能发现它们的弱点。',
    'Raise your Highest Zone Reached to Z230, and upgrade your Frost Trap.': '请将最高通过区域提升到区域230，然后升级冰霜陷阱。',
    'Wow, look at that thing slow!': '哇哦，看那些敌人慢成什么样了！',
    'You seem to have a pretty decent understanding of how to manage your Spire, and I believe you can handle it on your own for a while. Continue to raise your HZE to unlock more upgrades, collect Spirestones to add more Floors and enemies, and tweak your Trap layout every once in a while to make sure you\'re getting as many Runestones as you can, you\'ll definitely need them later.': '您看起来已经很了解如何使尖塔正常运作了，因此我相信接下来您可以自己决定如何处理。您可以继续提升最高通过区域以解锁升级，获得尖塔石来增加层数，调整陷阱布局来尽可能多的获得符石，往后它们绝对会派上用场的。',
    'Your Scientists let you know that they can possibly forge a new Trap and Tower, but they need to study a Core from a higher level Spire first.': '科学家们提醒您，它们可以建造新的陷阱和塔，但是它们需要先研究一下更高级尖塔的核心。',
    'Complete Spire II to unlock Poison Trap and Condenser Tower! Once you have your new Traps, raise your Spire\'s Threat to 600 and build your sixth Floor.': '请通过尖塔 II以解锁剧毒陷阱和冷凝塔！当获得新的陷阱以后，请将威胁度提升到600并建造第六层尖塔。',
    'Remember that you have to satisfy both the Threat and Spirestone requirements to add a new Floor!': '请注意，您必须同时满足威胁度和尖塔石的要求才可以增加尖塔层数！',
    'You\'ve got a new Trap and Tower, your Spire is still growing, and your power is growing with it! Your Trimps are slightly annoyed that they have to clean up the occasional Bad Guy that makes it through the Spire and into the town, but they can handle it. They all agree that life in general is just more fun when there\'s a giant Spire grinding Bad Guys at the entrance to their town.': '您获得了新的陷阱和塔，您的尖塔正在成长，您的力量也随之变得更加强大！对于要时不时清理零星通过尖塔入侵城镇的敌人，脆皮们有一点烦恼，但它们表示能够自己搞定。它们一致同意，如果有一座巨大的尖塔在城镇入口不停击杀敌人的话，生活会更多姿多彩一些。',
    'While you\'re feeling comfortable maintaining your Spire\'s defenses with the tools you have, you still feel like there\'s something missing. Your Scientists say that they could perhaps create one more Trap and Tower, but again they\'ll need to study a Core from an even higher Spire.': '虽然现有的工具已经足够您舒舒服服地构筑尖塔防御了，但您总觉得还是缺失了什么。科学家们表示，它们还可以建造另一种新陷阱和塔，但同样的，它们需要研究更高级尖塔的核心。',
    'Clear Spire III to unlock the Lightning Trap and Knowledge Tower, then raise your Spire\'s Threat to 1100 and build your eleventh Floor.': '请通过尖塔 III以解锁闪电陷阱和知识塔，然后将威胁度提升到1100并建造第十一层尖塔。',
    'And that\'s about all there is to teach you! The rest of the management of your Spire is left in your more-than-capable hands.': '我已经将所有知识倾囊相授了！剩下的一切就交给您了。',
    'Raise your HZE, clear Spires, buy upgrades, build Floors, and come up with the perfect layout for your Spire.': '提升最高通过区域，通过尖塔，升级陷阱和塔，增加层数，最终您会制造出完美的尖塔布局的。',
    'I\'ll hang out and make sure everything\'s OK until you reach Threat level 1300 and build your thirteenth Floor, and then you\'ll be on your own.': '这是最后的考验，请将威胁度提升到1300并建造第十三层尖塔，之后的修行，就在您个人了。',
    //尖塔相关结束
    //维度发生器相关
    'Dimensional Generator': '维度发生器',
    'Configure Generator State': '设置发生器规则',
    'Must use either 0 or a Zone number larger than': '必须设置为 0 或者超过',
    'Starting Setting': '初始运行模式',
    'At Zone': '在区域',
    'Don\'t Change At Zone': '不改变模式',
    'Set to Gain Fuel': '设为得燃料',
    'Set to Hybrid': '设为混合型',
    'Upgrade (': '升级 (',
    'Upgrade Generator': '升级维度发生器',
    'Multi Upgrades': '可重复升级',
    'Efficiency': '效率',
    'Capacity': '容量',
    'Supply': '供给',
    'taking advantage of': '意味着您可以完全获取',
    '2 extra Zones': '额外2个区域的燃料',
    'Overclocker': '超频',
    'Requires Hybridization and Storage.': '需要下方的混合和存储升级。',
    'The first level of this upgrade will cause the Dimensional Generator to overclock instead of wasting fuel whenever you find more fuel than you can store. Overclocking will cause an instant Generator tick at a base of 50% effectiveness.': '首次升级此项后，当您获取了超过上限的燃料时，维度发生器不会将多余的燃料浪费掉，而是会进入超频状态。超频状态将立刻让维度发生器产生一次住房，但效果为正常的50%。',
    'Every upgrade purchased after the first will reduce the Overclocking penalty by 1%, compounding.': '首次升级之后的每次升级都将减少1%的效果惩罚，数值叠乘。',
    'One and Done Upgrades': '一次性升级',
    'Hybridization': '混合',
    'Unlock the ability to switch your Dimensional Generator to Hybrid mode. Hybrid mode will automatically switch to Gain Fuel when fuel is below max, and Gain Mi when fuel is full.': '解锁维度发生器的混合模式。混合模式下，维度发生器在燃料未满之前得燃料，而燃料满了以后得岩浆岩。',
    'Storage': '存储',
    'Unlock extra fuel storage. This storage will always be equal to your normal fuel cap and will only store extra fuel above your normal cap. Fuel in this extra storage does not increase generator Trimps/tick, but acts as nice padding to help prevent wasted fuel. Hybrid mode will attempt to fill your extra storage halfway.': '解锁额外的燃料存储空间。此空间存储上限总是等于正常燃料上限，只会存储超过正常上限部分的燃料。额外空间中的燃料不会增加产生的住房，只是可以防止浪费燃料。混合模式会先将额外存储空间填充一半，然后再进行切换。',
    'Shielding': '防护',
    'Reduce the amount of Magmite that decays after each portal by 10% (additive': '将每次通过传送门后衰变的岩浆岩数量减少10%(叠减',
    'Slowburn': '慢烧',
    'Reduce the rate of fuel consumption per tick by 0.1, from 0.5 to': '将每次产生住房消耗的燃料减少0.1，从0.5减少为',
    'Supervision': '管理',
    'Gain 3 Automation/Micromanagement tools for your Generator!': '获得3个维度发生器的自动管理工具！',
    'Gain the ability to pause the Dimensional Generator by clicking the clock.': '获得暂停维度发生器的能力，方法是在维度发生器的倒计时上点击。',
    'Get a sweet button to configure specific Zones to switch Generator states at. You\'ll also gain the ability to Ctrl + Click the Generator Start setting in the Settings menu to open up the same interface.': '增加一个很好用的按钮，可以用来设置在特定区域切换模式。在设置菜单中按下Ctrl键再点击维度发生器初始运行模式按钮，也可以进入同样的界面。',
    'Add a Slider to your Generator window, allowing you to lower your maximum fuel capacity and gain greater control over Overclocker. Lowering your capacity below your stored amount of fuel will not waste any fuel, but the first time Overclocker is triggered, all extra fuel will be consumed.': '在维度发生器的方框下方增加一个滑块，可以用于调节燃料存储上限，更好的控制超频。将存储上限降到低于当前燃料数量时，不会有燃料被浪费掉，但当之后触发超频触发时，所有额外的燃料都会被消耗掉。',
    'Simulacrum': '复制',
    'All new generated dimensions now come with copies of your Trimps inside them. Gone are the days of ramping up breeding to fill your dimensions with Trimps!': '维度发生器产生住房的同时，也会产生相同数量的脆皮。费尽心思让脆皮繁殖填满上限的日子过去了！',
    'Click an upgrade to learn more about it!': '点击一个升级来获取它的详细信息！',
    'These upgrades persist through portal and cannot be refunded. Choose wisely! 30% of your unspent Magmite will decay on portal.': '这些升级在传送后仍然存在，并且无法撤销。请仔细思考后再选择！传送时，30%未使用的岩浆岩将发生衰变，无法再使用。',
    'These upgrades persist through portal and cannot be refunded. Choose wisely! 20% of your unspent Magmite will decay on portal.': '这些升级在传送后仍然存在，并且无法撤销。请仔细思考后再选择！传送时，20%未使用的岩浆岩将发生衰变，无法再使用。',
    'Fuel': '燃料',
    'Producing': '产生',
    'Housing/Tick': '住房/次',
    'Done': '完成',
    //维度发生器相关结束
    //自然赋能相关
    'Empowerments of Nature': '自然赋能',
    'The Poison Empowerment is currently active!': '目前激活的是毒赋能！',
    'The Wind Empowerment is currently active!': '目前激活的是风赋能！',
    'The Ice Empowerment is currently active!': '目前激活的是冰赋能！',
    'Lv': '等级',
    'Empowerment of Poison': '毒赋能',
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing it to take': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，每次攻击时，敌人受到的伤害增加 ',
    'of the damage you dealt every attack until it dies. Each attack by your Trimps will further add to the poison effect.': '，直到敌人死亡。脆皮每次攻击可以叠加此中毒效果。',
    'Upgrade Empowerment of Poison': '升级毒赋能',
    'Increases the percentage of damage that sticks to enemies as poison during the Empowerment of Poison by': '毒赋能生效期间增加敌人 ',
    '. You currently poison for': ' 受到的伤害。您目前的毒赋能效果为 ',
    'and next level will cause you to poison for': '下一级毒赋能效果为 ',
    'Upgrade Poison Stack Transfer Rate': '升级毒层数传递率',
    'You are currently at the maximum level for Stack Transfer Rate, allowing': '此项层数传递率已达到最大，可将 ',
    'of your stacks to transfer.': '的层数进行传递。',
    'Currently, a minimum of': '目前，至少有 ',
    'of your stacks transfer after you kill a Bad Guy during the Empowerment of Poison. Each level of this upgrade will increase the transfer rate by': '的层数可以在毒赋能生效时传递给下个敌人。每级升级可以增加传递率 ',
    'bringing you to': '将总传递率变为 ',
    'Locked': '未解锁',
    'Upgrade Empowerment of Poison to Level 50 to unlock.': '将毒赋能升级到50级后解锁。',
    'Enlightened Poison': '毒之启迪',
    'Activate Enlightened Poison': '启用毒之启迪',
    'Sacrifice your Tokens and return them back to Nature, enlightening your Trimps on how to be one with Poison!': '献祭符记，让它们回归自然，以此启迪脆皮们如何与毒融为一体！',
    'While Enlightened, your Trimps deal 3x damage, and Poison Nature stacks deal 2x damage.': '当获得启迪时，您的脆皮伤害变为3倍，毒赋能伤害加倍。',
    'This bonus lasts until your next Portal, and only one Enlightenment can be activated per Portal. Enlightenments can be purchased at any point in your run, but the effects will not activate until Nature enters your World.': '此加成直到传送前一直生效，每次传送后只能启用一种启迪。启迪可以在任何时候启用，但直到自然赋能出现的区域后才开始生效。',
    'Each time this Enlightenment is activated, its cost increases by 150 Tokens of Poison. Each time you start a Daily Challenge, the costs of all 3 Enlightenments will decrease by 33% or 50 Tokens, whichever number is greater, but never more than 100.': '每次启用此启迪时，下次启用此启迪的花费都将增加150毒符记。每次开始日常挑战时，所有三种启迪的花费都将减少33%或50符记，以二者之间较高数值为准。减少的数字不能超过100。',
    'Convert Poison to Wind': '将毒符记转换为风符记',
    'Convert Poison to Ice': '将毒符记转换为冰符记',
    'Hold Ctrl to convert as many tokens as you can afford!': '按下Ctrl键再点击，则将转换所有符记！',
    'Empowerment of Wind': '风赋能',
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing winds to swell and knock extra resources into your reach. Each stack increases Helium gained from the World by': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，风变得更加猛烈，使您获得更多的资源。每层提高 ',
    'and increases all other basic resources gained from all sources by': '世界上获得的氦数量，并将所有基本资源获取量提高 ',
    'until that enemy dies (maximum of 200 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高200层)。碎片不受加成，地图中的氦也一样不受加成。',
    'until that enemy dies (maximum of 300 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高300层)。碎片不受加成，地图中的氦也一样不受加成。',
    'Upgrade Empowerment of Wind': '升级风赋能',
    'Increases the amount of extra Helium you find in the World by': '当风赋能激活时，每层提高 ',
    'and non-Helium basic resources from all sources by': '世界上获得的氦数量，并将其他非氦基本资源获取量提高 ',
    'per stack when the Empowerment of Wind is active. Your current bonus is': '。您当前的加成为 ',
    'Helium, and next level will bring your bonus to': '氦，下一级加成变为 ',
    'extra helium. Non-Helium resource gain is always double that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的两倍，地图中的氦不受加成。',
    'extra helium. Non-Helium resource gain is always 10x that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的十倍，地图中的氦不受加成。',
    'Upgrade Wind Stack Transfer Rate': '升级风层数传递率',
    'of your stacks transfer after you kill a Bad Guy during the Empowerment of Wind. Each level of this upgrade will increase the transfer rate by': '的层数可以在风赋能生效时传递给下个敌人。每级升级可以增加传递率 ',
    'Upgrade Empowerment of Wind to Level 50 to unlock.': '将风赋能升级到50级后解锁。',
    'Wind active': '已启用风之启迪',
    'Enlightened Wind': '风之启迪',
    'Activate Enlightened Wind': '启用风之启迪',
    'Sacrifice your Tokens and return them back to Nature, enlightening your Trimps on how to be one with Wind!': '献祭符记，让它们回归自然，以此启迪脆皮们如何与风融为一体！',
    'While Enlightened, you gain a 10x increase in all non-Helium loot, Wind stacks accumulate twice as fast, Wind can stack to 300, Wind gains an additional 5% stack transfer rate, and your Trimps gain access to the Wind Formation. This new Formation prevents any enemies in Wind Zones from falling below 1HP before they have 300 stacks of Wind. Wind Formation also grants all bonuses of Scrying Formation and allows collection of Dark Essence with no Trimp stat penalty.': '当获得启迪时，所有非氦资源获取量变为10倍，风层数叠加速度加倍，并可以叠加到300层，层数传递率增加5%，脆皮可以使用风阵型。此阵型可以使风区域中的敌人在达到300层风之前生命值不会小于1。风阵型可以获得占卜者阵型的全部加成，并允许在无属性惩罚的前提下收集黑暗精华。',
    'You have been Enlightened by Wind! While in this Formation in a Wind Zone, enemies will never fall below 1HP before they have 300 stacks of Wind.': '您已获得风之启迪！当在风区域使用此阵型时，敌人在达到300层风之前生命值不会小于1。',
    'This Formation also allows collection of Dark Essence, and grants all bonuses of the Scryer Formation.': '此阵型可以收集黑暗精华，并拥有占卜者阵型的全部加成。',
    'Each time this Enlightenment is activated, its cost increases by 150 Tokens of Wind. Each time you start a Daily Challenge, the costs of all 3 Enlightenments will decrease by 33% or 50 Tokens, whichever number is greater, but never more than 100.': '每次启用此启迪时，下次启用此启迪的花费都将增加150风符记。每次开始日常挑战时，所有三种启迪的花费都将减少33%或50符记，以二者之间较高数值为准。减少的数字不能超过100。',
    'Convert Wind to Poison': '将风符记转换为毒符记',
    'Convert Wind to Ice': '将风符记转换为冰符记',
    'Empowerment of Ice': '冰赋能',
    'When this Empowerment is active, enemies will be Chilled each time your Trimps attack. The Chill debuff stacks, reduces the damage that enemy deals by': '当此赋能激活时，每次脆皮的攻击都可以冰冻敌人。每层冰冻减少 ',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，直到敌人死亡。',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，直到敌人死亡。',
    'Upgrade Empowerment of Ice': '升级冰赋能',
    'of your stacks transfer after you kill a Bad Guy during the Empowerment of Ice. Each level of this upgrade will increase the transfer rate by': '的层数可以在冰赋能生效时传递给下个敌人。每级升级可以增加传递率 ',
    'Reduces the enemy\'s damage dealt from each stack of Chilled when the Empowerment of Ice is active by': '当冰赋能激活时，每层冰冻减少 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，您当前的加成为 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，您当前的加成为 ',
    'and next level will bring your bonus to': '下一级加成变为 ',
    'You will earn +1 Overkill during Ice Zones once you reach Level 50, and a second Overkill cell at Level 100!': '当您到达50级后在冰区域超杀格子加1，到达100级后超杀格子再加1！',
    'You are earning +1 Overkill during Ice Zones! Earn another at Level 100!': '您已经在冰区域获得了超杀格子加1！到达100级后超杀格子可以再加1！',
    'Your Ice level is over 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级超过了100，冰区域中您获得了超杀格子加2！',
    'Your Ice level is 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级达到了100，冰区域中您获得了超杀格子加2！',
    'Upgrade Ice Stack Transfer Rate': '升级冰层数传递率',
    'Upgrade Empowerment of Ice to Level 50 to unlock.': '将冰赋能升级到50级后解锁。',
    'Ice active': '已启用冰之启迪',
    'Enlightened Ice': '冰之启迪',
    'Activate Enlightened Ice': '启用冰之启迪',
    'Sacrifice your Tokens and return them back to Nature, enlightening your Trimps on how to be one with Ice!': '献祭符记，让它们回归自然，以此启迪脆皮们如何与冰融为一体！',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  and +0.25% increased Fluffy Exp per Ice level': '当获得启迪时，直到下次传送前超杀格子上限加2，且每级冰赋能增加0.25%绒绒经验 ',
    'currently': '目前',
    'for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '当获得启迪时，直到下次传送前超杀格子上限加2。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    'Each time this Enlightenment is activated, its cost increases by 150 Tokens of Ice. Each time you start a Daily Challenge, the costs of all 3 Enlightenments will decrease by 33% or 50 Tokens, whichever number is greater, but never more than 100.': '每次启用此启迪时，下次启用此启迪的花费都将增加150冰符记。每次开始日常挑战时，所有三种启迪的花费都将减少33%或50符记，以二者之间较高数值为准。减少的数字不能超过100。',
    'Convert Ice to Poison': '将冰符记转换为毒符记',
    'Convert Ice to Wind': '将冰符记转换为风符记',
    //自然赋能相关结束

    //炼金术相关
    'Herbs': '药草',
    'Potatoes': '土豆',
    'Mushrooms': '蘑菇',
    'Seaweed': '海藻',
    'Firebloom': '火焰花',
    'Berries': '浆果',
    'Crafts': '药剂',
    'Herby Brew': '药草特饮',
    'Gaseous Brew': '气态特饮',
    'Potion of Finding': '魔药·探宝',
    'Potion of the ': '魔药·',
    'Potion of Strength': '魔药·力量',
    'Elixir of Crafting': '灵药·锻造',
    'Elixir of Finding': '灵药·探宝',
    'Elixir of Accuracy': '灵药·精准',
    'Increases all Herbs found by 100% (compounding).': '使所有药草的获取量翻倍(效果叠乘)。',
    'Increases Enemy Attack/Health by 75% (compounding': '但也使敌人的攻击力和生命值增加75%(效果叠乘',
    'Increases all Radon gained by 10% (compounding).': '使氡的获取量增加10%(效果叠乘)。',
    'Increases Enemy Attack/Health by 30% (compounding': '但也使敌人的攻击力和生命值增加30%(效果叠乘',
    'Increases all non-radon resources earned by 25% additively. Reduces chance to not find a Runetrinket by 1% (compounding).': '使非氡资源获取量增加25%(效果叠加)。且可以使找不到小符饰的概率减少1%(效果叠乘)。',
    'Increases the cost of all other Potions by 50% (compounding': '但也使其他魔药的成本增加50%(效果叠乘',
    'Nullifies 5% (compounding) of increased enemy stats from Potions while in Void Maps.': '中和5%(效果叠乘)虚空地图中因为药剂而提升的敌人属性。',
    'Increases Trimp Attack/Health by 15% additively.': '使脆皮的攻击力和生命值增加15%(效果叠加)。',
    'Increases all housing by 5% (compounding).': '使所有住房容纳的脆皮数量增加5%(效果叠乘)。',
    'Increases all non-radon resources by 5% (compounding).': '使非氡资源获取量增加5%(效果叠乘)。',
    'Increases Crit Damage by 25%.': '使暴击伤害增加25%。',
    'Craft': '精制',
    'AutoCraft up to': '自动精制至此上限',
    'Drop Rates': '掉率',
    'Map Level': '地图等级',
    'Drop Amt': '掉落数量',
    'Save and Close': '保存并退出',
    //炼金术相关结束

    //尖塔突击相关
    'Spire Assault Unlocked!': '解锁了尖塔突击！',
    '"As you approach the infinitely tall Spire, a Trimp rushes out and embraces Scruffy. Scruffy introduces you to Huffy, who seems to have also realized that Druopitee is kind of a prick. Huffy lets you know that he managed to destroy the Corruption device at the top, but that it was now crawling with horrible shadowy enemies. Huffy lets you know that he is shielded from the Portal inside the Spire, but that even when you Portal and forget him, he can use your subconscious to help direct him in cleansing the Spire and finding artifacts to make your Trimps stronger."': '您走到尖塔跟前，一只脆皮冲了出来，紧紧地抱住了污污。污污向怒怒介绍了您，看起来怒怒也明白过来，德罗披提就是个无耻的混蛋。怒怒表示它已经成功摧毁了塔顶的腐化装置，但尖塔里现在都是一群可怕的神秘敌人。怒怒表示它在尖塔内可以隔绝传送的影响，甚至您在传送后忘记它的情况下，它也可以利用您的潜意识来帮忙引导它清理尖塔，并且发掘其中的古物来强化您的脆皮。',
    'You\'ve finally made it to Huffy and the first Spire in this Universe. Huffy needs your help removing all of the Enemies! Check out the new tab titled \'SA\' to get started.': '您终于到达了怒怒所在地，也就是这个宇宙中的第一个尖塔所在地。怒怒需要您的帮助来清扫尖塔中的敌人！一个名字叫做尖塔突击的新面板已经出现了。',
    'A tip for once you\'re in': '进入前的提示',
    'Huffy has figured out how to put on Pants and a Sword but is struggling beyond that. Click two other items to equip them ASAP!': '怒怒弄明白了怎么穿上裤子，和怎么拿上剑，但它也就只能做到这样了。先点击其他两件装备将它们装备上吧！',
    'Leave Items on Preset Load': '读取预设时不隐藏未使用的物品',
    'Hide Unused Items on Preset Load': '读取预设时隐藏未使用的物品',
    'Practice Off - 10x Speed, no Dust or Progress': '练习模式已关闭——10倍速度，但无魔尘掉落，也无法增加等级',
    'Practice On - 10x Speed, no Dust or Progress': '练习模式已开启——10倍速度，但无魔尘掉落，也无法增加等级',
    'Chemistry Set': '化学装置',
    'Comfy Boots': '舒适之靴',
    'Lifegiving Gem': '生命宝石',
    'Mood Bracelet': '情绪手镯',
    'Hungering Mold': '饥饿霉菌',
    'Recycler': '回收机',
    'Shining Armor': '闪耀护甲',
    'Shock and Awl': '震慑套装',
    'Tame Snimp': '驯服的脆皮蛇',
    'Lich Wraps': '巫妖披肩',
    'Wired Wristguards': '通电护腕',
    'Sword and Board': '剑刃守护',
    'Bilious Boots': '邪恶之靴',
    'Bloodstained Gloves': '染血手套',
    'Unlucky Coin': '不幸之币',
    'Eelimp in a Bottle': '瓶装脆皮鳗',
    'Cleaver': '切割者',
    'The Globulator': '世界地图',
    'Metal Suit': '金属外衣',
    'Nozzled Goggles': '护目镜',
    'Sundering Scythe': '撕裂之镰',
    'Plague Bringer': '瘟疫使者',
    'Very Large Slime': '巨型史莱姆',
    'Grounded Crown': '理性之冠',
    'Fearsome Piercer': '恐惧之锥',
    'Protector': '庇佑',
    'Bad Medkit': '恶之医疗箱',
    'Pouch': '之袋',
    'Raincoat': '雨衣',
    'Labcoat': '实验服',
    'Aegis': '宙斯盾',
    'Sacrificial Shank': '牺牲之腿',
    'Monkimp Paw': '脆皮猴之爪',
    'Spiked Gloves': '尖刺手套',
    '2% Huffy Attack Time, +2% Enemy Attack Time (compounding) per level': '2%怒怒攻击时间，+2%敌人攻击时间(相互叠乘)[每级]',
    '1 attack damage per level': '1攻击力[每级]',
    '20 base health per level': '20基础生命值[每级]',
    '10 Attack and +20% Bleed Damage per 5 levels. +5% Bleed Damage and +3% Bleed Chance per level': '10攻击力，+20%流血伤害[每5级]。+5%流血伤害，+3%流血概率[每级]',
    '1 poison damage per level': '1剧毒伤害[每级]',
    '10% Shock Damage per level': '10%震荡伤害[每级]',
    '1 Defense per level': '1防御力[每级]',
    '1 Max Poison Stack per 4 levels. +1 Defense, +4% standard Poison Chance per level': '1剧毒层数上限[每4级]。+1防御力，+4%基础剧毒概率[每级]',
    '2 Defense, +5% Resist per level': '2防御力，+5%抗性[每级]',
    '10% Dust Gained per level': '10%魔尘获取量[每级]',
    '3% Attack Time (compounding), +4 Defense per level': '3%攻击时间(相互叠乘)，+4防御力[每级]',
    '0.5 Heal on Poison Tick, +1% Poison Tick Speed per level': '0.5治疗量于每次剧毒触发，+1%剧毒触发速度[每级]',
    '5% Lifesteal per level': '5%吸血[每级]',
    '6 defense, +100 health per level': '6防御力，+100生命值[每级]',
    '4 Attack, +10% Shock Chance, +10% Shock Damage per level': '4攻击力，+10%震荡概率，+10%震荡伤害[每级]',
    '10% Poison Chance, +2 Poison Damage per level': '10%剧毒概率，+2剧毒伤害[每级]',
    '6 Attack, +6% Lifesteal, -3% damage taken (compounding, never reaching 75%) per level': '6攻击力，+6%吸血，-3%受到的伤害(相互叠乘，最终会逼近75%)[每级]',
    '3 Defense, +15% Shock Chance, +15% Shock Damage, +2% Enemy Attack Time per level': '3防御力，+15%震荡概率，+15%震荡伤害，+2%敌人攻击时间[每级]',
    '5 Attack, +50 Health, +4 Defense, +10% Resists per level': '5攻击力，+50生命值，+4防御力，+10%抗性[每级]',
    '3 Poison Damage, +50 Health, +10% Resists per level': '3剧毒伤害，+50生命值，+10%抗性[每级]',
    '5% Bleed Chance, +2 Attack, +5% bar filled on Bleed per level': '5%流血概率，+2攻击力，+5%攻速条填充量[每级]',
    '4 Attack, +10% Lifesteal per level': '4攻击力，+10%吸血[每级]',
    '5% Shock Chance, +5% Shock Damage, -5% Attack Time, +5% Shock Resist, +1 Attack per Shock per level': '5%震荡概率，+5%震荡伤害，-5%攻击时间，+5%震荡抗性，每次震荡额外+1攻击力[每级]',
    '2 Attack, +25% Bleed Damage, +100 Health per level': '2攻击力，+25%流血伤害，+100生命值[每级]',
    '5 Defense, +500 Health, +10 Poison Damage per level': '5防御力，+500生命值，+10剧毒伤害[每级]',
    '30 Defense, +1000 Health, +20% Bleed Resist, +5 Attack per level': '30防御力，+1000生命值，+20%流血抗性，+5攻击力[每级]',
    '20% PermaShock Damage, +500 Health, 20% Poison Resist per level': '20%永续震荡伤害，+500生命值，20%剧毒抗性[每级]',
    '5% Attack Time, +5 Attack, +250 Health, +5% Lifesteal per level': '5%攻击时间，+5攻击力，+250生命值，+5%吸血[每级]',
    '2% Poison Tick Rate, +0.05 Poison Damage per Enemy Resist, +5 Heal on Poison Tick per level': '2%剧毒触发速度，敌人抗性额外+0.05剧毒伤害，+5治疗量于每次剧毒触发[每级]',
    '15% Poison Chance, +20 Poison Damage, +50 Defense, +500 Health, +2 Max Stacks per level': '15%剧毒概率，+20剧毒伤害，+50防御力，+500生命值，+2层数上限[每级]',
    '50 Attack, +50% Shock Damage, +50 Defense, +1000 Health per level': '50攻击力，+50%震荡伤害，+50防御力，+1000生命值[每级]',
    '75 Attack, +10% Lifesteal, +75% Bleed Damage, +50% Bleed Chance per level': '75攻击力，+10%吸血，+75%流血伤害，+50%流血概率[每级]',
    '1000 Health, +100 Defense, +25% Lifesteal per level': '1000生命值，+100防御力，+25%吸血[每级]',
    '1s Minimum Bleed Time, +4% Bleed Chance, +2.5% Lifesteal per level': '1秒流血持续时间，+4%流血概率，+2.5%吸血[每级]',
    '1s Poison Duration, +6% Poison Chance, +3 Defense per level': '1秒剧毒持续时间，+6%剧毒概率，+3防御力[每级]',
    '2 defense, +20 health, +2.5% Lifesteal, +10% Bleed Damage per level': '2防御力，+20生命值，+2.5%吸血，+10%流血伤害[每级]',
    '25 Health, -1% Attack Time, +1 Poison Damage per level': '25生命值，-1%攻击时间，+1剧毒伤害[每级]',
    '4 Defense, +10% Shock Chance, +10% Shock Damage, +10% Lifesteal per level': '4防御力，+10%震荡概率，+10%震荡伤害，+10%吸血[每级]',
    '1% Attack Time, +1% Resists, +1% Lifesteal per 10% status chance lost per level': '1%攻击时间，+1%抗性，从失去异常状态概率中获得的吸血效果+1%[每级]',
    '100 Attack per level': '100攻击力[每级]',
    '5% attack damage per level': '5%攻击力[每级]',
    //尖塔突击相关结束

    //绒绒污污相关
    'IT\'S CRUFFYS': '这边是朽朽哟',
    'Show Scruffy Info': '显示污污的信息',
    'Show Cruffys Info': '显示朽朽的信息',
    'Evolution': '进化次数',
    'Fluffy cannot gain any Experience from Zones lower than': '绒绒无法获得经验值，因为当前区域低于',
    'Fluffy needs  at least one point of Capable to gain any Exp': '绒绒至少需要1级能力特权才可以获得经验值',
    'Fluffy needs  at least one point of Capable to gain any Exp. Complete Spire II to unlock Capable!': '绒绒至少需要1级能力特权才可以获得经验值。通过尖塔 II就可以解锁能力特权！',
    'Fluffy\'s just chillin.': '绒绒很放松。',
    'Scruffy\'s just chillin.': '污污很放松。',
    'Fluffy can now predict the future, though he won\'t tell you what\'s going to happen.': '绒绒可以预测未来了，但它没法告诉您。',
    'Scruffy can now predict the future, though he won\'t tell you what\'s going to happen.': '污污可以预测未来了，但它没法告诉您。',
    'Fluffy\'s looking pretty buff.': '绒绒看起来很健美。',
    'Scruffy\'s looking pretty buff.': '污污看起来很健美。',
    'FLUFFY SMASH': '绒！绒！碎！击！',
    'SCRUFFY SMASH': '污！污！碎！击！',
    'Fluffy\'s smelling great today.': '绒绒今天闻起来味道不坏。',
    'Scruffy\'s smelling great today.': '污污今天闻起来味道不坏。',
    'Fluffy is a model Trimp.': '绒绒是脆皮楷模。',
    'Scruffy is a model Trimp.': '污污是脆皮楷模。',
    'Fluffy can do anything.': '绒绒无所不能。',
    'Scruffy can do anything.': '污污无所不能。',
    'Fluffy once killed a Snimp with a well-timed insult.': '绒绒曾经靠着嘴炮就骂死了一个王司……一个脆皮蛇。',
    'Scruffy once killed a Snimp with a well-timed insult.': '污污曾经靠着嘴炮就骂死了一个王司……一个脆皮蛇。',
    'Fluffy can juggle 3 dozen scientists without breaking a sweat.': '绒绒可以不费吹灰之力地同时用三打科学家来表演抛球杂技。',
    'Scruffy can juggle 3 dozen scientists without breaking a sweat.': '污污可以不费吹灰之力地同时用三打科学家来表演抛球杂技。',
    'Fluffy does a barrel roll.': '绒绒秀了一手横滚翻',
    'Scruffy does a barrel roll.': '污污秀了一手横滚翻',
    'Fluffy\'s thinking about writing a book.': '绒绒在考虑出书的事。',
    'Scruffy\'s thinking about writing a book.': '污污在考虑出书的事。',
    'He\'s enjoying the grind.': '它对刷刷刷很享受。',
    'He can\'t wait to get stronger.': '它只想变得更强大。',
    'He could probably use a shower.': '它最好去洗个澡。',
    'He\'s growing up so fast.': '它在光速成长。',
    'His fur is looking healthy today.': '它的气色看起来很好。',
    'He\'s feeling quite capable.': '它觉得自己很有能力。',
    'He still drools a bit in his sleep.': '它睡觉时流了点口水。',
    'He loves a good game of fetch.': '它热衷于取物游戏。',
    'He\'s been practicing juggling.': '它在练习抛球杂技。',
    'He does a flip.': '它翻了个筋斗。',
    'He\'s the only Trimp not scared by your campfire ghost stories.': '只有它一个脆皮没有被您的营火鬼故事吓倒。',
    'Fluffy is ready to Evolve! This will reset his damage bonus and most abilities back to level 0, but he will regrow to be stronger than ever. You can cancel this Evolution at any point to return to level 10.': '绒绒已经准备好，可以进化了！进化后，它的伤害加成和大部分技能将回到0级水平，但很快它就会变得比之前更强大。您可以在任何时候取消进化，回到上一次进化的等级10。',
    'Scruffy is ready to Evolve! This will reset his damage bonus and most abilities back to level 0, but he will regrow to be stronger than ever. You can cancel this Evolution at any point to return to level 10.': '污污已经准备好，可以进化了！进化后，它的伤害加成和大部分技能将回到0级水平，但很快它就会变得比之前更强大。您可以在任何时候取消进化，回到上一次进化的等级10。',
    'Evolve!': '进化！',
    'Fluffy\'s Exp gain at the end of each Zone is equal to': '绒绒通过每个区域时获得的经验值等于',
    'Scruffy\'s Exp gain at the end of each Zone is equal to': '污污通过每个区域时获得的经验值等于',
    'Cruffys\'s Exp gain at the end of each Zone is equal to': '朽朽通过每个区域时获得的经验值等于',
    'dailyHeliumModifier': '日常氦倍率',
    'dailyRadonModifier': '日常氡倍率',
    'Labs': '实验室',
    'Battlescruff': '污污战斗',
    'You are about to abort Fluffy\'s Evolution. This will return you to level 10 on your last Evolution, but you will permanently lose all Experience earned towards the current Evolution. Are you sure you want to abort?': '您将取消绒绒的进化。取消后，绒绒将回到上一次进化的等级10，但您将失去本次进化获得的所有经验值，您确定要这么做吗？',
    'You are about to abort Scruffy\'s Evolution. This will return you to level 10 on your last Evolution, but you will permanently lose all Experience earned towards the current Evolution. Are you sure you want to abort?': '您将取消污污的进化。取消后，污污将回到上一次进化的等级10，但您将失去本次进化获得的所有经验值，您确定要这么做吗？',
    'Abort Evolution': '取消进化',
    'Ability': '技能',
    'Damage': '伤害',
    'Level': '等级',
    ' Lv': ' 级',
    'Adds a 5% chance to earn the highest available heirloom tier, and subtracts a 5% chance from the lowest tier.': '增加目前最高稀有度传家宝5%的掉率，减少最低稀有度传家宝5%的掉率。',
    'Corrupt and Healthy enemies in active Spires have a 50% chance to be missing their special ability.': '尖塔内的腐化和健康敌人有50%概率失去特殊能力。',
    'When completing a map with a cache, you have a +25% chance to find a second cache.': '当完成有储藏箱修饰符的地图时，有25%的概率发现第二个储藏箱。',
    'Overkill can now reach one extra enemy.': '超杀格子上限加1。',
    'Helium gain from all sources is increased by 25%.': '氦获取量增加25%。',
    'Allows up to two Void Maps with the same name to stick together. After completing this 2x Void Map, Fluffy will clear the extra one instantly, granting 50% more Helium than normal and a second Heirloom.': '使名字相同的2张虚空地图可以进行融合。只需完成其中1张地图，绒绒就可以立刻完成另一张地图，额外获得50%的氦以及另一个传家宝。',
    'Corrupt and Healthy enemies in active Spires no longer have any special abilities.': '尖塔内的腐化和健康敌人失去特殊能力。',
    'Adds 2.5% to your liquification bonus (half of a Spire).': '增加2.5%的液化加成(等同于半个尖塔的奖励)。',
    'Each Portal, start with two double stacked Void Maps.': '每次传送后，获得两张融合了2张地图的虚空地图。',
    'Adds 100% to the Helium modifier of all Daily Challenges.': '将所有日常挑战的氦倍率增加100%。',
    'Adds 100% to the Radon modifier of all Daily Challenges.': '将所有日常挑战的氡倍率增加100%。',
    'Gives your Trimps an additional 50% crit chance.': '您的脆皮暴击率增加50%。',
    'Adds +2x to your MegaCrit multiplier, increasing': '将超暴击倍率加2，使',
    'Start each Portal with 1 of each uniquely named Void Map (16 total).': '每次传送后，获得每种名字的虚空地图各1张(共16张)。',
    'Improves Empowerments of Nature! Poison gains +10 to Stack Transfer rate, Helium rewards from Wind are increased by 5x, and the damage bonus from Ice is doubled.': '增强自然赋能！毒赋能增加10级层数传递率，风赋能的氦加成增加为5倍，冰赋能的伤害加成翻倍。',
    'Your Trimps gain 5% attack each time you clear a Void Map. This bonus stacks additively and resets on Portal.': '每完成1张虚空地图，您的脆皮增加5%攻击力。此加成相互叠加，传送时重置。',
    'Your Trimps gain +50% to their Plaguebringer modifier, and all Nature stacks accumulate twice as fast.': '瘟疫使者效果增加50%，所有自然赋能层数叠加速度加倍。',
    'Traps are 10x larger and more effective.': '陷阱容量变为10倍，效果更好。',
    'Your Trimps gain +50% health.': '您的脆皮生命值增加50%。',
    'Doubles the amount of resources gained from Battle (excluding Radon).': '将战斗获得的非氡资源数量翻倍。',
    'Adds 25% of your Trimps\' max health to their Prismatic Shield.': '使棱镜护盾增加您的脆皮生命值上限25%的数量。',
    'Resources gathered by your Trimps are doubled.': '您的脆皮的资源获取量翻倍。',
    'Increases the chance of finding Exotic Imports, bringing the average from 3 per zone to 3.5.': '增加奇异脆皮的出现率，从每区域平均3个提升为3.5个。',
    'When a group of Trimps would die, they have a 20% chance to be restored to full health instead. Cannot trigger if Trimps were killed in one hit.': '脆皮将死于攻击时，有20%的概率原地满血复活。但如果脆皮被秒杀了，则无法触发。',
    'Pet Exp, Plaguebringer, Void Map Drop Chance and Crit Chance mods on Heirlooms no longer suffer a penalty in Universe 2.': '传家宝上的污污经验值，瘟疫使者效果，虚空地图掉落概率和暴击率不再受到宇宙2的数值惩罚。',
    'Gives your Prismatic Shield an additional layer.': '将棱镜护盾额外增加一层。',
    'Start each zone with 15% of last zone\'s Tenacity time already applied.': '进入每个区域时，使上个区域花费时间的15%计入本区域坚持特权的时间。',
    'Reduces the compounding cost increase of all Smithy materials by 20% (from x50 per Smithy purchased to x40).': '使铁匠铺花费的材料增加速度减少20%(从每个铁匠铺成本乘以50变为乘以40)。',
    'Allows you to spend an additional 10% of your total earned Nullifium on all of your Heirlooms.': '每个传家宝的可使用虚空物质上限再额外增加10%。',
    'Provides no bonus other than damage. Will some day evolve into a more powerful boost!': '暂时只提供伤害加成。今后可能会变为更强大的加成！',
    'Multiplies Radon earned by 1.5.': '氡获取量变为1.5倍。',
    'Multiplies Radon earned by 2, and grants 5% increased health and attack to your Trimps.': '氡获取量变为2倍，您的脆皮们增加5%生命值和攻击力。',
    'Multiplies Radon earned by 2.5, and increases all looted or gathered resources by 15%.': '氡获取量变为2.5倍，所有资源的获取量增加15%。',
    'Multiplies Radon earned by 3, and grants 20% Void Map Drop Chance.': '氡获取量变为3倍，虚空地图掉落概率增加20%。',
    'Grants 35% Crit Chance and adds 50% to base Crit Damage.': '暴击率增加35%，基础暴击伤害增加50%。',
    'Multiplies Radon earned by 1.75, and increases Cruffys\' Trimp health and attack bonuses by 10%.': '氡获取量变为1.75倍，朽朽提供的生命值和攻击力加成增加10%。',
    'Multiplies Radon earned by 2, and adds 25% to the Level 3 Resource bonus.': '氡获取量变为2倍，使朽朽3级的资源获取量的加成再增加25%。',
    'Multiplies Radon earned by 1.1, and Cruffys will stick around for 5 Zones after Nurture ends, granting all non-Radon bonuses.': '氡获取量变为1.1倍，朽朽在培养挑战结束后还会继续存在5个区域，提供所有非氡的加成。',
    'Multiplies Radon earned by 1.1, and increases Cruffys\' Trimp attack, health, and resource bonuses by an additional 20%. Cruffys will stay in your Universe for 5 additional Zones after Nurture ends.': '氡获取量变为1.1倍，朽朽提供的生命值，攻击力和资源获取量加成再增加20%。朽朽在培养挑战结束后还会再多存在5个区域。',
    'Multiplies Radon earned by 1.04, and increases Cruffys\' Trimp attack, health, and resource bonuses by an additional 10%. Cruffys will stay in your Universe for 1 additional Zone after Nurture ends for every 2 levels earned (11, 13, 15 etc). This is repeatable up to 10 times to a max level of 19.': '氡获取量变为1.04倍，朽朽提供的生命值，攻击力和资源获取量加成再增加10%。每提升2级(11级，13级，15级等)，朽朽在培养挑战结束后还会再多存在1个区域。此项加成对应朽朽10级到朽朽19级。',
    'Click for more detailed info': '点击以获取更详细的信息',
    'Pat': '拍头',
    //绒绒污污相关结束
    //故事相关
    'are': '什么',
    'these?!': '鬼？！',
    //故事相关结束
    //故事-尖塔
    'It has been forever, yet now we meet,': '过去这么多年，终于相遇此地，',
    'I\'m not surprised you don\'t remember me.': '我并不奇怪，你已将我忘记。',
    'I believe it is I who you currently seek,': '我就是那个人，你所正在寻觅，',
    'Lifetimes ago I was Druopitee.': '若干世前，我曾叫德罗披提。',
    'You\'re glad you remembered his name correctly! You feel tougher as memories begin to flood back, and': '您很高兴，您还正确地记得他的名字！记忆如潮水般涌来，您感觉更加坚韧了，并',
    'unlocked Toughness II': '解锁了坚韧 II',
    'On our planet you and I studied time,': '在家乡那我们一起研究时间，',
    'We realized Warp Speed could affect that line.': '我们发现曲速可以影响时间线。',
    'I took our work in a ship of my own design,': '我将成果与我的飞船相联，',
    'To test the effects of our new paradigm.': '来测试新型号会有什么改变。',
    'Oh yeah. That\'s where you knew him from! Wait doesn\'t he owe you some money? You feel fair taking a vial of': '噢，是啊。您就是在那里认识的他！等等，他是不是欠了您钱还没还？您从实验桌上拿走了 ',
    '40 Nullifium': '40虚空物质',
    'from a research table.': '，您觉得这样才算两清了。',
    'My tests made other dimensions appear,': '我的测试使其他的维度出现，',
    'I found this planet in one and flew here.': '一个维度中，我发现这行星并飞到这边。',
    'There were hordes of enemies, if that wasn\'t clear,': '敌人到处都是，结论只有一点，',
    'The finding was huge but the threat severe.': '这里的发现巨大但威胁仍然不减。',
    'Ah, so you\'re in a different dimension than your friends and family, comforting.': '啊，所以您只是在跟家人朋友们不同的维度里，真是令人安心。',
    'Ah, so you\'re in a different dimension than your friends and family, comforting. Your desire to go home some day causes strength to flow through you, and you': '啊，所以您只是在跟家人朋友们不同的维度里，真是令人安心。回家的渴望使您身体中充满了力量，并',
    'unlocked Power II': '解锁了力量 II',
    'To stay safe, I built many large towers.': '为了安全起见，我建造了很多巨塔。',
    'I\'d climb up, and I\'d peer out for hours.': '我爬到顶上，一直向外观察。',
    'I searched for lifetimes, my mind became devoured,': '研究几世以后，我的意识被吞噬变化，',
    'then one day I found a way to gain power.': '终有一天，我发现了获取力量的方法。',
    'Dammit Druopitee. This is all going to end up being his fault, isn\'t it? You look for something to steal to try and even the playing field, but can\'t find anything. Oh well.': '该死的德罗披提，原来都是你在搞的鬼，不是吗？您找遍了到处，甚至连操场也翻遍了，却一无所获。好吧。',
    'After many lifetimes of observation,': '靠着许多世观察的帮助，',
    'I had finally found my salvation.': '我终于找到了救赎之路。',
    'An airborne chemical to cause great mutation,': '散入大气，引起变异的化学药物，',
    'the Corruption was my new creation.': '腐化，我的新发明，让我感到满足。',
    'Yup, totally his fault.': '瞧，都是他的锅。',
    'Yup, totally his fault.Your desire to stop him is so strong that you\'ve': '瞧，都是他的锅。您想要阻止他的决心如此强烈，竟',
    'unlocked Motivation II': '解锁了鼓舞 II',
    'I pumped Corruption up from my spires,': '腐化从我的尖塔顶部涌出，',
    'I watched as it spread outward like wildfires.': '我看着它蔓延像野火般飞速。',
    'They now bowed to me, their brains freshly rewired,': '它们终臣服于我，意识由我挥毫所书，',
    'I had almost all that I desired.': '我几乎获得了想要的全部。',
    'You feel like anyone willing to pump something called \'Corruption\' into a planet\'s atmosphere probably qualifies as a supervillain. You feel no remorse taking another vial filled with': '您觉得任何想要把什么“腐化”注入行星大气的家伙都只能是超级反派。您毫无心理障碍地拿走了',
    '60 Nullifium': '60虚空物质',
    'But Trimps, who in numbers are tough as stone,': '但是只有脆皮，像岩石般顽固，',
    'weren\'t changed and I couldn\'t control them alone.': '从不改变，无法独自收服。',
    'So I got in my ship and I went to our home,': '所以我回到家乡，到你所在之处，',
    'I brought you here to the native Trimp Zones.': '将你带来，脆皮生活乐土。',
    'You don\'t remember that, but are pretty sure you weren\'t OK with it. Kidnapping definitely justifies taking this research': '对这事您没什么印象了，但您很肯定没法赞同这么做的。既然他绑架在先，那么您拿走刚找到的 ',
    'Heirloom': '传家宝',
    'you just found.': '也就不存在什么问题了。',
    'You disliked my plan and had to be forced,': '你不满我的计划，我只好强迫，',
    'so I wiped your mind and plotted your course.': '所以我抹去你的记忆，规划你的路线经过。',
    'I came up with plans for equipment and resorts,': '我想出了装备和帮助一类的收获，',
    'I wrote all I knew and left you reports.': '我写下了一切，默默对你诉说。',
    'Oh HE wrote those? Now that you think about it, you can see a lot of ways the designs could be improved, and': '哦，原来都是他写的？既然这么说，您就有不少方法能进行改进了，借此',
    'unlocked Carpentry II': '解锁了木工 II',
    'Oh HE wrote those? Now that you think about it, you can see a lot of ways the designs could be improved.': '哦，原来都是他写的？既然这么说，您就有不少方法能进行改进了。',
    'Your Trimps grew strong while I watched and waited,': '我在观察等待，而你的脆皮逐渐飞跃，',
    'Their loyalty can not be debated.': '它们的忠诚无可否决。',
    'You knew not of my plan, yet participated,': '你不知我的计划，但仍然参与入列，',
    'Now bow to me or be terminated.': '现在选择臣服，或是被毁灭。',
    'Yeah you don\'t really feel too much like bowing and probably won\'t be doing that.': '您不怎么喜欢臣服，也不会那么做的。',
    'unlock Looting II': '解锁了劫掠 II',
    '. Your skills at salvaging things from this Spire have helped you': '。您搜刮尖塔的本事帮助您',
    'You notice a small timeworn chest in the back of the room, where Druopitee had been storing the Skeletimp bones that he had collected over many timelines. You open it and find': '您注意到房间后面有一个小小的古旧箱子，德罗披提在那里面存放了许多时间线上收集来的脆皮骷髅骨头。您将它打开，找到了',
    '20 Perfect Skeletimp Bones!': '20块保存完好的脆皮骷髅骨头！',
    'You can tell though that these bones won\'t be here next time. The Spire\'s power grants you a permanent 4x bonus to all Dark Essence you collect, you can carry an additional Heirloom back through the Portal, and your Portal has also modified itself to now Liquify Zones equal to 5% of your highest Zone reached. You\'re not quite sure what a liquify is, but you\'re excited to find out!': '您知道下次这些骨头应该不会再出现了。尖塔的力量使您获取的黑暗精华永久变为4倍，您从此可以多携带一个传家宝通过传送门，且传送门也进行了调整，可以液化不高于最高通过区域5%的区域了。您现在还不知道液化是什么，但您很期待得知答案！',
    'You\'ve also found a large, pulsing core that seems to be powering the Spire. You try to carefully remove it but instead smash it into 20 still-humming pieces! You give the pieces to your Scientists, who name the magical new material "Spirestones" and use them to begin construction on your own Spire!': '您还发现了一个巨大的脉冲核心，看来就是它在为尖塔供能了。您尝试将它卸下来，但是却失手将它打碎成了20片嗡嗡作响的碎块！您将这些碎块带给科学家们，它们将这种魔法般的新材料命名为“尖塔石”，然后开始用这些材料来建造您自己的尖塔了！',
    'You were able to properly remove the Core this time, and have found a Common Spire Core Heirloom!': '这次您成功把尖塔核心卸了下来，获得了一个普通稀有度的尖塔核心传家宝！',
    'You\'ve helped the Trimps establish a legendary population and economy, and have brought down the man responsible for the chaos in this world. You could leave now and the Universe will forever be better because you existed. Trimps will erect statues of you as long as their civilization survives. But you know there are still other spires out there, pumping Corruption into the planet. Maybe the statues would be bigger if you stayed and helped out?': '在您的帮助下，脆皮们人口兴旺，经济繁荣，并且已经击败了让这个世界陷入混乱的罪魁祸首。哪怕现在离开，因为您来过，这个宇宙也会变得更好。只要脆皮的文明还存在，它们就会为您竖起一座雕像。但是您也知道，在世界上还有着其他的尖塔，将腐化注入这个行星。如果您留下来帮忙，或许那个雕像还能更大一些？',
    'Healthy mutation bad...': '健康变异，很是不好……',
    'Slows delirium': '狂暴之速，因此减少',
    'Gained 1 Trimp!': '您获得了1个脆皮！',
    'There\'s also some little containers floating a tiny bit off the ground, so you go check em out. Gah! They\'re all empty!': '有一些小容器在离地不远的地方漂浮着，所以您去看了看。擦！里面啥也没有！',
    'There is a piece of me in every last Spire': '每个尖塔中都有一部分我',
    'I will ensure that Corruption is never retired': '我将确保腐化永远传播',
    'Though your resolve is something that I admire': '对你的决心我钦佩甚颇',
    'Your little plan will surely backfire': '但你的小小计划必将你自己打破',
    'So it seems like all of the Spires are actually sentient thanks to Druopitee. You\'re just glad the narrator isn\'t trying to do the poetry anymore. Hey wait...': '看来，拜德罗披提所赐，所有的尖塔都活过来了。不过，您高兴的是至少那位仁兄闭口不言了。嘿，等等……',
    'I see you found my notes on my Healthy mutation': '我知道你发现了我的健康变异笔记',
    'I bet you even think it could be your salvation': '我赌你觉得它可成为救赎之依',
    'Improving this world must be quite the temptation': '拯救世界的确令人痴迷',
    'But your journey will surely end in frustration': '但你的旅途必将终于失意',
    'Even if you were able, which you surely are not': '你觉得你很行，其实你并不',
    'A Healthier world would not hasten your trot': '就算世界更健康也不会加速你的脚步',
    'For there\'s strength in Health and you would be distraught': '因为健康中的力量只会使你躁怒',
    'At the difficult challenge you yourself had wrought': '前方的艰险皆是你自己所筑',
    'a brand new Spire Core': '一个崭新的尖塔核心',
    'brand new Spire Core': '崭新的尖塔核心',
    '! For your first time killing this Echo in any timeline, you have permanently added another 5% to your Liquification bonus, increased your Dark Essence gains by 4x, and earned': '！由于这是您在所有世界线中第一次击杀此幻影，您永久增加了5%液化加成，黑暗精华获取量变为4倍，并获得了',
    'For your first time killing this Echo in any timeline, you have permanently added another 5% to your Liquification bonus, increased your Dark Essence gains by 4x, and earned': '由于这是您在所有世界线中第一次击杀此幻影，您永久增加了5%液化加成，黑暗精华获取量变为4倍，并获得了',
    '20 bones!': '20骨头！',
    'You have also unlocked the': '您同时还解锁了 ',
    'perk and can carry an additional Heirloom!': '特权，并且从此可以多携带一个传家宝！',
    'WHAT': '什',
    'WHO': '谁',
    'How...': '怎……',
    'I see that you\'re attempting some planetary healing': '我知道你正在尝试将行星治好',
    'Leaving me steaming in an unappealing feeling': '这让我不适让我倍受煎熬',
    'Your freewheeling and stealing has just reached the ceiling': '你的肆意盗窃行为已达最高',
    'Now commence kneeling or be sent off reeling': '要不臣服要不就被我打爆',
    'It\'s obvious that you want the Corruption to slow': '很明显你想阻止腐化蔓延',
    'So I\'ll point out something you might not yet know': '因此我要指出你还不知的一点',
    'My Spires are infinite, there is no plateau': '我的尖塔无穷无尽数量无限',
    'You are doomed and you\'ve been so since long long ago': '你必然失败这早有预言',
    'Still you climb on, won\'t your strength ever waver?': '还在这爬塔？你只会变弱',
    'You\'re determined to be this planet\'s true savior?': '拯救行星？只是飞蛾扑火',
    'Stop to reconsider, we could be something greater': '停下想想吧，我们可以有更好结果',
    'Or continue your path as a time traveling slaver': '要不就像个奴隶主，继续时空穿梭',
    'Please just go around, there\'s nothing to see': '转身离开吧，这里没什么可看',
    'Why is my demise something you must guarantee?': '我的死亡，为何就是你的期盼',
    'I beg you once more, please hear my plea': '再次恳求你，想想我们的羁绊',
    'We could rule for all time, just you and me': '时间永恒，我们可以统治各半',
    'Well here is something I wouldn\'t normally say': '以下的话我平时从来不讲',
    'Since it seems like you won\'t be going away': '但因为你也不像会退让',
    'Each of my Echoes you slay makes my mind decay': '死去的幻影让我的意识衰亡',
    'I may not be able to communicate after today': '从此以后我恐怕将交谈遗忘',
    'Why don\'t you care that you\'re making things harder?': '为何你不在意把事情弄得更难？',
    'To repair the planet you\'d give enemies armor?': '为了修复行星你要把敌人变得强悍？',
    'When I brought you here, I thought you\'d be smarter': '我带你来时以为你会聪明能干',
    'But it seems like there\'s no room left to barter': '现在看来已经没什么好谈',
    'perk!': '特权！',
    'You are weak. I\'ll be on the top floor.': '你太弱了。等你来送死，我在塔顶上。',
    'Your death warrant\'s signed, soon you\'ll be no more.': '死期将至，你命不久矣。',
    'I gave you everything you have, it was no easy chore.': '我给了你一切，这不是简单的儿戏。',
    'Your Trimps are MINE, prepare for war!': '你的脆皮归我，你无法与我匹敌！',
    //故事-尖塔结束
    //杂项
    'Error': '出错啦',
    'Welcome': '欢迎',
    'Welcome to Trimps! This game saves using Local Storage in your browser. Clearing your cookies or browser settings will cause your save to disappear! Please make sure you regularly back up your save file by either using the \'Export\' button in the bar below or the \'Online Saving\' option under \'Settings\'.': '欢迎来到脆皮！此游戏存档使用的是浏览器的本地存储。如果清除Cookies或者浏览器设置可能会导致丢失存档！请注意经常备份存档，您可以通过点击下方 导出 按钮或在 设置 中开启 在线保存 来进行备份。',
    'Chrome and Firefox are currently the only fully supported browsers.': '目前只有Chrome和Firefox是受到完全支持的浏览器。',
    'Would you like to enable online saving before you start?': '在游戏开始前，您是否想要开启在线保存？',
    'Enable Online Saving': '开启在线保存',
    'Don\'t Enable': '不开启',
    'AutoSave has been disabled to prevent damage to your save. If you previously had a save file, it should still be waiting for you once you fix your browser settings.': '为了保护您的存档，自动保存已被关闭。如果您之前有存档文件，在修改完设置以后应该就能恢复使用了。',
    'First Amalgamator': '第一个合并者',
    'You found your first Amalgamator! You can view this tooltip again and track how many Amalgamators you currently have under \'Jobs\'.': '您发现了您的第一个合并者！您可以在工作区域下再次查看此提示框中的内容，以及查看现在有多少个合并者。',
    'Thanks for the help, tooltip, but you can go now.': '提示框，干得好，但现在你该走了。',
    'Rare Imps: Feyimp -': '稀有脆皮：脆皮小妖 -',
    'Rare Imps: Magnimp -': '稀有脆皮：脆皮磁王 -',
    'Rare Imps: Tauntimp -': '稀有脆皮：脆皮咚咚 -',
    'Rare Imps: Venimp -': '稀有脆皮：脆皮爱神 -',
    'Rare Imps: Whipimp -': '稀有脆皮：脆皮鞭者 -',
    'Found a ': '发现了一个',
    'Unlocked Challenge': '解锁了挑战',
    'You hear some strange noises behind you and turn around to see three excited scientists. They inform you that they\'ve figured out a way to modify The Portal to take you to a new type of challenging dimension, a system they proudly call \'Challenge': '您听到身后有一些杂音，转头一看，是三个兴奋的科学家。它们告诉您，它们找到了一种调节传送门将您送到新的挑战维度的方法，它们很自豪地把它命名为 挑战',
    '\'. You will be able to activate and check out their new technology by clicking the \'Challenge': '。您可以激活并查看它们的新研究成果，只要在传送时点击 挑战',
    '\' button next time you go to use The Portal.': ' 按钮就可以了。',
    'Thanks, Scientists': '谢了，科学家们',
    'You hear some strange noises behind you and turn around to see nine excited scientists. They inform you that they\'ve figured out a way to modify The Portal to take you to a new type of challenging dimension, a system they proudly call \'Challenge': '您听到身后有一些杂音，转头一看，是九个兴奋的科学家。它们告诉您，它们找到了一种调节传送门将您送到新的挑战维度的方法，它们很自豪地把它命名为 挑战',
    '\'. It seems as if the difference between Challenge': '。看起来，挑战',
    'and Challenge': '与挑战',
    'allows them to combine multiplicatively into your Challenge': '之间的差异使它们可以叠乘起来，变为挑战',
    'Corruption': '腐化',
    'Though you\'ve seen the Corruption grow since the planet broke, you can now see a giant spire pumping out tons of the purple goo. Things seem to be absorbing it at a higher rate now.': '行星破碎以后您就发现腐化一直在增长了，现在，您又看到了一座喷出大量紫色粘液的巨型尖塔。看起来，敌人吸收腐化的速度还在增长中。',
    'Improbabilities and Void Maps are now more difficult.': '乌有者的能力上升，虚空地图的难度上升。',
    'Improbabilities and Void Maps now drop 2x helium.': '乌有者和虚空地图的氦获取量变为2倍。',
    'Off in the distance, you can see a giant spire grow larger as you approach it. Menacing plumes of some sort of goopy gas boil out of the spire and appear to be tainting the land even further. It looks to you like the Zones are permanently damaged, poor planet. You know that if you want to reach the spire, you\'ll have to deal with the goo.': '虽然还有一段距离，但是您已经可以看到一座巨型尖塔了，随着您的接近，它还在变得越来越大。某种看着就很危险的粘性气体正从尖塔上溢出，看起来，就是它使这片土地污染得越来越严重。就您所见而言，这些区域已经受到了永久的损伤，可怜的行星。您知道想要到达尖塔的话，就得先处理掉这些粘液才行。',
    'You can now see a giant spire only about 20 Zones ahead of you. Menacing plumes of some sort of goopy gas boil out of the spire and appear to be tainting the land even further. It looks to you like the Zones are permanently damaged, poor planet. You know that if you want to reach the spire, you\'ll have to deal with the goo.': '您看到了20个区域以后的一座巨型尖塔。某种看着就很危险的粘性气体正从尖塔上溢出，看起来，就是它使这片土地污染得越来越严重。就您所见而言，这些区域已经受到了永久的损伤，可怜的行星。您知道想要到达尖塔的话，就得先处理掉这些粘液才行。',
    'From now on as you press further through Zones, more and more corrupted cells of higher and higher difficulty will begin to spawn. Improbabilities and Void Maps are now more difficult.': '从现在起，随着您继续深入，腐化格子会变得越来越多，且难度越来越高。乌有者的能力上升，虚空地图的难度上升。',
    'Improbabilities and Void Maps now drop 2x helium. Each corrupted cell will drop 15% of that Zone\'s helium reward.': '乌有者和虚空地图的氦获取量变为2倍。每个腐化格子将掉落该区域氦获取量15%的氦。',
    'Bring it on': '放马过来吧',
    '10th Level of his 8th Evolution': '进化次数8等级10',
    'and he promises he\'ll make it worth your time.': '它承诺这绝对值得您这么做的。',
    'The Spire': '尖塔',
    'The Spire looms menacingly above you, and you take in a deep breath of corruption. You take a look back at your Trimps to help gather some courage, and you push the door open. You slowly walk inside and are greeted by an incredibly loud, deep, human voice.': '尖塔在您的面前露出了险恶的獠牙，您深深地吸了一口气，却全是腐化的味道。您回头看了看脆皮们，再次坚定决心，推开了门。您缓缓步入尖塔，突然，响起了极其响亮而低沉的人声。',
    'Do you know what you face? If you are defeated ten times in this place, you shall be removed from this space. If you succeed, then you shall see the light of knowledge that you seek.': '你知道你面对的是什么样的存在吗？如果在此阵亡了十次，你将被逐出此地。如果走到了最后，那么你将看到你所追寻的知识之光。',
    'This Zone is considerably more difficult than the previous and next Zones. If 10 groups of Trimps die in combat while in the spire, the world will return to normal.': '这个区域比之前和之后的区域都要难很多。如果在尖塔中有10队脆皮阵亡了，那么您将被迫退出尖塔，世界将恢复正常。',
    'Each cell gives more and more helium. Every 10th cell gives a larger reward, and increases all loot gained until your next portal by 2% (including helium).': '每个格子掉落的氦将越来越多。每10个格子还会掉落更大的奖励，并且使直到下次传送前的战利品获取量增加2%(包括氦)。',
    'You were moved to Maps to protect your limited chances at the spire. You can disable this in settings!': '为了避免无谓的伤亡，您自动进入了地图。您可以在设置中关闭此项！',
    'The Universe Awaits': '宇宙在等待',
    'AutoGolden Unlocked': '自动金色升级已解锁',
    'Your Trimps have extracted and processed hundreds of Golden Upgrades by now, and though you\'re still nervous to leave things completely to them, you figure they can probably handle doing this on their own as well. You find the nearest Trimp and ask if he could handle buying Golden Upgrades on his own, as long as you told him which ones to buy. You can tell by the puddle of drool rapidly gaining mass at his feet that this is going to take either magic or a lot of hard work.': '到目前为止，您的脆皮们已经提取处理了数百个金色升级了，但您还是有点紧张，没法把事情完全交给它们，现在您觉得或许它们能够自己控制了。您随手招来离您最近的一个脆皮，询问它是否能够做到在需要的时候购买金色升级。从它脚下那一大滩口水来看，除非有魔法或者付出极大努力，不然完全没戏。',
    'You can\'t find any magic anywhere, so you decide to found Trimp University, a school dedicated to teaching Trimps how to extract the might of Golden Upgrades without any assistance. Weeks go by while you and your Trimps work tirelessly to set up the University, choosing only the finest building materials and hiring only the most renowned Foremen to draw the plans. Just as you\'re finishing up, a Scientist stops by, sees what you\'re doing, and offers to just handle the Golden Upgrades instead. Probably should have just asked one of them first.': '您没有魔法，所以您决定建造一所脆皮大学，用来传授脆皮们如何独自提取出金色升级。您和脆皮们忙了几周为脆皮大学做准备，选择最好的建筑材料，找来了最有名的工头。快要完工时，一个科学家经过，看到了这一切，主动提出由它来控制金色升级。或许一开始就应该先找它们的。',
    'You have unlocked AutoGolden!': '您解锁了自动金色升级！',
    'The Magma': '岩浆',
    'You stumble across a large locked chest, unlike anything you\'ve ever seen. The lock looks rusty, you smack it with a rock, and it falls right off. Immediately the ground shakes and cracks beneath your feet, intense heat hits your face, and Magma boils up from the core.': '您偶然发现了一个巨大上锁的箱子，您从来没有见过类似的东西。箱子的锁已经是锈迹斑斑，您找了块石头砸了一下，它就掉了下来。突然，您的脚下开始地动山摇，空气开始酷热了起来，看来岩浆从地核中渗出了。',
    'Where one minute ago there was dirt, grass, and noxious fog, there are now rivers of molten rock (and noxious fog). You\'d really like to try and repair the planet somehow, so you decide to keep pushing on. It\'s been working out well so far, there was some useful stuff in that chest!': '一分钟前，这里还有泥土，青草和毒雾，现在这里只剩下熔岩之河了(哦，还有毒雾)。您仍想让行星恢复，所以您决定继续前进，反正目前为止一切都还挺顺利。哦，等等，箱子里有些能用上的东西……',
    'The heat is tough on your Trimps, causing each Zone to reduce their attack and health by 20% more than the last. 10% of your Nurseries will permanently close after each Zone to avoid Magma flows, and Corruption has seeped into both Void and regular Maps, further increasing their difficulty.': '岩浆的热量对您的脆皮是一个严峻的考验，脆皮们在每个区域都比上个区域减少20%的攻击力和生命值。通过每个区域后，都将有10%的托儿所永久关闭，以避免岩浆侵蚀。腐化渗透到了普通地图和虚空地图中，进一步增加了它们的难度。',
    'However, the chest contained plans and materials for the': '但与此同时，您在箱子中发现了 ',
    'building,': '的设计图和材料，另外还有',
    '100 copies of Coordination': '100份协作升级',
    '! In addition, all Zones are now worth': '！除了这些以外，从现在起，所有区域将获得',
    'The Improbability': '乌有者',
    'That shouldn\'t have happened. There should have been a Blimp there. Something is growing unstable.': '这不大对劲。这里本来应该有一个脆皮飞艇的。有什么开始变得不稳定了。',
    'Your Trimps seem to understand that they\'ll need to help out more, and you realize how to permanently use them to automate upgrades!': '脆皮们似乎明白了需要帮上更多才行，您现在可以让它们进行自动升级了！',
    'Trimp breed speed reduced by a factor of 10. 20% of enemy damage can now penetrate your block.': '从现在起，脆皮繁殖速度将除以10。且敌人伤害的20%可以穿透格挡。',
    'You have unlocked a new upgrade to learn a Formation. Helium harvested per Zone is increased by a factor of 5. Equipment cost is dramatically cheaper. Creating modified maps is now cheaper, and your scientists have found new ways to improve maps! You have access to the \'Trimp\' challenge!': '您解锁了阵型的升级。每个区域的氦获取量将乘以5。装备的花费显著下降。地图滑块的花费下降很多，而且科学家发现了改善地图的新方法！您还解锁了脆皮挑战！',
    'Looks like the Corruption is starting early...': '看起来，腐化的出现区域也提前了……',
    'I\'ll be fine': '我很好，没事的',
    'I\'m Scared': '我很害怕',
    'A Whole New World': '全新的世界',
    'Fluffy has reached Evolution 8 Level 10! He levitates above the ground, then realizes he seems a bit like a showoff so he floats back down. He strikes a good balance between power and humility by just having his eyes glow a little bit; you have to admit it\'s a good look on him.': '绒绒达到了进化次数8等级10！它在天上飘了一阵子，然后反应过来自己太飘了，于是又飘回来了。它的眼睛微微发光，很明显已经在力量和谦卑之间达到了良好的平衡。您必须承认，它确实好看多了。',
    'Anyways, Fluffy walks over to your Portal Device and gives it a good smack. He uses some nifty telepathic powers to inform you that you can now use your Portal Device to travel to a different Universe, one that he himself handpicked for its usefulness.': '总之，绒绒走到了您的传送门装置旁，重重地敲了它一下。然后它用某种精确的心灵感应能力提醒您，从现在起您可以使用传送门装置前往一个不同的宇宙了，那个宇宙经过它的精心甄别，会对您有帮助的。',
    'He continues to inform you that the Magma on this planet is beginning to harden, blocking later Spires behind impenetrable walls of Obsidian. If we want to have any hope of reaching them, we\'ll need a tremendous amount of energy from this new Universe!': '它继续提醒您，此行星上的岩浆正在开始硬化，形成无法穿越的黑曜石墙。如果想要穿过它们，需要从那个新宇宙中获取极其大量的能量！',
    'You can now travel back and forth between Universe 1 - "The Helium Universe", and Universe 2 - "The Radon Universe". See the top left of your Portal for more information.': '您现在可以在宇宙1——氦之宇宙与宇宙2——氡之宇宙之间通行了。查看传送门界面左上角的按钮以获取更详细的信息。',
    'Click this button to have your next Portal bring you to Universe 2 - The Radon Universe. Helium Perks and Fluffy can\'t come with you, but Fluffy\'s good pal Scruffy will be waiting for you.': '点击此按钮后，您的下次传送将进入宇宙2——氡之宇宙。氦相关的特权和绒绒无法生效，但绒绒的好伙伴污污将等着为您效力。',
    'Click this button to have your next Portal bring you to Universe 1 - The Helium Universe. Radon Perks and Scruffy can\'t come with you, but Scruffy\'s good pal Fluffy will be waiting for you.': '点击此按钮后，您的下次传送将进入宇宙1——氦之宇宙。氡相关的特权和污污无法生效，但污污的好伙伴绒绒将等着为您效力。',
    'Fluffy suggests having at least 15,000% Challenge': '绒绒建议至少拥有15000%的挑战',
    'reward bonus before heading to Universe 2, but he trusts you to make your own decisions!': '奖励再进入宇宙2，但它也相信您可以自己作出决定。',
    'You will earn Radon instead of Helium in Universe 2. It\'s an entirely new Universe to explore!': '宇宙2中您获取的资源从氦变为氡。探索新宇宙的时候到了！',
    'Eggs': '蛋来了',
    'It seems as if some sort of animal has placed a bunch of brightly colored eggs in the world. If you happen to see one, you can click on it to send a Trimp to pick it up! According to your scientists, they have a rare chance to contain some neat stuff, but they will not last forever...': '看起来有什么动物把一堆色彩鲜艳的蛋在世界上丢的到处都是。如果您碰到了的话，可以点击那些蛋，让一个脆皮去把它捡起来！根据科学家们的说法，它们可能有比较小的概率藏有什么宝贝，但它们无法永久存在……',
    'I\'ll keep an eye out.': '我会注意的。',
    'Well this is embarrassing. Trimps has encountered an error. Try refreshing the page.': '尴尬了，游戏遇到了一个错误。请尝试刷新页面。',
    'It would be awesome if you post the following to the': '如果您能把接下来的信息发至',
    'trimps subreddit': 'Reddit上的Trimps子板块',
    'or email it to trimpsgame@gmail.com': '或者trimpsgame@gmail.com，那么就再好不过了',
    'Note: Saving has been disabled.': '注意：已禁止保存。',
    'While attempting to save, the following error occured': '尝试保存时，发生了以下错误',
    'Error, not copied': '出错了，未进行复制',
    //杂项结束
    //脚本相关
    'AutoTrimps': '自动脆皮',
    'AutoTrimps off': '自动脆皮 关闭',
    'Fixed things. Check your TF settings U2 people i added a toggle': '修复了一些东西。宇宙2的玩家可以注意到，我在定时刷图那边加了一个开关',
    'There is not enough space to describe how much stuff has changed. But its got all 5.4 content ready.': '改动过多，无法一一描述改动的内容。总之已经完全适配了5.4版本的内容。',
    'CHANGED THE WAY JOBS, GEAR, BUILDINGS WORKS! CHECK SETTINGS!': '修改了工作、装备和建筑的工作机制，详见相应的设置！',
    'Various bug fixes.': '多个BUG修复。',
    'CHANGED THE WAY TF GATHER WORKS! CHECK TF SETTINGS!': '修改定时刷图的工作机制！详见定时刷图设置！',
    'CHANGED THE WAY MELTING POINT SETTING WORKS PLEASE CHECK SETTING IN MAPS!': '修改熔点设置的工作机制，详见地图设置！',
    //'Added Arch. Automated Quest. Fixed bugs. Updated calc.': '增加考古学。增加自动任务。修复BUG。升级计算器。',
    //'Added Quagmire functionality. Added time and tribute farming. Added option to run Dailies in either universe. Added check to c2runner to not run a challenge if you have not unlocked it. Autoallocation sort of fixed. Added Greed to loot dumping. Graphs are still bad when moving between universes. Removed autonu due to being broken.': '增加泥淖挑战相关设置。增加定时刷图和刷祭品。增加在两个宇宙刷日常的选项。增加一个判断条件，如果还没有解锁一个挑战，自动C2挑战将不会尝试它。自动分配修复一些问题。将贪婪加入主加特权列表。切换宇宙时，图表还是会有问题。移除了自动分配虚空物质，因为它无法正常工作。',
    //'CHECK COMBAT FOR BETTERAUTOFIGHT, IF MIGHT BE A BLACK BAR, CLICK IT!': '检查战斗选项下的改良自动战斗选项，它可能变成一个黑条，记得点一下！',
    //'A bunch of U2 stuff added, offline progress still being worked on.': '添加了许多宇宙2相关内容，离线进度仍需要完善。',
    'Report any bugs/problems please': '如果发现BUG或问题，请向我反馈',
    'Talk with the dev': '欲联系开发者，可以联系',
    'Zeks Discord Channel': 'Zeks Discord 频道',
    'See': '查阅 ',
    'ReadMe': '自述文件',
    'Or check': '或者查看 ',
    'the commit history': '提交记录',
    '(if you want).': '(如果您想要的话)。',
    'Script Update Notice': '脚本更新公告',
    'Thank you for playing AutoTrimps. Accept and Continue.': '感谢您使用自动脆皮脚本。点此开始使用。',
    'Graphs': '图表',
    'Helium - He/Hr': '氦 - 氦/小时',
    'Helium - Total': '氦 - 总计',
    'HeHr % / LifetimeHe': '氦小时 % / 氦总量',
    'He % / LifetimeHe': '氦 % / 氦总量',
    'Radon - Rn/Hr': '氡 - 氡/小时',
    'Radon - Total': '氡 - 总计',
    'RnHr % / LifetimeRn': '氡小时 % / 氡总量',
    'Rn % / LifetimeRn': '氡 % / 氡总量',
    'Radon - Rn/Hr Instant': '氡 - 氡/小时 瞬时值',
    'Clear Time': '通过时间',
    'Cumulative Clear Time': '累计通过时间',
    'Run Time': '本轮时间',
    'Map Bonus': '地图奖励',
    'Void Maps': '虚空地图',
    'Void Map History': '虚空地图历史',
    'Loot Sources': '战利品来源',
    'Coordinations': '协作等级',
    'Nullifium Gained': '虚空物质获取量',
    'Essence PerHour': '精华每小时量',
    'OverkillCells': '超杀格子数',
    'Magmite': '岩浆岩',
    'Fluffy XP': '绒绒经验',
    'Fluffy XP PerHour': '每小时绒绒经验',
    'Scruffy XP': '污污经验',
    'Scruffy XP PerHour': '每小时污污经验',
    'Amalgamators': '合并者',
    'Refresh': '刷新',
    'Clear All Previous Data': '清除全部数据',
    'Delete Specific Portal': '删除特定传送门数据',
    'Tips': '提示',
    'Export Graph Database will make a backup of all the graph data to a text string.': '导出图表数据将您的图表数据备份为一串字符。',
    'DISCLAIMER': '免责声明',
    'Takes quite a long time to generate.': '需要花费很长的时间。',
    'Export your Graph Database': '导出图表数据',
    'Add Note/Label': '添加注释/标签',
    'Invert Selection': '选择项反转',
    'All Off/On': '全部关闭/开启',
    'You can zoom by dragging a box around an area. You can turn portals off by clicking them on the legend. Quickly view the last portal by clicking it off, then Invert Selection. Or by clicking All Off, then clicking the portal on. To delete a portal, Type its portal number in the box and press Delete Specific. Using negative numbers in the Delete Specific box will KEEP that many portals (starting counting backwards from the current one), ie: if you have Portals 1000-1015, typing -10 will keep 1005-1015. There is a browser data storage limitation of 10MB, so do not exceed 20 portals-worth of data.': '您可以用鼠标圈选特定区域来放大。在图例上点击后可以关闭特定传送门数据。您可以点击最近一个传送门，然后点击下方的选择项反转来快速单独浏览。您也可以点全部关闭后，再点击它。如果想要删除特定传送门的数据，请在右方输入框内输入编号后，点击删除特定传送门数据。如果在输入框内输入负数再点击删除，那么会保留最近一个传送门之前相应数量的数据。举例：如果您目前图表中有传送门1000至传送门1015的数据，输入-10再点击删除后，剩下的是传送门1005至传送门1015的数据。浏览器数据存储上限为10MB，所以数据条目数不可超过20条。',
    'Tips: Hover for usage tips.': '提示：鼠标停留此处可看到有用的提示。',
    'Try to Remember Which Portals are Selected when switching between Graphs': '切换图表类型时记忆传送门选择状态',
    'ExportGraphs': '导出图表',
    'This is your GRAPH DATABASE save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的图表数据字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'Void Maps (completed': '虚空地图 (通过数',
    'Number of Void Maps': '虚空地图数量',
    'Nullifium Gained Per Portal': '每次传送门获得的虚空物质',
    'Average Nullifium Gained Per Portal =': '平均每次传送门获得的虚空物质 =',
    'Current Loot Sources (of all resources gained) - for the last 15 minutes': '目前战利品来源(所有资源) - 过去的15分钟内',
    'Time (every 15 seconds': '时间点(每15秒一次',
    'Ratio of looted to gathered': '战利品与采集的比例(单位%)',
    'Time to clear zone': '区域通过时间',
    'Cumulative Time (at END of zone#': '累计时间(在区域末尾',
    'Total Run Time': '所有轮时间',
    'Time': '时间',
    'Helium/Hour (Cumulative': '氦/小时 (累计',
    'Helium/Hour': '氦/小时',
    'Helium (Lifetime Total': '氦(总量',
    'He/Hr % of LifetimeHe': '氦小时 % / 氦总量',
    'He % of LifetimeHe': '氦 % / 氦总量',
    'Radon/Hour (Cumulative': '氡/小时 (累计',
    'Radon/Hour': '氡/小时',
    'Radon (Lifetime Total': '氡(总量',
    'Rn/Hr % of LifetimeHe': '氡小时 % / 氡总量',
    'Rn % of LifetimeRn': '氡 % / 氡总量',
    'Radon/Hour Instantaneous - between current and last zone.': '氡/小时 瞬时值 - 在当前区域和上一个区域之间。',
    'Radon/Hour per each zone': '氡/小时 每区域',
    'Void Map History (voids finished during the same level acquired (with RunNewVoids) are not counted/tracked': '虚空地图历史 (在获取的同一层通过的虚空地图无法被记录在内',
    'Map Bonus History': '地图奖励历史',
    'Map Bonus Stacks': '地图奖励层数',
    'Coordination History': '协作等级历史',
    'Total Magmite Owned': '岩浆岩总拥有量',
    'Zone (starting at': '区域 (开始于',
    'Total Magmamancers Owned': '岩浆巫师总拥有量',
    'Essence/Hour (Cumulative': '精华/小时 (累计',
    'Essence/Hour': '精华/小时',
    'Nurseries Bought (Total': '托儿所建造数 (总量',
    'Fluffy XP (Lifetime Total': '绒绒经验 (总量',
    'Zone (starts at': '区域 (开始于',
    'Fluffy XP/Hour (Cumulative': '绒绒经验/小时 (总量',
    'Fluffy XP/Hour': '绒绒经验/小时',
    'Scruffy XP (Lifetime Total': '污污经验 (总量',
    'Scruffy XP/Hour (Cumulative': '污污经验/小时 (总量',
    'Scruffy XP/Hour': '污污经验/小时',
    'Toggle Automapping': '切换自动地图开关',
    'Toggle automapping on and off.': '切换自动地图是打开还是关闭。',
    'Auto Maps': '自动地图',
    'Health to Damage ratio': '生命伤害比',
    'This status box displays the current mode Automaps is in. The number usually shown here during Farming or Want more Damage modes is the \'HDratio\' meaning EnemyHealth to YourDamage Ratio (in X stance). Above 16 will trigger farming, above 4 will trigger going for Map bonus up to 10 stacks.': '此状态框内显示目前自动地图的模式。在刷资源模式或者需要更多伤害模式下，此处会显示生命伤害比，意思是敌人生命值与您伤害的比值。此数值高于16时，会触发刷资源模式，高于4时，会进入地图获得10层地图奖励。',
    'enoughHealth': '生命值足够',
    'enoughDamage': '伤害足够',
    'shouldFarm': '应该刷资源',
    'H:D ratio =': '生命伤害比 =',
    'true': '条件为真',
    'false': '条件为假',
    'Helium/Hr Info': '氦/小时 信息',
    '1st is Current He/hr % out of Lifetime He(not including current+unspent).': '第1行为目前氦/小时与氦总量的百分比(不包含本轮的和未花费的)。',
    '0.5% is an ideal peak target. This can tell you when to portal...': '0.5%是一个比较理想的目标。在这个数字附近使用传送门会较好……',
    '2nd is Current run Total He earned / Lifetime He(not including current': '第2行为本轮氦获取量与氦总量的比值(不包含本轮的',
    'Radon/Hr Info': '氡/小时 信息',
    '1st is Current Rn/hr % out of Lifetime Rn(not including current+unspent).': '第一行为目前氡/小时与氡总量的百分比(不包含本轮的和未花费的)。',
    '2nd is Current run Total Rn earned / Lifetime Rn(not including current': '第2行为本轮氡获取量与氡总量的比值(不包含本轮的',
    'Reset zoom': '缩放比例还原',
    'Reset zoom level': '缩放比例还原为',
    'Core': '核心',
    'Core - Main Controls for the script': '核心 - 脚本主要内容的控制',
    'Building Settings': '建筑设置',
    'Jobs - Worker Settings': '工作 - 工人设置',
    'Gear': '装备',
    'Gear - Equipment Settings': '装备 - 装备设置',
    'Maps - AutoMaps & VoidMaps Settings': '地图 - 自动地图及虚空地图设置',
    'Spire - Settings for Spires': '尖塔 - 尖塔相关设置',
    'Raiding': '袭劫',
    'Raiding - Settings for Raiding': '袭劫 - 袭劫相关设置',
    'Dailies - Settings for Dailies': '日常 - 日常相关设置',
    'C2': 'C2',
    'C2 - Settings for ': 'C2 - 相关设置：',
    'Challenges - Settings for Specific Challenges': '挑战 - 特定挑战相关设置',
    'Combat & Stance Settings': '战斗及阵型设置',
    'Windstacking': '风层数叠加',
    'Windstacking Settings': '风层数叠加设置',
    'ATGA': '自动遗传学家',
    'Geneticassist Settings': '遗传学家设置',
    'Scryer': '占卜阵型',
    'Scryer Settings': '占卜阵型设置',
    'Dimensional Generator & Magmite Settings': '维度发生器及岩浆岩设置',
    'Heirloom Settings': '传家宝设置',
    'Golden': '金色',
    'Golden Upgrade Settings': '金色升级设置',
    'Nature Settings': '自然设置',
    'Display': '显示',
    'Display & Spam Settings': '显示及屏蔽设置',
    'Import Export': '导入导出',
    'Import & Export Settings': '导入及导出设置',
    'Minimize all tabs': '最小化所有选项卡',
    'Minimize all AT settings tabs.': '最小化所有脚本设置选项卡。',
    'Maximize all tabs': '最大化所有选项卡',
    'Maximize all AT settings tabs.': '最大化所有脚本设置选项卡。',
    'Exit (duplicate': '退出 (界面',
    'Closes/toggles/hides AutoTrimps (just a UI shortcut': '关闭脚本界面 (只是快捷按钮',
    'Manual Gather/Build': '手动采集和建造',
    'Auto Gather/Build': '自动采集和建造',
    'Mining/Building Only': '只采矿和建造',
    'Science Research OFF': '不进行科学研究',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only / Science Research OFF': '手动采集和建造 / 自动采集和建造 / 只采矿和建造 / 不进行科学研究',
    'Controls what you gather/build do. Manual does nothing': '控制您自己资源采集和建造。手动采集和建造不会做任何事。',
    'Auto Gathering of Food,Wood,Metal(w/turkimp) & Science. Auto speed-Builds your build queue.': '自动采集会采集食物，木头，金属(有脆皮火鸡效果的时候)及科学点。自动建造会加速建造队列。',
    'Mining/Building only does exactly what it says. Only use if you are passed the early stages of the game and have the mastery foremany unlocked (No longer need to trap, food and wood are useless).': '只采矿和建造的效果与它的称呼完全一致。建议只在您渡过游戏前期阶段解锁大群工头后开启。',
    'You can disable science researching for the achievement: Reach Z120 without using manual research.': '您可以关闭科学研究，以获得成就：在不使用手动研究的前提下，到达区域120。',
    'Metal Only': '只采矿',
    'For use with Mining/Gather Only. Only gathers Metal if you have foremany unlocked.': '用于 只采矿和建造 选项。当解锁大群工头以后，只进行采矿。',
    'Manual Upgrades': '手动升级',
    'Buy All Upgrades': '购买所有升级',
    'Upgrades no Coords': '不升级协作',
    'Manual Upgrades / Buy All Upgrades / Upgrades no Coords': '手动升级 / 购买所有升级 / 不升级协作',
    'Autobuys non-equipment upgrades (equipment is controlled in the Gear tab). The second option does NOT buy coordination (use this': '自动购买装备以外的升级(装备升级在装备选项卡下)。最后一个选项不会购买协作升级( ',
    'ONLY': '只',
    'if you know what you\'re doing).': '在您知道这个用途时才选择)。',
    'Amal Boost': '合并者提升',
    'Boost your Amal count for more Mi. Will not buy coords until your H:D ratio is below a certain value. This means that you will get amals quicker. Will not activate higher than your Amal Boost End Zone Setting!': '提升合并者数量，以获得更多的岩浆岩。只在生命伤害比低于特定的值以后才会购买协作。这意味着您可以更快获得合并者。超过您的合并者提升结束区域后不会激活！',
    'Amal Target': '合并者目标',
    'Set the amount of Amals you wish to aim for. Once this target is reached, it will buy coords below your Amal ratio regardless of your H:D, just enough to keep the Amal. -1 to disable and use H:D for entire boost.': '设置合并者的数量目标。当达到目标数量时，将只考虑在保持数量的前提下购买协作升级，忽略掉生命伤害比。设为-1则全程只考虑生命伤害比。',
    'Amal Boost H:D': '合并者提升生命伤害比',
    'Set your H:D for Amal Boost here. The higher it is the less coords AT will buy. 0.0000025 is the default.': '设置合并者提升的生命伤害比。数值越高，脚本购买的协作升级就越少。0.0000025为默认值。',
    'Amal Boost End Z': '合并者提升结束区域',
    'Amal Boost End Zone. Set the zone you want to stop Amal Boosting. -1 to do it infinitely.': '合并者提升结束区域。设置停止使用合并者提升的区域。设为-1则无限持续不会停止。',
    'Auto Allocate Off': '关闭自动分配特权',
    'Auto Allocate On': '打开自动分配特权',
    'Dump into Looting II': '主加劫掠 II',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting II': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠 II',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting II, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氦数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠 II，在特定区域将上次传送门获得的资源主加到劫掠 II上。',
    'Fast Allocate': '快速分配',
    'Turn on if your helium is above 500Qa. Not recommended for low amounts of helium.': '当氦超过500Qa(译者注：即5e17)后建议启用。低氦数量时不建议启用。',
    'Trap Trimps': '陷阱捕捉脆皮',
    'Automatically trap trimps when needed, including building traps. (when you turn this off, you may aswell turn off the in-game autotraps button, think of the starving trimps that could eat that food!': '如果有需要，自动捕捉脆皮，也会自动建造陷阱。(关闭此项时，为了保险起见，您最好也同时关闭游戏自带的自动陷阱捕捉功能',
    'AutoEggs': '自动获取彩蛋',
    'Click easter egg if it exists, upon entering a new zone. Warning: Quite overpowered. Please solemnly swear that you are up to no good.': '如果区域内存在彩蛋，在进入新区域前将自动获取它。注意：效果过于强大。请庄严宣誓您没干好事。',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only': '手动采集和建造 / 自动采集和建造 / 只采矿和建造',
    'Dump into Looting': '主加劫掠',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氦数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠，在特定区域将上次传送门获得的资源主加到劫掠上。',
    'Greed Dump': '主加贪婪',
    'Dump Radon into Greed instead.': '分配氡时改为主加贪婪。',
    'AutoPortal': '自动传送门',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Helium Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氦每小时，则只会在氦/小时低于本轮最大值的首个区域时， ',
    'portals at cell': '使用传送门于格子',
    'of the first level where your He/Hr went down even slightly compared to the current runs Best He/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting He/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氦/小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氦/小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氦每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Portal Challenge': '传送后进挑战',
    'Automatically portal into this challenge when using helium per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氦每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Custom Portal': '自定义传送门',
    'Automatically portal AFTER clearing this level.(ie: setting to 200 would portal when you first reach level': '在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'Don\'t Portal Before': '自动传送区域',
    'Do NOT allow Helium per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in helium/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氦/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氦每小时选项下出现',
    'He/Hr Portal Buffer ': '氦/小时缓冲值 ',
    'He/Hr Portal Buffer %': '氦/小时缓冲值 %',
    'IMPORTANT SETTING. When using the He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氦每小时选项时，通过一个区域后，如果氦/小时低于本轮最高值相应百分比，才会自动使用传送门，默认值为0%(例：设置为5后，将在氦/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氦/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氦/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Radon Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氡每小时，则只会在氡/小时低于本轮最大值的首个区域时， ',
    'of the first level where your Rn/Hr went down even slightly compared to the current runs Best Rn/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting Rn/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氡/小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氡/小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氡每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Automatically portal into this challenge when using radon per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氡每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Do NOT allow Radon per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in radon/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Radon per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氡/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氡每小时选项下出现',
    'Radon Per Hour': '氡每小时',
    'Rn/Hr Portal Buffer ': '氡/小时缓冲值 ',
    'Rn/Hr Portal Buffer %': '氡/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Rn/Hr Autoportal, it will portal if your Rn/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氡每小时选项时，通过一个区域后，氡/小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氡/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氡/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氡/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Pause AutoTrimps': '暂停自动脆皮脚本',
    'Pause AutoTrimps Script (not including the graphs module': '暂停自动脆皮脚本 (不包括图表部分',
    'Switch between Helium (U1) and Radon (U2) settings.': '切换氦相关(宇宙1)和氡相关(宇宙2)的设置。',
    'Buy Heliumy ': '氦奇购买 ',
    'Buy Heliumy %': '氦奇购买 %',
    'Buys the Heliumy bonus for': '当日常加成高于此选项中的数值时，购买氦奇加成。需花费 ',
    '100 bones': '100骨头',
    'when Daily bonus is above the value set in this setting. Recommend anything above 475. Will not buy if you cant afford to, or value is -1.': '。建议设置为475以上的值。如果您骨头不够，或者是此选项数值为-1，则不会购买。',
    'DFA: Off': '日常常时战斗：关闭',
    'DFA: Non-Empowered': '日常常时战斗：非赋能',
    'DFA: All Dailies': '日常常时战斗：所有',
    'DFA: Off / DFA: Non-Empowered / DFA: All Dailies': '日常常时战斗：关闭 / 日常常时战斗：非赋能 / 日常常时战斗：所有',
    'Daily Fight Always. Sends trimps to fight if they\'re not fighting in Daily challenges similar to Toxicity/Nom but not on Bloodthirst/Plagued/Bogged Dailies, regardless of BAF. Non-Empowered will only send to fight if the Daily is not Empowered. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these daily challenges (duh': '设置日常常时战斗。在日常挑战中，当脆皮没有在战斗时，自动让它们开始战斗。设置类似于毒性/美味常时战斗，无视改良自动战斗的设置，但不会在有嗜血(脆皮死亡时敌人恢复全部生命值并增加攻击力)/天灾(敌人每次攻击后使脆皮获得减成，每次攻击减少生命值上限一定比例的生命值)/泥沼(每次脆皮攻击后失去生命值)敌人的日常挑战中激活。非赋能只在日常挑战没有赋能敌人时自动让脆皮开始战斗。实际上跟战斗选项卡下的常时战斗效果类似，日常挑战中启用任意一个均可，但此选项只在日常挑战中生效。',
    'Avoid Empower': '避免赋能敌人变强',
    'Tries to avoid Empower stacks in Empower Dailies. No harm in this being on, so default is On.': '在赋能日常挑战中，尽量避免敌人获得赋能层数。开着没什么坏处，因此该选项默认为开启。',
    'Daily Armor Magic Off': '日常护甲：关闭',
    'DAM: Above': '日常护甲：超过',
    'DAM: H:D': '日常护甲：生命伤害比',
    'DAM: Always': '日常护甲：常时',
    'Daily Armor Magic Off / DAM: Above 80% / DAM: H:D / DAM: Always': '日常护甲：关闭 / 日常护甲：超过 80% / 日常护甲：生命伤害比 / 日常护甲：常时',
    'Will buy Armor to try and prevent death on Bleed/Plague/Bogged Dailies under the 3 conditions.': '在嗜血/天灾/泥沼挑战中，在以下条件时自动购买护甲以尝试生存下来。',
    'Above': '超过',
    'Will activate at and above 80% of your HZE.': '当到达最高通过区域的80%时，激活日常护甲。',
    'H:D': '生命伤害比',
    'Will activate at and above the H:D you have defined in maps.': '当生命伤害比超过地图选项卡下相关设置的数值时，激活日常护甲。',
    'Always': '常时',
    'Will activate always.': '将常时激活。',
    'All options will activate at or': '所有的选项当',
    'below 25% of your health.': '生命值不超过25%时自动激活。',
    'Daily VM Scryer': '日常虚空地图占卜阵型',
    'Only use in Dailies if you have Scryhard II, for er, obvious reasons. Works without the scryer options.': '日常挑战中请只在拥有努力占卜 II专精时开启，原因不用多说。无需占卜阵型相关设置也能生效。',
    'Daily Ignore Spires Until': '日常塔无效层',
    'Spire specific settings like end-at-cell are ignored until at least this zone is reached in Dailies (0 to disable).': '日常挑战中，尖塔的相关设置直到相应层数前无效(设为0则关闭此选项)。',
    'Daily Exit Spire Cell': '日常塔退出格',
    'What cell to exit spire in dailys.': '日常挑战中，在哪一格退出尖塔。',
    'Daily Nurseries pre-Spire': '日常塔托儿所',
    'Set the maximum number of Nurseries to build for Spires in Dailies. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Disable with -1.': '设置在日常挑战中，进入尖塔前的托儿所数量上限。先于建筑选项卡的托儿所起始区和托儿所上限生效，这样您就可以单独管理日常挑战时的设置了！设为-1则关闭此选项。',
    'Daily Windstacking': '日常风层数叠加',
    'This must be on for Daily windstacking settings to appear!': '此选项打开后才能设置日常风层数的详细参数！',
    'Overrides your Autostance settings to use the WS stance on Dailies.': '日常挑战中，先于自动阵型生效，自动使用风阵型。',
    'Daily Windstack Min Zone': '日常风层数叠加最小区域',
    'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set for dailys. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from Daily WS MAX work off this setting.': '用于风阵型，日常挑战中，在相应数值以上的区域才触发风层数叠加。(达到特定的风层数，然后切换为D阵型，击杀敌人，再重复此流程。)此项先于占卜阵型生效。但后面两个日常风层数叠加的设置会使此选项无效。',
    'Daily Windstack H:D': '日常风层数叠加生命伤害比',
    'For use with Windstacking Stance in Dailies, fiddle with this to maximise your stacks in wind zones for Dailies. If H:D is above this setting it will not use W stance. If it is below it will.': '用于日常挑战的风阵型。此选项可以用来最大化风区域的风层数。当生命伤害比高于相应数值时不会使用风阵型。当低于的时候会使用。',
    'Daily Windstack Stacks': '日常风层数叠加层数',
    'For use with Windstacking Stance in Dailies. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 175-190. In Wind Enlightenment it will add 100 stacks to your total automatically. So if this setting is 200 It will assume you want 300 stacks instead during enlightenment.': '用于日常挑战的风阵型。达到相应风层数后，再切换到D阵型。默认值为200，但个人建议设置为175至190之间的数字。如果开启了风之启迪，则自动在此数值上追加100。所以如果您将此项设置为200，那么在风之启迪开启时，会自动叠加到300层。',
    'Daily Wind Damage Cutoff': '日常风装备界限',
    'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化日常挑战中的风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为装备界限数值，例如：界限数值超过4的时候，会购买最大数量的装备。如果您将此项设为160，则只在界限数值超过160的时候才会购买。简而言之，此数值越高，脚本升级装备就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Daily Wind Map Cutoff': '日常风地图界限',
    'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will do map bonus. If you set this to 160, it will not do maps till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化日常挑战中的风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为地图界限数值，例如：界限数值超过4的时候，会去获得地图奖励。如果您将此项设为160，则只在界限数值超过160的时候才会去获得奖励。简而言之，此数值越高，脚本获得地图奖励就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Stack Liquification': '液化风层数叠加',
    'Stack Wind zones during Wind Enlight during Liquification.': '开启风之启迪并在风区域触发液化时，叠加风层数。',
    'Daily WS MAX': '日常风层数叠加上限',
    'For maximising Windstacking an entire Daily. Withholds damage to try and get your max windstacks every wind zone. Not recommended for terrible Dailies.': '设置日常挑战中风层数叠加层数的上限。每个风区域会控制伤害，尽可能达到最大风层数。不建议在条件过于苛刻的日常挑战中使用。',
    'Daily WSM H:D': '日常风层数叠加上限生命伤害比',
    'Fiddle with this to maximise your DWSM settings. Default is 0.00025.': '此项可以用来最大化日常风层数叠加上限的数值。默认值为0.00025。',
    'Raids Maps for prestiges at zone specified in Dailies. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones.': '日常挑战中，在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'You can use multiple values like this 495,506,525!': '您可以输入多个数值，格式类似495,506,525这样！',
    'Daily P Raiding Cell': '日常重铸袭劫格子',
    'What Cell to start P Raiding at. Recommend below your BW Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始重铸袭劫。如果与仿生袭劫格子一起使用，建议设置的比仿生袭劫格子低。设为-1则在格子1开始袭劫。',
    'Daily P Raiding HD': '日常重铸袭劫生命伤害比',
    'Checks if you can raid the map. If your HD value (calculated using the maps you will raid) is below this value it will not buy the map and you will stop raiding. The higher this value the higher zones it will raid. Can raid up to +10 depending on the zone. -1 or 0 to remove this check.': '用于确认是否可以袭劫地图。如果生命伤害比(按照将要袭劫的地图进行计算)低于相应数值，则不会制造地图，且会停止袭劫。数值越大，袭劫的地图等级也就越高。根据区域不同，最高可能袭劫高于当前区域10级的地图。设为-1或0则关闭此选项。',
    'Daily P Raiding Poison': '日常重铸袭劫毒上限',
    'Maximum level of map to P Raid at in Poison. If this value is 10 it will be able to go to +10 maps in Poison. You should use this instead of the HD function if you feel the calculations are off, but you can use both if needed. -1 or 0 to have no max.': '进行重铸袭劫的毒区域地图等级超出当前区域的上限。如果相应数值为10，则最大可以在毒区域高于当前区域10级的地图进行重铸袭劫。如果您感觉生命伤害比的计算不靠谱，您可以使用此选项，当然您也可以两边都使用。设为-1或0则无上限。',
    'Daily P Raiding Ice': '日常重铸袭劫冰上限',
    'Maximum level of map to P Raid at in Ice. If this value is 10 it will be able to go to +10 maps in Ice. You should use this instead of the HD function if you feel the calculations are off, but you can use both if needed. -1 or 0 to have no max.': '进行重铸袭劫的冰区域地图等级超出当前区域的上限。如果相应数值为10，则最大可以在冰区域高于当前区域10级的地图进行重铸袭劫。如果您感觉生命伤害比的计算不靠谱，您可以使用此选项，当然您也可以两边都使用。设为-1或0则无上限。',
    'Daily Hardcore P Raiding': '日常重铸硬核袭劫',
    'EXPERIMENTAL) P Raid Harder: When enabled, always buys the highest prestige map we can afford when P raiding, with option to farm fragments for highest available prestige level.': '实验性功能)重铸硬核袭劫：启用后，尽可能在袭劫时制造可以获得最高重铸等级装备的地图。另外还有一个可以选择刷碎片地图的选项。',
    'List of maximum zones to Praid on Dailies corresponding to the list specified in Daily Praiding Z.  e.g. if Daily P raiding Z setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495.  Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +': '在日常挑战中，根据日常重铸袭劫区域的数值，限制重铸袭劫地图的最大等级。例如：如果日常重铸袭劫区域设为491,495，而此选项设为495,505，那么脚本将会从区域491开始重铸袭劫，并且地图最大等级为495，然后从区域495开始，地图最大等级变为505。设为-1则永远制造最高等级的地图。如果两个选项数值对应不上，或者是数值不合法，则默认设为最高等级 (最高等级为区域层数加',
    'P Raiding harder: List of zones where we should farm fragments until we can afford the highest or target prestige map for P raiding. Set to -1 to never farm fragments.': '重铸硬核袭劫：当有足够资源制造相应重铸地图之前，在相应的区域刷碎片。设为-1则永远不刷碎片。',
    'P Raiding harder: List of zones where we should P Raid as far as we can afford before trying to farm fragments to Praid the highest or target prestige map.  Only occasionally useful, e.g. if it picks up a Speedexplorer or farming fragments is slow due to low damage. Set to -1 to never raid prestiges before farming fragents.': '重铸硬核袭劫：在开始刷碎片之前，在相应的区域进行重铸袭劫。只在有些时候会有用，例如攻击太低获取探险家加速过慢，或者是刷碎片过慢。设为-1则永远不在刷碎片前袭劫区域。',
    'Daily BW Raid': '日常仿生袭劫',
    'Toggle for Daily BW Raid settings.': '切换日常仿生袭劫是打开还是关闭。',
    'Daily BW Raiding Cell': '日常仿生袭劫格子',
    'What Cell to start BW Raiding at. Recommend above your P Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始仿生袭劫。如果与重铸袭劫格子一起使用，建议设置的比重铸袭劫格子高。设为-1则在格子1开始袭劫。',
    'Raids BWs at zone specified in dailys. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Daily Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.': '日常挑战中，在特定区域袭劫仿生仙境地图。例如：输入495，则将在区域495袭劫所有仿生仙境地图以获得装备升级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，袭劫的最大区域与袭劫最大区域选项的设置对应。所以，如果此项设为480,495而日常仿生袭劫最大区域设为500,515，那么脚本将会从区域480开始仿生袭劫，并且地图最大等级为500，然后从区域495开始，地图最大等级变为515。请让两者的数值能够一一对应，否则仿生袭劫可能失效。',
    'Raids BWs until zone specified in dailys. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Daily Z to BW raid setting for details.': '在日常挑战中，限制仿生袭劫地图的最大等级。例如：设为515，则会仿生袭劫地图直到515级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，具体设置规则见日常仿生袭劫区域选项的相关说明。',
    'Buy Radonculous ': '氡丰购买 ',
    'Buy Radonculous %': '氡丰购买 %',
    'Buys the Radonculous bonus for': '当日常加成高于此选项中的数值时，购买氡丰加成。需花费 ',
    'DHS: High Damage': '日常传家宝：高伤',
    'HIGH DAMAGE HEIRLOOM': '高伤传家宝',
    'Enter the name of your high damage heirloom. This is your heirloom that you will use normally in dailies.': '输入您较高伤害的传家宝名称。这将是日常挑战中正常情况下使用的传家宝。',
    'DHS: Low Damage': '日常传家宝：低伤',
    'LOW DAMAGE HEIRLOOM': '低伤传家宝',
    'Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking in dailies.': '输入您较低伤害的传家宝名称。这将是日常挑战中用于风层数叠加的传家宝。',
    'Auto Start Daily': '自动开始日常挑战',
    'Starts Dailies for you. When you portal with this on, it will select the oldest Daily and run it. Use the settings in this tab to decide whats next.': '自动进行日常挑战。当打开此选项并使用传送门后，将自动选择时间最早的日常挑战并进行挑战。使用后面的设置来进一步设置。',
    'Daily in U': '日常挑战进行于宇宙',
    'If this is on, you will do your daily in U2.': '如果打开此选项，则在宇宙2进行日常挑战。',
    'Daily Portal Off': '日常传送门关闭',
    'DP: He/Hr': '日常传送门：氦/小时',
    'DP: Custom': '日常传送门：自定义',
    'Daily Portal Off / DP: He/Hr / DP: Custom': '日常传送门关闭 / 日常传送门：氦/小时 / 日常传送门：自定义',
    'Portals when your world zone is above the minium you set (if applicable) and the buffer falls below the % you have defined.': '在区域超过自动传送区域和资源收益低于缓冲值以后，自动使用传送门。',
    'Portals after clearing the zone you have defined in Daily Custom Portal.': '在通过日常自定义传送门选项设置的区域时，自动使用传送门。',
    'DP: Challenge': '日常传送后进挑战',
    'Automatically portal into this challenge when using helium per hour or custom autoportal in dailies when there are none left. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '日常挑战中，当使用氦每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Daily Custom Portal': '日常自定义传送门',
    'Automatically portal AFTER clearing this level in dailies. (ie: setting to 200 would portal when you first reach level': '日常挑战中，在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'D: Don\'t Portal Before': '自动传送区域',
    'Do NOT allow Helium per Hour Daily AutoPortal setting to portal BEFORE this level is reached in dailies. It is an additional check that prevents drops in helium/hr from triggering autoportal in dailies. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set in dailies': '日常挑战中，到达相应区域之前，不自动使用传送门。此选项是为了防止氦/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在日常传送门：氦每小时选项下出现',
    'D: He/Hr Portal Buffer ': '日常氦/小时缓冲值 ',
    'D: He/Hr Portal Buffer %': '日常氦/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Daily He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run in dailies, default is 0% (ie: set to 5 to portal at 95% of your best in dailies). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用日常传送门：氦每小时选项时，在日常挑战中通过一个区域后，如果氦/小时低于本轮最高值相应百分比，才会自动使用传送门，默认值为0%(例：设置为5后，将在氦/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氦/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氦/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Daily Void Zone': '日常虚空区域',
    'What zone to do void maps in dailies. Disable with -': '日常挑战中，在相应区域运行虚空地图。您也可以关闭此选项，只需输入-',
    'Daily Voids Cell': '日常虚空格子',
    'Run Voids at this Cell. -1 to run them at the default value, which is 70.': '在到达相应格子以后，运行虚空地图。设为-1则在默认值时运行虚空地图，即格子70。',
    'Daily New Voids Mod': '日常新虚空变化值',
    '0 to disable. Positive numbers are added to your Void Map zone. -1 for no cap.': '设为0则关闭此选项。设为正数则增加相应数值。设为-1则无上限。',
    'This allows you to run new Void Maps in Dailies obtained after your Void Map zone by adding this number to your Void Map zone.': '日常挑战中，通过设置此选项，可以在超过日常虚空区域获得虚空地图以后，在相应数值范围内自动运行虚空地图。',
    'Example': '举例',
    'Void map zone=187 and This setting=10. New Voids run until 197).': '如果虚空地图区域为187，此项数值为10，则将运行区域187至区域197之间的新虚空地图。',
    'This means that any new void maps gained until Z197. CAUTION: May severely slow you down by trying to do too-high level void maps. Default 0 (OFF).': '注意：可能会因为尝试过高等级的虚空地图，而严重拖慢进度。默认值为0(关闭)。',
    'New Voids Poison': '毒区域新虚空',
    'Only run new voids in poison zones.': '只在毒区域运行虚空地图。',
    'If this is on, you will do your daily in U1.': '如果打开此选项，则在宇宙1进行日常挑战。',
    'DP: Rn/Hr': '日常传送门：氡/小时',
    'Daily Portal Off / DP: Rn/Hr / DP: Custom': '日常传送门关闭 / 日常传送门：氡/小时 / 日常传送门：自定义',
    'Automatically portal into this challenge when using radon per hour or custom autoportal in dailies when there are none left. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '日常挑战中，当使用氡每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Do NOT allow Radon per Hour Daily AutoPortal setting to portal BEFORE this level is reached in dailies. It is an additional check that prevents drops in radon/hr from triggering autoportal in dailies. Set to 0 or -1 to completely disable this check. (only shows up with Radon per Hour set in dailies': '日常挑战中，到达相应区域之前，不自动使用传送门。此选项是为了防止氡/小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在日常传送门：氡每小时选项下出现',
    'D: Rn/Hr Portal Buffer ': '日常氡/小时缓冲值 ',
    'D: Rn/Hr Portal Buffer %': '日常氡/小时缓冲值 %',
    'IMPORTANT SETTING. When using the Daily Rn/Hr Autoportal, it will portal if your Rn/Hr drops by this amount of % lower than your best for current run in dailies, default is 0% (ie: set to 5 to portal at 95% of your best in dailies). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用日常传送门：氡每小时选项时，在日常挑战中通过一个区域后，氡/小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氡/小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氡/小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在氡/小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Finish Challenge': '自动完成挑战',
    'DONT USE THIS WITH C2 RUNNER': '不要与挑战2自动运行同时使用',
    'Finish / Abandon Challenge2 (any) when this zone is reached, if you are running one. For manual use. Recommended: Zones ending with 0 for most Challenge2. Disable with -1. Does not affect Non-Challenge2 runs.': '到达相应区域后自动完成挑战2并放弃挑战。建议手动选择挑战使用。建议使用以0结尾的区域数值。设为-1则关闭此选项。对于非C2挑战无效。',
    'No F/L/M in C': '不雇佣农/伐/矿于挑战',
    'Buys No Farmers, Lumberjacks or Miners in the C2 challenges Watch and Trapper.': '在守望和捕手挑战中，不雇佣农民、伐木工和矿工。',
    'Tox/Nom Fight Always': '毒性/美味常时战斗',
    'Sends trimps to fight if they\'re not fighting in the Toxicity and Nom Challenges, regardless of BAF. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these challenges (duh': '在毒性/美味挑战中，当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。跟战斗选项卡下的常时战斗效果类似，启用任意一个均可，但此选项只在相应挑战中生效。(不然呢？',
    'C2 Armor Magic Off': '挑战2护甲：关闭',
    'CAM: Above': '挑战2护甲：超过',
    'CAM: H:D': '挑战2护甲：生命伤害比',
    'CAM: Always': '挑战2护甲：常时',
    'C2 Armor Magic Off / CAM: Above 80% / CAM: H:D / CAM: Always': '挑战2护甲：关闭 / 挑战2护甲：超过 80% / 挑战2护甲：生命伤害比 / 挑战2护甲：常时',
    'Will buy Armor to try and prevent death on Nom/Tox Challenges under the 3 conditions.': '在美味/毒性挑战中，在以下条件时自动购买护甲以尝试生存下来。',
    'Will activate at and above 80% of your HZE and when your health is sufficiently low.': '当到达最高通过区域的80%，且生命值非常低的时候，激活挑战2护甲。',
    'Mapology H:D': '地图学生命伤害比',
    'Set your H:D ratio for Mapology. Will not go into maps unless your H:D ratio is above this. -1 to use normal behaviour.': '设置地图学挑战专用的生命伤害比。除非生命伤害比高于此数值，才会运行地图。设为-1则使用正常设置。',
    'No VMs': '不运行虚空地图',
    'Turn off VM running for C2s. Handy for the C2 Runner.': '挑战2不自动运行虚空地图。对挑战2自动运行很有帮助。',
    'C2 Runner': '挑战2自动运行',
    'Runs the normal C2s in sequence according to difficulty. See C2Table for list. Once zone you have defined has been reached, will portal into next. I will advise you not to touch the challenges (abandoning, doing a different one, etc) if you are running this, it could break it. Only runs challenges that need updating, will not run ones close-ish to your HZE.': '根据难度，自动运行挑战2。具体可参考挑战2列表。当到达设定的区域时，会自动使用传送门，进入下一个挑战。建议在此过程中不要碰相关内容(如放弃挑战、选择其他挑战等)，可能会使挑战2自动运行失效。只会运行需要更新层数的挑战，不会运行接近最高通过区域的挑战。',
    'C2 Runner Portal': '挑战2传送门',
    'Automatically portal AFTER clearing this level in C2 Runner. (ie: setting to 200 would portal when you first reach level': '挑战2中，在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'C2 Runner ': '挑战2运行 ',
    'C2 Runner %': '挑战2运行 %',
    'What percent Threshhold you want C2s to be over. E.g 85, will only run C2s with HZE% below this number. Default is 85%. Must have a value set for C2 Runner to... well, run.': '挑战2结束的阈值。例如设为85，则只会运行区域低于最高通过区域85%的挑战。默认值为85%。必须设置数值后，挑战2自动运行才能正常工作。',
    'C2 Table': '挑战2列表',
    'Display your C2s and C3s in a convenient table which is colour coded.': '将挑战2和挑战3的情况显示在一个列表中。',
    'Green': '绿色',
    '= Not worth updating.': '= 无须更新层数。',
    'Yellow': '黄色',
    '= Consider updating.': '= 需要考虑更新层数。',
    'Red': '红色',
    '= Updating this C2/C3 is worth doing.': '= 需要更新层数。',
    'Blue': '蓝色',
    '= You have not yet done/unlocked this C2/C3 challenge.': '= 挑战未完成过/未解锁。',
    'c2table': '挑战2列表',
    'Hide Buildings': '隐藏建筑',
    'If you have unlocked Autostructure and Decabuild, this setting will appear and enable you to hide the now obsolete building settings, so please use AutoStructure instead. The settings will only disappear if you disable the buy buildings button and turn this on. It will not hide the Gym settings as Autostructure does not allow you to customize how you buy them.': '如果您解锁了自动建造和十重建造，此选项将会出现，您可以使用此项来隐藏过时的建筑设置，之后请使用游戏内的自动建造。相关的设置只会在脚本关闭建造，且开启此项后才会隐藏。不过，此选项不会隐藏健身房的设置，因为游戏内的自动建造无法自定义健身房相关设置。',
    'Buy Neither': '不建造任何建筑',
    'Buy Buildings & Storage': '建造所有建筑',
    'Buy Buildings': '建造非存储建筑',
    'Buy Storage': '建造存储建筑',
    'Buy Neither / Buy Buildings & Storage / Buy Buildings / Buy Storage': '不建造任何建筑 / 建造所有建筑 / 建造非存储建筑 / 建造存储建筑',
    'AutoBuys Storage when it is almost full (it even anticipates Jestimp) and Non-Storage Buildings (As soon as they are available). Takes cost efficiency into account before buying Non-Storage Buildings.': '当相应资源存储将要达到上限时，自动建造存储建筑(甚至会考虑脆皮弄臣处获得的资源)。当非存储建筑达到相应资源时，自动建造，但建造时也会考虑成本效率。',
    'Warpstation Cap': '跃迁核心上限',
    'Do not level Warpstations past Basewarp+DeltaGiga **. Without this, if a Giga wasnt available, it would level infinitely (wastes metal better spent on prestiges instead.) **The script bypasses this cap each time a new giga is bought, when it insta-buys as many as it can afford (since AT keeps available metal/gems to a low, overbuying beyond the cap to what is affordable at that first moment is not a bad thing).': '将跃迁核心的等级限制在基础跃迁核心数加上千兆核心变量的相应数值**。如果关闭此项，那么只要没有新的千兆核心升级，跃迁核心将无限升级下去(会浪费很多金属)。 **脚本在购买新的千兆核心时会忽略此项设置，而会尽可能多地进行购买(因为脚本会将金属和宝石控制在一个较低的数值，因此购买千兆核心后，尽可能的进行建造不会是个坏主意)。',
    'Buy Warp to Hit Coord': '建造跃迁核心达到协作',
    'If we are very close to hitting the next coordination, and we can afford the warpstations it takes to do it, Do it! (even if we are over the Cap/Wall). Recommended with WarpCap/WarpWall. (has no point otherwise': '如果我们离下个协作升级相差很少人口，且我们可以建造相应的跃迁核心来补足人口，那么将建造跃迁核心(即使这么做会超过跃迁核心上限或跃迁核心墙)。建议同时启用跃迁核心上限或跃迁核心墙。(否则就没有设置的意义了',
    'Max Huts': '小屋最大值',
    'Huts': '小屋',
    'Max Houses': '宅院最大值',
    'Houses': '宅院',
    'Max Mansions': '豪宅最大值',
    'Mansions': '豪宅',
    'Max Hotels': '宾馆最大值',
    'Hotels': '宾馆',
    'Max Resorts': '度假村最大值',
    'Resorts': '度假村',
    'Max Gateways': '维度裂隙最大值',
    'Gateways': '维度裂隙',
    'Max Wormholes': '虫洞最大值',
    'WARNING: Wormholes cost helium! Values below 0 do nothing.': '注意：虫洞需要花费氦！设为低于0的值不会进行建造。',
    'Max Collectors': '汲能设施最大值',
    'recommend: -': '建议值：-',
    'Max Gyms': '健身房最大值',
    'Advanced. recommend: -': '进阶设置。建议值：-',
    'Max Tributes': '贡品最大值',
    'Gym Wall': '健身房墙',
    'Conserves Wood. Only buys 1 Gym when you can afford': '节省木头。只在可以建造 ',
    'gyms wood cost (at the first one\'s price, simple math). -1 or 0 to disable. In other words, only allows gyms that cost less than 1/nth your currently owned wood. (to save wood for nurseries for new z230+ Magma nursery strategy). Takes decimal numbers. (Identical to the Warpstation wall setting which is why its called that). Setting to 1 does nothing besides stopping gyms from being bought 2 at a time due to the mastery.': '个健身房(即设置的数值)时才建造1个健身房。设为-1或0则关闭此选项。换句话说，只在健身房成本低于当前木头的1/相应数值时才进行建造(为区域230以上的托儿所节省木头)。可以输入小数(与跃迁核心的设置类似)。设为1则一次只建造一个健身房。',
    'First Gigastation': '首次千兆核心数',
    'How many warpstations to buy before your first gigastation': '在升级首个千兆核心前，建造多少个跃迁核心',
    'Delta Gigastation': '千兆核心变量',
    'YOU MUST HAVE BUY UPGRADES ENABLED!': '必须开启购买升级！',
    'How many extra warpstations to buy for each gigastation. Supports decimal values. For example 2.5 will buy +2/+3/+2/+3...': '每次千兆核心升级时，需要多建造多少个跃迁核心。可以输入小数。例如数值为2.5，则每次需要多建造2个/3个/2个/3个……',
    'Warpstation Wall': '跃迁核心墙',
    'Conserves Metal. Only buys 1 Warpstation when you can afford': '节省金属。只在可以建造 ',
    'warpstations metal cost (at the first one\'s price, simple math). -1, 0, 1 = disable. In other words, only allows warps that cost less than 1/nth your currently owned metal. (to save metal for prestiges': '个跃迁核心(即设置的数值)时才建造1个跃迁核心。设为-1、0或1则关闭此选项。换句话说，只在跃迁核心成本低于当前金属的1/相应数值时才进行建造。(为装备重铸节省金属',
    'Max Nurseries': '托儿所最大值',
    'Advanced. Recommend: -1 until you reach Magma (z230+': '进阶设置。建议值：-1，直到岩浆区(区域230以上',
    'No Nurseries Until z': '托儿所起始区',
    'Builds Nurseries starting from this zone. -1 to build from when they are unlocked.': '从此区域开始建造托儿所。设为-1则在解琐托儿所时就开始建造。',
    'AutoBuildings': '自动建筑',
    'Buys buildings in an efficient way. Also enables Vanilla AutoStorage if its off.': '有效地管理购买建筑。如果通常的自动存储被关闭了，则也会打开它。',
    'Max Labs': '实验室最大值',
    'It is about 10 labs per level at level 10 plus.': '等级10以后，每级大概需要多造10个实验室。',
    'Melt Smithy': '熔点铁匠铺',
    'Run the Melting Point Map to gain one extra Smithy when at or above this value.': '当超过此数值时，进入熔点地图获取额外的铁匠铺。',
    'Smithy Savings': '节约铁匠铺',
    'ABSOLUTELY WILL NOT WORK IN TESTING!': '测试性功能！',
    'Uses Smithy Saving logic when this is turned on. Make sure every SS setting is set above 0 or it wont work. This feature will stop using resources on items needed for Smithy when you have reached the targets you have selected.': '开启此选项后启用节约铁匠铺逻辑。请确保每个节约铁匠铺相关设置的值大于0，否则此选项将无效。此选项当您达到了设置的目标时，会阻止使用铁匠铺需要的资源来购买其他东西。',
    'SS: Number': '节约铁匠铺：数值',
    'Start SS at this number of Smithys. I.e 9, will buy anything regardless of Smithy before having 9 Smithys. After 9 has been reached will start to save up for them.': '从铁匠铺达到此数值后，开始节约铁匠铺。例如设为9，则在拥有9个铁匠铺之前一切照常运行，拥有9个铁匠铺后，开始限制相应资源的使用。',
    'SS: Percent': '节约铁匠铺：百分比',
    'If you have SS enabled this value will allow items below this value to be purchased. I.e if this is set to 1, it will only buy items if that item is 1% of Smithys cost or lower.': '只允许购买成本低于此百分比的东西。例如设为1，则只会购买成本低于铁匠铺成本1%的东西。',
    'How many seconds SS starts activating at. I.e 120, if your Smithy is 120 seconds away from being purchased SS will kick in.': '激活节约铁匠铺的秒数。例如设为120，则当铁匠铺还有120秒完成时，激活节约铁匠铺。',
    'Hide Jobs': '隐藏工作',
    'Hides obsolete settings when you have obtained the AutoJobs Mastery. It should be far better to use than AT, Especially on c2 Challenges like Watch.': '获得自动工作后，此选项将会出现，您可以使用此项来隐藏过时的工作设置。考虑到C2的守望挑战，可以说自动工作比脚本更好用。',
    'Don\'t Buy Jobs': '不分配工作',
    'Auto Worker Ratios': '自动工人比例',
    'Manual Worker Ratios': '手动工人比例',
    'Don\'t Buy Jobs / Auto Worker Ratios / Manual Worker Ratios': '不分配工作 / 自动工人比例 / 手动工人比例',
    'Manual Worker Ratios buys jobs for your trimps according to the ratios below,': '手动工人比例按照下方设置的比例分配工人，',
    'Make sure they are all different values, if two of them are the same it might causing an infinite loop of hiring and firing!': '请保证它们的值各不相同，否则可能会引发雇佣和解雇的死循环！',
    'Auto Worker ratios automatically changes these ratios based on current progress,': '自动工人比例根据当前进度自动修改比例，',
    'overriding your ratio settings': '忽略相应的比例设置',
    'AutoRatios: 1/1/1 up to 300k trimps, 3/3/5 up to 3mil trimps, then 3/1/4 above 3 mil trimps, then 1/1/10 above 1000 tributes, then 1/2/22 above 1500 tributes, then 1/12/12 above 3000 tributes.': '自动比例如下：1/1/1到3e5脆皮，然后3/3/5到3e6脆皮，然后3/1/4超过3e6脆皮，然后1/1/10超过1000贡品，然后1/2/22超过1500贡品，最后1/12/12超过3000贡品。',
    'CAUTION: You cannot manually assign jobs with this, turn it off if you have to': '注意：开启此项后将无法手动分配工作，如果有需要请关闭此项',
    'Auto Magmamancers': '自动岩浆巫师',
    'Auto Magmamancer Management. Hires Magmamancers when the Current Zone time goes over 10 minutes. Does a one-time spend of at most 10% of your gem resources. Every increment of 10 minutes after that repeats the 10% hiring process. Magmamancery mastery is accounted for, with that it hires them at 5 minutes instead of 10. Disclaimer: May negatively impact Gem count.': '自动分配岩浆巫师。在当前区域停留超过10分钟以后，雇佣岩浆巫师。一次至多使用10%的宝石。在此之后，每再过10分钟，重复一次此过程。当拥有岩浆巫师学专精时，改为5分钟一次。注意：可能对宝石产量有不利影响。',
    'Farmer Ratio': '农民比例',
    'Lumberjack Ratio': '伐木工比例',
    'Miner Ratio': '矿工比例',
    'Max Scientists': '科学家最大值',
    'Advanced. Cap your scientists (This is an absolute number not a ratio). recommend: -1 (infinite still controls itself': '进阶设置。限制科学家数量(不是比例)。建议值：-1 (设为无限仍然会控制数量',
    'Max Explorers': '探险家最大值',
    'Advanced. Cap your explorers (This is an absolute number not a ratio). recommend: -': '进阶设置。限制探险家数量(不是比例)。建议值：-',
    'Max Trainers': '训练师最大值',
    'Advanced. Cap your trainers (This is an absolute number not a ratio). recommend: -': '进阶设置。限制训练师数量(不是比例)。建议值：-',
    'Ship Farming': '刷崇信者',
    'Turn Ship Farming off or on.': '是否开启刷崇信者所需要的资源。',
    'Farms for specified worshippers in SF: Amount at zone according to this settings value. Can use 59,61,62.': '在特定的区域，以刷崇信者：数量中设置的数量来刷崇信者所需要的资源。可以输入多个数值，格式类似59,61,62这样。',
    'SF: Cell': '刷崇信者：格子',
    'Ship Farm at this Cell. -1 to run them at the default value, which is 1.': '在此格子开始刷崇信者所需要的资源。设为-1则在默认值时开始刷崇信者，即格子1。',
    'How many Worshippers to farm at zone specified in SF. Can use 2,3,4. These values should match up to your SF zones. If using SF and SF: Amount examples (59 and 2) it will farm at z59 for 2 Worshippers.': '刷崇信者时在相应的区域刷到多少名崇信者所需要的资源。可以输入多个数值，格式类似2,3,4这样。请让此项的数值与刷崇信者：区域的数值能够一一对应。例如：将刷崇信者：区域设为59，刷崇信者：数量设为2的话，将在区域59刷到能够雇佣2名崇信者为止。',
    'What map level to use for SF. Can use -1,1,2. -1 to use a level down from world (Map Reducer mastery gives loot equal to world one level down), 0 to use world, 1 etc to use +maps. Using 0 by itself will use global level for all maps.': '刷崇信者时使用的地图等级。可以输入多个数值，格式类似-1,1,2这样。设为-1则使用比当前区域低一级的地图(地图减压专精效果下可以从低一级的地图中获得相同的劫掠资源量)，设为0则与世界区域数相等，1及以上则使用额外区域。只设为0的话，则所有地图都使用与世界区域数相等的等级。',
    'Turn this on to farm fragments if you cannot afford the map you have selected for SF.': '开启此项后，如果碎片不足以制造刷崇信者所需要的地图，则会先刷碎片。',
    'Armor: Buy Neither': '护甲：关闭',
    'Armor: Buy Both': '护甲：全部',
    'Armor: Prestiges': '护甲：重铸',
    'Armor: Levels': '护甲：等级',
    'Armor: Buy Neither / Armor: Buy Both / Armor: Prestiges / Armor: Levels': '护甲：关闭 / 护甲：全部 / 护甲：重铸 / 护甲：等级',
    'AutoBuys Prestiges and Levels up the most cost efficient Armor available. Gymystic buying is controlled under this setting\'s prestige option': '自动购买重铸和升级最佳的护甲。健身学购买由重铸控制',
    'Weapons: Buy Neither': '武器：关闭',
    'Weapons: Buy Both': '武器：全部',
    'Weapons: Prestiges': '武器：重铸',
    'Weapons: Levels': '武器：等级',
    'Weapons: Buy Neither / Weapons: Buy Both / Weapons: Prestiges / Weapons: Levels': '武器：关闭 / 武器：全部 / 武器：重铸 / 武器：等级',
    'AutoBuys Prestiges and Levels up the most cost efficient Weapon available.': '自动购买重铸和升级最佳的武器。',
    'Weapon Level Cap': '武器等级限制',
    'Do not level Weapons past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0.': '限制武器等级，无法超过此数值。可以防止花了大量金属提升等级，然后马上又重铸了。建议值：早期为10，晚期为100。设为-1或0则关闭此选项。',
    'NEW': '新功能',
    'Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughDamage. But During Spire, everything will be leveled up to the cap.': '还会将液化或超杀(低于25秒时)区域的等级上限设为此数值的10%。当然这不意味着脚本总能达到此数值。装备至少会升到2级，因为这是性价比最高的等级。之后，只会在伤害不足时才会提升等级。不过尖塔例外，此时所有装备都会被提升到上限。',
    'Hidden var': '隐藏选项',
    'MODULES["equipment"].capDivisor = 10; //number to divide your normal cap by.': '控制台中输入：MODULES["equipment"].capDivisor=10可以设置液化或超杀的区域等级上限比例，其中10为相应百分比，可自行修改。',
    'Armor Level Cap': '护甲等级限制',
    'Do not level Armor past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0.': '限制护甲等级，无法超过此数值。可以防止花了大量金属提升等级，然后马上又重铸了。建议值：早期为10，晚期为100。设为-1或0则关闭此选项。',
    'Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughHealth. But During Spire, everything will be leveled up to the cap.': '还会将液化或超杀(低于25秒时)区域的等级上限设为此数值的10%。当然这不意味着脚本总能达到此数值。装备至少会升到2级，因为这是性价比最高的等级。之后，只会在生命值不足时才会提升等级。不过尖塔例外，此时所有装备都会被提升到上限。',
    'Equipment Cut Off': '装备界限',
    'Decides when to buy gear. 4 is default. This means it will take 1 hit to kill an enemy if in D stance.': '设置购买装备的时机。默认值为4。这意味着可以在D阵型时秒杀敌人。',
    'Dynamic Prestige z': '动态重铸区域',
    'Dynamic Prestige': '动态重铸',
    'Set Target Zone number: Z #. (disable with 0 or -': '设置目标区域数值。(关闭此选项于设为0或-',
    'Skip getting prestiges at first, and Gradually work up to the desired Prestige setting you have set (set the Prestige dropdown to the highest weapon you want to end up on at the target zone you set here). Runs with Dagger to save a significant amount of time until we need better gear, then starts increasing the prestige setting near the end of the run.  Examines which prestiges you have, how many missing ones youd need to achieve the desired target and starts running maps every zone (more maps for higher settings), Until the target prestige is reached.': '一开始不获得重铸升级，之后慢慢获得设置好的重铸选项(右方重铸下拉菜单设置的重铸升级从相应数值区域后失效)。一开始只重铸匕首，可以节省大量时间，直到需要更好的装备以后，再开始重铸设置的相应装备。脚本会考虑已有的重铸升级，需要多少次升级才能达到相应数值，然后在相应的区域起开始运行地图(设置的区域越高，运行的地图就越多)，直到达到相应数值的重铸升级。',
    'Use Dagger or else': '否则将重铸匕首',
    'Prestige': '重铸',
    'Acquire prestiges through the selected item (inclusive) as soon as they are available in maps. Forces equip first mode. Automap must be enabled. THIS IS AN IMPORTANT SETTING related to speed climbing and should probably always be on something. If you find the script getting stuck somewhere, particularly where you should easily be able to kill stuff, setting this to an option lower down in the list will help ensure you are more powerful at all times, but will spend more time acquiring the prestiges in maps.': '只要地图中有相应装备的重铸升级，就立刻获取。强制启用装备优先模式。必须开启自动地图。此设置合理与否可以决定冲层速度快慢。如果感觉设置此项后，游戏在之前轻松通过的层数卡住了，那说明您应该选择更下方的选项。不过这么做的话，在地图中获取重铸升级的时间也会越长。',
    'Force Prestige Z': '强制重铸区域',
    'On and after this zone is reached, always try to prestige for everything immediately, ignoring Dynamic Prestige settings and overriding that of Linear Prestige. Prestige Skip mode will exit this. Disable with -1.': '从此区域开始，忽略其他重铸顺序设置，总是立刻获取所有重铸升级。重铸跳过模式激活后此项失效。设为-1则关闭此选项。',
    'Prestige Skip Off': '关闭重铸跳过',
    'Prestige Skip 1 &': '重铸跳过 1 &',
    'Prestige Skip': '重铸跳过',
    'Prestige Skip Off / Prestige Skip 1 & 2 / Prestige Skip 1 / Prestige Skip': '关闭重铸跳过 / 重铸跳过 1 & 2 / 重铸跳过 1 / 重铸跳过',
    'If there are more than 2 Unbought Prestiges (besides Shield), ie: sitting in your upgrades window but you cant afford them, AutoMaps will not enter Prestige Mode, and/or will exit from it. The amount of unboughts can be configured with this variable MODULES["maps"].SkipNumUnboughtPrestiges = 2;': '如果有2个以上未购买的重铸升级(除盾牌以外)，也就是有2个以上升级在升级窗口中可以看到，但没有足够的资源来购买时，自动地图将不会进入重铸模式，并且会退出重铸模式。未购买的重铸升级数量可以在控制台中输入MODULES["maps"].SkipNumUnboughtPrestiges=2修改，其中2为相应数值，可自行修改；',
    'If there are 2 or fewer': '如果',
    'Unobtained Weapon Prestiges in maps': '地图中未获得的武器重铸升级',
    'ie: there are less than 2 types to run for, AutoMaps will not enter Prestige Mode, and/or will exit from it. For users who tends to not need the last few prestiges due to resource gain not keeping up. The amount of unboughts can be configured with MODULES.maps.UnearnedPrestigesRequired. If PrestigeSkipMode is enabled, both conditions need to be reached before exiting.': '数量少于2个，也就是少于2种武器重铸升级时，自动地图将不会进入重铸模式，并且会退出重铸模式。此项用来跳过一些成本过高的重铸升级。未获得的武器重铸升级数量可以在控制台中输入MODULES.maps.UnearnedPrestigesRequired=2修改，其中2为相应数值，可自行修改。如果模式1和模式2都启用了，那么两个条件都必须同时满足才会激活重铸跳过。',
    'Delay Armor Prestige': '延迟护甲重铸',
    'Delays buying armor prestige-upgrades during Want More Damage or Farming automap-modes, Although if you need health AND damage, it WILL buy armor prestiges tho. NOTE': '如果自动地图模式目前是需要更多伤害模式或者刷资源模式，则延迟购买护甲重铸升级。不过在需要更多生命值和伤害模式中仍然会购买护甲重铸升级。注意',
    'Applies to Prestiges only': '只对重铸有效',
    'Buy Shield Block': '购买盾牌格挡',
    'Will buy the shield block upgrade. CAUTION: If you are progressing past zone 60, you probably don\'t want this :': '购买盾牌格挡升级。注意：如果您能够到达区域60以上，您恐怕就不再需要这个升级了 :',
    'Buy Armor on Death': '死亡时购买护甲',
    'Buys 10 levels of Armor when Trimps die. Useful when your trimps die frequentely.': '脆皮死亡时购买10级护甲。脆皮死亡过于频繁时会很有用。',
    'Gear Levels to Buy': '单次装备购买等级',
    'Set the amount of Gear Levels to buy for AT. I.e if set to 1 will buy 1 level at a time. Recommended value 1.': '设置脚本一次购买的装备等级数量。例如：设为1则一次购买1级装备。建议值为1。',
    'MUST ALWAYS HAVE A VALUE GREATER THAN 0!': '必须设置为大于0的数值！',
    'Always Level': '常时等级',
    'Always buys level 2 of weapons and armor regardless of efficiency': '无视效率，常时购买2级武器和护甲',
    'AutoEquip. Buys Prestiges and levels equipment according to various settings. Will only buy prestiges if it is worth it. Levels all eqiupment according to best efficiency.': '自动装备。根据相应的设置，自动购买重铸升级和购买装备等级。只在有必要的时候购买重铸升级。根据效率来购买装备等级。',
    'AE: Cut-off': '自动装备：界限',
    'Decides when to buy gear. 1 is default. This means it will take 1 hit to kill an enemy. If zone is below the zone you have defined in AE: Zone then it will only buy equips when needed.': '设置购买装备的时机。默认值为1。这意味着可以秒杀敌人。如果当前区域比自动装备：区域中设置的数量来得低，则只会在有需要的时候购买装备。',
    'AE: Amount': '自动装备：购买数量',
    'How much equipment to level per time.': '每次购买多少数量的装备等级。',
    'AE: Weapon Cap': '自动装备：武器限制',
    'What level to stop buying Weapons at.': '达到相应数量后停止购买武器的装备等级。',
    'AE: Armour Cap': '自动装备：护甲限制',
    'What level to stop buying Armour at.': '达到相应数量后停止购买护甲的装备等级。',
    'AE: Zone': '自动装备：区域',
    'What zone to stop caring about H:D and buy as much prestiges and equipment as possible.': '从此区域开始，忽略生命伤害比，尽可能地购买重铸升级和装备等级。',
    'AE: Percent': '自动装备：百分比',
    'What percent of resources to spend on equipment before the zone you have set in AE: Zone': '在到达自动装备：区域中设置的区域之前，只购买成本低于此百分比的装备。',
    'AE': '自动装备',
    'AE: Farm': '自动装备：刷资源',
    'AutoEquip Farm. Calculates metal needed to reach the target you have defined in the AEF settings. Will try to buy the best map you can make. Will never make a plus map as this is intended for us on deep push runs.': '是否刷自动装备所需要的资源。将根据自动装备刷资源的相应设置来计算所需要刷的金属数量。将尽可能地选择最合适的地图，但不会制造有额外区域的地图。',
    'AEF: Zone': '自动装备刷资源：区域',
    'What zone to start AEF: H:D and AEF: Multiplier.': '从此区域开始考虑自动装备刷资源：生命伤害比和自动装备刷资源：倍率。',
    'AEF: H:D': '自动装备刷资源：生命伤害比',
    'What H:D to use for AEF target.': '自动装备刷资源所使用的生命伤害比。',
    'AEF: Multiplier': '自动装备刷资源：倍率',
    'Starting from the zone above AEF: Zone, this setting will multiply the H:D you have set in AEF: H:D. So if AEF: Zone was 100, AEF: H:D was 10, AEF: Multiplier was 1.2, at z101 your H:D target will be 12, then at z102 it will be 14.4 and so on. This way you can account for the zones getting stronger and you will not waste time farming for a really low H:D.': '从自动装备刷资源：区域中设置的区域开始，将自动装备刷资源：生命伤害比中设置的数量乘以相应的倍率。这意味着如果自动装备刷资源：区域设置为100，自动装备刷资源：生命伤害比设置为10，自动装备刷资源：倍率设置为1.2，则在区域101时您的生命伤害比目标将变成12，区域102将变成14.4，依此类推。通过此项设置您可以考虑到区域变难的情况，同时也不需要在生命伤害比较低的时候浪费时间刷资源。',
    'AEF: Hits': '自动装备刷资源：次数',
    'How many hits do you want to kill an enemy in a AEF map.': '在自动装备刷资源的地图中需要用多少次攻击才能击杀敌人。',
    'Auto Maps Off': '关闭自动地图',
    'Auto Maps On': '开启自动地图',
    'Auto Maps No Unique': '非独特自动地图',
    'Auto Maps Off / Auto Maps On / Auto Maps No Unique': '关闭自动地图 / 开启自动地图 / 非独特自动地图',
    'Automaps. The no unique setting will not run unique maps such as dimensions of anger. Recommended ON. Do not use MaZ, it will not work.': '自动地图开关。非独特自动地图不会进入类似愤怒维度的独特地图。建议开启。不要再同时设置自动进图了，那不会生效的。',
    'AM Portal': '传送后自动地图',
    'Makes sure Auto Maps is on after portalling. Turn this off to disable this and remember your choice.': '使用传送门后开启自动地图。如果关闭了此项，请记得手动开启自动地图。',
    'Dynamic Siphonology': '动态虹吸学',
    'Recommended Always ON. Use the right level of siphonology based on your damage output. IE: Only uses  siphonology if you are weak. With this OFF it means it ALWAYS uses the lowest siphonology map you can create. Siphonology is a perk you get at level 115-125ish, and means you receive map bonus stacks for running maps below your current zone - Up to 3 zones below (1 per perk level).': '建议常时开启。根据您的伤害输出情况自动选择虹吸学对应的地图等级。例如：只在您比较弱小的时候使用虹吸学。如果关闭此项，则永远使用虹吸学对应最低的等级制造地图。虹吸学是区域115至125左右可以获得的一个特权，可以从更低等级的地图获得地图奖励。',
    'Prefer Metal Maps': '倾向于金属地图',
    'Always prefer metal maps, intended for manual use, such as pre-spire farming. Remember to turn it back off after you\'re done farming!': '总是倾向于使用金属地图。用于手动操作，例如尖塔前刷资源。刷完以后记得关闭此项！',
    'Map Selection': '地图选择',
    'Select which you prefer to use. Recommend Plentiful (Gardens) if you have unlocked it.': '选择倾向使用的地图。如果已经解锁花园(或丰饶)，建议选择它。',
    'Max MapBonus After': '最大地图奖励起点',
    'Always gets Max Map Bonus from this zone on. (inclusive and after).': '从此区域开始，总是获取最大地图奖励。',
    'NOTE': '注意',
    'Set -1 to disable entirely (default). Set 0 to use it always.': '设为-1则关闭此选项(默认值)。设为0则总是使用。',
    'Advanced': '进阶设置',
    'User can set a lower number than the default 10 maps with the AT hidden console command: MODULES["maps"].maxMapBonusAfterZ = 9;': '您可以在控制台输入以下命令修改此选项获取的地图奖励数，需要低于10：MODULES["maps"].maxMapBonusAfterZ=9，其中9为相应数值，可自行修改。',
    'Max MapBonus Limit': '最大地图奖励界限',
    'Limit the amount of Map Bonuses you get. Default is 10.': '限制获取地图奖励的最大值。默认值为10。',
    'Max MapBonus Health': '最大地图奖励生命值',
    'Limit the amount of map bonuses you get when AutoMaps requires more health. Default is 10.': '限制当自动地图处于需要更多生命值模式下，获取地图奖励的最大值。默认值为10。',
    'Map Cut Off': '地图界限',
    'Decides when to get max map bonus. 4 is default. This means it will take 1 hit to kill an enemy if in D stance.': '设置获取最大地图奖励的时机。默认值为4。这意味着可以在D阵型时秒杀敌人。',
    'Farming H:D': '刷资源生命伤害比',
    'If H:D goes above this value, it will farm for Damage & Health. The lower this setting, the more it will want to farm. Default is': '如果生命伤害比高于此数值，则会进入刷资源模式。数值越低，刷资源越频繁。默认值为',
    '1 to disable farming!': '1则关闭刷资源模式！',
    'Lower Farming Zone': '降低刷资源区域',
    'Lowers the zone used during Farming mode. Uses the dynamic siphonology code, to Find the minimum map level you can successfully one-shot, and uses this level for any maps done after the first 10 map stacks. The difference being it goes LOWER than what Siphonology gives you map-bonus for, but after 10 stacks you dont need bonus, you just want to do maps that you can one-shot. Goes as low as 10 below current zone if your damage is that bad, but this is extreme and indicates you should probably portal.': '在刷资源模式中，降低使用的地图等级。在到达最大地图奖励前，会考虑虹吸学对应的等级，尽可能找到秒杀敌人的地图等级，在那之后，会选择任何等级的地图。因为获得最大地图奖励后，您也不需要再考虑地图奖励和虹吸学，只需要秒杀敌人就可以了。最低可以选择低于当前区域10级的地图，但那也意味着您的伤害太低，该使用传送门了。',
    'Farm on >7 NOMstacks': '美味超过7层则刷资源',
    'Optional. If Improbability already has 5 NOMstacks, stack 30 Anticipation. If the Improbability has >7 NOMstacks on it, get +200% dmg from MapBonus. If we still cant kill it, enter Farming mode at 30 stacks, Even with DisableFarming On! (exits when we get under 10x). Farms if we hit 100 stacks in the world. If we ever hit (100) nomstacks in a map (likely a voidmap), farm, (exit the voidmap) and (prevent void from running, until situation is clear). Restarts any voidmaps if we hit 100 stacks.': '可选。如果一个乌有者拥有了5层美味，则尝试获得30层预期。如果乌有者超过7层美味，则尝试获得200%地图奖励。如果仍然无法击杀它，那么在30层美味的时候进入刷资源模式，无视刷资源模式开关(当生命伤害比低于10x时退出)。在世界上，当美味到达100层时进入刷资源模式。如果在地图中到达了100层美味，则进入刷资源模式，并且在完成刷资源之前不进入虚空地图。当到达100层美味时重新开始虚空地图。',
    '0 to disable': '设为0则关闭此选项',
    'The zone at which you want all your void maps to be cleared inclusive of the zone you type. Runs them at Cell 70. Use odd zones on Lead.': '设置通过所有虚空地图的区域数值。在该区域的格子70进入虚空地图。在领导挑战中请设为奇数。',
    'Voids Cell': '虚空格子',
    'New Voids Mod': '新虚空变化值',
    'This allows you to run new Void Maps obtained after your Void Map zone by adding this number to your Void Map zone.': '在超过虚空地图对应区域获得虚空地图以后，在相应数值范围内自动运行虚空地图。',
    'Stacked Voids Only': '只运行融合虚空地图',
    'Only run stacked voids.': '只运行融合的虚空地图。',
    'I don\'t really think doing this automatically is a good idea. You might want to farm for a bit before this, but I\'m not sure if it\'s meaningful at all to make a \'farm X minutes before trimple\' parameter to go along with it. Set it to the zone you want and it will run Trimple of Doom for Ancient Treasure AFTER farming and getting map stacks. If it is a negative number, this will be disabled after a successful run so you can set it differently next time.': '自动末日神殿似乎并不是个好主意。您可能想要在进入末日神殿之前刷一会儿资源，但增加更详细的选项也没什么意义。设置此数值为您想要进入末日神殿的区域，那么在完成刷资源和获取地图奖励后，将在相应区域进入末日神殿。如果此选项设为负数，则在完成一次以后关闭此选项，以便您下次设为不同数字使用。',
    'Map Special Modifier': '地图特殊修饰符',
    'BELOW 300 ONLY': '只在区域300以下有效',
    'Attempt to select the BEST map special modifier. When starting a map for': '尝试选择最好的地图修饰符。当运行地图是为了 ',
    'it will use': '升级时，会使用',
    '. When starting a map for': '修饰符。当运行地图是为了 ',
    'Farming': '刷资源',
    '(for equipment) it will use your best metal cache. In any other case (such as farming for map stacks) it will use': '(升级装备)时，会使用最好的金属储藏箱修饰符。其他情况下(例如获取地图奖励)，会使用',
    '. In all cases it uses the best modifier that can be afforded.': '修饰符。总之，它会尽可能选择最好的修饰符。',
    'VM Scryer': '虚空地图占卜阵型',
    'Only use if you have Scryhard II, for er, obvious reasons. Works without the scryer options.': '请只在拥有努力占卜 II专精时开启，原因不用多说。无需占卜阵型相关设置也能生效。',
    'VM Buy Weps': '虚空地图购买武器',
    'Buys gear in Void maps regardless of your H:D ratio. Useful if you want to overkill as much as possible.': '虚空地图中无视生命伤害比购买装备。对于超杀会有帮助。',
    'Automaps. The no unique setting will not run unique maps such as dimensions of rage. Recommended ON. Do not use MaZ, it will not work.': '自动地图开关。非独特自动地图不会进入类似暴怒维度的独特地图。建议开启。不要再同时设置自动进图了，那不会生效的。',
    'Plentiful': '丰饶',
    'Hits Survived': '伤害承受次数',
    'Set this value to tell the script how many enemy attacks you wish to survive for. The default is 10. The lower this is the less health the script will get. If you set this too high it will farm too much so please be careful.': '设置想要承受多少次攻击才死亡。默认值为10。数值越低，脚本的生命值目标就越低。如果设置过高，可能脚本会花过多时间刷资源，所以请小心设置。',
    'Time Farm': '定时刷图开关',
    'Turn this on if you want to use Time or Tribute Farming.': '如果您想使用定时刷图或者定时刷图：贡品，请开启此选项。',
    'Farms for specified minutes in TF: Time at zone according to this settings value. Can use 59,61,62.': '在特定的区域，以定时刷图：数值中设置的时间来刷资源。可以输入多个数值，格式类似59,61,62这样。',
    'TF: Cell': '定时刷图：格子',
    'Time Farm at this Cell. -1 to run them at the default value, which is 1.': '在此格子开始定时刷图。设为-1则在默认值时开始定时刷图，即格子1。',
    'TF: Tribute': '定时刷图：贡品',
    'Turn this on if you want to turn TF: Time into Tribute Farming. If this is set to true TF: Time will work as A tribute setting. I.e if TF: Time is set to 750 tributes, it will farm at TF zone till that many tributes as been built. Uses TF Settings.': '如果您想用定时刷图来刷贡品，请开启此选项。开起此项后，定时刷图：数值的作用变为贡品的目标值。例如：如果定时刷图：数值设为750，则直到贡品达到相应数值时，将一直停留在相应区域刷资源。其他定时刷图设置也有效。',
    'TF': '定时刷图',
    'TF：黑色泥沼': '定时刷图：黑色泥沼',
    'Turn this on if you want to use Black Bogs for farming instead of your map selection. Only works at z70. Will abandon Black Bog before completing to preserve stacks.': '如果您想用黑色泥沼代替定时刷图：地图的选项来刷资源，请开启此选项。只在区域70有效。在通过黑色泥沼之前会放弃地图，以保留层数。',
    'How many minutes to farm at zone specified in TF. Can use 2,3,4. These values should match up to your TF zones. If using TF and TF: Times examples (59 and 2) it will farm at z59 for 2 minutes.': '定时刷图时在相应的区域刷多少分钟。可以输入多个数值，格式类似2,3,4这样。请让此项的数值与定时刷图的数值能够一一对应。例如：将定时刷图设为59，定时刷图：数值设为2的话，将在区域59刷资源2分钟。',
    'What map level to use. Can use -1,1,2. -1 to use a level down from world (Map Reducer mastery gives loot equal to world one level down), 0 to use world, 1 etc to use +maps. Using 0 by itself will use global level for all maps.': '使用的地图等级。可以输入多个数值，格式类似-1,1,2这样。设为-1则地图等级比世界区域数低1，0则相同，1则比世界区域高1，依此类推。',
    'TF: Map Selection': '定时刷图：地图',
    'Select which map you prefer to use.': '选择想要使用的地图。',
    'TF: Special Selection': '定时刷图：修饰符',
    'Select which Special to use. May bug out if you cannot afford selected. Also overrides your autojobs to buy workers relating to the resource you want to farm. I.e if LFC is chosen all workers will be hired as farmers and rest fired for the duration of farm.': '选择想要使用的特殊修饰符。如果碎片不够的话可能会卡死。另外，会强制将自动工作设为雇佣相关的工人。例如：选择大美味储藏箱以后，在刷资源期间，所有工人都将成为农民。',
    '0 = None': '0 = 无修饰符',
    'fa = Fast Attacks': 'fa = 快速攻击',
    'lc = Large Cache': 'lc = 大储藏箱',
    'ssc = Small Savory Cache': 'ssc = 小美味储藏箱',
    'swc = Small Wooden Cache': 'swc = 小木头储藏箱',
    'smc = Small Metal Cache': 'smc = 小金属储藏箱',
    'src = Small Research Cache': 'src = 小研究储藏箱',
    'p = Prestigous': 'p = 重铸',
    'hc = Huge Cache': 'hc = 巨大储藏箱',
    'lsc = Large Savory Cache': 'lsc = 大美味储藏箱',
    'lwc = Large Wooden Cache': 'lwc = 大木头储藏箱',
    'lmc = Large Metal Cache': 'lmc = 大金属储藏箱',
    'lrc = Large Research Cache': 'lrc = 大研究储藏箱',
    'TF: Gather Selection': '定时刷图：采集',
    'Select which resource to Gather.': '选择采集的资源。',
    'Default': '默认',
    'Run Prismatic Palace when its unlocked.': '当棱镜宫殿解锁后，运行之。',
    '1 to disable. When to run the map Melting Point. Use it like this: 50,91. The first number is what zone Melting Point should be run at, the second number is what Cell to run it at. In this example AutoMaps would run Melting Point at z50 cell 91. Must define both values. Works in the challenges Melt and Trappapalooza.': '1则关闭此选项。用于设置运行熔点地图的时机。可以输入两个数值，格式类似50,91这样。第一个数字用于设置运行熔点地图的区域，第二个数字用于设置运行熔点地图的格子。前面的例子中，将在区域50的格子91处运行熔点地图。必须设置两个数值才能生效。用于熔化挑战和捕手道达人挑战。',
    'Enable Bog Running for Quagmire.': '允许在泥淖挑战中运行黑色泥沼地图。',
    'What zones to run Black Bogs at. Can use 40,50,60.': '设置运行黑色泥沼地图的区域。可以输入多个数值，格式类似40,50,60这样。',
    'How many Black Bogs to at specified zones. Can use 8,9,10. I.e if BB: Zone had 40,50 and this setting had 8,10, It would run 8 Black Bogs at z40 and 10 Black Bogs at z50.': '在相应的区域运行黑色泥沼地图的次数。可以输入多个数值，格式类似8,9,10这样。例如：黑色泥沼：区域设为40,50，此项设为8,10，则在区域40运行8次黑色泥沼，然后在区域50运行10次黑色泥沼。',
    'Max Map Bonus for Spire': '尖塔前获得最大地图奖励',
    'Get max map bonus before running the Spire.': '是否在进入尖塔前获得最大的地图奖励。',
    'Farm Before Spire': '尖塔前刷资源',
    'Farm level 200/199(or BW) maps for X minutes before continuing onto attempting Spire.': '在进入尖塔前，用相应的分钟数刷200/199级地图(或仿生仙境)。',
    'Set 0 to disable entirely (default).': '设为0则完全关闭此选项(默认值)。',
    'Setting to -1/Infinite does not work here, set a very high number instead.': '设为-1/无穷大在这里无效，请设为一个大数字。',
    'Ignore Spires Until': '尖塔无效层',
    'Spire specific settings like end-at-cell are ignored until at least this zone is reached (0 to disable).': '尖塔的相关设置直到相应层数前无效(设为0则关闭此选项)。',
    'Does not work with Run Bionic Before Spire.': '如果进入尖塔前刷的是仿生仙境，则此项无效。',
    'Exit Spire After Cell': '尖塔退出格',
    'Optional/Rare. Exits the Spire early, after completing cell X. example: 40 for Row 4. (use 0 or -1 to disable': '可选/罕有用。在哪一格退出尖塔。例如：设为40则在完成第四行以后退出尖塔。(设为0或-1则关闭此选项',
    'Spire Breed Timer': '尖塔繁殖计时',
    'ONLY USE IF YOU USE VANILLA GA': '除非使用通常的遗传学家助手设置，否则不要使用此项！',
    'Set a time for your GA in spire. Recommend not touching GA during this time.': '设置尖塔内的繁殖计时。建议这段时间内不要改变遗传学家助手的设置。',
    'Nurseries pre-Spire': '尖塔托儿所',
    'Set the maximum number of Nurseries to build for Spires. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Will build nurseries before z200 for Spire 1, but only on the zone of Spires 2+ to avoid unnecessary burning. Disable with -1.': '设置在进入尖塔前的托儿所数量上限。先于建筑选项卡的托儿所起始区和托儿所上限生效，这样您就可以单独管理尖塔的设置了！在进入尖塔1之前，会在区域200之前购买托儿所，但在那之后的尖塔只会在尖塔相应的区域建造托儿所，以避免托儿所被无意义地烧掉。设为-1则关闭此选项。',
    'Buy Gear in Spire': '尖塔购买装备',
    'Will buy Weapons and Armor in Spire regardless of your H:D ratio. Respects your max gear level and ignore spires setting.': '在尖塔中无视生命伤害比购买装备。装备等级限制仍然有效，但尖塔相关设置则无效。',
    'Skip Spires': '跳过尖塔',
    'Will disregard your H:D ratio after Farm Before Spire is done (if set). Useful to die in spires if farming takes too long': '当完成尖塔前刷资源以后，无视生命伤害比进入尖塔。如果刷资源花费时间过长，可以强行死在尖塔中以跳过尖塔',
    'Raids Maps for prestiges at zone specified. Example: 495, will raid Maps at 501-505 sequentially. Once all gear is obtained from the maps, it will revert back to regular farming. Use P Raiding HD to determine how many extra maps you wish you raid. Extremely helpful for spire. Best used in poison zones.': '在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501至区域505袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。使用重铸袭劫生命伤害比来设定袭劫的地图数量。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'P Raiding Cell': '重铸袭劫格子',
    'P Raiding HD': '重铸袭劫生命伤害比',
    'P Raiding Poison': '重铸袭劫毒上限',
    'P Raiding Ice': '重铸袭劫冰上限',
    'Hardcore P Raiding': '重铸硬核袭劫',
    'List of maximum zones to Praid corresponding to the list specified in Praiding zones.  e.g. if P raiding zones setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495. Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +': '根据重铸袭劫区域的数值，限制重铸袭劫地图的最大等级。例如：如果重铸袭劫区域设为491,495，而此选项设为495,505，那么脚本将会从区域491开始重铸袭劫，并且地图最大等级为495，然后从区域495开始，地图最大等级变为505。设为-1则永远制造最高等级的地图。如果两个选项数值对应不上，或者是数值不合法，则默认设为最高等级 (最高等级为区域层数加',
    'BW Raiding': '仿生袭劫',
    'Raids BW at zone specified in BW Raiding Z/max.': '切换是否在特定区域袭劫仿生仙境地图。',
    'BW Raiding Cell': '仿生袭劫格子',
    'Raids BWs at zone specified. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.': '在特定区域袭劫仿生仙境地图。例如：输入495，则将在区域495袭劫所有仿生仙境地图以获得装备升级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，袭劫的最大区域与袭劫最大区域选项的设置对应。所以，如果此项设为480,495而日常仿生袭劫最大区域设为500,515，那么脚本将会从区域480开始仿生袭劫，并且地图最大等级为500，然后从区域495开始，地图最大等级变为515。请让两者的数值能够一一对应，否则仿生袭劫可能失效。',
    'Raids BWs until zone specified. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Z to BW raid setting for details.': '限制仿生袭劫地图的最大等级。例如：设为515，则会仿生袭劫地图直到515级。如果伤害值足够，则会忽略低级的仿生仙境地图。当获得了所有装备升级后，将回到正常的刷资源模式。可以以括号分隔的形式输入多个数字，具体设置规则见仿生袭劫区域选项的相关说明。',
    'Raids Maps for prestiges at zone specified. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones.': '在特定区域袭劫地图以获得重铸升级。例如：输入495，则将在区域501袭劫地图。当获得了所有重铸升级后，将回到正常的刷资源模式。对于通过尖塔的帮助非常大。最好在毒区域中使用。',
    'Praiding': '宇宙2重铸袭劫',
    'MASTER BUTTON': '总开关',
    'Toggle Prestige Raiding. Use PR: Zone, PR: Raid and PR: Cell to Raid Prestiges in higher Maps.': '切换是否开启宇宙2重铸袭劫。详细设置宇宙2重铸袭劫：区域、宇宙2重铸袭劫：地图、宇宙2重铸袭劫：格子后可以在高等级地图中袭劫重铸升级。',
    'I.e: World is 95, PR: Zone is [95,105], PR: Raid is [105,115], PR: Cell is 1. Will go into map creation at cell 1, create maps 101, 102, 103, 104, 105 with Prestige option. If you can\'t afford P maps, it will try without. If still unable to afford will buy the highest maps first without buying 101 and 102 for example. Raiding will take longer if you can\'t afford it. Once all maps are created it will run the lowest created then move onto the next till all created maps are finished. If you have enabled PR: Recycle it will then recycle those maps. There may be more options in the future depending on content added.': '例如：当前为区域95，宇宙2重铸袭劫：区域设为95,105，宇宙2重铸袭劫：地图设为105,115，宇宙2重铸袭劫：格子设为1。那么将会在格子1开始进入地图界面，并以重铸修饰符制造101，102，103，104，105级的地图。如果碎片不够制造重铸修饰符地图，那么将改为制造无修饰符的地图。如果仍然不够碎片，那么将会从最高级的地图开始制造，直到碎片耗尽。碎片不够可能导致宇宙2重铸袭劫花费更久时间。所有地图都制造好了以后，将从最低级的地图开始运行，然后按顺序运行，直到所有地图运行完毕。如果您开启了宇宙2重铸袭劫：回收，那么此时所有地图将被回收。基于今后添加的内容，未来可能有更多选项。',
    'Zones to Prestige Raid. Can use 95,105,115!': '宇宙2重铸袭劫的区域。可以输入多个数值，格式类似95,105,115这样！',
    'What Maps to Raid. Corrosponds to PR: Zone, so first value will corrospond to first value in PR: Zone. Can use 105,115,125!': '宇宙2重铸袭劫的地图。与宇宙2重铸袭劫：区域选项一一对应，可以输入多个数值，格式类似105,115,125这样！',
    'PR: Cell': '宇宙2重铸袭劫：格子',
    'What Cell to start Prestige Raiding at. Recommend below your BW Raiding cell if used together. -1 to Raid at cell 1.': '在哪一个格子开始宇宙2重铸袭劫。如果与仿生袭劫格子一起使用，建议设置的比仿生袭劫格子低。设为-1则在格子1开始袭劫。',
    'PR: Frag': '宇宙2重铸袭劫：正常碎片',
    'PR: Frag Min': '宇宙2重铸袭劫：最小碎片',
    'PR: Frag Max': '宇宙2重铸袭劫：最大碎片',
    'PR: Frag / PR: Frag Min / PR: Frag Max': '宇宙2重铸袭劫：正常碎片 / 宇宙2重铸袭劫：最小碎片 / 宇宙2重铸袭劫：最大碎片',
    'Farm for fragments to afford the maps you want to create. PR: Frag Min is used for absolute minimum frag costs (which includes no Prestige special, perfect sliders, random map and the difficulty and size options, however it will try to afford those options first!) and prioritises buying the most maps for a smoother sequential raid. PR: Frag Max is used for the ultimate Raiding experience. This option will probably take the most time to farm but may save you time in the actual raid. I would recommend using Min Mode if you don\'t have frag drop or explorer effic on your heirloom and Max if you are confident in your Fragment gains.': '切换如何刷碎片以制造地图。宇宙2重铸袭劫：最小碎片只获得最少的碎片来制造地图(意味着地图基本上无修饰符，无完美滑块，选项全随机，但仍然会尽可能的尝试这些选项)，优先购买尽可能多的地图以使袭劫过程更平滑。宇宙2重铸袭劫：最大碎片则相反，将所有选项全部开至最大。此项可能需要更多时间来刷资源，但袭劫则可能节省一些时间。请根据您的碎片收益情况进行选择。',
    'PR: Recycle': '宇宙2重铸袭劫：回收',
    'Recycle maps created in Prestige Raiding.': '切换是否回收宇宙2重铸袭劫制造的地图。',
    'Turn WS On!': '请开启风层数叠加！',
    'Turn on Windstacking Stance in Combat to see the settings!': '战斗选项卡下将自动阵型切换为风层数叠加以看到相关选项！（此项无实际作用）',
    'Windstack Min Zone': '风层数叠加最小区域',
    'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from WS MAX work off this setting.': '用于风阵型，在相应数值以上的区域才触发风层数叠加。(达到特定的风层数，然后切换为D阵型，击杀敌人，再重复此流程。)此项先于占卜阵型生效。但后面两个日常风层数叠加的设置会使此选项无效。',
    'Windstack H:D': '风层数叠加生命伤害比',
    'For use with Windstacking Stance, fiddle with this to maximise your stacks in wind zones.': '用于风阵型。此选项可以用来最大化风区域的风层数。当生命伤害比高于相应数值时不会使用风阵型。当低于的时候会使用。',
    'Windstack Stacks': '风层数叠加层数',
    'For use with Windstacking Stance. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 175-190.  In Wind Enlightenment it will add 100 stacks to your total automatically. So if this setting is 200 It will assume you want 300 stacks instead during enlightenment.': '用于风阵型。达到相应风层数后，再切换到D阵型。默认值为200，但个人建议设置为175至190之间的数字。如果开启了风之启迪，则自动在此数值上追加100。所以如果您将此项设置为200，那么在风之启迪开启时，会自动叠加到300层。',
    'Wind Damage Cutoff': '风装备界限',
    'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为装备界限数值，例如：界限数值超过4的时候，会购买最大数量的装备。如果您将此项设为160，则只在界限数值超过160的时候才会购买。简而言之，此数值越高，脚本升级装备就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'Wind Map Cutoff': '风地图界限',
    'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will get map bonus. If you set this to 160, it will not get more map bonus till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use.': '设置数值来优化风层数叠加。可以在没有风阵型的情况下生效，但不建议。脚本通常使用4作为地图界限数值，例如：界限数值超过4的时候，会去获得地图奖励。如果您将此项设为160，则只在界限数值超过160的时候才会去获得奖励。简而言之，此数值越高，脚本获得地图奖励就越少，此项可以让您将风层数叠加到非常高。设为-1则关闭此选项，恢复默认设置。必须设置日常风层数叠加最小区域才能正常使用。',
    'WS MAX': '风层数叠加上限',
    'For maximising Windstacking an entire run. Withholds damage to try and get your max windstacks every wind zone. Not recommended for normal usage. Good for BPs.': '设置风层数叠加层数的上限。每个风区域会控制伤害，尽可能达到最大风层数。不建议在通常情况下使用。仅建议用于刷骨头传送门的数值。',
    'WSM H:D': '风层数叠加上限生命伤害比',
    'Fiddle with this to maximise your WSM settings. Default is 0.00025.': '此项可以用来最大化风层数叠加上限的数值。默认值为0.00025。',
    'ATGA MASTER BUTTON': '自动遗传学家总开关',
    'AT Geneticassist. Do not use vanilla GA, as it will conflict otherwise. May get fucky with super high values.': '切换是否启用自动遗传学家。请不要同时启用通常的遗传学家助手，否则可能会冲突。数值过大时可能会出问题。',
    'ATGA: Gen %': '自动遗传学家：通常 %',
    'ATGA: Gen ': '自动遗传学家：通常 ',
    'ATGA: Geneassist ': '自动遗传学家：遗传学家助手 ',
    'ATGA will only hire geneticists if they cost less than this value. E.g if this setting is 1 it will only buy geneticists if they cost less than 1% of your food. Default is 1%.': '自动遗传学家只会在花费低于此百分比时雇佣遗传学家。例如：如果此项设为1，则只在遗传学家花费低于食物总量1%时雇佣遗传学家。默认值为1%。',
    'ATGA: Timer': '自动遗传学家：计时',
    'ATGA Timer': '自动遗传学家计时',
    'This is the default time your ATGA will use.': '自动遗传学家使用的默认计时。',
    'ATGA: T: Before Z': '自动遗传学家：计时：前生效区域',
    'ATGA Timer: Before Z': '自动遗传学家计时：前生效区域',
    'ATGA will use the value you define in ATGA: T: BZT before the zone you have defined in this setting, overwriting your default timer. Useful for Liq or whatever.': '在此区域之前，将使用自动遗传学家计时：前生效区域计时中的数值，忽略默认计时。对液化等有帮助。',
    'ATGA: T: BZT': '自动遗传学家：计时：前生效区域计时',
    'ATGA Timer: Before Z Timer': '自动遗传学家计时：前生效区域计时',
    'ATGA will use this value before the zone you have defined in ATGA: T: Before Z, overwriting your default timer. Useful for Liq or whatever. Does not work on challenges.': '在自动遗传学家计时：前生效区域中设定的区域之前，使用此项的计时，忽略默认计时。对液化等有帮助。在挑战中无效。',
    'ATGA: T: After Z': '自动遗传学家：计时：后生效区域',
    'ATGA Timer: After Z': '自动遗传学家计时：后生效区域',
    'ATGA will use the value you define in ATGA: T: AZT after the zone you have defined in this setting, overwriting your default timer. Useful for super push runs or whatever. Does not work on challenges.': '在此区域之后，将使用自动遗传学家计时：后生效区域计时中的数值，忽略默认计时。对极限冲层等有帮助。在挑战中无效。',
    'ATGA: T: AZT': '自动遗传学家：计时：后生效区域计时',
    'ATGA Timer: After Z Timer': '自动遗传学家计时：后生效区域计时',
    'ATGA will use this value after the zone that has been defined in ATGA: T: After Z, overwriting your default timer. Useful for super push runs or whatever.': '在自动遗传学家计时：后生效区域中设定的区域之后，使用此项的计时，忽略默认计时。对极限冲层等有帮助。',
    'ATGA: T: Spire': '自动遗传学家：计时：尖塔',
    'ATGA Timer: Spire': '自动遗传学家计时：尖塔',
    'ATGA will use this value in Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this except Daily Spire.': '尖塔中使用相应数值计时。会考虑您的尖塔无效层设置。请不要与尖塔选项卡下的繁殖计时同时使用！除了日常尖塔以外，优先于其他任何选项生效。',
    'ATGA: T: Daily Spire': '自动遗传学家：计时：日常尖塔',
    'ATGA Timer: Daily Spire': '自动遗传学家计时：日常尖塔',
    'ATGA will use this value in Daily Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this.': '日常挑战中，尖塔中使用相应数值计时。会考虑您的尖塔无效层设置。请不要与尖塔选项卡下的繁殖计时同时使用！优先于其他任何选项生效。',
    'ATGA: Manual': '自动遗传学家：手动日常',
    'ATGA: Auto No Spire': '自动遗传学家：自动无塔',
    'ATGA: Auto Dailies': '自动遗传学家：自动日常',
    'ATGA: Manual / ATGA: Auto No Spire / ATGA: Auto Dailies': '自动遗传学家：手动日常 / 自动遗传学家：自动无塔 / 自动遗传学家：自动日常',
    'EXPERIMENTAL': '实验性功能',
    'ATGA Timer: Auto Dailies': '自动遗传学家计时：自动日常',
    'ATGA will use automatically set breed timers in plague and bogged, overwriting your default timer.': '切换是否在天灾和泥沼日常挑战中使用相应数值计时，忽略默认计时。',
    'Set No Spire to not override in spire, respecting ignore spire settings.': '设为自动无塔则不会忽略尖塔的设置，会考虑您的尖塔无效层设置。',
    'ATGA: T: Dailies': '自动遗传学家：计时：日常',
    'ATGA Timer: Normal Dailies': '自动遗传学家计时：普通日常',
    'ATGA will use this value for normal Dailies such as ones without plague etc, overwriting your default timer. Useful for pushing your dailies that extra bit at the end. Overwrites Default, Before Z and After Z.': '非天灾等的日常挑战中使用相应数值计时，忽略默认计时。对日常挑战极限冲层有帮助。忽略默认、前生效区域和后生效区域的设置。',
    'ATGA: T: D: Hard': '自动遗传学家：计时：困难日常',
    'ATGA Timer: Hard Dailies': '自动遗传学家计时：困难日常',
    'ATGA will use this value in Dailies that are considered Hard. Such Dailies include plaged, bloodthirst and Dailies with a lot of negative mods. Overwrites Default, Before Z and After Z and normal Daily ATGA Timer.': '在困难的日常挑战中使用相应数值计时，例如有天灾，嗜血或者是负面效果太多的日常挑战。忽略默认、前生效区域、后生效区域和普通日常的设置。',
    'ATGA: T: C': '自动遗传学家：计时：挑战',
    'ATGA Timer: ': '自动遗传学家计时：',
    'ATGA will use this value in C2s. Overwrites Default, Before Z and After Z.': '挑战2中使用相应数值计时。忽略默认、前生效区域和后生效区域的设置。',
    'ATGA: T: C: Hard': '自动遗传学家：计时：困难挑战',
    'ATGA Timer: Hard ': '自动遗传学家计时：困难',
    'ATGA will use this value in C2s that are considered Hard. Electricity, Nom, Toxicity. Overwrites Default, Before Z and After Z and C2 ATGA': '在困难的挑战2中使用相应数值计时，例如电流、美味、毒性等。忽略默认、前生效区域、后生效区域和挑战2的设置。',
    'Turn on Archaeology settings.': '切换是否启用考古学设置。',
    'First string to use in Archaeology. Put the zone you want to stop using this string and start using the second string (Make sure the second string has a value) at the start. I.e: 70,10a,': '考古学中使用的第一个字符串。将想要切换到第二个字符串的区域输入到最前面(并确保第二字符串有相应内容)。例如：70,10a,',
    'Second string to use in Archaeology. Put the zone you want to stop using this string and start using the third string (Make sure the third string has a value) at the start. I.e: 94,10a,': '考古学中使用的第二个字符串。将想要切换到第三个字符串的区域输入到最前面(并确保第三字符串有相应内容)。例如：94,10a,',
    'Third string to use in Archaeology. Make sure this is just your Archaeology string and nothing else. I.e: 10a,': '考古学中使用的第三个字符串。请确保您只输入了相应字符串，不要输入其他内容。例如：10a,',
    'Turn on Mayhem settings.': '切换是否启用暴乱设置。',
    'M: Attack': '暴乱：攻击',
    'Turn this on to ignore your farm settings so It will do maps if you cannot survive the hits you have defined in Maps.': '启用此项后将忽略通常的刷资源设定，在低于地图选项卡下设定的伤害承受次数时就运行地图。',
    'M: Health': '暴乱：生命值',
    'Turn this on to ignore your farm settings so It will do maps if your HD is above the target you have defined in Maps.': '启用此项后将忽略通常的刷资源设定，在高于地图选项卡下设定的生命伤害比时就运行地图。',
    'M: Attack Boss': '暴乱：攻击首领',
    'What cut-off to use when farming for the boss using M: Attack. If this setting is 100, the script will farm till you can kill the boss in 100 average hits.': '当使用暴乱：攻击时，为了击杀首领刷资源的界限值。如果此项设为100，则会刷资源，直到可以在平均100次攻击内击杀首领。',
    'M: Attack Map': '暴乱：攻击地图',
    'What cut-off to use when farming maps using M: Attack and M: Smart Map. If this setting is 10, the script will do maps you can kill cells in 10 average hits.': '当使用暴乱：攻击和暴乱：智能地图时地图的界限值。如果此项设为10，则会选择可以在平均10次攻击内通过格子的地图。',
    'M: Health Cut-off': '暴乱：生命值界限',
    'What cut-off to use when using M: Health.': '当使用暴乱：生命值时的界限值。',
    'M: Maps Off': '暴乱：关闭地图',
    'M: Highest Map': '暴乱：最高地图',
    'M: Smart Map': '暴乱：智能地图',
    'M: Maps Off / M: Highest Map / M: Smart Map': '暴乱：关闭地图 / 暴乱：最高地图 / 暴乱：智能地图',
    'Control what maps you do to farm M: Attack and/or M: Health. M: Highest map always selects the highest map you have whether it be from Praiding, Time Farming or any you have manually created. M: Smart Map attempts to create a map best suited to the situation. Will calculate if you can survive and kill the map, and will try to buy all the necessary map attributes such as FA.': '控制在暴乱：攻击及暴乱：生命值激活时选择的地图。暴乱：最高地图总是选择最高级的地图，无论是重铸袭劫、定时刷图还是手动制造的地图。暴乱：智能地图会尝试制造最适合当前情况的地图。会计算您是否能够承受住伤害并通过地图，并且在有必要的时候会使用特殊修饰符。',
    'Turn on Storm settings. This also controls the entireity of Storm settings. If you turn this off it will not do anything in Storm.': '切换是否启用风暴设置。所有风暴设置的总开关。如果关闭此项则风暴的其他设置均失效。',
    'S: Zone': '风暴：区域',
    'What zone to start S: H:D and S: Multiplier.': '从此区域开始考虑风暴：生命伤害比和风暴：倍率。',
    'S: H:D': '风暴：生命伤害比',
    'What H:D to use inside Storm.': '风暴所使用的生命伤害比。',
    'S: Multiplier': '风暴：倍率',
    'Starting from the zone above S: Zone, this setting will multiply the H:D you have set in S: H:D. So if S: Zone was 100, S: H:D was 10, S: Multiplier was 1.2, at z101 your H:D target will be 12, then at z102 it will be 14.4 and so on. This way you can account for the zones getting stronger and you will not waste time farming for a really low H:D.': '从风暴：区域中设置的区域开始，将风暴：生命伤害比中设置的数量乘以相应的倍率。这意味着如果风暴：区域设置为100，风暴：生命伤害比设置为10，风暴：倍率设置为1.2，则在区域101时您的生命伤害比目标将变成12，区域102将变成14.4，依此类推。通过此项设置您可以考虑到区域变难的情况，同时也不需要在生命伤害比较低的时候浪费时间刷资源。',
    'Turn on Insanity settings. This also controls the entireity of IF. If you turn this off it will not Insanity Farm.': '切换是否启用失智设置。所有失智设置的总开关。如果关闭此项则失智的其他设置均失效。',
    'Farms for specified stacks in IF: Stacks at zone according to this settings value. Can use 108,109,110.': '在特定的区域，以刷失智层数：层数中设置的数量来刷失智层数。可以输入多个数值，格式类似108,109,110这样。',
    'IF: Cell': '刷失智层数：格子',
    'Insanity Farm at this Cell. -1 to run them at the default value, which is 1.': '在此格子开始刷失智层数。设为-1则在默认值时开始刷失智层数，即格子1。',
    'How many stacks to farm at zone specified in IF. Can use 300,400,500. These values should match up to your IF zones. If using IF and IF: Stacks examples (110 and 500) it will farm at z110 for 500 stacks of insanity. If stacks specified are above maximum Insanity Stacks, it will farm for maximum.': '刷失智层数时在相应的区域刷到多少层。可以输入多个数值，格式类似300,400,500这样。请让此项的数值与刷失智层数：区域的数值能够一一对应。例如：将刷失智层数：区域设为110，刷失智层数：层数设为500的话，将在区域110刷到500层失智为止。如果层数超过了上限，则会刷到上限为止。',
    'What map level to use. Can use -1,1,2. -1 to use a level down from world (This is how to remove insanity stacks), 0 to use world, 1 etc to use +maps. Using 0 by itself will use global level for all maps.': '刷失智层数时使用的地图等级。可以输入多个数值，格式类似-1,1,2这样。设为-1则使用比当前区域低一级的地图(从而减少失智层数)，设为0则与世界区域数相等，1及以上则使用额外区域。只设为0的话，则所有地图都使用与世界区域数相等的等级。',
    'Turn this on to farm fragments if you cannot afford the map you have selected for IF.': '开启此项后，如果碎片不足以制造刷失智层数所需要的地图，则会先刷碎片。',
    'Turn on Exterminate settings. This also controls the entireity of Exterminate. If you turn this off it will not calculate Exterminate.': '切换是否启用灭虫设置。所有灭虫设置的总开关。如果关闭此项则灭虫的其他设置均失效。',
    'E: Calc': '灭虫：计算',
    'Calculate Exterminate enemies instead of the usual ones. May improve your challenge experience.': '将灭虫的敌人纳入计算。可能会使灭虫挑战更容易。',
    'E: Equality': '灭虫：平等',
    'Will manage your equality \'better\' inside the challenge. When you have the experienced buff it will turn it off, when you dont it will turn it on and let it build up.': '在灭虫挑战中更好地管理平等层数。在您获得了经验丰富效果以后将关闭平等效果，如果没有经验丰富效果，则平等效果正常生效并正常进行平等缩放。',
    'Enables the Lab setting in Buildings and building labs through it.': '切换是否开启建筑选项卡下的实验室设置，并根据它自动建造实验室。',
    'Better AutoFight OFF': '关闭改良自动战斗',
    'Better Auto Fight': '开启改良自动战斗',
    'Vanilla': '通常自动战斗',
    'Better AutoFight OFF / Better Auto Fight / Vanilla': '关闭改良自动战斗 / 开启改良自动战斗 / 通常自动战斗',
    '3-Way Button, Recommended. Will automatically handle fighting.': '建议开启。将控制自动战斗。',
    'BAF = Old Algo (Fights if dead, new squad ready, new squad breed timer target exceeded, and if breeding takes under 0.5 seconds': '开启改良自动战斗时，在军队阵亡、新的军队准备就绪、新的军队繁殖计时超过设置数值、繁殖计时低于0.5秒的情况下进行战斗',
    'BAF3 = Uses vanilla autofight and makes sure you fight on portal.': '通常自动战斗则使用通常的自动战斗方式，但保证传送后能够立刻开始战斗。',
    'WARNING: If you autoportal with BetterAutoFight disabled, the game may sit there doing nothing until you click FIGHT. (not good for afk': '注意：如果关闭自动战斗，传送后可能会卡住不动，需要手动点击战斗按钮才恢复正常。(可能影响挂机模式',
    'Auto Stance OFF': '关闭自动阵型',
    'Auto Stance': '开启自动阵型',
    'D Stance': '常时D阵型',
    'Auto Stance OFF / Auto Stance / D Stance / Windstacking': '关闭自动阵型 / 开启自动阵型 / 使用D阵型 / 风层数叠加',
    'Autostance': '自动阵型',
    'Automatically swap stances to avoid death.': '自动切换阵型以避免死亡。',
    'Keeps you in D stance regardless of Health.': '无视生命值，常时使用D阵型。',
    'For use after nature (z230), and will keep you in D stance unless you are windstacking (Only useful if transfer is maxed out and wind empowerment is high). Manages your Heirloom swapping and stance to obtain wind stacks efficiently. You must set your High Dmg and Low Dmg Heirlooms, Windstack H:D or WSMAX H:D where relevant for this to work.': '用于230层以后，除非您正在进行风层数叠加，否则常时使用D阵型(只在层数传递率已满且风赋能等级较高时有用)。合理设置高伤传家宝和低伤传家宝可以较有效率地获得风层数。必须设置高伤传家宝和低伤传家宝、风层数叠加生命伤害比或风层数叠加上限生命伤害比等相关设置才能正常工作。',
    'Safety First': '安全为先',
    'Ignore Void Strength': '忽略虚空暴击',
    'Ignore All Crits': '忽略所有暴击',
    'Safety First / Ignore Void Strength / Ignore All Crits': '安全为先 / 忽略虚空暴击 / 忽略所有暴击',
    'No longer switches to B against corrupted precision and/or void strength.': '当面对腐化精准及/或虚空暴击敌人时，不再切换到B阵型。',
    'Basically we now treat \'crit things\' as regular in both autoStance and': '事实上在自动阵型中我们已经不再区分这两种敌人与普通敌人了',
    '. In fact it no longer takes precision / strength into account and will manage like a normal enemy, thus retaining X / D depending on your needs. If you\'re certain your block is high enough regardless if you\'re fighting a crit guy in a crit daily, use this! Alternatively, manage the stances yourself.': '，只会考虑X阵型或D阵型。如果您进入了一个有着暴击敌人的日常挑战，且您确信格挡足够高，那么可以考虑此项。否则没有必要开启此项。',
    'AutoAbandon': '开启自动放弃士兵',
    'Don\'t Abandon': '关闭自动放弃士兵',
    'Only Rush Voids': '只在速刷虚空时放弃',
    'AutoAbandon / Don\'t Abandon / Only Rush Voids': '开启自动放弃士兵 / 关闭自动放弃士兵 / 只在速刷虚空时放弃',
    'Autoabandon': '自动放弃士兵',
    'Considers abandoning trimps for void maps/prestiges.': '当进入虚空地图或获取重铸升级时考虑放弃士兵。',
    'Will not abandon troops, but will still agressively autostance even if it will kill you (WILL NOT ABANDON TRIMPS TO DO VOIDS).': '不会放弃士兵，将采取激进的自动阵型，即使这样会导致士兵阵亡(不会在进入虚空地图时放弃士兵)。',
    'Considers abandoning trimps for void maps, but not prestiges, still autostances aggressively.': '当进入虚空地图时考虑放弃士兵，获取重铸升级时则不考虑，仍然采取激进的自动阵型。',
    'Made for Empower daily, and you might find this helpful if you\'re doing Workplace Safety feat. Then again with that I strongly recommend doing it fully manually. Anyway, don\'t blame me whatever happens.': '用于赋能日常挑战，对于完成安全生产壮举也有帮助，不过仍然建议手动完成它。自动完成的话，可能会发生意料之外的情况，请知悉。',
    'Note': '注意',
    'AT will no longer be able to fix when your scryer gets stuck!': '当使用占卜阵型卡住时将无法自动放弃从而脱离死循环！',
    'Trimpicide': '预期放弃士兵',
    'If a new fight group is available and anticipation stacks aren\'t maxed, Trimpicide and grab a new group. Will not abandon in spire. Recommended ON.': '当新的军队准备就绪且当前军队预期层数未满时，放弃士兵。不会在尖塔中放弃士兵。建议启用。',
    'Dynamic Gyms': '动态健身房',
    'Designed to limit your block to slightly more than however much the enemy attack is. If MaxGyms is capped or GymWall is set, those will still work, and this will NOT override those (works concurrently), but it will further limit them. In the future it may override, but the calculation is not easy to get right so I dont want it undo-ing other things yet.': '将格挡限制为刚好比敌人攻击高一点。如果设置了健身房最大值或健身房墙，会尽可能满足这两个值的范围。但如果需要，也会忽略这两个值的数值。',
    'AutoRoboTrimp': '自动脆皮机器人',
    'Use RoboTrimps ability starting at this level, and every 5 levels thereafter. (set to 0 to disable. default 60.) 60 is a good choice for mostly everybody.': '脆皮机器人从相应层数开始激活，并且之后每5层激活一次。(设为0则关闭此选项。默认值为60。)60适用于大多数情况。',
    'Fight Always': '常时战斗',
    'U1: -1 to disable. Sends trimps to fight if they\'re not fighting, regardless of BAF. Has 2 uses. Set to 0 to always send out trimps. Or set a number higher than 0 to enable the H:D function. If the H:D ratio is below this number it will send them out. I.e, this is set to 1, it will send out trimps regardless with the H:D ratio is below 1.': '宇宙1：设为-1则关闭此选项。当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。此项有两种用法。设为0则常时进行战斗。设为大于0的数值则激活生命伤害比功能，当生命伤害比低于此数值时进行战斗。例如，将此项设为1，则将在生命伤害比低于1时进行战斗。',
    'Experimental.': '实验性功能。',
    'Adds poison to the battlecalc. May improve your poison zone speed.': '将毒赋能效果加入计算。可能会使毒区域的通过时间更短。',
    'Ice Calc': '冰赋能计算',
    'Always calculates your ice to be a consistent level instead of going by the enemy debuff. Stops H:D spazzing out.': '使用一个常量来计算冰赋能效果，而不是随着敌人身上的效果来计算。可以防止生命伤害比数值抽风。',
    'Antistack Calc': '预期层数计算',
    'Always calcs your damage as having full antistacks. Useful for windstacking.': '计算伤害时假设已获得最大预期层数。在风层数叠加时会很有用。',
    'U2: -1 to disable. Sends trimps to fight if they\'re not fighting, regardless of BAF. Has 2 uses. Set to 0 to always send out trimps. Or set a number higher than 0 to enable the H:D function. If the H:D ratio is below this number it will send them out. I.e, this is set to 1, it will send out trimps regardless with the H:D ratio is below 1.': '宇宙2：设为-1则关闭此选项。当脆皮没有在战斗时，自动让它们开始战斗，无视改良自动战斗的设置。此项有两种用法。设为0则常时进行战斗。设为大于0的数值则激活生命伤害比功能，当生命伤害比低于此数值时进行战斗。例如，将此项设为1，则将在生命伤害比低于1时进行战斗。',
    'Equality Calc Off': '关闭平等计算',
    'EC: On': '开启平等计算',
    'EC: Health': '平等计算：生命值',
    'Equality Calc Off / EC: On / EC: Health': '关闭平等计算 / 开启平等计算 / 平等计算：生命值',
    'Adds Equality Scaling levels to the battlecalc. Will always calculate equality based on actual scaling levels when its turned off by other settings. Assumes you use Equality Scaling. Turning this on allows in-game Equality Scaling to adjust your Health accordingly. EC: Health only decreases enemies attack in the calculation which may improve speed.': '将平等缩放等级加入计算。当平等缩放被其他设置关闭时，将总是根据实际缩放等级来进行计算。计算时假设您已经开启平等缩放。开启此项后可以根据生命值直接调整平等缩放的层数。平等计算：生命值在计算过程中只减少敌人攻击力，可能会提高计算速度。',
    'Manage Equality': '管理平等等级',
    'Manages Equality for you. Sets Equality to 0 on Slow enemies, and Autoscaling on for Fast enemies.': '自动管理平等等级。在非快速敌人身上将平等生效等级设置为0，在快速敌人身上正常进行平等缩放。',
    'Enable Scryer Stance': '开启占卜者阵型',
    'Activates all other scrying settings, and overrides AutoStance when scryer conditions are met. Leave regular Autostance on while this is active. Scryer gives 2x Resources (Non-Helium/Nullifium) and a chance for Dark Essence. Once this is on, priority for Scryer decisions goes as such': '启用所有其他的占卜者阵型设置，满足占卜者阵型条件时，忽略自动阵型的设置。占卜者阵型可以获得2倍资源(非氦及虚空物质)，且可以获得黑暗精华。开启后，占卜者阵型优先级按照以下规律来考虑',
    'NEVER USE, FORCE USE, OVERKILL, MIN/MAX ZONE': '永不使用，强制使用，超杀，最低/最高区域',
    'NO OTHER BUTTONS WILL DO ANYTHING IF THIS IS OFF.': '如果此项关闭，其他所有占卜者阵型的按钮都将无效。',
    'Use When Overkill': '超杀时使用阵型',
    'Overrides everything! Toggles stance when we can Overkill in S, giving us double loot with no speed penalty (minimum one overkill, if you have more than 1, it will lose speed': '忽略其他任何相关设置！当可以在占卜者阵型下超杀敌人时，切换阵型，以此在速度不变的前提下获得双倍资源(按超杀1格计算，如果超杀格子超过1格则可能减速',
    'This being on, and being able to overkill in S will override ALL other settings': '开启此项后，只要可以在占卜者阵型下超杀敌人时，将忽略最低/最高区域设置',
    'Except never use in spire': '唯一的例外是尖塔设为永不使用',
    '. This is a boolean logic shortcut that disregards all the other settings including Min and Max Zone. If you ONLY want to use S during Overkill, as a workaround: turn this on and Min zone: to 9999 and everything else off(red).': '。如果您只想在超杀时使用占卜者阵型，那可以如下进行设置：开启此项，并将最低区域设为9999，其他所有选项关闭(按钮红色)。',
    'Min Zone': '最低区域',
    'Minimum zone to start using scryer in.(inclusive) Recommend:(60 or 181). Overkill ignores this. This needs to be On & Valid for the': '开始使用占卜者阵型的最低区域(包含该数值)。建议值：(60或181)。超杀选项忽略此项设置。如果关闭超杀选项，则需要启用此项并设置合理的数值后，其他占卜者阵型中的 ',
    'MAYBE': '可能使用',
    'option on all other Scryer settings to do anything if Overkill is off. Tip: Use 9999 to disable all Non-Overkill, Non-Force, scryer usage.': '选项才能生效。提示：设为9999可以使所有非超杀和非强制的设置中不使用占卜者阵型。',
    'Max Zone': '最高区域',
    '0 or -1 to disable (Recommended': '设为0或-1则关闭此选项(建议',
    'Overkill ignores this. Zone to STOP using scryer at (not inclusive). Turning this ON with a positive number stops': '超杀选项忽略此项设置。停止使用占卜者阵型的最高区域(不包含该数值)。设为正数后，其他占卜者阵型中的',
    'use of all other Scryer settings.': '选项在相应区域停止使用阵型。',
    'World Min & Max Only': '只在世界上启用',
    'Forces Scryer to only work in world regardless of other settings.': '强制占卜者阵型只在世界上启用，忽略下方任何设置。',
    'Maps: NEVER': '地图：永不使用',
    'Maps: FORCE': '地图：强制使用',
    'Maps: MAYBE': '地图：可能使用',
    'Maps: NEVER / Maps: FORCE / Maps: MAYBE': '地图：永不使用 / 地图：强制使用 / 地图：可能使用',
    'NEVER': '永不使用',
    'Means what it says!!!': '如字面所示！！！',
    'FORCE': '强制使用',
    'means Scryer will ALWAYS activate in Maps': '意味着地图中将总是使用占卜者阵型',
    'means that Overkill and Min/Max use are allowed.': '意味着超杀设置及最低/最高区域设置生效。',
    'This setting requires use on Corrupteds to be on after corruption/magma.': '在腐化/岩浆区域后的地图设置由腐化选项控制。',
    'Recommend MAYBE.': '建议设为可能使用。',
    'VoidMaps: NEVER': '虚空地图：永不使用',
    'VoidMaps: FORCE': '虚空地图：强制使用',
    'VoidMaps: MAYBE': '虚空地图：可能使用',
    'VoidMaps: NEVER / VoidMaps: FORCE / VoidMaps: MAYBE': '虚空地图：永不使用 / 虚空地图：强制使用 / 虚空地图：可能使用',
    'means Scryer will ALWAYS activate in Void Maps': '意味着虚空地图中将总是使用占卜者阵型',
    'P Maps: NEVER': '重铸地图：永不使用',
    'P Maps: FORCE': '重铸地图：强制使用',
    'P Maps: MAYBE': '重铸地图：可能使用',
    'P Maps: NEVER / P Maps: FORCE / P Maps: MAYBE': '重铸地图：永不使用 / 重铸地图：强制使用 / 重铸地图：可能使用',
    'means Scryer will ALWAYS activate in maps higher than your zone': '意味着高于当前区域等级的地图中将总是使用占卜者阵型',
    'Recommend NEVER.': '建议设为永不使用。',
    'BW: NEVER': '仿生仙境：永不使用',
    'BW: FORCE': '仿生仙境：强制使用',
    'BW: MAYBE': '仿生仙境：可能使用',
    'BW: NEVER / BW: FORCE / BW: MAYBE': '仿生仙境：永不使用 / 仿生仙境：强制使用 / 仿生仙境：可能使用',
    'means Scryer will ALWAYS activate in BW Maps': '意味着仿生仙境地图中将总是使用占卜者阵型',
    'This setting requires use in Maps to be on.': '此项需要地图选项设为使用。',
    'Spire: NEVER': '尖塔：永不使用',
    'Spire: FORCE': '尖塔：强制使用',
    'Spire: MAYBE': '尖塔：可能使用',
    'Spire: NEVER / Spire: FORCE / Spire: MAYBE': '尖塔：永不使用 / 尖塔：强制使用 / 尖塔：可能使用',
    'means Scryer will ALWAYS activate in the Spire': '意味着尖塔中将总是使用占卜者阵型',
    'This setting requires use on Corrupteds to be on for corrupted enemies.': '此项需要腐化选项设为使用才能对腐化敌人生效。',
    'Boss: NEVER (All Levels': '首领：永不(所有',
    'Boss: NEVER (Above VoidLevel': '首领：永不(虚空以上',
    'Boss: MAYBE': '首领：可能使用',
    'Boss: NEVER (All Levels) / Boss: NEVER (Above VoidLevel) / Boss: MAYBE': '首领：永不(所有) / 首领：永不(虚空以上) / 首领：可能使用',
    'NEVER (All Levels': '永不(所有',
    'will NEVER use S in cell 100 of the world!!!': '永远不会在世界上的格子100启用占卜者阵型！！！',
    'NEVER (Above VoidLevel': '永不(虚空以上',
    'will NEVER use S in cell 100 of the world ABOVE the zone that your void maps are set to run at (Maps).': '超过虚空地图运行的区域(地图选项卡下设定)之后，永远不会在世界上的格子100启用占卜者阵型。',
    'treats the cell no differently to any other, Overkill and Min/Max Scryer is allowed.': '将此格子与其他格子同等对待，意味着超杀设置及最低/最高区域设置生效。',
    'Recommend NEVER (There is little benefit to double NON-HELIUM resources and a small chance of DE).': '建议设为永不使用(设为使用也无法获得多少资源和黑暗精华)。',
    'Corrupted: NEVER': '腐化：永不使用',
    'Corrupted: FORCE': '腐化：强制使用',
    'Corrupted: MAYBE': '腐化：可能使用',
    'Corrupted: NEVER / Corrupted: FORCE / Corrupted: MAYBE': '腐化：永不使用 / 腐化：强制使用 / 腐化：可能使用',
    'means Scryer will ALWAYS activate against Corrupted enemies': '意味着面对腐化敌人时将总是使用占卜者阵型',
    'Magma maps and Corrupted Voidmaps are currently classified as corrupted': '岩浆区域的地图和腐化虚空地图目前被视为全是腐化敌人',
    'and NEVER here will override Maps and Voidmaps use of Scryer': '而如果设为永不使用，则地图中和虚空地图中都将不会使用占卜者阵型',
    'Healthy: NEVER': '健康：永不使用',
    'Healthy: FORCE': '健康：强制使用',
    'Healthy: MAYBE': '健康：可能使用',
    'Healthy: NEVER / Healthy: FORCE / Healthy: MAYBE': '健康：永不使用 / 健康：强制使用 / 健康：可能使用',
    'means Scryer will ALWAYS activate against Healthy enemies': '意味着面对健康敌人时将总是使用占卜者阵型',
    'Corrupted Voidmaps are currently classified as Healthy (same as corrupted': '腐化虚空地图目前被视为全是健康敌人(同时全是腐化敌人',
    'Scry in Poison': '毒区域占卜者阵型',
    'Decides what you do in Poison.': '设置毒区域中的行为。',
    '= Maybe': '则等同于可能使用',
    '= Never': '则等同于永不使用',
    '= Max Zone you want it scrying': '则等同于使用占卜者阵型的最高区域',
    'Scry in Wind': '风区域占卜者阵型',
    'Decides what you do in Wind.': '设置风区域中的行为。',
    'Scry in Ice': '冰区域占卜者阵型',
    'Decides what you do in Ice.': '设置冰区域中的行为。',
    'Die To Use S': '阵亡以使用占卜者阵型',
    '1 to disable.': '1则关闭此选项。',
    'Turning this on will switch you back to S even when doing so would kill you. Happens in scenarios where you used Skip Corrupteds that took you into regular Autostance X/H stance, killed the corrupted and reached a non-corrupted enemy that you wish to use S on, but you havent bred yet and you are too low on health to just switch back to S. So you\'d rather die, wait to breed, then use S for the full non-corrupted enemy, to maximize DE. NOTE: Use at your own risk.': '开启后在会导致阵亡的情况下仍然切换到占卜者阵型。在以下的情况会有用：您设置了腐化永不使用，在腐化格子切换到了X/H阵型，在击杀腐化敌人后碰到了一个非腐化的敌人，您想要切换为占卜者阵型，但此时繁殖计时不足，生命值无法让您自动切换回占卜者阵型。此时您更希望让士兵阵亡，等待繁殖，然后在此敌人身上再切换回占卜者阵型，以获得最多的黑暗精华。注意：使用此项风险自负。',
    'Use this input to set the minimum zone that scryer activates in (You can use decimal values to specify what cell this setting starts from': '输入相应数值来设定占卜者阵型启用的最小区域(还可以输入小数以设定启用的格子',
    'Remaining Essence Only': '只在剩余精华时启用',
    'Why scry when theres no essence? Turns off scrying when the remaining enemies with essence drops to 0.': '没有黑暗精华时何必开启占卜者阵型？当前地图无敌人拥有黑暗精华后不使用占卜者阵型。',
    'Auto Generator': '自动维度发生器',
    'Turn this on to use these settings.': '开启此项以使用下面的功能。',
    'Gain Mi / Gain Fuel / Hybrid': '得岩浆岩 / 得燃料 / 混合型',
    'MODE BEFORE FUELING': '得燃料前的模式',
    'Which mode to use before fueling. This is the mode which the generator will use if you fuel after z230.': '切换得燃料前使用的模式。区域230后生效。',
    'Start Fuel Z': '得燃料起始区域',
    'Start fueling at this zone instead of 230. I would suggest you have a value lower than your max, for obvious reasons. Recommend starting at a value close-ish to your max supply. Use 230 to use your': '从此区域开始得燃料，而不是从区域230开始。最好设为低于最大区域的数值。建议设为接近供给对应最大区域的数值。设为230则直接使用',
    'BEFORE FUEL': '得燃料前',
    'setting.': '的设置。',
    'End Fuel Z': '得燃料结束区域',
    'End fueling at this zone. After this zone is reached, will follow your preference. -1 to fuel infinitely.': '从此区域起停止得燃料。到达相应区域后，按照其他选项的设置来决定模式。设为-1则常时得燃料。',
    'MODE AFTER FUELING': '得燃料后的模式',
    'Which mode to use after fueling.': '切换得燃料后使用的模式。',
    'Daily: Normal': '日常：普通',
    'Daily: Fuel': '日常：得燃料',
    'Daily: Hybrid': '日常：混合型',
    'Daily: Normal / Daily: Fuel / Daily: Hybrid': '日常：普通 / 日常：得燃料 / 日常：混合型',
    'Normal': '普通',
    'Uses the AutoGen settings.': '使用其他选项的设置。',
    'Fuels the entire Daily.': '日常挑战全程使用得燃料。',
    'Uses Hybrid for the entire Daily.': '日常挑战全程使用混合型。',
    'C2: Normal': '挑战2：普通',
    'C2: Fuel': '挑战2：得燃料',
    'C2: Hybrid': '挑战2：混合型',
    'C2: Normal / C2: Fuel / C2: Hybrid': '挑战2：普通 / 挑战2：得燃料 / 挑战2：混合型',
    'Fuels the entire C2.': '挑战2全程使用得燃料。',
    'Uses Hybrid for the entire C2.': '挑战2全程使用混合型。',
    'Spend Magmite OFF': '关闭分配岩浆岩',
    'Spend Magmite (Portal': '分配岩浆岩(传送时',
    'Spend Magmite Always': '常时分配岩浆岩',
    'Spend Magmite OFF / Spend Magmite (Portal) / Spend Magmite Always': '关闭分配岩浆岩 / 分配岩浆岩(传送时) / 常时分配岩浆岩',
    'Auto Spends any unspent Magmite immediately before portaling. (Or Always, if toggled). Part 1 buys any permanent one-and-done upgrades in order from most expensive to least. Part 2 then analyzes Efficiency vs Capacity for cost/benefit, and buys Efficiency if its BETTER than Capacity. If not, if the PRICE of Capacity is less than the price of Supply, it buys Capacity. If not, it buys Supply. And then it repeats itself until you run out of Magmite and cant buy anymore.': '根据选项，在不同情况下自动分配岩浆岩。首先尝试从最贵到最便宜购买一次性升级。然后对比效率与容量的性价比，如果效率性价比更高，则购买之，否则对比容量和供给的成本，购买成本更低的升级。然后一直重复此过程，直到岩浆岩不足以购买任何升级为止。',
    'Ratio Spending': '按比例分配',
    'Spends Magmite in a Ratio you define.': '按照后面定义的比例分配岩浆岩。',
    'Use -1 or 0 to not spend on this. Any value above 0 will spend.': '设为-1或0则不分配岩浆岩。设为0以上的数值则会分配。',
    'Throttle Supply (or Capacity': '控制供给的分配(或容量',
    'Positive number NOT 1 e.g. 2.5: Consider Supply when its cost * 2.5 is < Capacity, instead of immediately when < Cap. Effectively throttles supply for when you don\'t need too many.': '设为非1的正数时，例如2.5，则当供给成本的2.5倍低于容量成本时才购买供给。当不需要太多供给时，可以有效地控制。',
    'Negative number (-1 is ok) e.g. -2.5: Consider Supply if it costs < Capacity * 2.5, buy more supplys! Effectively throttling capacity instead.': '设为负数(包括-1也可以)时，例如-2.5，则则当供给成本低于容量成本的2.5倍时才购买供给。此时反过来控制容量。',
    'Set to 1: DISABLE SUPPLY only spend magmite on Efficiency, Capacity and Overclocker. Always try to get supply close to your HZE.': '设为1：完全不购买供给，只考虑其他三项。请在供给接近最高通过区域时再设为这个。',
    'Set to 0: IGNORE SETTING and use old behaviour (will still try to buy overclocker': '设为0：此项无效，按照1：1的比例计算(同时会尝试购买超频',
    'Normal & No OC': '普通且无超频',
    'OneTime Only': '只购买一次性升级',
    'OneTime & OC': '一次性升级且有超频',
    'Normal / Normal & No OC / OneTime Only / OneTime & OC': '普通 / 普通且无超频 / 只购买一次性升级 / 一次性升级且无超频',
    'Spends Magmite Normally as Explained in Magmite spending behaviour.': '如岩浆岩分配方式所述，分配岩浆岩。',
    'Same as normal, except skips OC afterbuying 1 OC upgrade.': '与普通效果类似，但在购买1次超频升级后不再购买超频升级。',
    'Only Buys the One off upgrades except skips OC afterbuying 1 OC upgrade.': '只购买一次性升级，在购买1次超频升级后不再购买超频升级。',
    'Buys all One off upgrades, then buys OC only.': '购买所有一次性升级，然后只购买超频升级。',
    'Magmite spending behaviour': '岩浆岩分配方式',
    '1. Buy one-and-done upgrades, expensive first, then consider 1st level of Overclocker;': '1、购买一次性升级，从最贵的开始，然后尝试升级1级超频；',
    '2. Buy Overclocker IF AND ONLY IF we can afford it;': '2、当且仅当岩浆岩足够时升级超频；',
    '2.5. Exit if OneTimeOnly': '2.5、如果设置了只购买一次超频升级，那么之后不再考虑超频升级',
    '3. Buy Efficiency if it is better than capacity;': '3、如果效率比容量更好，则购买效率；',
    '4. Buy Capacity or Supply depending on which is cheaper, or based on SupplyWall': '4、对比容量和供给的成本，考虑控制分配的数值，购买成本更低的升级(译者注：不用点进去了，图更看不懂)',
    'MagmiteExplain': '岩浆岩分配方式解释',
    'Enter the name of your high damage heirloom. This is your heirloom that you will use normally.': '输入您较高伤害的传家宝名称。这将是正常情况下使用的传家宝。',
    'Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking.': '输入您较低伤害的传家宝名称。这将是用于风层数叠加的传家宝。',
    'Heirloom Swapping': '传家宝切换',
    'Heirloom swapping master button. Turn this on to allow heirloom swapping and its associated settings.': '传家宝切换总开关。开启后相应的切换选项才能生效。',
    'HS: Zone': '传家宝切换：区域',
    'Which zone to swap from your first heirloom you have defined to your second heirloom you have defined. I.e if this value is 75 it will switch to the second heirloom': '传家宝从第一切换到第二的区域。例如：此项设为75则将切换到第二传家宝',
    'on z': '于区域',
    'First Heirloom to use': '使用的第一传家宝',
    'Enter the name of your first heirloom. This is the heirloom that you will use before swapping to the second heirloom at the zone you have defined in the HS: Zone.': '输入第一传家宝的名称。在传家宝切换：区域之前使用。',
    'Second Heirloom to use': '使用的第二传家宝',
    'Enter the name of your second heirloom. This is the heirloom that you will use after swapping from the first heirloom at the zone you have defined in the HS: Zone.': '输入第二传家宝的名称。在传家宝切换：区域之后使用。',
    'Auto Heirlooms': '自动筛选传家宝',
    'Auto Heirlooms master button. Turn this on to enable all Auto Heirloom settings.': '自动筛选传家宝总开关。开启后相应的传家宝选项才能生效。',
    'The Modifier points will be explained here.': '传家宝修饰符分值解释如下。',
    'The more points an heirloom has, the better chance it has of being kept. If empty is selected, it will muliplty the score by 4. If any is selected, it will multiply the score of the heirloom by 2.': '传家宝的修饰符分值越高，就越优先被保留下来。每有一个修饰符选择了空，就将总分乘以4倍。',
    'E.g Mod 1 = CC (+6 if dropped, 1st modifier': '例如：修饰符 1 = 暴击率(掉落时+6分',
    'Mod 2 = CD (+5 if dropped, 2nd modifier': '修饰符 2 = 暴击伤害(掉落时+5分',
    'Mod 3 = PB (+4 if dropped, 3rd modifier': '修饰符 3 = 瘟疫使者(掉落时+4分',
    'Mod 4 = Empty (x4 if dropped, +0 if not': '修饰符 4 = 空(掉落时x4倍，否则不加分',
    'Mod 5 = Empty (x4 if dropped, +0 if not': '修饰符 5 = 空(掉落时x4倍，否则不加分',
    'If an heirloom dropped with these exact modifiers, it would get a score of 192 (6+5+4*4*4=240). The highest point heirlooms will be kept.': '如果掉落了以上修饰符的传家宝，则总分为240 [(6+5+4)*4*4=240]。优先保留分值较高的传家宝。',
    'Shields': '盾牌',
    'Staffs': '权杖',
    'Cores': '核心',
    'None / Shields / Staffs / Cores / All': '无 / 盾牌 / 权杖 / 核心 / 全部',
    'Keeps Shields and nothing else.': '只保留盾牌。',
    'Keeps Staffs and nothing else.': '只保留权杖。',
    'Keeps Cores and nothing else.': '只保留核心。',
    'Keeps 4 Shields and 3 Staffs and 3 Cores. If you have protected heirlooms in your inventory it will overrite one slot. E.g if one heirloom is protected, you will keep 4 Shields and 3 Staffs and 2 Cores.': '保留4个盾牌，3个权杖和3个核心。如果携带栏有保护的传家宝则会少保留相应的数量。例如：如果拥有一个保护的传家宝，则只会保留保留4个盾牌，3个权杖和2个核心。',
    'Rarity to Keep': '保留稀有度选项',
    'Auto Heirlooms. Keeps the selected rarity of heirloom, recycles all others.': '只保留与此项稀有度相同的传家宝，回收其余稀有度的传家宝。',
    'Any': '任何',
    'Auto Heirlooms. Enables in-depth shield settings.': '开启进一步设置盾牌传家宝的选项。',
    'Shield: Modifier': '盾牌：修饰符',
    'empty': '空',
    'playerEfficiency': '玩家效率',
    'trainerEfficiency': '训练师效率',
    'storageSize': '存储上限',
    'breedSpeed': '脆皮繁殖速度',
    'trimpHealth': '脆皮生命值',
    'trimpAttack': '脆皮攻击力',
    'trimpBlock': '脆皮格挡',
    'critDamage': '暴击伤害',
    'critChance': '暴击率',
    'voidMaps': '虚空地图掉落概率',
    'plaguebringer': '瘟疫使者效果',
    'prismatic': '棱镜护盾',
    'gammaBurst': '伽马爆发',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 1 is worth 6 points.': '优先保留有相应修饰符的盾牌。修饰符 1价值6分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 2 is worth 5 points.': '优先保留有相应修饰符的盾牌。修饰符 2价值5分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 3 is worth 4 points.': '优先保留有相应修饰符的盾牌。修饰符 3价值4分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 4 is worth 3 points.': '优先保留有相应修饰符的盾牌。修饰符 4价值3分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 5 is worth 2 points.': '优先保留有相应修饰符的盾牌。修饰符 5价值2分。',
    'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 6 is worth 1 points.': '优先保留有相应修饰符的盾牌。修饰符 6价值1分。',
    'Auto Heirlooms. Enables in-depth staff settings.': '开启进一步设置权杖传家宝的选项。',
    'Staff: Modifier': '权杖：修饰符',
    'metalDrop': '金属掉落加成',
    'foodDrop': '食物掉落加成',
    'woodDrop': '木头掉落加成',
    'gemsDrop': '宝石掉落加成',
    'fragmentsDrop': '碎片掉落加成',
    'minerSpeed': '矿工效率',
    'FarmerSpeed': '农民效率',
    'LumberjackSpeed': '伐木工效率',
    'DragimpSpeed': '脆皮龙宝石效率',
    'ExplorerSpeed': '探险家碎片效率',
    'ScientistSpeed': '科学家效率',
    'FluffyExp': '绒绒经验值',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 1 is worth 6 points.': '优先保留有相应修饰符的权杖。修饰符 1价值6分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 2 is worth 5 points.': '优先保留有相应修饰符的权杖。修饰符 2价值5分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 3 is worth 4 points.': '优先保留有相应修饰符的权杖。修饰符 3价值4分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 4 is worth 3 points.': '优先保留有相应修饰符的权杖。修饰符 4价值3分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 5 is worth 2 points.': '优先保留有相应修饰符的权杖。修饰符 5价值2分。',
    'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 6 is worth 1 points.': '优先保留有相应修饰符的权杖。修饰符 6价值1分。',
    'Auto Heirlooms. Enables in-depth core settings.': '开启进一步设置核心传家宝的选项。',
    'Cores: Modifier': '核心：修饰符',
    'fireTrap': '火焰陷阱伤害',
    'poisonTrap': '剧毒陷阱伤害',
    'lightningTrap': '闪电陷阱伤害',
    'runestones': '符石掉率',
    'strengthEffect': '力量塔效果',
    'condenserEffect': '冷凝塔效果',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 1 is worth 5 points.': '优先保留有相应修饰符的核心。修饰符 1价值5分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 2 is worth 4 points.': '优先保留有相应修饰符的核心。修饰符 2价值4分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 3 is worth 3 points.': '优先保留有相应修饰符的核心。修饰符 3价值3分。',
    'Auto Heirlooms. Keeps Cores with selected Mod. Modifier 4 is worth 2 points.': '优先保留有相应修饰符的核心。修饰符 4价值2分。',
    'AutoGoldenUpgrades': '自动金色升级选项',
    'Buys Golden Upgrades in Fillers. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Void + Battle': '虚空+战斗',
    'Daily AutoGoldenUpgrades': '日常自动金色升级',
    'Buys Golden Upgrades in Dailies. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '日常挑战中，按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'C2 AutoGoldenUpgrades': '挑战2自动金色升级',
    'Buys Golden Upgrades in C2s. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '挑战2中，按照相应选项购买金色升级。选择氦则只购买金色氦升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氦升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Void Battle': '虚空战斗切换区域',
    'Buys Battle goldens instead of Helium at this zone and onwards. This option only appears when selecting void.': '从此区域开始，改为购买战斗升级。只在自动金色升级选择虚空时出现。',
    'Daily Void Battle': '日常虚空战斗切换区域',
    'Buys Battle goldens instead of Helium at this zone and onwards in Dailies. This option only appears when selecting void.': '日常挑战中，从此区域开始，改为购买战斗升级。只在日常自动金色升级选择虚空时出现。',
    'Helium Battle': '氦战斗切换次数',
    'Buys Battle goldens instead of helium after this many helium goldens have been purchased and onwards. This option only appears when selecting helium.': '在购买相应次数的金色氦升级以后，改为购买战斗升级。只在自动金色升级选择氦时出现。',
    'Daily Helium Battle': '日常氦战斗切换次数',
    'Buys Battle goldens instead of helium after this many helium goldens have been purchased and onwards in Dailies. This option only appears when selecting helium.': '日常挑战中，在购买相应次数的金色氦升级以后，改为购买战斗升级。只在日常自动金色升级选择氦时出现。',
    'Buys helium goldens instead of Battle after this many Battle goldens have been purchased and onwards. This option only appears when selecting battle.': '在购买相应次数的金色战斗升级以后，改为购买氦升级。只在自动金色升级选择战斗时出现。',
    'Daily Battle Helium': '日常战斗氦切换次数',
    'Buys helium goldens instead of Battle after this many battle goldens have been purchased and onwards in Dailies. This option only appears when selecting battle.': '日常挑战中，在购买相应次数的金色战斗升级以后，改为购买氦升级。只在日常自动金色升级选择战斗时出现。',
    'Buys Golden Upgrades in Fillers. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Golden Upgrades in Dailies. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '日常挑战中，按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Golden Upgrades in C2s. Radon buys all Radon golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle.': '挑战2中，按照相应选项购买金色升级。选择氡则只购买金色氡升级。选择战斗则只购买金色战斗升级。选择虚空则在购买8次金色虚空升级(最大数量)后开始购买金色氡升级。选择虚空+战斗则在购买8次金色虚空升级(最大数量)后开始购买金色战斗升级。',
    'Buys Battle goldens instead of Radon at this zone and onwards. This option only appears when selecting void.': '从此区域开始，改为购买战斗升级。只在自动金色升级选择虚空时出现。',
    'Buys Battle goldens instead of Radon at this zone and onwards in Dailies. This option only appears when selecting void.': '日常挑战中，从此区域开始，改为购买战斗升级。只在日常自动金色升级选择虚空时出现。',
    'Radon Battle': '氡战斗切换次数',
    'Buys Battle goldens instead of Radon after this many Radon goldens have been purchased and onwards. This option only appears when selecting radon.': '在购买相应次数的金色氡升级以后，改为购买战斗升级。只在自动金色升级选择氡时出现。',
    'Daily Radon Battle': '日常氡战斗切换次数',
    'Buys Battle goldens instead of Radon after this many Radon goldens have been purchased and onwards in Dailies. This option only appears when selecting radon.': '日常挑战中，在购买相应次数的金色氡升级以后，改为购买战斗升级。只在日常自动金色升级选择氡时出现。',
    'Buys Radon goldens instead of Battle after this many Battle goldens have been purchased and onwards. This option only appears when selecting battle.': '在购买相应次数的金色战斗升级以后，改为购买氡升级。只在自动金色升级选择战斗时出现。',
    'Daily Battle Radon': '日常战斗氡切换次数',
    'Buys Radon goldens instead of Battle after this many battle goldens have been purchased and onwards in Dailies. This option only appears when selecting battle.': '日常挑战中，在购买相应次数的金色战斗升级以后，改为购买氡升级。只在日常自动金色升级选择战斗时出现。',
    'Spend Nature Tokens': '自动分配自然符记',
    'Automatically spend or convert nature tokens.': '切换是否自动分配或转换自然符记。',
    'Token Threshold': '符记阈值',
    'If Tokens would go below this value it will not convert tokens.': '符记将低于此数值时不转换符记。',
    'Spend/convert Poison tokens': '分配/转换毒符记',
    'Empowerment': '赋能',
    'Transfer': '传递率',
    'Convert to Wind': '转换为风',
    'Convert to Ice': '转换为冰',
    'Convert to Both': '二者都转换',
    'Spend/convert Wind tokens': '分配/转换风符记',
    'Convert to Poison': '转换为毒',
    'Spend/convert Ice tokens': '分配/转换冰符记',
    'Enlight: Auto': '自动启迪',
    'Enables Automatic Enlightenment. Use the settings to define how it works.': '切换是否启用自动启迪。使用以下选项来进一步设置。',
    'E: F: Poison': '毒之启迪',
    'Activate Poison Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当毒之启迪花费低于此数值时启用毒之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: F: Wind': '风之启迪',
    'Activate Wind Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当风之启迪花费低于此数值时启用风之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: F: Ice': '冰之启迪',
    'Activate Ice Enlight when Enlight cost is below this Thresh in Fillers. Consumes Tokens. -1 to disable.': '当冰之启迪花费低于此数值时启用冰之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Poison': '日常毒之启迪',
    'Activate Poison Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当毒之启迪花费低于此数值时启用毒之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Wind': '日常风之启迪',
    'Activate Wind Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当风之启迪花费低于此数值时启用风之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: D: Ice': '日常冰之启迪',
    'Activate Ice Enlight when Enlight cost is below this Thresh in Dailies. Consumes Tokens. -1 to disable.': '日常挑战中，当冰之启迪花费低于此数值时启用冰之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Poison': '挑战2毒之启迪',
    'Activate Poison Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当毒之启迪花费低于此数值时启用毒之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Wind': '挑战2风之启迪',
    'Activate Wind Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当风之启迪花费低于此数值时启用风之启迪。自动花费符记。设为-1则关闭此选项。',
    'E: C: Ice': '挑战2冰之启迪',
    'Activate Ice Enlight when Enlight cost is below this Thresh in C2s. Consumes Tokens. -1 to disable.': '挑战2中，当冰之启迪花费低于此数值时启用冰之启迪。自动花费符记。设为-1则关闭此选项。',
    'Enhance Grids': '强化地图区域显示',
    'Apply slight visual enhancements to world and map grids that highlights with drop shadow all the exotic, powerful, skeletimps and other special imps.': '强化地图区域的显示，使奇异外皮，脆皮骷髅等特殊脆皮有特殊的显示图标。',
    'Enable Breed Timer': '启用繁殖计时',
    'Enables the display of the hidden breedtimer. Turn this off to reduce memory.': '切换是否直接显示隐藏的繁殖计时。关闭此项可减少内存占用。',
    'Enable AutoMap Status': '启用自动地图状态',
    'Enables the display of the map status. Turn this off to reduce memory.': '切换是否显示自动地图的状态。关闭此项可减少内存占用。',
    'Go AFK Mode': '进入挂机模式',
    'Action Button). Go AFK uses a Black Screen, and suspends ALL the Trimps GUI visual update functions (updateLabels) to improve performance by not doing unnecessary stuff. This feature is primarily just a CPU and RAM saving mode. Everything will resume when you come back and press the Back button. Console debug output is also disabled. The blue color means this is not a settable setting, just a button. You can now also click the Zone # (World Info) area to go AFK now.': '主动点击按钮)。启用挂机模式后，游戏界面变为黑色，关闭所有通常的图像显示功能，可能提升游戏运行效率。此功能用于减少CPU和内存的性能占用。点击我回来了按钮以后一切将恢复正常。控制台输出同时也被禁止。此按钮为蓝色，这意味着它不是设置，只是按钮。您还可以点击界面中的区域 ###(世界信息)来进入挂机模式。',
    'Show Changelog': '显示更新日志',
    'Action Button). Shows the changelog popup message that AT loads on startup again, in case you missed it. The blue color means this is not a settable setting, just a button.': '主动点击按钮)。再次显示载入脚本时显示过的更新日志。此按钮为蓝色，这意味着它不是设置，只是按钮。',
    'General Spam': '显示通常脚本消息',
    'General Spam = Notification Messages, Auto He/Hr': '通常脚本消息包括通知消息，自动氦/小时等',
    'Upgrades Spam': '显示升级脚本消息',
    'Equipment Spam': '显示装备脚本消息',
    'Maps Spam': '显示地图脚本消息',
    'Maps Spam = Buy,Pick,Run Maps,Recycle,CantAfford': '地图脚本消息包括购买、选择、运行地图，回收地图，碎片不够等',
    'Other Spam': '显示其它脚本消息',
    'Other Spam = mostly Better Auto Fight (disable with: MODULES["fight"].enableDebug=false ), Trimpicide & AutoBreed/Gene Timer changes, AnalyticsID, etc - a catch all.': '其它脚本消息包括改良自动战斗(可以在控制台输入MODULES["fight"].enableDebug=false关闭)，预期放弃士兵，自动繁殖计时变化，分析ID变化等等。',
    'Building Spam': '显示建筑脚本消息',
    'Building Spam = all buildings, even storage': '建筑脚本消息包括所有建筑，连存储建筑也计入',
    'Job Spam': '显示工作脚本消息',
    'Job Spam = All jobs, in scientific notation': '工作脚本消息包括所有工作，以科学记数法显示',
    'Starting Zone Spam': '显示区域开始脚本消息',
    'Disables \'Starting new Zone ###\' , RoboTrimp MagnetoShreik, and any future Graph Spam that comes from graph logs.': '区域开始脚本消息包括进入区域###的消息，脆皮机器人启用电磁尖啸，以及图表产生的相关消息。',
    'Magmite/Magma Spam': '显示岩浆脚本消息',
    'Everything in Magmite Module and Buy Magmamancers': '与岩浆相关的所有消息，及雇佣岩浆巫师',
    'AutoPerks Spam': '显示自动特权脚本消息',
    'Everything in related to AutoPerks': '与自动分配特权相关的所有消息',
    'Nature Spam': '显示自然脚本消息',
    'Everything in related to Nature': '与自然相关的所有消息',
    'Import AutoTrimps': '导入脚本设置',
    'Import your AutoTrimps Settings. Asks you to name it as a profile afterwards.': '导入脆皮脚本的设置。导入完成后还会让您进行设置文件的命名。',
    'Export AutoTrimps': '导出脚本设置',
    'Export your AutoTrimps Settings as a output string text formatted in JSON.': '导出脆皮脚本的设置。',
    'Reset to Default': '恢复为默认设置',
    'Reset everything to the way it was when you first installed the script.': '将脚本的设置恢复到初始状态。',
    'Gives you an AT settings String that you can use to import. Use if you are less than z60.': '生成可导入的脚本设置。如果您当前区域低于60，可以使用它。',
    '550+ AT Settings': '区域550以上的设置',
    'Gives you an AT settings String that you can use to import. Use if you are z550+': '生成可导入的脚本设置。如果您当前区域高于550，可以使用它',
    'Cleanup Saved Settings': '清除过时的设置数据',
    'Deletes old values from previous versions of the script from your AutoTrimps Settings file.': '将之前版本过时的设置数据从设置文件中删除。',
    'Type a number below. You can also use shorthand such as 2e5 or 200k. Accepts negative numbers as validated inputs.': '在下方输入数字。您还可以使用例如2e5或200k之类的缩写。可以输入负数。',
    'Type a number below. You can also use shorthand such as 2e5 or 200k. Put -1 for Infinite.': '在下方输入数字。您还可以使用例如2e5或200k之类的缩写。输入-1则设为无穷大。',
    'Apply': '应用',
    'Type your input below': '在下方输入',
    'WARNING: Your void maps are set to complete after your autoPortal, and therefore will not be done at all! Please Change Your Settings Now. This Box Will Not Go away Until You do. Remember you can choose \'Custom\' autoPortal along with challenges for complete control over when you portal.': '注意：您的虚空地图区域设置到了自动传送门的区域之后，因此将完全无效！请修改设置。在修改之前，这个窗口将会一直弹出。请记住，您可以选择自动传送门选项中的自定义选项以彻底控制传送的时机。',
    'Estimated autoPortal level': '预计自动传送门区域',
    'Void Maps Conflict': '虚空地图冲突',
    'After Daily He/Hr': '算上日常加成后的氦/小时',
    'After Daily Rn/Hr': '算上日常加成后的氡/小时',
    'Hidden Next Group Breed Timer': '隐藏的繁殖计时',
    'How long your next army has been breeding for, or how many anticipation stacks you will have if you send a new army now.': '显示下一队士兵已经繁殖了多久，或者是如果现在让士兵开始战斗，预期能达到多少层。',
    'Army Count': '军队规模',
    'Protect/Unprotect': '保护/取消保护',
    'UnProtect': '取消保护',
    'Protect': '保护',
    'Settings Profile': '设置文件',
    '<Delete Profile': '<删除设置文件',
    'Save New...': '另存为新的设置文件',
    'ExportAutoTrimps': '导出脚本设置',
    'This is your AUTOTRIMPS save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的脚本设置数据字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'This is your AUTOTRIMPS z550+ save string. Use this string to import the settings.': '以下是区域550以上的脚本设置数据字符串。导入相应字符串后即可导入相应设置。',
    'This is your AUTOTRIMPS z60 save string. Use this string to import the settings.': '以下是区域60以下的脚本设置数据字符串。导入相应字符串后即可导入相应设置。',
    'ImportAutoTrimps': '导入脚本设置',
    'Import your AUTOTRIMPS save string! It\'ll be fine, I promise.': '导入您的脚本设置数据字符串！它会能用的，我保证。',
    'spireImport': '尖塔导入',
    'Import your SPIRE string!': '导入您的尖塔的字符串！',
    'CleanupAutoTrimps': '清除过时的设置数据',
    'Autotrimps saved-settings have been attempted to be cleaned up. If anything broke, refreshing will fix it, but check that your settings are correct! (prestige in particular': '已完成之前版本过时数据的清理。如果脚本工作不正常，只须刷新就能修复，但这之后请检查一下相关设置是否正确！(特别是重铸相关的设置',
    'Thats all the help you get.': '详情见上图。',
    'Name': '名称',
    '%C': '加成：挑战',
    '%HZE': '区域比',
    'Loading New AutoTrimps Profile...': '正在载入新的脚本设置文件……',
    'Current Settings will be lost': '当前的设置将丢失',
    'NOTICE': '注意',
    'Switching to new AutoTrimps settings profile!!!!': '将切换为新的脚本设置文件！！！！',
    'All current settings': '所有当前的设置 ',
    'WILL': '将',
    'be lost after this point.': '在此之后丢失。',
    'You might want to cancel, to go back and save your existing settings first....': '如果有需要，您可以先取消，然后保存当前的设置文件……',
    'Confirm and Switch Profiles': '确认切换',
    'Loading AutoTrimps Default Profile...': '正在载入默认的脚本设置文件……',
    'Current Settings will be lost!': '当前的设置将丢失！',
    'Switching to Default AutoTrimps settings profile!!!!': '将切换为默认的脚本设置文件！！！！',
    'This will': '这将 ',
    'the script to factory settings.': '脚本设置为出厂设置。',
    'Reset to Default Profile': '重置为默认',
    'Enter New Settings Profile Name': '输入新的设置文件的名称',
    'What would you like the name of the Settings Profile to be?': '新的设置文件应该叫什么名字？',
    'WARNING': '注意',
    'Delete Profile???': '删除设置文件？？？',
    'You are about to delete the': '您将要删除的是 ',
    'settings profile.': '设置文件。',
    'This will not switch your current settings though. Continue ?': '这并不会影响您当前的设置。确定继续吗？',
    'Delete Profile': '删除设置文件',
    'Generic message': '一般消息',
    'Autotrimps has been successfully reset to its defaults!': '脚本设置已重置为默认设置！',
    'Out of Map Credits': '地图代币耗尽',
    'Prestige Raiding': '重铸袭劫',
    'Getting Spire Map Bonus': '尖塔前获得地图奖励',
    'Skipping Spire': '跳过尖塔',
    'Max Map Bonus After Zone': '之后区域一直获得最大地图奖励',
    'Want Health & Damage': '需要更多生命值和伤害',
    'Want more health': '需要更多生命值',
    'Advancing': '前进中',
    'Prestige Skipped': '跳过重铸',
    'He/hr': '氦/小时',
    'Mayhem Attack': '暴乱攻击',
    'Mayhem Health': '暴乱生命值',
    'Questing': '运行任务',
    'Bogs': '泥沼',
    'Rn/hr': '氡/小时',
    'TRIMPS - AFK': '脆皮 - 挂机中',
    'Current zone: -': '当前区域：-',
    'Current helium: -': '当前氦：-',
    'Status: -': '状态：-',
    'I\'m Back': '我回来了',
    'Current Zone': '当前区域',
    'Current': '当前',
    'Current Status': '当前状态',
    'Current Status: Off': '当前状态：关闭',
    'Current Status: Out of Map Credits': '当前状态：地图代币耗尽',
    'Current Status: Prestige Raiding': '当前状态：重铸袭劫',
    'Current Status: BW Raiding': '当前状态：仿生袭劫',
    'Current Status: Getting Spire Map Bonus': '当前状态：尖塔前获得地图奖励',
    'Current Status: Skipping Spire': '当前状态：跳过尖塔',
    'Current Status: Max Map Bonus After Zone': '当前状态：之后区域一直获得最大地图奖励',
    'Current Status: ': '当前状态：',
    'Current Status: Prestige': '当前状态：重铸',
    'Current Status: Want Health & Damage': '当前状态：需要更多生命值和伤害',
    'Current Status: Want more health': '当前状态：需要更多生命值',
    'Current Status: Advancing': '当前状态：前进中',
    'Current Status: Mayhem Attack': '当前状态：暴乱攻击',
    'Current Status: Mayhem Health': '当前状态：暴乱生命值',
    'Current Status: Praiding': '当前状态：宇宙2重铸袭劫',
    'Current Status: Questing': '当前状态：运行任务',
    'Current Status: Time Farming': '当前状态：定时刷图',
    'Current Status: Time Farming Bogs': '当前状态：定时刷图黑色泥沼',
    'Current Status: Black Bogs': '当前状态：黑色泥沼',
    'Zeker0 (z1-': '脚本预设(区域1-',
    'Zeker0 (z60-': '脚本预设(区域60-',
    'Zeker0 (z101-': '脚本预设(区域101-',
    'Zeker0 (z181-': '脚本预设(区域181-',
    'Zeker0 (z230-': '脚本预设(区域230-',
    'Zeker0 (z300-': '脚本预设(区域300-',
    'Zeker0 (z400-': '脚本预设(区域400-',
    'Zeker0 (z450-': '脚本预设(区域450-',
    'Zeker0 (z501-': '脚本预设(区域501-',
    'Zeker0 (z550+': '脚本预设(区域550+',
    'CUSTOM ratio': '自定义比例',
    'Allocate Perks': '分配特权',
    'Dump Perk': '主加特权',
    'Toughness_II': '坚韧 II',
    'Power_II': '力量 II',
    'Motivation_II': '鼓舞 II',
    'Carpentry_II': '木工 II',
    'Looting_II': '劫掠 II',
    'Ratio Preset': '分配比例预设',
    'Automatic Perk Allocation Error': '自动分配特权错误',
    'A Respec would be required and is NOT available. You used it already, try again next portal. Press': '需要洗点才可以进行自动分配特权，但您已经洗点过了，请在下次传送后再重试。按 ',
    'esc': 'esc',
    'to close this tooltip.': '键以关闭此提示框。',
    'Zek (z1-': '脚本预设(区域1-',
    'Zek (Melt': '脚本预设(熔点',
    'Zek (Quag': '脚本预设(泥淖',
    'Auto Portaling NOW!': '即将使用自动传送门！',
    'Hit Delay Portal to WAIT 1 more zone.': '点击延迟传送按钮则在下个区域再度询问。',
    'NOTICE: Auto-Portaling in 5 seconds....': '注意：5秒内将使用自动传送门……',
    'Delay Portal': '延迟传送',
    //脚本相关结束

    //原样
    '': '',
    '': '',
}


//需处理的前缀
var cnPrefix = {
    "-60 AT Settings": "区域60以下的设置",
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "：",
    ", ": "，", //段前标点
    "food:": "食物:", //主界面
    "wood:": "木头:", //主界面
    "metal:": "金属:", //主界面
    "science:": "科学点:", //主界面
    "fragments:": '碎片:', //主界面
    "gems:": '宝石:', //主界面
    "helium:": '氦:', //主界面
    "Mapping in ": "运行地图：", //离线地图
    "Big Wall,": "巨墙，", //地图名称
    "Whispering ": "私语", //地图名称
    "Sandy ": "沙之", //地图名称
    "Little ": "小", //地图名称
    "Big ": "巨", //地图名称
    "Rancid ": "腐臭", //地图名称
    "Tired ": "疲劳", //地图名称
    "Laughing ": "欢笑", //地图名称
    "Weeping ": "哭泣", //地图名称
    "Windy ": "风之", //地图名称
    "Terrible ": "可怖", //地图名称
    "Nasty ": "卑鄙", //地图名称
    "Dirty ": "肮脏", //地图名称
    "Red ": "红色", //地图名称
    "Black ": "黑色", //地图名称
    "Singing ": "歌之", //地图名称
    "Fiery ": "燃烧", //地图名称
    "Rocky ": "岩之", //地图名称
    "Haunted ": "闹鬼", //地图名称
    "Forgotten ": "遗忘", //地图名称
    "Miserable ": "不幸", //地图名称
    "Cursed ": "诅咒", //地图名称
    "Tainted ": "污染", //地图名称
    "Blessed ": "祝福", //地图名称
    "Sacred ": "神圣", //地图名称
    "Abandoned ": "遗弃", //地图名称
    "Natural ": "自然", //地图名称
    "Enchanted ": "魔能", //地图名称
    "Magical ": "魔力", //地图名称
    "Calm ": "静谧", //地图名称
    "Rugged ": "崎岖", //地图名称
    "Violent ": "暴虐", //地图名称
    "Weird ": "古怪", //地图名称
    "Secret ": "神秘", //地图名称
    "Forbidden ": "禁忌", //地图名称
    "Bewitched ": "蛊惑", //地图名称
    "Dark ": "黑暗", //地图名称
    "Light ": "光明", //地图名称
    "Magnificent ": "华丽", //地图名称
    "Evil ": "邪恶", //地图名称
    "Holy ": "圣洁", //地图名称
    "Hallowed ": "崇高", //地图名称
    "Desecrated ": "亵渎", //地图名称
    "Silent ": "无声", //地图名称
    "Eternal ": "永恒", //地图名称
    "Underground ": "地下", //地图名称
    "Temperate ": "温和", //地图名称
    "Chilly ": "冰冷", //地图名称
    "Muddy ": "泥之", //地图名称
    "Dank ": "潮湿", //地图名称
    "Steamy ": "雾气", //地图名称
    "Humid ": "湿润", //地图名称
    "Dry ": "干燥", //地图名称
    "Putrid ": "难闻", //地图名称
    "Foul ": "污秽", //地图名称
    "Dangerous ": "危险", //地图名称
    "Marred ": "破损", //地图名称
    "Blighted ": "损毁", //地图名称
    "Crystal ": "晶体", //地图名称
    "Frozen ": "冻结", //地图名称
    "Simple ": "纯粹", //地图名称
    "Timeless ": "永存", //地图名称
    "Deadly ": "致命", //地图名称
    "Poisonous ": "毒性", //地图名称
    "Heinous ": "极恶", //地图名称
    "Destructive ": "破灭", //地图名称
    "Creek,": "海湾，", //地图名称
    "Coast,": "海岸，", //地图名称
    "Swamp,": "沼泽，", //地图名称
    "Forest,": "森林，", //地图名称
    "Mountain,": "山脉，", //地图名称
    "Beach,": "海滩，", //地图名称
    "Hill,": "山丘，", //地图名称
    "Butte,": "孤峰，", //地图名称
    "Ridge,": "山脊，", //地图名称
    "Mesa,": "方山，", //地图名称
    "Valley,": "山谷，", //地图名称
    "Peak,": "顶峰，", //地图名称
    "Canyon,": "峡谷，", //地图名称
    "Plateau,": "高原，", //地图名称
    "Crag,": "峭壁，", //地图名称
    "Crater,": "陨坑，", //地图名称
    "Oaks,": "橡林，", //地图名称
    "Volcano,": "火山，", //地图名称
    "Glacier,": "冰川，", //地图名称
    "Brook,": "小溪，", //地图名称
    "Cave,": "洞穴，", //地图名称
    "Sea,": "大海，", //地图名称
    "Ocean,": "大洋，", //地图名称
    "Lake,": "湖泊，", //地图名称
    "Jungle,": "丛林，", //地图名称
    "Island,": "岛屿，", //地图名称
    "Ruins,": "遗迹，", //地图名称
    "Temple,": "神殿，", //地图名称
    "Bog,": "泥沼，", //地图名称
    "Grove,": "果林，", //地图名称
    "Thicket,": "树丛，", //地图名称
    "Woods,": "树林，", //地图名称
    "Oasis,": "绿地，", //地图名称
    "Mineshaft,": "深井，", //地图名称
    "Tunnel,": "隧道，", //地图名称
    "Depths,": "深渊，", //地图名称
    "Cavern,": "山洞，", //地图名称
    "Gardens,": "花园，", //地图名称
    "Farms,": "农场，", //地图名称
    "Nightmare,": "梦魇，", //地图名称
    "Void,": "虚空，", //地图名称
    "Descent,": "落穴，", //地图名称
    "Pit,": "深坑，", //地图名称
    "The Black Bog,": "黑色泥沼，", //地图名称
    "The Block,": "障碍区，", //地图名称
    "The Wall,": "高墙，", //地图名称
    "The Prison,": "监狱，", //地图名称
    "Imploding Star,": "爆炸之星，", //地图名称
    "Prismatic Palace,": "棱镜宫殿，", //地图名称
    "Melting Point,": "熔点，", //地图名称
    "Trimple Of Doom,": "末日神殿，", //地图名称
    "Atlantrimp,": "亚特兰蒂皮，", //地图名称
    "Tricky Paradise,": "整蛊天堂，", //地图名称
    "Dimension of Anger,": "愤怒维度，", //地图名称
    "Dimension of Rage,": "暴怒维度，", //地图名称
    "Unlocks Found:":"解锁了：", //液化者文本
    " Bloodlust":"嗜血", //液化者文本
    ", Bloodlust":"，嗜血", //液化者文本
    " Miner":"矿工", //液化者文本
    ", Miner":"，矿工", //液化者文本
    " Scientist":"科学家", //液化者文本
    ", Scientist":"，科学家", //液化者文本
    " Gym":"健身房", //液化者文本
    ", Gym":"，健身房", //液化者文本
    " Trainer":"训练师", //液化者文本
    ", Trainer":"，训练师", //液化者文本
    " Blockmaster":"格挡大师", //液化者文本
    ", Blockmaster":"，格挡大师", //液化者文本
    " Explorer":"探险家", //液化者文本
    ", Explorer":"，探险家", //液化者文本
    " Egg":"蛋", //液化者文本
    ", Egg":"，蛋", //液化者文本
    " Anger":"愤怒", //液化者文本
    ", Anger":"，愤怒", //液化者文本
    " Doom":"末日神殿", //液化者文本
    ", Doom":"，末日神殿", //液化者文本
    " Warpstation":"跃迁核心", //液化者文本
    ", Warpstation":"，跃迁核心", //液化者文本
    " Dominance":"支配阵型", //液化者文本
    ", Dominance":"，支配阵型", //液化者文本
    " Geneticist":"遗传学家", //液化者文本
    ", Geneticist":"，遗传学家", //液化者文本
    " Barrier":"屏障阵型", //液化者文本
    ", Barrier":"，屏障阵型", //液化者文本
    " Magmamancer":"岩浆巫师", //液化者文本
    ", Magmamancer":"，岩浆巫师", //液化者文本
    " Efficiency":"效率", //液化者文本
    ", Efficiency":"，效率", //液化者文本
    " TrainTacular":"格挡提升", //液化者文本
    ", TrainTacular":"，格挡提升", //液化者文本
    " Gigastation":"千兆核心", //液化者文本
    ", Gigastation":"，千兆核心", //液化者文本
    " Potency":"繁殖效率", //液化者文本
    ", Potency":"，繁殖效率", //液化者文本
    " Speedscience":"研究加速", //液化者文本
    ", Speedscience":"，研究加速", //液化者文本
    " Megascience":"超级研究", //液化者文本
    ", Megascience":"，超级研究", //液化者文本
    " Gymystic":"健身学", //液化者文本
    ", Gymystic":"，健身学", //液化者文本
    " Speedminer":"采矿加速", //液化者文本
    ", Speedminer":"，采矿加速", //液化者文本
    " Megaminer":"超级采矿", //液化者文本
    ", Megaminer":"，超级采矿", //液化者文本
    " Speedlumber":"砍伐加速", //液化者文本
    ", Speedlumber":"，砍伐加速", //液化者文本
    " Megalumber":"超级砍伐", //液化者文本
    ", Megalumber":"，超级砍伐", //液化者文本
    " Speedfarming":"耕作加速", //液化者文本
    ", Speedfarming":"，耕作加速", //液化者文本
    " Megafarming":"超级耕作", //液化者文本
    ", Megafarming":"，超级耕作", //液化者文本
    " Coordination":"协作", //液化者文本
    ", Coordination":"，协作", //液化者文本
    "E0": "进0", //绒绒污污相关
    "E10": "进10", //绒绒污污相关
    "E1": "进1", //绒绒污污相关
    "E2": "进2", //绒绒污污相关
    "E3": "进3", //绒绒污污相关
    "E4": "进4", //绒绒污污相关
    "E5": "进5", //绒绒污污相关
    "E6": "进6", //绒绒污污相关
    "E7": "进7", //绒绒污污相关
    "E8": "进8", //绒绒污污相关
    "E9": "进9", //绒绒污污相关
    "C3s": "挑战3", //脚本挑战设置
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
    "/sec": "/秒", //主界面
    "/hr": "/时", //主界面
    "Creek": "海湾", //地图名称
    "Coast": "海岸", //地图名称
    "Swamp": "沼泽", //地图名称
    "Forest": "森林", //地图名称
    "Mountain": "山脉", //地图名称
    "Beach": "海滩", //地图名称
    "Hill": "山丘", //地图名称
    "Butte": "孤峰", //地图名称
    "Ridge": "山脊", //地图名称
    "Mesa": "方山", //地图名称
    "Valley": "山谷", //地图名称
    "Peak": "顶峰", //地图名称
    "Canyon": "峡谷", //地图名称
    "Plateau": "高原", //地图名称
    "Crag": "峭壁", //地图名称
    "Crater": "陨坑", //地图名称
    "Oaks": "橡林", //地图名称
    "Volcano": "火山", //地图名称
    "Glacier": "冰川", //地图名称
    "Brook": "小溪", //地图名称
    "Cave": "洞穴", //地图名称
    "Sea": "大海", //地图名称
    "Ocean": "大洋", //地图名称
    "Lake": "湖泊", //地图名称
    "Jungle": "丛林", //地图名称
    "Island": "岛屿", //地图名称
    "Ruins": "遗迹", //地图名称
    "Temple": "神殿", //地图名称
    "Bog": "泥沼", //地图名称
    "Grove": "果林", //地图名称
    "Thicket": "树丛", //地图名称
    "Woods": "树林", //地图名称
    "Oasis": "绿地", //地图名称
    "Mineshaft": "深井", //地图名称
    "Tunnel": "隧道", //地图名称
    "Depths": "深渊", //地图名称
    "Cavern": "山洞", //地图名称
    "Gardens": "花园", //地图名称
    "Farms": "农场", //地图名称
    "Nightmare": "梦魇", //地图名称
    "Void": "虚空", //地图名称
    "Descent": "落穴", //地图名称
    "Pit": "深坑", //地图名称
    ": Whispering ": "：私语", //地图名称
    ": Sandy ": "：沙之", //地图名称
    ": Little ": "：小", //地图名称
    ": Big ": "：巨", //地图名称
    ": Rancid ": "：腐臭", //地图名称
    ": Tired ": "：疲劳", //地图名称
    ": Laughing ": "：欢笑", //地图名称
    ": Weeping ": "：哭泣", //地图名称
    ": Windy ": "：风之", //地图名称
    ": Terrible ": "：可怖", //地图名称
    ": Nasty ": "：卑鄙", //地图名称
    ": Dirty ": "：肮脏", //地图名称
    ": Red ": "：红色", //地图名称
    ": Black ": "：黑色", //地图名称
    ": Singing ": "：歌之", //地图名称
    ": Fiery ": "：燃烧", //地图名称
    ": Rocky ": "：岩之", //地图名称
    ": Haunted ": "：闹鬼", //地图名称
    ": Forgotten ": "：遗忘", //地图名称
    ": Miserable ": "：不幸", //地图名称
    ": Cursed ": "：诅咒", //地图名称
    ": Tainted ": "：污染", //地图名称
    ": Blessed ": "：祝福", //地图名称
    ": Sacred ": "：神圣", //地图名称
    ": Abandoned ": "：遗弃", //地图名称
    ": Natural ": "：自然", //地图名称
    ": Enchanted ": "：魔能", //地图名称
    ": Magical ": "：魔力", //地图名称
    ": Calm ": "：静谧", //地图名称
    ": Rugged ": "：崎岖", //地图名称
    ": Violent ": "：暴虐", //地图名称
    ": Weird ": "：古怪", //地图名称
    ": Secret ": "：神秘", //地图名称
    ": Forbidden ": "：禁忌", //地图名称
    ": Bewitched ": "：蛊惑", //地图名称
    ": Dark ": "：黑暗", //地图名称
    ": Light ": "：光明", //地图名称
    ": Magnificent ": "：华丽", //地图名称
    ": Evil ": "：邪恶", //地图名称
    ": Holy ": "：圣洁", //地图名称
    ": Hallowed ": "：崇高", //地图名称
    ": Desecrated ": "：亵渎", //地图名称
    ": Silent ": "：无声", //地图名称
    ": Eternal ": "：永恒", //地图名称
    ": Underground ": "：地下", //地图名称
    ": Temperate ": "：温和", //地图名称
    ": Chilly ": "：冰冷", //地图名称
    ": Muddy ": "：泥之", //地图名称
    ": Dank ": "：潮湿", //地图名称
    ": Steamy ": "：雾气", //地图名称
    ": Humid ": "：湿润", //地图名称
    ": Dry ": "：干燥", //地图名称
    ": Putrid ": "：难闻", //地图名称
    ": Foul ": "：污秽", //地图名称
    ": Dangerous ": "：危险", //地图名称
    ": Marred ": "：破损", //地图名称
    ": Blighted ": "：损毁", //地图名称
    ": Crystal ": "：晶体", //地图名称
    ": Frozen ": "：冻结", //地图名称
    ": Simple ": "：纯粹", //地图名称
    ": Timeless ": "：永存", //地图名称
    ": Deadly ": "：致命", //地图名称
    ": Poisonous ": "：毒性", //地图名称
    ": Heinous ": "：极恶", //地图名称
    ": Destructive ": "：破灭", //地图名称
    "Creek!": "海湾！", //地图名称
    "Coast!": "海岸！", //地图名称
    "Swamp!": "沼泽！", //地图名称
    "Forest!": "森林！", //地图名称
    "Mountain!": "山脉！", //地图名称
    "Beach!": "海滩！", //地图名称
    "Hill!": "山丘！", //地图名称
    "Butte!": "孤峰！", //地图名称
    "Ridge!": "山脊！", //地图名称
    "Mesa!": "方山！", //地图名称
    "Valley!": "山谷！", //地图名称
    "Peak!": "顶峰！", //地图名称
    "Canyon!": "峡谷！", //地图名称
    "Plateau!": "高原！", //地图名称
    "Crag!": "峭壁！", //地图名称
    "Crater!": "陨坑！", //地图名称
    "Oaks!": "橡林！", //地图名称
    "Volcano!": "火山！", //地图名称
    "Glacier!": "冰川！", //地图名称
    "Brook!": "小溪！", //地图名称
    "Cave!": "洞穴！", //地图名称
    "Sea!": "大海！", //地图名称
    "Ocean!": "大洋！", //地图名称
    "Lake!": "湖泊！", //地图名称
    "Jungle!": "丛林！", //地图名称
    "Island!": "岛屿！", //地图名称
    "Ruins!": "遗迹！", //地图名称
    "Temple!": "神殿！", //地图名称
    "Bog!": "泥沼！", //地图名称
    "Grove!": "果林！", //地图名称
    "Thicket!": "树丛！", //地图名称
    "Woods!": "树林！", //地图名称
    "Oasis!": "绿地！", //地图名称
    "Mineshaft!": "深井！", //地图名称
    "Tunnel!": "隧道！", //地图名称
    "Depths!": "深渊！", //地图名称
    "Cavern!": "山洞！", //地图名称
    "Gardens!": "花园！", //地图名称
    "Farms!": "农场！", //地图名称
    " just made Whispering ": "制造了私语", //地图名称
    " just made Sandy ": "制造了沙之", //地图名称
    " just made Little ": "制造了小", //地图名称
    " just made Big ": "制造了巨", //地图名称
    " just made Rancid ": "制造了腐臭", //地图名称
    " just made Tired ": "制造了疲劳", //地图名称
    " just made Laughing ": "制造了欢笑", //地图名称
    " just made Weeping ": "制造了哭泣", //地图名称
    " just made Windy ": "制造了风之", //地图名称
    " just made Terrible ": "制造了可怖", //地图名称
    " just made Nasty ": "制造了卑鄙", //地图名称
    " just made Dirty ": "制造了肮脏", //地图名称
    " just made Red ": "制造了红色", //地图名称
    " just made Black ": "制造了黑色", //地图名称
    " just made Singing ": "制造了歌之", //地图名称
    " just made Fiery ": "制造了燃烧", //地图名称
    " just made Rocky ": "制造了岩之", //地图名称
    " just made Haunted ": "制造了闹鬼", //地图名称
    " just made Forgotten ": "制造了遗忘", //地图名称
    " just made Miserable ": "制造了不幸", //地图名称
    " just made Cursed ": "制造了诅咒", //地图名称
    " just made Tainted ": "制造了污染", //地图名称
    " just made Blessed ": "制造了祝福", //地图名称
    " just made Sacred ": "制造了神圣", //地图名称
    " just made Abandoned ": "制造了遗弃", //地图名称
    " just made Natural ": "制造了自然", //地图名称
    " just made Enchanted ": "制造了魔能", //地图名称
    " just made Magical ": "制造了魔力", //地图名称
    " just made Calm ": "制造了静谧", //地图名称
    " just made Rugged ": "制造了崎岖", //地图名称
    " just made Violent ": "制造了暴虐", //地图名称
    " just made Weird ": "制造了古怪", //地图名称
    " just made Secret ": "制造了神秘", //地图名称
    " just made Forbidden ": "制造了禁忌", //地图名称
    " just made Bewitched ": "制造了蛊惑", //地图名称
    " just made Dark ": "制造了黑暗", //地图名称
    " just made Light ": "制造了光明", //地图名称
    " just made Magnificent ": "制造了华丽", //地图名称
    " just made Evil ": "制造了邪恶", //地图名称
    " just made Holy ": "制造了圣洁", //地图名称
    " just made Hallowed ": "制造了崇高", //地图名称
    " just made Desecrated ": "制造了亵渎", //地图名称
    " just made Silent ": "制造了无声", //地图名称
    " just made Eternal ": "制造了永恒", //地图名称
    " just made Underground ": "制造了地下", //地图名称
    " just made Temperate ": "制造了温和", //地图名称
    " just made Chilly ": "制造了冰冷", //地图名称
    " just made Muddy ": "制造了泥之", //地图名称
    " just made Dank ": "制造了潮湿", //地图名称
    " just made Steamy ": "制造了雾气", //地图名称
    " just made Humid ": "制造了湿润", //地图名称
    " just made Dry ": "制造了干燥", //地图名称
    " just made Putrid ": "制造了难闻", //地图名称
    " just made Foul ": "制造了污秽", //地图名称
    " just made Dangerous ": "制造了危险", //地图名称
    " just made Marred ": "制造了破损", //地图名称
    " just made Blighted ": "制造了损毁", //地图名称
    " just made Crystal ": "制造了晶体", //地图名称
    " just made Frozen ": "制造了冻结", //地图名称
    " just made Simple ": "制造了纯粹", //地图名称
    " just made Timeless ": "制造了永存", //地图名称
    "Bone": "骨头", //骨头
    "Bones": "骨头", //骨头
    "Liquimp!": "液化者！", //击杀消息末尾
    "Liquimp group!": "液化者集团！", //击杀消息末尾
    "Arachnimp!": "脆皮蜘蛛！", //击杀消息末尾
    "Beetlimp!": "脆皮甲虫！", //击杀消息末尾
    "Mantimp!": "脆皮螳螂！", //击杀消息末尾
    "Butterflimp!": "脆皮蝴蝶！", //击杀消息末尾
    "Horrimp!": "脆皮惊骇者！", //击杀消息末尾
    "Presimpt!": "脆皮小礼！", //击杀消息末尾
    "Presimpt group!": "脆皮小礼集团！", //击杀消息末尾
    "Turkimp!": "脆皮火鸡！", //击杀消息末尾
    "Turkimp group!": "脆皮火鸡集团！", //击杀消息末尾
    "Randimp!": "脆皮百变怪！", //击杀消息末尾
    "Randimp group!": "脆皮百变怪集团！", //击杀消息末尾
    "Squimp!": "脆皮乌贼！", //击杀消息末尾
    "Squimp group!": "脆皮乌贼集团！", //击杀消息末尾
    "Elephimp!": "脆皮象！", //击杀消息末尾
    "Elephimp group!": "脆皮象集团！", //击杀消息末尾
    "Turtlimp!": "脆皮龟！", //击杀消息末尾
    "Turtlimp group!": "脆皮龟集团！", //击杀消息末尾
    "Chimp!": "脆皮黑猩猩！", //击杀消息末尾
    "Chimp group!": "脆皮黑猩猩集团！", //击杀消息末尾
    "Penguimp!": "脆皮企鹅！", //击杀消息末尾
    "Penguimp group!": "脆皮企鹅集团！", //击杀消息末尾
    "Snimp!": "脆皮蛇！", //击杀消息末尾
    "Snimp group!": "脆皮蛇集团！", //击杀消息末尾
    "Gorillimp!": "脆皮大猩猩！", //击杀消息末尾
    "Gorillimp group!": "脆皮大猩猩集团！", //击杀消息末尾
    "Blimp!": "脆皮飞艇！", //击杀消息末尾
    "Blimp group!": "脆皮飞艇集团！", //击杀消息末尾
    "Dragimp!": "脆皮龙！", //击杀消息末尾
    "Dragimp group!": "脆皮龙集团！", //击杀消息末尾
    "Improbability!": "乌有者！", //击杀消息末尾
    "Improbability group!": "乌有者集团！", //击杀消息末尾
    "Omnipotrimp!": "全能者！", //击杀消息末尾
    "Omnipotrimp group!": "全能者集团！", //击杀消息末尾
    "Mutimp!": "脆皮变异者！", //击杀消息末尾
    "Mutimp group!": "脆皮变异者集团！", //击杀消息末尾
    "Hulking Mutimp!": "脆皮大型变异者！", //击杀消息末尾
    "Hulking Mutimp group!": "脆皮大型变异者集团！", //击杀消息末尾
    "Feyimp!": "脆皮小妖！", //击杀消息末尾
    "Feyimp group!": "脆皮小妖集团！", //击杀消息末尾
    "Tauntimp!": "脆皮咚咚！", //击杀消息末尾
    "Tauntimp group!": "脆皮咚咚集团！", //击杀消息末尾
    "Whipimp!": "脆皮鞭者！", //击杀消息末尾
    "Whipimp group!": "脆皮鞭者集团！", //击杀消息末尾
    "Venimp!": "脆皮爱神！", //击杀消息末尾
    "Venimp group!": "脆皮爱神集团！", //击杀消息末尾
    "Magnimp!": "脆皮磁王！", //击杀消息末尾
    "Magnimp group!": "脆皮磁王集团！", //击杀消息末尾
    "Skeletimp!": "脆皮骷髅！", //击杀消息末尾
    "Skeletimp group!": "脆皮骷髅集团！", //击杀消息末尾
    "Megaskeletimp!": "脆皮超级骷髅！", //击杀消息末尾
    "Megaskeletimp group!": "脆皮超级骷髅集团！", //击杀消息末尾
    "Pumpkimp!": "脆皮南瓜怪！", //击杀消息末尾
    "Pumpkimp group!": "脆皮南瓜怪集团！", //击杀消息末尾
    "Shrimp!": "脆皮虾！", //击杀消息末尾
    "Shrimp group!": "脆皮虾集团！", //击杀消息末尾
    "Mountimp!": "脆皮山怪！", //击杀消息末尾
    "Mountimp group!": "脆皮山怪集团！", //击杀消息末尾
    "Frimp!": "脆皮森精！", //击杀消息末尾
    "Frimp group!": "脆皮森精集团！", //击杀消息末尾
    "Chickimp!": "脆皮小鸡！", //击杀消息末尾
    "Chickimp group!": "脆皮小鸡集团！", //击杀消息末尾
    "Hippopotamimp!": "脆皮河马！", //击杀消息末尾
    "Hippopotamimp group!": "脆皮河马集团！", //击杀消息末尾
    "Onoudidimp!": "脆皮蜗牛！", //击杀消息末尾
    "Onoudidimp group!": "脆皮蜗牛集团！", //击杀消息末尾
    "Kittimp!": "脆皮小猫！", //击杀消息末尾
    "Kittimp group!": "脆皮小猫集团！", //击杀消息末尾
    "Grimp!": "脆皮护林者！", //击杀消息末尾
    "Grimp group!": "脆皮护林者集团！", //击杀消息末尾
    "Golimp!": "脆皮魔像！", //击杀消息末尾
    "Golimp group!": "脆皮魔像集团！", //击杀消息末尾
    "Seirimp!": "脆皮矿精！", //击杀消息末尾
    "Seirimp group!": "脆皮矿精集团！", //击杀消息末尾
    "Slagimp!": "脆皮炉渣怪！", //击杀消息末尾
    "Slagimp group!": "脆皮炉渣怪集团！", //击杀消息末尾
    "Moltimp!": "脆皮熔金怪！", //击杀消息末尾
    "Moltimp group!": "脆皮熔金怪集团！", //击杀消息末尾
    "Lavimp!": "脆皮火岩怪！", //击杀消息末尾
    "Lavimp group!": "脆皮火岩怪集团！", //击杀消息末尾
    "Flowimp!": "脆皮花妖！", //击杀消息末尾
    "Flowimp group!": "脆皮花妖集团！", //击杀消息末尾
    "Kangarimp!": "脆皮袋鼠！", //击杀消息末尾
    "Kangarimp group!": "脆皮袋鼠集团！", //击杀消息末尾
    "Gnomimp!": "脆皮侏儒！", //击杀消息末尾
    "Gnomimp group!": "脆皮侏儒集团！", //击杀消息末尾
    "Slosnimp!": "脆皮慢蛇！", //击杀消息末尾
    "Slosnimp group!": "脆皮慢蛇集团！", //击杀消息末尾
    "Entimp!": "脆皮树人！", //击杀消息末尾
    "Entimp group!": "脆皮树人集团！", //击杀消息末尾
    "Squirrimp!": "脆皮松鼠！", //击杀消息末尾
    "Squirrimp group!": "脆皮松鼠集团！", //击杀消息末尾
    "Gravelimp!": "脆皮碎石怪！", //击杀消息末尾
    "Gravelimp group!": "脆皮碎石怪集团！", //击杀消息末尾
    "Cthulimp!": "脆皮克苏鲁！", //击杀消息末尾
    "Cthulimp group!": "脆皮克苏鲁集团！", //击杀消息末尾
    "Shadimp!": "脆皮暗影怪！", //击杀消息末尾
    "Shadimp group!": "脆皮暗影怪集团！", //击杀消息末尾
    "Voidsnimp!": "脆皮虚空蛇！", //击杀消息末尾
    "Voidsnimp group!": "脆皮虚空蛇集团！", //击杀消息末尾
    "Goblimp!": "脆皮地精！", //击杀消息末尾
    "Goblimp group!": "脆皮地精集团！", //击杀消息末尾
    "Flutimp!": "脆皮飘兽！", //击杀消息末尾
    "Flutimp group!": "脆皮飘兽集团！", //击杀消息末尾
    "Jestimp!": "脆皮弄臣！", //击杀消息末尾
    "Jestimp group!": "脆皮弄臣集团！", //击杀消息末尾
    "Titimp!": "脆皮泰坦！", //击杀消息末尾
    "Titimp group!": "脆皮泰坦集团！", //击杀消息末尾
    "Chronoimp!": "脆皮时者！", //击杀消息末尾
    "Chronoimp group!": "脆皮时者集团！", //击杀消息末尾
    "Megablimp!": "脆皮超级飞艇！", //击杀消息末尾
    "Megablimp group!": "脆皮超级飞艇集团！", //击杀消息末尾
    "Mitschimp!": "脆皮巨猩猩！", //击杀消息末尾
    "Mitschimp group!": "脆皮巨猩猩集团！", //击杀消息末尾
    "Brickimp!": "脆皮砖汉！", //击杀消息末尾
    "Brickimp group!": "脆皮砖汉集团！", //击杀消息末尾
    "Indianimp!": "脆皮印第安人！", //击杀消息末尾
    "Indianimp group!": "脆皮印第安人集团！", //击杀消息末尾
    "Poseidimp!": "脆皮海王！", //击杀消息末尾
    "Warden!": "典狱长！", //击杀消息末尾
    "Warden group!": "典狱长集团！", //击杀消息末尾
    "Robotrimp!": "脆皮机器人！", //击杀消息末尾
    "Robotrimp group!": "脆皮机器人集团！", //击杀消息末尾
    "Mechimp!": "脆皮机甲！", //击杀消息末尾
    "Mechimp group!": "脆皮机甲集团！", //击杀消息末尾
    "Destructimp!": "脆皮破灭者！", //击杀消息末尾
    "Destructimp group!": "脆皮破灭者集团！", //击杀消息末尾
    "Terminatimp!": "脆皮终结者！", //击杀消息末尾
    "Terminatimp group!": "脆皮终结者集团！", //击杀消息末尾
    "Autoimp!": "脆皮汽车！", //击杀消息末尾
    "Autoimp group!": "脆皮汽车集团！", //击杀消息末尾
    "Artimp!": "脆皮机器艺术家！", //击杀消息末尾
    "Artimp group!": "脆皮机器艺术家集团！", //击杀消息末尾
    "Neutrimp!": "脆皮中子怪！", //击杀消息末尾
    "Neutrimp group!": "脆皮中子怪集团！", //击杀消息末尾
    "Fusimp!": "脆皮聚变怪！", //击杀消息末尾
    "Fusimp group!": "脆皮聚变怪集团！", //击杀消息末尾
    "Hydrogimp!": "脆皮氢怪！", //击杀消息末尾
    "Hydrogimp group!": "脆皮氢怪集团！", //击杀消息末尾
    "Carbimp!": "脆皮碳怪！", //击杀消息末尾
    "Carbimp group!": "脆皮碳怪集团！", //击杀消息末尾
    "Prismimp!": "脆皮棱镜怪！", //击杀消息末尾
    "Prismimp group!": "脆皮棱镜怪集团！", //击杀消息末尾
    "Rainbimp!": "脆皮彩虹兽！", //击杀消息末尾
    "Rainbimp group!": "脆皮彩虹兽集团！", //击杀消息末尾
    "Lightimp!": "脆皮光怪！", //击杀消息末尾
    "Lightimp group!": "脆皮光怪集团！", //击杀消息末尾
    "Meltimp!": "脆皮熔怪！", //击杀消息末尾
    "Meltimp group!": "脆皮熔怪集团！", //击杀消息末尾
    "Sweltimp!": "脆皮酷热者！", //击杀消息末尾
    "Sweltimp group!": "脆皮酷热者集团！", //击杀消息末尾
    "Darknimp!": "脆皮暗罪者！", //击杀消息末尾
    "Darknimp group!": "脆皮暗罪者集团！", //击杀消息末尾
    "C2s": "挑战2", //脚本
    " autoStance2": "", //脚本阵型设置
    ":  Value Input": "：输入值", //脚本各设置界面
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*\-?$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s*[A-Za-z]\s*$/, //带单字母的纯空格
    /^[e\s\d\(]+$/, //主界面
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
    [/^(.*)A green shimmer erupts then disappears, and you hit the ground. You look pretty hungry...$/, '$1一团绿光闪过后，您落到了地面上。您看起来饿极了……'], //源始消息
    [/^(.*)A blue shimmer erupts then disappears as you gracefully take its place. You look like you don't belong here... Well, better start gathering some food.$/, '$1一团蓝光闪过后，您优雅地落在了它之前的位置上。看来您并不属于这里……好吧，该开始收集一些食物了。'], //源始消息
    [/^(.*) Runestones \((.+) Min(s*) (.+) Sec(s*)$/, '$1符石($2分$4秒'], //尖塔等，前置
    [/^(.*) Runestones \((.+) Hour(s*) (.+) Min(s*)$/, '$1符石($2小时$4分'], //尖塔等，前置
    [/^(.*) Runestones \((.+) Day(s*) (.+) Hour(s*)$/, '$1符石($2天$4小时'], //尖塔等，前置
    [/^(.*) Runestones \((.+) Year(s*) (.+) Day(s*)$/, '$1符石($2年$4天'], //尖塔等，前置
    [/^(.*) Runestones \((.+) Sec(s*)$/, '$1符石($2秒'], //尖塔等，前置
    [/^(.*) Runestones \(Long Time$/, '$1符石(时间极长'], //尖塔等，前置
    [/^(.*)% Min$/, '$1% 最小'], //主界面
    [/^(.*)% Max$/, '$1% 最大'], //主界面
    [/^Your Prismatic Shield is equal to (.*)% of your Trimps' maximum Health. All enemy damage hits your Prismatic Shield before Health, and Prismatic Shield always regenerates to full after an enemy is killed.$/, '棱镜护盾的数值等于脆皮最大生命值的$1%。所有的敌人必须将棱镜护盾击穿后方可攻击到脆皮，击杀敌人后棱镜护盾将恢复至上限。'], //主界面
    [/^You're in the wrong Universe! Best run is (.*) min(s*)$/, '您进入了错误的宇宙！最快为$1分钟'], //成就等，前置
    [/^Progress: Best run is (.*) min(s*)$/, '进度：最快为$1分钟'], //成就等，前置
    [/^Progress: Too slow! Best run is (.*) min(s*)$/, '进度：因太慢失败了！最快为$1分钟'], //成就等，前置
    [/^Row Finished! \(Best run is (.*) min(s*)$/, '此类成就全部完成！(最快为$1分钟'], //成就等，前置
    [/^(.*) \((.*) min(s*)$/, '$1 ($2分钟'], //主界面
    [/^(.*)% \((.*)% Total$/, '$1% \(共$2%'], //主界面
    [/^Overkilled Cells$/, '超杀格子数'], //脚本相关，前置
    [/^(.*) Cells$/, '$1个格子'], //主界面
    [/^(.*) extra$/, '额外$1张'], //主界面
    [/^(.+) Min(s*) (.+) Sec(s*)$/, '$1分$3秒'], //主界面
    [/^(.+) Hour(s*) (.+) Min(s*)$/, '$1小时$3分'], //主界面
    [/^(.+) Day(s*) (.+) Hour(s*)$/, '$1天$3小时'], //主界面
    [/^(.+) Year(s*) (.+) Day(s*)$/, '$1年$3天'], //主界面
    [/^(.+) Secs \/ (.+) Secs$/, '$1秒/$2秒'], //主界面
    [/^(.+) Sec(s*)$/, '$1秒'], //主界面
    [/^(.+) minutes \(\+$/, '$1分钟(+'], //主界面
    [/^employed(\s+)$/, '已雇佣$1'], //主界面
    [/^(.+) workspace(s*)$/, '$1 工作区'], //主界面
    [/^You currently have (.*) Dark Essence.$/, '您目前拥有$1黑暗精华。'], //主界面
    [/^Trapping(.+)$/, '捕捉中$1'], //主界面
    [/^Check\sTraps(.+)$/, '检查陷阱$1'], //主界面
    [/^(.+) Foremen$/, '$1 工头'], //主界面
    [/^Farmer X(.*)$/, '农民 X$1'], //主界面
    [/^Lumberjack X(.*)$/, '伐木工 X$1'], //主界面
    [/^Miner X(.*)$/, '矿工 X$1'], //主界面
    [/^Scientist X(.*)$/, '科学家 X$1'], //主界面
    [/^Trainer X(.*)$/, '训练师 X$1'], //主界面
    [/^Explorer X(.*)$/, '探险家 X$1'], //主界面
    [/^Geneticist X(.*)$/, '遗传学家 X$1'], //主界面
    [/^Magmamancer X(.*)$/, '岩浆巫师 X$1'], //主界面
    [/^Meteorologist X(.*)$/, '气象学家 X$1'], //主界面
    [/^Worshipper X(.*)$/, '崇信者 X$1'], //主界面
    [/^Trap X(.*)$/, '陷阱 X$1'], //主界面
    [/^Barn X(.*)$/, '谷仓 X$1'], //主界面
    [/^Shed X(.*)$/, '窝棚 X$1'], //主界面
    [/^Forge X(.*)$/, '锻造厂 X$1'], //主界面
    [/^Hut X(.*)$/, '小屋 X$1'], //主界面
    [/^House X(.*)$/, '宅院 X$1'], //主界面
    [/^Mansion X(.*)$/, '豪宅 X$1'], //主界面
    [/^Hotel X(.*)$/, '宾馆 X$1'], //主界面
    [/^Resort X(.*)$/, '度假村 X$1'], //主界面
    [/^Gateway X(.*)$/, '维度裂隙 X$1'], //主界面
    [/^Wormhole X(.*)$/, '虫洞 X$1'], //主界面
    [/^Collector X(.*)$/, '汲能设施 X$1'], //主界面
    [/^Warpstation X(.*)$/, '跃迁核心 X$1'], //主界面
    [/^Hub X(.*)$/, '中心枢纽 X$1'], //主界面
    [/^Gym X(.*)$/, '健身房 X$1'], //主界面
    [/^Smithy X(.*)$/, '铁匠铺 X$1'], //主界面
    [/^Tribute X(.*)$/, '贡品 X$1'], //主界面
    [/^Nursery X(.*)$/, '托儿所 X$1'], //主界面
    [/^Microchip X(.*)$/, '微型芯片 X$1'], //主界面
    [/^Antenna X(.*)$/, '气象天线 X$1'], //主界面
    [/^Shield X(.*)$/, '盾牌 X$1'], //主界面
    [/^Dagger X(.*)$/, '匕首 X$1'], //主界面
    [/^Boots X(.*)$/, '靴子 X$1'], //主界面
    [/^Mace X(.*)$/, '狼牙棒 X$1'], //主界面
    [/^Helmet X(.*)$/, '头盔 X$1'], //主界面
    [/^Polearm X(.*)$/, '战戟 X$1'], //主界面
    [/^Pants X(.*)$/, '裤子 X$1'], //主界面
    [/^Battleaxe X(.*)$/, '战斧 X$1'], //主界面
    [/^Shoulderguards X(.*)$/, '护肩 X$1'], //主界面
    [/^Greatsword X(.*)$/, '巨剑 X$1'], //主界面
    [/^Breastplate X(.*)$/, '胸铠 X$1'], //主界面
    [/^Arbalest X(.*)$/, '强弩 X$1'], //主界面
    [/^Gambeson X(.*)$/, '棉甲 X$1'], //主界面
    [/^- (.+) Seconds$/, '- $1秒'], //主界面
    [/^0(\s+)for(\s+)no(\s+)limit$/, '设为0则无限制'], //主界面
    [/^AutoGold Helium \((.*)\/$/, '金色升级氦($1/'], //主界面
    [/^AutoGold Radon \((.*)\/$/, '金色升级氡($1/'], //主界面
    [/^AutoGold Battle \((.*)\/$/, '金色升级战斗($1/'], //主界面
    [/^AutoGold Void \((.*)\/$/, '金色升级虚空($1/'], //主界面
    [/^(.*) remaining enem(y|ies) in your current Zone (is|are) holding Dark Essence. Your current enemy at this Zone would be worth (.*) Essence if it were holding any.$/, '当前区域剩下$1个敌人可掉落黑暗精华。如果当前敌人掉落了黑暗精华，将掉落$4黑暗精华。'],
    [/^Your pet RoboTrimp seems to be gifted at distorting the magnetic field around certain Bad Guys, especially Improbabilities. You can activate this ability once every 5 Zones in order to tell your RoboTrimp to reduce the attack damage of the next Improbability by (.*)%. This must be reactivated each time it comes off cooldown.$/, '您的小脆皮机器人似乎很擅长扭曲乌有者周围的磁场。每5个区域，您可以激活此能力，减少此区域乌有者$1%的攻击力。每次激活发射电磁尖啸后，都需要手动再次激活。'], //主界面
    [/^This enemy is harmed by the Empowerment of Poison, and is taking (.*) extra damage per turn.$/, '此敌人被毒赋能影响了，每回合额外受到$1伤害。'], //主界面
    [/^This enemy has been chilled by the Empowerment of Ice, is taking (.*)% more damage, and is dealing (.*)% less damage with each normal attack.$/, '此敌人因冰赋能被冰冻了，额外受到$1%伤害，普通攻击造成的伤害减少$2%。'], //主界面
    [/^There is a rather large amount of Wind swelling around this enemy, increasing all Helium gained by (.*)% and all other resources by (.*)%.$/, '敌人身旁的风相当猛烈，增加$1%的氦获取量以及其他资源$2%的获取量。'], //主界面
    [/^There is a rather large amount of Wind swelling around this enemy, increasing all non-Helium  resources by (.*)%.$/, '敌人身旁的风相当猛烈，增加$1%的非氦资源获取量。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy attacks twice - once before you, and once again after you. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人每次攻击两下-在您攻击前和攻击后各攻击一下。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy attacks twice - once before you, and once again after you. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人每次攻击两下-在您攻击前和攻击后各攻击一下。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has a 25% chance to crit you for 400% extra damage. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人有25%的概率额外造成400%的伤害。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has a 25% chance to crit you for 400% extra damage. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人有25%的概率额外造成400%的伤害。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, every time this Bad Guy attacks, you will lose an additional 20% of your$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人每次攻击时，使您额外失去20%的 '], //主界面
    [/^health. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '生命值。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^health. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '生命值。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 2x attack. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人攻击力额外增加2倍。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 2x attack. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人攻击力额外增加2倍。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 5x health. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人生命值额外增加5倍。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 5x health. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人生命值额外增加5倍。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has a 30% chance to dodge your attacks. It will also drop 7.5% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人有30%概率闪避您的攻击。另外，它还会掉落氦，数值为通过此区域所得氦的7.5%。'], //主界面
    [/^All corrupted enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has a 30% chance to dodge your attacks. It will also drop 15% of the helium you would normally get from completing this Zone.$/, '所有腐化敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人有30%概率闪避您的攻击。另外，它还会掉落氦，数值为通过此区域所得氦的15%。'], //主界面
    [/^All Healthy enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy attacks twice for 1.5x damage - once before you, and once again after you. It will also drop 45% of the helium you would normally get from completing this Zone.$/, '所有健康敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人每次攻击两下-在您攻击前和攻击后各攻击一下，且攻击力为1.5倍。另外，它还会掉落氦，数值为通过此区域所得氦的45%。'], //主界面
    [/^All Healthy enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has a 25% chance to crit you for 600% extra damage. It will also drop 45% of the helium you would normally get from completing this Zone.$/, '所有健康敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人有25%的概率额外造成600%的伤害。另外，它还会掉落氦，数值为通过此区域所得氦的45%。'], //主界面
    [/^All Healthy enemies currently deal (.*)X damage and have (.*)X health. In addition, every time this Bad Guy attacks, you will lose an additional 30% of your$/, '所有健康敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人每次攻击时，使您额外失去30%的 '], //主界面
    [/^health. It will also drop 45% of the helium you would normally get from completing this Zone.$/, '生命值。另外，它还会掉落氦，数值为通过此区域所得氦的45%。'], //主界面
    [/^All Healthy enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 2.5x attack. It will also drop 45% of the helium you would normally get from completing this Zone.$/, '所有健康敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人攻击力额外增加2.5倍。另外，它还会掉落氦，数值为通过此区域所得氦的45%。'], //主界面
    [/^All Healthy enemies currently deal (.*)X damage and have (.*)X health. In addition, this Bad Guy has an additional 7.5x health. It will also drop 45% of the helium you would normally get from completing this Zone.$/, '所有健康敌人多造成$1倍伤害，且生命值变为$2倍。另外，此敌人生命值额外增加7.5倍。另外，它还会掉落氦，数值为通过此区域所得氦的45%。'], //主界面
    [/^This map has become unstable due to Corruption. Enemy attack increased by (.*)X, and health increased by (.*)X.$/, '此地图由于腐化开始变得不稳定。敌人攻击力增加$1倍，生命值增加$2倍。'], //主界面
    [/^This Void Map has become unstable due to Corruption. Enemy attack increased by (.*)X, and health increased by (.*)X. Helium at the end of the map is now double what you would earn from a World Zone, including Corrupted cells!$/, '此虚空地图由于腐化开始变得不稳定。敌人攻击力增加$1倍，生命值增加$2倍。地图最后获取的氦是世界上最后格子以及腐化格子获取量之和的两倍！'], //主界面
    [/^(.*)% of the damage from this Bad Guy pierces through block$/, '此敌人的$1%攻击力可以穿透格挡'], //主界面
    [/^Your Trimps are dealing (.*)% less damage and taking (.*)% of their total health as damage per attack.$/, '您的脆皮减少$1%伤害，每次被攻击时受到生命值上限$2%的伤害。'], //主界面
    [/^Your Trimps are dealing (.*)% extra damage for taking (.*) second(s*) to prepare.$/, '由于脆皮们花费了$2秒来准备，它们可以多造成$1%伤害。'], //主界面
    [/^Your Trimps are dealing (.*)% extra damage for taking (.*) second(s*) to populate.$/, '由于脆皮们花费了$2秒来繁殖，它们可以多造成$1%伤害。'], //主界面
    [/^Your Trimps have (.*) less attack, but all Trimps can gather (.*) faster. You will gain one stack from killing Bad Guys in the world, and lose one stack for killing Bad Guys in maps.$/, '您的脆皮们减少了$1攻击力，但资源获取速度增加了$2。每在世界上击杀敌人时获得一层，每在地图中击杀敌人时失去一层。'], //主界面
    [/^Your Trimps have (.*) less health, but all Trimps can gather (.*) faster. You will gain one stack from killing Bad Guys in the world, and lose one stack for killing Bad Guys in maps.$/, '您的脆皮们减少了$1生命值，但资源获取速度增加了$2。每在世界上击杀敌人时获得一层，每在地图中击杀敌人时失去一层。'], //主界面
    [/^Your Trimps are charging up for a Gamma Burst! When Charging reaches 5 stacks, your Trimps will release a burst of energy, dealing (.*)% of their attack damage.$/, '您的脆皮们正在为伽马爆发蓄能！当蓄能层数到达5层时，脆皮将释放积蓄的能量，对敌人造成$1%攻击力的伤害。'], //主界面
    [/^Attack is increased (.*)X for the next (.*) second(s*)$/, '攻击力在剩余$2秒内变为$1倍'], //主界面
    [/^Attack is increased (.*)X for the next (.*) minute(s*)$/, '攻击力在剩余$2分钟内变为$1倍'], //主界面
    [/^Things are quickly becoming tougher. Gathering, looting, and Trimp attack are reduced by (.*)%.$/, '一切都在快速变难中。采集、劫掠获取的资源量，以及脆皮攻击力减少了$1%。'], //主界面
    [/^Trimp attack and health increased by (.*).$/, '脆皮的攻击力和生命值增加了$1。'], //主界面
    [/^This Bad Guy is toxic. You will obtain (.*)% more resources! Oh, also, this Bad Guy has 5x attack, 2x health, your Trimps will lose 5% health each time they attack, and the toxic air is causing your Trimps to breed (.*)% slower. These stacks will reset after clearing the Zone.$/, '此敌人是有毒的。您可以额外获得$1%资源！哦，另外，此敌人攻击力变为5倍，生命值变为2倍，而且每次攻击一个毒性敌人后，脆皮将失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢$2%。毒性层数在通过一个区域后重置。'], //主界面
    [/^(.*)You have completed the Daily challenge! You have been rewarded with (.*) extra Helium!$/, '$1您完成了日常挑战！您额外获得了$2氦！'], //日常挑战完成消息，前置
    [/^(.*)You have completed the Daily challenge! You have been rewarded with (.*) extra Radon!$/, '$1您完成了日常挑战！您额外获得了$2氡！'], //日常挑战完成消息，前置
    [/^(.+) extra Helium!$/, '额外$1氦！'], //主界面
    [/^(.+) extra Radon!$/, '额外$1氡！'], //主界面
    [/^Min (.+), Max$/, '最低 $1，最高'], //主界面
    [/^(\d+) \(Zone$/, '$1(区域'], //主界面
    [/^Essence(\s+)$/, '精华$1'], //主界面
    [/^(.*) Affordable$/, '可升级$1个'], //主界面
    [/^Respec \((\d*) Free!$/, '洗点($1次免费！'], //主界面
    [/^(.*)(\s+)Tokens$/, '$1$2符记'], //主界面
    [/^(\s+)Poison(\s+)$/, '$1毒$2'], //主界面
    [/^(\s+)Wind(\s+)$/, '$1风$2'], //主界面
    [/^(\s+)Ice(\s+)$/, '$1冰$2'], //主界面
    [/^Trade (.*) Tokens of Poison and get back (.*) Tokens of Wind.$/, '将$1毒符记转换为$2风符记。'], //自然赋能，前置
    [/^Trade (.*) Tokens of Poison and get back (.*) Tokens of Ice.$/, '将$1毒符记转换为$2冰符记。'], //自然赋能，前置
    [/^Trade (.*) Tokens of Wind and get back (.*) Tokens of Poison.$/, '将$1风符记转换为$2毒符记。'], //自然赋能，前置
    [/^Trade (.*) Tokens of Wind and get back (.*) Tokens of Ice.$/, '将$1风符记转换为$2冰符记。'], //自然赋能，前置
    [/^Trade (.*) Tokens of Ice and get back (.*) Tokens of Poison.$/, '将$1冰符记转换为$2毒符记。'], //自然赋能，前置
    [/^Trade (.*) Tokens of Ice and get back (.*) Tokens of Wind.$/, '将$1冰符记转换为$2风符记。'], //自然赋能，前置
    [/^Trade(.*)$/, '交易$1'], //主界面
    [/^Spire([\sIVXLCDM]*)$/, '尖塔$1'], //主界面
    [/^(\d+)% Map Bonus$/, '$1%地图奖励'], //主界面
    [/^Zone (.*), Cell$/, '区域 $1，格子'], //主界面
    [/^You have been in this Zone for (.*) second(s*)$/, '您已经在此区域停留了$1秒'], //主界面
    [/^You have been in this Zone for (.*) min(s*), (.*) sec(s*)$/, '您已经在此区域停留了$1分钟，$3秒'], //主界面
    [/^You have been in this Zone for (.*)$/, '您已经在此区域停留了$1'], //主界面
    [/^(.*) group(s*) of Trimps ha(s|ve) died in this Spire.$/, '$1队脆皮已阵亡于尖塔之中。'], //主界面
    [/^Bionic Wonderland ([IVXLCDM]+), Level (.*) \((.*)\), Cell$/, '仿生仙境 $1，等级 $2 ($3)，格子'], //主界面
    [/^ Level (.*) \((.*)\), Cell$/, '等级 $1 ($2)，格子'], //主界面
    [/^ Level (.*), Cell$/, '等级 $1，格子'], //主界面
    [/^You have been on this map for (.*) second(s*)$/, '您已经在此地图停留了$1秒'], //主界面
    [/^You have been on this map for (.*) min(s*), (.*) sec(s*)$/, '您已经在此地图停留了$1分钟，$3秒'], //主界面
    [/^You have been on this map for (.*)$/, '您已经在此地图停留了$1'], //主界面
    [/^You have (.*) Void Map(s*) \((.*) stacked\).$/, '您有$1张虚空地图(融合后有$3张)。'], //主界面
    [/^You have (.*) Void Map(s*)$/, '您有$1张虚空地图'], //主界面
    [/^(\s+)Fight(\s+)$/, '$1战斗$2'], //主界面
    [/^(\d+)(.*) Trimp(s*)$/, '$1$2脆皮'], //主界面
    [/^(\s+)AutoFight Off(\s+)$/, '$1关闭自动战斗$2'], //主界面
    [/^(\s+)Void Maps(\s+)$/, '$1虚空地图$2'], //主界面
    [/^(\s+)Portal(\s+)$/, '$1传送门$2'], //主界面
    [/^(\s+)Repeat Off(\s+)$/, '$1关闭重复$2'], //主界面
    [/^(\s+)Finish Daily(\s+)$/, '$1完成日常$2'], //主界面
    [/^(\s+)Exit Spire(\s+)$/, '$1退出尖塔$2'], //主界面
    [/^You are about to recycle all maps below level (.*). Are you sure\?$/, '您将回收$1级以下的所有地图。您确定要这么做吗？'], //主界面
    [/^(\s+)Level$/, '$1地图等级'], //主界面
    [/^(\s+)Create(\s+)$/, '$1制造$2'], //主界面
    [/^(\s+)Loot(\s+)$/, '$1劫掠$2'], //主界面
    [/^(\s+)Size(\s+)$/, '$1尺寸$2'], //主界面
    [/^(\s+)Difficulty(\s+)$/, '$1难度$2'], //主界面
    [/^(\s+)Biome(\s+)$/, '$1生物群落$2'], //主界面
    [/^(\s+)Special Modifier(\s+)$/, '$1特殊修饰符$2'], //主界面
    [/^(\s+)Unlock at Z$/, '$1解锁于区域'], //主界面
    [/^(\s+)Perfect Sliders(\s+)$/, '$1完美滑块$2'], //主界面
    [/^(\s+)Extra Zones(\s+)$/, '$1额外区域$2'], //主界面
    [/^(\s+)Run Map(\s+)$/, '$1运行地图$2'], //主界面
    [/^(\s+)Recycle Map(\s+)$/, '$1回收地图$2'], //主界面
    [/^(\s+)You can earn achievements by doing stuff. Each achievement will boost the amount of damage your Trimps can deal, and later achievements grant a larger bonus. You can learn more about an achievement by hovering your mouse over it.$/, '$1满足特定的条件可以获得成就。每个成就都可以使您的脆皮造成更多伤害，越往后的成就加成越高。您可以将鼠标停留在某个成就上来了解它的详细信息。'], //主界面
    [/^\| What's New(\s+)$/, '| 更新内容$1'], //主界面
    [/^(\s+)Save$/, '$1保存'], //主界面
    [/^(.*)\(PAUSED$/, '$1(已暂停'], //主界面
    [/^Each Trap allows you to catch (.*) thing(s*).$/, '每个陷阱可以让您抓住$1个东西。'], //建筑
    [/^Has room for (.*) more lovely Trimp(s*). All Trimp housing has enough workspaces for only half of the Trimps that can live there.$/, '可以容纳$1个可爱的脆皮。所有的小屋都有着充足的工作区，因为只有一半的脆皮可以住在那里。'], //建筑
    [/^A better house for your Trimps! Each house supports up to (.*) more Trimp(s*).$/, '脆皮们有更好的宅院可以住了！每个宅院可以容纳$1个脆皮。'], //建筑
    [/^A pretty sick mansion for your Trimps to live in. Each Mansion supports (.*) more Trimp(s*).$/, '脆皮们有棒极了的豪宅可以住了！每个豪宅可以容纳$1个脆皮。'], //建筑
    [/^A fancy hotel for many Trimps to live in. Complete with room service and a mini bar. Supports (.*) Trimp(s*).$/, '一个可以容纳大量脆皮的奢华宾馆。提供客房服务，并有一个小酒吧。每个宾馆可以容纳$1个脆皮。'], //建筑
    [/^A huge resort for your Trimps to live in. Sucks for the ones still stuck in huts. Supports (.*) Trimp(s*).$/, '一个巨大的度假村，可供脆皮居住。还住在小屋里的脆皮简直弱爆了。每个度假村可以容纳$1个脆皮。'], //建筑
    [/^A Gateway to another dimension, where your Trimps can sleep and work. Supports (.*) Trimp(s*).$/, '一个通往其他维度的裂隙，脆皮们可以在那边正常睡觉和工作。每个维度裂隙可以容纳$1个脆皮。'], //建筑
    [/^Use your crazy, helium-cooled, easy-to-aim wormhole generator to create easy-to-travel links to other colonizable planets where your Trimps can sleep and work. Each supports (.*) Trimps.$/, '使用疯狂氦冷易瞄的虫洞发生器，建立易于通行的链接，通向其他的宜居星球，脆皮们可以在那边正常睡觉和工作。每个虫洞可以容纳$1个脆皮。'], //建筑
    [/^You are about to purchase (.*) Wormholes,$/, '您将购买$1个虫洞，'], //建筑
    [/^Each collector allows you to harvest more of the power of your home star, allowing your Trimps to colonize a larger chunk of your solar system. Each supports (.*) Trimp(s*).$/, '每个汲能设施都可以让您从母星汲取更多的能量，支持脆皮们在太阳系中占领更多的地盘。每个汲能设施可以容纳$1个脆皮。'], //建筑
    [/^Create a gigantic Warpstation, capable of housing tons of Trimps and instantly transporting them back to the home planet when needed. Supports (.*) Trimps.$/, '建造一个巨型的跃迁核心，可以容纳超大量的脆皮，并且在有需要的时候可以将它们传送回母星。每个跃迁核心可以容纳$1个脆皮。'], //建筑
    [/^You had (.*) Warpstations when you purchased your last Gigastation \((.*)\).$/, '上次购买千兆核心($2)时您有$1个跃迁核心。'], //建筑
    [/^Cannot be purchased directly. Level is always equal to your total amount of Huts, Houses, Mansions, Hotels, Resorts, Gateways, and Collectors. Supports (.*) Trimps.$/, '无法直接建造。数量等于小屋、宅院、豪宅、宾馆、度假村、维度裂隙、汲能设施的数量之和。每个中心枢纽可以容纳$1个脆皮。'], //建筑
    [/^A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by (.*) and increases the base block of all Gyms by (.*)% \(compounding\).$/, '脆皮们解决问题的一个地方。每个健身房增加每个脆皮可以格挡的伤害量，数值为$1，并且使所有健身房的基础格档数值增加$2%(相互叠乘)。'], //建筑
    [/^A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by (.*).$/, '脆皮们解决问题的一个地方。每个健身房增加每个脆皮可以格挡的伤害量，数值为$1。'], //建筑
    [/^You have purchased (.*) total Nurseries.$/, '您总共建造了$1个托儿所。'], //建筑
    [/^Currently increasing Cruffys' Exp by (.+)% and Enemy attack and health by (.+)%.$/, '目前使朽朽的经验值获取量增加$1%，敌人的攻击力和生命值增加$2%。'], //建筑
    [/^Train one of your Trimps in the ancient art of farming. Each Farmer harvests (.*) food per second.$/, '使用古老的耕作艺术训练一个脆皮。每个农民每秒收获$1食物。'], //工作
    [/^Show a Trimp how to cut one of those weird trees down. Each Lumberjack hauls back (.*) logs per second.$/, '向一个脆皮展示如何砍伐那些怪树。每个伐木工每秒拉回$1木头。'], //工作
    [/^Send your misbehaving Trimps to the mines for some therapeutic work. Each Miner can find and smelt (.*) bars of metal per second.$/, '把品行不端的脆皮丢到矿井里干点“放松”的活。每个矿工每秒收获$1金属。'], //工作
    [/^It takes some patience, but you can teach these Trimps to do some research for you. Each Scientist records (.*) units of pure science each second.$/, '虽然需要费点心思教它们，但您可以让脆皮们替您做些研究。每个科学家每秒收获$1科学点。'], //工作
    [/^Each trainer will increase the base amount your soldiers can block by (.*)%.$/, '每个训练师可以使士兵的基础格挡数值增加$1%。'], //工作
    [/^Each trainer will increase the base amount your soldiers can block by (.*)%. \((.*)% increased by (.*)% thanks to (.*)$/, '每个训练师可以使士兵的基础格挡数值增加$1%。(基础数值为$2%，由于您拥有$4，效果增加了$3%'], //工作
    [/^Each explorer will find an average of (.*) fragments each second.$/, '每个探险家每秒发现$1碎片。'], //工作
    [/^Owning (.*) Geneticist(s*) multiplies your breed speed by (.*), and adds (.*) Health.$/, '您目前有$1个遗传学家，繁殖速度减少$3，生命值增加$4。'], //工作
    [/^For each 10 minutes you spend in a Zone with Magmamancers up to (.*) minutes, your Magmamancer bonus will increase by 20% \(compounding\). Your current bonus is$/, '每在有岩浆巫师的区域停留10分钟(最多$1分钟)，岩浆巫师的加成就提升20%(效果叠乘)。您目前的加成为 '], //工作
    [/^and counting your Magmamancermancy  Masteries you've been on this Zone for over (.*) minutes \(Max\).$/, '算上岩浆巫术的几个专精效果，您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and counting your Magmamancermancy  Masteries you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '算上岩浆巫术的几个专精效果，您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^and counting your Magmamancermancy  Mastery you've been on this Zone for over (.*) minutes \(Max\).$/, '算上岩浆巫术专精效果，您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and counting your Magmamancermancy  Mastery you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '算上岩浆巫术专精效果，您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^and you've been on this Zone for over (.*) minutes \(Max\).$/, '您已经在此区域停留了超过$1分钟(效果达到最大)'], //工作
    [/^and you've been on this Zone for (.*) minute(s*). In (.*) minute(s*), this bonus will increase to (.*)%.$/, '您已经在此区域停留了$1分钟。再经过$3分钟，加成将提升为$5%。'], //工作
    [/^Your next Magmamancer will increase the total bonus by (.*)% \(compounding, hold Ctrl to see formula$/, '下一个岩浆巫师可以使总加成提升$1%(效果叠乘，按下Ctrl键可看到详细公式'], //工作
    [/^. Completing Spires II through V will each divide this ratio by 10. If your ratio ever falls below (.*):1, an Amalgamator will leave. Your current ratio is$/, ' 时，它们将自动出现。从尖塔 II开始到尖塔 V，自上次传送后每通过一个尖塔，此比值就除以10。如果比值低于$1:1，一名合并者将离开。您目前的比值为 '], //工作
    [/^Increase the amount of Radon gained from all sources by (.*)% per Meteorologist hired. Meteorologists require some time to get situated after being hired, and must be active for an entire Zone before they can start collecting any extra Radon.$/, '每个气象学家可以将氡的获取量提升$1%。雇佣后，气象学家需要一些时间来安顿下来，在一个区域后才可以开始获取更多的氡。'], //工作
    [/^You have (.*) Meteorologist(s*), but (.*) w(as|ere) hired on this Zone and (is|are) not yet available.$/, '您目前有$1个气象学家，但其中$3个是当前区域雇佣的，还没法开始工作。'], //工作
    [/^(.*) Meteorologist(s*) (is|are) currently collecting, granting (.*)% extra Radon.$/, '目前有$1个气象学家正在工作，氡的加成为$4%。'], //工作
    [/^Thanks to your super cool Antenna array, you're also gaining \+(.*)% extra Food from gathering!$/, '由于您超级炫酷的气象天线阵列的效果，您可以额外采集$1%的食物！'], //工作
    [/^Thanks to your super cool Antenna array, you're also gaining \+(.*)% extra Food from gathering and  Health for your Soldiers!$/, '由于您超级炫酷的气象天线阵列的效果，您可以额外采集$1%的食物，并且士兵额外获得$1%生命值！'], //工作
    [/^Thanks to your super cool Antenna array, you're also gaining \+(.*)% extra Food from gathering,  Health for your Soldiers, and Metal from mining!$/, '由于您超级炫酷的气象天线阵列的效果，您可以额外采集$1%的食物和金属，并且士兵额外获得$1%生命值！'], //工作
    [/^(.*)That Chickimp dropped (.*) food!$/, '$1脆皮小鸡掉落了$2食物！'], //特定敌人
    [/^(.*)You hear nearby Kittimps running away in fear and decide to check out their former home. There, you find a prey pile with (.*) food!$/, '$1附近的脆皮小猫害怕地跑开了，您决定去它们的窝里看看。接着您在那发现了$2食物！'], //特定敌人
    [/^(.*)That Grimp dropped (.*) wood!$/, '$1脆皮护林者掉落了$2木头！'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) fragments before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了$2碎片。'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) bars of metal before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了$2金属。'], //特定敌人
    [/^(.*)That Seirimp dropped (.*) metal! Neat-O.$/, '$1脆皮矿精掉落了$2金属！真棒。'], //特定敌人
    [/^(.*)That Slagimp fell over, and (.*) gems popped out! How about that\?!$/, '$1脆皮炉渣怪倒下了，$2宝石冒了出来！什么情况？！'], //特定敌人
    [/^(.*)The Moltimp thanked you for the combat, and handed you (.*) bars of metal! Then he died.$/, '$1脆皮熔金怪表示打得很尽兴，并交给您$2金属！然后它就凉了。'], //特定敌人
    [/^(.*)The Entimp is no more. You manage to salvage (.*) logs of wood from his trunk!$/, '$1脆皮树人再也不会动了。您从它的树干上获取了$2木头！'], //特定敌人
    [/^(.*)Time for some stew! You scored (.*) food from that $/, '$1该炖点什么吃了！您获得了$2食物，因为您烹饪了那只'], //特定敌人
    [/^(.*)You sift through the Gravelimp, and manage to find (.*) bars of metal! Good on you!$/, '$1您筛了一下碎石怪留下的东西，发现了$2金属！真不错！'], //特定敌人
    [/^(.*)That Blimp dropped (.*) Food, Wood and Metal! That should be useful.$/, '$1脆皮飞艇掉落了$2食物，木头和金属！一定能派上用场的。'], //特定敌人
    [/^(.*)You were able to extract (.*) Helium Canisters from that $/, '$1您提取了$2氦，取自'], //特定敌人
    [/^(.*)You were able to extract (.*) Radon Vials from that $/, '$1您提取了$2氡，取自'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map.$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送到了下一张虚空地图。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Helium!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了$2氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Radon!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了$2氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world .$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回世界。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Helium!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回世界，并额外获取了$2氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Radon!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回世界，并额外获取了$2氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber.$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回地图界面。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Helium!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回地图界面，并额外获取了$2氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Radon!$/, '$1脆皮克苏鲁与它藏身的地图一起遁入了黑暗。您被传送回地图界面，并额外获取了$2氡！'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot.$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot. You gained another (.*) Helium!$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。您额外获得了$2氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的$2张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的$2张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Helium, you've earned an additional (.*) Helium!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的$2张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得$3%氦，您最后额外获得了$4氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Radon, you've earned an additional (.*) Radon!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的$2张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得$3%氡，您最后额外获得了$4氡！'], //特定敌人
    [/^(.*)That Dragimp dropped (.*) gems!$/, '$1脆皮龙掉落了$2宝石！'], //特定敌人
    [/^(.*)Mitschimp dropped (.*) wood!$/, '$1脆皮巨猩猩掉落了$2木头！'], //特定敌人
    [/^(.*)That Prismimp dropped (.*) gems, how sweet of it!$/, '$1脆皮棱镜怪掉落了$2宝石，太好啦！'], //特定敌人
    [/^(.*)You feel bad about slaying an incredibly rare Rainbimp, but at least he dropped (.*) gems! Totally worth.$/, '$1杀掉稀有的脆皮彩虹兽让人有点难过，但它掉落了$2宝石！值了。'], //特定敌人
    [/^(.*)The Lightimp's light floats up and away, unbothered by the fact that you just killed its body. Since it doesn't want the body anymore, you break it down in to (.*) gems!$/, '$1脆皮光怪的光亮向上飘走了，看起来一点也没有被失去身体的事实打扰到。既然它自己也不在乎，您索性将它的身体打碎，获得了$2宝石！'], //特定敌人
    [/^(.*)What a surprise, the Meltimp is melting! You find a healthy stack of (.*) metal where it used to be!$/, '$1真意外，脆皮熔怪熔化了！您在它熔化的地方发现了$2金属！'], //特定敌人
    [/^(.*)That Sweltimp chucked (.*) bars of metal right at your head! You'll take it though, thanks guy!$/, '$1脆皮酷热者把$2金属扔向了您的头！您将这些带走了，谢了伙计！'], //特定敌人
    [/^(.*)Indianimp dropped (.*) metal!$/, '$1脆皮印第安人掉落了$2金属！'], //特定敌人
    [/^(.*)Poseidimp explodes into a swirling tornado of fish and aquatic life. You catch some of it and bring back (.*) Food!$/, '$1脆皮海王爆炸后，形成了一股海洋生物的旋风。您抓住了其中的一些生物，获得了$2食物！'], //特定敌人
    [/^(.*)Robotrimp discombobulated. Loot inspection reveals: (.*) wood and (.*) food. Splendiferous.$/, '$1脆皮机器人，思维，混乱。战利品，检查，发现：$2木头，$3食物。极好。'], //特定敌人
    [/^(.*)Mechimp disengaged. Reward encountered: (.*) bars of metal. Huzzah.$/, '$1脆皮机甲，战斗，不能。奖励：$2金属。撒花。'], //特定敌人
    [/^(.*)Destructimp shorted out. Salvage results: (.*) bars of metal. Acceptable.$/, '$1脆皮破灭者，已短路。修复，结果：$2金属。差强，人意。'], //特定敌人
    [/^(.*)Terminatimp Terminated. Findings: (.*) bars of metal. Hasta la Vista.$/, '$1脆皮终结者，已终结。发现：$2金属。后会，有期。'], //特定敌人
    [/^(.*)Autoimp force quit. Memory dump provides (.*) bars of metal and no clues. It's a feature!$/, '$1脆皮汽车，强制，关闭。内存，获得，$2金属。无线索。这是，特性。'], //特定敌人
    [/^(.*)The Artimp wordlessly sputters, whirrs, beeps, then drops (.*) perfect cubes of metal on the ground. Cubist art is your favorite!$/, '$1脆皮机器艺术家发出了一堆意味不明的声音，最后在地上留下了一个完美的立方，里面装着$2金属。立方主义是您的最爱！'], //特定敌人
    [/^(.*)The Neutrimp gasps, shimmers, squeaks, then poofs into a quickly dispersing purple cloud. You spend a few moments trying to make sense of what you've just seen, but look around and find (.*) wood and (.*) metal instead!$/, '$1脆皮中子怪喘息闪光嘎吱作响，然后噗的一声变成了一团迅速分散的紫色烟雾。您半天没搞明白到底发生了什么，最后您放弃了，而在旁边发现了$2木头和$3金属！'], //特定敌人
    [/^(.*)The Fusimp explodes, leaving behind (.*) bars of metal and a nice dose of radiation.$/, '$1脆皮聚变怪爆炸了，留下了$2金属，和大量辐射。'], //特定敌人
    [/^(.*)Before you can blink, the Hydrogimp vaporizes. That's fine though, it left (.*) food for you!$/, '$1脆皮氢怪在您眨眼前就漏光了气。好在它还为您留下了$2食物！'], //特定敌人
    [/^(.*)The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is (.*) wood.$/, '$1脆皮碳怪噼啪作响，迅速缩小。不一会儿，只剩下了$2木头。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canisters from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了$2氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vials from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了$2氡。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canister from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了$2氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vial from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了$2氡。让它长长记性。'], //特定敌人
    [/^(.*)The Omnipotrimp explodes, killing all of your soldiers!$/, '$1全能者爆炸了，杀死了所有士兵！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了$2金属！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Hulking Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮大型变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了$2金属！'], //特定敌人
    [/^(.*)You have completed The Black Bog! 1 stack of Exhausted and Motivated have been removed from your Trimps.$/, '$1您通过了黑色泥沼！脆皮同时减少了1层疲惫不堪和1层积极前进。'], //特定敌人
    [/^(.*)That Randimp dropped (.*) gems! What a bro!$/, '$1脆皮百变怪掉落了$2宝石！真是好兄弟！'], //特定敌人
    [/^(.*)That Goblimp dropped (.*) gems! What a bro!$/, '$1脆皮地精掉落了$2宝石！真是好兄弟！'], //特定敌人
    [/^Drops (.*)x Gems$/, '掉落$1倍的宝石'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems! Thanks $/, '$1脆皮百变怪交给您$2宝石！谢了'], //特定敌人
    [/^(.*)That Feyimp gave you (.*) gems! Thanks $/, '$1脆皮小妖交给您$2宝石！谢了'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Randimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮百变怪那顺走了$2碎片！反正她看起来也用不上，别难过。'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Flutimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮飘兽那顺走了$2碎片！反正她看起来也用不上，别难过。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了$2个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了$2个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下$2个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下$2个脆皮！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了$2个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了$2个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下$2个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下$2个脆皮！'], //特定敌人
    [/^(.*)Seeing the Randimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮百变怪挂掉，脆皮们工作努力程度增加了$3%！'], //特定敌人
    [/^(.*)Seeing the Whipimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮鞭者挂掉，脆皮们工作努力程度增加了$3%！'], //特定敌人
    [/^(.*)The ground up Randimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮百变怪倒下了，但它可以让脆皮繁殖速度增加$2%！'], //特定敌人
    [/^(.*)The ground up Venimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮爱神倒下了，但它可以让脆皮繁殖速度增加$2%！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) food!$/, '$1从脆皮百变怪那获得$2食物！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) wood!$/, '$1从脆皮百变怪那获得$2木头！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) metal!$/, '$1从脆皮百变怪那获得$2金属！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) science!$/, '$1从脆皮百变怪那获得$2科学点！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems!$/, '$1从脆皮百变怪那获得$2宝石！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) food!$/, '$1从脆皮弄臣那获得$2食物！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) wood!$/, '$1从脆皮弄臣那获得$2木头！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) metal!$/, '$1从脆皮弄臣那获得$2金属！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) science!$/, '$1从脆皮弄臣那获得$2科学点！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) gems!$/, '$1从脆皮弄臣那获得$2宝石！'], //特定敌人
    [/^(.*)That Randimp made your Trimps super strong!$/, '$1脆皮百变怪使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong!$/, '$1脆皮泰坦使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong! \(Titimp wishes to remind you that his name is pronounced "Tie Timp"$/, '$1脆皮泰坦使脆皮们变得更强！(脆皮泰坦提醒您，它的名字不是“太躺”，跟“躺赢”也没有关系'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮百变怪掉落了$2食物，$3木头，$4金属，和$5科学点！'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮百变怪掉落了$2食物，$3木头，$4金属，$5科学点，和$6宝石！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮时者掉落了$2食物，$3木头，$4金属，和$5科学点！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮时者掉落了$2食物，$3木头，$4金属，$5科学点，和$6宝石！'], //特定敌人
    [/^(.*)You killed a Randimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮百变怪！它的强大磁力使您战利品数量增加$2%！'], //特定敌人
    [/^(.*)You killed a Magnimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮磁王！它的强大磁力使您战利品数量增加$2%！'], //特定敌人
    [/^(.*)Your Trimps managed to pull 1 perfectly preserved bone from that $/, '$1脆皮们获得了1块保存完好的骨头，取自'], //特定敌人
    [/^(.*)That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!$/, '$1这个脆皮骷髅相当巨大。脆皮们搜寻了残骸，发现了2块保存完好的骨头！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Food!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2食物！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Wood!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2木头！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Metal!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2金属！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Nullifium!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2虚空物质！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find an Heirloom!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了一个传家宝！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find a Void Map!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了一张虚空地图！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Radon!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2氡！'], //特定敌人
    [/^(.*)Oh, there seems to be an egg on the ground. You throw it really hard to break it, and find (.*) Helium!$/, '$1哦，地上看起来有一个蛋。您重重地将它摔破了，发现了$2氦！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Food!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2食物！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Wood!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2木头！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Metal!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2金属！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Nullifium!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2虚空物质！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing an Heirloom!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了一个传家宝！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing a Void Map!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了一张虚空地图！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Radon!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2氡！'], //特定敌人
    [/^(.*)You use your amazing sense of hindsight, and send a Trimp to check behind you for eggs. It found one containing (.*) Helium!$/, '$1您后知后觉地派了一个脆皮去之前的区域寻找蛋。它发现了$2氦！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Food!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2食物！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Wood!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2木头！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Metal!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2金属！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Nullifium!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2虚空物质！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing an Heirloom!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有一个传家宝！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing a Void Map!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有一张虚空地图！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Radon!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2氡！'], //特定敌人
    [/^(.*)You just remembered you wanted to look for treasure. You send a Trimp backwards to check and it found an egg containing (.*) Helium!$/, '$1您突然想起来该去寻宝了。您派了一个脆皮回去，它发现了一个蛋，里面有$2氦！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Food!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2食物！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Wood!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2木头！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Metal!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2金属！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Nullifium!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2虚空物质！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is an Heirloom!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有一个传家宝！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is a Void Map!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有一张虚空地图！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Radon!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2氡！'], //特定敌人
    [/^(.*)You see a brightly colored egg off in the distance and send a Trimp to retrieve it for you. Inside is (.*) Helium!$/, '$1您看到前方有一个色彩鲜艳的蛋，您派了一个脆皮拿到了它。里面有$2氦！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Food!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2食物！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Wood!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2木头！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Metal!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2金属！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Nullifium!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2虚空物质！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had an Heirloom!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有一个传家宝！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had a Void Map!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有一张虚空地图！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Radon!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2氡！'], //特定敌人
    [/^(.*)You send a Trimp to sneak forward checking for eggs. After getting turned around multiple times, it found an egg that had (.*) Helium!$/, '$1您派了一个脆皮悄悄地去寻找蛋。在转悠了半天以后，它发现了一个蛋，里面有$2氦！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Food!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2食物！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Wood!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2木头！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Metal!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2金属！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Nullifium!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2虚空物质！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back an Heirloom!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有一个传家宝！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back a Void Map!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有一张虚空地图！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Radon!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2氡！'], //特定敌人
    [/^(.*)Hey there's an egg up there! You send a few Trimps to retrieve it and they bring back (.*) Helium!$/, '$1哈，前面有一个蛋！您派了一些脆皮拿到了它，里面有$2氦！'], //特定敌人
    [/^(.*)That Pumpkimp gave you nothing! What a jerk!$/, '$1那只脆皮南瓜怪就留了点皮下来，瓜的……皮？！'], //特定敌人
    [/^(.*)Lame, this one just has stringy stuff in it.$/, '$1坑爹呢，这货就留了这么些南瓜丝？'], //特定敌人
    [/^(.*)You crack open your newly captured Pumpkimp and find... Nothing!$/, '$1您满怀希望地打开了刚捕获的脆皮南瓜怪，然后发现了……梅友仁！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it winks at you and rolls away. That was pretty weird.$/, '$1您都快要把这只南瓜怪干掉了，结果它眨了眨眼，就滚瓜了。真是怪哉。'], //特定敌人
    [/^(.*)As the Pumpkimp takes his final breath, he manages to mutter the word 'Trick'. No loot here.$/, '$1这只南瓜怪咽气之前就嘟囔了一句，捣蛋。里面空无一物。'], //特定敌人
    [/^(.*)You search the Pumpkimp for loot, but find nothing. Someone wasn't in the holiday spirit!$/, '$1您翻翻了这只南瓜怪，啥也没找到。说好的节日，说好的糖果呢？！'], //特定敌人
    [/^(.*)That Pumpkimp rolled away before you could finish him off, yelling stuff about tricks.$/, '$1又一只在被干掉前就滚瓜的脆皮南瓜怪，还疯狂复读着捣蛋捣蛋捣蛋。'], //特定敌人
    [/^(.*)Thanks, you hate getting tricks instead of treats.$/, '$1不，谢了，您只想要糖果，不想要捣蛋。'], //特定敌人
    [/^(.*)You might have hit that Pumpkimp a bit too hard, there's nothing left to give you candy.$/, '$1您的下手可能是太重了，怎么看那只南瓜怪都不像是还能给您发糖的样子。'], //特定敌人
    [/^(.*)The Pumpkimp suddenly bursts, spewing huge amounts of candy into the air. Your Trimps scramble about to pick up all they can and gain Sugar Rush!$/, '$1南瓜怪突然炸了，撒了一地的糖。一阵争抢以后，脆皮们把糖捡得七七八八，并获得了甜蜜冲刺！'], //特定敌人
    [/^(.*)This Pumpkimp was so large that your Trimps could feast for weeks on all the candy inside. Oh, nope, looks like they'll be done in about 10 minutes. In the mean time, they should have a bit of extra energy!$/, '$1这么大一只南瓜怪，里面的糖应该够脆皮们吃几个星期了。哦，不，等等，可能只够它们吃十来分钟了。至少这一阵子它们会更有干劲的吧！'], //特定敌人
    [/^(.*)This Pumpkimp was totally stuffed with various types of sugary things. You give them all to your Trimps, which results in a huge boost of energy!$/, '$1这只脆皮南瓜怪里塞满了各种糖果。您把这些糖全部分给了脆皮们，大大提升了它们的干劲！'], //特定敌人
    [/^(.*)Your Trimps have begun carrying pillowcases with them in hopes of a legendary Pumpkimp like the one you just found. Filled to the brim with sugary goodies, this Pumpkimp should sate your Trimps for a few minutes!$/, '$1自从碰到过那只南瓜怪以后，脆皮们都带上了枕套。它们希望再来一只装满了糖果的南瓜怪，这样就又能享受好几分钟了！'], //特定敌人
    [/^(.*)Oops, that Pumpkimp just wanted to give you some candy. You found (.*) food!$/, '$1哦，那只南瓜怪只是想给您点糖果。您发现了$2食物！'], //特定敌人
    [/^(.*)Oops, that Pumpkimp just wanted to give you some candy. You found (.*) wood!$/, '$1哦，那只南瓜怪只是想给您点糖果。您发现了$2木头！'], //特定敌人
    [/^(.*)Oops, that Pumpkimp just wanted to give you some candy. You found (.*) metal!$/, '$1哦，那只南瓜怪只是想给您点糖果。您发现了$2金属！'], //特定敌人
    [/^(.*)Oops, that Pumpkimp just wanted to give you some candy. You found (.*) gems!$/, '$1哦，那只南瓜怪只是想给您点糖果。您发现了$2宝石！'], //特定敌人
    [/^(.*)Oops, that Pumpkimp just wanted to give you some candy. You found (.*) fragments!$/, '$1哦，那只南瓜怪只是想给您点糖果。您发现了$2碎片！'], //特定敌人
    [/^(.*)When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all (.*) food!$/, '$1搜刮这只南瓜怪的时候，您发现了一个小袋子，上面写着可以拿一份走。您连着袋子全顺走了，获得了$2食物！'], //特定敌人
    [/^(.*)When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all (.*) wood!$/, '$1搜刮这只南瓜怪的时候，您发现了一个小袋子，上面写着可以拿一份走。您连着袋子全顺走了，获得了$2木头！'], //特定敌人
    [/^(.*)When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all (.*) metal!$/, '$1搜刮这只南瓜怪的时候，您发现了一个小袋子，上面写着可以拿一份走。您连着袋子全顺走了，获得了$2金属！'], //特定敌人
    [/^(.*)When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all (.*) gems!$/, '$1搜刮这只南瓜怪的时候，您发现了一个小袋子，上面写着可以拿一份走。您连着袋子全顺走了，获得了$2宝石！'], //特定敌人
    [/^(.*)When checking the Pumpkimp for loot, you find a pouch that says to take one. You take all (.*) fragments!$/, '$1搜刮这只南瓜怪的时候，您发现了一个小袋子，上面写着可以拿一份走。您连着袋子全顺走了，获得了$2碎片！'], //特定敌人
    [/^(.*)That Pumpkimp gave you (.*) food!$/, '$1那只南瓜怪给了您$2食物！'], //特定敌人
    [/^(.*)That Pumpkimp gave you (.*) wood!$/, '$1那只南瓜怪给了您$2木头！'], //特定敌人
    [/^(.*)That Pumpkimp gave you (.*) metal!$/, '$1那只南瓜怪给了您$2金属！'], //特定敌人
    [/^(.*)That Pumpkimp gave you (.*) gems!$/, '$1那只南瓜怪给了您$2宝石！'], //特定敌人
    [/^(.*)That Pumpkimp gave you (.*) fragments!$/, '$1那只南瓜怪给了您$2碎片！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find (.*) food!$/, '$1您都快要把这只南瓜怪干掉了，结果它扔了一只大袋子给您，就滚瓜了。在袋子里您发现了$2食物！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find (.*) wood!$/, '$1您都快要把这只南瓜怪干掉了，结果它扔了一只大袋子给您，就滚瓜了。在袋子里您发现了$2木头！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find (.*) metal!$/, '$1您都快要把这只南瓜怪干掉了，结果它扔了一只大袋子给您，就滚瓜了。在袋子里您发现了$2金属！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find (.*) gems!$/, '$1您都快要把这只南瓜怪干掉了，结果它扔了一只大袋子给您，就滚瓜了。在袋子里您发现了$2宝石！'], //特定敌人
    [/^(.*)Right before you finish the Pumpkimp off, it throws a large bag at you and rolls away. Inside, you find (.*) fragments!$/, '$1您都快要把这只南瓜怪干掉了，结果它扔了一只大袋子给您，就滚瓜了。在袋子里您发现了$2碎片！'], //特定敌人
    [/^(.*)This Pumpkimp was still in pretty good shape, so you let your Trimps carve it. Inside, they found (.*) food!$/, '$1这只南瓜怪外观还不错，所以您让脆皮们把它拿来雕刻。在里面，它们发现了$2食物！'], //特定敌人
    [/^(.*)This Pumpkimp was still in pretty good shape, so you let your Trimps carve it. Inside, they found (.*) wood!$/, '$1这只南瓜怪外观还不错，所以您让脆皮们把它拿来雕刻。在里面，它们发现了$2木头！'], //特定敌人
    [/^(.*)This Pumpkimp was still in pretty good shape, so you let your Trimps carve it. Inside, they found (.*) metal!$/, '$1这只南瓜怪外观还不错，所以您让脆皮们把它拿来雕刻。在里面，它们发现了$2金属！'], //特定敌人
    [/^(.*)This Pumpkimp was still in pretty good shape, so you let your Trimps carve it. Inside, they found (.*) gems!$/, '$1这只南瓜怪外观还不错，所以您让脆皮们把它拿来雕刻。在里面，它们发现了$2宝石！'], //特定敌人
    [/^(.*)This Pumpkimp was still in pretty good shape, so you let your Trimps carve it. Inside, they found (.*) fragments!$/, '$1这只南瓜怪外观还不错，所以您让脆皮们把它拿来雕刻。在里面，它们发现了$2碎片！'], //特定敌人
    [/^(.*)That Pumpkimp was so smashed that he gave you (.*) food!$/, '$1那只南瓜怪被砸得粉碎，给了您$2食物！'], //特定敌人
    [/^(.*)That Pumpkimp was so smashed that he gave you (.*) wood!$/, '$1那只南瓜怪被砸得粉碎，给了您$2木头！'], //特定敌人
    [/^(.*)That Pumpkimp was so smashed that he gave you (.*) metal!$/, '$1那只南瓜怪被砸得粉碎，给了您$2金属！'], //特定敌人
    [/^(.*)That Pumpkimp was so smashed that he gave you (.*) gems!$/, '$1那只南瓜怪被砸得粉碎，给了您$2宝石！'], //特定敌人
    [/^(.*)That Pumpkimp was so smashed that he gave you (.*) fragments!$/, '$1那只南瓜怪被砸得粉碎，给了您$2碎片！'], //特定敌人
    [/^(.*)You dig through what's left of the Pumpkimp and find (.*) food!$/, '$1您翻遍了这只南瓜怪的残骸，发现了$2食物！'], //特定敌人
    [/^(.*)You dig through what's left of the Pumpkimp and find (.*) wood!$/, '$1您翻遍了这只南瓜怪的残骸，发现了$2木头！'], //特定敌人
    [/^(.*)You dig through what's left of the Pumpkimp and find (.*) metal!$/, '$1您翻遍了这只南瓜怪的残骸，发现了$2金属！'], //特定敌人
    [/^(.*)You dig through what's left of the Pumpkimp and find (.*) gems!$/, '$1您翻遍了这只南瓜怪的残骸，发现了$2宝石！'], //特定敌人
    [/^(.*)You dig through what's left of the Pumpkimp and find (.*) fragments!$/, '$1您翻遍了这只南瓜怪的残骸，发现了$2碎片！'], //特定敌人
    [/^(.*)Aww man, there's seeds and orange stuff everywhere. At least you found (.*) food!$/, '$1天啊，到处都是种子和橙色的玩意。至少您还是发现了$2食物！'], //特定敌人
    [/^(.*)Aww man, there's seeds and orange stuff everywhere. At least you found (.*) wood!$/, '$1天啊，到处都是种子和橙色的玩意。至少您还是发现了$2木头！'], //特定敌人
    [/^(.*)Aww man, there's seeds and orange stuff everywhere. At least you found (.*) metal!$/, '$1天啊，到处都是种子和橙色的玩意。至少您还是发现了$2金属！'], //特定敌人
    [/^(.*)Aww man, there's seeds and orange stuff everywhere. At least you found (.*) gems!$/, '$1天啊，到处都是种子和橙色的玩意。至少您还是发现了$2宝石！'], //特定敌人
    [/^(.*)Aww man, there's seeds and orange stuff everywhere. At least you found (.*) fragments!$/, '$1天啊，到处都是种子和橙色的玩意。至少您还是发现了$2碎片！'], //特定敌人
    [/^(.*)You're not wearing a costume, but you'll still take this (.*) food!$/, '$1虽然您并没有变装，但还是拿走了$2食物！'], //特定敌人
    [/^(.*)You're not wearing a costume, but you'll still take this (.*) wood!$/, '$1虽然您并没有变装，但还是拿走了$2木头！'], //特定敌人
    [/^(.*)You're not wearing a costume, but you'll still take this (.*) metal!$/, '$1虽然您并没有变装，但还是拿走了$2金属！'], //特定敌人
    [/^(.*)You're not wearing a costume, but you'll still take this (.*) gems!$/, '$1虽然您并没有变装，但还是拿走了$2宝石！'], //特定敌人
    [/^(.*)You're not wearing a costume, but you'll still take this (.*) fragments!$/, '$1虽然您并没有变装，但还是拿走了$2碎片！'], //特定敌人
    [/^(.*)Heck yes, this Pumpkimp has your favorite treat! You picked up (.*) food!$/, '$1耶，这只南瓜怪正合您的口味！您捡起了$2食物！'], //特定敌人
    [/^(.*)Heck yes, this Pumpkimp has your favorite treat! You picked up (.*) wood!$/, '$1耶，这只南瓜怪正合您的口味！您捡起了$2木头！'], //特定敌人
    [/^(.*)Heck yes, this Pumpkimp has your favorite treat! You picked up (.*) metal!$/, '$1耶，这只南瓜怪正合您的口味！您捡起了$2金属！'], //特定敌人
    [/^(.*)Heck yes, this Pumpkimp has your favorite treat! You picked up (.*) gems!$/, '$1耶，这只南瓜怪正合您的口味！您捡起了$2宝石！'], //特定敌人
    [/^(.*)Heck yes, this Pumpkimp has your favorite treat! You picked up (.*) fragments!$/, '$1耶，这只南瓜怪正合您的口味！您捡起了$2碎片！'], //特定敌人
    [/^(.*)What a haunting sight! The Pumpkimp was punted by a plump Trimp after the fight. As it flies away, it drops (.*) food!$/, '$1战斗结束以后，那只南瓜怪被一个胖胖的脆皮来了个凌空抽射，真是难忘的景象！南瓜怪飞远之前，掉下了$2食物！'], //特定敌人
    [/^(.*)What a haunting sight! The Pumpkimp was punted by a plump Trimp after the fight. As it flies away, it drops (.*) wood!$/, '$1战斗结束以后，那只南瓜怪被一个胖胖的脆皮来了个凌空抽射，真是难忘的景象！南瓜怪飞远之前，掉下了$2木头！'], //特定敌人
    [/^(.*)What a haunting sight! The Pumpkimp was punted by a plump Trimp after the fight. As it flies away, it drops (.*) metal!$/, '$1战斗结束以后，那只南瓜怪被一个胖胖的脆皮来了个凌空抽射，真是难忘的景象！南瓜怪飞远之前，掉下了$2金属！'], //特定敌人
    [/^(.*)What a haunting sight! The Pumpkimp was punted by a plump Trimp after the fight. As it flies away, it drops (.*) gems!$/, '$1战斗结束以后，那只南瓜怪被一个胖胖的脆皮来了个凌空抽射，真是难忘的景象！南瓜怪飞远之前，掉下了$2宝石！'], //特定敌人
    [/^(.*)What a haunting sight! The Pumpkimp was punted by a plump Trimp after the fight. As it flies away, it drops (.*) fragments!$/, '$1战斗结束以后，那只南瓜怪被一个胖胖的脆皮来了个凌空抽射，真是难忘的景象！南瓜怪飞远之前，掉下了$2碎片！'], //特定敌人
    [/^(.*)Yum, Turkimp! You eat some and put some in your pockets for later.$/, '$1脆皮火鸡，好吃！您把没吃完的部分打包带走了。'], //特定敌人
    [/^(.*)You seem very happy to see that this land came with free food too! You gobble up some turkimp.$/, '$1您很高兴，这块土地上也有免费的晚餐。您狼吞虎咽了几只脆皮火鸡。'], //特定敌人
    [/^(.*)You're quite grateful to finally eat some protein! You eat a bunch of Turkimp and find a Trimp to carry the rest back for you.$/, '$1谢天谢地，终于能补充点蛋白质了！您吃掉了一堆脆皮火鸡，然后找了一个脆皮把剩下的带了回去。'], //特定敌人
    [/^(.*)Apparently your scientists are vegetarians. Hurray, more Turkimp for you!$/, '$1很显然科学家们不吃肉。太好了，分肉的又少了！'], //特定敌人
    [/^(.*)You hear a loud gobbling sound in the distance, it sounds angry. You disregard it because this Turkimp is delicious!$/, '$1远方传来了巨大的吞咽声，它听起来很生气。您完全不鸟它，因为这只脆皮火鸡太香了！'], //特定敌人
    [/^(.*)Ah, Turkimp. Nature's version of a Chickimp with a weirder head. Sure is tasty! You eat your fill and save some for later.$/, '$1啊，脆皮火鸡，大自然的杰作，脆皮小鸡的换头版本。当然好吃！您吃了个肚儿圆，然后把剩下的一并带走了。'], //特定敌人
    [/^(.*)Your fingers are cold and numb, but that won't stop them from opening up this Presimpt! Inside you find (.*) food!$/, '$1您的手指又冷又麻，但这也没法阻止您打开那个脆皮小礼！在里面您发现了$2食物！'], //特定敌人
    [/^(.*)Your fingers are cold and numb, but that won't stop them from opening up this Presimpt! Inside you find (.*) wood!$/, '$1您的手指又冷又麻，但这也没法阻止您打开那个脆皮小礼！在里面您发现了$2木头！'], //特定敌人
    [/^(.*)Your fingers are cold and numb, but that won't stop them from opening up this Presimpt! Inside you find (.*) metal!$/, '$1您的手指又冷又麻，但这也没法阻止您打开那个脆皮小礼！在里面您发现了$2金属！'], //特定敌人
    [/^(.*)Your fingers are cold and numb, but that won't stop them from opening up this Presimpt! Inside you find (.*) gems!$/, '$1您的手指又冷又麻，但这也没法阻止您打开那个脆皮小礼！在里面您发现了$2宝石！'], //特定敌人
    [/^(.*)Your fingers are cold and numb, but that won't stop them from opening up this Presimpt! Inside you find (.*) fragments!$/, '$1您的手指又冷又麻，但这也没法阻止您打开那个脆皮小礼！在里面您发现了$2碎片！'], //特定敌人
    [/^(.*)You contemplate saving this Presimpt to give to a Trimp, but you really really like opening them yourself. So you do, and you find (.*) food!$/, '$1您有考虑过把这个脆皮小礼赏给一个脆皮，但最后您还是决定自己来了。您发现了$2食物！'], //特定敌人
    [/^(.*)You contemplate saving this Presimpt to give to a Trimp, but you really really like opening them yourself. So you do, and you find (.*) wood!$/, '$1您有考虑过把这个脆皮小礼赏给一个脆皮，但最后您还是决定自己来了。您发现了$2木头！'], //特定敌人
    [/^(.*)You contemplate saving this Presimpt to give to a Trimp, but you really really like opening them yourself. So you do, and you find (.*) metal!$/, '$1您有考虑过把这个脆皮小礼赏给一个脆皮，但最后您还是决定自己来了。您发现了$2金属！'], //特定敌人
    [/^(.*)You contemplate saving this Presimpt to give to a Trimp, but you really really like opening them yourself. So you do, and you find (.*) gems!$/, '$1您有考虑过把这个脆皮小礼赏给一个脆皮，但最后您还是决定自己来了。您发现了$2宝石！'], //特定敌人
    [/^(.*)You contemplate saving this Presimpt to give to a Trimp, but you really really like opening them yourself. So you do, and you find (.*) fragments!$/, '$1您有考虑过把这个脆皮小礼赏给一个脆皮，但最后您还是决定自己来了。您发现了$2碎片！'], //特定敌人
    [/^(.*)Imagine losing a fight to a Presimpt. You got this one though, and inside you see (.*) food!$/, '$1击败脆皮小礼并非什么难事，您在里面发现了$2食物！'], //特定敌人
    [/^(.*)Imagine losing a fight to a Presimpt. You got this one though, and inside you see (.*) wood!$/, '$1击败脆皮小礼并非什么难事，您在里面发现了$2木头！'], //特定敌人
    [/^(.*)Imagine losing a fight to a Presimpt. You got this one though, and inside you see (.*) metal!$/, '$1击败脆皮小礼并非什么难事，您在里面发现了$2金属！'], //特定敌人
    [/^(.*)Imagine losing a fight to a Presimpt. You got this one though, and inside you see (.*) gems!$/, '$1击败脆皮小礼并非什么难事，您在里面发现了$2宝石！'], //特定敌人
    [/^(.*)Imagine losing a fight to a Presimpt. You got this one though, and inside you see (.*) fragments!$/, '$1击败脆皮小礼并非什么难事，您在里面发现了$2碎片！'], //特定敌人
    [/^(.*)You wonder what actually created these evil sentient gifts. However you instantly forget your concerns when you see the (.*) food!$/, '$1您思索了一下到底是什么创造了这些邪恶的活礼物。不过很快您就把这些抛之脑后，因为您发现了$2食物！'], //特定敌人
    [/^(.*)You wonder what actually created these evil sentient gifts. However you instantly forget your concerns when you see the (.*) wood!$/, '$1您思索了一下到底是什么创造了这些邪恶的活礼物。不过很快您就把这些抛之脑后，因为您发现了$2木头！'], //特定敌人
    [/^(.*)You wonder what actually created these evil sentient gifts. However you instantly forget your concerns when you see the (.*) metal!$/, '$1您思索了一下到底是什么创造了这些邪恶的活礼物。不过很快您就把这些抛之脑后，因为您发现了$2金属！'], //特定敌人
    [/^(.*)You wonder what actually created these evil sentient gifts. However you instantly forget your concerns when you see the (.*) gems!$/, '$1您思索了一下到底是什么创造了这些邪恶的活礼物。不过很快您就把这些抛之脑后，因为您发现了$2宝石！'], //特定敌人
    [/^(.*)You wonder what actually created these evil sentient gifts. However you instantly forget your concerns when you see the (.*) fragments!$/, '$1您思索了一下到底是什么创造了这些邪恶的活礼物。不过很快您就把这些抛之脑后，因为您发现了$2碎片！'], //特定敌人
    [/^(.*)You were hoping for a TV or something, but you'll have to make do with the (.*) food!$/, '$1您想要一台大大的电视，但却得到旧旧的$2食物！'], //特定敌人
    [/^(.*)You were hoping for a TV or something, but you'll have to make do with the (.*) wood!$/, '$1您想要一台大大的电视，但却得到旧旧的$2木头！'], //特定敌人
    [/^(.*)You were hoping for a TV or something, but you'll have to make do with the (.*) metal!$/, '$1您想要一台大大的电视，但却得到旧旧的$2金属！'], //特定敌人
    [/^(.*)You were hoping for a TV or something, but you'll have to make do with the (.*) gems!$/, '$1您想要一台大大的电视，但却得到旧旧的$2宝石！'], //特定敌人
    [/^(.*)You were hoping for a TV or something, but you'll have to make do with the (.*) fragments!$/, '$1您想要一台大大的电视，但却得到旧旧的$2碎片！'], //特定敌人
    [/^(.*)You run to the motionless Presimpt and give him a good shake. Sounds like (.*) food!$/, '$1您冲向那个一动不动的小礼，一阵好摇，听上去里面有$2食物！'], //特定敌人
    [/^(.*)You run to the motionless Presimpt and give him a good shake. Sounds like (.*) wood!$/, '$1您冲向那个一动不动的小礼，一阵好摇，听上去里面有$2木头！'], //特定敌人
    [/^(.*)You run to the motionless Presimpt and give him a good shake. Sounds like (.*) metal!$/, '$1您冲向那个一动不动的小礼，一阵好摇，听上去里面有$2金属！'], //特定敌人
    [/^(.*)You run to the motionless Presimpt and give him a good shake. Sounds like (.*) gems!$/, '$1您冲向那个一动不动的小礼，一阵好摇，听上去里面有$2宝石！'], //特定敌人
    [/^(.*)You run to the motionless Presimpt and give him a good shake. Sounds like (.*) fragments!$/, '$1您冲向那个一动不动的小礼，一阵好摇，听上去里面有$2碎片！'], //特定敌人
    [/^(.*)One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find (.*) food!$/, '$1一个脆皮很兴奋地抓过小礼将它带给了您。您让它打开了小礼，发现了$2食物！'], //特定敌人
    [/^(.*)One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find (.*) wood!$/, '$1一个脆皮很兴奋地抓过小礼将它带给了您。您让它打开了小礼，发现了$2木头！'], //特定敌人
    [/^(.*)One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find (.*) metal!$/, '$1一个脆皮很兴奋地抓过小礼将它带给了您。您让它打开了小礼，发现了$2金属！'], //特定敌人
    [/^(.*)One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find (.*) gems!$/, '$1一个脆皮很兴奋地抓过小礼将它带给了您。您让它打开了小礼，发现了$2宝石！'], //特定敌人
    [/^(.*)One of your Trimps excitedly grabs the Presimpt and brings it to you. You let him open it to find (.*) fragments!$/, '$1一个脆皮很兴奋地抓过小礼将它带给了您。您让它打开了小礼，发现了$2碎片！'], //特定敌人
    [/^(.*)Nothing like some global conquest during the Holidays! You open your Presimpt and find (.*) food!$/, '$1节日就该干节日该干的事，比如让小礼唱征服啥的！您发现了$2食物！'], //特定敌人
    [/^(.*)Nothing like some global conquest during the Holidays! You open your Presimpt and find (.*) wood!$/, '$1节日就该干节日该干的事，比如让小礼唱征服啥的！您发现了$2木头！'], //特定敌人
    [/^(.*)Nothing like some global conquest during the Holidays! You open your Presimpt and find (.*) metal!$/, '$1节日就该干节日该干的事，比如让小礼唱征服啥的！您发现了$2金属！'], //特定敌人
    [/^(.*)Nothing like some global conquest during the Holidays! You open your Presimpt and find (.*) gems!$/, '$1节日就该干节日该干的事，比如让小礼唱征服啥的！您发现了$2宝石！'], //特定敌人
    [/^(.*)Nothing like some global conquest during the Holidays! You open your Presimpt and find (.*) fragments!$/, '$1节日就该干节日该干的事，比如让小礼唱征服啥的！您发现了$2碎片！'], //特定敌人
    [/^(.*)You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny (.*) food!$/, '$1您考虑了一下过完年小礼们又会藏在什么地方，但很快就不想这些了，毕竟有了$2食物！'], //特定敌人
    [/^(.*)You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny (.*) wood!$/, '$1您考虑了一下过完年小礼们又会藏在什么地方，但很快就不想这些了，毕竟有了$2木头！'], //特定敌人
    [/^(.*)You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny (.*) metal!$/, '$1您考虑了一下过完年小礼们又会藏在什么地方，但很快就不想这些了，毕竟有了$2金属！'], //特定敌人
    [/^(.*)You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny (.*) gems!$/, '$1您考虑了一下过完年小礼们又会藏在什么地方，但很快就不想这些了，毕竟有了$2宝石！'], //特定敌人
    [/^(.*)You're a bit curious as to where the Presimpts hide during the rest of the year, but you forget about it when you see your new shiny (.*) fragments!$/, '$1您考虑了一下过完年小礼们又会藏在什么地方，但很快就不想这些了，毕竟有了$2碎片！'], //特定敌人
    [/^(.*)You'll never complain about free stuff, and this Presimpt is full of it! Found (.*) food!$/, '$1有了免费午餐，谁能不喊真香？您发现了$2食物！'], //特定敌人
    [/^(.*)You'll never complain about free stuff, and this Presimpt is full of it! Found (.*) wood!$/, '$1有了免费午餐，谁能不喊真香？您发现了$2木头！'], //特定敌人
    [/^(.*)You'll never complain about free stuff, and this Presimpt is full of it! Found (.*) metal!$/, '$1有了免费午餐，谁能不喊真香？您发现了$2金属！'], //特定敌人
    [/^(.*)You'll never complain about free stuff, and this Presimpt is full of it! Found (.*) gems!$/, '$1有了免费午餐，谁能不喊真香？您发现了$2宝石！'], //特定敌人
    [/^(.*)You'll never complain about free stuff, and this Presimpt is full of it! Found (.*) fragments!$/, '$1有了免费午餐，谁能不喊真香？您发现了$2碎片！'], //特定敌人
    [/^(.*)You hurriedly open up the Presimpt, and find (.*) food!$/, '$1您急急忙忙地打开了脆皮小礼，并发现了$2食物！'], //特定敌人
    [/^(.*)You hurriedly open up the Presimpt, and find (.*) wood!$/, '$1您急急忙忙地打开了脆皮小礼，并发现了$2木头！'], //特定敌人
    [/^(.*)You hurriedly open up the Presimpt, and find (.*) metal!$/, '$1您急急忙忙地打开了脆皮小礼，并发现了$2金属！'], //特定敌人
    [/^(.*)You hurriedly open up the Presimpt, and find (.*) gems!$/, '$1您急急忙忙地打开了脆皮小礼，并发现了$2宝石！'], //特定敌人
    [/^(.*)You hurriedly open up the Presimpt, and find (.*) fragments!$/, '$1您急急忙忙地打开了脆皮小礼，并发现了$2碎片！'], //特定敌人
    [/^(.*)Ooh look, a Presimpt! You tear it open and receive (.*) food!$/, '$1有礼自远方来，不亦乐乎？您把它拆开，发现了$2食物！'], //特定敌人
    [/^(.*)Ooh look, a Presimpt! You tear it open and receive (.*) wood!$/, '$1有礼自远方来，不亦乐乎？您把它拆开，发现了$2木头！'], //特定敌人
    [/^(.*)Ooh look, a Presimpt! You tear it open and receive (.*) metal!$/, '$1有礼自远方来，不亦乐乎？您把它拆开，发现了$2金属！'], //特定敌人
    [/^(.*)Ooh look, a Presimpt! You tear it open and receive (.*) gems!$/, '$1有礼自远方来，不亦乐乎？您把它拆开，发现了$2宝石！'], //特定敌人
    [/^(.*)Ooh look, a Presimpt! You tear it open and receive (.*) fragments!$/, '$1有礼自远方来，不亦乐乎？您把它拆开，发现了$2碎片！'], //特定敌人
    [/^(.*)Nifty! That Presimpt was carrying around (.*) food!$/, '$1人无横财不富，马无夜草不肥！那个脆皮小礼带着$2食物！'], //特定敌人
    [/^(.*)Nifty! That Presimpt was carrying around (.*) wood!$/, '$1人无横财不富，马无夜草不肥！那个脆皮小礼带着$2木头！'], //特定敌人
    [/^(.*)Nifty! That Presimpt was carrying around (.*) metal!$/, '$1人无横财不富，马无夜草不肥！那个脆皮小礼带着$2金属！'], //特定敌人
    [/^(.*)Nifty! That Presimpt was carrying around (.*) gems!$/, '$1人无横财不富，马无夜草不肥！那个脆皮小礼带着$2宝石！'], //特定敌人
    [/^(.*)Nifty! That Presimpt was carrying around (.*) fragments!$/, '$1人无横财不富，马无夜草不肥！那个脆皮小礼带着$2碎片！'], //特定敌人
    [/^(.*)Presimpts for everyone! Wait there's only one. Presimpt for you! With (.*) food!$/, '$1这是给所有人的小礼！等等，这里只有一个人。那就是给您的小礼！里面是$2食物！'], //特定敌人
    [/^(.*)Presimpts for everyone! Wait there's only one. Presimpt for you! With (.*) wood!$/, '$1这是给所有人的小礼！等等，这里只有一个人。那就是给您的小礼！里面是$2木头！'], //特定敌人
    [/^(.*)Presimpts for everyone! Wait there's only one. Presimpt for you! With (.*) metal!$/, '$1这是给所有人的小礼！等等，这里只有一个人。那就是给您的小礼！里面是$2金属！'], //特定敌人
    [/^(.*)Presimpts for everyone! Wait there's only one. Presimpt for you! With (.*) gems!$/, '$1这是给所有人的小礼！等等，这里只有一个人。那就是给您的小礼！里面是$2宝石！'], //特定敌人
    [/^(.*)Presimpts for everyone! Wait there's only one. Presimpt for you! With (.*) fragments!$/, '$1这是给所有人的小礼！等等，这里只有一个人。那就是给您的小礼！里面是$2碎片！'], //特定敌人
    [/^(.*)This Presimpt has little snowman markings all over it! Inside, you find (.*) food!$/, '$1这个小礼上面画满了小雪人！在里面您发现了$2食物！'], //特定敌人
    [/^(.*)This Presimpt has little snowman markings all over it! Inside, you find (.*) wood!$/, '$1这个小礼上面画满了小雪人！在里面您发现了$2木头！'], //特定敌人
    [/^(.*)This Presimpt has little snowman markings all over it! Inside, you find (.*) metal!$/, '$1这个小礼上面画满了小雪人！在里面您发现了$2金属！'], //特定敌人
    [/^(.*)This Presimpt has little snowman markings all over it! Inside, you find (.*) gems!$/, '$1这个小礼上面画满了小雪人！在里面您发现了$2宝石！'], //特定敌人
    [/^(.*)This Presimpt has little snowman markings all over it! Inside, you find (.*) fragments!$/, '$1这个小礼上面画满了小雪人！在里面您发现了$2碎片！'], //特定敌人
    [/^(.*)Fluffy seems really excited about all the Presimpts, so you let him open this one to find (.*) food!$/, '$1绒绒看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2食物！'], //特定敌人
    [/^(.*)Fluffy seems really excited about all the Presimpts, so you let him open this one to find (.*) wood!$/, '$1绒绒看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2木头！'], //特定敌人
    [/^(.*)Fluffy seems really excited about all the Presimpts, so you let him open this one to find (.*) metal!$/, '$1绒绒看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2金属！'], //特定敌人
    [/^(.*)Fluffy seems really excited about all the Presimpts, so you let him open this one to find (.*) gems!$/, '$1绒绒看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2宝石！'], //特定敌人
    [/^(.*)Fluffy seems really excited about all the Presimpts, so you let him open this one to find (.*) fragments!$/, '$1绒绒看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2碎片！'], //特定敌人
    [/^(.*)Scruffy seems really excited about all the Presimpts, so you let him open this one to find (.*) food!$/, '$1污污看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2食物！'], //特定敌人
    [/^(.*)Scruffy seems really excited about all the Presimpts, so you let him open this one to find (.*) wood!$/, '$1污污看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2木头！'], //特定敌人
    [/^(.*)Scruffy seems really excited about all the Presimpts, so you let him open this one to find (.*) metal!$/, '$1污污看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2金属！'], //特定敌人
    [/^(.*)Scruffy seems really excited about all the Presimpts, so you let him open this one to find (.*) gems!$/, '$1污污看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2宝石！'], //特定敌人
    [/^(.*)Scruffy seems really excited about all the Presimpts, so you let him open this one to find (.*) fragments!$/, '$1污污看起来对小礼感到很兴奋，所以您让它打开了小礼，并发现了$2碎片！'], //特定敌人
    [/^(.*)Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the (.*) food!$/, '$1连丝毫犹豫都没有，绒绒就直接冲到了小礼旁边把它拆开了。它带回了$2食物！'], //特定敌人
    [/^(.*)Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the (.*) wood!$/, '$1连丝毫犹豫都没有，绒绒就直接冲到了小礼旁边把它拆开了。它带回了$2木头！'], //特定敌人
    [/^(.*)Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the (.*) metal!$/, '$1连丝毫犹豫都没有，绒绒就直接冲到了小礼旁边把它拆开了。它带回了$2金属！'], //特定敌人
    [/^(.*)Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the (.*) gems!$/, '$1连丝毫犹豫都没有，绒绒就直接冲到了小礼旁边把它拆开了。它带回了$2宝石！'], //特定敌人
    [/^(.*)Without even a second of pause, Fluffy zooms to the Presimpt and tears it open. He brings you back the (.*) fragments!$/, '$1连丝毫犹豫都没有，绒绒就直接冲到了小礼旁边把它拆开了。它带回了$2碎片！'], //特定敌人
    [/^(.*)Without even a second of pause, Scruffy zooms to the Presimpt and tears it open. He brings you back the (.*) food!$/, '$1连丝毫犹豫都没有，污污就直接冲到了小礼旁边把它拆开了。它带回了$2食物！'], //特定敌人
    [/^(.*)Without even a second of pause, Scruffy zooms to the Presimpt and tears it open. He brings you back the (.*) wood!$/, '$1连丝毫犹豫都没有，污污就直接冲到了小礼旁边把它拆开了。它带回了$2木头！'], //特定敌人
    [/^(.*)Without even a second of pause, Scruffy zooms to the Presimpt and tears it open. He brings you back the (.*) metal!$/, '$1连丝毫犹豫都没有，污污就直接冲到了小礼旁边把它拆开了。它带回了$2金属！'], //特定敌人
    [/^(.*)Without even a second of pause, Scruffy zooms to the Presimpt and tears it open. He brings you back the (.*) gems!$/, '$1连丝毫犹豫都没有，污污就直接冲到了小礼旁边把它拆开了。它带回了$2宝石！'], //特定敌人
    [/^(.*)Without even a second of pause, Scruffy zooms to the Presimpt and tears it open. He brings you back the (.*) fragments!$/, '$1连丝毫犹豫都没有，污污就直接冲到了小礼旁边把它拆开了。它带回了$2碎片！'], //特定敌人
    [/^(.*)Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) food!$/, '$1绒绒忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2食物！'], //特定敌人
    [/^(.*)Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) wood!$/, '$1绒绒忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2木头！'], //特定敌人
    [/^(.*)Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) metal!$/, '$1绒绒忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2金属！'], //特定敌人
    [/^(.*)Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) gems!$/, '$1绒绒忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2宝石！'], //特定敌人
    [/^(.*)Fluffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) fragments!$/, '$1绒绒忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2碎片！'], //特定敌人
    [/^(.*)Scruffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) food!$/, '$1污污忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2食物！'], //特定敌人
    [/^(.*)Scruffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) wood!$/, '$1污污忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2木头！'], //特定敌人
    [/^(.*)Scruffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) metal!$/, '$1污污忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2金属！'], //特定敌人
    [/^(.*)Scruffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) gems!$/, '$1污污忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2宝石！'], //特定敌人
    [/^(.*)Scruffy is too busy eating the purple snow to open this one, so you do it yourself. Inside, you find (.*) fragments!$/, '$1污污忙着吃紫雪没空管这个小礼，所以您就代劳了。在里面您发现了$2碎片！'], //特定敌人
    [/^(.*)You shake the Presimpt before opening it, and can tell there's something special in this one. Yup! That thoughtful Presimpt gave you a perfectly preserved bone!$/, '$1您在打开前摇了摇那个脆皮小礼，感觉到里面似乎藏着什么奇珍异宝。哈，瞧，里面是一块保存完好的骨头！'], //特定敌人
    [/^A big, wooden shield. Adds (.*) health to each soldier per level.$/, '一面大木盾，每级增加每名士兵$1生命值。'], //装备
    [/^A big, wooden shield. Adds (.*) block to each soldier per level. \((.*) after Trainers$/, '一面大木盾，每级增加每名士兵$1格挡。(将训练师效果计入则格档变为增加$2'], //装备
    [/^Better than nothing. Adds (.*) attack to each soldier per level$/, '聊胜于无。每级增加每名士兵$1攻击力'], //装备
    [/^At least their feet will be safe. Adds (.*) health to each soldier per level$/, '至少能保护到脚。每级增加每名士兵$1生命值'], //装备
    [/^It's kind of heavy for your Trimps, but they'll manage. Adds (.*) attack to each soldier per level$/, '对脆皮来说有点重，但它们能搞定。每级增加每名士兵$1攻击力'], //装备
    [/^Provides a decent amount of protection to the Trimps' heads, adding (.*) health to each soldier per level.$/, '为脆皮头部提供不错的防护，每级增加每名士兵$1生命值。'], //装备
    [/^This thing is big and pointy. It adds (.*) attack to each soldier per level$/, '这玩意又大又尖。每级增加每名士兵$1攻击力'], //装备
    [/^Pants designed specificially for the little Trimps! Adds (.*) health to each soldier per level.$/, '专为脆皮的小身板设计的裤子！每级增加每名士兵$1生命值。'], //装备
    [/^This weapon is pretty intimidating, but your Trimps think they can handle it. Adds (.*) attack to each soldier per level$/, '这武器相当吓人，但脆皮觉得它们能用得好。每级增加每名士兵$1攻击力'], //装备
    [/^These shoulderguards will help keep your Trimps' necks and shoulders safe, and they look cool too. Adds (.*) health to each soldier per level$/, '这些护肩可以保护脆皮的脖子和肩膀，而且看起来挺酷的。每级增加每名士兵$1生命值'], //装备
    [/^This sword looks sweet. Seriously, if you could see it you'd think it looked sweet. Trust me. Adds (.*) attack to each soldier per level$/, '这把剑看起来真可爱。真的，要是您看得到的话，您也会这么觉得。相信我。每级增加每名士兵$1攻击力'], //装备
    [/^Some real, heavy duty armor. Everyone looks badass in heavy duty armor. Adds (.*) health to each soldier per level$/, '真正的重型护甲。脆皮穿上以后看起来吊爆了。每级增加每名士兵$1生命值'], //装备
    [/^A powerful ranged weapon. Your Trimps can do some damage with this sucker. Adds (.*) attack to each soldier per level$/, '强大的远程武器。用这玩意来搞事情会很称手。每级增加每名士兵$1攻击力'], //装备
    [/^A cozy and thick padded jacket that goes under the breastplate. Your Trimps think they're great! Adds (.*) health to each soldier per level.$/, '一件舒适合身，可以穿戴在胸甲内的厚棉衣。脆皮们爱死它了！每级增加每名士兵$1生命值。'], //装备
    [/^(.*)You found plans for a shield! It even tells you how to upgrade it, if you have enough wood. That was nice of that Bad Guy.$/, '$1您发现了盾牌的蓝图！它甚至还有升级的说明，只需要木头就可以完成。那敌人真好。'], //世界解锁等
    [/^(.*)You found plans for Boots! Swell!$/, '$1您发现了靴子的蓝图！太棒了！'], //世界解锁等
    [/^(.*)You found plans for a Dagger! Fancy!$/, '$1您发现了匕首的蓝图！真意外！'], //世界解锁等
    [/^(.*)You found plans for a mace!$/, '$1您发现了狼牙棒的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a helmet!$/, '$1您发现了头盔的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Polearm!$/, '$1您发现了战戟的蓝图！'], //世界解锁等
    [/^(.*)You found plans for Pants!$/, '$1您发现了裤子的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Battleaxe!$/, '$1您发现了战斧的蓝图！'], //世界解锁等
    [/^(.*)You found plans for Shoulderguards!$/, '$1您发现了护肩的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Greatsword!$/, '$1您发现了巨剑的蓝图！'], //世界解锁等
    [/^(.*)You found plans for a Breastplate!$/, '$1您发现了胸铠的蓝图！'], //世界解锁等
    [/^(.*)You found an ancient book titled Bloodlust. You should look at it or something.$/, '$1您发现了一本古书，标题为《嗜血》。您应该看看它。'], //世界解锁等
    [/^(.*)Hey, this book might be for you!$/, '$1嗨！这本书可能会适合您！'], //世界解锁等
    [/^(.*)Hey look, plans for a new Gym!$/, '$1看哪，这是健身房的蓝图！'], //世界解锁等
    [/^(.*)You find a small handcut gem that seems to coat you in a bubble of light when you hold it! You should have your Scientists research some way to polish it.$/, '$1您发现了一块手工切割的小宝石，握着它的时候，您的周围笼罩着一层光！您应该让科学家研究一下怎么抛光它。'], //世界解锁等
    [/^(.*)This book is for your Trainers!$/, '$1这本书是给训练师们的！'], //世界解锁等
    [/^(.*)Your equipment isn't going to cut it in this Universe. Better get someone to ugprade it for you!$/, '$1在这个宇宙中您的装备不足以切开它。最好找人升级一下您的装备！'], //世界解锁等
    [/^(.*)Time to colonize the galaxy.$/, '$1我们的征途是星辰大海。'], //世界解锁等
    [/^(.*)Trimp cave paintings predicted the existence of a book such as this one, you had no idea it actually existed. It smells dusty.$/, '$1脆皮的洞穴壁画指出了有这么一本书存在，但您没想到它真的存在。它闻起来满是灰尘。'], //世界解锁等
    [/^(.*)You've found an ancient relic that looks like some sort of mechanical dish. Perhaps you could train your Trimps to use this to your advantage!$/, '$1您发现了一个机械圆盘形状的古代遗物。或许可以训练脆皮们将它利用起来！'], //世界解锁等
    [/^(.*)This book will help your Trimps make more Trimps!$/, '$1这本书可以帮助脆皮们造更多的脆皮！'], //世界解锁等
    [/^(.*)Your Scientists let you know that your Trimps won't understand the book, but they offer to hold on to it for you for later. How nice of them!$/, '$1科学家们表示脆皮们看不懂这本书的内容，但它们主动提出替您保管以备后用。它们真好！'], //世界解锁等
    [/^(.*)You found an ancient book about mining. With some research you should be able to teach the Trimps to mine!$/, '$1您发现了一本古书，内容是关于采矿的。稍微研究一下应该就可以教会脆皮们采矿了！'], //世界解锁等
    [/^(.*)Your Trimps simply do not understand what this book is talking about. It's blowing their minds. What is a 'Miner'\?!$/, '$1脆皮们完全不懂这本书在说什么。这本书弄得它们晕头转向。到底什么是“矿工”的？！'], //世界解锁等
    [/^(.*)You found a book about proper physical training!$/, '$1您发现了一本书，内容是关于适当的体育锻炼！'], //世界解锁等
    [/^(.*)You found a book about Einstrimp!$/, '$1您发现了一本书，内容是关于爱因X坦脆皮的！'], //世界解锁等
    [/^(.*)Your Trimps think they're too good at Science to read your dumb book. They're already working on Portal technology!$/, '$1脆皮们觉得它们都是民科大神，对您的书完全不屑一顾。它们早都开始研究传送门科技了！'], //世界解锁等
    [/^(.*)You found a book detailing the intricacies of solo exploration!$/, '$1您发现了一本书，详细说明了独自探险之类的复杂内容！'], //世界解锁等
    [/^(.*)You found a book called Speedscience! What do you think it could possibly do\?!$/, '$1您发现了一本书，叫做《研究加速》！您觉得它能有什么样的用途？！'], //世界解锁等
    [/^(.*)You found a book called Speedscience, but you haven't found anyone to read it. Such a shame.$/, '$1您发现了一本书，叫做《研究加速》，但您找不到人来读它。真可惜。'], //世界解锁等
    [/^(.*)You found a book called Megascience! It seems to fade in and out of reality.$/, '$1您发现了一本书，叫做《超级研究》！它似乎在现实世界中时隐时现。'], //世界解锁等
    [/^(.*)You found blueprints detailing how to upgrade your Warpstation. Blimey!$/, '$1您发现了一个蓝图，详细说明了升级跃迁核心的方法。天哪！'], //世界解锁等
    [/^(.*)You find a smouldering book that looks like it was pushed from the core of this planet. Inside are drawings of Trimps performing rituals with Gems and Magma. It's very hot to the touch, but you take it with you as you haven't had new reading material in a while.$/, '$1您发现了一本冒烟的书，看起来就像是刚从行星核心被扔出来一样。书里面画着用宝石和岩浆进行仪式的脆皮。它摸起来仍然很烫，但您考虑到很久没有新的东西看了，还是把它带走了。'], //世界解锁等
    [/^(.*)This book really doesn't help too much while you're dealing with the minerlessness of this dimension. Better let your scientists hold this one for you for a bit.$/, '$1这本书目前派不上什么用场，您还在忙着对付这个没有矿工的维度。还是让科学家们先帮您保管着吧。'], //世界解锁等
    [/^(.*)You found a book called Speedfarming! It looks delicious!$/, '$1您发现了一本书，叫做《耕作加速》！它看起来很好吃！'], //世界解锁等
    [/^(.*)You found a book called Megafarming! It indicates that you should actually water your crops. Brilliant!$/, '$1您发现了一本书，叫做《超级耕作》！它指出您应该灌溉作物。真是明智之举！'], //世界解锁等
    [/^(.*)You found a book called Speedlumber! It looks long.$/, '$1您发现了一本书，叫做《砍伐加速》！它看起来很长。'], //世界解锁等
    [/^(.*)You found a book called Megalumber! The quote on the back reads 'How much wood could a Wood Trimp chop if a Wood Trimp could chop wood\?'$/, '$1您发现了一本书，叫做《超级砍伐》！后面的引语这么写着“若木脆皮可劈木，几何木可脆皮劈？”'], //世界解锁等
    [/^(.*)You found a book called Speedminer!$/, '$1您发现了一本书，叫做《采矿加速》！'], //世界解锁等
    [/^(.*)Your Scientist stares blankly at you for a moment, then slowly and quietly places the new book on the shelves.$/, '$1您的科学家茫然地看了您一会儿，然后慢慢地，安静地把这本新书放到了书架上。'], //世界解锁等
    [/^(.*)Your Scientists stare blankly at you for a moment, then slowly and quietly place the new book on the shelves.$/, '$1您的科学家们茫然地看了您一会儿，然后慢慢地，安静地把这本新书放到了书架上。'], //世界解锁等
    [/^(.*)You don't have any Scientists to not know how to handle this book, so everything's chill.$/, '$1您没有科学家，没有人知道怎么处理这本书，所以一切都僵住了。'], //世界解锁等
    [/^(.*)You found a book called Megaminer! The front is really shiny and has a Trimp on it. Creepy, it seems to follow your eyes.$/, '$1您发现了一本书，叫做《超级采矿》！它的封面闪闪发光，上面还有一个脆皮。等等，好可怕，这玩意似乎在跟着您的视线动。'], //世界解锁等
    [/^(.*)Your scientists appreciate the fact that you've managed to find another useless book, but they make sure to let you know it's still useless.$/, '$1科学家们挺欣赏您的，毕竟您又搞到了一本没用的书，但没用的东西就是没用。'], //世界解锁等
    [/^(.*)Your Trimps report a strange bronze object on the floor, and you decide to come look at it. It looks freaky, so you ask one of your Trimps to pick it up first. He instantly starts itching his face and babbling off a bunch of science stuff, so you let another Trimp touch it and he does the same. This seems to make your Trimps smarter than Scientists, but may cause side effects.$/, '$1脆皮们在地上发现了一个奇怪的铜制物件，于是您决定去看看。它看起来很怪异，所以您让一个脆皮将它拿起来试试看。它立刻开始挠自己的脸，并且开始胡言乱语一堆跟科学有关的，您让另一个脆皮触碰了那个物件，然后它跟第一位也一样了。看起来它能让脆皮变得比科学家还聪明，但是可能会引起副作用。'], //世界解锁等
    [/^(.*)You found a crafting foreman! He will build buildings automatically for you!$/, '$1您发现了一个正在锻造的工头！它会为您自动建造建筑！'], //世界解锁等
    [/^(.*)You look down and see a green gem that seems to stare back. You pick it up and feel adrenaline surge through your body. Probably best to bring this back to the lab for some research.$/, '$1您往下看，看到一块绿色的宝石，看起来它是在回瞪着您。您将它拾了起来，立刻感到精神变得亢奋了。或许最好将它带回去做进一步的研究。'], //世界解锁等
    [/^(.*)You look down and see a blue gem that seems to stare back. You pick it up and are immediately overwhelmed by feelings of intense power. You figure this could be used to focus your Portal Generator in this Universe.$/, '$1您往下看，看到一块蓝色的宝石，看起来它是在回瞪着您。您将它拾了起来，立刻被强大的力量感淹没了。您觉得这可以用来集中这个宇宙的传送门发生器的能量。'], //世界解锁等
    [/^(.*)You found a map to a strange place. Better go kill stuff in it!$/, '$1您发现了通往一个奇怪地方的地图。是时候大开杀戒了！'], //世界解锁等
    [/^(.*)This map is hot to the touch. Better go inside!$/, '$1这张地图非常烫手。最好进去看看！'], //世界解锁等
    [/^(.*)You find an ancient book titled Coordination. Exciting.$/, '$1您发现了一本古书，标题为《协作》。真是激动人心。'], //世界解锁等
    [/^(.*)You found a book discussing tactics for better blocking!$/, '$1您发现了一本书，里面详细讨论了更好地进行格挡的手段！'], //世界解锁等
    [/^(.*)This egg looks crazy. Seriously, guys, come look at this crazy egg!$/, '$1这个蛋看起来很疯狂。真的，兄弟们，来看看这个疯狂的蛋！'], //世界解锁等
    [/^(.*)There is something strange about this map. It doesn't seem to reflect any light at all, just pure darkness.$/, '$1这张地图很不对劲。看来它无法反射任何的光亮，完全就是纯粹的黑暗。'], //世界解锁等
    [/^(.*)You found an incredibly wet map. It seems to actually be generating water out of nothing, making storage very difficult without flooding the surrounding area. You're sure your Scientists can handle it though, they seem pretty smart.$/, '$1您发现了一张极度潮湿的地图。它看起来正在凭空往外渗水，想要不把这地方淹了还要把它保存下来会很困难的。但您相信科学家们能搞定的，毕竟它们那么睿智的。'], //世界解锁等
    [/^(.*)Having some Trimps Worship Scruffy might help him grow stronger quicker!$/, '$1如果让一些脆皮成为污污的崇信者，或许能让它更快地变强！'], //世界解锁等
    [/^(.*)You found your first map! Travel to your map chamber to check it out.$/, '$1您发现了第一张地图！进入地图界面来瞧瞧。'], //世界解锁等
    [/^(.*)You found (.*) map fragments!$/, '$1您发现了$2地图碎片！'], //世界解锁等
    [/^(.*)You have cleared enough land to support (.*) more Trimps!$/, '$1您清理了足够多的土地，可以多容纳$2脆皮！'], //世界解锁等
    [/^(.*)There sure is a lot of metal just tossed around in this Spire! You just found (.*) more!$/, '$1尖塔里真是随地都有很多金属！您发现了$2金属！'], //世界解锁等
    [/^(.*)You found a map to the Bionic Wonderland. Sounds fun!$/, '$1您发现了通往仿生仙境的地图。有点意思！'], //地图解锁等
    [/^(.*)You found a map to an even more advanced version of the Bionic Wonderland! Looks scary... Your scientists remind you that you can only carry 3 of these incredibly heavy, metallic maps at a time.$/, '$1您发现了通往更高级的仿生仙境的地图！看起来有点可怕……您的科学家提醒您，您只能同时携带3张仿生仙境的地图，因为它们由金属制造而成，实在太重了。'], //地图解锁等
    [/^(.*)Hey look, another baby RoboTrimp! You decide to add him to your collection. You now deal (.*)% extra damage thanks to your pets, and MagnetoShriek now removes (.*)% of an Improbability's attack$/, '$1您发现了另一个小脆皮机器人！您决定也带上它。您的脆皮现在可以额外造成$2%伤害，而且电磁尖啸现在可以将首领的攻击力降低$3%'], //地图解锁等
    [/^(.*)You also just unlocked Foremany!$/, '$1您同时解锁了大群工头！'], //地图解锁等
    [/^(.*)You also just unlocked AutoJobs!$/, '$1您同时解锁了自动工作！'], //地图解锁等
    [/^(.*)You also just unlocked AutoStructure!$/, '$1您同时解锁了自动建造！'], //地图解锁等
    [/^(.*)You also just unlocked Geneticistassist!$/, '$1您同时解锁了遗传学家助手！'], //地图解锁等
    [/^(.*)You also just unlocked DoubleBuild!$/, '$1您同时解锁了二重建造！'], //地图解锁等
    [/^(.*)You found an Heirloom!$/, '$1您发现了一个传家宝！'], //地图解锁等
    [/^(.*)After barely escaping a fierce boulder, you check out the relic you found in there. It glows extremely bright for a few seconds before disappearing, and you look at your storages to see that your Food, Wood, and Metal have been doubled!$/, '$1在将将从一块狂暴巨石下逃生后，您检查了一下在那里发现的遗物。它突然发出了无法直视的强光，过了一会儿，它消失了。之后，您检查了一下存储建筑，发现食物、木头和金属都翻倍了！'], //地图解锁等
    [/^(.*)You heroically slay the mighty Poseidimp, and do a little ransacking in celebration. You come across a strange, brightly glowing chest that seems to be calling you to it. You go over and carefully open it up to see it filled to the brim with the exact amount of resources you currently already had. Your Food, Wood, and Metal have been doubled!$/, '$1脆皮海王被打倒了，您真是伟大的英雄！您决定搜刮一番来庆祝，然后发现了一个明亮发光的奇怪箱子，似乎正在召唤您。您走上前去，谨慎地打开了它，里面装着正好等于您目前拥有的资源。您的食物、木头和金属翻倍了！'], //地图解锁等
    [/^(.*)At the end of that very hot map, you find a tiny, dehydrated Smithy building. You bring it back to your town and drop it in a glass of water, and a full-sized Smithy instantly appears!$/, '$1在那极热地图的最后，您发现了一个微小而脱水的铁匠铺。您将它带回了城镇，把它放进了一杯水里，突然，一个正常尺寸的铁匠铺就这么出现了！'], //地图解锁等
    [/^(.*)At the end of that very hot map, you find two tiny, dehydrated Smithy buildings. You bring them back to your town and drop them in a glass of water, and two full-sized Smithys instantly appear!$/, '$1在那极热地图的最后，您发现了两个微小而脱水的铁匠铺。您将它们带回了城镇，把它们放进了一杯水里，突然，两个正常尺寸的铁匠铺就这么出现了！'], //地图解锁等
    [/^(.*)You have slain the Warden and taken his keys. How weird would it be if they fit in that key hole on the portal\?$/, '$1您把典狱长给宰了，并拿走了他的钥匙。如果这钥匙能够用在传送门上的钥匙孔的话……那得有多奇怪？'], //地图解锁等
    [/^(.*)You've never been here before. Like, ever. This entire place felt cold and unfamiliar. Where are you\? Why have so many Trimps had to fall to get here\? You're suddenly angry, it's time to take a stand.$/, '$1您从未来过这里。从来都没有。这里很冷，很陌生。您在哪？凭什么要死了那么多脆皮才能到这里？您突然感觉非常愤怒，是时候站出来了。'], //地图解锁等
    [/^(.*)You have permanantly unlocked a new Perk, Relentlessness, which will remain unlocked through portals.$/, '$1您永久解锁了无情特权，通过传送门后仍然保留。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, a green, shining box appears on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了一个闪耀的绿色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, a blue, shining box appears on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了一个闪耀的蓝色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, 45 Helium and a green, shining box appear on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了45氦，以及一个闪耀的绿色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, 45 Radon and a blue, shining box appear on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1您启动了传送门发生器，整个世界都感觉不那么愤怒了一些。您冥冥之中感知到在某个维度的某处，一个脆皮超级飞艇不复存在了。在您的面前出现了45氡，以及一个闪耀的蓝色盒子，从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a green, shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1如果还有人说什么您没有击坠过脆皮超级飞艇的话，现在可以让他闭嘴了。因为您刚刚做到了。当飞艇一点一点融入虚无时，您在地上发现了一个闪耀的绿色盒子。从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a blue, shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.$/, '$1如果还有人说什么您没有击坠过脆皮超级飞艇的话，现在可以让他闭嘴了。因为您刚刚做到了。当飞艇一点一点融入虚无时，您在地上发现了一个闪耀的蓝色盒子。从盒子上的小字中，您读出了以下的内容：“时空传送门，此面向上”。'], //地图解锁等
    [/^(.*)You were able to extract 45 Helium Canisters from that Blimp! Now that you know how to do it, you'll be able to extract Helium from normal Blimps.$/, '$1您从飞艇上提取了45氦！从现在起您也可以从普通飞艇那边提取氦了。'], //地图解锁等
    [/^(.*)You were able to extract 45 Radon Vials from that Blimp! Now that you know how to do it, you'll be able to extract Radon from normal Blimps.$/, '$1您从飞艇上提取了45氡！从现在起您也可以从普通飞艇那边提取氡了。'], //地图解锁等
    [/^(.*)Oh goodness, another Prism to polish!$/, '$1哇！又一个可以抛光的棱镜！'], //地图解锁等
    [/^(.*)That thing dropped a book. Doesn't look like an ordinary book. Looks... blockier...$/, '$1那家伙掉落了一本书。看起来，不像寻常的书。看起来……更结实……'], //地图解锁等
    [/^(.*)It's all shiny and stuff. You're pretty sure you've never seen a book this shiny.$/, '$1您很确信从未见过这么闪闪发亮的书。一闪一闪亮晶晶。'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Shield!$/, '$1您发现了一本书，看起来阅读后可以学会升级盾牌！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Dagger!$/, '$1您发现了一本书，看起来阅读后可以学会升级匕首！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Boots!$/, '$1您发现了一本书，看起来阅读后可以学会升级靴子！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Mace!$/, '$1您发现了一本书，看起来阅读后可以学会升级狼牙棒！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Helmet!$/, '$1您发现了一本书，看起来阅读后可以学会升级头盔！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Polearm!$/, '$1您发现了一本书，看起来阅读后可以学会升级战戟！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Pants!$/, '$1您发现了一本书，看起来阅读后可以学会升级裤子！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Battleaxe!$/, '$1您发现了一本书，看起来阅读后可以学会升级战斧！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Shoulderguards!$/, '$1您发现了一本书，看起来阅读后可以学会升级护肩！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Greatsword!$/, '$1您发现了一本书，看起来阅读后可以学会升级巨剑！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Breastplate!$/, '$1您发现了一本书，看起来阅读后可以学会升级胸铠！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Arbalest!$/, '$1您发现了一本书，看起来阅读后可以学会升级强弩！'], //地图解锁等
    [/^(.*)You found a book that will teach you how to upgrade your Gambeson!$/, '$1您发现了一本书，看起来阅读后可以学会升级棉甲！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Shield!$/, '$1您发现了两本书，看起来阅读后可以学会升级盾牌！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Dagger!$/, '$1您发现了两本书，看起来阅读后可以学会升级匕首！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Boots!$/, '$1您发现了两本书，看起来阅读后可以学会升级靴子！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Mace!$/, '$1您发现了两本书，看起来阅读后可以学会升级狼牙棒！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Helmet!$/, '$1您发现了两本书，看起来阅读后可以学会升级头盔！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Polearm!$/, '$1您发现了两本书，看起来阅读后可以学会升级战戟！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Pants!$/, '$1您发现了两本书，看起来阅读后可以学会升级裤子！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Battleaxe!$/, '$1您发现了两本书，看起来阅读后可以学会升级战斧！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Shoulderguards!$/, '$1您发现了两本书，看起来阅读后可以学会升级护肩！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Greatsword!$/, '$1您发现了两本书，看起来阅读后可以学会升级巨剑！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Breastplate!$/, '$1您发现了两本书，看起来阅读后可以学会升级胸铠！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Arbalest!$/, '$1您发现了两本书，看起来阅读后可以学会升级强弩！'], //地图解锁等
    [/^(.*)You found two books that will teach you how to upgrade your Gambeson!$/, '$1您发现了两本书，看起来阅读后可以学会升级棉甲！'], //地图解锁等
    [/^(.*)The copy of 'Speedexplorer' under these bushes will certainly be useful!$/, '$1树丛下发现的那份“探险家加速”复制品肯定能派上用场的！'], //地图解锁等
    [/^(.*)The (.*) copies of 'Speedexplorer' under these bushes will certainly be useful!$/, '$1树丛下发现的$2份“探险家加速”复制品肯定能派上用场的！'], //地图解锁等
    [/^(.*)Holy cowimp! A unique map!$/, '$1哦豁！一张独特地图！'], //地图解锁等
    [/^(.*)You just made a map to The Block!$/, '$1您制造了障碍区地图！'], //地图解锁等
    [/^(.*)Oh snap! Another unique map!$/, '$1天秀啊！又一张独特地图！'], //地图解锁等
    [/^(.*)You just made a map to The Wall!$/, '$1您制造了高墙地图！'], //地图解锁等
    [/^(.*)You just made a map to Big Wall!$/, '$1您制造了巨墙地图！'], //地图解锁等
    [/^(.*)You just made Trimple of Doom!$/, '$1您制造了末日神殿地图！'], //地图解锁等
    [/^(.*)You found The Prison! You have a bad feeling about going in...$/, '$1您发现了监狱地图！您感觉进去后会有什么不好的事发生……'], //地图解锁等
    [/^(.*)You just made The Prison!$/, '$1您制造了监狱地图！'], //地图解锁等
    [/^(.*)You just made Bionic Wonderland (.*)!$/, '$1您制造了仿生仙境 $2地图！'], //地图解锁等
    [/^(.*)You found a map to an Imploding Star inside of a supercooled dimension. The temperature there is perfect!$/, '$1您在一个维度中发现了爆炸之星地图。那维度超冷的，看来地图里的温度会刚刚好！'], //地图解锁等
    [/^(.*)You just made Imploding Star!$/, '$1您制造了爆炸之星地图！'], //地图解锁等
    [/^(.*)You found plans for a Mansion! Your Trimps will be pretty stoked$/, '$1您发现了豪宅的蓝图！脆皮们一定会很兴奋的'], //地图解锁等
    [/^(.*)You found plans for a hotel! \(A decent hotel, too$/, '$1您发现了宾馆的蓝图！(相当棒的宾馆'], //地图解锁等
    [/^(.*)This extremely technical book will teach anyone who can understand the big words how to make bigger huts.$/, '$1这本书极其专业，可以让理解能力强大的人学会建造更大的小屋。'], //地图解锁等
    [/^(.*)This book talks about adding a second floor to your homes! Mind... blown...$/, '$1这本书讲述了建造第二层宅院的方法！神智……不清了……'], //地图解锁等
    [/^(.*)This book will teach you how to make your Trimps share their mansions!$/, '$1这本书可以教会您让脆皮们共同居住在豪宅中的方法！'], //地图解锁等
    [/^(.*)This book will teach you how to build smaller hotel rooms!$/, '$1这本书可以教会您将宾馆房间建造得更小的方法！'], //地图解锁等
    [/^(.*)Wow! This book! It's so Resortsfull!$/, '$1哇哦！这本书可太多金了！'], //地图解锁等
    [/^(.*)You found plans for a huge resort!$/, '$1您发现了度假村的蓝图！它可真大……'], //地图解锁等
    [/^(.*)You found a key to Dimension ZZZ!$/, '$1您发现了通往ZZZ维度的钥匙！'], //地图解锁等
    [/^(.*)You found a crystal powerful enough to create wormholes!$/, '$1您发现了一块充满能量的水晶，利用它的能量可以制造出黑洞！'], //地图解锁等
    [/^(.*)You found plans for some sort of overly complicated solar panel.$/, '$1您发现了某种可以利用恒星能源的设施蓝图，它看起来超级复杂。'], //地图解锁等
    [/^(.*)A book that teaches your Foremen a new skill. Riveting.$/, '$1这本书可以教会工头们新的技能。真是引人入胜。'], //地图解锁等
    [/^(.*)You found blueprints for some sort of nursery that can harness more power from gems.$/, '$1您发现了某种托儿所的蓝图，它可以利用宝石的更多能量。'], //地图解锁等
    [/^(.*)You found (.*) gems! Terrific!$/, '$1您发现了$2宝石！真是妙极了！'], //地图解锁等
    [/^(.*)As expected, there was no Metal here.$/, '$1正如您所料，这里并没有金属。'], //地图解锁等
    [/^(.*)You just found (.*) bars of metal! Convenient!$/, '$1您发现了$2金属！太实用了！'], //地图解锁等
    [/^(.*)That guy just left (.*) food on the ground! Sweet!$/, '$1那家伙在地上留下了$2食物！如此甚好！'], //地图解锁等
    [/^(.*)You just found (.*) wood! That's pretty neat!$/, '$1您发现了$2木头！很好很强大！'], //地图解锁等
    [/^This book will teach your soldiers how to utilize the buddy system. Fighting will now require (.*)% more Trimps \(rounded up\), but attack and health will grow for each new Trimp.$/, '这本书可以教会士兵如何利用伙伴的力量。从现在起，战斗所需要的脆皮数量增加$1%(向上取整)，脆皮的攻击力和生命值也相应地提升。'], //其他升级等
    [/^You need (.*) unemployeed Trimps available. You are short (.*) Trimp(s*).$/, '您需要$1未工作的脆皮才能升级。您还缺少$2的脆皮。'], //其他升级等
    [/^You need enough room for (.*) max Trimps. You are short (.*) Trimp(s*).$/, '您需要$1的脆皮上限才能升级。您还缺少$2的脆皮上限。'], //其他升级等
    [/^(.*)You just made a map to the Dimension of Anger! Should be fun!$/, '$1您制造了愤怒维度地图！应该会很有趣的！'], //其他升级等
    [/^(.*)You just made a map to the Dimension of Rage! Sounds like a great time!$/, '$1您制造了暴怒维度地图！听起来不错哦！'], //其他升级等
    [/^Your next Shield will grant (.*) block.$/, '下一级盾牌增加$1格挡。'], //其他升级等
    [/^Your next Shield will grant (.*) health.$/, '下一级盾牌增加$1生命值。'], //其他升级等
    [/^Your next Dagger will grant (.*) attack.$/, '下一级匕首增加$1攻击力。'], //其他升级等
    [/^Your next Boots will grant (.*) health.$/, '下一级靴子增加$1生命值。'], //其他升级等
    [/^Your next Mace will grant (.*) attack.$/, '下一级狼牙棒增加$1攻击力。'], //其他升级等
    [/^Your next Helmet will grant (.*) health.$/, '下一级头盔增加$1生命值。'], //其他升级等
    [/^Your next Polearm will grant (.*) attack.$/, '下一级战戟增加$1攻击力。'], //其他升级等
    [/^Your next Pants will grant (.*) health.$/, '下一级裤子增加$1生命值。'], //其他升级等
    [/^Your next Battleaxe will grant (.*) attack.$/, '下一级战斧增加$1攻击力。'], //其他升级等
    [/^Your next Shoulderguards will grant (.*) health.$/, '下一级护肩增加$1生命值。'], //其他升级等
    [/^Your next Greatsword will grant (.*) attack.$/, '下一级巨剑增加$1攻击力。'], //其他升级等
    [/^Your next Breastplate will grant (.*) health.$/, '下一级胸铠增加$1生命值。'], //其他升级等
    [/^Your next Arbalest will grant (.*) attack.$/, '下一级强弩增加$1攻击力。'], //其他升级等
    [/^Your next Gambeson will grant (.*) health.$/, '下一级棉甲增加$1生命值。'], //其他升级等
    [/^(.*)It's time to get some Trimps up in here.$/, '$1是时候抓点脆皮了。'], //其他升级等
    [/^(.*)Maybe there's something meaty and delicious here to Trap.$/, '$1也许您可以用陷阱抓到一些嘎嘣脆肉味的东西。'], //其他升级等
    [/^(.*)Ah wood, the building material of kings. The building material of everyone else too, but still.$/, '$1木头，建筑材料之王，王之建筑材料。当然也是其他人的建筑材料，但王也是啊。'], //其他升级等
    [/^(.*)You'll need some wood to build stuff...$/, '$1您需要木头才能建造其他东西……'], //其他升级等
    [/^(.*)You almost forgot how to build a Barn, but now you remember. Proud of you!$/, '$1您都快忘了怎么建造谷仓了，总之您还是想起来了。您可以引以为傲了！'], //其他升级等
    [/^(.*)Wet wood won't work! Better get a Shed going.$/, '$1湿木头是用不了的，最好赶紧建造一个窝棚。'], //其他升级等
    [/^(.*)A nice Shed would allow you to keep more wood on hand.$/, '$1一个好窝棚可以存放更多木头。'], //其他升级等
    [/^(.*)What better place to store metal than a building that can smelt it\?$/, '$1还有什么地方比冶炼金属的地方能更好地存储它呢？'], //其他升级等
    [/^(.*)A nice Forge would allow you to store more metal.$/, '$1一个好锻造厂可以存储更多金属。'], //其他升级等
    [/^(.*)You caught your very first Trimp in this new dimension! It can smell other Trimps on you and looks confused. You promptly send him off to work!$/, '$1您在新的维度中抓到了第一个脆皮！可它在您身上闻到了其他脆皮的气味，一脸懵逼。您赶紧把它派去干活了。'], //其他升级等
    [/^(.*)There's a weird impish little creature in the trap. A Trimp, you decide to call it. Since you're so creative, you could probably train this Trimp to help out.$/, '$1陷阱里有一个看起来很皮的脆弱小动物，您决定叫它 脆皮 。既然您都这么有创造力了，不如干脆考虑训练脆皮来帮您干活好了。'], //其他升级等
    [/^(.*)Where would you be in life without Science\? Not this dimension, that's for sure.$/, '$1假如没有科学，生活会变得怎样？至少您就不会在这个维度了，肯定的。'], //其他升级等
    [/^(.*)This planet feels so familiar, yet so foreign. Maybe it's time to start sciencing things.$/, '$1这颗行星又熟悉又陌生。或许是时候研究点什么了。'], //其他升级等
    [/^(.*)As you finally step out into the Battle Zones, the first thing you notice is that your Heirlooms feel weaker here. Oh well, 1000 more times into the fray...$/, '$1当您迈入战斗区域时，首先发现的是传家宝弱了很多。好吧，又得来个千区踏破啥的了……'], //其他升级等
    [/^(.*)War... what is it good for\? Exploration, or something.$/, '$1战争……人是为何而战的呢？为了探索，还是为了什么……'], //其他升级等
    [/^(.*)The newly established Trimp zoning committee is too busy drooling to approve anything, so you take it on yourself to start building some Huts.$/, '$1新成立的脆皮区委会忙着流口水，没空审批，还是您自己来建造小屋吧。'], //其他升级等
    [/^(.*)Doesn't seem like all of these little guys will fit in your ship. Luckily, you remember how to make small huts for shelter.$/, '$1这么多小家伙是没法全塞进您的飞船的。幸好，您记得如何建造小屋。'], //其他升级等
    [/^(.*)The TZC has finally approved a House blueprint. To your surprise, it looks fairly decent! You decide to immediately build some.$/, '$1脆皮区委会终于批准了宅院的蓝图。但令您吃惊的是，它看起来竟然相当棒。于是您决定马上造一些。'], //其他升级等
    [/^(.*)It's starting to get pretty crowded up in here. Maybe you should start building some better housing.$/, '$1这里开始变得拥挤起来了。您应该开始建造一些更好的房子。'], //其他升级等
    [/^(.*)Your Trimps look really bored.$/, '$1脆皮们看起来很无聊。'], //其他升级等
    [/^(.*)Better hurry up to the fighting Zones so you don't have to sit around here all day watching Trimps breed.$/, '$1还是赶紧去战斗区域吧，不然整天没事干就只能看脆皮们繁殖了。'], //其他升级等
    [/^(.*)Apparently the Trimps breed if they're not working. Doesn't look pleasant.$/, '$1很显然，如果脆皮没有在干活，它们就开始繁殖了。看着不怎么舒服。'], //其他升级等
    [/^(.*), Z$/, '$1，区域'], //统计等
    [/^You will find one Golden Upgrade every (.*) Zones. Frequency increases at (.*)% bonus damage.$/, '您每$1个区域可以获得一个金色升级。升级出现的频率在到达$2%伤害后将开始增加。'], //成就等
    [/^You will find one Golden Upgrade every (.*) Zones. Start with 1 extra Golden Upgrade after each Portal for every 500% earned between 2000% and (.*)%. Currently gaining (.*) extra Golden Upgrade(s*).$/, '您每$1个区域可以获得一个金色升级，且伤害加成在2000%与$2%之间的部分，每有500%伤害加成，传送后就额外获得1个金色升级。目前可以获得$3个金色升级。'], //成就等
    [/^You will find one Golden Upgrade every (.*) Zones. Start with 1 extra Golden Upgrade after each Portal for every 2000% earned between (.*) and (.*)%. Currently gaining (.*) extra Golden Upgrade(s*).$/, '您每$1个区域可以获得一个金色升级，且伤害加成在$2%与$3%之间的部分，每有2000%伤害加成，传送后就额外获得1个金色升级。目前可以获得$4个金色升级。'], //成就等
    [/^You will find one Golden Upgrade every (.*) Zones. Start with 1 extra Golden Upgrade after each Portal for every (.*)% earned above (.*)%. Currently gaining (.*) extra Golden Upgrade(s*).$/, '您每$1个区域可以获得一个金色升级，且伤害加成在$3%以上的部分，每有$2%伤害加成，传送后就额外获得1个金色升级。目前可以获得$4个金色升级。'], //成就等
    [/^Progress: (.*) \/$/, '进度：$1 /'], //成就等
    [/^Complete Zone (\d+) in Universe$/, '通过区域 $1 于宇宙'], //成就等
    [/^Reach (.*) displayed damage$/, '面板伤害值达到$1'], //成就等
    [/^Have  (.*) total Trimps$/, '脆皮总数达到$1'], //成就等
    [/^Use the Portal (.*) time(s*)$/, '使用$1次传送门'], //成就等
    [/^Row Finished! \((.*) total$/, '此类成就全部完成！(数量一共为$1'], //成就等
    [/^Clear  (.*) total Zones$/, '一共通过$1个区域'], //成就等
    [/^Clear  (.*) total Maps$/, '一共通过$1张地图'], //成就等
    [/^Gather (.*) total Helium$/, '一共获取了$1氦'], //成就等
    [/^Gather (.*) total Radon$/, '一共获取了$1氡'], //成就等
    [/^Reach (.*) Helium Per Hour$/, '氦每小时最高达到$1'], //成就等
    [/^Collect (.*) Heirloom(s*)$/, '一共收集了$1个传家宝'], //成就等
    [/^Collect (.*) Gem(s*)$/, '一共收集了$1宝石'], //成就等
    [/^Earn (.*) Helium from the Daily Challenge$/, '从日常挑战中获取$1氦'], //成就等
    [/^Reach Z(.*) after losing no more than one fight per Zone.$/, '在到达区域$1之前，每个区域至多只战败一次。'], //成就等
    [/^Reach U2 Z(.*) without ever entering a Map.$/, '不进入地图的前提下，通过宇宙2的区域$1。'], //成就等
    [/^Reach U2 Z(.*) without your Shield falling below (.*)%.$/, '棱镜护盾从未低于$2%的前提下，通过宇宙2的区域$1。'], //成就等
    [/^Progress: Your Shield has already hit (.*)% this run.$/, '进度：护盾曾经低至$1%，因此无法完成了。'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过障碍区'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过障碍区'], //成就等
    [/^You're in the wrong Universe! Best run is (.*) hour(s*)$/, '您进入了错误的宇宙！最快为$1小时'], //成就等
    [/^Progress: Best run is (.*) hour(s*)$/, '进度：最快为$1小时'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*)$/, '进度：因太慢失败了！最快为$1小时'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*)$/, '此类成就全部完成！(最快为$1小时'], //成就等
    [/^You're in the wrong Universe! Best run is (.*) minutes (.*) seconds$/, '您进入了错误的宇宙！最快为$1分钟$2秒'], //成就等
    [/^Progress: Best run is (.*) minutes (.*) seconds$/, '进度：最快为$1分钟$2秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) minutes (.*) seconds$/, '进度：因太慢失败了！最快为$1分钟$2秒'], //成就等
    [/^Row Finished! \(Best run is (.*) minutes (.*) seconds$/, '此类成就全部完成！(最快为$1分钟$2秒'], //成就等
    [/^You're in the wrong Universe! Best run is (\d+)$/, '您进入了错误的宇宙！最快为$1'], //成就等
    [/^Progress: Best run is (\d+)$/, '进度：最快为$1'], //成就等
    [/^Progress: Too slow! Best run is (\d+)$/, '进度：因太慢失败了！最快为$1'], //成就等
    [/^Row Finished! \(Best run is (\d+)$/, '此类成就全部完成！(最快为$1'], //成就等
    [/^You're in the wrong Universe! Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '您进入了错误的宇宙！最快为$1小时$3分钟$5秒'], //成就等
    [/^Progress: Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：最快为$1小时$3分钟$5秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：因太慢失败了！最快为$1小时$3分钟$5秒'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '此类成就全部完成！(最快为$1小时$3分钟$5秒'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过高墙'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过高墙'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过愤怒维度'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过末日神殿'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过末日神殿'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过监狱'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过仿生仙境'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过爆炸之星'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过尖塔'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过尖塔 II'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过尖塔 III'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过尖塔 IV'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过尖塔 V'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过巨墙'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过棱镜宫殿'], //成就等
    [/^Clear Atlantrimp in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过亚特兰蒂皮'], //成就等
    [/^Clear Atlantrimp in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过亚特兰蒂皮'], //成就等
    [/^Clear Atlantrimp in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过亚特兰蒂皮'], //成就等
    [/^Clear Atlantrimp in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过亚特兰蒂皮'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) from start of run$/, '使用传送门后，在$1小时内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) min(s*) from start of run$/, '使用传送门后，在$1分钟内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*) from start of run$/, '使用传送门后，在$1:$2内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1小时$3分钟$5秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在$1分钟$3秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在$1:$2:$3内通过熔点'], //成就等
    [/^Have over (.*) traps at once$/, '同时拥有超过$1个陷阱'], //成就等
    [/^Spend over (.*) total He on Wormholes$/, '在虫洞上一共花费$1氦'], //成就等
    [/^Kill (.*) enemies in your Spire$/, '在您的尖塔中一共击杀$1敌人'], //成就等
    [/^Beat the Spire with no respec and (.*) or less He Spent$/, '在氦花费不超过$1，且未在传送后进行特权洗点的前提下通过尖塔'], //成就等
    [/^Beat Spire II with no respec and (.*) or less He spent$/, '在氦花费不超过$1，且未在传送后进行特权洗点的前提下通过尖塔 II'], //成就等
    [/^Complete Wither with (.*) stacks of Hardened$/, '在拥有$1层硬化的前提下，完成凋零挑战'], //成就等
    [/^(.*)% Damage$/, '$1%伤害'], //成就等
    [/^Repeat (.+) Times?$/, '重复$1次'], //设置等
    [/^Your save on PlayFab has earned (.*) total Helium, defeated Zone (.*), and cleared (.*) total Zones. The save on your computer only has (.*) total Helium, has defeated Zone (.*), and cleared (.*) total Zones.$/, 'PlayFab上的存档一共获得了$1氦，最高通过了区域$2，总共通过了$3个区域。您的电脑上的存档只获得了$4氦，最高通过了区域$5，总共通过了$6个区域。'], //设置等
    [/^(.*)Unable to back up your save to PlayFab! Double check your internet connection, and don't forget to back up your save manually.$/, '$1无法将存档备份到PlayFab！请再次检查您的互联网连接是否正常，而且请不要忘了手动备份存档。'], //设置等
    [/^(.*)Game saved and backed up to PlayFab! Next automatic online save in 2 hours.$/, '$1游戏已保存并备份至PlayFab！2小时后会再次自动备份。'], //设置等
    [/^(.*)Reconnected to PlayFab!$/, '$1重新登录上了PlayFab！'], //设置等
    [/^(.*) cannot be used twice. Please choose unique numbers!$/, '$1无法使用两次。请确保数字各不相同！'], //设置等
    [/^(.*) seconds would be really difficult to target. Could you pick a slightly more... numerical number\?$/, '$1秒有点难以实现。您能选择一个更加……像数字一点的值吗？'], //设置等
    [/^All numbers must be greater than 0.5. (.*) is not.$/, '所有的数字必须大于0.5，而$1并不是。'], //设置等
    [/^(\s)Start disabled when unlocked each run$/, '$1每次传送后解锁遗传学家时将它设为关闭'], //设置等
    [/^(\s+)Making up lost time...(\s+)$/, '$1补偿时间中……$2'], //离线等
    [/^(\d+) Level map$/, '$1级的地图'], //离线等
    [/^(\d+) map(s*)$/, '$1张地图'], //离线等
    [/^You have (.+) Fragments.$/, '您有$1碎片。'], //离线等
    [/^Z (.+) map$/, '地图等级$1'], //离线等
    [/^SF: Frags$/, '刷崇信者：刷碎片'], //脚本相关，前置
    [/^IF: Frags$/, '刷失智层数：刷碎片'], //脚本相关，前置
    [/^(.+) Frags$/, '花费$1碎片'], //离线等
    [/^(.+) items$/, '有$1个物品'], //离线等
    [/^Welcome back! You were offline for (\d+) second(s*).$/, '欢迎回来！您离线了$1秒。'], //离线等
    [/^Welcome back! You were offline for (\d+) minute(s*) and (\d+) second(s*).$/, '欢迎回来！您离线了$1分钟$3秒。'], //离线等
    [/^Welcome back! You were offline for (\d+) minute(s*).$/, '欢迎回来！您离线了$1分钟。'], //离线等
    [/^Welcome back! You were offline for (\d+) hour(s*) and (\d+) minute(s*).$/, '欢迎回来！您离线了$1小时$3分钟。'], //离线等
    [/^Welcome back! You were offline for (\d+) hour(s*).$/, '欢迎回来！您离线了$1小时。'], //离线等
    [/^Welcome back! You were offline for (\d+) day(s*) and (\d+) hour(s*).$/, '欢迎回来！您离线了$1天$3小时。'], //离线等
    [/^(.+) \/ (.+) ticks \($/, '$1 \/ $2 \('], //离线等
    [/^(.+) items remain$/, '剩余$1个物品'], //离线等
    [/^(.+) seconds processed in (.+) seconds \((.+)L\/F, (.+)x speed$/, '在$2秒内处理了$1秒的进度(每帧处理$3次循环，速度为$4倍'], //离线等
    [/^Estimated completion in(.+)$/, '预计完成时间：$1'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头，$3金属，$4宝石和$5碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头，$3金属和$4宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头，$3金属和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2金属，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1木头，$2金属，$3宝石和$4碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) metal(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头和$3金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2木头和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1食物，$2金属和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2金属和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1木头，$2金属和$3宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1木头，$2金属和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1木头，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1金属，$2宝石和$3碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) wood(\.?)$/, '您不在时，脆皮们获取了$1食物和$2木头。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) metal(\.?)$/, '您不在时，脆皮们获取了$1食物和$2金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1食物和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1食物和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) metal(\.?)$/, '您不在时，脆皮们获取了$1木头和$2金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1木头和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1木头和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, and (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1金属和$2宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1金属和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) gems, and (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1宝石和$2碎片。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) food(\.?)$/, '您不在时，脆皮们获取了$1食物。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) wood(\.?)$/, '您不在时，脆皮们获取了$1木头。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) metal(\.?)$/, '您不在时，脆皮们获取了$1金属。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) gems(\.?)$/, '您不在时，脆皮们获取了$1宝石。'], //离线等
    [/^While you were away, your Trimps were able to produce (.+) fragments(\.?)$/, '您不在时，脆皮们获取了$1碎片。'], //离线等
    [/^(.+) Barn(s*), (.+) Shed(s*), and (.+) Forge(s*).$/, '$1个谷仓，$3个窝棚和$5个锻造厂。'], //离线等
    [/^(.+) Barn(s*), and (.+) Shed(s*).$/, '$1个谷仓和$3个窝棚。'], //离线等
    [/^(.+) Barn(s*), and (.+) Forge(s*).$/, '$1个谷仓和$3个锻造厂。'], //离线等
    [/^(.+) Shed(s*), and (.+) Forge(s*).$/, '$1个窝棚和$3个锻造厂。'], //离线等
    [/^(.*)The food stores are getting pretty full, maybe you should start thinking about a Barn.$/, '$1食物的存储快满了，您可能该考虑谷仓了。'], //其他升级等，前置
    [/^(.+) Barn(s*).$/, '$1个谷仓。'], //离线等
    [/^(.+) Shed(s*).$/, '$1个窝棚。'], //离线等
    [/^(.+) Forge(s*).$/, '$1个锻造厂。'], //离线等
    [/^(\s+)Bone Trader(\s+)$/, '$1骨法商人$2'], //骨头等
    [/^(\s+)You have$/, '$1您有 '], //骨头等
    [/^(\s+)You can earn bones as you progress through the world by killing Skeletimps and Megaskeletimps.(\s+)$/, '$1您可以在世界进度推进时，击杀脆皮骷髅或脆皮超级骷髅来获得骨头。$2'], //骨头等
    [/^(\s+)The Bone Trader trades bones for... bonuses(\s+)$/, '$1用骨头与骨法商人换点...“骨”利$2'], //骨头等
    [/^(\s+)Close(\s+)$/, '$1关闭$2'], //骨头等
    [/^(\s+)12 hours(\s+)$/, '$112小时$2'], //骨头等
    [/^(\s+)36 hours(\s+)$/, '$136小时$2'], //骨头等
    [/^(\s+)One of your storage structures will be more expensive than the amount you can receive from this boost. Spend some resources first to get the most benefit!(\s+)$/, '$1您有一个存储建筑花费超过了能获得的资源。先花费一些相应的资源，以使收益最大化！$2'], //骨头等
    [/^(\s+)Buy 12 Hours \(20 bones\)(\s+)$/, '购买12小时的产量(20骨头)'], //骨头等
    [/^(\s+)Buy 36 Hours \(40 bones\)(\s+)$/, '购买36小时的产量(40骨头)'], //骨头等
    [/^(\s+)Buy Bone Portal \(100 bones\)(\s+)$/, '购买骨头传送门(100骨头)'], //骨头等
    [/^(.*) Helium, (.*)x each Token, (.*) Fluffy Exp$/, '$1氦，各$2自然符记，$3绒绒经验'], //骨头等
    [/^(.*) Helium, (.*)x each Token$/, '$1氦，各$2自然符记'], //骨头等
    [/^(.*) Helium, (.*) Fluffy Exp$/, '$1氦，$2绒绒经验'], //骨头等
    [/^(.*) Radon, (.*) Scruffy Exp$/, '$1氡，$2污污经验'], //骨头等
    [/^Fluffy Helium$/, '绒绒氦'], //主界面，前置
    [/^Golden Helium$/, '金色氦'], //主界面，前置
    [/^- Helium$/, '- 氦'], //主界面，前置
    [/^AutoGold Helium$/, '金色升级氦'], //主界面，前置
    [/^You will gain (.*)% attack and health, and (.*)% Helium$/, '您将获得$1%攻击力和生命值，及$2%的氦获取量'], //挑战界面，前置
    [/^s. You will gain (.*)% attack and health, and (.*)% Helium$/, '。您将获得$1%攻击力和生命值，及$2%的氦获取量'], //挑战界面，前置
    [/^You will unlock this challenge once you have 30 total Helium$/, '欲解锁此挑战，您需要一共获得30氦'], //挑战，前置
    [/^Too Cool For Helium$/, '氦太酷了'], //成就，前置
    [/^Current Helium$/, '当前氦'], //脚本等，前置
    [/^Battle Helium$/, '战斗氦切换次数'], //脚本等，前置
    [/^(.*) Helium$/, '$1氦'], //骨头等
    [/^Scruffy Radon$/, '污污氡'], //主界面，前置
    [/^Golden Radon$/, '金色氡'], //主界面，前置
    [/^- Radon$/, '- 氡'], //主界面，前置
    [/^AutoGold Radon$/, '金色升级氡'], //主界面，前置
    [/^Raging Radon$/, '氡之暴怒'], //成就，前置
    [/^(.*) owned, \+(.*)% Radon$/, '拥有$1，氡获取量增加$2%'], //炼金术，前置
    [/^Helium \/ Radon$/, '氦 / 氡'], //脚本等，前置
    [/^Current Radon$/, '当前氡'], //脚本等，前置
    [/^Battle Radon$/, '战斗氡切换次数'], //脚本等，前置
    [/^(.*) Radon$/, '$1氡'], //骨头等
    [/^(\d+\%) Map Loot$/, '$1 地图资源获取'], //骨头等
    [/^(\d+\%) Trimp Damage$/, '$1 脆皮伤害'], //骨头等
    [/^(\s+)Buy Heirloom \(30 bones\)(\s+)$/, '$1购买传家宝(30骨头)$2'], //骨头等
    [/^(\s+)Get(\s)one(\s)Heirloom(\s)at(\s)the(\s)chances(\s)above,(\s)based(\s)on(\s)highest(\s)zone(\s+)$/, '$1传家宝稀有度基于最高通过区域而定，具体概率如上所示$12'], //骨头等
    [/^Map At Z(\d+)\+$/, '进图区域：$1+'], //自动进图
    [/^Map At Z(\d+)(\+*) \((\D)$/, '区域$1$2进图($3'], //自动进图
    [/^(\s+)Heirlooms are powerful items that can drop with a variety of bonuses and a variety of rarities. You will earn one Heirloom every time a Void Map is completed, and you have a better chance to get higher rarities if you complete the Void Map at higher zones. Once you have an Heirloom, you can click the icon below to select it.$/, '$1传家宝具有强大的能量，拥有多种加成和稀有度。每通过一张虚空地图，您就可以获得一个传家宝，且区域越高，越可能获得更高稀有度的传家宝。拥有传家宝以后，可以在下方点击图标选中。'], //传家宝
    [/^(\s+)Once you\'ve selected an Heirloom, you can see all of its stats on the right side of this screen.$/, '$1选中传家宝后，右侧将显示它的属性。'], //传家宝
    [/^(\s+)You can only carry a few Heirlooms \(other than the two you have equipped\) back through the Portal with you when you use it.$/, '$1您只能携带有限数量的传家宝(除了您装备的传家宝以外)通过传送门。'], //传家宝
    [/^(\s+)Equipped Shield$/, '$1已装备的盾牌'], //传家宝
    [/^(\s+)Equipped Core$/, '$1已装备的核心'], //传家宝
    [/^(\s+)Equipped Staff$/, '$1已装备的权杖'], //传家宝
    [/^Buy a Slot \((.*) Nu$/, '购买携带数($1虚空物质'], //传家宝
    [/^Add Slot \((.*) Nu$/, '增加携带数($1虚空物质'], //传家宝
    [/^You are about to purchase 1 extra slot to carry Heirlooms through the Portal for (.*) Nullifium. Are you sure\?$/, '您将使用$1虚空物质来多携带一个传家宝通过传送门。您确定要这么做吗？'], //传家宝
    [/^(\s+)Carried$/, '$1携带栏'], //传家宝
    [/^(\s+)Temporary$/, '$1临时栏'], //传家宝
    [/^- (.*) Heirloom(s*), recycled for (.*) Nu on Portal$/, '- 一共有$1个传家宝，传送时可以回收获得$3虚空物质'], //传家宝
    [/^- (.*) Heirloom(s*), recycled for (.*) Nu and (.*) Ss on Portal$/, '- 一共有$1个传家宝，传送时可以回收获得$3虚空物质和$4尖塔石'], //传家宝
    [/^Recycle \(\+(.*) Spirestones$/, '回收(可得$1尖塔石'], //传家宝
    [/^Recycle \(\+(.*) Nullifium$/, '回收(可得$1虚空物质'], //传家宝
    [/^You are about to recycle Common Core for (.*) Spirestones. Are you sure\?$/, '您将回收普通核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Uncommon Core for (.*) Spirestones. Are you sure\?$/, '您将回收罕见核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Rare Core for (.*) Spirestones. Are you sure\?$/, '您将回收稀有核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Epic Core for (.*) Spirestones. Are you sure\?$/, '您将回收史诗核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Legendary Core for (.*) Spirestones. Are you sure\?$/, '您将回收传奇核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Magnificent Core for (.*) Spirestones. Are you sure\?$/, '您将回收华丽核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Ethereal Core for (.*) Spirestones. Are you sure\?$/, '您将回收超凡核心并获得$1尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle (.*) for (.*) Spirestones. Are you sure\?$/, '您将回收$1并获得$2尖塔石。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Common Shield for (.*) Nullifium. Are you sure\?$/, '您将回收普通盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Uncommon Shield for (.*) Nullifium. Are you sure\?$/, '您将回收罕见盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Rare Shield for (.*) Nullifium. Are you sure\?$/, '您将回收稀有盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Epic Shield for (.*) Nullifium. Are you sure\?$/, '您将回收史诗盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Legendary Shield for (.*) Nullifium. Are you sure\?$/, '您将回收传奇盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Magnificent Shield for (.*) Nullifium. Are you sure\?$/, '您将回收华丽盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Ethereal Shield for (.*) Nullifium. Are you sure\?$/, '您将回收超凡盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Magmatic Shield for (.*) Nullifium. Are you sure\?$/, '您将回收岩浆盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Plagued Shield for (.*) Nullifium. Are you sure\?$/, '您将回收天灾盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Radiating Shield for (.*) Nullifium. Are you sure\?$/, '您将回收辐射盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Hazardous Shield for (.*) Nullifium. Are you sure\?$/, '您将回收厄劫盾牌并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Common Staff for (.*) Nullifium. Are you sure\?$/, '您将回收普通权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Uncommon Staff for (.*) Nullifium. Are you sure\?$/, '您将回收罕见权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Rare Staff for (.*) Nullifium. Are you sure\?$/, '您将回收稀有权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Epic Staff for (.*) Nullifium. Are you sure\?$/, '您将回收史诗权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Legendary Staff for (.*) Nullifium. Are you sure\?$/, '您将回收传奇权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Magnificent Staff for (.*) Nullifium. Are you sure\?$/, '您将回收华丽权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Ethereal Staff for (.*) Nullifium. Are you sure\?$/, '您将回收超凡权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Magmatic Staff for (.*) Nullifium. Are you sure\?$/, '您将回收岩浆权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Plagued Staff for (.*) Nullifium. Are you sure\?$/, '您将回收天灾权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Radiating Staff for (.*) Nullifium. Are you sure\?$/, '您将回收辐射权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle Hazardous Staff for (.*) Nullifium. Are you sure\?$/, '您将回收厄劫权杖并获得$1虚空物质。您确定要这么做吗？'], //传家宝
    [/^You are about to recycle (.*) for (.*) Nullifium. Are you sure\?$/, '您将回收$1并获得$2虚空物质。您确定要这么做吗？'], //传家宝
    [/^You have (.*) extra Heirloom(s*), which will be recycled for (.*) Nullifium . Are you sure\?$/, '临时栏中有$1个传家宝，回收后可获得$3虚空物质。您确定要这么做吗？'], //传家宝
    [/^You have (.*) extra Heirloom(s*), which will be recycled for (.*) Nullifium  and (.*) Spirestones. Are you sure\?$/, '临时栏中有$1个传家宝，回收后可获得$3虚空物质和$4尖塔石。您确定要这么做吗？'], //传家宝
    [/^(.*) \/ (.*) Nu Spent - (.*) Unspent$/, '虚空物质：已花$1，上限$2，剩余$3'], //传家宝
    [/^(.*) Ss Spent$/, '尖塔石：已花$1'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Fire Trap Damage$/, '$1火焰陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Poison Trap Damage$/, '$1剧毒陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Lightning Trap Damage$/, '$1闪电陷阱伤害'], //传家宝
    [/^Increases the damage dealt by Lightning Trap, Shocked, and its column boost to Fire and Poison Traps by (.*)%.$/, '将闪电陷阱、震荡效果造成的伤害，及对同一列火焰陷阱和剧毒陷阱的加成增加$1%。'], //传家宝
    [/^Increases the damage dealt by Lightning Trap and Shocked by (.*)%.$/, '将闪电陷阱及震荡效果造成的伤害增加$1%。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Runestone Drop Rate$/, '$1符石掉率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Strength Tower Effect$/, '$1力量塔效果'], //传家宝
    [/^Increases the damage dealt by Fire Traps on the same Floor as a Strength Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将与力量塔同一行的火焰陷阱伤害增加$1%。对力量塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Condenser Effect$/, '$1冷凝塔效果'], //传家宝
    [/^Increases the amount of Poison damage compounded by the Condenser Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将冷凝塔复合的毒伤害增加$1%。对冷凝塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Metal Drop Rate$/, '$1金属掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Food Drop Rate$/, '$1食物掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Wood Drop Rate$/, '$1木头掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Gem Drop Rate$/, '$1宝石掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Fragment Drop Rate$/, '$1碎片掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Farmer Efficiency$/, '$1农民效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Lumberjack Efficiency$/, '$1伐木工效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Miner Efficiency$/, '$1矿工效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Dragimp Efficiency$/, '$1脆皮龙宝石效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Explorer Efficiency$/, '$1探险家碎片效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Scientist Efficiency$/, '$1科学家效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Pet \(Fluffy\) Exp$/, '$1绒绒经验值'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Pet \(Scruffy\) Exp$/, '$1污污经验值'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Player Efficiency$/, '$1玩家效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Trainer Efficiency$/, '$1训练师效率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Storage Size$/, '$1存储上限'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Breed Speed$/, '$1脆皮繁殖速度'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Trimp Health$/, '$1脆皮生命值'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Trimp Attack$/, '$1脆皮攻击力'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Trimp Block$/, '$1脆皮格挡'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Crit Damage, additive$/, '$1暴击伤害(效果叠加)'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Crit Chance, additive$/, '$1暴击率(效果叠加)'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Void Map Drop Chance$/, '$1虚空地图掉落概率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Void Map Drop Chance\*$/, '$1虚空地图掉落概率*'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Plaguebringer$/, '$1瘟疫使者效果'], //传家宝
    [/^(.*)% of all non-lethal damage and nature stacks you afflict on your current enemy are copied onto the next enemy. Plaguebringer damage cannot bring an enemy below 5% health, but nature stacks will continue to accumulate.$/, '将对当前敌人造成的所有非致命伤害及累积的三种自然层数的$1%对下一个敌人生效。瘟疫使者的伤害效果无法将敌人的生命值降到5%以下，但自然层数无限制。'], //传家宝
    [/^Item Prismatic Shield$/, '棱镜护盾明细'], //主界面，前置
    [/^([0-9a-zA-Z\.\%\s]*)Prismatic Shield$/, '$1棱镜护盾'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Gamma Burst$/, '$1伽马爆发'], //传家宝
    [/^Each attack by your Trimps adds 1 stack of Charging. When Charging reaches 5 stacks, your Trimps will release a burst of energy, dealing (.*)% of their attack damage. Stacks reset after releasing a Burst or when your Trimps die.$/, '脆皮每次攻击时增加1层“蓄能”。当蓄能层数到达5层时，脆皮将释放积蓄的能量，对敌人造成$1%攻击力的伤害。当能量释放或者脆皮死亡后，层数重置。'], //传家宝
    [/^Add \((.+) Nu$/, '新增($1虚空物质'], //传家宝
    [/^Add \((.+) Ss$/, '新增($1尖塔石'], //传家宝
    [/^Replace \((.+) Nu$/, '替换($1虚空物质'], //传家宝
    [/^Replace \((.+) Ss$/, '替换($1尖塔石'], //传家宝
    [/^(.+) Nu$/, '$1虚空物质'], //传家宝
    [/^(.+) Ss$/, '$1尖塔石'], //传家宝
    [/^(.*)% Gamma Burst \(Innate$/, '$1%伽马爆发(先天加成'], //传家宝
    [/^(.*)% Parity \(Innate$/, '$1%对等(先天加成'], //传家宝
    [/^You are about to upgrade Fire Trap Damage for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级火焰陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Poison Trap Damage for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级剧毒陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Lightning Trap Damage for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级闪电陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Runestone Drop Rate for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级符石掉率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Strength Tower Effect for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级力量塔效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Condenser Effect for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级冷凝塔效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Metal Drop Rate for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级金属掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Food Drop Rate for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级食物掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Wood Drop Rate for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级木头掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Gem Drop Rate for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级宝石掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Fragment Drop Rate for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级碎片掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Farmer Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级农民效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Lumberjack Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级伐木工效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Miner Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级矿工效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Dragimp Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级脆皮龙宝石效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Explorer Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级探险家碎片效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Scientist Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级科学家效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Pet \(Fluffy\) Exp for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级绒绒经验值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Pet \(Scruffy\) Exp for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级污污经验值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Player Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级玩家效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trainer Efficiency for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级训练师效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Storage Size for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级存储上限。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Breed Speed for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级脆皮繁殖速度。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Health for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级脆皮生命值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Attack for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级脆皮攻击力。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Block for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级脆皮格挡。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Crit Damage, additive for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级暴击伤害(效果叠加)。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Crit Chance, additive for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级暴击率(效果叠加)。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Void Map Drop Chance for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级虚空地图掉落概率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Plaguebringer for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级瘟疫使者效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Prismatic Shield for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级棱镜护盾效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Gamma Burst for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级伽马爆发效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Fire Trap Damage 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次火焰陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Poison Trap Damage 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次剧毒陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Lightning Trap Damage 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次闪电陷阱伤害。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Runestone Drop Rate 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次符石掉率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Strength Tower Effect 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次力量塔效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Condenser Effect 10 times for (.*) Spirestones. Are you sure\?$/, '您将花费$1尖塔石升级10次冷凝塔效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Metal Drop Rate 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次金属掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Food Drop Rate 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次食物掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Wood Drop Rate 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次木头掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Gem Drop Rate 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次宝石掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Fragment Drop Rate 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次碎片掉落加成。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Farmer Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次农民效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Lumberjack Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次伐木工效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Miner Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次矿工效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Dragimp Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次脆皮龙宝石效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Explorer Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次探险家碎片效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Scientist Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次科学家效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Pet \(Fluffy\) Exp 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次绒绒经验值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Pet \(Scruffy\) Exp 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次污污经验值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Player Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次玩家效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trainer Efficiency 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次训练师效率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Storage Size 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次存储上限。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Breed Speed 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次脆皮繁殖速度。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Health 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次脆皮生命值。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Attack 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次脆皮攻击力。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Trimp Block 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次脆皮格挡。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Crit Damage, additive 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次暴击伤害(效果叠加)。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Crit Chance, additive 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次暴击率(效果叠加)。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Void Map Drop Chance 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次虚空地图掉落概率。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Plaguebringer 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次瘟疫使者效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Prismatic Shield 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次棱镜护盾效果。您确定要这么做吗？'], //传家宝
    [/^You are about to upgrade Gamma Burst 10 times for (.*) Nullifium. Are you sure\?$/, '您将花费$1虚空物质升级10次伽马爆发效果。您确定要这么做吗？'], //传家宝
    [/^You are about to add Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石新增冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Pet \(Fluffy\) Exp for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增绒绒经验值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Pet \(Scruffy\) Exp for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增污污经验值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Plaguebringer for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增瘟疫使者效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Prismatic Shield for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增棱镜护盾修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to add Gamma Burst for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质新增伽马爆发修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fire Trap Damage with Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将火焰陷阱伤害修饰符替换为剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fire Trap Damage with Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将火焰陷阱伤害修饰符替换为闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fire Trap Damage with Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将火焰陷阱伤害修饰符替换为符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fire Trap Damage with Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将火焰陷阱伤害修饰符替换为力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fire Trap Damage with Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将火焰陷阱伤害修饰符替换为冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Poison Trap Damage with Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将剧毒陷阱伤害修饰符替换为火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Poison Trap Damage with Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将剧毒陷阱伤害修饰符替换为闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Poison Trap Damage with Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将剧毒陷阱伤害修饰符替换为符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Poison Trap Damage with Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将剧毒陷阱伤害修饰符替换为力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Poison Trap Damage with Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将剧毒陷阱伤害修饰符替换为冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lightning Trap Damage with Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将闪电陷阱伤害修饰符替换为火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lightning Trap Damage with Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将闪电陷阱伤害修饰符替换为剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lightning Trap Damage with Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将闪电陷阱伤害修饰符替换为符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lightning Trap Damage with Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将闪电陷阱伤害修饰符替换为力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lightning Trap Damage with Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将闪电陷阱伤害修饰符替换为冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Runestone Drop Rate with Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将符石掉率修饰符替换为火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Runestone Drop Rate with Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将符石掉率修饰符替换为剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Runestone Drop Rate with Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将符石掉率修饰符替换为闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Runestone Drop Rate with Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将符石掉率修饰符替换为力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Runestone Drop Rate with Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将符石掉率修饰符替换为冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Strength Tower Effect with Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将力量塔效果修饰符替换为火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Strength Tower Effect with Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将力量塔效果修饰符替换为剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Strength Tower Effect with Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将力量塔效果修饰符替换为闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Strength Tower Effect with Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将力量塔效果修饰符替换为符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Strength Tower Effect with Condenser Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将力量塔效果修饰符替换为冷凝塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Condenser Effect with Fire Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将冷凝塔效果修饰符替换为火焰陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Condenser Effect with Poison Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将冷凝塔效果修饰符替换为剧毒陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Condenser Effect with Lightning Trap Damage for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将冷凝塔效果修饰符替换为闪电陷阱伤害修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Condenser Effect with Runestone Drop Rate for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将冷凝塔效果修饰符替换为符石掉率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Condenser Effect with Strength Tower Effect for (.*) Spirestones.  Are you sure\?$/, '您将花费$1尖塔石将冷凝塔效果修饰符替换为力量塔效果修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Metal Drop Rate with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将金属掉落加成修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Food Drop Rate with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将食物掉落加成修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Wood Drop Rate with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将木头掉落加成修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Gem Drop Rate with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将宝石掉落加成修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Fragment Drop Rate with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将碎片掉落加成修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Farmer Efficiency with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将农民效率修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Lumberjack Efficiency with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将伐木工效率修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Miner Efficiency with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将矿工效率修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Dragimp Efficiency with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮龙宝石效率修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Explorer Efficiency with Scientist Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将探险家碎片效率修饰符替换为科学家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Metal Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为金属掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Food Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为食物掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Wood Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为木头掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Gem Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为宝石掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Fragment Drop Rate for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为碎片掉落加成修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Farmer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为农民效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Lumberjack Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为伐木工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Miner Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为矿工效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Dragimp Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为脆皮龙宝石效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Scientist Efficiency with Explorer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将科学家效率修饰符替换为探险家碎片效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Player Efficiency with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将玩家效率修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trainer Efficiency with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将训练师效率修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Storage Size with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将存储上限修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Breed Speed with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮繁殖速度修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Health with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮生命值修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Attack with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮攻击力修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Trimp Block with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将脆皮格挡修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Damage, additive with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击伤害(效果叠加)修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Crit Chance, additive with Void Map Drop Chance for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将暴击率(效果叠加)修饰符替换为虚空地图掉落概率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Player Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为玩家效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Trainer Efficiency for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为训练师效率修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Storage Size for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为存储上限修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Breed Speed for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为脆皮繁殖速度修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Trimp Health for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为脆皮生命值修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Trimp Attack for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为脆皮攻击力修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Trimp Block for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为脆皮格挡修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Crit Damage, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为暴击伤害(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^You are about to replace Void Map Drop Chance with Crit Chance, additive for (.*) Nullifium.  Are you sure\?$/, '您将花费$1虚空物质将虚空地图掉落概率修饰符替换为暴击率(效果叠加)修饰符。您确定要这么做吗？'], //传家宝
    [/^(\s+)You Found an Heirloom!(\s+)$/, '$1您发现了一个传家宝！$2'], //传家宝
    [/^Time Portal( Mk\. )?([IVXLCDM]*)$/, '时空传送门$1$2'], //挑战界面
    [/^(\s+)Total(\s+)$/, '$1总计$2'], //挑战界面
    [/^(\s+)Current Run(\s+)$/, '$1上次传送后$2'], //挑战界面
    [/^(\d+)% attack and health and (.*)% increased Helium for every (\d+) Zones reached. Every (\d+) Zones, the attack and health bonus will increase by an additional (.*)%, and the Helium bonus will increase by$/, '$1%攻击力和生命值，及$2%的氦获取量于每到达$3个区域。且每到达$4个区域，以上加成还将增加攻击力和生命值 $5%，及氦获取量'], //挑战界面
    [/^(\d+)% attack and health and (.*)% increased Radon for every (\d+) Zones reached. Every (\d+) Zones, the attack and health bonus will increase by an additional (.*)%, and the Radon bonus will increase by$/, '$1%攻击力和生命值，及$2%的氡获取量于每到达$3个区域。且每到达$4个区域，以上加成还将增加攻击力和生命值 $5%，及氡获取量'], //挑战界面
    [/^(\d+)% Challenge$/, '$1%的挑战'], //挑战界面
    [/^bonus for every (\d+) Zones reached. Every (\d+) Zones, this bonus will increase by an additional$/, '加成于每到达$1个区域。且每到达$2个区域，以上加成还将增加'], //挑战界面
    [/^. You have a (.*)% bonus from Challenge$/, '。您在宇宙1中获得了$1%的挑战'], //挑战界面
    [/^in Universe 1, and a (.*)% bonus from Challenge$/, '加成，在宇宙2中获得了$1%的挑战'], //挑战界面
    [/^granting (.*)% extra attack and health, and (.*)% extra Helium.$/, '使您获得$1%攻击力和生命值，及$2%的氦获取量。'], //挑战界面
    [/^granting (.*)% extra attack and health, and (.*)% extra Radon.$/, '使您获得$1%攻击力和生命值，及$2%的氡获取量。'], //挑战界面
    [/^You are currently gaining (.*)% extra attack and health, and are gaining (.*)% extra Helium thanks to your Challenge$/, '您获得了$1%攻击力和生命值，及$2%的氦获取量，因为您有挑战'], //挑战界面
    [/^You are currently gaining (.*)% extra attack and health, and are gaining (.*)% extra Radon thanks to your Challenge$/, '您获得了$1%攻击力和生命值，及$2%的氡获取量，因为您有挑战'], //挑战界面
    [/^Bonus is capped at (.*)%.$/, '加成的上限为$1%。'], //挑战界面
    [/^is Z(.*) \(Capped to (.*) by Obsidian\), earning you (.*)% Challenge$/, '为区域$1(被黑曜石限制为区域$2)，使您获得$3%的挑战'], //挑战界面
    [/^is Z(.*) \(Capped to (.*) by Obsidian\), earning you (.*)% extra attack and health, and (.*)% more Helium from all sources.$/, '为区域$1(被黑曜石限制为区域$2)，使您获得$3%的额外攻击力和生命值，以及$4%的额外氦获取量。'], //挑战界面
    [/^is Z(.*), earning you (.*)% Challenge$/, '为区域$1，使您获得$2%的挑战'], //挑战界面
    [/^is Z(.*), earning you (.*)% extra attack and health, and (.*)% more Helium from all sources.$/, '为区域$1，使您获得$2%的额外攻击力和生命值，以及$3%的额外氦获取量。'], //挑战界面
    [/^bonus, and adding (.*)% to your total Challenge$/, '加成，且增加$1%至总挑战'], //挑战界面
    [/^Zones above Z(.*) are worth 5x more Challenge$/, '区域$1以上的区域可以提供5倍的挑战'], //挑战界面
    [/^(.*)Your challenge has been abandoned.$/, '$1您放弃了挑战。'], //挑战界面
    [/^You will gain (.*)% to your bonus$/, '您将获得$1%的加成'], //挑战界面
    [/^for every (.*) Zone(s*) reached.$/, '于每到达$1个区域。'], //挑战界面
    [/^s. You will gain (.*)% attack and health, and (.*)% Helium for every (.*) Zone(s*) reached.$/, '。您将获得$1%攻击力和生命值，及$2%的氦获取量于每到达$3个区域。'], //挑战界面
    [/^Every (.*) Zone(s*) reached,$/, '且每到达$1个区域，'], //挑战界面
    [/^this bonus will increase by (.*)% attack and health, and (.*)% Helium.$/, '以上加成还将增加攻击力和生命值 $1%，及氦获取量 $2%。'], //挑战界面
    [/^this bonus will increase by (.*)%.$/, '以上加成还将增加 $1%。'], //挑战界面
    [/^You are currently at Zone (.*),$/, '您目前在区域$1，'], //挑战界面
    [/^You are currently at Zone (.*).$/, '您目前在区域$1。'], //挑战界面
    [/^your previous highest for this challenge was Zone (.*). If you abandon the challenge now, you'll add (.*)% to your total Challenge$/, '此挑战您之前最高到达的区域为区域$1。如果您现在放弃挑战，将增加$2%加成到总挑战'], //挑战界面
    [/^your previous highest for this challenge was Zone (.*). If you use the portal now, you'll add (.*)% to your total Challenge$/, '此挑战您之前最高到达的区域为区域$1。如果您现在使用传送门，将增加$2%加成到总挑战'], //挑战界面
    [/^bonus, bringing it to (.*)%.$/, '加成，将它提升到$1%。'], //挑战界面
    [/^bonus, bringing it to (.*)%. Your new Challenge$/, '加成，将它提升到$1%。您的新挑战'], //挑战界面
    [/^bonus will be (.*)%.$/, '加成将变为$1%。'], //挑战界面
    [/^your best for this challenge is Zone (.*). If you abandon the challenge now, your total Challenge$/, '此挑战最高到达的区域为区域$1。如果您现在放弃挑战，您的总挑战'], //挑战界面
    [/^your best for this challenge is Zone (.*). If you use the portal now, your total Challenge$/, '此挑战最高到达的区域为区域$1。如果您现在使用传送门，您的总挑战'], //挑战界面
    [/^bonus will stay at (.*)%.$/, '加成将保持$1%不变。'], //挑战界面
    [/^You'll need to reach at least Zone (.*) before you'll add anything to your current Challenge$/, '至少在到达区域$1后，您才可以增加挑战'], //挑战界面
    [/^bonus of (.*)%.$/, '的加成，目前为$1%。'], //挑战界面
    [/^If you abandon the challenge now, you'll add (.*)% to your Challenge$/, '如果您现在放弃挑战，将增加$1%加成到挑战'], //挑战界面
    [/^If you use the portal now, you'll add (.*)% to your Challenge$/, '如果您现在使用传送门，将增加$1%加成到挑战'], //挑战界面
    [/^bonus, bringing the total to (.*)%.$/, '加成，将总加成变为$1%。'], //挑战界面
    [/^bonus, bringing the total to (.*)%. Your new Challenge$/, '加成，将总加成变为$1%。您的新挑战'], //挑战界面
    [/^You have (.*) extra Heirloom(s*), which will be recycled for (.*) Nullifium if you portal now. Make sure you carry any that you want to save!$/, '临时栏中有$1个传家宝，传送时将被回收为$3虚空物质。如果有想携带的，现在还来得及！'], //挑战界面
    [/^You have (.*) extra Heirloom(s*), which will be recycled for (.*) Nullifium  and (.*) Spirestones if you portal now. Make sure you carry any that you want to save!$/, '临时栏中有$1个传家宝，传送时将被回收为$3虚空物质和$4尖塔石。如果有想携带的，现在还来得及！'], //挑战界面
    [/^You have (.*) Magmite, which is enough purchase an upgrade for your Dimensional Generator! If you portal now, (\d*)% of your Magmite will decay.$/, '您有$1岩浆岩，可以用于购买维度发生器的一项升级！如果现在传送，$2%岩浆岩将会衰变消失。'], //挑战界面
    [/^Preset: (.*)$/, '预设：$1'], //挑战界面
    [/^You currently have (.*) stack(s*) of Equality active.$/, '您目前的平等生效等级为$1。'], //挑战界面
    [/^(.*)You have completed the$/, '$1您完成了 '], //通用挑战完成消息
    [/^Click to view todays challenge, which resets in less than (.*) day(s*).$/, '点击以查看今天的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Sundays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周日的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Mondays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周一的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Tuesdays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周二的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Wednesdays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周三的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Thursdays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周四的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Fridays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周五的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Click to view Saturdays challenge, which resets in less than (.*) day(s*).$/, '点击以查看周六的挑战，此挑战将在$1天内重置。'], //日常挑战消息
    [/^Sunday (\d+)-(\d+)-$/, '周日 $1-$2-'], //日常挑战消息
    [/^Monday (\d+)-(\d+)-$/, '周一 $1-$2-'], //日常挑战消息
    [/^Tuesday (\d+)-(\d+)-$/, '周二 $1-$2-'], //日常挑战消息
    [/^Wednesday (\d+)-(\d+)-$/, '周三 $1-$2-'], //日常挑战消息
    [/^Thursday (\d+)-(\d+)-$/, '周四 $1-$2-'], //日常挑战消息
    [/^Friday (\d+)-(\d+)-$/, '周五 $1-$2-'], //日常挑战消息
    [/^Saturday (\d+)-(\d+)-$/, '周六 $1-$2-'], //日常挑战消息
    [/^Trimp min damage reduced by (.*)% \(additive\).$/, '脆皮最小伤害减少$1%(相互叠减)。'], //日常挑战消息
    [/^Trimp max damage increased by (.*)% \(additive\).$/, '脆皮最大伤害增加$1%(相互叠加)。'], //日常挑战消息
    [/^Enemies stack a debuff with each attack, damaging Trimps for (.*)% of total health per turn per stack, resets on Trimp death.$/, '[天灾]敌人每次攻击时叠加一个负面效果，每层每轮对脆皮造成生命值上限$1%的伤害，在脆皮死亡时重置层数。'], //日常挑战消息
    [/^Your Trimps are taking (.*)% damage after each attack.$/, '您的脆皮在敌人攻击后受到生命值上限$1%的伤害。'], //日常挑战消息
    [/^Enemies stack a debuff with each attack, reducing Trimp attack by (.*)% per stack. Stacks cap at 9 and reset on Trimp death.$/, '[弱化]敌人每次攻击时叠加一个负面效果，每层减少脆皮$1%的伤害，层数最高为9，在脆皮死亡时重置层数。'], //日常挑战消息
    [/^Your Trimps have (.*)% less attack.$/, '您的脆皮攻击力减少$1%。'], //日常挑战消息
    [/^All housing can store (.*)% fewer Trimps$/, '所有住房容纳的脆皮数量减少$1%'], //日常挑战消息
    [/^Gain (.*)% more resources from gathering$/, '采集获取的资源增加$1%'], //日常挑战消息
    [/^Gain (.*)% less Metal, Food, Wood, and Gems from all sources$/, '获取的金属，食物，木头和宝石减少$1%'], //日常挑战消息
    [/^Enemy attack increased by (.*)%.$/, '敌人攻击力增加$1%。'], //日常挑战消息
    [/^Enemy health increased by (.*)%.$/, '敌人生命值增加$1%。'], //日常挑战消息
    [/^Enemy attack in maps increased by (.*)%.$/, '地图中的敌人攻击力增加$1%。'], //日常挑战消息
    [/^Enemy health in maps increased by (.*)%.$/, '地图中的敌人生命值增加$1%。'], //日常挑战消息
    [/^Enemies have a 25% chance to crit for (.*)% of normal damage.$/, '敌人有25%的概率额外造成$1%的伤害。'], //日常挑战消息
    [/^Your Trimps have \+(.*)% Crit Chance.$/, '您的脆皮暴击率增加$1%。'], //日常挑战消息
    [/^Your Trimps have -(.*)% Crit Chance.$/, '您的脆皮暴击率减少$1%。'], //日常挑战消息
    [/^Your Trimps lose (.*)% of their max health after each attack.$/, '[泥沼]您的脆皮在每次攻击后失去生命值上限$1%的生命值。'], //日常挑战消息
    [/^Your Trimps breed (.*)% slower$/, '脆皮繁殖速度减少$1%'], //日常挑战消息
    [/^Trimps have (.*)% less attack on odd numbered Zones$/, '脆皮在奇数区域攻击力减少$1%'], //日常挑战消息
    [/^Trimps have (.*)% more attack on even numbered Zones$/, '脆皮在偶数区域攻击力增加$1%'], //日常挑战消息
    [/^Gain a stack after killing an enemy, increasing all non Helium loot by (.*)%. Stacks cap at (.*), and reset after clearing a Zone.$/, '[业力]击杀一名敌人后获得一层业力，将所有非氦资源获取量提升$1%。层数最高为$2，在通过一个区域后重置。'], //日常挑战消息
    [/^Gain a stack after killing an enemy, increasing all non Radon loot by (.*)%. Stacks cap at (.*), and reset after clearing a Zone.$/, '[业力]击杀一名敌人后获得一层业力，将所有非氡资源获取量提升$1%。层数最高为$2，在通过一个区域后重置。'], //日常挑战消息
    [/^Your Trimps are finding (.*)% more loot!$/, '您的脆皮可以多发现$1%资源！'], //日常挑战消息
    [/^Gain a stack after killing an enemy, reducing breed speed by (.*)% \(compounding\). Stacks cap at (.*), and reset after clearing a Zone.$/, '[毒性]击杀一名敌人后获得一层毒性，将脆皮繁殖速度减少$1%(相互叠乘)。层数最高为$2，在通过一个区域后重置。'], //日常挑战消息
    [/^Your Trimps are breeding (.*)% slower.$/, '您的脆皮繁殖速度减少了$1%。'], //日常挑战消息
    [/^Enemies gain a stack of Bloodthirst whenever Trimps die. Every (.*) stacks, enemies will heal to full and gain an additive 50% attack. Stacks cap at (.*) and reset after killing an enemy.$/, '[嗜血]当脆皮死亡时敌人获得一层嗜血。每达到$1层嗜血，敌人将恢复所有生命值，并增加50%攻击力(相互叠加)。层数最高为$2，在击杀一名敌人后重置。'], //日常挑战消息
    [/^This Bad Guy will heal to full and gain attack in (.*) stack(s*),  and gains 1 stack whenever Trimps die.$/, '此敌人再获得$1层嗜血就会恢复所有生命值，并增加攻击力，在脆皮死亡时获得1层嗜血。'], //日常挑战消息
    [/^This Bad Guy will heal to full and gain attack in (.*) stack(s*),  gains 1 stack whenever Trimps die, and currently has (.*)% more attack.$/, '此敌人再获得$1层嗜血就会恢复所有生命值，并增加攻击力，在脆皮死亡时获得1层嗜血，目前增加了$4攻击力。'], //日常挑战消息
    [/^This Bad Guy currently has (.*)% more attack.$/, '此敌人目前增加了$1攻击力。'], //日常挑战消息
    [/^Enemies instantly deal (.*)% of their attack damage when killed.$/, '敌人被击杀时立刻造成它们攻击力$1%的伤害。'], //日常挑战消息
    [/^Enemies instantly deal (.*)% of their attack damage when killed unless your block is as high as your maximum health.$/, '除非您的格挡达到最大生命值，否则敌人被击杀时立刻造成它们攻击力$1%的伤害。'], //日常挑战消息
    [/^Enemies have a (.*)% chance to dodge your attacks on odd Zones.$/, '敌人在奇数区域有$1%概率闪避您的攻击。'], //日常挑战消息
    [/^Enemies have a (.*)% chance to dodge your attacks on even Zones.$/, '敌人在偶数区域有$1%概率闪避您的攻击。'], //日常挑战消息
    [/^Gain a stack after killing an enemy, increasing Trimp attack by (.*)% \(additive\). Stacks cap at (.*), and reset when your Trimps die.$/, '[暴走]击杀一名敌人后获得一层暴走，将脆皮攻击力提升$1%(相互叠加)。层数最高为$2，在脆皮死亡后重置。'], //日常挑战消息
    [/^Your Trimps are dealing (.*)% more damage.$/, '您的脆皮可以多造成$1%伤害。'], //日常挑战消息
    [/^40% of Bad Guys in the first (.*) rows of the World will be mutated into Mutimps.$/, '世界的前$1行有40%的敌人会变异为脆皮变异者。'], //日常挑战消息
    [/^40% of Bad Guys in the first (.*) rows of the World will be mutated into Hulking Mutimps.$/, '世界的前$1行有40%的敌人会变异为脆皮大型变异者。'], //日常挑战消息
    [/^All enemies gain (.*) stack(s*) of Empower whenever your Trimps die in the World. Empower increases the attack and health of Bad Guys in the World by 0.2% per stack, can stack to 9999, and never resets.$/, '[赋能]当脆皮在世界中阵亡时，世界上所有敌人获得$1层赋能。每层赋能将世界上的敌人的攻击力和生命值增加0.2%，层数最高为9999，在挑战过程中不会重置。'], //日常挑战消息
    [/^This Bad Guy is Empowered and has (.*)% more health and attack.$/, '此敌人获得了赋能，增加了$1%生命值和攻击力。'], //日常挑战消息
    [/^Trimps gain a stack of Pressure every (.*) seconds. Each stack of pressure reduces Trimp health by 1%. Max of (.*) stacks, stacks reset after clearing a Zone.$/, '[压力]脆皮们每$1秒获得一层压力。每层压力将脆皮生命值减少1%。层数最高为$2，在通过一个区域后重置。'], //日常挑战消息
    [/^Your Trimps are under a lot of pressure. Maximum health is reduced by (.*)%.$/, '您的脆皮受到了巨大的压力。生命值上限减少$1%。'], //日常挑战消息
    [/^Enemies have a(n*) (.*)% chance to reflect an attack, dealing (.*)% of damage taken back to your Trimps. \(will not reflect damage done above the Enemy's max health\).$/, '敌人有$2%概率反弹一次攻击，将此次攻击造成伤害的$3%反弹给您的脆皮。(反弹的伤害不会超过此敌人的生命值上限)。'], //日常挑战消息
    [/^Equipment is (.*)% cheaper.$/, '装备花费减少$1%。'], //日常挑战消息
    [/^You have the (.*) Daily challenge active.$/, '您正在进行$1的日常挑战。'], //日常挑战消息
    [/^(.*)You have completed the Balance challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了平衡挑战！您获取了$2氦，现在您又可以重新挑战了。'], //平衡挑战完成消息
    [/^(.*)You can research science again!$/, '$1您又可以进行科学研究了！'], //科学家挑战放弃消息
    [/^(.*)You have completed the 'Meditate' challenge! The dimension has returned to normal, and you have unlocked a new perk!$/, '$1您完成了 冥想 挑战！这个维度恢复到了正常，而且您解锁了一个新的特权！'], //冥想挑战完成消息
    [/^(.*)You have completed the Decay challenge! All stats have been returned to normal, and you can now create more powerful Gardens maps at will!$/, '$1您完成了 衰变 挑战！一切都恢复了正常，而且您可以制造更强大的花园地图了！'], //衰变挑战完成消息
    [/^(.*)You have completed the 'Trapper' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了 捕手 挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手挑战完成消息
    [/^(.*)You have completed the Electricity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了电流挑战！您获取了$2氦，现在您又可以重新挑战了。'], //电流挑战完成消息
    [/^(.*)You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!$/, '$1您完成了 节俭 挑战！您又可以获得重铸升级了，而且超级升级的资源获取速度额外提升10%！'], //节俭挑战完成消息
    [/^(.*)You have completed the Life challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了生命挑战！您获取了$2氦，现在您又可以重新挑战了。'], //生命挑战完成消息
    [/^(.*)You have completed the Mapocalypse challenge! You have unlocked the 'Siphonology' Perk, and have been rewarded with (.*) Helium.$/, '$1您完成了天启地图挑战！您解锁了 虹吸学 特权，并且获取了$2氦。'], //天启地图挑战完成消息
    [/^(.*)You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!$/, '$1您完成了 协同 挑战！世界上的敌人不再协同作战了，并且又可以获得快速效果了。您解锁了 协同 特权！'], //协同挑战完成消息
    [/^Bionic Wonderland([\s\(ZIVXLCDM]*)$/, '仿生仙境$1'], //粉碎挑战等
    [/^(.*)You have completed the Crushed challenge! You have been rewarded with (.*) Helium.$/, '$1您完成了粉碎挑战！您获取了$2氦。'], //粉碎挑战完成消息
    [/^(.*)You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!$/, '$1您完成了迟缓挑战！您学会了制造棉甲和强弩！'], //迟缓挑战完成消息
    [/^(.*)You have completed the Nom challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了美味挑战！您获取了$2氦，现在您又可以重新挑战了。'], //美味挑战完成消息
    [/^(.*)You have (.*) Map Credit(s*) left!$/, '$1您还剩下$2地图代币！'], //地图学挑战消息
    [/^(.*)You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!$/, '$1您完成了地图学挑战！您解锁了 足智多谋 特权！物美价廉！'], //地图学挑战完成消息
    [/^(.*)You have completed the Toxicity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了毒性挑战！您获取了$2氦，现在您又可以重新挑战了。'], //毒性挑战完成消息
    [/^(.*)You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!$/, '$1您完成了破坏挑战！世界恢复了正常，而且您解锁了 超杀 特权！'], //破坏挑战完成消息
    [/^(.*)You have completed the Watch challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了守望挑战！您获取了$2氦，现在您又可以重新挑战了。'], //守望挑战完成消息
    [/^This Bad Guy has (.*)% more damage and health, pierces an additional (.*)% block, and each attack that does not kill it will cause your Trimps to lose (.*)% of their health.$/, '此敌人拥有$1%的伤害和生命值，并且格挡穿透增加$2%，如果脆皮攻击后没能击杀敌人，它们将受到$3%生命值的伤害。'], //领导挑战等
    [/^(.*)You have completed the Lead challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了领导挑战！您获取了$2氦，现在您又可以重新挑战了。'], //领导挑战完成消息
    [/^Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^You have the Corrupted challenge active. Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '您目前正在进行腐化挑战。前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^(.*)You have completed the Corrupted challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了腐化挑战！您获取了$2氦，现在您又可以重新挑战了。'], //腐化挑战完成消息
    [/^(.*)You have completed the Domination challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了统治挑战！您获取了$2氦，现在您又可以重新挑战了。'], //统治挑战完成消息
    [/^Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x.$/, '前往一个对您完全不友好的维度，这绝非明智之举。此维度中无法进行液化，敌人的攻击力和生命值为正常的$1倍，装备成本为正常的$2倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^You have the Obliterated challenge active. "Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x."$/, '您目前正在进行抹杀挑战。前往一个对您完全不友好的维度，这绝非明智之举。此维度中无法进行液化，敌人的攻击力和生命值为正常的$1倍，装备成本为正常的$2倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的$1倍，装备成本为正常的$2倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^You have the Eradicated challenge active. "If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '您目前正在进行灭绝挑战。如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的$1倍，装备成本为正常的$2倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^(.*)You have completed the Unbalance challenge! You have unlocked the Equality Perk!$/, '$1您完成了不平衡挑战！您解锁了 平等 特权！'], //不平衡挑战完成消息
    [/^(.*)Oh no, you failed the Bublé challenge! You have been rewarded with (.*) extra Radon, and you may try again.$/, '$1太糟了，泡影挑战失败了！您获取了$2氡，现在您又可以重新挑战了。'], //泡影挑战失败消息
    [/^(.*)You have completed the Bublé challenge! You're a hero among Trimps! You have been rewarded with (.*) extra Radon, and you may repeat the challenge.$/, '$1您完成了泡影挑战！您是脆皮英雄！您获取了$2氡，现在您又可以重新挑战了。'], //泡影挑战成功消息
    [/^Your Trimps have (\d+) Duel Points.$/, '脆皮有$1点决斗点数。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points.$/, '敌人有$1点决斗点数。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 3x attack for being over 50 points.$/, '脆皮有$1点决斗点数。因为脆皮决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 3x attack for being over 50 points.$/, '敌人有$1点决斗点数。因为敌人决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps always attack first and have 10x health for being below 10 points.$/, '脆皮有$1点决斗点数。因为脆皮决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys always attack first and have 10x health for being below 10 points.$/, '敌人有$1点决斗点数。因为敌人决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 10x health for being below 20 points.$/, '脆皮有$1点决斗点数。因为脆皮决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 10x health for being below 20 points.$/, '敌人有$1点决斗点数。因为敌人决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+)% Crit Chance based on enemy stacks.$/, '根据敌人的决斗点数，脆皮获得$1点暴击率。'], //决斗挑战等
    [/^The Bad Guys have (\d+)% Crit Chance based on your stacks.$/, '根据脆皮的决斗点数，敌人获得$1点暴击率。'], //决斗挑战等
    [/^(.*)You have completed the Duel challenge! You have unlocked the Criticality Perk!$/, '$1您完成了决斗挑战！您解锁了 暴击限界 特权！'], //决斗挑战完成消息
    [/^(.*)You have completed the Melt challenge! You have been rewarded with (.*) Radon, and you may repeat the challenge.$/, '$1您完成了熔化挑战！您获取了$2氡，现在您又可以重新挑战了。'], //熔化挑战完成消息
    [/^(.*)You have completed the 'Trappapalooza' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了捕手道达人挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手道达人挑战完成消息
    [/^(.*)You have completed the Quagmire challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了泥淖挑战！您额外获取了$2氡，世界恢复了正常。'], //泥淖挑战完成消息
    [/^Your Trimps are Motivated, increasing all Loot gained \(including Radon\) by (.*)%.$/, '脆皮们积极前进，所有资源获取(包括氡)增加$1%。'], //泥淖挑战等
    [/^Your Trimps are exhausted, having only (.*)% of their normal damage and breed speed.$/, '脆皮们疲惫不堪，攻击力和繁殖速度只有正常的$1%。'], //泥淖挑战等
    [/^Your Trimps are not at all exhausted, and have (.*)% more damage and breed speed.$/, '脆皮们完全不疲惫，攻击力和繁殖速度增加$1%。'], //泥淖挑战等
    [/^(.*)You have completed the Wither challenge! Your world has been returned to normal, and you have unlocked the Tenacity perk!$/, '$1您完成了凋零挑战！世界恢复了正常，而且您解锁了 坚持 特权！'], //凋零挑战完成消息
    [/^Your Trimps have (\d+) stack(s*) of Hardened, increasing their Health by (.*)%.$/, '脆皮有$1层硬化，增加了$3%生命值。'], //凋零挑战等
    [/^The Bad Guys have (\d+) stack(s*) of Horror, increasing their Attack by (.*)%.$/, '敌人有$1层恐惧，增加了$3%攻击力。'], //凋零挑战等
    [/^(.*)You have completed the Revenge challenge! Your world has been returned to normal, and you have unlocked the Hunger perk!$/, '$1您完成了复仇挑战！世界恢复了正常，而且您解锁了 饥饿 特权！'], //复仇挑战成功消息
    [/^(.*)You have failed the Revenge Challenge! Better luck next time!$/, '$1复仇挑战失败了！祝您下次好运！'], //复仇挑战失败消息
    [/^Your Trimps have been killed by enemy overkill damage (\d+) time(s*)$/, '脆皮因敌人溢出伤害而死亡了$1次'], //复仇挑战等
    [/^Your Trimps have (.*)x Attack and Health, but you will fail the challenge if they get (\d+) more stack(s*)!$/, '脆皮的攻击力和生命值变为$1倍，但如果再增加$2次，那么挑战将失败！'], //复仇挑战等
    [/^Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z(.*) \(compounding\). However, you'll also get a random Quest each Zone starting at the same Zone. Your Quest start Zone is always equal to your highest Zone on C3 minus 80, but never lower than 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone \(does not stack\), and will increase your Trimps' attack by 10% for the rest of the Challenge \(compounding\). Check messages or the Zone info tooltip for quest progress.$/, '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域$1开始，每层增加10%生命值(相互叠乘)。但从相同的区域开始，您每个区域也会获得一个随机任务。任务起始区域总是等于挑战3最高通过区域减去80，且不会低于6。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。'], //任务挑战等
    [/^You have the Quest challenge active. "Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z(.*) \(compounding\). However, you'll also get a random Quest each Zone starting at the same Zone. Your Quest start Zone is always equal to your highest Zone on C3 minus 80, but never lower than 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone \(does not stack\), and will increase your Trimps' attack by 10% for the rest of the Challenge \(compounding\). Check messages or the Zone info tooltip for quest progress."$/, '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域$1开始，每层增加10%生命值(相互叠乘)。但从相同的区域开始，您每个区域也会获得一个随机任务。任务起始区域总是等于挑战3最高通过区域减去80，且不会低于6。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: Quest Complete!$/, '任务内容：将食物变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为5倍。进度：$1/$2食物'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: Quest Complete!$/, '任务内容：将木头变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为5倍。进度：$1/$2木头'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: Quest Complete!$/, '任务内容：将金属变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为5倍。进度：$1/$2金属'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为5倍。进度：$1/$2宝石'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: Quest Complete!$/, '任务内容：将科学点变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为5倍。进度：$1/$2科学点'], //任务挑战等
    [/^Quest: Double your food. Progress: Quest Complete!$/, '任务内容：将食物变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为2倍。进度：$1/$2食物'], //任务挑战等
    [/^Quest: Double your wood. Progress: Quest Complete!$/, '任务内容：将木头变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为2倍。进度：$1/$2木头'], //任务挑战等
    [/^Quest: Double your metal. Progress: Quest Complete!$/, '任务内容：将金属变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为2倍。进度：$1/$2金属'], //任务挑战等
    [/^Quest: Double your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为2倍。进度：$1/$2宝石'], //任务挑战等
    [/^Quest: Double your science. Progress: Quest Complete!$/, '任务内容：将科学点变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为2倍。进度：$1/$2科学点'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: Quest Complete!$/, '任务内容：通过5张等级为区域层数的地图。进度：任务完成！'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: (.*) \/$/, '任务内容：通过5张等级为区域层数的地图。进度：$1/'], //任务挑战等
    [/^Quest: One-shot 5 world enemies. Progress: Quest Complete!$/, '任务内容：秒杀世界上的5名敌人。进度：任务完成！'], //任务挑战等
    [/^Quest: One-shot 5 world enemies. Progress: (.*) \/$/, '任务内容：秒杀世界上的5名敌人。进度：$1/'], //任务挑战等
    [/^(.*)You have completed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务完成！您已经完成了$2/$3个任务。'], //任务挑战等
    [/^(.*)Oh no, you failed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务失败，真糟糕！您已经完成了$2/$3个任务。'], //任务挑战等
    [/^(.*)You have a new quest!$/, '$1新的任务来了！内容为 '], //任务挑战等
    [/^(.*)You have completed the Quest challenge! Your World has been returned to normal and you have unlocked the Greed Perk!$/, '$1您完成了任务挑战！世界恢复了正常，而且您解锁了 贪婪 特权！'], //任务挑战完成消息
    [/^Decreases all Enemy Attack by (.*)%. You currently have (.*)% to Enemy Attack.$/, '减少敌人$1%攻击力。您目前使敌人攻击力变化：$2%。'], //考古学挑战等
    [/^Increases all Attack by (.*)%. You currently have (.*)% to Attack.$/, '增加脆皮$1%攻击力。您目前使脆皮攻击力变化：$2%。'], //考古学挑战等
    [/^Increases all Radon by (.*)%. You currently have (.*)% to Radon.$/, '增加$1%氡获取量。您目前使氡获取量变化：$2%。'], //考古学挑战等
    [/^Increases all Resource Gain \(Food, Wood, Metal, Science, and Gems\) by (.*)%. You currently have (.*)% to Resource Gain.$/, '增加$1%非氡资源获取量(食物、木头、金属、科学点和宝石)。您目前使非氡资源获取量变化：$2%。'], //考古学挑战等
    [/^Increases all Breed Speed by (.*)%. You currently have (.*)% to Breed Speed.$/, '增加$1%繁殖速度。您目前使繁殖速度变化：$2%。'], //考古学挑战等
    [/^You have discovered (\d+) of these Relics and (\d+) total Relics. Each Relic has a max of 50 positive levels at a time. Cost increases based on total purchased Relics.$/, '您一共发现了$1个此类型的遗物，总共发现了$2个遗物。每个遗物最大为50级，且花费随着遗物发现总数而上升。'], //考古学挑战等
    [/^(.*)You have completed the Archaeology Challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了考古学挑战！您额外获取了$2氡，世界恢复了正常。'], //考古学挑战完成消息
    [/^(.*)Now that you've mastered the skill of Archaeology, you've gained the ability to use a more powerful Custom Golden Upgrade automator! See the AutoGold tooltip or Ctrl Click AutoGold for more info.$/, '$1您已精通考古技艺，因此您可以进一步自定义自动金色升级了！查看自动金色升级的提示框，或者是按下Ctrl再点击以获取更详细的信息。'], //考古学挑战完成消息
    [/^(.*)You've gained the ability to create Small and Large Research Caches in Maps!$/, '$1您现在可以在地图中使用研究储藏箱修饰符了！'], //考古学挑战完成消息
    [/^NOTICE: You have already completed Mayhem (\d+) times, and will no longer gain a bonus for future runs.$/, '注意：您已经完成了$1次暴乱挑战，无法再获得加成了。'], //暴乱挑战等
    [/^Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with (.*) stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone's level \(For example, a level 15 map will remove 3 stacks per completion when at Z13\). Completing$/, '前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得$1层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 '], //暴乱挑战等
    [/^bonus to Radon or Helium, and Trimp Attack and Health in Universes 1 and 2. Each time Mayhem is completed, the reward for next time increases by an additional 10% and Enemies gain 3x damage and health for all future runs of Mayhem. The amount of Mayhem stacks that each Zone starts with is always equal to 1000 minus 5 for each highest Zone cleared above Z100 in this Universe \(You have cleared Z(.*) and start each Zone with (.*) stacks$/, '宇宙1中的氦获取量，宇宙2中的氡获取量，及宇宙1和宇宙2中的脆皮攻击力和生命值(相互叠加)。且每完成一次暴乱挑战，下次挑战的奖励就增加20%，但后续暴乱挑战中，敌人也会增加3倍攻击力和生命值。每个区域获得的暴乱层数基础值为1000，此宇宙中最高通过区域每超过区域100以上1个区域，则暴乱层数减去5层(您已经通过了区域$1，暴乱层数为$2'], //暴乱挑战等
    [/^You have completed Mayhem (\d+) \/ (\d+) maximum time(s*). Your Trimps have \+(.*)% Attack, Health, and Helium or Radon, and your next run of Mayhem will spawn Bad Guys with (.*)x Attack and Health.$/, '您共完成了$1次暴乱挑战，挑战可完成次数上限为$2。挑战总奖励为增加$4%脆皮攻击力、生命值、氦或氡获取量，下轮的敌人攻击力和生命值将增加$5倍。'], //暴乱挑战等
    [/^You have the Mayhem challenge active. Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with (.*) stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone's level \(For example, a level 15 map will remove 3 stacks per completion when at Z13\). Completing$/, '您目前正在进行暴乱挑战。前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得$1层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 '], //暴乱挑战等
    [/^The Final Enemy of this Zone has (\d+) stacks of Mayhem, granting \+(.*)% Damage and Health. Complete Maps to lower these stacks.$/, '此区域最后一格的敌人目前有$1层暴乱，增加$2%攻击力和生命值。通过地图来减少层数。'], //暴乱挑战等
    [/^(.*)You have completed the Mayhem Challenge! Your Trimps have gained \+(.*)% Helium or Radon and Trimp Attack and Health in Universe 1 and 2, and future runs of this Challenge will be 3x more difficult. You have now completed Mayhem (\d+) time(s*). Your new total Mayhem bonus is \+$/, '$1您完成了暴乱挑战！宇宙1中的氦获取量，宇宙2中的氡获取量，及宇宙1和宇宙2中的脆皮攻击力和生命值增加了$2%，后续挑战的难度将变为现在的3倍。您共完成了$3次暴乱挑战。暴乱挑战总奖励为 '], //暴乱挑战完成消息
    [/^(.*)You completed Mayhem again, just for fun!$/, '$1您再度完成了暴乱挑战，虽然这并没有什么用，只是自娱自乐而已！'], //暴乱挑战完成消息
    [/^Travel to a dimension that storms year-round. Trimps gain Storm stacks after every attack, damaging them for (.*)% of their max hp per stack. Enemies gain Cloudy stacks after every attack. Every (.*) Cloudy particles causes a Stormcloud on that enemy, causing them to gain max hp and damage, and take extra damage from gamma bursts. Cloudy stacks stick around after bad guys die, and each new group of bad guys start with a Cloudy stack for each Stormcloud on the previous enemy. Cloudy stacks cannot accrue and Stormclouds have no effect in maps, but Trimps in maps have -0.05% attack per Cloudy stack on the enemy. Defeating an enemy in a map will remove 1 Cloudy stack. Completing$/, '前往一个常年风暴天气的维度。每次攻击后，脆皮获得静电层数，每层对您的脆皮造成$1%最大生命值的伤害。敌人每次攻击后，获得云层数。每$2层云使敌人获得1层风暴云，风暴云层数使敌人增加生命值和伤害，但同时也受到额外的伽马爆发伤害。云层数在敌人死亡后仍然保留，且上一名敌人每有1层风暴云，当前敌人就获得1层云。在地图中，云层数不会增加，风暴云也没有效果，但每层云使脆皮减少0.05%攻击力。在地图中击杀一名敌人后将减少1层云。在此挑战激活的前提下通过区域'], //风暴挑战等
    [/^You have the Storm challenge active. Travel to a dimension that storms year-round. Trimps gain Storm stacks after every attack, damaging them for (.*)% of their max hp per stack. Enemies gain Cloudy stacks after every attack. Every (.*) Cloudy particles causes a Stormcloud on that enemy, causing them to gain max hp and damage, and take extra damage from gamma bursts. Cloudy stacks stick around after bad guys die, and each new group of bad guys start with a Cloudy stack for each Stormcloud on the previous enemy. Cloudy stacks cannot accrue and Stormclouds have no effect in maps, but Trimps in maps have -0.05% attack per Cloudy stack on the enemy. Defeating an enemy in a map will remove 1 Cloudy stack. Completing$/, '您目前正在进行风暴挑战。前往一个常年风暴天气的维度。每次攻击后，脆皮获得静电层数，每层对您的脆皮造成$1%最大生命值的伤害。敌人每次攻击后，获得云层数。每$2层云使敌人获得1层风暴云，风暴云层数使敌人增加生命值和伤害，但同时也受到额外的伽马爆发伤害。云层数在敌人死亡后仍然保留，且上一名敌人每有1层风暴云，当前敌人就获得1层云。在地图中，云层数不会增加，风暴云也没有效果，但每层云使脆皮减少0.05%攻击力。在地图中击杀一名敌人后将减少1层云。在此挑战激活的前提下通过区域'], //风暴挑战等
    [/^Travel to a dimension that storms year-round. Trimps gain Storm stacks after every attack, damaging them for (.*)% of their max hp per stack. Enemies gain Cloudy stacks after every attack. Every (.*) Cloudy particles causes a Stormcloud on that enemy, causing them to gain max hp and damage, and take extra damage from gamma bursts. Cloudy stacks stick around after bad guys die, and each new group of bad guys start with a Cloudy stack for each Stormcloud on the previous enemy. Cloudy stacks cannot accrue and Stormclouds have no effect in maps, but Trimps in maps have -0.05% attack per Cloudy stack on the enemy. Defeating an enemy in a map will remove 1 Cloudy stack.$/, '前往一个常年风暴天气的维度。每次攻击后，脆皮获得静电层数，每层对您的脆皮造成$1%最大生命值的伤害。敌人每次攻击后，获得云层数。每$2层云使敌人获得1层风暴云，风暴云层数使敌人增加生命值和伤害，但同时也受到额外的伽马爆发伤害。云层数在敌人死亡后仍然保留，且上一名敌人每有1层风暴云，当前敌人就获得1层云。在地图中，云层数不会增加，风暴云也没有效果，但每层云使脆皮减少0.05%攻击力。在地图中击杀一名敌人后将减少1层云。'], //风暴挑战等
    [/^You have the Storm challenge active. "Travel to a dimension that storms year-round. Trimps gain Storm stacks after every attack, damaging them for (.*)% of their max hp per stack. Enemies gain Cloudy stacks after every attack. Every (.*) Cloudy particles causes a Stormcloud on that enemy, causing them to gain max hp and damage, and take extra damage from gamma bursts. Cloudy stacks stick around after bad guys die, and each new group of bad guys start with a Cloudy stack for each Stormcloud on the previous enemy. Cloudy stacks cannot accrue and Stormclouds have no effect in maps, but Trimps in maps have -0.05% attack per Cloudy stack on the enemy. Defeating an enemy in a map will remove 1 Cloudy stack."$/, '您目前正在进行风暴挑战。前往一个常年风暴天气的维度。每次攻击后，脆皮获得静电层数，每层对您的脆皮造成$1%最大生命值的伤害。敌人每次攻击后，获得云层数。每$2层云使敌人获得1层风暴云，风暴云层数使敌人增加生命值和伤害，但同时也受到额外的伽马爆发伤害。云层数在敌人死亡后仍然保留，且上一名敌人每有1层风暴云，当前敌人就获得1层云。在地图中，云层数不会增加，风暴云也没有效果，但每层云使脆皮减少0.05%攻击力。在地图中击杀一名敌人后将减少1层云。'], //风暴挑战等
    [/^Your Trimps are taking (.*)% of their max health as damage after each attack.$/, '您的脆皮每次攻击后受到$1%最大生命值的伤害。'], //风暴挑战等
    [/^This enemy is amassing clouds! For every (.*) Cloudy stacks, this enemy will gain 1 Stormcloud.$/, '此敌人正在积聚云朵！每有$1层云，敌人就获得1层风暴云。'], //风暴挑战等
    [/^This enemy is engulfed by the Storm! It has (.*)% extra health, (.*)% extra attack, and takes (.*)% extra damage from Gamma Bursts.$/, '此敌人被风暴云吞没了！它额外增加了$1%生命值，$2%攻击力，但额外受到伽马爆发$3%的伤害。'], //风暴挑战等
    [/^(.*)You have completed the Storm Challenge and unlocked the Antenna building!$/, '$1您完成了风暴挑战，并解锁了 气象天线 建筑！'], //风暴挑战完成消息
    [/^You have a (.*)% chance per cell to find a Horrimp.$/, '您每格有$1%概率发现脆皮惊骇者。'], //失智挑战等
    [/^Your Trimps have x(.*) health and x(.*) loot.$/, '您的脆皮生命值变为$1倍，资源获取量变为$2倍。'], //失智挑战等
    [/^(.*)You have completed the Insanity challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了失智挑战！您额外获取了$2氡，世界恢复了正常。'], //失智挑战完成消息
    [/^Your Trimps are in a wild frenzy! They currently have -(.*)% max health, +(.*)% attack, and heal for 1% of their maximum health after killing an enemy.$/, '您的脆皮们抓狂了！它们减少了$1%生命值，增加了$2%攻击力，并且每次击杀一名敌人，可以恢复最大生命值1%的生命值。'], //狂战挑战等
    [/^When not frenzied, your Trimps have -(.*)% health.$/, '当没有战狂状态时，您的脆皮们减少$1%生命值。'], //狂战挑战等
    [/^Your Trimps have -(.*)% health and can no longer become frenzied.$/, '您的脆皮们减少了$1%生命值，并且无法再进入战狂状态。'], //狂战挑战等
    [/^(.*)You have completed the Berserk challenge! You have unlocked the Frenzy Perk and your world has been returned to normal.$/, '$1您完成了狂战挑战！您解锁了 战狂 特权，世界恢复了正常。'], //狂战挑战完成消息
    [/^All World enemies in this dimension have grown while you were in maps, granting +(.*)% attack and health.$/, '此维度中，世界上的所有敌人在您之前进入地图时成长壮大了，获得了$1%的攻击力和生命值。'], //灭虫挑战等
    [/^All World enemies in this dimension are growing while you are in maps, granting +(.*)% attack and health.$/, '此维度中，世界上的所有敌人在您进入地图时成长壮大了，获得了$1%的攻击力和生命值。'], //灭虫挑战等
    [/^(.*)You have completed the Exterminate Challenge! You have unlocked the Hub, a revolutionary new way to store your extra Trimps!$/, '$1您完成了灭虫挑战！您解锁了中心枢纽，一种容纳脆皮的新建筑！'], //灭虫挑战完成消息
    [/^(.*)You have completed the Nurture challenge! You have gained an extra (.+) Radon, and your world has been returned to normal.$/, '$1您完成了培养挑战！您额外获取了$2氡，世界恢复了正常。'], //培养挑战完成消息
    [/^(.*)You have also unlocked the Observation Perk!$/, '$1您同时还解锁了洞察特权！'], //培养挑战完成消息
    [/^NOTICE: You have already completed Pandemonium (.*) times, and will no longer gain a bonus for future runs.$/, '注意：您已经完成了$1次群魔乱舞挑战，无法再获得加成了。'], //群魔乱舞挑战等
    [/^You have completed Pandemonium (\d+) \/ (\d+) maximum times. Your Trimps have \+(.*)% Attack, Health, Radon or Helium, and gathered resources in U1 and U2, and your next run of Pandemonium will spawn Bad Guys with (.*)x Attack and Health and all Equipment will be (.*)x more expensive.$/, '您共完成了$1次群魔乱舞挑战，挑战可完成次数上限为$2。挑战总奖励为增加$3%脆皮攻击力、生命值、氦或氡获取量，资源获取量，下轮的敌人攻击力和生命值将增加$4倍，所有的装备价格变为原来的$5倍。'], //群魔乱舞挑战等
    [/^You have completed Pandemonium (\d+) \/ (\d+) maximum times. Your Trimps have \+(.*)% Attack, Health, Radon or Helium, and gathered resources in U1 and U2, and your next run of Pandemonium will spawn Bad Guys with (.*)x Attack and Health, all Equipment will be (.*)x more expensive, and the first (.*) Equipments? will be disabled.$/, '您共完成了$1次群魔乱舞挑战，挑战可完成次数上限为$2。挑战总奖励为增加$3%脆皮攻击力、生命值、氦或氡获取量，资源获取量，下轮的敌人攻击力和生命值将增加$4倍，所有的装备价格变为原来的$5倍，且前$6个装备无法使用。'], //群魔乱舞挑战等
    [/^This Boss Enemy will shred (.*)% of your resources with each Attack, and has (.*)% increased Attack and Health. Completing maps will remove some of these stacks.$/, '此首领敌人每次攻击后使您的资源减少$1%，且攻击力和生命值增加$2%。通过地图以减少此层数。'], //群魔乱舞挑战等
    [/^This Enemy has (.*)% more Attack and Health. Completing maps will remove some of these stacks.$/, '此敌人攻击力和生命值增加$1%。通过地图以减少此层数。'], //群魔乱舞挑战等
    [/^10% of these stacks will convert into Pandemonium stacks when this Zone is completed. Increases the orderliness of your Trimps by (.*)%.$/, '通过此区域后，10%的秩序层数将被转换为群魔乱舞层数。脆皮的秩序度增加$1%(译者注：无实际效果)。'], //群魔乱舞挑战等
    [/^(.*)You have completed the Pandemonium Challenge! Your Trimps have gained \+(.*)% Radon or Helium, Damage, Health and Gathered Resources in Universe 1 and 2, and future runs of this Challenge will be 5x more difficult. You have now completed Pandemonium (.*) times?. Your new total Pandemonium bonus is \+$/, '$1您完成了群魔乱舞挑战！宇宙1和宇宙2中的氦或氡获取量，脆皮攻击力，脆皮生命值和资源获取量增加了$2%，后续挑战的难度将变为现在的5倍。您共完成了$3次群魔乱舞挑战。群魔乱舞挑战总奖励为'], //群魔乱舞挑战完成消息
    [/^(.*)You completed Pandemonium again, just for fun!$/, '$1您再度完成了群魔乱舞挑战，虽然这并没有什么用，只是自娱自乐而已！'], //群魔乱舞挑战完成消息
    [/^(.*)You have completed the Alchemy challenge! You have gained an extra (.+) Radon, and your world has been returned to normal.$/, '$1您完成了炼金术挑战！您额外获取了$2氡，世界恢复了正常。'], //炼金术挑战完成消息
    [/^(.*)You have unlocked the ability to create Farmlands Maps! Farmlands Maps have \+100% Loot in Universe 2 and rotate between the other map types based on the zone at which they're run. See the Map Creation biome selection tooltip for more info!$/, '$1您还解锁了制造农场地图的能力！农场地图在宇宙2中劫掠加成额外增加100%，资源类型根据当前区域会不停变化。查看地图界面的生物群落提示框以获取更详细的信息！'], //炼金术挑战完成消息
    [/^Maximum of (.*) levels.$/, '最高$1级。'], //特权等
    [/^Looting(\s+)II$/, '劫掠 II'], //特权等
    [/^Carpentry(\s+)II$/, '木工 II'], //特权等
    [/^Motivation(\s+)II$/, '鼓舞 II'], //特权等
    [/^Power(\s+)II$/, '力量 II'], //特权等
    [/^Toughness(\s+)II$/, '坚韧 II'], //特权等
    [/^Reduce the Zone that Fluffy can start earning Experience at by 3. With (\d+) level(s*) in Classy, Fluffy will start earning Experience at Z(\d+).$/, '绒绒提前3个区域开始获得经验值。上等特权提升$1级后，绒绒将从区域$3开始获得经验值。'], //特权等
    [/^Use your experiences in understanding the attention span of Trimps to increase the damage dealt by all soldiers based on how long it took to get an army together. Increases damage by 2% per level per second up to (\d+) seconds.$/, '脆皮的注意力持续时间您已了如指掌，所以您可以利用它增加脆皮的攻击力。军队每需要1秒进行繁殖，每级预期特权就可以使脆皮增加2%攻击力。预期特权的效果上限为$1秒。'], //特权等
    [/^Huffy has learned much from Assaulting his Spire, now store some of that knowledge in your Portal! Gain (.+)% attack and health plus another (.+)% per Spire Assault level cleared, compounding per perk level.$/, '怒怒从尖塔突击中学到了更多东西，把它学到的一些知识存到传送门里吧！每级可以增加$1%的攻击力和生命值，且每通过一级尖塔突击，还可以使此加成再增加$2%，每级特权之间叠乘。'], //特权等
    [/^You are currently gaining (.+) attack and health. Your next Spire Assault level will increase this bonus to (.+), or your next perk level will increase this bonus to (.+).$/, '目前攻击力和生命值增加了$1，下一级尖塔突击后可以使此加成变为$2，下一级特权将使此加成变为$3。'], //特权等
    [/^Your Trimps are frenzied for (.*) second(s*)! They are dealing (.*)% more damage.$/, '您的脆皮们的战狂状态持续时间还有$1秒！它们可以额外造成$3%伤害。'], //特权等
    [/^The Trimps that earned this Frenzy buff are still alive, and they will be able to refresh its duration starting in (.*) second(s*).$/, '最初触发战狂的脆皮们仍然还幸存着，再过$1秒，它们就可以刷新战狂状态持续时间了。'], //特权等
    [/^Grants your Trimps the ability to locate small Runetrinkets around the World. For each level of this perk, your Trimps will gain a chance per Zone cleared above Z100 to find a Runetrinket. Each Runetrinket increases your Trimps' attack, health, and gathered primary resources by 1% \(additive\) per perk level. You can store a maximum of (.+) Runetrinkets per perk level, reducing levels in this perk will deactivate any trinkets above cap but not lose them. Runetrinkets persist through Portal and never reset. The chance to find a Runetrinket increases by about 50% per level of this Perk, and scales as the Zone number increases \(up to Z200\). You'll also find 1 guaranteed Runetrinket every 25 Zones above Z100 for every 2 levels of this perk.$/, '使您的脆皮们可以在世界上找到小符饰。此特权每级都能增加脆皮找到小符饰的概率，此概率还与本次传送后到达的区域数量有关，但只计算超过区域100的部分。每有1级特权，每个小符饰都可以使您的脆皮的攻击力，生命值和食物、木头、金属获取量增加1%(效果叠加)。每级特权可以使小符饰上限增加$1，如果对此特权进行洗点，超出上限的小符饰将暂时失效，但重新加点后将重新生效。小符饰传送后仍然存在，数量不会重置。每级特权可以使找到小符饰的概率增加约50%，并且随着区域数量的增加而增加(上限为区域200)。另外，每有2级特权，每在区域100以上通过25个区域，就可以稳定获得1个小符饰。'], //特权等
    [/^You have (.+) Runetrinket(s*).$/, '您拥有$1个小符饰！'], //特权等
    [/^You have (.+) Runetrinket(s*). You are currently gaining (.+) attack, health, and gathered resources.$/, '您拥有$1个小符饰。目前小符饰使您脆皮的攻击力，生命值和食物、木头、金属获取量增加$3。'], //特权等
    [/^(.*)You found (.+) Runetrinket(s*)!$/, '$1您找到了$2个小符饰！'], //特权等
    [/^(.*) Helium Canister(s*)$/, '$1氦'], //特权等
    [/^(.*) Radon Vial(s*)$/, '$1氡'], //特权等
    [/^You have spent (.*) Helium on this Perk.$/, '您已经在这个特权上花费了$1氦。'], //特权等
    [/^You have spent (.*) Radon on this Perk.$/, '您已经在这个特权上花费了$1氡。'], //特权等
    [/^Looting II X(.*)$/, '劫掠 II X$1'], //特权等
    [/^Carpentry II X(.*)$/, '木工 II X$1'], //特权等
    [/^Motivation II X(.*)$/, '鼓舞 II X$1'], //特权等
    [/^Power II X(.*)$/, '力量 II X$1'], //特权等
    [/^Toughness II X(.*)$/, '坚韧 II X$1'], //特权等
    [/^Capable X(.*)$/, '能力 X$1'], //特权等
    [/^Cunning X(.*)$/, '灵巧 X$1'], //特权等
    [/^Curious X(.*)$/, '好奇 X$1'], //特权等
    [/^Classy X(.*)$/, '上等 X$1'], //特权等
    [/^Overkill X(.*)$/, '超杀 X$1'], //特权等
    [/^Resourceful X(.*)$/, '足智多谋 X$1'], //特权等
    [/^Coordinated X(.*)$/, '协同 X$1'], //特权等
    [/^Siphonology X(.*)$/, '虹吸学 X$1'], //特权等
    [/^Anticipation X(.*)$/, '预期 X$1'], //特权等
    [/^Resilience X(.*)$/, '弹性 X$1'], //特权等
    [/^Meditation X(.*)$/, '冥想 X$1'], //特权等
    [/^Relentlessness X(.*)$/, '无情 X$1'], //特权等
    [/^Greed X(.*)$/, '贪婪 X$1'], //特权等
    [/^Tenacity X(.*)$/, '坚持 X$1'], //特权等
    [/^Criticality X(.*)$/, '暴击限界 X$1'], //特权等
    [/^Equality X(.*)$/, '平等 X$1'], //特权等
    [/^Carpentry X(.*)$/, '木工 X$1'], //特权等
    [/^Artisanistry X(.*)$/, '手艺娴熟 X$1'], //特权等
    [/^Range X(.*)$/, '范围 X$1'], //特权等
    [/^Agility X(.*)$/, '敏捷 X$1'], //特权等
    [/^Bait X(.*)$/, '诱饵 X$1'], //特权等
    [/^Trumps X(.*)$/, '王牌 X$1'], //特权等
    [/^Pheromones X(.*)$/, '信息素 X$1'], //特权等
    [/^Packrat X(.*)$/, '囤积成瘾 X$1'], //特权等
    [/^Motivation X(.*)$/, '鼓舞 X$1'], //特权等
    [/^Power X(.*)$/, '力量 X$1'], //特权等
    [/^Toughness X(.*)$/, '坚韧 X$1'], //特权等
    [/^Looting X(.*)$/, '劫掠 X$1'], //特权等
    [/^Prismal X(.*)$/, '棱镜化 X$1'], //特权等
    [/^Hunger X(.*)$/, '饥饿 X$1'], //特权等
    [/^Championism X(.*)$/, '乐于助人 X$1'], //特权等
    [/^Frenzy X(.*)$/, '战狂 X$1'], //特权等
    [/^Observation X(.*)$/, '洞察 X$1'], //特权等
    [/^Your Trimps learn to harvest special Herbs while collecting Food! Increases Trimp Attack by a number based on your total stored food. Grants \+30% Attack at (.*) Food, or \+300% at (.*). At your current total of (.*) Food,$/, '您的脆皮现在可以在采集食物时同时采集百草！根据食物存储量增加攻击力。在$1食物时增加30%攻击力，在$2食物时增加300%攻击力。您当前共有$3食物，'], //神农专精
    [/^you are gaining \+([\d+\.]+)% Trimp Attack$/, '您获得了 +$1% 攻击力'], //神农专精
    [/^you would gain \+([\d+\.]+)% Trimp Attack$/, '您可获得 +$1% 攻击力'], //神农专精
    [/^Each cleared Zone through Z(\d+) \(half of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域$1(最高通过区域的一半)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 I专精
    [/^Reduce the time in between fights and attacks by an additional 100ms through Z(\d+) \((\d+)% of your highest Zone reached\).$/, '直到区域$1(最高通过区域的$2%)之前，将战斗间隔和攻击间隔减少100毫秒。'], //风驰电掣 II专精
    [/^Each cleared Zone through Z(\d+) \(75% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域$1(最高通过区域的75%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 II专精
    [/^Each cleared Zone through Z(\d+) \(90% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域$1(最高通过区域的90%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 III专精
    [/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. You have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果5% ，等同于额外完成了1个尖塔。您完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 I专精
    [/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your Fluffy bonus as half of a Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果5% ，等同于额外完成了1个尖塔。加上绒绒的半个尖塔额外加成，您完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 I专精
    [/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your two Fluffy bonuses as one Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果5% ，等同于额外完成了1个尖塔。加上绒绒的1个尖塔额外加成，您完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Helium and (\d+) Void Maps.$/, '，自上次传送后氦获得$2%额外的加成，并且获得$3张虚空地图。'], //虚空特化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Radon and (\d+) Void Maps.$/, '，自上次传送后氡获得$2%额外的加成，并且获得$3张虚空地图。'], //虚空特化 I专精
    [/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 II专精
    [/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 II专精
    [/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 II专精
    [/^last Portal, (earning you a bonus of|which would earn you a bonus of) (\d+) more Void Maps \((\d+) including Void Specialization I\).$/, '，自上次传送后获得$2张虚空地图(加上虚空特化 I的效果，共可获得$3张虚空地图)。'], //虚空特化 II专精
    [/^Fluffy gains \+25% more Exp per Zone for each completed Evolution. Fluffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '绒绒每进化一次，每区域就多获得25%经验值。绒绒目前进化了$1次，多获得$4%经验值。'], //绒绒专注专精
    [/^Scruffy gains \+25% more Exp per Zone for each completed Evolution. Scruffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '污污每进化一次，每区域就多获得25%经验值。污污目前进化了$1次，多获得$4%经验值。'], //污污专注专精
    [/^Your Shield currently has a bonus of ([\d+\.]+)%, so this Mastery (is giving you|would give you) \+([\d+\.]+)% additional Crit Chance.$/, '您的盾牌目前暴击率为$1%，因此该专精额外增加$3%暴击率。'], //蓄力暴击专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Helium does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Helium to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氦加成不能超过绒绒融合的上限。对您来说，这个上限为$1次。换句话说，融合100次的虚空地图或者融合$2次的虚空地图都给予每张虚空地图$3%的氦加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Radon does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Radon to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氡加成不能超过绒绒融合的上限。对您来说，这个上限为$1次。换句话说，融合100次的虚空地图或者融合$2次的虚空地图都给予每张虚空地图$3%的氡加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^On your current run, you have cleared through Spire (.*), so this Mastery is granting (\d+) extra Healthy cell(s*). On your current Zone, you're finding (\d+) Healthy cells.$/, '自上次传送后您通过了尖塔 $1，此专精可获得$2个额外健康格子。当前区域中有$4个健康格子。'], //健康之力 II专精
    [/^Hyperspeed II's bonus will now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限提升为最高通过区域的75%(区域$1)，而不是只有之前的'], //液化 III专精
    [/^Hyperspeed II's bonus will also now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限同时提升为最高通过区域的75%(区域$1)，而不是只有之前的'], //液化 III专精
    [/^Counting Liquification I and II as two Spires, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 III专精
    [/^Counting Liquification I and II as two Spires and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 III专精
    [/^Counting Liquification I and II as two Spires and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了$1个尖塔，液化效果持续到最高通过区域的$3%(区域$4)，此专精将液化效果提高到最高通过区域的$6%(区域$7)。'], //液化 III专精
    [/^bonus of (.*)%. Removing this Mastery would reduce your bonus by (.*)%, bringing your total Challenge$/, '的加成为$1%。去掉这个专精以后加成将减少$2%， 总挑战'], //梅斯梅尔专精
    [/^bonus down to (.*)%.$/, '加成减少为$1%。'], //梅斯梅尔专精
    [/^bonus of (.*)%. Purchasing this Mastery would increase your bonus by (.*)%, bringing your total Challenge$/, '的加成为$1%。购买这个专精以后加成将增加$2%， 总挑战'], //梅斯梅尔专精
    [/^bonus up to (.*)%.$/, '加成增加为$1%。'], //梅斯梅尔专精
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Power I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空力量 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Power I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空力量 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Void Power I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过虚空力量 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Headstart I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过先声夺人 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Headstart I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过先声夺人 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Headstart I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过先声夺人 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Turkimp Tamer I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过脆皮火鸡饲主 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Turkimp Tamer I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过脆皮火鸡饲主 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Turkimp Tamer I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过脆皮火鸡饲主 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Headstart II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过先声夺人 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Headstart II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过先声夺人 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Headstart II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过先声夺人 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Hyperspeed I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过风驰电掣 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Hyperspeed I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过风驰电掣 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Hyperspeed I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过风驰电掣 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Blacksmithery I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过锻铁术 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Blacksmithery I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过锻铁术 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Blacksmithery I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过锻铁术 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires King of Bones I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过骨头之王 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires King of Bones I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过骨头之王 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires King of Bones I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过骨头之王 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Explorer Aura I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过探险家光环 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Explorer Aura I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过探险家光环 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Explorer Aura I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过探险家光环 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Power II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空力量 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Power II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空力量 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Void Power II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过虚空力量 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Blacksmithery II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过锻铁术 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Blacksmithery II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过锻铁术 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Blacksmithery II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过锻铁术 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Heirnuum I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过传家虚物 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Heirnuum I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过传家虚物 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Heirnuum I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过传家虚物 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Scryhard I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过努力占卜 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Scryhard I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过努力占卜 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Scryhard I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过努力占卜 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Map Reducer I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过地图减压 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Map Reducer I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过地图减压 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Map Reducer I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过地图减压 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Natural Diplomacy I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过自然斡旋 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Natural Diplomacy I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过自然斡旋 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Natural Diplomacy I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过自然斡旋 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Liquification I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过液化 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Liquification I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过液化 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Liquification I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过液化 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Still Rowing I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过尖塔排行 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Specialization I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空特化 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Specialization I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空特化 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Void Specialization I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过虚空特化 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Specialization II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空特化 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Void Specialization II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过虚空特化 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Void Specialization II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过虚空特化 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Strength in Health I$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过健康之力 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Strength in Health I$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过健康之力 I'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Strength in Health I$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过健康之力 I'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing II and Magmamancermancy$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 II和岩浆巫师学'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing II and Magmamancermancy$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 II和岩浆巫师学'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Still Rowing II and Magmamancermancy$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过尖塔排行 II和岩浆巫师学'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Still Rowing II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过尖塔排行 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Still Rowing II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过尖塔排行 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Magmamancermancy$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过岩浆巫师学'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Magmamancermancy$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过岩浆巫师学'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Magmamancermancy$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过岩浆巫师学'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier (.*). This Mastery also requires Liquification II$/, '未解锁(购买两个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过液化 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier (.*). This Mastery also requires Liquification II$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数 $2。此专精还需要购买过液化 II'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier (.*). This Mastery also requires Liquification II$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数 $2。此专精还需要购买过液化 II'], //专精等
    [/^Locked \(Buy 2 Masteries from Tier (.*) to unlock Tier$/, '未解锁(购买两个第$1层的升级以解锁升级于层数'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock Tier$/, '未解锁(再购买一个第$1层的升级以解锁升级于层数'], //专精等
    [/^Locked \(Buy 1 more Mastery from Tier (.*) to unlock the next from Tier$/, '未解锁(再购买一个第$1层的升级以解锁下一个升级于层数'], //专精等
    [/^(.*) Dark Essence \(Use Scrying Formation to earn more$/, '$1黑暗精华(使用占卜阵型以获取更多'], //专精等
    [/^(.*) Dark Essence$/, '$1黑暗精华'], //专精等
    [/^Golden Battle ([IVXLCDM]+)$/, '金色战斗 $1'], //金色升级等
    [/^Golden Helium ([IVXLCDM]+)$/, '金色氦 $1'], //金色升级等
    [/^Golden Radon ([IVXLCDM]+)$/, '金色氡 $1'], //金色升级等
    [/^Golden Void ([IVXLCDM]+)$/, '金色虚空 $1'], //金色升级等
    [/^Golden Battle \(Tier ([IVXLCDM]+)$/, '金色战斗($1阶'], //金色升级等
    [/^Golden Helium \(Tier ([IVXLCDM]+)$/, '金色氦($1阶'], //金色升级等
    [/^Golden Radon \(Tier ([IVXLCDM]+)$/, '金色氡($1阶'], //金色升级等
    [/^Golden Void \(Tier ([IVXLCDM]+)$/, '金色虚空($1阶'], //金色升级等
    [/^Increase Helium gain by (.*)%.$/, '使氦的获取量增加$1%。'], //金色升级等
    [/^Increase Radon gain by (.*)%.$/, '使氡的获取量增加$1%。'], //金色升级等
    [/^Increase Trimp attack and health by (.*)%.$/, '使脆皮的攻击力和生命值增加$1%。'], //金色升级等
    [/^Decrease the minimum amount of enemies between Void Map drops by (.*)%.$/, '使每张虚空地图掉落所需的敌人数减少$1%。'], //金色升级等
    [/^Each time Golden Upgrades are unlocked, they will increase in strength. You are currently gaining (.*)% from purchasing this upgrade (.*) time(s*) since your last portal.$/, '每次解锁新的金色升级，它的加成都会变得更高。由于传送后您购买了$2次该升级，该升级的加成变为$1%。'], //金色升级等
    [/^Free \((.*) remaining$/, '免费(剩余$1次'], //金色升级等
    [/^You have found (.*) total Runestones.$/, '您总共获得了$1符石。'], //尖塔等
    [/^(.*) Runestones have been spent on Upgrades.$/, '其中$1符石用于了升级。'], //尖塔等
    [/^(.*) Runestones have been spent on Traps\/Towers in your current layout.$/, '$1符石用于了当前的布局。'], //尖塔等
    [/^You are earning (.*)% more Runestones from all sources thanks to your Spire Core!$/, '由于尖塔核心的效果，您可以多获得$1%符石！'], //尖塔等
    [/^You have an additional (.*) Maximum Enemies allowed in your Spire, thanks to Frost IV.$/, '由于冰霜陷阱 IV的效果，您可以多容纳$1名敌人。'], //尖塔等
    [/^Ss: (.*) \/$/, '尖塔石：$1 /'], //尖塔等
    [/^Spirestones: (.*) \/$/, '尖塔石：$1 /'], //尖塔等
    [/^威: (.*) \/$/, '威：$1 /'], //尖塔等
    [/^Threat: (.*) \/$/, '威胁度：$1 /'], //尖塔等
    [/^Total Cost: (.*) Rs$/, '总花费：$1符石'], //尖塔等
    [/^Value of Current Traps: (.*) Rs$/, '当前陷阱价值：$1符石'], //尖塔等
    [/^Remaining Cost: (.*) Rs$/, '还需要花费：$1符石'], //尖塔等
    [/^Refund: (.*) Rs$/, '可返还：$1符石'], //尖塔等
    [/^Fire Trap([\sIVXLCDM]*)$/, '火焰陷阱$1'], //尖塔等
    [/^Frost Trap([\sIVXLCDM]*)$/, '冰霜陷阱$1'], //尖塔等
    [/^Strength Tower([\sIVXLCDM]*)$/, '力量塔$1'], //尖塔等
    [/^Poison Trap([\sIVXLCDM]*)$/, '剧毒陷阱$1'], //尖塔等
    [/^Lightning Trap([\sIVXLCDM]*)$/, '闪电陷阱$1'], //尖塔等
    [/^Condenser Tower([\sIVXLCDM]*)$/, '冷凝塔$1'], //尖塔等
    [/^Knowledge Tower([\sIVXLCDM]*)$/, '知识塔$1'], //尖塔等
    [/^Fire Trimps$/, '解雇脆皮'], //主界面，前置
    [/^Fire([\sIVXLCDM]*)$/, '火焰$1'], //尖塔等
    [/^Frost([\sIVXLCDM]*)$/, '冰霜$1'], //尖塔等
    [/^Strength in Health$/, '健康之力'], //主界面，前置
    [/^Strength in Health I$/, '健康之力 I'], //专精，前置
    [/^Strength in Health II$/, '健康之力 II'], //专精，前置
    [/^Strength([\sIVXLCDM]*)$/, '力量$1'], //尖塔等
    [/^Poison Tick$/, '剧毒伤害'], //尖塔，前置
    [/^Poison active$/, '已启用毒之启迪'], //自然，前置
    [/^Poison Calc$/, '毒赋能计算'], //脚本等，前置
    [/^Poison([\sIVXLCDM]*)$/, '剧毒$1'], //尖塔等
    [/^Lightning([\sIVXLCDM]*)$/, '闪电$1'], //尖塔等
    [/^Condenser([\sIVXLCDM]*)$/, '冷凝$1'], //尖塔等
    [/^Knowledge([\sIVXLCDM]*)$/, '知识$1'], //尖塔等
    [/^Cost: (.*) Rs$/, '花费：$1符石'], //尖塔等
    [/^(.*) Rs$/, '$1符石'], //尖塔等
    [/^(.*) Runestones \($/, '$1符石('], //尖塔等
    [/^Deals (.*) damage when stepped on.$/, '当敌人进入时受到$1伤害。'], //尖塔等
    [/^Deals (.*) damage when stepped on, and causes the target to become Chilled, slowing movement to 50% speed for (.*) moves. This speed reduction causes the target to stay on each Trap for twice as long, triggering each Trap twice. Note that Frost Traps are coated with antifreeze, preventing chill effects from working while an enemy is standing on a Frost Trap.$/, '当敌人进入时受到$1伤害，并且被冰冻，使敌人在$2格内移动速度减半。被减半移动速度后的敌人会在持续时间内停留在每格两下，触发每个陷阱两次。注意冰霜陷阱本身涂有防冻剂，所以被冰冻的敌人在冰霜陷阱上不触发冰冻效果。'], //尖塔等
    [/^Adds (.*) Toxicity when stepped on. Target will take damage equal to its total Toxicity each time it attempts to move.$/, '当敌人进入时增加$1毒性。每次移动时敌人受到等同于毒性数量的伤害。'], //尖塔等
    [/^If the enemy has 75% or less health remaining, (.*) Toxicity is added instead.$/, '如果进入陷阱时敌人生命值不高于75%，那么最终增加的毒性数量变为$1。'], //尖塔等
    [/^Deals (.*) damage when stepped on, and afflicts the target with (.*) stack(s*) of Shocked. 1 stack of Shocked is consumed each time an enemy steps on a Trap or Tower, causing that Bad Guy to take (.*)x damage and (.*)x effect from the Trap or Tower that consumed the stack of Shocked. Shocked can boost the damage but not the effect of other Lightning Traps.$/, '当敌人进入时受到$1伤害，并且使敌人获得$2层震荡。每当敌人进入一个陷阱或塔时，消耗1层震荡，然后使此陷阱或塔的伤害增加$4倍，效果增加$5倍。震荡可以增加闪电陷阱的伤害，但无法增加它的效果。'], //尖塔等
    [/^Each Lightning Trap increases the damage and effect of Fire and Poison Traps in its column by (.*)%, stacking additively.$/, '每个闪电陷阱将同一列的火焰陷阱和剧毒陷阱的效果增加$1%，此效果叠加。'], //尖塔等
    [/^Increases the damage of all Fire Traps on the same Floor as a Strength Tower by (.*)%, and when stepped on deals damage equal to the combined damage of all Fire Traps on its Floor \(max of 1 Strength Tower per Floor\). In addition, this Tower increases the attack of your Trimps in Maps and the World by (.*)% \(additive with other Strength Towers\).$/, '将与力量塔同一行的火焰陷阱伤害增加$1%，当敌人进入力量塔时，受到等同于同一行所有火焰陷阱伤害之和的伤害(1行最多1个力量塔)。另外，每个力量塔还可以使脆皮们增加$2%攻击力(效果与其他力量塔叠加)。'], //尖塔等
    [/^When stepped on, increases the target's Toxicity by  (.*)%. In addition, each Condenser Tower increases all Helium found by (.*)% \(additive with other Condenser Towers\).$/, '当敌人进入时，毒性增加$1%。另外，每个冷凝塔还会使氦获取量增加$2%(效果与其他冷凝塔叠加)。'], //尖塔等
    [/^When stepped on, increases the target's Toxicity by  (.*)%. In addition, each Condenser Tower increases all Radon found by (.*)% \(additive with other Condenser Towers\).$/, '当敌人进入时，毒性增加$1%。另外，每个冷凝塔还会使氡获取量增加$2%(效果与其他冷凝塔叠加)。'], //尖塔等
    [/^When stepped on by a Chilled enemy, Chilled becomes Frozen, slowing the target to 33% speed for 5 moves. In addition, each Knowledge Tower increases Fluffy's Experience gain by (.*)% \(additive with other Knowledge Towers\). Note that Knowledge Towers are coated with antifreeze, preventing chill effects from working until the enemy steps off of this Tower.$/, '当被冰冻的敌人进入时，冰冻效果变为冻结效果，使敌人在5格内移动速度减为33%。另外，每个知识塔还可以使绒绒经验值获取量增加$1%(效果与其他知识塔叠加)。请注意，知识塔本身涂有防冻剂，所以被冰冻的敌人直到离开前不触发冰冻效果。'], //尖塔等
    [/^When stepped on by a Chilled enemy, Chilled becomes Frozen, slowing the target to 33% speed for 5 moves. In addition, each Knowledge Tower increases Scruffy's Experience gain by (.*)% \(additive with other Knowledge Towers\). Note that Knowledge Towers are coated with antifreeze, preventing chill effects from working until the enemy steps off of this Tower.$/, '当被冰冻的敌人进入时，冰冻效果变为冻结效果，使敌人在5格内移动速度减为33%。另外，每个知识塔还可以使污污经验值获取量增加$1%(效果与其他知识塔叠加)。请注意，知识塔本身涂有防冻剂，所以被冰冻的敌人直到离开前不触发冰冻效果。'], //尖塔等
    [/^Gain Mi$/, '得岩浆岩'], //游戏设置，前置
    [/^Set to Gain Mi$/, '设为得岩浆岩'], //维度发生器，前置
    [/^(.*) Mi$/, '$1岩浆岩'], //维度发生器等
    [/^(.*) is not a valid number$/, '$1不是有效的数字'], //维度发生器等
    [/^Your Generator currently grants (.*) Max Trimps per tick at (.*) fuel \(the amount of fuel needed to tick\). Purchase this to increase the Generator's efficiency by 10% \(additive$/, '您的维度发生器目前每次消耗$2燃料(每次消耗的燃料数量)，并可以获得$1脆皮上限。升级此项可以维度发生器的工作效率增加10%(叠加'], //维度发生器等
    [/^Your Generator can currently store (.*) fuel. Purchase this to increase the fuel capacity by (.*). The more fuel you have in storage, the more housing you'll create per tick!$/, '您的维度发生器目前可以存储$1燃料，升级后可以多存储$2。存储的燃料越多，每次产生的住房也就越多！'], //维度发生器等
    [/^The Magma at Zone (\d+) contains 0.2 fuel per cell, and each Zone after that can drop 0.01 more. Your generator can currently only harvest a max of (.*) per cell, meaning some fuel after Z(.*) will be unharvestable. Purchase this upgrade to increase the amount you can harvest per cell by$/, '岩浆从区域$1开始，每个格子有0.2燃料，且之后每多一个区域，就多0.01燃料。您的维度发生器目前在每个格子最多可以获得$2燃料，这意味着从区域$3开始，部分燃料会被浪费掉。升级此项后可以将每个格子获取燃料的上限增加 '], //维度发生器等
    [/^Your current Overclocker effectiveness is (.*)%. Next level, your Overclocker effectiveness will be (.*)%.$/, '您的超频效果目前为$1%。下一级的超频效果为$2%。'], //维度发生器等
    [/^Buy: (.*) Magmite$/, '购买花费：$1岩浆岩'], //维度发生器等
    [/^(.*)You earned (.*) fuel, triggering (.*) Overclock(s*)!$/, '$1您获得了$2燃料，触发了$3次超频！'], //维度发生器等
    [/^(.*)You earned (.*) fuel! \((.*) destroyed, not enough capacity$/, '$1您获得了$2燃料！(其中$3由于容量不足，被就地销毁'], //维度发生器等
    [/^(.*)You earned (.*) fuel!$/, '$1您获得了$2燃料！'], //维度发生器等
    [/^(.*)You earned (.*) Magmite!$/, '$1您获得了$2岩浆岩！'], //维度发生器等
    [/^This Empowerment will end on Z(.*), at which point you'll be able to fight a Toxic enemy to earn (.*) Token(s*) of Poison.$/, '此赋能将在区域$1结束，该区域您将与一个毒性敌人战斗，战胜后可获得$2毒符记。'], //自然赋能
    [/^This Empowerment will end on Z(.*), at which point you'll be able to fight a Gusty enemy to earn (.*) Token(s*) of Wind.$/, '此赋能将在区域$1结束，该区域您将与一个阵风敌人战斗，战胜后可获得$2风符记。'], //自然赋能
    [/^This Empowerment will end on Z(.*), at which point you'll be able to fight a Frozen enemy to earn (.*) Token(s*) of Ice.$/, '此赋能将在区域$1结束，该区域您将与一个冻结敌人战斗，战胜后可获得$2冰符记。'], //自然赋能
    [/^This Empowerment will end on Z(.*).$/, '此赋能将在区域$1结束。'], //自然赋能
    [/^. Maximum of (.*) levels.$/, '。最高$1级。'], //自然赋能
    [/^(.*) Tokens of Poison$/, '$1毒符记'], //自然赋能
    [/^(.*) Tokens of Wind$/, '$1风符记'], //自然赋能
    [/^(.*) Tokens of Ice$/, '$1冰符记'], //自然赋能
    [/^(.*)You found (.+) Token(s*) of Poison!$/, '$1您发现了$2毒符记！'], //自然赋能
    [/^(.*)You found (.+) Token(s*) of Wind!$/, '$1您发现了$2风符记！'], //自然赋能
    [/^(.*)You found (.+) Token(s*) of Ice!$/, '$1您发现了$2冰符记！'], //自然赋能
    [/^(.*)You found (.+) Potatoes!$/, '$1您发现了$2土豆！'], //炼金术
    [/^(.*)You found (.+) Mushrooms!$/, '$1您发现了$2蘑菇！'], //炼金术
    [/^(.*)You found (.+) Seaweed!$/, '$1您发现了$2海藻！'], //炼金术
    [/^(.*)You found (.+) Firebloom!$/, '$1您发现了$2火焰花！'], //炼金术
    [/^(.*)You found (.+) Berries!$/, '$1您发现了$2浆果！'], //炼金术
    [/^(.*) Potatoes$/, '$1 土豆'], //炼金术
    [/^(.*) Mushrooms$/, '$1 蘑菇'], //炼金术
    [/^(.*) Seaweed$/, '$1 海藻'], //炼金术
    [/^(.*) Firebloom$/, '$1 火焰花'], //炼金术
    [/^(.*) Berries$/, '$1 浆果'], //炼金术
    [/^(.*) owned, \+(.*)% Herbs found$/, '拥有$1，药草获取量增加$2%'], //炼金术
    [/^(.*) owned, \+(.*)% res, \+(.*)% RT chance$/, '拥有$1，资源获取量增加$2%，小符饰概率增加$3%'], //炼金术
    [/^(.*) owned, (.*)% nullified void stats$/, '拥有$1，虚空地图敌人属性中和$2%'], //炼金术
    [/^(.*) owned, \+(.*)% Stats$/, '拥有$1，属性增加$2%'], //炼金术
    [/^(.*) owned, \+(.*)% housing$/, '拥有$1，住房容纳的脆皮数量增加$2%'], //炼金术
    [/^(.*) owned, \+(.*)% resources$/, '拥有$1，资源获取量增加$2%'], //炼金术
    [/^(.*) owned, \+(.*)% Crit Damage$/, '拥有$1，暴击伤害增加$2%'], //炼金术
    [/^Enemies in this dimension are enchanted, gaining \+(.*)% enemy stats in World, \+(.*)% in Maps, and \+(.*)% in Void Maps. All Radon drops are increased by (.*)%.$/, '此维度中的敌人被强化了，世界上的属性增加了$1%，地图中的属性增加了$2%，虚空地图中的属性增加了$3%。氡获取量增加了$4%。'], //炼金术
    [/^Menacing Mask Lv(.*)$/, '恐吓面具 等级$1'], //尖塔突击
    [/^Sword Lv(.*)$/, '剑 等级$1'], //尖塔突击
    [/^Armor Lv(.*)$/, '护甲 等级$1'], //尖塔突击
    [/^Rusty Dagger Lv(.*)$/, '锈色利刃 等级$1'], //尖塔突击
    [/^Fists of Goo Lv(.*)$/, '粘液拳头 等级$1'], //尖塔突击
    [/^Battery Stick Lv(.*)$/, '电池棍 等级$1'], //尖塔突击
    [/^Pants Lv(.*)$/, '裤子 等级$1'], //尖塔突击
    [/^Chemistry Set Lv(.*)$/, '化学装置 等级$1'], //尖塔突击
    [/^Comfy Boots Lv(.*)$/, '舒适之靴 等级$1'], //尖塔突击
    [/^Lifegiving Gem Lv(.*)$/, '生命宝石 等级$1'], //尖塔突击
    [/^Mood Bracelet Lv(.*)$/, '情绪手镯 等级$1'], //尖塔突击
    [/^Hungering Mold Lv(.*)$/, '饥饿霉菌 等级$1'], //尖塔突击
    [/^Recycler Lv(.*)$/, '回收机 等级$1'], //尖塔突击
    [/^Shining Armor Lv(.*)$/, '闪耀护甲 等级$1'], //尖塔突击
    [/^Shock and Awl Lv(.*)$/, '震慑套装 等级$1'], //尖塔突击
    [/^Tame Snimp Lv(.*)$/, '驯服的脆皮蛇 等级$1'], //尖塔突击
    [/^Lich Wraps Lv(.*)$/, '巫妖披肩 等级$1'], //尖塔突击
    [/^Wired Wristguards Lv(.*)$/, '通电护腕 等级$1'], //尖塔突击
    [/^Sword and Board Lv(.*)$/, '剑刃守护 等级$1'], //尖塔突击
    [/^Bilious Boots Lv(.*)$/, '邪恶之靴 等级$1'], //尖塔突击
    [/^Bloodstained Gloves Lv(.*)$/, '染血手套 等级$1'], //尖塔突击
    [/^Unlucky Coin Lv(.*)$/, '不幸之币 等级$1'], //尖塔突击
    [/^Eelimp in a Bottle Lv(.*)$/, '瓶装脆皮鳗 等级$1'], //尖塔突击
    [/^Cleaver Lv(.*)$/, '切割者 等级$1'], //尖塔突击
    [/^The Globulator Lv(.*)$/, '世界地图 等级$1'], //尖塔突击
    [/^Metal Suit Lv(.*)$/, '金属外衣 等级$1'], //尖塔突击
    [/^Nozzled Goggles Lv(.*)$/, '护目镜 等级$1'], //尖塔突击
    [/^Sundering Scythe Lv(.*)$/, '撕裂之镰 等级$1'], //尖塔突击
    [/^Plague Bringer Lv(.*)$/, '瘟疫使者 等级$1'], //尖塔突击
    [/^Very Large Slime Lv(.*)$/, '巨型史莱姆 等级$1'], //尖塔突击
    [/^Grounded Crown Lv(.*)$/, '理性之冠 等级$1'], //尖塔突击
    [/^Fearsome Piercer Lv(.*)$/, '恐惧之锥 等级$1'], //尖塔突击
    [/^Protector Lv(.*)$/, '庇佑 等级$1'], //尖塔突击
    [/^Bad Medkit Lv(.*)$/, '恶之医疗箱 等级$1'], //尖塔突击
    [/^Pouch Lv(.*)$/, '之袋 等级$1'], //尖塔突击
    [/^Raincoat Lv(.*)$/, '雨衣 等级$1'], //尖塔突击
    [/^Labcoat Lv(.*)$/, '实验服 等级$1'], //尖塔突击
    [/^Aegis Lv(.*)$/, '宙斯盾 等级$1'], //尖塔突击
    [/^Sacrificial Shank Lv(.*)$/, '牺牲之腿 等级$1'], //尖塔突击
    [/^Monkimp Paw Lv(.*)$/, '脆皮猴之爪 等级$1'], //尖塔突击
    [/^Spiked Gloves Lv(.*)$/, '尖刺手套 等级$1'], //尖塔突击
    [/^(.*)% Huffy Attack Time, \+(.*)% Enemy Attack Time.$/, '$1%怒怒攻击时间，+$2%敌人攻击时间。'], //尖塔突击
    [/^(.*) attack damage.$/, '$1攻击力。'], //尖塔突击
    [/^(.*) base health.$/, '$1基础生命值。'], //尖塔突击
    [/^Can create a Bleed on the Enemy for 10 seconds. \+(.*)% Bleed Damage, \+(.*) Attack. \+(.*)% Bleed Chance, doubled if the Enemy is Shocked or Poisoned.$/, '可以对敌人造成流血效果，持续10秒。+$1%流血伤害，+$2攻击力。+$3%流血概率，如果敌人处于震荡或剧毒状态，则增加的数值翻倍。'], //尖塔突击
    [/^Can create a Bleed on the Enemy for 10 seconds. \+(.*)% Bleed Damage. \+(.*)% Bleed Chance, doubled if the Enemy is Shocked or Poisoned.$/, '可以对敌人造成流血效果，持续10秒。+$1%流血伤害。+$2%流血概率，如果敌人处于震荡或剧毒状态，则增加的数值翻倍。'], //尖塔突击
    [/^Can create a Poison on the Enemy for 10 seconds. \+(.*) Poison Damage. \+25% Poison Chance, doubled if the enemy is bleeding or shocked.$/, '可以对敌人造成剧毒效果，持续10秒。+$1剧毒伤害。+25%剧毒概率，如果敌人处于流血或震荡状态，则增加的数值翻倍。'], //尖塔突击
    [/^Can create a Shock on the Enemy for 10 seconds. \+(.*)% Shock Damage. \+35% Shock Chance, doubled if the enemy is bleeding or poisoned.$/, '可以对敌人造成震荡效果，持续10秒。+$1%震荡伤害。+35%震荡概率，如果敌人处于流血或剧毒状态，则增加的数值翻倍。'], //尖塔突击
    [/^(.*) Defense.$/, '$1防御力。'], //尖塔突击
    [/^50% Poison Chance if the Enemy is not already Poisoned. \+(.*) Defense if the Enemy is Poisoned. \+(.*)% Poison Chance. Poisons you inflict can stack (.*) more times?.$/, '50%剧毒概率，前提是敌人未受到剧毒效果影响，否则+$1防御力。+$2%剧毒概率。+$3剧毒层数上限。'], //尖塔突击
    [/^(.*) Defense. \+(.*)% to all Resistances.$/, '$1防御力。+$2%全抗性'], //尖塔突击
    [/^Increases Dust gained from Enemies by (.*)% PLUS your Lifesteal amount when the Enemy dies.$/, '使敌人掉落的魔尘数量增加$1%，增加的数值还会再加上吸血概率的数值。'], //尖塔突击
    [/^(.*)% Attack Time and \+(.*) Defense if the Enemy is not Bleeding.$/, '$1%攻击时间，+$2防御力，前提是敌人未受到流血效果影响。'], //尖塔突击
    [/^Heal for (.*) per stack of Poison whenever one of your Poisons deals damage. Your Poisons tick (.*)% faster.$/, '当剧毒造成伤害时，每有一层剧毒，就恢复$1生命值。+$2%剧毒触发速度'], //尖塔突击
    [/^(.*) \/ (.*) Exp$/, '$1/$2经验值'], //绒绒污污相关
    [/^(.*)% damage$/, '$1%伤害'], //绒绒污污相关
    [/^Cruffys cannot gain Experience after the Nurture Challenge ends, but will stick around for (.+) more Zones.$/, '朽朽在培养挑战结束后无法再获得经验值了，但还会在$1个区域内继续存在。'], //绒绒污污相关
    [/^Fluffy's level and damage bonus are currently reduced. Fluffy will return to level (.*) when points are placed back in Capable.$/, '绒绒的等级和伤害暂时被限制了。提升能力特权等级以后绒绒可以回到$1级。'], //绒绒污污相关
    [/^Scruffy's level and damage bonus are currently reduced. Scruffy will return to level (.*) when points are placed back in Capable.$/, '污污的等级和伤害暂时被限制了。提升能力特权等级以后污污可以回到$1级。'], //绒绒污污相关
    [/^Fluffy needs  more points in Capable to gain Exp above level (.*).$/, '绒绒需要更高的能力特权等级才可以获得超过$1级的经验值。'], //绒绒污污相关
    [/^Fluffy is earning (.*) Exp per Zone. Fluffy needs (.*) more Exp to level.$/, '绒绒每个区域获得$1经验值，还需要$2经验值才能升级。'], //绒绒污污相关
    [/^Fluffy is earning (.*) Exp per Zone. Fluffy needs (.*) more Exp to level, equivalent to repeating your current run to this zone about (.*) more time(s*).$/, '绒绒每个区域获得$1经验值，还需要$2经验值才能升级，等同于再有$3次传送后到达当前区域。'], //绒绒污污相关
    [/^Scruffy is earning (.*) Exp per Zone. Scruffy needs (.*) more Exp to level.$/, '污污每个区域获得$1经验值，还需要$2经验值才能升级。'], //绒绒污污相关
    [/^Scruffy is earning (.*) Exp per Zone. Scruffy needs (.*) more Exp to level, equivalent to repeating your current run to this zone about (.*) more time(s*).$/, '污污每个区域获得$1经验值，还需要$2经验值才能升级，等同于再有$3次传送后到达当前区域。'], //绒绒污污相关
    [/^Cruffys is earning (.*) Exp per Zone. Cruffys needs (.*) more Exp to level.$/, '朽朽每个区域获得$1经验值，还需要$2经验值才能升级。'], //绒绒污污相关
    [/^Fluffy makes a purr-like sound. You've pet Fluffy (.+) times?.$/, '绒绒发出了非常愉悦的咕噜声。您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy makes a purr-like sound. You've pet Scruffy (.+) times?.$/, '污污发出了非常愉悦的咕噜声。您已经拍了它$1次。'], //绒绒污污相关
    [/^Fluffy reminds you to scratch behind the ears. You've pet Fluffy (.+) times?.$/, '绒绒希望您再挠挠耳朵后面。您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy reminds you to scratch behind the ears. You've pet Scruffy (.+) times?.$/, '污污希望您再挠挠耳朵后面。您已经拍了它$1次。'], //绒绒污污相关
    [/^Fluffy appreciates the pat! You've pet Fluffy (.+) times?.$/, '绒绒很喜欢您的手法！您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy appreciates the pat! You've pet Scruffy (.+) times?.$/, '污污很喜欢您的手法！您已经拍了它$1次。'], //绒绒污污相关
    [/^Fluffy thinks you're the best. You've pet Fluffy (.+) times?.$/, '绒绒觉得您最好了。您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy thinks you're the best. You've pet Scruffy (.+) times?.$/, '污污觉得您最好了。您已经拍了它$1次。'], //绒绒污污相关
    [/^Fluffy frickin loves pats! You've pet Fluffy (.+) times?.$/, '绒绒爱死拍头了！您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy frickin loves pats! You've pet Scruffy (.+) times?.$/, '污污爱死拍头了！您已经拍了它$1次。'], //绒绒污污相关
    [/^Fluffy looks quite happy. You've pet Fluffy (.+) times?.$/, '绒绒看起来非常高兴。您已经拍了它$1次。'], //绒绒污污相关
    [/^Scruffy looks quite happy. You've pet Scruffy (.+) times?.$/, '污污看起来非常高兴。您已经拍了它$1次。'], //绒绒污污相关
    [/^Applies when running a Daily Challenge, and matches the extra Helium from your Daily. Currently (.*). Does not apply to Best Fluffy Exp.$/, '运行日常挑战时激活，获得日常挑战相应数值的加成。目前为$1。不影响最高绒绒经验。'], //绒绒污污相关
    [/^Applies when running a Daily Challenge, and matches the extra Radon from your Daily. Currently (.*). Does not apply to Best Scruffy Exp.$/, '运行日常挑战时激活，获得日常挑战相应数值的加成。目前为$1。不影响最高污污经验。'], //绒绒污污相关
    [/^Your Zone number. Currently (.*).$/, '您到达的区域数值。目前为$1。'], //绒绒污污相关
    [/^The amount of levels placed in the Cunning Perk. Currently (.*).$/, '您的灵巧特权等级。目前为$1。'], //绒绒污污相关
    [/^The amount of levels placed in the Curious Perk. Currently (.*).$/, '您的好奇特权等级。目前为$1。'], //绒绒污污相关
    [/^The Zone Fluffy can start earning Experience at. This value is normally 301, and is currently reduced by (.*) thanks to (.*) level(s*) of Classy.$/, '绒绒开始获得经验的区域。此数值正常为301，由于$2级上等特权，减少了$1。'], //绒绒污污相关
    [/^The Zone Fluffy can start earning Experience at. This value is normally 301, and is currently reduced by (.*) thanks to Classy.$/, '绒绒开始获得经验的区域。此数值正常为301，由于上等特权，减少了$1。'], //绒绒污污相关
    [/^The bonus modifier applied from "Pet Exp" on a Plagued or higher tier Staff. Currently (.*).$/, '从天灾或更高阶权杖的修饰符上获得的经验值加成。目前为$1。'], //绒绒污污相关
    [/^The bonus modifier from the Flufffocus Mastery \(\+25% exp per Prestige\). Fluffy has evolved (.*) time(s*), bringing this modifier to (.*).$/, '绒绒专注专精的加成(每次进化多获得25%的经验值)。绒绒进化了$1次，此加成变为$3。'], //绒绒污污相关
    [/^The bonus modifier from the Flufffocus Mastery \(\+25% exp per Prestige\). Scruffy has evolved (.*) time(s*), bringing this modifier to (.*).$/, '污污专注专精的加成(每次进化多获得25%的经验值)。污污进化了$1次，此加成变为$3。'], //绒绒污污相关
    [/^The bonus from your Knowledge Towers. You have (.*) Knowledge Tower(s*), granting a bonus of (.*)% each, bringing this modifier to (.*).$/, '知识塔的加成。您有$1个知识塔，每个可提供$3%的加成，总加成为$4。'], //绒绒污污相关
    [/^From Enlightened Ice. Equal to \(1 \+ \(0.0025 \* Ice Levels\)\), currently (.*). Does not apply to Best Fluffy Exp.$/, '冰之启迪的加成。加成为(1+0.0025*冰赋能等级)，目前为$1。不影响最高绒绒经验。'], //绒绒污污相关
    [/^From Nurture. Increases Exp gain by 10% \(compounding\) per constructed Laboratory. Currently granting (.*)x.$/, '培养的加成。每个实验室增加10%(效果叠乘)的经验值获取量。目前可获取$1倍。'], //绒绒污污相关
    [/^From the Battlescruff AutoBattle reward. Increases Scruffy XP gained by 2% per level cleared, currently granting (.*)x.$/, '污污战斗的自动战斗加成。每级使经验值获取量增加2%。目前加成为$1。'], //绒绒污污相关
    [/^damage to (.*)x and$/, '伤害变为$1倍，且'], //绒绒污污相关
    [/^damage to (.*)x.$/, '伤害变为$1倍。'], //绒绒污污相关
    [/^Allows an additional 4 Void Maps with the same name to stick together, bringing the max stack size to (.*). Each map in the stack that Fluffy clears grants an additional 50% Helium to all other maps in the stack, giving a bonus of up to \+(.*)% to each of the (.*) Fluffy maps from a (.*) stack.$/, '使虚空地图的融合张数上限增加4，达到$1张。每融合一张地图，所有绒绒完成的该名字的地图奖励都增加50%。如果融合地图张数达到最高的$4张，那么绒绒完成的$3张虚空地图每张可以额外获得$2%氦。'], //绒绒污污相关
    [/^Increases Radon gain from all sources by 3% for each Zone you reached on your last Portal in this Universe \(compounding\). You reached Z(.*) last Portal, worth \+(.*)% Radon.$/, '此宇宙上次传送前每通过一个区域，传送后获得的氡就增加3%(效果叠乘)。您上次传送前到达了区域$1，氡获取量加成为$2%。'], //绒绒污污相关
    [/^Currently multiplying Radon earned by (.+), increasing attack, health and resources by (.+)% and Cruffys will stay for (.+) additional Zones.$/, '目前使氡获取量乘以$1，使脆皮的攻击力，生命值和资源获取量增加$2%，朽朽可以额外存在$3个区域。'], //绒绒污污相关
    [/^(.*)Your Worshippers successfully inspire Scruffy, granting (.*) Exp!$/, '$1您的崇信者成功启迪了污污，使它获得了$2经验值！'], //绒绒污污相关
    [/^(.*) Trimp(s*) just ceased to be.$/, '$1个脆皮去世了。'], //死亡消息
    [/^(.*) Trimp(s*) just bit the dust.$/, '$1个脆皮战死沙场了。'], //死亡消息
    [/^(.*) Trimp(s*) just took a dirt nap.$/, '$1个脆皮入土为安了。'], //死亡消息
    [/^(.*) Trimp(s*) just expired.$/, '$1个脆皮逝世了。'], //死亡消息
    [/^(.*) Trimp(s*) just kicked the bucket.$/, '$1个脆皮翘辫子了。'], //死亡消息
    [/^(.*) Trimp(s*) just evaporated.$/, '$1个脆皮消失了。'], //死亡消息
    [/^(.*) Trimp(s*) just needed more armor.$/, '$1个脆皮护甲不足，没了。'], //死亡消息
    [/^(.*) Trimp(s*) just exploded.$/, '$1个脆皮炸了。'], //死亡消息
    [/^(.*) Trimp(s*) just melted.$/, '$1个脆皮熔化了。'], //死亡消息
    [/^(.*) Trimp(s*) just fell over.$/, '$1个脆皮摔死了。'], //死亡消息
    [/^(.*) Trimp(s*) just swam the river Styx.$/, '$1个脆皮渡过了冥河。'], //死亡消息
    [/^(.*) Trimp(s*) just turned into jerky.$/, '$1个脆皮变成了脆皮干。'], //死亡消息
    [/^(.*) Trimp(s*) just forgot to put armor on.$/, '$1个脆皮忘记穿护甲，凉了。'], //死亡消息
    [/^(.*) Trimp(s*) just croaked.$/, '$1个脆皮咽下了最后一口气。'], //死亡消息
    [/^(.*) Trimp(s*) just flatlined.$/, '$1个脆皮心电图成了直线。'], //死亡消息
    [/^(.*) Trimp(s*) just won't follow you to battle again.$/, '$1个脆皮无法继续与您并肩作战了。'], //死亡消息
    [/^(.*) Trimp(s*) just died. Lame.$/, '$1个脆皮挂了。弱爆了。'], //死亡消息
    [/^(.*) Trimp(s*) just lagged out.$/, '$1个脆皮卡死了。'], //死亡消息
    [/^(.*) Trimp(s*) just imp-loded.$/, '$1个脆皮皮爆了。'], //死亡消息
    [/^(.*)You slew a(n*) $/, '$1您击杀了一个'], //击杀消息
    [/^(.*)You killed a(n*) $/, '$1您杀死了一个'], //击杀消息
    [/^(.*)You destroyed a(n*) $/, '$1您毁灭了一个'], //击杀消息
    [/^(.*)You extinguished a(n*) $/, '$1您消灭了一个'], //击杀消息
    [/^(.*)You liquidated a(n*) $/, '$1您清算了一个'], //击杀消息
    [/^(.*)You vaporized a(n*) $/, '$1您蒸发了一个'], //击杀消息
    [/^(.*)You demolished a(n*) $/, '$1您摧毁了一个'], //击杀消息
    [/^(.*)You ruined a(n*) $/, '$1您破坏了一个'], //击杀消息
    [/^(.*)You wrecked a(n*) $/, '$1您击毁了一个'], //击杀消息
    [/^(.*)You obliterated a(n*) $/, '$1您抹消了一个'], //击杀消息
    [/^(.*)Z:2 Your Trimps killed a lot of Bad Guys back there. It seems like you're getting the hang of this. However, the world is large, and there are many more Zones to explore. Chop chop.$/, '$1区域：2 您的脆皮已经干掉了不少敌人。看起来您也逐渐熟悉这个世界了。不过，这个世界还很大，还有很多区域等着您来探索。所以，加快速度吧。'], //故事消息
    [/^(.*)Z:3 By your orders, your scientists have begun to try and figure out how large this planet is.$/, '$1区域：3 依照您的指示，科学家们已经开始测量这个行星的大小了。'], //故事消息
    [/^(.*)Z:3 This planet seems so cold and lonely without Science.$/, '$1区域：3 这个没有科学家的行星看起来既冰冷又孤寂。'], //故事消息
    [/^(.*)Z:4 You order your Trimps to search the area for the keys to your ship, but nobody finds anything. Bummer.$/, '$1区域：4 您指示脆皮们搜索这个区域，寻找您飞船的钥匙，但一无所获。啧。'], //故事消息
    [/^(.*)Z:5 Do you see that thing at the end of this Zone\? It's huge! It's terrifying! You've never seen anything like it before, but you know that it is a Blimp. How did you know that\? Stop knowing things and go kill it.$/, '$1区域：5 看到这个区域最后的那个东西了吗？它很大！它很可怕！您之前从未见过类似的东西，但您就是知道，它叫脆皮飞艇。等等，您是怎么知道的？别问太多，干掉它就是了。'], //故事消息
    [/^(.*)Z:6 You step over the corpse of the Blimp as it rapidly deflates, and one of your Trimps chuckles at the sound produced. You all cross the sulfuric river to the next Zone, and can feel the presence of an ancient knowledge. Better explore.$/, '$1区域：6 飞艇迅速瘪了下去，您踏过了飞艇的尸体，发出的声音让一个脆皮偷笑了出来。您带着脆皮们穿过了硫酸河，到达了下个区域，并感受到了古老知识的存在。最好去探索一下。'], //故事消息
    [/^(.*)Z:7 Slow and steady wins the race. Unless you're racing someone who is actually trying.$/, '$1区域：7 稳扎稳打，无往不胜。但您也得打才行啊。'], //故事消息
    [/^(.*)Z:8 Your settlement is getting crowded, there's Trimps in the streets, and you're taking heat. You feel a sudden strong desire to create a map, though you're not quite sure how that would help.$/, '$1区域：8 您住的地方越来越拥挤了，街上到处是脆皮，置身其中连您都感到热了。虽然不知道制造地图会有什么用，但您突然强烈渴望去这么做了。'], //故事消息
    [/^(.*)Z:9 You can't shake the feeling that you've been here before. Déjà-vu\?$/, '$1区域：9 您有一种强烈的感觉，您曾经来过这里。既视感……吗？'], //故事消息
    [/^(.*)Z:10 Looks like another Blimp up ahead. Hard to tell from far away, but it looks like it has more heads than the last one.$/, '$1区域：10 看起来前方又有一个脆皮飞艇了。虽然离着太远看不真切，但还是能看得出来它的头比上一个更多一些。'], //故事消息
    [/^(.*)Z:11 You're unstoppable as long as nothing stops you. Unfortunately, it seems like something really wants to stop you.$/, '$1区域：11 只要没人来阻止您，您就可以高喊“谁能挡我”了。不过，运气不好的是，似乎真有什么东西想要挡您了。希望您的下一句不会是“不可能”。'], //故事消息
    [/^(.*)Z:12 Did you see that green light flash by\? Weird. Oh well.$/, '$1区域：12 您看到那一闪而过的绿光了吗？真奇怪。好吧，就这样。'], //故事消息
    [/^(.*)Z:13 Your scientists have finally concluded their report on the analysis of the size of the world. According to the report, they're pretty sure it's infinitely large, but you're pretty sure they just got bored of checking.$/, '$1区域：13 科学家们完成了世界大小的分析并提交了报告。根据报告所述，这是一个无穷大的世界，但您能肯定的是，它们只是懒得再去验证了而已。'], //故事消息
    [/^(.*)Z:14 You were trying to help bring back some of the Equipment your Trimps left on the ground in that last Zone, and you got a splinter. This planet is getting dangerous, stay alert.$/, '$1区域：14 您想取回脆皮们遗留在上个区域的装备，最后却只发现了残片而已。这个行星越来越危险了，保持警惕为上。'], //故事消息
    [/^(.*)Z:15 Another day, another Blimp at the end of the Zone.$/, '$1区域：15 又是新的一天，又是新的脆皮飞艇。'], //故事消息
    [/^(.*)Z:16 Seriously\? Another Blimp so soon\?$/, '$1区域：16 真的吗？这么快又是一个脆皮飞艇？'], //故事消息
    [/^(.*)Z:17 You climb a large cliff and look out over the new Zone. Red dirt, scorched ground, and devastation. Is that a Dragimp flying around out there\?!$/, '$1区域：17 您爬上了一个巨大的悬崖顶部，眺望着新的区域。红泥，焦土，满目疮痍。等等，那飞来飞去的是……一只脆皮龙吗？！'], //故事消息
    [/^(.*)Z:18 There seems to be a strange force urging you to keep going. The atmosphere is becoming... angrier. Part of you wants to turn around and go back, but most of you wants to keep going.$/, '$1区域：18 似乎有一股神秘的力量在促使您继续前进。空气似乎变得……更愤怒了。您的脑海里似乎有一个声音在喊着您回头，但另一个更响亮更坚定的声音想要继续前行。'], //故事消息
    [/^(.*)Z:19 You look behind and see your kingdom. You have gems, a colony, and territory. You wonder if enough Trimps have already fallen in battle. After contemplation, one word falls out of your mouth as you begin to move forward. 'Nah'$/, '$1区域：19 您回头看了看您的王国。您有了宝石，有了居住地，还有了大块领土。获得这些的过程中，大量的脆皮失去了它们的生命。您沉思着，是不是已经死得够多了，随后，您继续前进，只留下了三个字。“还不够”'], //故事消息
    [/^(.*)Z:20 You can sense that you're close to your goal.$/, '$1区域：20 您感觉到接近目标了。'], //故事消息
    [/^(.*)Z:22 You hear a strange humming noise that seems to draw you towards it, though it also seems to come from no direction in particular. You can feel that it's being created by the Amalgamator, though you've never heard such a sound before. It's both unsettling and enchanting, and the Universe seems to hate it.$/, '$1区域：22 尽管找不到声音的源头，您还是被一阵奇怪的嗡嗡声吸引了过去。虽然没有听过类似的声音，但您可以感觉到这是合并者发出的。这声音既令人不安，又引人入胜，似乎连这个宇宙都痛恨它。'], //故事消息
    [/^(.*)Z:22 You hear a strange humming noise that seems to draw you towards it, though it also seems to come from no direction in particular. You can feel that it's being created by an Amalgamator, though you've never heard such a sound before. It's both unsettling and enchanting, and the Universe seems to hate it.$/, '$1区域：22 尽管找不到声音的源头，您还是被一阵奇怪的嗡嗡声吸引了过去。虽然没有听过类似的声音，但您可以感觉到这是一个合并者发出的。这声音既令人不安，又引人入胜，似乎连这个宇宙都痛恨它。'], //故事消息
    [/^(.*)Z:22 Strange, the sky seems to be getting darker. You ask one of your Trimps for the time, but he doesn't know what a clock is.$/, '$1区域：22 天空看起来更暗了，真奇怪啊。您想问一个脆皮现在几点了，但它连什么是时间都不知道。'], //故事消息
    [/^(.*)Z:25 You're a rebel. The universe pointed you into that portal, but you kept pushing forward. You feel... less like you've been here before.$/, '$1区域：25 您这是要反了啊。这个宇宙指引着您进入传送门，而您却还在前进。不过，您感觉到……您好像没怎么来过这里。'], //故事消息
    [/^(.*)Z:27 It seems like the further you press on, the less you know. You still feel an urge to use the portal, though the urge has begun to dwindle.$/, '$1区域：27 似乎前进得越远，您所知的就越少。您虽然还想使用传送门，但这个欲望已经开始消退了。'], //故事消息
    [/^(.*)Z:29 Your Trimps came up with a pretty catchy battle song that got stuck in your head. None of them survived the next fight though, and you can't remember most of it. Life's tough.$/, '$1区域：29 您的脆皮们想出了一首琅琅上口的战歌，您感觉都要被洗脑了。遗憾的是它们在之后的战斗中全部阵亡了，而您再也想不起来歌的唱法了。人生如此的艰难。'], //故事消息
    [/^(.*)Z:33 You climb over a large hill that was separating this Zone from the last. The sky is pitch black and lightning crackles in the distance. This is a site of heavy corruption.$/, '$1区域：33 您爬上了区域分界线上的一座高山。天空漆黑如墨，时不时有闪电划破天际。这地方真是够糟糕的。'], //故事消息
    [/^(.*)Z:35 You start to wonder how long you've been doing the same thing over and over. There must be something you can do to start to break the cycle. Perhaps you could alter the portal...$/, '$1区域：35 您开始怀疑您已经重复多少次轮回了。一定有什么东西能够打破这个轮回。或许您可以改变一下传送门……'], //故事消息
    [/^(.*)Z:40 You can't help but notice that the Trimps seem to be the only creatures on this planet not immediately hostile towards outsiders. You ask a nearby Trimp soldier what he thinks you are, and he drools a bit.$/, '$1区域：40 您注意到了，这个行星上似乎只有脆皮对外来者会友好一些。您随手抓过旁边一个脆皮，并询问它是怎么看您的，然后它流了点口水。'], //故事消息
    [/^(.*)Z:42 The world seems so barren out this far. You feel like you're finally starting to get ahead of the curve, but you know by now not to get comfortable.$/, '$1区域：42 这世界真的相当贫瘠。您感觉您终于开始超脱轮回了，但您也知道现在还不是完全放松的时候。'], //故事消息
    [/^(.*)Z:44 Each day and night seems to grow longer than the one before. Is time slowing down\? Argh! You fall to your knees with a splitting headache and a strong desire to use the portal. After a few minutes, it passes and you forget what happened. What are we talking about\?$/, '$1区域：44 每天似乎都在变得更长一些。是时间减慢了吗？啊！您突然感到头痛欲裂，倒了下去，并有一种使用传送门的强烈渴望。过了一会儿，疼痛平息了，您也忘记了发生了什么。不过，我们前面到底在聊什么来着？'], //故事消息
    [/^(.*)Z:46 All traces of hills and mountains have long since been trudged past. The world is flat and hostile. You wish your Trimps were better conversationalists.$/, '$1区域：46 通过崇山峻岭的足迹已经拉得很长了。这个世界的恶意可谓是毫不掩饰。您觉得脆皮们如果能健谈一些就好了。'], //故事消息
    [/^(.*)Z:48 As your Trimps scavenge every last bit of helium from that Blimp, one of them begins freaking out. He runs around waving his little arms and making funny noises for a while, eats some dirt, then takes a little nap. You wonder if that's normal. Yeah... probably fine.$/, '$1区域：48 您的脆皮们回收完脆皮飞艇的氦以后，其中一个脆皮突然开始举止异常。它开始边摇手臂边到处乱跑，并发出了一些有趣的声音，然后吃了点土，睡着了。您思考着这到底算不算异常。嗯……大概不算吧。'], //故事消息
    [/^(.*)Z:50 It's been a long time since you've found any blueprints in the maps. You start to wonder where those things even come from.$/, '$1区域：50 您很久没有在地图中找到蓝图了。这些到底是哪里来的呢……'], //故事消息
    [/^(.*)Z:51 Your scientists have detected an anomaly at the end of Zone 59. They recommend that you stop doing whatever it is that you're doing.$/, '$1区域：51 科学家们在区域59的末尾检测到了异常现象。它们建议您立刻停止。'], //故事消息
    [/^(.*)Z:53 As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend into one. Trippy.$/, '$1区域：53 随着您接近异常现象，您注意到脆皮的举止越来越古怪。您的记忆中缺失的部分越来越明显了，就好像好多世的记忆叠加到了一起一样。真是的。'], //故事消息
    [/^(.*)Z:54 As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend into one. Trippy.$/, '$1区域：54 随着您接近异常现象，您注意到脆皮的举止越来越古怪。您的记忆中缺失的部分越来越明显了，就好像好多世的记忆叠加到了一起一样。真是的。'], //故事消息
    [/^(.*)Z:56 A loud boom echoes in the distance, and one of your Trimps runs up to you with outstretched arms, looking quite frightened. He probably just wants some armor and weapons! You hand him some gear, and he accepts it with excitement.$/, '$1区域：56 远方传来了一声巨响，一个脆皮张开双臂向您跑来，它看起来很慌。或许它只是想要一些装备而已！您如是想，并给了它一些装备。它兴奋地收下了。'], //故事消息
    [/^(.*)Z:58 A huge storm has formed and daylight has become a luxury you have mostly forgotten about. Your Trimps seem to want to go back home, but you're pretty sure you're supposed to keep going this way, so you do. You're very close to the anomaly.$/, '$1区域：58 阴雨连天，风暴来袭，阳光已经成了几乎忘却的奢侈品。脆皮们似乎一心只想着回家了，但您很肯定应该继续前进，所以您指挥着它们继续前进了。您越来越接近异常现象了。'], //故事消息
    [/^(.*)Z:59 There it is. The anomaly is at the end of the Zone. You can see it but you don't know what you're seeing. Where did that... thing... come from\?! This is highly Improbable.$/, '$1区域：59 那就是那个异常现象了，就在区域最后。您可以看到它，但您完全无法理解您看到了什么。那个玩意……到底是从哪来的？！这也太子虚乌有了。'], //故事消息
    [/^(.*)Z:60 The ground instantly cracks and large plumes of green gas escape from the planet's core to the atmosphere. The planet feels different. Everything feels different. This Universe has grown unstable, the planet has broken. What have you done\?$/, '$1区域：60 大地碎裂，大量绿色气体从行星的核心逸出到了空气中。这个行星不一样了。不，一切都不一样了。宇宙开始变得不稳定，行星破碎了。您都做了些什么？'], //故事消息
    [/^(.*)Z:61 Other than all the dead Trimps, that wasn't so bad.$/, '$1区域：61 从现在来看，除了挂掉那么多脆皮以外，好像也没什么问题。'], //故事消息
    [/^(.*)Z:65 The Universe seems even more upset than you expected here, but your Amalgamator doesn't really seem to care. You walk towards it to get a better look, but find yourself further away than you were.$/, '$1区域：65 看起来，您到这以后，这个宇宙比您想象中还要更失望，但合并者看起来并不在意。您向它走去，想看清楚一些，却发现离它越来越远了。'], //故事消息
    [/^(.*)Z:65 The Universe seems even more upset than you expected here, but your Amalgamators don't really seem to care. You walk towards one to get a better look, but find yourself further away than you were.$/, '$1区域：65 看起来，您到这以后，这个宇宙比您想象中还要更失望，但合并者们看起来并不在意。您向其中一个合并者走去，想看清楚一些，却发现离它越来越远了。'], //故事消息
    [/^(.*)Z:65 You feel more powerful than ever. The universe seems to be constantly adjusting itself to get rid of you, yet you rise against and persist. Something as tiny as you taking on an entire universe!$/, '$1区域：65 您感觉比之前都强大。这个宇宙一直在调整着，想要把您干掉，但您同时也变得更强，抵抗住了变化。这简直是以一人之力独撼宇宙了！'], //故事消息
    [/^(.*)Z:68 You figure some entertainment wouldn't be awful, and decide to teach your Trimps how to play soccer. A few hours and zero progress later, you really regret that decision.$/, '$1区域：68 您觉得找点乐子也不错，所以决定教脆皮们踢足球。一段时间过去，毫无进展，您后悔了。'], //故事消息
    [/^(.*)Z:70 The Improbabilities haven't seemed to slow down. You know you need to figure out a plan, but you don't know what to plan for.$/, '$1区域：70 乌有者们还是接二连三地出现。您觉得应该对此想个计划，却不知道计划的内容该是什么。'], //故事消息
    [/^(.*)Z:72 You slash through another Improbability with relative ease, but something isn't right. A sour smell hits your nose and in disgust, you whip around in search of the source. Oh, wait, it's just the Trimps.$/, '$1区域：72 您相当轻松地干掉了另一个乌有者，但是，好像有什么不对劲。一股酸臭味袭来，相当难闻，您四处张望寻找了一下来源。哦，是脆皮们身上的气味，那没事了。'], //故事消息
    [/^(.*)Z:80 When's the last time you made a map\? You have a feeling you should probably do that.$/, '$1区域：80 您上次制造地图是什么时候来着？不管怎么样，您感觉自己应该再次那么做才是了。'], //故事消息
    [/^(.*)Z:82 Whew, that was an exhilarating kill. You decide to reward your Trimps with some Improbability stew. It's pretty tasty.$/, '$1区域：82 呼，真是一次带劲的杀戮。您决定奖励脆皮们一些乌有者的炖肉。那味道很棒。'], //故事消息
    [/^(.*)Z:83 That stew was probably a bad idea. Anyone else feeling sick\?$/, '$1区域：83 炖肉似乎不是个好主意，还有其他人感到不适的吗？'], //故事消息
    [/^(.*)Z:85 An ancient and fuzzy memory just crept back into your head. You're not quite sure where it came from, but you know the memory is yours. You remember being on a ship, and seeing this planet from orbit. There was someone with you!$/, '$1区域：85 一段久远而模糊的记忆出现在您的脑海之中。虽然您不知道这是哪来的，但您可以肯定，这是您的记忆。您记得那是在一艘飞船上，从轨道上观察着一颗行星。还有……等等，您身边还有一个人！'], //故事消息
    [/^(.*)Z:87 Bits and pieces of memories continue trickling back in as you continue to put distance between yourself and the source of Anger. You can almost see in your mind who you came here with. Where could they be...$/, '$1区域：87 点点滴滴的回忆随着您的前进而逐渐浮现出来。您快能看到跟您一起来的人了，他们都哪去了呢……'], //故事消息
    [/^(.*)Z:90 You decide to ask your scientists to come up with an extravagant machine that can scan your brain for old memories to see if there's anything helpful up there. They seem excited about a new project and quickly get to work.$/, '$1区域：90 您决定让科学家们不计成本地制造一个能够扫描您脑中记忆的机器，看看能不能找到什么有用的记忆。科学家们对于新计划非常兴奋，立刻开始工作了。'], //故事消息
    [/^(.*)Z:92 You hear a huge explosion from the science lab and realize that the brain scan machine will probably never be finished.$/, '$1区域：92 您听到实验室传来巨大的爆炸声，扫描脑子的机器恐怕是没戏了。'], //故事消息
    [/^(.*)Z:95 The Amalgamator is starting to rapidly switch between different colors. It would be slightly entertaining if the fabric of existence wasn't falling apart around it.$/, '$1区域：95 那个合并者开始在不同的颜色之间迅速变换。如果不是宇宙的结构在它的身边不停崩坏的话，其实还挺有意思的。'], //故事消息
    [/^(.*)Z:95 The Amalgamators are starting to rapidly switch between different colors. It would be slightly entertaining if the fabric of existence wasn't falling apart around them.$/, '$1区域：95 合并者们开始在不同的颜色之间迅速变换。如果不是宇宙的结构在它们的身边不停崩坏的话，其实还挺有意思的。'], //故事消息
    [/^(.*)Z:95 Need some motivation\? You can do it! Maybe.$/, '$1区域：95 需要应援吗？不要输了，加勒个油。'], //故事消息
    [/^(.*)Z:100 You stop dead in your tracks. You remember who you came here with, and you remember that you are not happy with Captain Druopitee for bringing you here. You know he landed with you. You know the ship is still here. He's here.$/, '$1区域：100 您停下了前进的步伐。您想起来了，想起来是跟谁一起来的了，舰长德罗披提，对，就是他，您那时很不满他把您带到这里。您还记得他跟您一起下了飞船。他的飞船一定还在这里，他也一定还在这里。'], //故事消息
    [/^(.*)Z:105 You call a meeting with all of your Trimps to explain the situation. After giving an extremely long, epic, and motivational speech but hearing no reaction from the crowd, you remember that your Trimps cannot understand you. Will you ever learn\?$/, '$1区域：105 您把所有的脆皮召集起来开了个会解释目前的情况。在一通振奋人心的史诗级长篇大论后，脆皮们却毫无反应，简直是对皮弹琴。然后您才想起来，脆皮们根本听不懂您的话。您是故意的吧？是吧？是吧？'], //故事消息
    [/^(.*)Z:106 How long have you been trapped on this planet\? Months\? Decades\? Travelling through time sure screws up your chronological perception.$/, '$1区域：106 您被困在这行星多久了？几个月了？还是几个世纪了？穿越时空真的让您对时间没啥概念了。'], //故事消息
    [/^(.*)Z:109 Though you have no idea which direction your home planet is, you still believe the ship's GPS could get you home. Maybe Druopitee has the keys. You really want to find him.$/, '$1区域：109 尽管您不知道家乡在何方，但您很肯定飞船上的导航系统一定能带您回家的。飞船的钥匙大概是在德罗披提那儿。您一定会找到他的。'], //故事消息
    [/^(.*)Z:115 You just remembered what a taco was. You could really use a taco right now.$/, '$1区域：115 您刚想起来塔可饼是什么东西。您真的想来一口。'], //故事消息
    [/^(.*)Z:120 Your stamina is quickly dwindling. Trying to keep up with so many more extra Trimps each Zone is beginning to wear you down. You'll need to practice fighting with stronger, smaller groups to succeed.$/, '$1区域：120 您的耐力正在下降。每个区域都要让脆皮数量增长跟上节奏让您疲惫不堪。您需要更短小精悍的战力才有机会成功。'], //故事消息
    [/^(.*)Z:123 Woah, you have a lot of Trimps right now. You hadn't really stopped to think about just how many individual Trimps you have directly under your control in a while. Neat!$/, '$1区域：123 哇，您的脆皮都已经这么多了。您甚至没有停下来思考过有多少脆皮是您直接指挥的。这可太棒了！'], //故事消息
    [/^(.*)Z:125 You smell metal and gears, and suddenly feel like you should run a map.$/, '$1区域：125 您闻到了金属和装备的味道，突然想要运行地图了。'], //故事消息
    [/^(.*)Z:130 You decide to sit down and take a breather, when suddenly a Trimp comes waddle-galloping towards you holding a piece of paper. Hurriedly scrawled on the paper is a drawing of a strange weapon and piece of armor, along with numbers that seem to be dimensional coordinates. You would ask where he found it, but you know better by now.$/, '$1区域：130 您决定坐下歇息一番，突然有一个脆皮拿着一张纸向您蹒跚走来。纸上匆忙涂鸦着一套奇怪的武器和护甲，还有一些数字，似乎是相应的维度坐标。您本来想问问它是在哪找到的，但现在看来也没必要了。'], //故事消息
    [/^(.*)Z:132 You can't stop thinking about where that Trimp found the coordinates for the Slow dimension. Why can't whatever is helping you just come out and help you\?$/, '$1区域：132 您一直在想脆皮到底是在哪找到迟缓维度的坐标的。那个不知名的好心人就不能直接点吗？'], //故事消息
    [/^(.*)Z:135 Ugh, your back is getting sore. It seems like travelling back in time does not reverse the ageing process for the traveller. Bummer.$/, '$1区域：135 噢，您的背开始酸痛了。看起来虽然在穿梭时空，但您还是在变老。见鬼。'], //故事消息
    [/^(.*)Z:136 One of your scientists has informed you that his team was able to successfully create a cure for a non-existent disease. He explains that it's best to be prepared. You sigh heavily.$/, '$1区域：136 您的一个科学家提醒您，他的团队已经可以治愈一种还不存在的疾病了。他解释说，至少有备无患。您重重地叹了口气。'], //故事消息
    [/^(.*)Z:137 One of your scientists has informed you that an outbreak of a new disease was detected in the laboratory. You go to check on your scientists, and it's quite obvious that they're faking it for attention. You sigh heavily.$/, '$1区域：137 您的一个科学家提醒您，实验室里爆发了疫病。您过去查看的时候，发现它们只是想获得存在感而已。您重重地叹了口气。'], //故事消息
    [/^(.*)Z:138 You spot another scientist running full speed towards you. He hurriedly informs you that they discovered a new dimension near Zone 35 that is occupied by gigantic Trimps. You sigh heavily.$/, '$1区域：138 您看到又一个科学家以全速冲刺过来。它急急忙忙地说，区域35附近的一个新维度被巨型脆皮占据了。您重重地叹了口气。'], //故事消息
    [/^(.*)Z:139 Another scientist is coming. You sigh heavily. He says something dumb. You decide to ignore the scientists for a little bit.$/, '$1区域：139 您又看到了一个科学家。您重重地叹了口气。它说了些蠢话，然后您决定暂时不理这些科学家了。'], //故事消息
    [/^(.*)Z:140 It sure is calm and peaceful now. You watch a Falcimp turn a few circles in the sky. You wouldn't mind having wings, but overall you're pretty happy with your species.$/, '$1区域：140 世界终于清静了。您看着一只脆皮鹰在高空中盘旋。如果能获得翅膀大概也不错，但您对自己生而为人这件事并不感到抱歉。'], //故事消息
    [/^(.*)Z:143 There's a scientist jumping around trying to get your attention. There's nothing interesting in the sky so you pretend to be fascinated with a rock. The scientist can see you're busy and waits patiently.$/, '$1区域：143 又一个科学家在到处蹦蹦跳跳想引起您的注意。天上没什么值得注意的东西，所以您假装被一块石头吸引住了。那个科学家注意到您还在忙，于是在一旁耐心等候了。'], //故事消息
    [/^(.*)Z:145 Your Scientists are not making it easy to ignore them. You not-so-calmly ask what they want. One of them explains that they discovered a new dimension with lots of extra helium. You'll probably check it out, but you won't tell them that.$/, '$1区域：145 看起来科学家们没那么容易糊弄过去。您有点不耐烦地问它们有什么事。其中一个科学家表示，它们找到了一个富含氦的维度。您之后可能会去看看的，但您绝对不会告诉这些科学家。'], //故事消息
    [/^(.*)Z:150 Wow. These structures are getting expensive. There's probably a dimension for that...$/, '$1区域：150 哇哦。这些建筑真是越来越贵了。或许有个维度能解决这个问题……'], //故事消息
    [/^(.*)Z:153 You remember a person from your past. From your old life. There's someone you need to get back to. You'll make it back.$/, '$1区域：153 您想起了过去认识的一个人。是的，那个时候认识的。您需要联系到他。您会联系到他的。'], //故事消息
    [/^(.*)Z:156 You watch in amazement as a Trimp grabs on to one of those weird tree things and swings around by its arms. These things are getting pretty strong.$/, '$1区域：156 您惊讶地看着一个脆皮抓着怪树玩大回环。这些家伙们真的越来越强大了。'], //故事消息
    [/^(.*)Z:157 You watch in less amazement as a Trimp tries to take a bite out of a very large rock. These things are not getting much smarter.$/, '$1区域：157 您不那么惊讶地看着一个脆皮尝试把一块大石头咬下来一口。这些家伙们一点也没变聪明。'], //故事消息
    [/^(.*)Z:159 That's quite a sunset. You know once you finally make it out of here, you'll definitely never forget the sights. Unless, of course, you do.$/, '$1区域：159 多美的日落。您知道，如果最后离开了这里，您一定不会忘记这边的景色的。当然，前提是得先离开这里。'], //故事消息
    [/^(.*)Z:160 A small horde of Trimps comes running up towards you, making excited sounding noises. One of them walks to the front of the loud congregation and proudly holds up a boot, slightly larger but the same style as your own. It must be Druopitee's, confirmation that you're heading the right direction. You reward the Trimp who found it with some food and a few pats on the head, then send the boot to the lab to look for any further clues. You wonder why he took his boot off.$/, '$1区域：160 一小队脆皮发出激动的声音向您跑来。其中一个脆皮走到了这群脆皮的前面，骄傲地举起了一只靴子。这只靴子比您的略大一些，但很明显是同款设计。这一定是德罗披提的靴子，您走的方向应该是对的。您奖励了那个脆皮一些食物，并拍了拍它的头以示鼓励，然后将那只靴子送往实验室，看看能不能获得更多线索。您也有点疑惑，这家伙把靴子脱了是要干什么。'], //故事消息
    [/^(.*)Z:163 Your scientists have informed you that half of the boot is now lost in another dimension, thanks to an 'important' test. The results were inconclusive. You ask them to please leave the remaining half in our current dimension, and they look disappointed.$/, '$1区域：163 科学家们提醒您，由于某个“重要”的实验，那只靴子有一半遗失在另一个维度了，而结果尚无定论。您要求它们把剩下的一半留在当前维度中，它们看起来对这个决定很失望。'], //故事消息
    [/^(.*)Z:165 What's this now\?! You found a little green piece of metal. Your scientists tell you that it came from a toxic dimension, but that it is also from a dimension rich in helium. They let you know that they can tune your portal to travel to the dimension it originated from, should you want to check it out.$/, '$1区域：165 您发现了一小片绿色金属。这又是什么？！科学家们告诉您，这是来自一个毒性维度的，那里也富含氦。它们表示只要您有这个需求的话，可以帮助调整传送门前往那个维度。'], //故事消息
    [/^(.*)Z:166 That last Improbability seemed like a nice guy.$/, '$1区域：166 最后的那个乌有者看起来还不算坏。'], //故事消息
    [/^(.*)Z:168 Hopefully spaceships don't rust.$/, '$1区域：168 希望飞船不会生锈。'], //故事消息
    [/^(.*)Z:170 You reach the top of an incredibly large mountain. You can see at least 50 Zones sprawled out before you. About 30 Zones away, you can see a gigantic spire. It looks like architecture from your home world. You hope it's not a mirage...$/, '$1区域：170 您爬上了一座险峰的顶部。您差不多可以看到前方的50个区域。差不多30个区域后，矗立着一座巨大的尖塔。看起来像是您家乡的设计风格。但愿这不是海市蜃楼……'], //故事消息
    [/^(.*)Z:172 Something smells purple. That's probably not good.$/, '$1区域：172 有什么东西闻起来像是紫色的。恐怕不是什么好东西。'], //故事消息
    [/^(.*)Z:174 Strange smells continue to swell around you. Judging by changes in wind direction, the smells are coming from the spire. You still can't describe it other than purple.$/, '$1区域：174 身旁仍然是这种奇怪的气味。根据风向的改变来看，这气味来自于那座尖塔。除了紫色，您想不出其他词来形容它。'], //故事消息
    [/^(.*)Z:175 Your Trimps seem happy. They're not used to having a purpose, and having one seems to positively affect them! You call a Trimp over and ask him how he's doing, then you remember that he can't talk.$/, '$1区域：175 您的脆皮们看起来很高兴。它们很少因为某个目的而行动，这似乎对它们产生了正面的影响！您唤来一个脆皮，询问它的情况，然后您才想起来它不会说话。'], //故事消息
    [/^(.*)Z:178 You're still not quite sure what that smell is. You feel slightly more powerful, and you fear that your enemies may feel the same way.$/, '$1区域：178 您还是不确定那个气味到底是什么。您感觉自己变强了一些，恐怕敌人也变强了。'], //故事消息
    [/^(.*)Z:180 After clearing out the previous Zone, you decide to take a day hike to the top of another gigantic mountain to try to find more info about the smell. As you reach the top, your jaw drops. Clear as day, a healthy amount of purple goo is pouring into the atmosphere from the top of the spire. You can see the Zones in front of you beginning to change. This really can't be good.$/, '$1区域：180 通过上一个区域以后，您决定花一天时间爬到另一座高山的顶峰上收集一下这个气味的更多情报。当您到达目的地时，您震惊了。您看得真切，一大股紫色粘液从塔顶涌入了空气之中。您前方的区域也开始变化了。这可不是什么好消息。'], //故事消息
    [/^(.*)Z:180 After clearing out the previous Zone, you decide to take a day hike to the top of another gigantic mountain to try to find more info about the smell. As you reach the top, your jaw drops. Clear as day, a healthy amount of purple goo is pouring into the atmosphere from the top of the spire. This must be what's causing all of this Corruption you've been trudging through. The planet seems pretty heavily Corrupted already, you wonder if you're too late.$/, '$1区域：180 通过上一个区域以后，您决定花一天时间爬到另一座高山的顶峰上收集一下这个气味的更多情报。当您到达目的地时，您震惊了。您看得真切，一大股紫色粘液从塔顶涌入了空气之中。一定就是这个才导致了您遇到那么多腐化格子。这个行星看来已经被重度腐化了，不知道还来不来得及。'], //故事消息
    [/^(.*)Z:182 Well, there's not really much doubt about it anymore. Some sort of intelligence is intentionally making life more difficult for you and your Trimps. You take this as a sign that you're pretty important, why else would something risk destroying an entire planet to stop you\? Your parents would be so proud.$/, '$1区域：182 很好，已经没有什么好疑惑的了。某种智慧生命就是故意想让您和您的脆皮们活得更艰难。您将这看成是您重要性的佐证，不然，怎么会有谁冒着摧毁行星的风险也要阻止您呢？您的父母可以以您为傲了。'], //故事消息
    [/^(.*)Z:184 The corruption seems to be more pronounced the closer you get to the Spire. Looks like there's (.+) of em now.$/, '$1区域：184 随着您靠近尖塔，腐化程度是越来越重了。比如目前区域就有$2个腐化格子了。'], //故事消息
    [/^(.*)Z:185 You have trouble putting into words exactly what the Corruption does to the creatures on this planet. They seem to be stripped of all natural abilities and given powers that you didn't know could exist in the primary dimension.$/, '$1区域：185 您很难准确描述腐化到底对这个行星上的生物造成了什么样的影响。它们似乎被剥夺了所有天性，并获得了无法想象的力量。'], //故事消息
    [/^(.*)Z:187 None of these corrupted enemies seem to have eyes, so you decide to see if you can get away with flipping one off. As it reacts by roaring and stomping around in a rage, you realize that these things are powerful enough not to need eyes to observe the world. What$/, '$1区域：187 这些腐化后的敌人似乎都失去了眼睛，所以您决定试试看竖中指它们有没有反应。就它们咆哮践踏地面的样子来看，腐化敌人不需要视力，也能看得到这个世界。这都是'], //故事消息
    [/^(.*)Z:190 You awaken from your sleep in a cold sweat to a frantic and terrified noise from the back of the cave where you were sleeping. With urgency, you run to the source of the noise to make sure your Trimps are okay. As you reach the back, you see a handful of Trimps trying to use a small and very angry Snimp as a musical instrument. You put some sand in your ears and go back to sleep.$/, '$1区域：190 在您睡觉的山洞后面响起了疯狂而可怕的声音，您在一身冷汗中惊醒了。您急急忙忙地跑向声源，想看看脆皮们是否平安。当您到那里时，发现只是一小队脆皮想把一只几乎抓狂的小脆皮蛇当乐器来用而已。您往耳朵里塞了些沙子，又回去睡觉了。'], //故事消息
    [/^(.*)Z:193 The corruption continues to thicken as you near the Spire. You're beginning to grow accustomed to the smell of the Spire, and really don't mind it anymore. It reminds you of blueberries. Evil blueberries.$/, '$1区域：193 您离尖塔越来越近，腐化也愈加严重了。您开始习惯了腐化的气味，不再那么介意了。这气味让您想起了蓝莓。该死的蓝莓。'], //故事消息
    [/^(.*)Z:198 You're so close to the source of corruption that you can taste it, and it doesn't taste good.$/, '$1区域：198 您非常接近腐化的源头了，甚至您都可以尝出味道来。真够糟糕的味道。'], //故事消息
    [/^(.*)Z:205 You look back at The Spire and feel kinda bad that there's still a ton of Corruption coming out of it, but you'll get him some time.$/, '$1区域：205 您回头看了看尖塔，它还在往外喷出腐化，真糟糕。总有一天您会让他付出代价的。'], //故事消息
    [/^(.*)Z:205 You don't miss Druopitee too much. You don't remember all that much to miss, but the point stands.$/, '$1区域：205 您并不是很想念德罗披提。反正关于他的事您也记不起来多少了。'], //故事消息
    [/^(.*)Z:210 It smells extra corrupt. That Spire can't be healthy for the environment.$/, '$1区域：210 这闻起来真的够腐化的。尖塔对环境来说简直是灾难。'], //故事消息
    [/^(.*)Z:210 There's still Corruption, but it feels less threatening. You feel more at peace with the planet and feel like you're on track to repairing it. Surely nothing else terrible will happen any time soon.$/, '$1区域：210 四处还有一点腐化，但看起来已经没那么大威胁了。您一时感觉与世无争，而且，您应该是走在修复行星的路上了。已经没有什么好怕的了。'], //故事消息
    [/^(.*)Z:220 Your Trimps seem content. They kinda wish that spire wasn't still pumping purple stuff into their world, but they don't mind too much.$/, '$1区域：220 脆皮们还是挺满意的。虽然它们希望尖塔能够停止排放腐化，但实际上它们也没那么在意。'], //故事消息
    [/^(.*)Z:220 Your Trimps seem content. You taught some basic puppetry to them and they've been putting on some great shows with defeated Snimps.$/, '$1区域：220 脆皮们还是挺满意的。您教了一些简单的木偶戏技巧给它们，接着它们就用已经被打倒无力反抗的脆皮蛇开始表演起来了。'], //故事消息
    [/^(.*)Z:225 You wake up in a sweat after a good night's sleep in a cool, dark cave. You dreamt that you were overheating, though that's never really been a problem before. Oh well, strange dreams and memories haven't really indicated anything important before, it's probably nothing.$/, '$1区域：225 在一个凉爽幽深的洞窟里睡了个饱觉以后，您在一身冷汗中惊醒了。您梦到自己过热了，这在之前从来就不是个问题。好吧，怪梦也好，回忆也好，都没什么事，应该只是个梦而已。'], //故事消息
    [/^(.*)Z:231 It's pretty hot.$/, '$1区域：231 好热啊。'], //故事消息
    [/^(.*)Z:232 The heat intensifies as you move further and further through the Zones. Instinct says to turn away from the heat, but that wouldn't be any fun.$/, '$1区域：232 随着您的前进，热量越来越高了。您的本能告诉您该转身离开，但那样就没意思了。'], //故事消息
    [/^(.*)Z:234 As you finish clearing out the Zone, you notice a green cloud fall from the sky. It hovers above you for a few moments and shoots some sort of energy at you in a quick, painless burst. Seeming satisfied by the results of this blast, it hurriedly shoots forward a couple of Zones. Before you can even really think about what it could be, ten more green clouds of various sizes appear! They zip down, zap you, then zealously zoom off to the same zone. The clouds look toxic to you, but your Trimps seem to want to follow them.$/, '$1区域：234 通过区域以后，您注意到天边飘来一朵绿云。它在您上方徘徊了片刻，然后迅速向您发射了一道无痛的能量射线。它似乎对这一下很满意，然后又对着前方的区域发射了起来。在您还没反应过来的时候，十朵不同大小的云就出现了！它们迅速降了下来，撞了您一下，然后积极地缩小到了同一个区域内。那些云看起来有毒，但您的脆皮们似乎想要跟着它们走。'], //故事消息
    [/^(.*)Z:236 As you climb over a rather large mountain and into the next Zone, you see that the green clouds have finally made it to the ground. Your worries about their toxicity seem to have been needless though, as your Trimps appear to greatly enjoy this rare treat. You watch in amazement as your Trimps begin to grow spines that drip with toxic sludge, and they immediately use their new powers to try to stick each other. You bet they're a bit stronger now.$/, '$1区域：236 您翻过一座大山，到达下个区域以后，发现那朵绿云最后来到了地面。您担心它们的毒性似乎没有什么用处，但脆皮们似乎很享受这种乐趣。您惊喜地发现，脆皮们开始长出了滴着毒液的尖刺，然后它们马上开始互相戳了起来。它们应该是变得更强了。'], //故事消息
    [/^(.*)Z:240 You and your Trimps have been really enjoying the benefits of what your Scientists call an "Empowerment of Nature". However, something up ahead seems to be absorbing all of the Poisonous clouds. Oh no! Your scientists think this will be your last zone with the Poison Empowerment, but they seem convinced that there will be another Empowerment to take its place!$/, '$1区域：240 您和您的脆皮们由于那些被称为 自然赋能 的东西已经获益匪浅。但是，前方似乎出现了什么东西正在吸收所有的毒云。真糟糕！科学家们认为这个区域是最后一个毒赋能的区域了，但它们更肯定的是会有另一个赋能取而代之出现的！'], //故事消息
    [/^(.*)Z:241 As you reach the new Zone, you happen to see a Bad Guy finish absorbing the last bit of Poison in the entire Zone, leaving no trace of your new ally, Nature. Before you get too upset about the thought of having to tackle the Magma alone again, Wind floods in to take Poison's place. The spikes on your Trimps stop dripping sludge and begin to spin like propellers, the sound resembling a gigantic swarm of beeimps. These controllable Trimp-generated gusts of wind should be helpful for knocking extra resources into your reach, but you'll still need to deal with that Bad Guy that sucked in all of the Poison...$/, '$1区域：241 到达新区域以后，您撞见一个敌人将整个区域的毒全部吸收掉了。您正有点沮丧要在没有赋能的前提下继续前进时，吹起了风。脆皮身上的尖刺停止了滴落毒液，而是像螺旋浆一样旋转了起来，听起来就像一群脆皮蜂一样。这些由脆皮制造的风应该可以使您获得更多的资源，但首先，您得先处理掉那个吸收了毒的敌人……'], //故事消息
    [/^(.*)Z:243 The middle of these Windy Zones are the most beautiful you've seen yet. The Magma and Wind bring all sorts of nutrients and seeds here, leaving the area rich in plant biodiversity. For the first time since you arrived on this planet, you feel truly peaceful. Nature is repairing itself, and you've become one of its tools \(but like in a good way\).$/, '$1区域：243 风区域的景色是您所见过最美丽的。岩浆和风为大地带来了充足的养分，播撒下了许多种子，由于它们的作用，这些区域充满了多种多样的植物。自从来到这个行星以后，您第一次真正地平和了下来。大自然开始了自我修复，而您成了它的工具人(并不是坏事，嗯)。'], //故事消息
    [/^(.*)Z:244 Your Magmamancers have figured out how to make little fountains in the Magma around the base. You like the effect.$/, '$1区域：244 您的岩浆巫师们摸索出了利用基地周围的岩浆制作小喷泉的方法。是您喜欢的效果。'], //故事消息
    [/^(.*)Z:244 You remember Magmamancers as being pretty cool.$/, '$1区域：244 您记得岩浆巫师们很酷的。'], //故事消息
    [/^(.*)Z:245 Something in the next zone appears to be sucking up all of the Wind again. You've enjoyed all of the extra resources, but you're excited to see what Nature has next for you!$/, '$1区域：245 下个区域好像又有什么在吸收风了。您是挺喜欢这些额外资源的，但您也想看看，自然还为您准备了什么惊喜！'], //故事消息
    [/^(.*)Z:246 Once again, a Bad Guy in this Zone has absorbed every trace of your Windy friends. But once again, Nature has replaced them with new, colder ones. Suddenly your Trimps' new spikes stop spinning and start spewing snow! You feel incredibly cold, but your Trimps seem perfectly comfortable. This cold will surely slow down your enemies!$/, '$1区域：246 这个区域中一个敌人把所有的风都吸收了。但这次，取而代之的是更酷的东西。您的脆皮们身上的尖刺不再旋转了，而是开始了吹雪！您感觉这似乎有点太冷酷了，但您的脆皮们似乎完全没受到影响。这样的严寒下，敌人的行动一定会变得更慢的！'], //故事消息
    [/^(.*)Z:248 While the Windy Zones were beautiful, the Ice Zones are nearly indescribable. Deep blues from the frozen ground contrast sharply with the fiery reds of the Magma rivers, and these two systems have equalized at a very comfortable ambient temperature. Your Trimps are too cold to touch though, your hand is still stuck to the one you high-fived at the start of the last zone.$/, '$1区域：248 风区域很美，而冰区域则不太好描述了。炽红的岩浆河与深蓝的冻土形成了鲜明对比，而这两者的共同存在却恰好使气温处在一个舒适的温度。当然这里说的温度不包括脆皮的体温，毕竟您的手还被粘在一个脆皮的手上。谁让您要在上个区域末尾玩击掌的。'], //故事消息
    [/^(.*)Z:251 Right on cue, another enemy has absorbed the Empowerment of Ice, and Nature has reacted by refilling the Zone with familiar green clouds. Poison is back! Your Trimps' spikes resume spewing toxic sludge, and finally the Trimp stuck to your hand warms up enough to fall off. No more high-fiving Trimps in the Ice Zones.$/, '$1区域：251 果然不出所料，又一个敌人在吸收冰赋能，而熟悉的毒云又出现了。毒又回来啦！脆皮身上的尖刺再次开始滴落毒液，您也终于跟那个脆皮分开了。下次再在冰区域玩击掌您就是脆皮狗。'], //故事消息
    [/^(.*)Z:255 The Magma continues to sap your Trimps\' strength as you press through the Zones, but they seem to be adapting well in spirits. It seems like each generation likes the heat more and more.$/, '$1区域：255 随着脆皮们继续前进，岩浆对它们的影响越来越大，但从精神上来看，它们似乎已经很好地适应了。而且看来它们一代比一代更喜欢这热量了。'], //故事消息
    [/^(.*)Z:256 You're detecting a pattern here! Poison has once again given way to Wind, and you have a feeling that this Wind will soon give way to Ice. The Bad Guys can absorb as much Nature as they want! Their Tokens will only help you to strengthen Nature, and Nature will always be back. With your new ally, you can totally handle the Magma.$/, '$1区域：256 您已经找到诀窍了！毒消失了，风又出现了，而且您觉得风迟早又会被冰取代的。那些敌人真的可以把赋能吸得干干净净的！它们的符记可以帮助您强化赋能，而自然赋能则是永存不灭的。有它的帮助，岩浆掀不起什么风浪。'], //故事消息
    [/^(.*)Z:261 You asked that Omnipotrimp nicely not to explode after you killed it, but it exploded anyways. Pretty rude.$/, '$1区域：261 您请求那个全能者不要玩自爆了，但它还是炸了。真是没礼貌的家伙。'], //故事消息
    [/^(.*)Z:264 Good job not high-fiving any Trimps so far this time. You are worried morale might fall if you spend too much time with such a difficult restriction, but you're pretty sure Poison is coming up soon.$/, '$1区域：264 很好，这次没有再击掌弄出什么事了。您也担心如果有这么严格的限制，会不会影响脆皮们的士气，但反正，毒又快来了。'], //故事消息
    [/^(.*)Z:267 You're determined to repair the planet, and now that Nature is on your side you feel it might actually be possible. Either way, you know you must be doing something right to have earned the loyalty of Trimps and Nature.$/, '$1区域：267 您决心修复这个行星，而有了自然的帮助，这或许不再只是个梦想了。大概这就是，自助者，天助之。'], //故事消息
    [/^(.*)Z:270 This planet is really freaking big. You feel like you've been walking around it for years and still haven't seen everything there is to offer. Shouldn't there be another spire around here or something\?$/, '$1区域：270 这个行星真的太大了。尽管您已经待了这么多年，仍未能穷尽这个行星的一切。这里是不是应该有另一个尖塔来着？'], //故事消息
    [/^(.*)Z:277 It's starting to smell purple again. You must be getting close to another spire.$/, '$1区域：277 有的时候您都觉得自己是言出法随，这不，又开始有紫色的气味了。您应该离另一个尖塔不远了。'], //故事消息
    [/^(.*)Z:283 During a boring night while waiting to cross a particularly rough Magma river, you managed to teach your Trimps how to stack on each other to create some funny shapes. You almost feel bad for the first Snimp to come across (.*) Trimps stuck together in the shape of a humongous Mongooseimp.$/, '$1区域：283 又是一个无聊的夜晚，您正在等待穿越一条崎岖的岩浆河。为了打发时间，您教会了脆皮们如何玩叠罗汉。没过多久，脆皮们就折腾出了一个由$2个脆皮组成的巨型脆皮猫鼬，您心中默默地为第一只向它走去的脆皮蛇哀悼了起来。'], //故事消息
    [/^(.*)Z:285 You can finally see it, clear as day. No more than 15 Zones in the distance stands a giant spire, even more menacing than the first. A loud, echoing voice booms from the tower, matching the tone and cadence of Druopitee himself. It's a little far away to hear perfectly, but it sounds like he's asking you nicely to please leave him be.$/, '$1区域：285 终于，又再见面了，是尖塔，一清二楚。它在15个区域后矗立着，看起来比第一个尖塔还要险恶。从塔顶上传来了巨大的回音，听上去像是德罗披提的声音。虽然隔了太远，听不太清楚他具体说了什么，但是从语气来看，大概是想请您赶紧离开这里。'], //故事消息
    [/^(.*)Z:285 Something feels wrong, but you can't quite figure out what. You eventually find a pebble in your shoe and everything seems much better!$/, '$1区域：285 您总觉得心神不宁，但又说不出个所以然来。折腾了半天，您从鞋子里取出了一块鹅卵石，这样似乎就好多了！'], //故事消息
    [/^(.*)Z:286 You hear the voice again, and can tell there's definitely something weird about it - as if it was coming from a ghost or something. Though you suppose that makes sense, since you've already killed Druopitee.$/, '$1区域：286 您再次听到了那个声音，那个声音似乎有哪里不大对劲————那根本就不是活人的声音啊。不过考虑到您已经亲手将德罗披提干掉了，这似乎也没什么不对的样子。'], //故事消息
    [/^(.*)Z:286 You hear something rustling in a bush and get totally psyched up for something new and exciting. As you walk cautiously towards the bush, a Rabbimp quickly runs out and away.$/, '$1区域：286 灌木丛中传出了沙沙的声音，您想着，或许能发现什么有趣的东西，于是谨慎地向它走去。快要到达的时候，一只脆皮兔从中跳了出来，飞快地逃走了。'], //故事消息
    [/^(.*)Z:290 As you get closer and closer to the spire, the voice gets clearer and clearer. You can pick up notes of terror from whatever being is up there, as if he wants to just be left alone to destroy the world. You don't feel much sympathy though.$/, '$1区域：290 随着您离尖塔越来越近，声音也越来清晰了。那位仁兄似乎正在发出非常可怕的声音，就好像他想要一个人把世界毁灭了。那又如何呢，他的遭遇根本不值得同情。'], //故事消息
    [/^(.*)Z:290 You trip over a rock and stumble a bit, but fix your footing before totally falling over. You glance around and it doesn't seem like any of the Trimps noticed!$/, '$1区域：290 您被一块石头拌了一下，幸好在完全失去平衡之前稳住了。您环顾四周，很好，没有任何脆皮注意到这边。'], //故事消息
    [/^(.*)Z:295 You're now so close to this new spire that you can taste it, literally. These things are gross.$/, '$1区域：295 您离新的那座尖塔太近了，真的，太近了，甚至连它的味道都可以尝出来。真是令人作呕的味道。'], //故事消息
    [/^(.*)Z:295 You wonder if you could get your scientists to invent chewing gum...$/, '$1区域：295 您在想是不是能让科学家们尝试着研发一下口香糖……'], //故事消息
    [/^(.*)Z:298 The deranged spirit in the tower is now begging that you stay back. It obviously knows you destroyed the last tower and doesn't want you taking out another. Too bad, buddy. You're coming.$/, '$1区域：298 尖塔里那个疯子的残魂已经开始乞求您别再靠近了。很显然，他知道正是您摧毁了上一个尖塔，而且他不想步之前那一位的后尘。风水轮流转，现在才来求饶实在是晚了，老兄，真的晚了。现在，该轮到谁选择臣服，还是毁灭了？'], //故事消息
    [/^(.*)Z:298 A voice in the back of your mind tells you there should be something big soon, but you see nothing. Oh well.$/, '$1区域：298 脑海中总有一个声音告诉您，这里应该有一个什么庞然大物的。怎么样也好，反正您是什么也没看到。'], //故事消息
    [/^(.*)Z:303 You're glad you have Fluffy around now. He seems to be getting along well with the other Trimps, and seems happy to have found others like him. He doesn't seem to be any smarter than a normal Trimp so you're sure you'll get some entertainment out of him.$/, '$1区域：303 您很高兴有绒绒陪着您。它看起来与其他脆皮相处得不错，而跟同类在一起也让它很开心。它看起来并没有比普通的脆皮聪明多少，但有它的陪伴，在这边的生活应该能更多姿多彩一些。'], //故事消息
    [/^(.*)Z:303 You wish you had a pet.$/, '$1区域：303 如果能有一只宠物该有多好啊。'], //故事消息
    [/^(.*)Z:315 These healthy spots of land seem to be increasing as the Spire pumps more and more into the air! Hopefully that's a good thing. You ask Fluffy what he thinks and he nods in approval.$/, '$1区域：315 随着尖塔把越来越多的健康变异气体排入大气，健康的区域看起来也越来越多了！希望这么做会带来好的结果。您询问了一下绒绒它的想法，而它只是点了点头。'], //故事消息
    [/^(.*)Z:315 Geeze, this Corruption is starting to look pretty nasty. Those Spires need to fall soon...$/, '$1区域：315 噫，腐化真的是越看越烦人了。但愿世界不再有那些尖塔……'], //故事消息
    [/^(.*)Z:340 Watch your step, there's some Magma on the ground over there.$/, '$1区域：340 注意您的脚下，那边的地上有些岩浆。'], //故事消息
    [/^(.*)Z:350 If Druopitee has really immortalized himself in an infinite amount of Spires, you might be here for a while.$/, '$1区域：350 如果德罗披提真的已经在无穷无尽的尖塔中永生了，那您能做的恐怕也只有不死不休了。'], //故事消息
    [/^(.*)Z:360 You attempt to put Fluffy through your rigorous Scientist training program, but he doesn't want to. He wouldn't have any trouble, but he doesn't want the label. You still couldn't be happier to have the little guy around!$/, '$1区域：360 您试图让绒绒通过严格的科学家训练，但它看起来完全没有兴趣。或许它只是单纯不想被打上这样的烙印。再说了，有这个小家伙在身边也挺欢乐的！'], //故事消息
    [/^(.*)Z:360 You really feel like something is missing from your life. Everything feels hollow and sad.$/, '$1区域：360 您真的觉得自己缺少了什么东西。一切都那么的空虚寂寞冷，悲伤逆流成河。'], //故事消息
    [/^(.*)Z:375 Should be coming up on another Spire Zone soon. You stop and sit beside a beautiful Magma river and wonder what kinds of crazy stuff could be waiting for you up there. Then you realize it's probably just another Spire, so you get up and keep moving.$/, '$1区域：375 下一个尖塔也该要来了。您在一条漂亮的岩浆河旁坐了下来，思考着，接下来还有什么新花样在等着您。最后您得出结论，这不过就是另一座尖塔而已，于是您起身，继续前进了。'], //故事消息
    [/^(.*)Z:385 Some familiar Spirish odors begin hitting your nostrils again and you sneeze, hilariously startling a few billion Trimps. Never gets old.$/, '$1区域：385 又是熟悉的配方，熟悉的味道入侵了您的鼻孔。您打了个喷嚏，惊起脆皮无数。真是阴魂不散的玩意。'], //故事消息
    [/^(.*)Z:390 You can finally see the next Spire in the distance, a thick purple cloud boiling out of the top. Hard to believe there's an infinite amount of these things, how big even is this planet\?$/, '$1区域：390 终于，您在远方看到了下一座尖塔，仍然有紫色云雾从塔顶上涌入空气中。即使到了现在，还是很难相信他的尖塔真的是无穷无尽的。说到底，这个行星到底得有多大来着？'], //故事消息
    [/^(.*)Z:390 Weird, you feel like you should be able to see the next Spire by now, but it's not there. Maybe you should have checked the other Spires a bit more thoroughly.$/, '$1区域：390 奇怪，您感觉应该差不多能看到下一座尖塔了，但这里却一点痕迹也没有。或许您下次该考虑把之前那座尖塔先给打通了。'], //故事消息
    [/^(.*)Z:395 Ahh, that gross old taste of Spire. You'll never get used to that. Most of your Trimps are trying to stay under trees, but Fluffy is running around with his tongue out as if he was trying to catch snowflakes.$/, '$1区域：395 呕，又是那作呕的味道。真的，这味道闻一次吐一次，永远习惯不了的。大部分脆皮都只想着躲在树下，但绒绒却开心地伸出舌头到处蹦蹦跳跳，就好像在捕捉空中看不见的雪花一样。'], //故事消息
    [/^(.*)Z:395 Did you leave the oven on\? Oh yeah, you don't have an oven. Now you wonder what an oven even is. Oh well.$/, '$1区域：395 您是不是忘记关炉子了？哦，等一下，您并没有炉子一类的东西。说到底，所谓的炉子究竟又是什么玩意来着……好吧，管他呢。'], //故事消息
    [/^(.*)Z:405 It really seemed like you weakened Druopitee back there. Maybe you'll be able to at least shut off any last conscious parts of him with just one more Spire\?$/, '$1区域：405 德罗披提真的变得更虚弱了。或许再杀他一次，他就变成了它，永远地闭嘴了。'], //故事消息
    [/^(.*)Z:405 You can't shake the feeling like you forgot to do something.$/, '$1区域：405 您总有一种感觉挥之不去，就好像您忘了做什么事一样。'], //故事消息
    [/^(.*)Z:415 The Healthy mutation is starting to spread nicely now. The Bad Guys hurt quite a bit more, but you're pretty sure you're doing the right thing which kinda makes you feel good.$/, '$1区域：415 健康变异在继续传播当中，效果看起来不错。变强的敌人有点棘手，但您的所作所为无愧于心。'], //故事消息
    [/^(.*)Z:415 It seems like the Healthy mutation has stopped spreading. That's alright though, some other version of you will probably take care of it.$/, '$1区域：415 看起来，健康变异已经停止传播了。这也无关紧要，反正几世之后，您还会回来的。'], //故事消息
    [/^(.*)Z:415 The land sure looks terrible and corrupted, but at least you have Fluffy.$/, '$1区域：415 这片大地看起来真的很糟糕，显然已经被严重腐化了，但至少绒绒还陪着您。'], //故事消息
    [/^(.*)Z:415 What do you have against Fluffy\?$/, '$1区域：415 您是……不喜欢绒绒了吗？'], //故事消息
    [/^(.*)Z:430 The Trimps tried tying two Turkimps to this tall tree, then the Turkimps thrashed those three trillion Trimps, throwing the Trimps tumbling towards the tall tree. The Trimps truly tried. Those Turkimps though... they tough.$/, '$1区域：430 脆皮火鸡，脆皮火鸡，跑得快，跑得快，一只没有眼睛，一只没有腐化，真奇怪，真奇怪。'], //故事消息
    [/^(.*)Z:440 Wow, you've gotten pretty far. You would have never guessed there'd be this many Zones out there, but here you are.$/, '$1区域：440 不知不觉，您都走了这么远了。可能连您自己，都没有想到自己能来到这么多个区域之后吧。'], //故事消息
    [/^(.*)Z:450 It's just about time for another Spire, don't you think\?$/, '$1区域：450 下一个尖塔也该来了，不是么？'], //故事消息
    [/^(.*)Z:460 This part of the world seems to be at a much higher elevation than any other part that you've been at. The air is strangely clear, and you can see more of the planet sprawled out around you than ever before. It feels good to see everything you're fighting for and feel like it's worth it.$/, '$1区域：460 世界的这一部分似乎比之前的所有部分都来得高。空气异常清新，这个历经劫难的行星变得越来越好了。世间自有公道，付出终有回报。'], //故事消息
    [/^(.*)Z:470 This part of the world seems to be at a really low elevation, and lots of Corruption is building up in it. Gross.$/, '$1区域：470 世界的这一部分似乎海拔相当低，而这里充满了腐化。真够恶心的。看来，健康尚未成功，而您仍需努力。'], //故事消息
    [/^(.*)Z:485 Once again, you can taste the Spire, it must just be over that next hill now. Fluffy seems excited.$/, '$1区域：485 好吧，又闻到尖塔的那个味道了，再翻过那座山脉，应该就能够到达了。绒绒看上去相当兴奋。'], //故事消息
    [/^(.*)Z:485 Hey! Is that... oh, nope, just some dirt.$/, '$1区域：485 哈！那个是……哦，没事了，只是一些污迹而已。'], //故事消息
    [/^(.*)Z:495 It's time. He's weak. You've got this. Time to make this planet Healthy again.$/, '$1区域：495 午时已到。他已经虚弱不堪了。您也做好准备了。是时候一劳永逸，让这场战斗画上一个句号了。一定要让这个行星再度健康起来。'], //故事消息
    [/^(.*)Z:495 You're feeling rather itchy today. You ask some Trimps to scratch your back but they don't really want to.$/, '$1区域：495 您今天感觉身上很痒。您想让一些脆皮来帮忙挠挠，但它们看起来不情不愿的。'], //故事消息
    [/^(.*)Z:505 Well you've totally 100% eradicated Druopitee's consciousness, now you figure it's just time to clear the rest of his brainless Echoes out of the remaining Spires.$/, '$1区域：505 终于，德罗披提彻底完蛋了，接下来要做的，就是把剩下的那些尖塔中行尸走肉一样的那些复制体处理掉了。这也是为了让他真正地解脱。'], //故事消息
    [/^(.*)Z:505 Druopitee is just over there getting stronger, someone should really do something about him.$/, '$1区域：505 再这么放着不管下去，德罗披提要无法无天了，做点什么吧。'], //故事消息
    [/^(.*)Z:702 The planet looks pretty charred. Fluffy looks proud of something but you're not sure what.$/, '$1区域：702 这个行星看起来一片焦黑。看起来绒绒正因为自己做了什么事而得意洋洋，但您并不知道发生了什么。'], //故事消息
    [/^(.*)Z:707 You feel like there is supposed to be something here that isn't. You wonder if you had something to do with that.$/, '$1区域：707 您感觉这里本来会有什么东西的，但现在已经消失了。不知道您是不是跟这个有什么关系。'], //故事消息
    [/^(.*)Z:2 "A journey of 1000 Zones begins with a single Zone." - Probably someone$/, '$1区域：2 “千区之行，始于足下。”————某个连是否存在都存疑的不知名人物'], //宇宙2故事消息
    [/^(.*)Z:3 While this Universe seems very similar to the one you were just in, it feels quite a bit different. You can't quite figure out what exactly is different, but it totally is.$/, '$1区域：3 这个宇宙跟之前的有不少共同点，但也有很多不同之处。虽然您没法把区别一一列举出来，但您很肯定那不会少。'], //宇宙2故事消息
    [/^(.*)Z:4 You feel like you've climbed through these Zones thousands of times, but you can only clearly remember one time that felt like ages ago in a different Universe. You feel weird.$/, '$1区域：4 您觉得这些区域您已经来过千百回了，但却只清晰记得之前那个宇宙的最后那一次。这简直是恍若隔世一般，真是奇怪的感觉。'], //宇宙2故事消息
    [/^(.*)Z:5 But have you been to this Universe before\? You're really not quite sure. Every day that passes here makes your memories feel like another lifetime ago.$/, '$1区域：5 说到底，您真的没来过这个宇宙吗？对此您也不太确定了。时光匆匆，岁月荏苒，所谓烂柯，不外如是。'], //宇宙2故事消息
    [/^(.*)Z:6 You decide to tell the story of your travels to your Trimps, so that someone will remember if your memory continues to get worse. You tell them about the massive armies, the Spires, Druopitee, Nature, and everything else you can think of. The Trimps seem excited by the tale, but they can't talk.$/, '$1区域：6 您决定把您在上一个宇宙的故事讲给脆皮们听，如果将来您连这些都忘却了，或许还有谁能让您回想起来。您告诉了它们，您曾拥有庞大的军队，曾经历过那些尖塔，曾与德罗披提决战过，曾受到自然的恩泽，还有很多很多精彩的经历。脆皮们看起来也沉浸在了您的故事中，兴奋了起来，可惜的是，它们没法说话。'], //宇宙2故事消息
    [/^(.*)Z:7 Scruffy runs up to inform you that you could run a regular map to find directions to something called "Big Wall". You remember a wall from before, but you don't remember finding it so soon. What else is going to be different\?$/, '$1区域：7 污污跑了过来，它告诉您，您可以运行任意一张地图，这样您就可以发现通往“巨墙”的方法了。您记得之前的宇宙中也有个什么墙的，但是那似乎并没有这么快出现啊。不知道还会有什么东西不一样的呢？'], //宇宙2故事消息
    [/^(.*)Z:8 At your request, your Scientists are running tests to try and identify further differences between your original Universe and this one. Unfortunately, they don't know anything about your old Universe and probably won't be able to spot any differences.$/, '$1区域：8 在您的再三要求下，科学家们开始分析两个宇宙之间的区别了。不过不好的消息是，它们并没有去过之前的那个宇宙，所以恐怕是找不到正确答案的。'], //宇宙2故事消息
    [/^(.*)Z:9 One thing you remember for sure about the last Universe is that you found a Portal device at the twentieth zone. However here, your Scientists have detected a massive portalesque energy reading on only the fifteenth Zone. Interesting.$/, '$1区域：9 您确切记得上一个宇宙中，有一个传送门装置是出现在第二十个区域的。不过据科学家们的说法，它们在第十五个区域就发现了高能反应。事情越来越有意思了。'], //宇宙2故事消息
    [/^(.*)Z:10 You decide to try and stock up on some Helium in preparation for the supposed Portal device that you're quickly approaching. You ask a Scientist where you could find some and he scurries under a table. A more stoic Scientist informs you that Helium is incredibly volatile in this universe and that almost none can be found. That might throw a wrench in your plans...$/, '$1区域：10 您尝试着想先储备一些氦以备后用。所以您找了一个科学家，询问它该如何获得氦，结果它却急忙躲到了桌子下面。另一个更坚忍的科学家提醒您，在这个宇宙中氦极易挥发，因此几乎无法获取。您的计划似乎碰上了大麻烦……'], //宇宙2故事消息
    [/^(.*)Z:11 Apparently a few elements have different properties here than back in the last Universe. Either that or the Trimps currently bathing in mercury are going to have a rough future.$/, '$1区域：11 很显然，两个宇宙之间，有一些元素的性质完全不一样了。比如在水银中遨游的那些脆皮，如果放到之前的宇宙中，恐怕不会有太好的下场。'], //宇宙2故事消息
    [/^(.*)Z:12 You start to feel angry as you get closer to the fifteenth Zone. You're not sure if it's due to the energy your scientists detected, or the Trimps that keep throwing berries at your head. But one of them is definitely making you angry.$/, '$1区域：12 越靠近第十五个区域，您就越抓狂了。您不太清楚这到底是由于那个高能反应，还是因为那群脆皮疯狂往您的头上扔野果。总之您是要抓狂了。'], //宇宙2故事消息
    [/^(.*)Z:13 Scruffy informs you that there is one particular element regarded as king here, Radon. While highly volatile in your home Universe, it's a stable gas here with tremendous potential for power generation.$/, '$1区域：13 污污提醒您，这个宇宙中有一个元素是王者一样的存在，那就是，氡。在之前那个宇宙里它非常容易挥发，但在这里它却相当稳定，或许可以考虑利用它来发电。'], //宇宙2故事消息
    [/^(.*)Z:14 You ask Scruffy for more information on Radon, and he sits you down to tell you a story. He informs you that you're not the first human to come to their planet, that someone had been here 500 years ago who caused great harm to the planet. He set up giant Spires all around the World that harvested Radon from the atmosphere and beamed the power to a different Universe. You have a feeling that you know which Universe received this power, and you're starting to have a good idea of why Fluffy picked this particular Universe to send you to.$/, '$1区域：14 您问污污，能不能给您再详细说说氡的事，它让您坐下来，然后讲述了一段故事。它提醒您，您不是首位造访这个行星的，500年前也有一个人到来了，但那位对这个行星造成了巨大的破坏。他在这个世界上设立了巨型的尖塔，从大气中吸取氡，并且把能量传送到另一个宇宙中。您觉得您已经知道是哪个宇宙接收到了这些能量，绒绒之前把您送到这来的原因，您现在也有头绪了。'], //宇宙2故事消息
    [/^(.*)Z:15 There is a device of great evil here. See if you can take it for yourself!$/, '$1区域：15 高能反应就是在这里了。能不能拿到那个装置就看您自己的了！'], //宇宙2故事消息
    [/^(.*)Z:20 Holy cowimp, there's an Improbability at the end of this Zone! But the planet doesn't look broken, this is... improbable...$/, '$1区域：20 我滴乖乖，这个区域最后是从哪冒出来的一个乌有者？这行星都没破碎呢，这也太……乌有了……'], //宇宙2故事消息
    [/^(.*)Z:22 Your Scientists have confirmed that the Spires are indeed still active on this planet, but are incredibly far away in lands your Trimps are nowhere near powerful enough to survive in.$/, '$1区域：22 科学家已经确认了一点，这个行星上也有尖塔的存在，但离您目前所在地还太远了，而且您的脆皮也没有强到可以在那里生存下来。'], //宇宙2故事消息
    [/^(.*)Z:24 Knowing that Druopitee is in your Universe, you ask Scruffy who is manning the Spires. He hangs his head in shame and lets you know that there are 5 Trimps, previously friends of Scruffy's, that were enticed by Druopitee's magic. He doesn't seem to want to talk much more about it.$/, '$1区域：24 考虑到德罗披提是在另一个宇宙，因此您找到污污询问到底是谁在控制着尖塔。它羞愧地垂下了脑袋，提醒您是5个坏脆皮，它们曾经是污污的朋友，却被德罗披提的魔法影响到了。说完这些以后，看起来它暂时不想再多谈了。'], //宇宙2故事消息
    [/^(.*)Z:26 Your Trimps catch a bird and build a little home for it, but it flies away.$/, '$1区域：26 脆皮们抓住了一只小鸟，给它做了个窝，但小鸟还是飞走了。'], //宇宙2故事消息
    [/^(.*)Z:28 Your memories of the last Universe are fading and you have no idea how many times you've been here in this Universe. This could be your first or thousandth time here. Neat!$/, '$1区域：28 上一个宇宙的记忆开始逐渐模糊不清了，而您也记不起到底在这个宇宙待过多少次了。是第一次来这，还是成千上万次了？这可太棒了。'], //宇宙2故事消息
    [/^(.*)Z:30 You're not sure how much more beautiful this Universe is than the last one, but it's hard not to stop and take in all the scenery every once in a while. Sprawling hills and flowing rivers in every direction make it almost worth the frankly ridiculous amount of enemies hiding everywhere.$/, '$1区域：30 您不太确定这个宇宙的风景是不是越来越美了，总之您是一直在驻足欣赏这周围的风景。巍巍群山，江河奔流，哪怕要以到处遍布的这些敌人为代价才能尽览这一切也值得啊。'], //宇宙2故事消息
    [/^(.*)Z:31 You deserve hazard pay or something.$/, '$1区域：31 您应该享有厄劫津贴啥的。'], //宇宙2故事消息
    [/^(.*)Z:32 One of your regular Trimps seems to have picked up the ability to speak a few words from Scruffy. They're too dirty to repeat though.$/, '$1区域：32 您的一个脆皮似乎习得了复读技能，然后它就开始复读污污的一些话。说实话，实在是太污了。'], //宇宙2故事消息
    [/^(.*)Z:34 As you reach the top of another in this seemingly infinite sea of hills, you notice a tiny tablet. It's written in some language you've never seen, so you figure you'll hold on to it and see if Scruffy can translate.$/, '$1区域：34 您到达了这崇山峻岭之间一座山峰的峰顶，然后发现了一块小小的牌子。上面的字迹似乎是用另一种语言书写的，您决定让污污来看看。'], //宇宙2故事消息
    [/^(.*)Z:35 Scruffy seems to be avoiding you ever since you found the tablet. You're not like... 100% positive but you're pretty sure.$/, '$1区域：35 污污似乎是在躲着您。对此您不是100%确信，但也差不多了。'], //宇宙2故事消息
    [/^(.*)Z:36 You finally catch Scruffy while he's eating and ask him about the tablet. He tells you it's not a big deal, but that him and his six friends were all given some "enhancements" by Druopitee 500 years ago. Together they helped carry out Druopitee's bidding, setting up seven different Spires, harvesting Radon, and beaming the Power away. Scruffy lets you know that Fluffy and himself eventually realized how much damage Druopitee was causing to their planet and rebelled against Druopitee and the other Five. This tablet was an order from Druopitee to apprehend them.$/, '$1区域：36 您终于在污污进食的时候找到了机会，您开始询问它那块牌子究竟是怎么回事。它告诉您，这并不是什么大不了的事，500年前，它和它的六个朋友获得了德罗披提的“强化”。它们一起帮着德罗披提实现他的计划，设立了七座不同的尖塔，获取氡，然后把能量传送走了。污污表示，绒绒和它最后明白了德罗披提到底给这个行星造成了什么样的破坏，它们从此与德罗披提和之前的同伴们一刀两断了。牌子上写着的是德罗披提要求捉拿它们的命令。'], //宇宙2故事消息
    [/^(.*)Z:37 You just realized... you thought you named Fluffy Fluffy. That sneaky telepathic Trimp!$/, '$1区域：37 您突然明白过来了……您以为是您给绒绒起的名字，其实是这个家伙用了什么心灵感应能力干扰了您的思维吧。这个藏头露尾的家伙！'], //宇宙2故事消息
    [/^(.*)Z:38 You haven't seen Scruffy around the town much since your last conversation. Telling stories about his old friends seems to be painful for him, though you'd expect him to have moved through the grief stages after 500 years.$/, '$1区域：38 自从上次交谈以后，您几乎没再见到污污。看来之前的那个话题对它来说还是太不堪回首了，500年的时光变迁，都没能让它释怀啊。'], //宇宙2故事消息
    [/^(.*)Z:39 You ask Scruffy why he's so conversational and Fluffy is not. Scruffy shows you a whole trove of books that Druopitee had left behind, that Scruffy had been reading for the past 500 years. You figure Fluffy spent most of that 500 years stuck in a time loop.$/, '$1区域：39 您询问了污污，为何它能跟您对话，而绒绒却不能。污污展示了一大堆德罗披提留下的书籍，看来它这500年也不是闲着的。而绒绒呢，您想着，它在这500年却被困在了时间循环中。'], //宇宙2故事消息
    [/^(.*)Z:40 A Trimp eats a rock.$/, '$1区域：40 一个脆皮吃掉了一块石头。'], //宇宙2故事消息
    [/^(.*)Z:42 You wonder how Fluffy ended up in your Universe if he started out here. You'll ask Scruffy about it when he quits being all sulky.$/, '$1区域：42 如果绒绒之前是在这个宇宙，那它是怎么到另一个宇宙去的？等污污心情好一些以后，您一定要找它问个明白。'], //宇宙2故事消息
    [/^(.*)Z:45 Today, you held the first annual Trimp Toss. It was a pretty nice day.$/, '$1区域：45 今天您第一次举行了脆皮年度庆典。这真是个好日子。'], //宇宙2故事消息
    [/^(.*)Z:50 This zone is really freaking hot.$/, '$1区域：50 这个区域真的好热啊。'], //宇宙2故事消息
    [/^(.*)Z:52 You catch Scruffy helping a group of small Trimps across a river. What a cool dude.$/, '$1区域：52 您发现污污在帮一队小脆皮过河。好家伙，真是好家伙。'], //宇宙2故事消息
    [/^(.*)Z:57 A few of your Trimps are getting whiny so you take them for a walk. Seemed to do the trick, they just needed to burn some energy and pee.$/, '$1区域：57 几个脆皮有点烦躁，所以您带着它们一起去散步了。看起来效果不错，它们需要的也就是燃烧多余的能量和及时如厕了。'], //宇宙2故事消息
    [/^(.*)Z:60 Scruffy is finally in a good mood and seems quite a bit stronger than before, so you figure now is a good time to ask him about Fluffy. In exchange for his good mood, he agrees to tell you the rest of the story. According to him, Fluffy was stationed at the seventh Spire while Scruffy was at the sixth. Fluffy and Scruffy each destroyed their own Spires, but Fluffy was caught by Druopitee and took the fall for both of them. Druopitee left the six remaining enhanced Trimps to take care of the remaining five Spires, and took Fluffy with him. You ask what the names of the other five Trimps are and he tells you: Huffy, Stuffy, Buffy, Tuffy, and Puffy.$/, '$1区域：60 污污看起来终于缓过来了，看起来它甚至比之前更加强大了。您觉得时机已经成熟，于是您找到它询问绒绒的情况。它把之前没说完的故事继续往下说了。根据它的说法，绒绒本来是在第七座尖塔，而它是在第六座的。绒绒和它毁掉了它们所在的尖塔，最后，绒绒被德罗披提抓住，承担了摧毁两座尖塔的后果。德罗披提离开之前，要求剩下的六个强化版脆皮照看尖塔，然后把绒绒带走了。您向污污询问道，那剩下的五个脆皮名字又是什么呢，然后污污回答您，它们的名字是怒怒，闷闷，醉醉，泰泰和彭彭。'], //宇宙2故事消息
    [/^(.*)Z:61 Scruffy finally seems more inspired than sad. Looks like he wants to go take down some bad guys.$/, '$1区域：61 污污看起来真的走出来了，它看起来下定了决心，就像已经准备好干掉敌人了一样。'], //宇宙2故事消息
    [/^(.*)Z:62 It seems like you've gotta find Scruffy's 5 missing brothers. Scruffy reminds you that they were evil the last time he saw them and to be prepared, but that some may have changed sides since.$/, '$1区域：62 看起来您需要找到污污的那五位兄弟。污污提醒您，最后一次看到它们的时候，它们还是在干坏事，最好有相应的心理准备，但当然，可能其中几位也弃暗投明了。'], //宇宙2故事消息
    [/^(.*)Z:65 You wonder if Trimps came from this Universe, your original one, or somewhere else. Scruffy shrugs.$/, '$1区域：65 不知道脆皮是来自哪儿的，是这个宇宙，之前那个宇宙，还是其他哪里？污污对此也一无所知。'], //宇宙2故事消息
    [/^(.*)Z:67 The weather is finally starting to cool back down, you and your Trimps are quite relieved.$/, '$1区域：67 气温终于又凉下来了，您和脆皮们都松了口气。'], //宇宙2故事消息
    [/^(.*)Z:69 Giggity$/, '$1区域：69 咯咯咯'], //宇宙2故事消息
    [/^(.*)Z:69 The Trimps are still enjoying the nice weather, and have even found a couple of sweet lakes to swim in!$/, '$1区域：69 脆皮们很享受这宜人的天气，它们甚至找到了几个可以尽情戏水的湖泊！'], //宇宙2故事消息
    [/^(.*)Z:70 Your tenacity is inspiring.$/, '$1区域：70 您的坚持足以鼓舞人心。'], //宇宙2故事消息
    [/^(.*)Z:71 You reach the top of a hill and can see the next 5 Zones stretched out in a valley ahead of you. Towards the end, you see the largest spire you've ever seen. In fact, you can't even see the top of it! It seems to stretch upward infinitely. You look to Scruffy who tells you that one belongs to Huffy. You really hope Huffy isn't evil...$/, '$1区域：71 您走上了一座山峰的峰顶，看到了前方山谷中的5个区域。在山谷的最远处，您看到了迄今为止最大的一座尖塔。事实上，您甚至都看不到塔尖在哪！看起来它似乎是无穷向上延伸的。污污告诉您，里面住着的是怒怒。您真诚希望怒怒不是坏蛋……'], //宇宙2故事消息
    [/^(.*)Z:72 You really don't like Druopitee. You've spent an unknown amount of lifetimes cleaning up his mess, and who knows how many different Universes he's corrupted.$/, '$1区域：72 您一点也不喜欢德罗披提。到了现在您还在替他擦屁股，天知道他还腐化了多少个宇宙。'], //宇宙2故事消息
    [/^(.*)Z:73 Scruffy tells you that if any of his brothers have come around to the good side since he saw them last, Huffy was the one to do it. Huffy was also the most experienced in hand to hand combat, so you really hope you're not going to have to fight against him.$/, '$1区域：73 污污表示如果有哪个脆皮最有可能弃暗投明的话，那就是怒怒了。怒怒在肉搏中是一把好手，您希望不会需要跟它交手。'], //宇宙2故事消息
    [/^(.*)Z:74 You're very close to the Spire. You feel like you should be able to smell the Corruption pumping out of it by now but you can't! You take that as a good sign.$/, '$1区域：74 您非常接近尖塔了。您觉得通常这个时候早就应该闻到腐化的气味了，但并没有它的踪迹。看起来事情是向好的方面发展了。'], //宇宙2故事消息
    [/^(.*)Z:75 As you approach the infinitely tall Spire, a Trimp rushes out and embraces Scruffy. Scruffy introduces you to Huffy, who seems to have also realized that Druopitee is kind of a prick. Huffy lets you know that he managed to destroy the Corruption device at the top, but that it was now crawling with horrible shadowy enemies. Huffy lets you know that he is shielded from the Portal inside the Spire, but that even when you Portal and forget him, he can use your subconscious to help direct him in cleansing the Spire and finding artifacts to make your Trimps stronger.$/, '$1区域：75 您走到尖塔跟前，一只脆皮冲了出来，紧紧地抱住了污污。污污向怒怒介绍了您，看起来怒怒也明白过来，德罗披提就是个无耻的混蛋。怒怒表示它已经成功摧毁了塔顶的腐化装置，但尖塔里现在都是一群可怕的神秘敌人。怒怒表示它在尖塔内可以隔绝传送的影响，甚至您在传送后忘记它的情况下，它也可以利用您的潜意识来帮忙引导它清理尖塔，并且发掘其中的古物来强化您的脆皮。'], //宇宙2故事消息
    [/^(.*)Z:77 Huffy is cool and all but you miss Fluffy, you should go visit him soon.$/, '$1区域：77 怒怒酷毙了，但您有点想绒绒了，之后找个时间去看看它吧。'], //宇宙2故事消息
    [/^(.*)Z:79 You're a little bit closer to the first Spire. Coming for you, Huffy.$/, '$1区域：79 您离第一个尖塔越来越近了。怒怒，乖乖等着，我来了。'], //宇宙2故事消息
    [/^(.*)Z:82 You thought you saw Druopitee but it was just a tree. On closer inspection it doesn't even look anything like him at all.$/, '$1区域：82 恍惚之间您似乎看到了德罗披提，但实际上那只是一颗树而已。靠近观察以后，那一点也不像他了。'], //宇宙2故事消息
    [/^(.*)Z:85 This zone feels needy, like it wants your help with something.$/, '$1区域：85 这个区域看着像是需要您帮忙做什么似的。'], //宇宙2故事消息
    [/^(.*)Z:90 As you clear another Zone, Scruffy sits you down for another story. Excited to hear more about Fluffy and Scruffy's history together, you listen intently. Scruffy just rambles about gems and how we could be rich selling jewelry then starts dancing. Seems like Scruffy's been fermenting berries again.$/, '$1区域：90 您又通过了一个区域，而污污似乎又有什么想对您说的。您专心地听着它说话，想着是不是还有更多的故事可以听。但污污只是随便聊了些关于宝石和加工珠宝赚大钱之类的话题，然后就开始手舞足蹈了起来。这货只是有点醉了吧。真是醉了。'], //宇宙2故事消息
    [/^(.*)Z:93 Scruffy created some sort of instrument out of a Snimp and some wood that he calls the Riflunger. It makes better music than you expected, but you wouldn't buy any albums.$/, '$1区域：93 污污用一只脆皮蛇和一些木头做成了某种乐器，然后将它取名为利弗朗格。它用来演奏音乐还真的不错，超出了您的预期，不过反正您是不会去买它的专辑的。'], //宇宙2故事消息
    [/^(.*)Z:95 Scruffy lets you know that Fluffy was the first modified Trimp created by Druopitee, and was always Druopitee's favorite. Druopitee was probably extra pissed when Fluffy was the one who rebelled and destroyed a couple Spires, that's probably why he was caged when you found him.$/, '$1区域：95 污污向您表示，绒绒是德罗披提制造的第一个强化脆皮，也是德罗披提最偏爱的一个。所以当绒绒毁掉尖塔时，德罗披提可以说是气得七窍生烟了。或许这就是第一次见面时，绒绒被关在笼子里的原因了。'], //宇宙2故事消息
    [/^(.*)Z:100 There is an extremely chaotic energy flowing around this Zone.$/, '$1区域：100 这个区域的能量流动极为紊乱。'], //宇宙2故事消息
    [/^(.*)Z:101 3 or 4 zones ahead of you, you see the biggest storm you've ever seen in your lives. You'd love to find some way to go around it, but it doesn't seem possible.$/, '$1区域：101 您在3个还是4个区域后看到了迄今为止最大的风暴。您想找找看有没有办法绕过去，但看来是不可能的。'], //宇宙2故事消息
    [/^(.*)Z:105 The storm is raging! Your Trimps are flying eachother as kites.$/, '$1区域：105 暴风雨正在肆虐！您的脆皮像风筝一样，飞得很高。'], //宇宙2故事消息
    [/^(.*)Z:107 You hope Huffy is doing alright back there at the Spire, those Enemies looked pretty scary.$/, '$1区域：107 希望怒怒在尖塔那边没什么问题，那些敌人看起来是真的吓人。'], //宇宙2故事消息
    [/^(.*)Z:110 You feel a sudden urge to repeat something multiple times expecting different results and wonder what that's all about.$/, '$1区域：110 您突然有一种强烈的欲望，想要把什么重复个成千上万次，然后看看会不会有什么不同的结果。这到底是怎么回事？'], //宇宙2故事消息
    [/^(.*)Z:112 Scruffy tells you how glad he is that Huffy had come around, but that he's not as hopeful about Stuffy. Stuffy was stubborn and took any opportunity to prove his loyalty to Druopitee. Guess you'll have to find him and see.$/, '$1区域：112 污污很高兴怒怒选择了现在的道路，但对于闷闷它不是很乐观。闷闷相当顽固不化，对德罗披提也是忠心耿耿。看起来，只能眼见为实了。'], //宇宙2故事消息
    [/^(.*)Z:115 You're having even more trouble than usual trying to control your Trimps here. You and Scruffy debate the pros and cons of asking your Scientists to come up with a mild tranquilizer to put in their food, but you're too busy herding them to come to any conclusion.$/, '$1区域：115 在这附近控制脆皮的难度更大了。您和污污争辩了一会儿，关于要不要让科学家们研发一种能放在食物中的镇静剂，但最后以追不上它们而告终。'], //宇宙2故事消息
    [/^(.*)Z:118 Cruffys tells you about the time he put a bucket of water above one of Druopitee's doors as a prank and got banished from the dimension for it.$/, '$1区域：118 朽朽表示它曾经将一桶水放在了德罗披提的房门上，之后它就因为这个恶作剧而被驱逐到了这个维度。'], //宇宙2故事消息
    [/^(.*)Z:118 Scruffy lets you know that they had another brother named Cruffys who was banished from this dimension before he even had a chance to be assigned a Spire.$/, '$1区域：118 污污表示其实它们还有一个叫做朽朽的兄弟，但在分配尖塔之前它就被驱逐出了这个维度。'], //宇宙2故事消息
    [/^(.*)Z:120 This Zone is filled with bugs and is NOT a great spot to have a picnic.$/, '$1区域：120 这个区域到处都是虫子，很显然，在这里野餐不是什么好主意。'], //宇宙2故事消息
    [/^(.*)Z:124 The next Zone is connected to this one by a large downward sloping hill. All (.+) of your Trimps all tuck themselves into a ball and roll down it, what a sight!$/, '$1区域：124 下个区域与这个区域之间由一个大斜坡连接。您所有的$2个脆皮组成了一个大球，向下滚了下去。何等壮观！'], //宇宙2故事消息
    [/^(.*)Z:130 Scruffy plays his Riflunger while Cruffys sings, and you really wish you had some earplugs or something.$/, '$1区域：130 污污弹着利弗朗格，朽朽在唱歌，而您只觉得它们吵闹。'], //宇宙2故事消息
    [/^(.*)Z:130 You wonder if you'll ever get the chance to meet Cruffys. Maybe your Portal can bring you to his dimension some day.$/, '$1区域：130 您在想有没有什么办法能跟朽朽见个面。或许使用传送门可以到达它所在的维度。'], //宇宙2故事消息
    [/^(.*)Z:133 Some new Trimp reinforcements have brought a Z1 Turtlimp up with them in a box. The Trimps take turns feeding it and they're doing a good job taking care of it!$/, '$1区域：133 一些新来的脆皮用盒子从区域1带了一只脆皮龟过来。脆皮们轮流喂养它，照顾得无微不至。'], //宇宙2故事消息
    [/^(.*)Z:134 One of the Trimps on feeding duty was a bit confused and seems to have eaten the Turtlimp.$/, '$1区域：134 一位负责喂食的脆皮有点迷迷糊糊，把那只脆皮龟吃掉了。'], //宇宙2故事消息
    [/^(.*)Z:140 Huffy pops a quick message into your head to let you know he's doing fine in the Spire!$/, '$1区域：140 怒怒往您的脑子里直接发了一条快讯，它表示它在尖塔中一切顺利。'], //宇宙2故事消息
    [/^(.*)Z:140 Huffy pops a message into your head stating that as much as he likes constantly losing, he would appreciate a little help!$/, '$1区域：140 怒怒往您的脑子里发了一条消息，它表示它一直在输，需要您的帮助。'], //宇宙2故事消息
    [/^(.*)Z:150 As you near a gigantic lake, you notice that this part of the World is becoming filled with wild varieties of plants you've never seen before. You've already taught your Trimps not to eat strange plants, but it looks like it's time for a reminder.$/, '$1区域：150 您靠近了一个巨大的湖泊，附近充满了从未见过的野生植物。您教过脆皮们不要吃什么奇怪的植物，但看来还得再提醒它们一次。'], //宇宙2故事消息
    [/^(.*)Z:155 The plant biodiversity around this Zone is incredible, it feels like this Zone is its own isolated ecosystem. The ground around here must be extremely arable.$/, '$1区域：155 这个区域附近的植物着实多样。感觉这个区域已经自成一片小天地了。何等肥沃的土地啊。'], //宇宙2故事消息
    [/^(.*)Z:160 The lands ahead are barren and undeveloped, but you press on because Huffy really wants some new items.$/, '$1区域：160 前方一片荒芜，但您还是继续前进了，因为怒怒想要弄点什么新鲜玩意来。'], //宇宙2故事消息
    [/^(.*)The voice booms again, and sounds as if it is coming from the walls themselves.$/, '$1声音再次响了起来，听上去像是从墙壁中来的。'], //故事-尖塔消息
    [/^Dammit Druopitee. This is all going to end up being his fault, isn't it\? You help yourself to a container filled with (.*) Helium, and figure he'll owe you a lot more than that once you hear some more.$/, '该死的德罗披提，原来都是你在搞的鬼，不是吗？您装走了一个容器中的$1氦，您觉得这么听下去，他欠您的只会越来越多。'], //故事-尖塔消息
    [/^Yeah you don't really feel too much like bowing and probably won't be doing that. You did however find (.*) more Helium just sitting around, which you feel no qualms about taking.$/, '您不怎么喜欢臣服，也不会那么做的。您在附近找到了$1氦，毫不犹豫地将它带走了。'], //故事-尖塔消息
    [/^(.*)Druopitee collapses to the floor. You were hoping he'd be a little more sane, but whatever. You shut down the corruption device and hope the planet will repair itself soon, then you rummage through his stuff and find keys, surely for the ship!$/, '$1德罗披提倒在了地上。您曾希望他能恢复哪怕一点点的理智，但终究是徒劳。您关闭了腐化装置，希望这个行星能够尽快自我恢复，然后您在他的东西里面翻找了一会儿，找到了几把钥匙，显然是飞船的钥匙！'], //故事-尖塔消息
    [/^(.*)Druopitee collapses to the floor. You were hoping he'd be a little more sane, but whatever. You shut down the corruption device and hope the planet will repair itself soon, then you rummage through his stuff and find keys, surely for the ship! You also find a massive stockpile of$/, '$1德罗披提倒在了地上。您曾希望他能恢复哪怕一点点的理智，但终究是徒劳。您关闭了腐化装置，希望这个行星能够尽快自我恢复，然后您在他的东西里面翻找了一会儿，找到了几把钥匙，显然是飞船的钥匙！您同时发现了'], //故事-尖塔消息
    [/^(.*)Druopitee collapses to the floor. You were hoping he'd be a little more sane, but whatever. You shut down the corruption device and hope the planet will repair itself soon, then you rummage through his stuff and find keys, surely for the ship! Your skills at salvaging things from this Spire have helped you$/, '$1德罗披提倒在了地上。您曾希望他能恢复哪怕一点点的理智，但终究是徒劳。您关闭了腐化装置，希望这个行星能够尽快自我恢复，然后您在他的东西里面翻找了一会儿，找到了几把钥匙，显然是飞船的钥匙！您搜刮尖塔的本事帮助您'], //故事-尖塔消息
    [/^(.*)You found (.*) helium!$/, '$1您发现了$2氦！'], //故事-尖塔消息
    [/^(.*)Everything in this Spire seems less tidy than the last, he never thought the first was something you could pass. You find a small note amongst some Nullifium.$/, '$1这座尖塔中，一切东西都比上一座脏乱了一些，他怕是压根没想到您能通过第一座尖塔。您在一些虚空物质中发现了一份小笔记。'], //故事-尖塔消息
    [/^(.*)As you near the halfway point without too much strife, the Spire itself seems to become alive. You don't know what could be activating it since Druopitee is dead, so you keep your head down and you watch where you tread.$/, '$1您的路途已经近半而一路没什么敌人来妨碍，尖塔本身似乎活了过来。德罗披提已死也没人知道是啥激活了它，所以您只是低头看着脚下。'], //故事-尖塔消息
    [/^There's also some little containers floating a tiny bit off the ground, so you go check em out. You help yourself to a container filled with (.*) Helium!$/, '有一些小容器在离地不远的地方漂浮着，所以您去看了看。随后您装走了其中一个容器中的$1氦！'], //故事-尖塔消息
    [/^(.*)Out of the corner of your eye, you notice a creature who doesn't seem like he belongs. You walk up closer and notice that it's Fluffy! You turn around expecting to see your other Fluffy, but there is only one. You turn back as he waves at you in recognition, you feel a bit lightheaded, but you've had weirder things happen on this planet. You decide to keep moving up the Spire with your new old friend.$/, '$1在您视野的角落，您注意到了一个彷徨的生物。您走近一看，它竟然是绒绒！您回头想看看有没有第二只绒绒，但并没有。您转回来，看到绒绒认出了您，正向您挥手，您有点晕头转向，不过这个行星上您也见过更奇怪的事情了。您决定不管太多，跟新遇见的老朋友一同继续向尖塔高处行进。'], //故事-尖塔消息
    [/^(.*)Out of the corner of your eye, you notice a creature who doesn't seem like he belongs. You walk up closer and notice that it's a Trimp! Only this Trimp is purple instead of blue, obviously a result of some experiments by Druopitee. You let him know not to worry, and that you'll keep him safe. You name him Fluffy, and vow to never let any harm come to him.$/, '$1在您视野的角落，您注意到了一个彷徨的生物。您走近一看，它竟然是一个脆皮！唯一不同的是，它浑身不是蓝色，而是紫色的，显然它是德罗披提什么实验的产物。您设法让它冷静下来，并且让它知道您会保护它。您给它取名为 绒绒 ，您发誓，永远不会让它受到伤害。'], //故事-尖塔消息
    [/^(.*)A humming vibration suddenly fills the air, and a voice booms from the walls.$/, '$1嗡嗡作响的震动突然传遍空气，墙里传来了低沉的声音。'], //故事-尖塔消息
    [/^(.*)Nothing here but a bunch of boxes, so you decide to rummage through them. You found 5 of each type of Nature Token!$/, '$1除了一些盒子以外，此地别无他物，所以您决定翻翻看有什么东西。接着，您发现了数量各为5的三种自然符记！'], //故事-尖塔消息
    [/^It sounds like he's trying to tell you that the Healthy mutation would make your enemies even stronger. Still seems like releasing it would be the right thing to do, though. You figure you'll help yourself to another container filled with (.*) Helium!$/, '看起来，他想告诉您健康变异只会使敌人变得更强。不管怎么说，散播它应该还是没错的。您装走了另一个容器中的$1氦！'], //故事-尖塔消息
    [/^(.*)As the Echo of Druopitee falls, you notice a large tank of some brown looking liquid, and you see pipes and tubes running from it to the top of the Spire. A label on the tank seems to indicate that this is the Healthy mutation and that you shouldn't touch it. But you know that what you want and what Druopitee wants are different things, so you start turning all the nozzles you can find. A fine brown mist begins to spout from the top of the Spire and you can tell that the world is finally healing. Now you just hope he was lying about this making the enemies stronger...  You find a large stockpile of$/, '$1德罗披提的幻影倒下后，您注意到一个装着棕色液体的大罐子，罐子上有许多管道连向尖塔顶部。罐子上的标签表明这里面装着可以引起健康变异的东西，而且您不应该碰它。不过，您知道您与德罗披提不是一路人，所以您开启了所有能找到的喷嘴。尖塔顶部开始喷出一缕缕细小的棕色烟雾，这个世界终于肉眼可见地开始复原了。不过现在您只希望他所谓的健康变异会加强敌人这个说法是个谎言……您发现了 '], //故事-尖塔消息
    [/^(.*)As the Echo of Druopitee falls, you notice a large tank of some brown looking liquid, and you see pipes and tubes running from it to the top of the Spire. A label on the tank seems to indicate that this is the Healthy mutation and that you shouldn't touch it. But you know that what you want and what Druopitee wants are different things, so you start turning all the nozzles you can find. A fine brown mist begins to spout from the top of the Spire and you can tell that the world is finally healing. Now you just hope he was lying about this making the enemies stronger...  You find a$/, '$1德罗披提的幻影倒下后，您注意到一个装着棕色液体的大罐子，罐子上有许多管道连向尖塔顶部。罐子上的标签表明这里面装着可以引起健康变异的东西，而且您不应该碰它。不过，您知道您与德罗披提不是一路人，所以您开启了所有能找到的喷嘴。尖塔顶部开始喷出一缕缕细小的棕色烟雾，这个世界终于肉眼可见地开始复原了。不过现在您只希望他所谓的健康变异会加强敌人这个说法是个谎言……您发现了一个'], //故事-尖塔消息
    [/^(.*)There seems to be a pattern here of each spire looking considerably more trashed than the one before it. The walls feel cold and the vibration inside is very faint. Nobody's watching you, so you dig around looking for some stuff to take. You found 400 Nullifium!$/, '$1每个尖塔都比上一个尖塔更加破败一些，看起来这已经形成规律了。这儿的墙壁摸起来非常冰冷，内部的震动也很微弱。反正也没有谁在看着您，所以您干脆开始在周围翻了起来，想看看有没有什么能用上的东西。最后，您发现了400虚空物质！'], //故事-尖塔消息
    [/^(.*)The vibrations within the walls grow stronger with each step you take towards the top. The air has become noticeably warmer, and you expect the walls to start talking to you again soon. You help yourself to a container filled with (.*) Helium!$/, '$1随着您的逐级前行，墙内的震动越来越强烈了。空气温度明显高了起来，您觉得墙壁很快又要开始喋喋不休了。您装走了一个容器中的$2氦！'], //故事-尖塔消息
    [/^(.*)The vibrations within the walls grow stronger with each step you take towards the top. The air has become noticeably warmer, and you expect the walls to start talking to you again soon.$/, '$1随着您的逐级前行，墙内的震动越来越强烈了。空气温度明显高了起来，您觉得墙壁很快又要开始喋喋不休了。'], //故事-尖塔消息
    [/^(.*)Fluffy suddenly drops to all of his extremities and begins closely inspecting the walls. After a few moments he chooses a location and smashes a hole in it, then pulls a small book out of said hole. Without even opening it up, he eats the book and gains (.*) experience! What a magnificent creature.$/, '$1绒绒突然四肢着地，开始仔细观察墙壁。过了没多久，它选定了一个地方，在那上面捅了个窟窿，然后从里面拿出了一本小书。它看都没看内容，直接就把书吃掉了，因此获得了$2经验值！真是了不起。'], //故事-尖塔消息
    [/^Slaver\?! Your Trimps all know that they're free to leave whenever they want. He's just trying to get under your skin! You figure you'll help yourself to another container filled with (.*) Helium!$/, '奴隶主？！您的脆皮们都知道想要走的话随时都可以走。他不过是想惹毛您！您装走了另一个容器中的$1氦！'], //故事-尖塔消息
    [/^(.*)Well, that's one Druopitee and two Echoes of Druopitee down now. He says that he has infinite Spires and infinite versions of himself, but you could tell at the end there that his Echoes are losing power. You might be able to knock the sentience out of all of his Spires by just clearing one more! You set your sights 100 Zones forward, turn some more nozzles to spread some more Health around the world, you take your helium, spit on the floor of the Spire, and move on.  You find a large stockpile of$/, '$1很好，到现在为止已经干掉三个德罗披提了————一个本体，两个幻影。他声称他的尖塔和幻影是无穷无尽的，但您看得出来，他的幻影也在失去力量。再通过一个尖塔可能就可以把他的意识彻底打散了！您看向前方的100个区域，打开了更多的喷嘴，向世界散播了更多健康变异。您拿走了氦，往地上吐了一口唾沫，拂袖而去。您发现了 '], //故事-尖塔消息
    [/^(.*)Well, that's one Druopitee and two Echoes of Druopitee down now. He says that he has infinite Spires and infinite versions of himself, but you could tell at the end there that his Echoes are losing power. You might be able to knock the sentience out of all of his Spires by just clearing one more! You set your sights 100 Zones forward, turn some more nozzles to spread some more Health around the world, you take your helium, spit on the floor of the Spire, and move on.  You find a$/, '$1很好，到现在为止已经干掉三个德罗披提了————一个本体，两个幻影。他声称他的尖塔和幻影是无穷无尽的，但您看得出来，他的幻影也在失去力量。再通过一个尖塔可能就可以把他的意识彻底打散了！您看向前方的100个区域，打开了更多的喷嘴，向世界散播了更多健康变异。您拿走了氦，往地上吐了一口唾沫，拂袖而去。您发现了一个'], //故事-尖塔消息
    [/^(.*)As you guessed before you even stepped in, this Spire is in even worse condition than the one before. The air is colder, the walls are more still, and there's a feeling of vacancy. Might as well look for stuff to take! You found 800 Nullifium!$/, '$1跟您进来前预料的一致，这个尖塔的情况比上一个还糟糕。这里的空气更加冷冽，墙壁更加静谧，一阵空虚感油然而生。别管了，还是看看有什么可以拿走的吧！您发现了800虚空物质！'], //故事-尖塔消息
    [/^(.*)You wonder if the Echo of Druopitee will even be able to speak anymore. You know he'll be at the top waiting, just like the infinite other Spires, but maybe he'll just leave you be this time. You help yourself to a container filled with (.*) Helium!$/, '$1您也不确信德罗披提的幻影还能不能说话了。您知道他会在塔顶等着，就像其他无数的尖塔一样，但或许这次他不会在路上打扰您了。您装走了一个容器中的$2氦！'], //故事-尖塔消息
    [/^(.*)You wonder if the Echo of Druopitee will even be able to speak anymore. You know he'll be at the top waiting, just like the infinite other Spires, but maybe he'll just leave you be this time.$/, '$1您也不确信德罗披提的幻影还能不能说话了。您知道他会在塔顶等着，就像其他无数的尖塔一样，但或许这次他不会在路上打扰您了。'], //故事-尖塔消息
    [/^(.*)The Spire is warming up again. Maybe Druopitee will make his final appearance soon. You found 1200 Nullifium!$/, '$1尖塔又开始热起来了。或许这是德罗披提最后一次出现了。您发现了1200虚空物质！'], //故事-尖塔消息
    [/^No, there's not. You're almost there. You figure you'll help yourself to another container filled with (.*) Helium!$/, '谈？是没什么好谈了。您都快到塔顶了。您装走了另一个容器中的$1氦！'], //故事-尖塔消息
    [/^(.*)As this third Echo of Druopitee falls, the Spire suddenly feels twice as cold. Druopitee told you that he placed infinite versions of himself in infinite Spires, but his will should no longer be conscious in any of them. You turn another set of knobs to release some more of the Healthy mutation into the world, and you figure there's nothing better to do than to keep looking for more to release. You just wouldn't be surprised to not hear from Druopitee again, at least not in this timeline.  You find a large stockpile of$/, '$1第三个德罗披提的幻影也倒下了，然后尖塔的寒冷程度突然加倍了。德罗披提曾说过在无穷无尽的尖塔中有无穷无尽个他，但之后的那些估计只是行尸走肉了。您转动另一组旋钮，向世界释放了更多健康变异，您觉得没什么比释放更多健康变异更好的了。如果从此德罗披提没法再说话的话，您是不会感到奇怪的，至少这条世界线中如此。您发现了 '], //故事-尖塔消息
    [/^(.*)As this third Echo of Druopitee falls, the Spire suddenly feels twice as cold. Druopitee told you that he placed infinite versions of himself in infinite Spires, but his will should no longer be conscious in any of them. You turn another set of knobs to release some more of the Healthy mutation into the world, and you figure there's nothing better to do than to keep looking for more to release. You just wouldn't be surprised to not hear from Druopitee again, at least not in this timeline.  You find a$/, '$1第三个德罗披提的幻影也倒下了，然后尖塔的寒冷程度突然加倍了。德罗披提曾说过在无穷无尽的尖塔中有无穷无尽个他，但之后的那些估计只是行尸走肉了。您转动另一组旋钮，向世界释放了更多健康变异，您觉得没什么比释放更多健康变异更好的了。如果从此德罗披提没法再说话的话，您是不会感到奇怪的，至少这条世界线中如此。您发现了一个'], //故事-尖塔消息
    [/^(.*)While you walk through the Spire, you whistle a tune. You haven't yet tired, your motivations zoom. As Fluffy checks for loot in this dark, dusty room, you suddenly see fire and hear a huge boom. You found 1600 Nullifium!$/, '$1进入尖塔的时候，您哼着小曲丝毫不怕。精力充沛完全不愁，您的动力越来越大。绒绒在这个阴暗尘封的房间为宝藏而搜查，您却突然看到了火光听到了大爆炸。您发现了1600虚空物质！'], //故事-尖塔消息
    [/^(.*)The fires still grow, but they leave a clear path. Just one direction shown, the thought makes you laugh. Unwisely Druopitee tried to rig this booby trap, but the fire shows the way to go so you thank him for the map. You help yourself to a container filled with (.*) Helium!$/, '$1火焰还在燃烧，却已清出了一条路。如此简单甚至不用动脑，您笑着往前踱步。愚蠢的德罗披提想用陷阱让您停住，却不曾想恰恰是向您提供了地图。您装走了一个容器中的$2氦！'], //故事-尖塔消息
    [/^(.*)The fires still grow, but they leave a clear path. Just one direction shown, the thought makes you laugh. Unwisely Druopitee tried to rig this booby trap, but the fire shows the way to go so you thank him for the map.$/, '$1火焰还在燃烧，却已清出了一条路。如此简单甚至不用动脑，您笑着往前踱步。愚蠢的德罗披提想用陷阱让您停住，却不曾想恰恰是向您提供了地图。'], //故事-尖塔消息
    [/^(.*)Against your better judgment, you continue to climb. Heat fills this dungeon, and doubt fills your mind. You feel a great evil that's long been confined, but with reluctance you move on for the good of Trimpkind. You found 2400 Nullifium!$/, '$1与理性的判断不同，您并没有选择退回。热量重新上涌，疑虑充满了您的思维。您感到前方有个被囚禁的魔鬼，但为了脆皮们您已无路可退。您发现了2400虚空物质！'], //故事-尖塔消息
    [/^(.*)You're close to the top of this large, awful tower. Your fearful thoughts drop, your will is empowered. Luckily you have Fluffy to support you in this hour, you two will never stop until these echoes are devoured.You found a Z600 Heirloom!$/, '$1您靠近了这个巨大而糟糕的尖塔的顶部。恐惧不翼而飞，意志愈加坚固。幸好绒绒还在身旁为您提供帮助，您和它不会停下，除非所有幻影都被消除。您发现了一个相当于区域600掉落的传家宝！'], //故事-尖塔消息
    [/^(.*)The presence here is unique from what you felt before. You know it can't speak but it's not done for. An intrusive thought knocks on your mind's back door$/, '$1这里的它跟之前不一样。您知道它已经不能说话，但它并没有灭亡。脑海中一个闯入的声音愈发明朗'], //故事-尖塔消息
    [/^(.*)Another thought enters your mind, this time louder than before$/, '$1您的脑海里响起了另一个声音，这次更加歇斯底里'], //故事-尖塔消息
    [/^Even in death this guy's a dick. You figure you'll help yourself to another container filled with (.*) Helium!$/, '这家伙都死了还不消停。您装走了另一个容器中的$1氦！'], //故事-尖塔消息
    [/^(.*)As yet another Echo of Druopitee fades into nothingness, you feel something urging you to check underneath a loose stone in the corner of the room. After lifting it up, you find a small notebook with the words "Global Domination" written on it. The text all seems to be in Druopitee's handwriting, which you instantly recognize from the books you've found around the planet. The first few pages all discuss Druopitee's success with various creatures here, followed by multiple pages documenting failures at attempts to control the Trimps. The very last page with any writing in it indicates that Druopitee intended to create leaders they'd be more likely to follow, by creating clones of himself mixed with varying amounts of Trimp DNA. Is this where Fluffy came from\?!  You find a large stockpile of$/, '$1又一个德罗披提的幻影被抹杀了，您感觉好像有什么驱使着您检查房间角落一块松动的石头下面。把石头搬开以后，您发现了一本写着《主宰世界》的小笔记本。您立刻认出了里面是德罗披提的字迹，跟行星上找到的那些书一致。前面几页写着关于成功制造了许多生物的事，接着又写了控制脆皮失败的事。最后几页的只言片语中，可以看出德罗披提想要制造一个它们更可能跟随的领袖，因此他将自己的DNA与脆皮的混合后，制造出了一些复制体。难道绒绒就是这么来的吗？！您发现了 '], //故事-尖塔消息
    [/^(.*)As yet another Echo of Druopitee fades into nothingness, you feel something urging you to check underneath a loose stone in the corner of the room. After lifting it up, you find a small notebook with the words "Global Domination" written on it. The text all seems to be in Druopitee's handwriting, which you instantly recognize from the books you've found around the planet. The first few pages all discuss Druopitee's success with various creatures here, followed by multiple pages documenting failures at attempts to control the Trimps. The very last page with any writing in it indicates that Druopitee intended to create leaders they'd be more likely to follow, by creating clones of himself mixed with varying amounts of Trimp DNA. Is this where Fluffy came from\?!  You find a$/, '$1又一个德罗披提的幻影被抹杀了，您感觉好像有什么驱使着您检查房间角落一块松动的石头下面。把石头搬开以后，您发现了一本写着《主宰世界》的小笔记本。您立刻认出了里面是德罗披提的字迹，跟行星上找到的那些书一致。前面几页写着关于成功制造了许多生物的事，接着又写了控制脆皮失败的事。最后几页的只言片语中，可以看出德罗披提想要制造一个它们更可能跟随的领袖，因此他将自己的DNA与脆皮的混合后，制造出了一些复制体。难道绒绒就是这么来的吗？！您发现了一个'], //故事-尖塔消息
    [/^Well that doesn't really sound like a bad thing. You found 200 Nullifium!$/, '嗯，听起来不坏。您发现了200虚空物质！'], //故事-尖塔消息，前置
    [/^That didn't seem very coherent. It seems like destroying his Echo in the last Spire has made some sort of impact. You found 600 Nullifium!$/, '这话听起来不怎么有条理。看起来上个尖塔中摧毁的幻影造成了某些影响。您发现了600虚空物质！'], //故事-尖塔消息，前置
    [/^(.*)You found (.*) Nullifium!$/, '$1您发现了$2虚空物质！'], //故事-尖塔消息
    [/^(.*)You help yourself to a container filled with (.*) Helium!$/, '$1您装走了一个容器中的$2氦！'], //故事-尖塔消息
    [/^Well, you definitely want to get your hands on some of that Healthy mutation now. You found a Z400 Heirloom!$/, '很好，从此刻起您要认真考虑怎么引起健康变异了。您发现了一个相当于区域400掉落的传家宝！'], //故事-尖塔消息，前置
    [/^At least he's gained enough consciousness back to continue with the threats. You know that now is not the time to back down. You found a Z400 Heirloom!$/, '至少他又清醒起来，能够继续威胁您了。您知道，现在只能寸步不让了。您发现了一个相当于区域400掉落的传家宝！'], //故事-尖塔消息，前置
    [/^No thanks, Druopitee. It's kinda nice to see him scared though! You found a Z500 Heirloom!$/, '别逗了，德罗披提。看他慌成这样真是太爽了！您发现了一个相当于区域500掉落的传家宝！'], //故事-尖塔消息，前置
    [/^(.*)You found a Z(.*) Heirloom!$/, '$1您发现了一个相当于区域$2掉落的传家宝！'], //故事-尖塔消息
    [/^His Spires might be infinite, but it's not possible for his consciousness to be. You decide you'll worry about the rest of the spires once you've beaten Druopitee into nothingness. You found 10 of each type of Nature Token!$/, '他的尖塔可能是无穷无尽的，但他的意识绝对不可能是的。您决定先彻底抹杀了德罗披提再来考虑剩下的尖塔怎么办。您发现了数量各为10的三种自然符记！'], //故事-尖塔消息，前置
    [/^Yes, that was becoming pretty obvious. His mind must really be decaying fast if he thought this admission would be anything other than motivating. You found 15 of each type of Nature Token!$/, '是啊，这太明显了。他的意识一定是在快速衰亡，他竟然觉得这样的话不是在鼓励。您发现了数量各为15的三种自然符记！'], //故事-尖塔消息，前置
    [/^(.*)You found (.*) of each type of Nature Token!$/, '$1您发现了数量各为$2的三种自然符记！'], //故事-尖塔消息
    [/^(.*)You figure you'll help yourself to another container filled with (.*) Helium!$/, '$1您装走了另一个容器中的$2氦！'], //故事-尖塔消息
    [/^It sounds like he's trying to tell you that the Healthy mutation would make your enemies even stronger. Still seems like releasing it would be the right thing to do, though. You search around for some more resources but find nothing. Lame.$/, '看起来，他想告诉您健康变异只会使敌人变得更强。不管怎么说，散播它应该还是没错的。您在附近找了找，什么有用的资源都没找到。真是弱爆了。'], //故事-尖塔消息，前置
    [/^Slaver\?! Your Trimps all know that they're free to leave whenever they want. He's just trying to get under your skin! You search around for some more resources but find nothing. Lame.$/, '奴隶主？！您的脆皮们都知道想要走的话随时都可以走。他不过是想惹毛您！您在附近找了找，什么有用的资源都没找到。真是弱爆了。'], //故事-尖塔消息，前置
    [/^No, there's not. You're almost there. You search around for some more resources but find nothing. Lame.$/, '谈？是没什么好谈了。您都快到塔顶了。您在附近找了找，什么有用的资源都没找到。真是弱爆了。'], //故事-尖塔消息，前置
    [/^Even in death this guy's a dick. You search around for some more resources but find nothing. Lame.$/, '这家伙都死了还不消停。您在附近找了找，什么有用的资源都没找到。真是弱爆了。'], //故事-尖塔消息，前置
    [/^(.*)You search around for some more resources but find nothing. Lame.$/, '$1您在附近找了找，什么有用的资源都没找到。真是弱爆了。'], //故事-尖塔消息
    [/^(.*)You find a large stockpile of$/, '$1您发现了 '], //故事-尖塔消息
    [/^(.*)You find a$/, '$1您发现了一个'], //故事-尖塔消息
    [/^At the top of this Spire, you found a gigantic, pitch-black cache with (.*) Dark Essence inside, just enough to complete your entire collection!$/, '在尖塔顶部，您发现了一个巨大的黑箱子，里面装着$1黑暗精华，正好足够您升级所有的专精！'], //故事-尖塔消息
    [/^(.*)As you're leaving, you find (.*) helium!$/, '$1离开时，您发现了$2氦！'], //故事-尖塔消息
    [/^(.*)Due to an error occuring, saving has been disabled to prevent corruption$/, '$1由于发生错误，为了防止崩溃，已禁止保存'], //其他消息等
    [/^(.*)Game Saved!$/, '$1游戏已保存！'], //其他消息等
    [/^(.*)For some reason, your game is not saving. Make sure you export and back up your save!$/, '$1由于某些原因，游戏未能保存。请手动导出游戏存档并妥善保管！'], //其他消息等
    [/^(.*)Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.$/, '$1很抱歉，您的浏览器缓存已崩溃。请清除浏览器缓存后再重试。'], //其他消息等
    [/^(.*)It looks like your import code isn't working properly. Please make sure that your export code is saved in a text file compatible with all of the characters. If you believe this code should be working, you can Email it to Trimpsgame@gmail.com and I will do my best to restore it for you!$/, '$1您的导入代码似乎有问题。请确认您的代码输入完整没有遗漏。如果您确定代码本身没有问题的话，请将代码发至 Trimpsgame@gmail.com ，我会尽全力为您修复的。'], //其他消息等
    [/^(.*)Your browser is preventing Trimps from accessing localStorage, and you will not be able to save or load your progress. Please check your browser settings to ensure that 3rd party cookies are not disabled, and that you're not using any addons that might interrupt storage!$/, '$1浏览器阻止了游戏读取本地缓存，因此您无法保存或者载入游戏进度。请检查浏览器设置及插件设置！'], //其他消息等
    [/^(.*)You can't import a save from the beta version to this version!$/, '$1您无法将beta版本游戏的存档导入此版本的游戏中！'], //其他消息等
    [/^(.*)Your save file is from a newer version of Trimps \(v(.*)\) than what your computer is running \(v(.*)\). Refresh or restart your browser!$/, '$1您的游戏版本为$3，而您的存档版本则为更新的$2。请刷新或重启浏览器！'], //其他消息等
    [/^(.*)I'm so terribly sorry, but your previous save game \(version (.*)\) does not work in the new version. This should be the last reset!$/, '$1非常抱歉，但之前$2版本的存档无法在新版本中使用。这绝对是最后一次了！'], //其他消息等
    [/^(.*)Note: You are playing on the beta\/dev version. You will be unable to export your save from this version to the live version, and this server may go down or change without warning. Thank you for helping test!$/, '$1注意：您目前的游戏为beta/开发专用版本。此版本中的存档无法导入正式版游戏中，而且服务器可能在没有预先通知的情况下关闭或变动。感谢您帮忙测试！'], //其他消息等
    [/^Lv:(\s)$/, '等级：'], //其他消息等
    [/^(.*) stack(s*) of Equality are active, reducing the Attack of Trimps and Bad Guys by (.*)%.$/, '已激活$1层平等，同时将您的脆皮和敌人的攻击力减少$3%。'], //其他消息等
    [/^Max \((.*)$/, '最大($1'], //其他消息等
    [/^will cause the world to return to normal. You$/, '后世界将恢复原样。您同时 '], //挑战，前置
    [/^(.*)You$/, '$1您'], //其他消息等
    [/^(.*)You open the Large Cache at the end of the map to find (.*) food!$/, '$1您打开了地图最后的大储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)You open the Large Cache at the end of the map to find (.*) wood!$/, '$1您打开了地图最后的大储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)You open the Large Cache at the end of the map to find (.*) metal!$/, '$1您打开了地图最后的大储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)You open the Small Savory Cache at the end of the map to find (.*) food!$/, '$1您打开了地图最后的小美味储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)You open the Small Wooden Cache at the end of the map to find (.*) wood!$/, '$1您打开了地图最后的小木头储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)You open the Small Metal Cache at the end of the map to find (.*) metal!$/, '$1您打开了地图最后的小金属储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)You open the Small Research Cache at the end of the map to find (.*) science!$/, '$1您打开了地图最后的小研究储藏箱，获得了$2科学点！'], //其他消息等
    [/^(.*)You open the Huge Cache at the end of the map to find (.*) food!$/, '$1您打开了地图最后的巨大储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)You open the Huge Cache at the end of the map to find (.*) wood!$/, '$1您打开了地图最后的巨大储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)You open the Huge Cache at the end of the map to find (.*) metal!$/, '$1您打开了地图最后的巨大储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)You open the Large Savory Cache at the end of the map to find (.*) food!$/, '$1您打开了地图最后的大美味储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)You open the Large Wooden Cache at the end of the map to find (.*) wood!$/, '$1您打开了地图最后的大木头储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)You open the Large Metal Cache at the end of the map to find (.*) metal!$/, '$1您打开了地图最后的大金属储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)You open the Large Research Cache at the end of the map to find (.*) science!$/, '$1您打开了地图最后的大研究储藏箱，获得了$2科学点！'], //其他消息等
    [/^(.*)Fluffy found another Large Cache with another (.*) food!$/, '$1绒绒发现了另一个大储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)Fluffy found another Large Cache with another (.*) wood!$/, '$1绒绒发现了另一个大储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)Fluffy found another Large Cache with another (.*) metal!$/, '$1绒绒发现了另一个大储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)Fluffy found another Small Savory Cache with another (.*) food!$/, '$1绒绒发现了另一个小美味储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)Fluffy found another Small Wooden Cache with another (.*) wood!$/, '$1绒绒发现了另一个小木头储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)Fluffy found another Small Metal Cache with another (.*) metal!$/, '$1绒绒发现了另一个小金属储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)Fluffy found another Small Research Cache with another (.*) science!$/, '$1绒绒发现了另一个小研究储藏箱，获得了$2科学点！'], //其他消息等
    [/^(.*)Fluffy found another Huge Cache with another (.*) food!$/, '$1绒绒发现了另一个巨大储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)Fluffy found another Huge Cache with another (.*) wood!$/, '$1绒绒发现了另一个巨大储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)Fluffy found another Huge Cache with another (.*) metal!$/, '$1绒绒发现了另一个巨大储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)Fluffy found another Large Savory Cache with another (.*) food!$/, '$1绒绒发现了另一个大美味储藏箱，获得了$2食物！'], //其他消息等
    [/^(.*)Fluffy found another Large Wooden Cache with another (.*) wood!$/, '$1绒绒发现了另一个大木头储藏箱，获得了$2木头！'], //其他消息等
    [/^(.*)Fluffy found another Large Metal Cache with another (.*) metal!$/, '$1绒绒发现了另一个大金属储藏箱，获得了$2金属！'], //其他消息等
    [/^(.*)Fluffy found another Large Research Cache with another (.*) science!$/, '$1绒绒发现了另一个大研究储藏箱，获得了$2科学点！'], //其他消息等
    [/^(.*)You must create a map between level 6 and your highest Zone, (.*).$/, '$1您只能制造6级到您最高区域$2级之间等级的地图。'], //其他消息等
    [/^(.*)Woah, that's a lot of maps. You're certain your Scientists will just lose them if you make any more. Better recycle a few of them, it's good for the environment anyways.$/, '$1哇哦，地图也太多了。再制造下去就要被科学家们白白扔掉了。最好还是回收一些吧，这也是为了环保。'], //其他消息等
    [/^(.*)You can't afford this map! You need (.*) fragments.$/, '$1您的碎片不够，无法制造此地图！您需要$2碎片。'], //其他消息等
    [/^(.*)A chill runs down your spine, and the Bad Guy quickly frosts over. A purple glow radiates from the ground in front of you, and a Void Map appears.$/, '$1您突然感到一阵寒意，然后，敌人很快就被冰霜覆盖了。您面前的地上散发出一道紫色的光，随后，出现了一张虚空地图。'], //其他消息等
    [/^(.*)The corruption quickly swirls into the air and dissipates.$/, '$1腐化的空气飘向天空，消散了。'], //其他消息等
    [/^You see (.*) canisters of Helium left on the ground and pick them up. Useful!$/, '您在地上发现了$1氦。一定会派上用场的！'], //其他消息等
    [/^(.*)The land looks even healthier now that the Bad Guy is dead!$/, '$1健康敌人死了，这里看起来甚至更健康了！'], //其他消息等
    [/^You find (.*) canisters of Helium and figure it was worth it.$/, '您发现了$1氦，您觉得这很值。'], //其他消息等
    [/^(.*)Recycled (.*) maps for (.*) fragments.$/, '$1回收了$2张地图，获得$3碎片。'], //其他消息等
    [/^(.*)Recycled (.*) for (.*) fragments.$/, '$1回收了一张地图，获得$3碎片。'], //其他消息等
    [/^(.*) Map Credit(s*)$/, '$1地图代币'], //其他消息等
    [/^(.*)Waiting to travel until your soldiers are finished.$/, '$1等待士兵战死。'], //其他消息等
    [/^(.*)You must finish or recycle your current map before moving on.$/, '$1在运行其他地图前，必须先完成或者回收当前的地图。'], //其他消息等
    [/^(.*)You are all out of Map Credits! Clear some more Zones to earn some more.$/, '$1地图代币已经花完了！再通过一些的区域以获得地图代币。'], //其他消息等
    [/^(.*)A small black hole opens up in the sky and a shrill noise echoes across the town. A few moments later, an Amalgamator is standing in front of you. It looks around briefly, grabs a few Trimps, and runs off towards your soldiers.$/, '$1天空中出现了一个小黑洞，刺耳的杂音到处回响着。过了一会儿，一个合并者站在了您的面前。它稍微往左右看了看，提起一些脆皮向着士兵们冲了过去。'], //其他消息等
    [/^(.*)A small black hole opens up in the sky and a shrill noise echoes across the town. A few moments later, another Amalgamator is standing in front of you. It looks around briefly, grabs a few Trimps, and runs off towards your soldiers.$/, '$1天空中出现了一个小黑洞，刺耳的杂音到处回响着。过了一会儿，又一个合并者站在了您的面前。它稍微往左右看了看，提起一些脆皮向着士兵们冲了过去。'], //其他消息等
    [/^(.*)While out walking a Trimp, you suddenly find yourself teleported back to your ship, standing face to face with an Amalgamator. You introduce yourself but it doesn't seem up for conversation.$/, '$1您本来是正在外面转悠的，却突然被传送回了飞船，跟一个合并者大眼瞪小眼。您向它做了自我介绍，但它看起来对此毫无兴趣。'], //其他消息等
    [/^(.*)While out walking a Trimp, you suddenly find yourself teleported back to your ship, standing face to face with another Amalgamator. You introduce yourself but it doesn't seem up for conversation.$/, '$1您本来是正在外面转悠的，却突然被传送回了飞船，跟又一个合并者大眼瞪小眼。您向它做了自我介绍，但它看起来对此毫无兴趣。'], //其他消息等
    [/^(.*)Suddenly, the largest rain drops you've ever seen start falling from the sky - each drop is at least 1000 times larger than normal. One particularly large drop hits the ground and an Amalgamator pops out! It sends out a quick telepathic greeting, then goes off to find your Trimps.$/, '$1突然，下起了您生平见过最大的雨 - 每个雨滴是正常的1000倍大小。一滴超级大的雨落到了地面，蹦出了一个合并者！它用心灵感应迅速向您问了个好，然后就去找您的脆皮们了。'], //其他消息等
    [/^(.*)Suddenly, the largest rain drops you've ever seen start falling from the sky - each drop is at least 1000 times larger than normal. One particularly large drop hits the ground and another Amalgamator pops out! It sends out a quick telepathic greeting, then goes off to find your Trimps.$/, '$1突然，下起了您生平见过最大的雨 - 每个雨滴是正常的1000倍大小。一滴超级大的雨落到了地面，蹦出了又一个合并者！它用心灵感应迅速向您问了个好，然后就去找您的脆皮们了。'], //其他消息等
    [/^(.*)You're sitting down about to enjoy a rare dinner break, when an Amalgamator gets interested in your dimension and replaces the spacetime of your meal with itself. You really hope they don't do that again.$/, '$1您难得有空享用一顿晚餐，正准备坐下来时，一个合并者突然对您的维度产生了兴趣，将它与您的晚餐在时空上作了个对调。您真诚希望下次它们别再这么干了。'], //其他消息等
    [/^(.*)You're sitting down about to enjoy a rare dinner break, when another Amalgamator gets interested in your dimension and replaces the spacetime of your meal with itself. You really hope they don't do that again.$/, '$1您难得有空享用一顿晚餐，正准备坐下来时，又一个合并者突然对您的维度产生了兴趣，将它与您的晚餐在时空上作了个对调。您真诚希望下次它们别再这么干了。'], //其他消息等
    [/^(.*)As you're helping your Trimps cross a deeper-than-average stream, you notice a column of bubbles coming up near your Trimps. A gurgling sound begins to grow from the source of the bubbles, and your Trimps start to get a little freaked out. Suddenly an Amalgamator bursts to the surface, spits some water at a Trimp, then teleports to your town.$/, '$1您正在帮忙脆皮们渡过一条有点深的小溪时，发现在脆皮身旁冒出来一大堆气泡。接着，气泡开始汩汩作响，脆皮们有点慌了。突然，从水里钻出来一个合并者，把水吐得一个脆皮满脸都是，然后传送到您的城镇里了。'], //其他消息等
    [/^(.*)As you're helping your Trimps cross a deeper-than-average stream, you notice a column of bubbles coming up near your Trimps. A gurgling sound begins to grow from the source of the bubbles, and your Trimps start to get a little freaked out. Suddenly another Amalgamator bursts to the surface, spits some water at a Trimp, then teleports to your town.$/, '$1您正在帮忙脆皮们渡过一条有点深的小溪时，发现在脆皮身旁冒出来一大堆气泡。接着，气泡开始汩汩作响，脆皮们有点慌了。突然，从水里钻出来又一个合并者，把水吐得一个脆皮满脸都是，然后传送到您的城镇里了。'], //其他消息等
    [/^(.*)You hear the second or third most chilling sound you've ever heard, and your Amalgamator pops up in front of you. It smacks you with a small stick to show dissatisfaction, then disappears in a puff of smoke.$/, '$1您听到了有生以来第二或者第三可怕的声响，然后您的合并者出现在了您的跟前。它用一根小棍狠狠敲了您一下以示不满，随后，它化成一阵烟，消失了。'], //其他消息等
    [/^(.*)You hear the second or third most chilling sound you've ever heard, and one of your Amalgamators pops up in front of you. It smacks you with a small stick to show dissatisfaction, then disappears in a puff of smoke.$/, '$1您听到了有生以来第二或者第三可怕的声响，然后您的一个合并者出现在了您的跟前。它用一根小棍狠狠敲了您一下以示不满，随后，它化成一阵烟，消失了。'], //其他消息等
    [/^(.*)While walking through your town, you notice your Amalgamator throwing a fit, kicking over food carts and anything else not tied down. You approach it but before you can ask what's wrong, it smacks you with a small stick to show dissatisfaction, then it scurries away.$/, '$1在城镇里走着时，您注意到您的合并者在大发脾气，把食品推车之类的东西全给踢倒了。您走上前去，刚想问问哪里不对，它就用一根小棍狠狠敲了您一下以示不满，然后就匆匆离去了。'], //其他消息等
    [/^(.*)While walking through your town, you notice one of your Amalgamators throwing a fit, kicking over food carts and anything else not tied down. You approach it but before you can ask what's wrong, it smacks you with a small stick to show dissatisfaction, then it scurries away.$/, '$1在城镇里走着时，您注意到您的一个合并者在大发脾气，把食品推车之类的东西全给踢倒了。您走上前去，刚想问问哪里不对，它就用一根小棍狠狠敲了您一下以示不满，然后就匆匆离去了。'], //其他消息等
    [/^(.*)You watch as your Amalgamator struggles to find enough free Trimps, panic searching in places such as under rocks or between the leaves of trees. It suddenly seems to remember that it doesn't have to be there, smacks you with a small stick to show dissatisfaction, and turns into nothing.$/, '$1您看着您的合并者到处寻找空闲的脆皮，它翻遍了各处，甚至连石头下和树叶间它都找遍了，却一无所获。它突然想明白了，也不是非得在这里才行，于是它用一根小棍狠狠敲了您一下以示不满，然后归于虚无了。'], //其他消息等
    [/^(.*)You watch as one of your Amalgamators struggles to find enough free Trimps, panic searching in places such as under rocks or between the leaves of trees. It suddenly seems to remember that it doesn't have to be there, smacks you with a small stick to show dissatisfaction, and turns into nothing.$/, '$1您看着您的一个合并者到处寻找空闲的脆皮，它翻遍了各处，甚至连石头下和树叶间它都找遍了，却一无所获。它突然想明白了，也不是非得在这里才行，于是它用一根小棍狠狠敲了您一下以示不满，然后归于虚无了。'], //其他消息等
    [/^(.*)While in town, a Scientist approaches you to let you know that your Amalgamator is getting upset and to keep an eye out for him. Just as you're finishing the conversation, the Amalgamator appears in front of you. It smacks you both with a small stick to show dissatisfaction, then turns into a small puddle of water - which you ask the Scientist to clean up.$/, '$1城镇中，一名科学家跑到了您身边，告诉您，您的合并者有点失望了，最好注意着它。话音刚落，那个合并者就在您面前出现了，它用一根小棍狠狠敲了您和科学家一下以示不满，然后化为了一摊水 - 最后还得让科学家来善后。'], //其他消息等
    [/^(.*)While in town, a Scientist approaches you to let you know that one of your Amalgamators is getting upset and to keep an eye out for him. Just as you're finishing the conversation, the Amalgamator appears in front of you. It smacks you both with a small stick to show dissatisfaction, then turns into a small puddle of water - which you ask the Scientist to clean up.$/, '$1城镇中，一名科学家跑到了您身边，告诉您，您的一个合并者有点失望了，最好注意着它。话音刚落，那个合并者就在您面前出现了，它用一根小棍狠狠敲了您和科学家一下以示不满，然后化为了一摊水 - 最后还得让科学家来善后。'], //其他消息等
    [/^(.*)You have no more use for Dark Essence!$/, '$1黑暗精华对您来说已经没有用处了！'], //其他消息等
    [/^(.*)You found (.*) Dark Essence!$/, '$1您发现了$2黑暗精华！'], //其他消息等
    [/^(.*)You liquified a $/, '$1您彻底液化了一个'], //其他消息等
    [/^Resources Found: Helium - (.*), Max Trimps - (.*), Fragments - (.*), Food - (.*), Wood - (.*), Metal -$/, '获得资源：氦 - $1，脆皮上限 - $2，碎片 - $3，食物 - $4，木头 - $5，金属 -'], //其他消息等
    [/^Resources Found: Helium - (.*), Max Trimps - (.*), Fragments -$/, '获得资源：氦 - $1，脆皮上限 - $2，碎片 -'], //其他消息等
    [/^Resources Found: Helium - (.*), Food - (.*), Wood - (.*), Metal -$/, '获得资源：氦 - $1，食物 - $2，木头 - $3，金属 -'], //其他消息等
    [/^Resources Found: Max Trimps - (.*), Fragments - (.*), Food - (.*), Wood - (.*), Metal -$/, '获得资源：脆皮上限 - $1，碎片 - $2，食物 - $3，木头 - $4，金属 -'], //其他消息等
    [/^Resources Found: Max Trimps - (.*), Fragments -$/, '获得资源：脆皮上限 - $1，碎片 -'], //其他消息等
    [/^Resources Found: Food - (.*), Wood - (.*), Metal -$/, '获得资源：食物 - $1，木头 - $2，金属 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Tauntimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮咚咚 - $3，脆皮爱神 - $4，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Tauntimp - (.*), Venimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮咚咚 - $3，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Tauntimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮咚咚 - $3，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮爱神 - $3，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Tauntimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮咚咚 - $2，脆皮爱神 - $3，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Tauntimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮咚咚 - $2，脆皮爱神 - $3，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Tauntimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮咚咚 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Venimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Tauntimp - (.*), Venimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮咚咚 - $2，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Tauntimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮咚咚 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮爱神 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Tauntimp - (.*), Venimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮咚咚 - $2，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Tauntimp - (.*), Whipimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮咚咚 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮爱神 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Tauntimp - (.*), Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮咚咚 - $1，脆皮爱神 - $2，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Magnimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮磁王 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Tauntimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮咚咚 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Venimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Feyimp - (.*), Whipimp -$/, '稀有脆皮：脆皮小妖 - $1，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Tauntimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮咚咚 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Venimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Magnimp - (.*), Whipimp -$/, '稀有脆皮：脆皮磁王 - $1，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Tauntimp - (.*), Venimp -$/, '稀有脆皮：脆皮咚咚 - $1，脆皮爱神 -'], //其他消息等
    [/^Rare Imps: Tauntimp - (.*), Whipimp -$/, '稀有脆皮：脆皮咚咚 - $1，脆皮鞭者 -'], //其他消息等
    [/^Rare Imps: Venimp - (.*), Whipimp -$/, '稀有脆皮：脆皮爱神 - $1，脆皮鞭者 -'], //其他消息等
    [/^Found (.*) Token(s*) of Poison!$/, '发现了$1毒符记！'], //其他消息等
    [/^Found (.*) Token(s*) of Wind!$/, '发现了$1风符记！'], //其他消息等
    [/^Found (.*) Token(s*) of Ice!$/, '发现了$1冰符记！'], //其他消息等
    [/^(.*)The Magma has solidified into impenetrable Obsidian; your Trimps have no hope of progressing here right now.$/, '$1岩浆凝固成了无法穿越的黑曜石，您的脆皮目前是无法通过的。'], //其他消息等
    [/^(.*)The Magma has solidified into impenetrable Obsidian; your Trimps have no hope of progressing here right now. Fluffy has an idea for remelting the world, but it will take a tremendous amount of energy from a place Fluffy isn't yet powerful enough to send you. Fluffy asks you to help him reach the$/, '$1岩浆凝固成了无法穿越的黑曜石，您的脆皮目前是无法通过的。绒绒想到了一个法子，但是需要极其大量的能量，而绒绒目前还没法送您到可以获取那样能量的地方。所以绒绒请您将它升级到'], //其他消息等
    [/^(.*)The Magma has solidified into impenetrable Obsidian; your Trimps have no hope of progressing here right now. However, all is not lost! Every 50 Zones of progress you make in the Radon Universe will allow you to harness enough energy for Fluffy to slow down the hardening of your World for an extra 10 Zones in this Universe.$/, '$1岩浆凝固成了无法穿越的黑曜石，您的脆皮目前是无法通过的。不过，这并不代表着您就束手无策了！每在氡之宇宙中通过50个区域，您就可以获取到足够的能量，使绒绒可以延缓当前宇宙10个区域变成黑曜石。'], //其他消息等
    [/^(.*)The Magma has solidified into impenetrable Obsidian; your Trimps have no hope of progressing here right now. However, all is not lost! Every 10 Zones of progress you make in the Radon Universe will allow you to harness enough energy for Fluffy to slow down the hardening of your World for an extra 10 Zones in this Universe.$/, '$1岩浆凝固成了无法穿越的黑曜石，您的脆皮目前是无法通过的。不过，这并不代表着您就束手无策了！每在氡之宇宙中通过10个区域，您就可以获取到足够的能量，使绒绒可以延缓当前宇宙10个区域变成黑曜石。'], //其他消息等
    [/^(.*)Recycled Bionic Wonderland(.*).$/, '$1回收了仿生仙境$2地图。'], //其他消息等
    [/^(.*)You're not yet ready. Maybe you'll be of use in the next lifetime.$/, '$1您只是在自寻死路。或许下一世您能准备好了。'], //其他消息等
    [/^(.*) group(s*) of Trimps ha(s|ve) perished in the Spire.$/, '$1队脆皮们倒在了尖塔中。'], //其他消息等
    [/^(.*)Sorry$/, '$1很抱歉'], //其他消息等
    [/^(.*)Heavy use of the portal has created a chance for the Void to seep into your world. Be alert.$/, '$1多次使用传送门后，虚空开始渗入您的世界了。保持警惕。'], //其他消息等
    [/^(.*)Get a leg up with PANTS! Until your next trou... browser refresh, you can enable the useless but stylish PANTS ONLY AutoPrestige setting! Denim-ite!$/, '$1胖次最好了，什么头套胖次之类的更是……咳咳，直到下次刷新页面之前您都可以使用这个没什么卵用但是很绅士的自动重铸设置了！蓝！白！碗！'], //其他消息等
    [/^(.*)Loaded Eggy event!$/, '$1复活节活动开始啦！'], //其他消息等
    [/^(.*)Loaded Pumpkimp event!$/, '$1万圣节活动开始啦！'], //其他消息等
    [/^(.*)Loaded Snowy event!$/, '$1圣诞节活动开始啦！'], //其他消息等
    [/^(.*)Eggy event has come to an end!$/, '$1复活节活动结束了！'], //其他消息等
    [/^(.*)Pumpkimp event has come to an end!$/, '$1万圣节活动结束了！'], //其他消息等
    [/^(.*)Snowy event has come to an end!$/, '$1圣诞节活动结束了！'], //其他消息等
    [/^(.*)Please use a number greater than 0!$/, '$1请输入大于0的数字！'], //其他消息等
    [/^(.*)AutoTrimps - Zek Fork Loaded!$/, '$1自动脆皮脚本 - Zek Fork 已成功载入！'], //脚本载入消息
    [/^(.*)Adding dark-graph.css file$/, '$1黑暗图表已开启'], //脚本图表消息
    [/^(.*)Removing dark-graph.css file$/, '$1黑暗图表已关闭'], //脚本图表消息
    [/^(.*)Theme change - AutoTrimps styles updating...$/, '$1游戏主题改变 - 自动脆皮脚本样式更新中……'], //脚本图表消息
    [/^(.*)Starting Zone$/, '$1进入区域'], //脚本图表消息
    [/^Food Per Second$/, '每秒食物获取量'], //主界面，前置
    [/^Wood Per Second$/, '每秒木头获取量'], //主界面，前置
    [/^Metal Per Second$/, '每秒金属获取量'], //主界面，前置
    [/^Science Per Second$/, '每秒科学点获取量'], //主界面，前置
    [/^Gems Per Second$/, '每秒宝石获取量'], //主界面，前置
    [/^Fragments Per Second$/, '每秒碎片获取量'], //主界面，前置
    [/^Trimps Per Second$/, '每秒脆皮获取量'], //主界面，前置
    [/^Runestones per Second$/, '每秒符石'], //尖塔，前置
    [/^SS: Seconds$/, '节约铁匠铺：秒数'], //脚本等，前置
    [/^(.*) Second(s*)$/, '$1 秒'], //脚本图表
    [/^Portal (.*): Daily$/, '传送门$1：日常'], //脚本图表
    [/^Portal (.*): Discipline$/, '传送门$1：纪律'], //脚本图表
    [/^Portal (.*): Metal$/, '传送门$1：金属'], //脚本图表
    [/^Portal (.*): Size$/, '传送门$1：尺寸'], //脚本图表
    [/^Portal (.*): Balance$/, '传送门$1：平衡'], //脚本图表
    [/^Portal (.*): Scientist$/, '传送门$1：科学家'], //脚本图表
    [/^Portal (.*): Meditate$/, '传送门$1：冥想'], //脚本图表
    [/^Portal (.*): Decay$/, '传送门$1：衰变'], //脚本图表
    [/^Portal (.*): Trimp$/, '传送门$1：脆皮'], //脚本图表
    [/^Portal (.*): Trapper$/, '传送门$1：捕手'], //脚本图表
    [/^Portal (.*): Electricity$/, '传送门$1：电流'], //脚本图表
    [/^Portal (.*): Frugal$/, '传送门$1：节俭'], //脚本图表
    [/^Portal (.*): Life$/, '传送门$1：生命'], //脚本图表
    [/^Portal (.*): Mapocalypse$/, '传送门$1：天启地图'], //脚本图表
    [/^Portal (.*): Coordinate$/, '传送门$1：协同'], //脚本图表
    [/^Portal (.*): Crushed$/, '传送门$1：粉碎'], //脚本图表
    [/^Portal (.*): Slow$/, '传送门$1：迟缓'], //脚本图表
    [/^Portal (.*): Nom$/, '传送门$1：美味'], //脚本图表
    [/^Portal (.*): Mapology$/, '传送门$1：地图学'], //脚本图表
    [/^Portal (.*): Toxicity$/, '传送门$1：毒性'], //脚本图表
    [/^Portal (.*): Devastation$/, '传送门$1：破坏'], //脚本图表
    [/^Portal (.*): Watch$/, '传送门$1：守望'], //脚本图表
    [/^Portal (.*): Lead$/, '传送门$1：领导'], //脚本图表
    [/^Portal (.*): Corrupted$/, '传送门$1：腐化'], //脚本图表
    [/^Portal (.*): Domination$/, '传送门$1：统治'], //脚本图表
    [/^Portal (.*): Obliterated$/, '传送门$1：抹杀'], //脚本图表
    [/^Portal (.*): Eradicated$/, '传送门$1：灭绝'], //脚本图表
    [/^Portal (.*): Unlucky$/, '传送门$1：不幸'], //脚本图表
    [/^Portal (.*): Downsize$/, '传送门$1：精简'], //脚本图表
    [/^Portal (.*): Transmute$/, '传送门$1：变形'], //脚本图表
    [/^Portal (.*): Unbalance$/, '传送门$1：不平衡'], //脚本图表
    [/^Portal (.*): Bublé$/, '传送门$1：泡影'], //脚本图表
    [/^Portal (.*): Duel$/, '传送门$1：决斗'], //脚本图表
    [/^Portal (.*): Melt$/, '传送门$1：熔化'], //脚本图表
    [/^Portal (.*): Trappapalooza$/, '传送门$1：捕手道达人'], //脚本图表
    [/^Portal (.*): Quagmire$/, '传送门$1：泥淖'], //脚本图表
    [/^Portal (.*): Wither$/, '传送门$1：凋零'], //脚本图表
    [/^Portal (.*): Revenge$/, '传送门$1：复仇'], //脚本图表
    [/^Portal (.*): Quest$/, '传送门$1：任务'], //脚本图表
    [/^Portal (.*): Archaeology$/, '传送门$1：考古学'], //脚本图表
    [/^Portal (.*): Mayhem$/, '传送门$1：暴乱'], //脚本图表
    [/^Portal (.*):$/, '传送门$1'], //脚本图表
    [/^Daily P Raiding Z(.*)$/, '日常重铸袭劫区域$1'], //脚本日常设置
    [/^Daily Max P Raid Z(.*)$/, '日常重铸袭劫最大区域$1'], //脚本日常设置
    [/^Daily Farm Frags Z(.*)$/, '日常刷碎片区域$1'], //脚本日常设置
    [/^Dy Raid bef farm Z(.*)$/, '日常刷碎片前袭劫区域$1'], //脚本日常设置
    [/^Daily Z to BW Raid(.*)$/, '日常仿生袭劫区域$1'], //脚本日常设置
    [/^Daily Max BW to raid(.*)$/, '日常仿生袭劫最大区域$1'], //脚本日常设置
    [/^DHS: High Damage(.*)$/, '日常传家宝：高伤$1'], //脚本日常设置
    [/^DHS: Low Damage(.*)$/, '日常传家宝：低伤$1'], //脚本日常设置
    [/^(.*)Theme change - AutoTrimps styles updated.$/, '$1游戏主题改变 - 自动脆皮脚本样式已更新。'], //脚本消息
    [/^Trimple Z(.*)$/, '末日神殿区域$1'], //脚本地图设置
    [/^Time Farming Bogs$/, '定时刷图黑色泥沼'], //脚本等，前置
    [/^Time Farming(.*)$/, '定时刷图$1'], //脚本地图设置
    [/^TF: Time(.*)$/, '定时刷图：数值$1'], //脚本地图设置
    [/^TF: Map Level(.*)$/, '定时刷图：地图等级$1'], //脚本地图设置
    [/^Melting Point \($/, '熔点('], //离线，前置
    [/^Melting Point \(Zone$/, '熔点 (区域'], //挑战，前置    
    [/^Melting Point(.*)$/, '熔点$1'], //脚本地图设置
    [/^BB: Zone(.*)$/, '黑色泥沼：区域$1'], //脚本地图设置
    [/^BB: Amount(.*)$/, '黑色泥沼：数量$1'], //脚本地图设置
    [/^P Raiding Z(.*)$/, '重铸袭劫区域$1'], //脚本袭劫设置
    [/^Max P Raid Zones(.*)$/, '重铸袭劫最大区域$1'], //脚本袭劫设置
    [/^Farm Fragments Z(.*)$/, '刷碎片区域$1'], //脚本袭劫设置
    [/^Raid before farm Z(.*)$/, '刷碎片前袭劫区域$1'], //脚本袭劫设置
    [/^Z to BW Raid(.*)$/, '仿生袭劫区域$1'], //脚本袭劫设置
    [/^Max BW to raid(.*)$/, '仿生袭劫最大区域$1'], //脚本袭劫设置
    [/^PR: Zone(.*)$/, '宇宙2重铸袭劫：区域$1'], //脚本袭劫设置
    [/^PR: Raid(.*)$/, '宇宙2重铸袭劫：地图$1'], //脚本袭劫设置
    [/^First String(.*)$/, '第一字符串$1'], //脚本挑战设置
    [/^Second String(.*)$/, '第二字符串$1'], //脚本挑战设置
    [/^Third String(.*)$/, '第三字符串$1'], //脚本挑战设置
    [/^Insanity Farming(.*)$/, '刷失智层数$1'], //脚本挑战设置
    [/^IF: Stacks(.*)$/, '刷失智层数：层数$1'], //脚本挑战设置
    [/^IF: Map Level(.*)$/, '刷失智层数：地图等级$1'], //脚本挑战设置
    [/^Throttle Supply \(or Capacity\)(.*)$/, '控制供给的分配(或容量)$1'], //脚本岩浆设置
    [/^WS: High Damage(.*)$/, '风层数叠加：高伤$1'], //脚本传家宝设置
    [/^WS: Low Damage(.*)$/, '风层数叠加：低伤$1'], //脚本传家宝设置
    [/^HS: First(.*)$/, '传家宝切换：第一$1'], //脚本传家宝设置
    [/^HS: Second(.*)$/, '传家宝切换：第二$1'], //脚本传家宝设置
    [/^To Fight now would add: (.*) seconds to the breed timer.$/, '现在开始战斗将增加$1秒繁殖计时。'], //脚本繁殖模块设置
    [/^(.*)Building (.*) Warpstations$/, '$1建造$2个跃迁核心'], //脚本建筑模块设置
    [/^(.*)Building Barn$/, '$1建造谷仓'], //脚本建筑模块设置
    [/^(.*)Building Shed$/, '$1建造窝棚'], //脚本建筑模块设置
    [/^(.*)Building Forge$/, '$1建造锻造厂'], //脚本建筑模块设置
    [/^(.*)Building Hut$/, '$1建造小屋'], //脚本建筑模块设置
    [/^(.*)Building House$/, '$1建造宅院'], //脚本建筑模块设置
    [/^(.*)Building Mansion$/, '$1建造豪宅'], //脚本建筑模块设置
    [/^(.*)Building Hotel$/, '$1建造宾馆'], //脚本建筑模块设置
    [/^(.*)Building Resort$/, '$1建造度假村'], //脚本建筑模块设置
    [/^(.*)Building Gateway$/, '$1建造维度裂隙'], //脚本建筑模块设置
    [/^(.*)Building Wormhole$/, '$1建造虫洞'], //脚本建筑模块设置
    [/^(.*)Building Collector$/, '$1建造汲能设施'], //脚本建筑模块设置
    [/^(.*)Building Gym$/, '$1建造健身房'], //脚本建筑模块设置
    [/^(.*)Building Smithy$/, '$1建造铁匠铺'], //脚本建筑模块设置
    [/^(.*)Building Tribute$/, '$1建造贡品'], //脚本建筑模块设置
    [/^(.*)Building Nursery$/, '$1建造托儿所'], //脚本建筑模块设置
    [/^(.*)Building Microchip$/, '$1建造微型芯片'], //脚本建筑模块设置
    [/^(.*)Upgrading Dagadder - Prestige$/, '$1升级诗歌匕首-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Megamace - Prestige$/, '$1升级巨型狼牙棒-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Polierarm - Prestige$/, '$1升级画戟-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Axeidic - Prestige$/, '$1升级强酸战斧-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Greatersword - Prestige$/, '$1升级双手巨剑-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Bootboost - Prestige$/, '$1升级神行靴-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Hellishmet - Prestige$/, '$1升级地狱头盔-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Pantastic - Prestige$/, '$1升级护腿-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Smoldershoulder - Prestige$/, '$1升级闷火护肩-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Bestplate - Prestige$/, '$1升级精良胸铠-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Harmbalest - Prestige$/, '$1升级高强弩-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading GambesOP - Prestige$/, '$1升级强棉甲-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Supershield - Prestige$/, '$1升级超级盾牌-重铸次数'], //脚本装备模块设置
    [/^(.*)Upgrading Gymystic #$/, '$1升级健身学-次数'], //脚本装备模块设置
    [/^(.*)Leveling equipment Boots$/, '$1升级装备：靴子'], //脚本装备模块设置
    [/^(.*)Leveling equipment Helmet$/, '$1升级装备：头盔'], //脚本装备模块设置
    [/^(.*)Leveling equipment Pants$/, '$1升级装备：裤子'], //脚本装备模块设置
    [/^(.*)Leveling equipment Shoulderguards$/, '$1升级装备：护肩'], //脚本装备模块设置
    [/^(.*)Leveling equipment Breastplate$/, '$1升级装备：胸铠'], //脚本装备模块设置
    [/^(.*)Leveling equipment Gambeson$/, '$1升级装备：棉甲'], //脚本装备模块设置
    [/^(.*)Leveling equipment Shield$/, '$1升级装备：盾牌'], //脚本装备模块设置
    [/^(.*)Leveling equipment Boots \(AlwaysLvl$/, '$1升级装备：靴子(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Helmet \(AlwaysLvl$/, '$1升级装备：头盔(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Pants \(AlwaysLvl$/, '$1升级装备：裤子(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Shoulderguards \(AlwaysLvl$/, '$1升级装备：护肩(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Breastplate \(AlwaysLvl$/, '$1升级装备：胸铠(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Gambeson \(AlwaysLvl$/, '$1升级装备：棉甲(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Shield \(AlwaysLvl$/, '$1升级装备：盾牌(常时等级'], //脚本装备模块设置
    [/^(.*)Leveling equipment Dagger$/, '$1升级装备：匕首'], //脚本装备模块设置
    [/^(.*)Leveling equipment Mace$/, '$1升级装备：狼牙棒'], //脚本装备模块设置
    [/^(.*)Leveling equipment Polearm$/, '$1升级装备：战戟'], //脚本装备模块设置
    [/^(.*)Leveling equipment Battleaxe$/, '$1升级装备：战斧'], //脚本装备模块设置
    [/^(.*)Leveling equipment Greatsword$/, '$1升级装备：巨剑'], //脚本装备模块设置
    [/^(.*)Leveling equipment Arbalest$/, '$1升级装备：强弩'], //脚本装备模块设置
    [/^(.*)Successfully loaded existing profile(.*)$/, '$1成功载入现有的设置文件$2'], //脚本导入导出模块设置
    [/^(.*)Successfully created new profile(.*)$/, '$1成功创建新的设置文件$2'], //脚本导入导出模块设置
    [/^(.*)Successfully deleted profile #(.*)$/, '$1成功删除设置文件编号$2'], //脚本导入导出模块设置
    [/^(.*)Successfully imported new AT settings...$/, '$1成功导入新的脚本设置……'], //脚本导入导出模块设置
    [/^Successfully Imported Autotrimps Settings File!(.*)$/, '成功导入脚本设置文件！$1'], //脚本导入导出模块设置
    [/^(.*)Successfully reset AT settings to Defaults...$/, '$1成功将脚本设置重置为默认设置……'], //脚本导入导出模块设置
    [/^(.*)Importing new AT settings file...$/, '$1正在导入新的脚本设置……'], //脚本导入导出模块设置
    [/^SF: Zone(.*)$/, '刷崇信者：区域$1'], //脚本工作设置
    [/^SF: Amount(.*)$/, '刷崇信者：数量$1'], //脚本工作设置
    [/^SF: Map Level(.*)$/, '刷崇信者：地图等级$1'], //脚本工作设置
    [/^(.*)Firing (.*) Farmers$/, '$1解雇$2农民'], //脚本工作设置
    [/^(.*)Hiring (.*) Farmers$/, '$1雇佣$2农民'], //脚本工作设置
    [/^(.*)Firing (.*) Lumberjacks$/, '$1解雇$2伐木工'], //脚本工作设置
    [/^(.*)Hiring (.*) Lumberjacks$/, '$1雇佣$2伐木工'], //脚本工作设置
    [/^(.*)Firing (.*) Miners$/, '$1解雇$2矿工'], //脚本工作设置
    [/^(.*)Hiring (.*) Miners$/, '$1雇佣$2矿工'], //脚本工作设置
    [/^(.*)Firing (.*) Scientists$/, '$1解雇$2科学家'], //脚本工作设置
    [/^(.*)Hiring (.*) Scientists$/, '$1雇佣$2科学家'], //脚本工作设置
    [/^(.*)Firing (.*) Trainers$/, '$1解雇$2训练师'], //脚本工作设置
    [/^(.*)Hiring (.*) Trainers$/, '$1雇佣$2训练师'], //脚本工作设置
    [/^(.*)Firing (.*) Explorers$/, '$1解雇$2探险家'], //脚本工作设置
    [/^(.*)Hiring (.*) Explorers$/, '$1雇佣$2探险家'], //脚本工作设置
    [/^(.*)Firing (.*) Geneticists$/, '$1解雇$2遗传学家'], //脚本工作设置
    [/^(.*)Hiring (.*) Geneticists$/, '$1雇佣$2遗传学家'], //脚本工作设置
    [/^(.*)Firing (.*) Meteorologists$/, '$1解雇$2气象学家'], //脚本工作设置
    [/^(.*)Hiring (.*) Meteorologists$/, '$1雇佣$2气象学家'], //脚本工作设置
    [/^(.*)Bought (.*) Magmamancers. Total Owned(.*)$/, '$1雇佣$2岩浆巫师。岩浆巫师总数为$3'], //脚本工作设置
    [/^(.*)Auto Spending (.*) Magmite on: Efficiency #$/, '$1自动分配$2岩浆岩以升级：效率，次数'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Capacity #$/, '$1自动分配$2岩浆岩以升级：容量，次数'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Supply #$/, '$1自动分配$2岩浆岩以升级：供给，次数'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Overclocker #$/, '$1自动分配$2岩浆岩以升级：超频，次数'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Slowburn$/, '$1自动分配$2岩浆岩以升级：慢烧'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Shielding$/, '$1自动分配$2岩浆岩以升级：防护'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Storage$/, '$1自动分配$2岩浆岩以升级：存储'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Hybridization$/, '$1自动分配$2岩浆岩以升级：混合'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Supervision$/, '$1自动分配$2岩浆岩以升级：管理'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Simulacrum$/, '$1自动分配$2岩浆岩以升级：复制'], //脚本岩浆设置
    [/^(.*)Auto Spending (.*) Magmite on: Overclocker$/, '$1自动分配$2岩浆岩以升级：超频'], //脚本岩浆设置
    [/^(.*)Leftover magmite$/, '$1剩余岩浆岩'], //脚本岩浆设置
    [/^Farming for Spire (.*)h left$/, '尖塔前刷资源，剩余$1小时'], //脚本地图设置
    [/^Farming for Spire (.*)m:(.*)s left$/, '尖塔前刷资源，剩余$1分$2秒'], //脚本地图设置
    [/^Equip Farming to (.*) and (.*) Equality$/, '装备刷资源至$1及$2级平等'], //脚本地图设置
    [/^Storm Farming to (.*)$/, '风暴刷资源至$1'], //脚本地图设置
    [/^Void Maps: (\d*) remaining$/, '虚空地图：剩余$1'], //脚本地图设置
    [/^Void Maps: (\d*) \((\d*) stacked\) remaining$/, '虚空地图：剩余$1(融合后有$2)'], //脚本地图设置
    [/^Farming: (.*)x$/, '刷资源：生命伤害比$1'], //脚本地图设置
    [/^Want (.*)x(\s*)more damage$/, '需要更多伤害，倍数为$1'], //脚本地图设置
    [/^(\s+)He$/, '氦'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Fast Attacks. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：快速攻击。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Large Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Small Savory Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小美味储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Small Wooden Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小木头储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Small Metal Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小金属储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Small Research Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：小研究储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Prestigious. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：重铸。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Huge Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：巨大储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Large Savory Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大美味储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Large Wooden Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大木头储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Large Metal Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大金属储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Set the map special modifier to: Large Research Cache. Cost: (.*)% of your fragments.$/, '$1使用地图特殊修饰符：大研究储藏箱。花费碎片总数的$2%。'], //脚本地图设置
    [/^(.*)Got perma-stuck on cell (\d*) during scryer stance. Are your scryer settings correct\? Entering map to farm to fix it.$/, '$1使用占卜者阵型时卡在格子$2了。占卜者阵型的设置是否正确？请进入地图刷资源来解决。'], //脚本地图设置
    [/^(.*)Can't afford the map we designed, #$/, '$1碎片不够，无法制造所需的地图，等级'], //脚本地图设置
    [/^(.*)...selected our highest map instead # (.*) Level$/, '$1……取而代之，我们选择地图$2，等级'], //脚本地图设置
    [/^(.*)Retrying, Buying a Map, level: #$/, '$1重新尝试，制造一张地图，等级：'], //脚本地图设置
    [/^(.*)Buying a Map, level: #$/, '$1制造一张地图，等级：'], //脚本地图设置
    [/^(.*)Too many maps, recycling now$/, '$1地图过多，开始回收'], //脚本地图设置
    [/^(.*)AutoMaps unable to recycle to buy map!$/, '$1脚本无法回收并制造地图！'], //脚本地图设置
    [/^(.*)Retrying map buy after recycling lowest level map$/, '$1回收最低级地图后重新尝试制造地图'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Black $/, '$1运行选择的$2，等级：$3，名称：黑色'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Bionic Wonderland(.*)$/, '$1运行选择的$2，等级：$3，名称：仿生仙境$4'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Block$/, '$1运行选择的$2，等级：$3，名称：障碍区'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Wall$/, '$1运行选择的$2，等级：$3，名称：高墙'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Big Wall$/, '$1运行选择的$2，等级：$3，名称：巨墙'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: The Prison$/, '$1运行选择的$2，等级：$3，名称：监狱'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Imploding Star$/, '$1运行选择的$2，等级：$3，名称：爆炸之星'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Prismatic Palace$/, '$1运行选择的$2，等级：$3，名称：棱镜宫殿'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Melting Point$/, '$1运行选择的$2，等级：$3，名称：熔点'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Trimple Of Doom$/, '$1运行选择的$2，等级：$3，名称：末日神殿'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Tricky Paradise$/, '$1运行选择的$2，等级：$3，名称：整蛊天堂'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Dimension of Anger$/, '$1运行选择的$2，等级：$3，名称：愤怒维度'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name: Dimension of Rage$/, '$1运行选择的$2，等级：$3，名称：暴怒维度'], //脚本地图设置
    [/^(.*)Running selected (.*) Level: (.*) Name$/, '$1运行选择的$2，等级：$3，名称'], //脚本地图设置
    [/^(.*)Running selected (.*) Void:  Name$/, '$1运行选择的$2，虚空地图：名称'], //脚本地图设置
    [/^(\s+)Rn/, '氡'], //脚本地图设置
    [/^(.*)Check complete for frag map$/, '$1完成检查碎片地图'], //脚本地图设置
    [/^(.*)frag map bought$/, '$1碎片地图已制造'], //脚本地图设置
    [/^(.*)running frag map$/, '$1运行碎片地图'], //脚本地图设置
    [/^(.*)Check complete for 5th map$/, '$1完成检查第五地图'], //脚本地图设置
    [/^(.*)5th map bought$/, '$1第五地图已制造'], //脚本地图设置
    [/^(.*)Check complete for 4th map$/, '$1完成检查第四地图'], //脚本地图设置
    [/^(.*)4th map bought$/, '$1第四地图已制造'], //脚本地图设置
    [/^(.*)Check complete for 3rd map$/, '$1完成检查第三地图'], //脚本地图设置
    [/^(.*)3rd map bought$/, '$1第三地图已制造'], //脚本地图设置
    [/^(.*)Check complete for 2nd map$/, '$1完成检查第二地图'], //脚本地图设置
    [/^(.*)2nd map bought$/, '$1第二地图已制造'], //脚本地图设置
    [/^(.*)Check complete for 1st map$/, '$1完成检查第一地图'], //脚本地图设置
    [/^(.*)1st map bought$/, '$1第一地图已制造'], //脚本地图设置
    [/^(.*)Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图，或者是已经没有可获取的装备了！'], //脚本地图设置
    [/^(.*)running map$/, '$1运行地图'], //脚本地图设置
    [/^(.*)Check complete for insanity frag map$/, '$1完成检查失智碎片地图'], //脚本地图设置
    [/^(.*)insanity frag map bought$/, '$1失智碎片地图已制造'], //脚本地图设置
    [/^(.*)running insanity frag map$/, '$1运行失智碎片地图'], //脚本地图设置
    [/^(.*)Check complete for ship frag map$/, '$1完成检查崇信者碎片地图'], //脚本地图设置
    [/^(.*)ship frag map bought$/, '$1崇信者碎片地图已制造'], //脚本地图设置
    [/^(.*)running ship frag map$/, '$1运行崇信者碎片地图'], //脚本地图设置
    [/^(.*)Upgraded Empowerment of Ice$/, '$1升级了冰赋能'], //脚本自然设置
    [/^(.*)Upgraded Empowerment of Poison$/, '$1升级了毒赋能'], //脚本自然设置
    [/^(.*)Upgraded Empowerment of Wind$/, '$1升级了风赋能'], //脚本自然设置
    [/^(.*)Upgraded Ice transfer rate$/, '$1升级了冰层数传递率'], //脚本自然设置
    [/^(.*)Upgraded Poison transfer rate$/, '$1升级了毒层数传递率'], //脚本自然设置
    [/^(.*)Upgraded Wind transfer rate$/, '$1升级了风层数传递率'], //脚本自然设置
    [/^(.*)Converted Ice tokens to Poison$/, '$1将冰符记转换为毒符记'], //脚本自然设置
    [/^(.*)Converted Ice tokens to Wind$/, '$1将冰符记转换为风符记'], //脚本自然设置
    [/^(.*)Converted Poison tokens to Ice$/, '$1将毒符记转换为冰符记'], //脚本自然设置
    [/^(.*)Converted Poison tokens to Wind$/, '$1将毒符记转换为风符记'], //脚本自然设置
    [/^(.*)Converted Wind tokens to Ice$/, '$1将风符记转换为冰符记'], //脚本自然设置
    [/^(.*)Converted Wind tokens to Poison$/, '$1将风符记转换为毒符记'], //脚本自然设置
    [/^(.*)Activated Robotrimp MagnetoShriek Ability @ z$/, '$1脆皮机器人电磁尖啸激活于区域'], //脚本其他设置
    [/^(.*)Beginning Prestige Raiding...$/, '$1开始重铸袭劫……'], //脚本其他设置
    [/^(.*)Map Loop$/, '$1地图循环'], //脚本其他设置
    [/^(.*)Failed to Prestige Raid. Looks like you can't afford to or you are too weak or you have limited yourself in a P\/I zone.$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图，或者是太过于弱小，或者是设置了毒上限/冰上限并进入了相应的区域。'], //脚本其他设置
    [/^(.*)Prestige raiding successful!$/, '$1重铸袭劫已成功完成！'], //脚本其他设置
    [/^(.*)Turning AutoMaps back on$/, '$1重新启用自动地图'], //脚本其他设置
    [/^(.*)Beginning Praiding$/, '$1开始重铸硬核袭劫'], //脚本其他设置
    [/^(.*)Failed to prestige raid. Looks like you can't afford to.$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图。'], //脚本其他设置
    [/^(.*)Buying perfect sliders fragment farming map$/, '$1制造完美滑块的刷碎片地图'], //脚本其他设置
    [/^(.*)Buying imperfect sliders fragment farming map$/, '$1制造非完美滑块的刷碎片地图'], //脚本其他设置
    [/^(.*)Can't afford fragment farming map yet$/, '$1碎片不足，无法制造刷碎片地图'], //脚本其他设置
    [/^(.*)Prestige raiding successful! - recycling Praid map$/, '$1重铸袭劫已成功完成！回收相应的袭劫地图'], //脚本其他设置
    [/^(.*)Beginning BW Raiding...$/, '$1开始仿生袭劫……'], //脚本其他设置
    [/^(.*)Failed to BW raid. Looks like you don't have a BW to raid...$/, '$1仿生袭劫失败。您还未获得仿生仙境地图……'], //脚本其他设置
    [/^(.*)...Successfully BW raided!$/, '$1……仿生袭劫已成功完成！'], //脚本其他设置
    [/^(.*)Beginning Daily BW Raiding...$/, '$1开始日常仿生袭劫……'], //脚本其他设置
    [/^(.*)Failed to Daily BW raid. Looks like you don't have a BW to raid...$/, '$1日常仿生袭劫失败。您还未获得仿生仙境地图……'], //脚本其他设置
    [/^(.*)...Successfully Daily BW raided!$/, '$1……日常仿生袭劫已成功完成！'], //脚本其他设置
    [/^(.*)World Zone matches a Praiding Zone!$/, '$1世界区域满足重铸袭劫区域条件！'], //脚本其他设置
    [/^(.*)Failed to prestige raid. Looks like you can't afford to..$/, '$1重铸袭劫失败。您可能碎片不足无法制造地图……'], //脚本其他设置
    [/^(.*)World Zone matches a Daily Praiding Zone!$/, '$1世界区域满足日常重铸袭劫区域条件！'], //脚本其他设置
    [/^(.*)Beginning Daily Prestige Raiding...$/, '$1开始日常重铸袭劫……'], //脚本其他设置
    [/^(.*)Failed to Daily Prestige Raid. Looks like you can't afford to..$/, '$1日常重铸袭劫失败。您可能碎片不足无法制造地图……'], //脚本其他设置
    [/^(.*)Daily Prestige Raiding successful! - recycling Praid map$/, '$1日常重铸袭劫已成功完成！回收相应的袭劫地图'], //脚本其他设置
    [/^Current Status: Farming for Spire (.*)h left$/, '当前状态：尖塔前刷资源，剩余$1小时'], //脚本挂机设置
    [/^Current Status: Farming for Spire (.*)m:(.*)s left$/, '当前状态：尖塔前刷资源，剩余$1分$2秒'], //脚本挂机设置
    [/^Current Status: Void Maps: (\d*) remaining$/, '当前状态：虚空地图：剩余$1'], //脚本挂机设置
    [/^Current Status: Void Maps: (\d*) \((\d*) stacked\) remaining$/, '当前状态：虚空地图：剩余$1(融合后有$2)'], //脚本挂机设置
    [/^Current Status: Farming: (.*)x$/, '当前状态：刷资源：生命伤害比$1'], //脚本地图设置
    [/^Current Status: Want (.*)x(\s*)more damage$/, '当前状态：需要更多伤害，倍数为$1'], //脚本地图设置
    [/^(.*)AutoPerks: Your existing fixed-perks reserve Helium$/, '$1自动特权：当前不修改特权总共花费氦数量'], //脚本自动特权设置
    [/^(.*)AutoPerks: Major Error: Make sure all ratios are set properly.$/, '$1自动特权：错误：请确保所有比例设置合理。'], //脚本自动特权设置
    [/^(.*)AutoPerks: Auto-Allocate Finished.$/, '$1自动特权：自动分配完毕。'], //脚本自动特权设置
    [/^(.*)Beginning AutoPerks1 calculate how to spend (.*) Helium... This could take a while...$/, '$1自动特权1开始计算如何分配$2氦……可能要花费一些时间……'], //脚本自动特权设置
    [/^(.*)AutoPerks: Major Error - Not enough helium to buy fixed perks.$/, '$1自动特权：错误：氦不足以购买不修改特权。'], //脚本自动特权设置
    [/^(.*)Perk ratios must be positive values.$/, '$1特权比例必须为正数。'], //脚本自动特权设置
    [/^(.*)All Perk Ratios were 0, or some other error.$/, '$1所有特权比例都为0，或者是有其他错误。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Pass One Complete. Loops ran$/, '$1自动特权1：第一阶段完成。循环次数'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Looting level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权劫掠，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Toughness level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权坚韧，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Power level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权力量，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Motivation level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权鼓舞，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Pheromones level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权信息素，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Artisanistry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Carpentry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权木工，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Resilience level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权弹性，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Coordinated level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权协同，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Resourceful level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权足智多谋，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Overkill level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权超杀，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Cunning level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权灵巧，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Curious level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权好奇，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Classy level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权上等，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Toughness_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权坚韧 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Power_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权力量 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Motivation_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权鼓舞 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Carpentry_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权木工 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Dump Perk Looting_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权1：主加特权劫掠 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks1: Pass two complete. Round 2 cleanup spend of $/, '$1自动特权1：第二阶段完成。第二阶段花费'], //脚本自动特权设置
    [/^(.*)Beginning AutoPerks2 calculate how to spend (.*) Helium... This could take a while...$/, '$1自动特权2开始计算如何分配$2氦……可能要花费一些时间……'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Pass One Complete. Loops ran$/, '$1自动特权2：第一阶段完成。循环次数'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Looting level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权劫掠，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Toughness level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权坚韧，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Power level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权力量，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Motivation level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权鼓舞，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Pheromones level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权信息素，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Artisanistry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Carpentry level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权木工，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Resilience level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权弹性，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Coordinated level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权协同，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Resourceful level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权足智多谋，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Overkill level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权超杀，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Cunning level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权灵巧，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Curious level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权好奇，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Classy level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权上等，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Toughness_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权坚韧 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Power_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权力量 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Motivation_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权鼓舞 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Carpentry_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权木工 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Dump Perk Looting_II level post-dump: (.*) Helium Dumped: (.*) He.$/, '$1自动特权2：主加特权劫掠 II，主加后特权等级：$2，花费：$3氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks2: Pass Two Complete. Cleanup Spent Any Leftover Helium: (.*) He.$/, '$1自动特权2：第二阶段完成。花费了剩余的$2氦。'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Siphonology$/, '$1自动特权-洗点后购买：虹吸学'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Anticipation$/, '$1自动特权-洗点后购买：预期'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Meditation$/, '$1自动特权-洗点后购买：冥想'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Relentlessness$/, '$1自动特权-洗点后购买：无情'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Range$/, '$1自动特权-洗点后购买：范围'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Agility$/, '$1自动特权-洗点后购买：敏捷'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Bait$/, '$1自动特权-洗点后购买：诱饵'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Trumps$/, '$1自动特权-洗点后购买：王牌'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Packrat$/, '$1自动特权-洗点后购买：囤积成瘾'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Looting$/, '$1自动特权-洗点后购买：劫掠'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Toughness$/, '$1自动特权-洗点后购买：坚韧'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Power$/, '$1自动特权-洗点后购买：力量'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Motivation$/, '$1自动特权-洗点后购买：鼓舞'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Pheromones$/, '$1自动特权-洗点后购买：信息素'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Artisanistry$/, '$1自动特权-洗点后购买：手艺娴熟'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Carpentry$/, '$1自动特权-洗点后购买：木工'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Resilience$/, '$1自动特权-洗点后购买：弹性'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Coordinated$/, '$1自动特权-洗点后购买：协同'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Resourceful$/, '$1自动特权-洗点后购买：足智多谋'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Overkill$/, '$1自动特权-洗点后购买：超杀'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Capable$/, '$1自动特权-洗点后购买：能力'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Cunning$/, '$1自动特权-洗点后购买：灵巧'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Curious$/, '$1自动特权-洗点后购买：好奇'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Classy$/, '$1自动特权-洗点后购买：上等'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Toughness_II$/, '$1自动特权-洗点后购买：坚韧 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Power_II$/, '$1自动特权-洗点后购买：力量 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Motivation_II$/, '$1自动特权-洗点后购买：鼓舞 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Carpentry_II$/, '$1自动特权-洗点后购买：木工 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Buying: Looting_II$/, '$1自动特权-洗点后购买：劫掠 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Siphonology$/, '$1自动特权-洗点错误，氦不足以购买特权：虹吸学'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Anticipation$/, '$1自动特权-洗点错误，氦不足以购买特权：预期'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Meditation$/, '$1自动特权-洗点错误，氦不足以购买特权：冥想'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Relentlessness$/, '$1自动特权-洗点错误，氦不足以购买特权：无情'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Range$/, '$1自动特权-洗点错误，氦不足以购买特权：范围'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Agility$/, '$1自动特权-洗点错误，氦不足以购买特权：敏捷'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Bait$/, '$1自动特权-洗点错误，氦不足以购买特权：诱饵'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Trumps$/, '$1自动特权-洗点错误，氦不足以购买特权：王牌'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Packrat$/, '$1自动特权-洗点错误，氦不足以购买特权：囤积成瘾'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Looting$/, '$1自动特权-洗点错误，氦不足以购买特权：劫掠'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness$/, '$1自动特权-洗点错误，氦不足以购买特权：坚韧'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Power$/, '$1自动特权-洗点错误，氦不足以购买特权：力量'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation$/, '$1自动特权-洗点错误，氦不足以购买特权：鼓舞'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Pheromones$/, '$1自动特权-洗点错误，氦不足以购买特权：信息素'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Artisanistry$/, '$1自动特权-洗点错误，氦不足以购买特权：手艺娴熟'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry$/, '$1自动特权-洗点错误，氦不足以购买特权：木工'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Resilience$/, '$1自动特权-洗点错误，氦不足以购买特权：弹性'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Coordinated$/, '$1自动特权-洗点错误，氦不足以购买特权：协同'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Resourceful$/, '$1自动特权-洗点错误，氦不足以购买特权：足智多谋'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Overkill$/, '$1自动特权-洗点错误，氦不足以购买特权：超杀'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Cunning$/, '$1自动特权-洗点错误，氦不足以购买特权：灵巧'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Curious$/, '$1自动特权-洗点错误，氦不足以购买特权：好奇'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Classy$/, '$1自动特权-洗点错误，氦不足以购买特权：上等'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness_II$/, '$1自动特权-洗点错误，氦不足以购买特权：坚韧 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Power_II$/, '$1自动特权-洗点错误，氦不足以购买特权：力量 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation_II$/, '$1自动特权-洗点错误，氦不足以购买特权：鼓舞 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry_II$/, '$1自动特权-洗点错误，氦不足以购买特权：木工 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-Respec Error Couldn't Afford Asked Perk: Looting_II$/, '$1自动特权-洗点错误，氦不足以购买特权：劫掠 II'], //脚本自动特权设置
    [/^(.*)A Respec would be required and is not available. You used it already, try again next portal.$/, '$1需要洗点才可以进行自动分配特权，但您已经洗点过了，请在下次传送后再重试。'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Siphonology$/, '$1自动特权需要洗点特权：虹吸学'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Anticipation$/, '$1自动特权需要洗点特权：预期'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Meditation$/, '$1自动特权需要洗点特权：冥想'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Relentlessness$/, '$1自动特权需要洗点特权：无情'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Range$/, '$1自动特权需要洗点特权：范围'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Agility$/, '$1自动特权需要洗点特权：敏捷'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Bait$/, '$1自动特权需要洗点特权：诱饵'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Trumps$/, '$1自动特权需要洗点特权：王牌'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Packrat$/, '$1自动特权需要洗点特权：囤积成瘾'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Looting$/, '$1自动特权需要洗点特权：劫掠'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Toughness$/, '$1自动特权需要洗点特权：坚韧'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Power$/, '$1自动特权需要洗点特权：力量'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Motivation$/, '$1自动特权需要洗点特权：鼓舞'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Pheromones$/, '$1自动特权需要洗点特权：信息素'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Artisanistry$/, '$1自动特权需要洗点特权：手艺娴熟'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Carpentry$/, '$1自动特权需要洗点特权：木工'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Resilience$/, '$1自动特权需要洗点特权：弹性'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Coordinated$/, '$1自动特权需要洗点特权：协同'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Resourceful$/, '$1自动特权需要洗点特权：足智多谋'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Overkill$/, '$1自动特权需要洗点特权：超杀'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Cunning$/, '$1自动特权需要洗点特权：灵巧'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Curious$/, '$1自动特权需要洗点特权：好奇'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Classy$/, '$1自动特权需要洗点特权：上等'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Toughness_II$/, '$1自动特权需要洗点特权：坚韧 II'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Power_II$/, '$1自动特权需要洗点特权：力量 II'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Motivation_II$/, '$1自动特权需要洗点特权：鼓舞 II'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Carpentry_II$/, '$1自动特权需要洗点特权：木工 II'], //脚本自动特权设置
    [/^(.*)AutoPerks RESPEC Required for: Looting_II$/, '$1自动特权需要洗点特权：劫掠 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Siphonology$/, '$1自动特权-无洗点提升：虹吸学'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Anticipation$/, '$1自动特权-无洗点提升：预期'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Meditation$/, '$1自动特权-无洗点提升：冥想'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Relentlessness$/, '$1自动特权-无洗点提升：无情'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Range$/, '$1自动特权-无洗点提升：范围'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Agility$/, '$1自动特权-无洗点提升：敏捷'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Bait$/, '$1自动特权-无洗点提升：诱饵'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Trumps$/, '$1自动特权-无洗点提升：王牌'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Packrat$/, '$1自动特权-无洗点提升：囤积成瘾'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Looting$/, '$1自动特权-无洗点提升：劫掠'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Toughness$/, '$1自动特权-无洗点提升：坚韧'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Power$/, '$1自动特权-无洗点提升：力量'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Motivation$/, '$1自动特权-无洗点提升：鼓舞'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Pheromones$/, '$1自动特权-无洗点提升：信息素'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Artisanistry$/, '$1自动特权-无洗点提升：手艺娴熟'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Carpentry$/, '$1自动特权-无洗点提升：木工'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Resilience$/, '$1自动特权-无洗点提升：弹性'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Coordinated$/, '$1自动特权-无洗点提升：协同'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Resourceful$/, '$1自动特权-无洗点提升：足智多谋'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Overkill$/, '$1自动特权-无洗点提升：超杀'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Cunning$/, '$1自动特权-无洗点提升：灵巧'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Curious$/, '$1自动特权-无洗点提升：好奇'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Classy$/, '$1自动特权-无洗点提升：上等'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Toughness_II$/, '$1自动特权-无洗点提升：坚韧 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Power_II$/, '$1自动特权-无洗点提升：力量 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Motivation_II$/, '$1自动特权-无洗点提升：鼓舞 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Carpentry_II$/, '$1自动特权-无洗点提升：木工 II'], //脚本自动特权设置
    [/^(.*)AutoPerks-NoRespec Adding: Looting_II$/, '$1自动特权-无洗点提升：劫掠 II'], //脚本自动特权设置
    [/^(.*)AutoPerks - A Respec is required. Trying respec...$/, '$1自动特权-需要洗点。尝试洗点中……'], //脚本自动特权设置
    [/^(.*)RAutoPerks: Your existing fixed-perks reserve Radon$/, '$1宇宙2自动特权：当前不修改特权总共花费氡数量'], //脚本自动特权设置
    [/^(.*)RAutoPerks: Major Error: Make sure all ratios are set properly.$/, '$1宇宙2自动特权：错误：请确保所有比例设置合理。'], //脚本自动特权设置
    [/^(.*)RAutoPerks: Auto-Allocate Finished.$/, '$1宇宙2自动特权：自动分配完毕。'], //脚本自动特权设置
    [/^(.*)Beginning RAutoPerks1 calculate how to spend (.*) Radon... This could take a while...$/, '$1宇宙2自动特权1开始计算如何分配$2氡……可能要花费一些时间……'], //脚本自动特权设置
    [/^(.*)RAutoPerks: Major Error - Not enough radon to buy fixed perks.$/, '$1宇宙2自动特权：错误：氡不足以购买不修改特权。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Pass One Complete. Loops ran$/, '$1宇宙2自动特权1：第一阶段完成。循环次数'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Looting level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权劫掠，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Toughness level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权坚韧，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Power level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权力量，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Motivation level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权鼓舞，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Pheromones level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权信息素，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Artisanistry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Carpentry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权木工，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Prismal level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权棱镜化，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Equality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权平等，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Criticality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权暴击限界，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Resilience level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权弹性，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Dump Perk Tenacity level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权1：主加特权坚持，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks1: Pass two complete. Round 2 cleanup spend of $/, '$1宇宙2自动特权1：第二阶段完成。第二阶段花费'], //脚本自动特权设置
    [/^(.*)Beginning RAutoPerks2 calculate how to spend (.*) Radon... This could take a while...$/, '$1宇宙2自动特权2开始计算如何分配$2氡……可能要花费一些时间……'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Pass One Complete. Loops ran$/, '$1宇宙2自动特权2：第一阶段完成。循环次数'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Looting level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权劫掠，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Toughness level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权坚韧，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Power level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权力量，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Motivation level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权鼓舞，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Pheromones level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权信息素，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Artisanistry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权手艺娴熟，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Carpentry level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权木工，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Prismal level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权棱镜化，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Equality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权平等，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Criticality level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权暴击限界，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Resilience level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权弹性，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Dump Perk Tenacity level post-dump: (.*) Radon Dumped: (.*) Rn.$/, '$1宇宙2自动特权2：主加特权坚持，主加后特权等级：$2，花费：$3氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks2: Pass Two Complete. Cleanup Spent Any Leftover Radon: (.*) He.$/, '$1宇宙2自动特权2：第二阶段完成。花费了剩余的$2氡。'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Range$/, '$1宇宙2自动特权-洗点后购买：范围'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Agility$/, '$1宇宙2自动特权-洗点后购买：敏捷'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Bait$/, '$1宇宙2自动特权-洗点后购买：诱饵'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Trumps$/, '$1宇宙2自动特权-洗点后购买：王牌'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Packrat$/, '$1宇宙2自动特权-洗点后购买：囤积成瘾'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Overkill$/, '$1宇宙2自动特权-洗点后购买：超杀'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Looting$/, '$1宇宙2自动特权-洗点后购买：劫掠'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Toughness$/, '$1宇宙2自动特权-洗点后购买：坚韧'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Power$/, '$1宇宙2自动特权-洗点后购买：力量'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Motivation$/, '$1宇宙2自动特权-洗点后购买：鼓舞'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Pheromones$/, '$1宇宙2自动特权-洗点后购买：信息素'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Artisanistry$/, '$1宇宙2自动特权-洗点后购买：手艺娴熟'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Carpentry$/, '$1宇宙2自动特权-洗点后购买：木工'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Prismal$/, '$1宇宙2自动特权-洗点后购买：棱镜化'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Equality$/, '$1宇宙2自动特权-洗点后购买：平等'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Criticality$/, '$1宇宙2自动特权-洗点后购买：暴击限界'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Resilience$/, '$1宇宙2自动特权-洗点后购买：弹性'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Tenacity$/, '$1宇宙2自动特权-洗点后购买：坚持'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Buying: Greed$/, '$1宇宙2自动特权-洗点后购买：贪婪'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Range$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：范围'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Agility$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：敏捷'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Bait$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：诱饵'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Trumps$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：王牌'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Packrat$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：囤积成瘾'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Overkill$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：超杀'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Looting$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：劫掠'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Toughness$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：坚韧'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Power$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：力量'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Motivation$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：鼓舞'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Pheromones$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：信息素'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Artisanistry$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：手艺娴熟'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Carpentry$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：木工'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Prismal$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：棱镜化'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Equality$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：平等'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Criticality$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：暴击限界'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Resilience$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：弹性'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Tenacity$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：坚持'], //脚本自动特权设置
    [/^(.*)RAutoPerks-Respec Error Couldn't Afford Asked Perk: Greed$/, '$1宇宙2自动特权-洗点错误，氡不足以购买特权：贪婪'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Range$/, '$1宇宙2自动特权需要洗点特权：范围'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Agility$/, '$1宇宙2自动特权需要洗点特权：敏捷'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Bait$/, '$1宇宙2自动特权需要洗点特权：诱饵'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Trumps$/, '$1宇宙2自动特权需要洗点特权：王牌'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Packrat$/, '$1宇宙2自动特权需要洗点特权：囤积成瘾'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Overkill$/, '$1宇宙2自动特权需要洗点特权：超杀'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Looting$/, '$1宇宙2自动特权需要洗点特权：劫掠'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Toughness$/, '$1宇宙2自动特权需要洗点特权：坚韧'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Power$/, '$1宇宙2自动特权需要洗点特权：力量'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Motivation$/, '$1宇宙2自动特权需要洗点特权：鼓舞'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Pheromones$/, '$1宇宙2自动特权需要洗点特权：信息素'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Artisanistry$/, '$1宇宙2自动特权需要洗点特权：手艺娴熟'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Carpentry$/, '$1宇宙2自动特权需要洗点特权：木工'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Prismal$/, '$1宇宙2自动特权需要洗点特权：棱镜化'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Equality$/, '$1宇宙2自动特权需要洗点特权：平等'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Criticality$/, '$1宇宙2自动特权需要洗点特权：暴击限界'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Resilience$/, '$1宇宙2自动特权需要洗点特权：弹性'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Tenacity$/, '$1宇宙2自动特权需要洗点特权：坚持'], //脚本自动特权设置
    [/^(.*)RAutoPerks RESPEC Required for: Greed$/, '$1宇宙2自动特权需要洗点特权：贪婪'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Range$/, '$1宇宙2自动特权-无洗点提升：范围'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Agility$/, '$1宇宙2自动特权-无洗点提升：敏捷'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Bait$/, '$1宇宙2自动特权-无洗点提升：诱饵'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Trumps$/, '$1宇宙2自动特权-无洗点提升：王牌'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Packrat$/, '$1宇宙2自动特权-无洗点提升：囤积成瘾'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Overkill$/, '$1宇宙2自动特权-无洗点提升：超杀'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Looting$/, '$1宇宙2自动特权-无洗点提升：劫掠'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Toughness$/, '$1宇宙2自动特权-无洗点提升：坚韧'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Power$/, '$1宇宙2自动特权-无洗点提升：力量'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Motivation$/, '$1宇宙2自动特权-无洗点提升：鼓舞'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Pheromones$/, '$1宇宙2自动特权-无洗点提升：信息素'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Artisanistry$/, '$1宇宙2自动特权-无洗点提升：手艺娴熟'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Carpentry$/, '$1宇宙2自动特权-无洗点提升：木工'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Prismal$/, '$1宇宙2自动特权-无洗点提升：棱镜化'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Equality$/, '$1宇宙2自动特权-无洗点提升：平等'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Criticality$/, '$1宇宙2自动特权-无洗点提升：暴击限界'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Resilience$/, '$1宇宙2自动特权-无洗点提升：弹性'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Tenacity$/, '$1宇宙2自动特权-无洗点提升：坚持'], //脚本自动特权设置
    [/^(.*)RAutoPerks-NoRespec Adding: Greed$/, '$1宇宙2自动特权-无洗点提升：贪婪'], //脚本自动特权设置
    [/^(.*)RAutoPerks - A Respec is required. Trying respec...$/, '$1宇宙2自动特权-需要洗点。尝试洗点中……'], //脚本自动特权设置
    [/^(.*)My HeliumHr was: (.*) & the Best HeliumHr was: (.*) at zone$/, '$1当前氦每小时为$2，自上次传送后最高的氦每小时为$3，出现区域为'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Size$/, '$1挑战2自动运行：运行尺寸挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Slow$/, '$1挑战2自动运行：运行迟缓挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Watch$/, '$1挑战2自动运行：运行守望挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Discipline$/, '$1挑战2自动运行：运行纪律挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Balance$/, '$1挑战2自动运行：运行平衡挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Meditate$/, '$1挑战2自动运行：运行冥想挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Metal$/, '$1挑战2自动运行：运行金属挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Lead$/, '$1挑战2自动运行：运行领导挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Nom$/, '$1挑战2自动运行：运行美味挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Electricity$/, '$1挑战2自动运行：运行电流挑战'], //脚本传送门设置
    [/^(.*)C2 Runner: Running C2 Challenge Toxicity$/, '$1挑战2自动运行：运行毒性挑战'], //脚本传送门设置
    [/^(.*)First Stage: Bought Max Looting II$/, '$1第一阶段：购买最大数量的劫掠 II特权'], //脚本传送门设置
    [/^(.*)C2 Runner: All C2s above Threshold!$/, '$1挑战2自动运行：所有挑战2均高于阈值！'], //脚本传送门设置
    [/^(.*)All available Dailies already completed.$/, '$1当前全部的日常挑战都完成了。'], //脚本传送门设置
    [/^(.*)Portaling into Daily for: (.*) now!$/, '$1传送并进行日常挑战：日期$2！'], //脚本传送门设置
    [/^(.*)Second Stage: Bought Max Looting II$/, '$1第二阶段：购买最大数量的劫掠 II特权'], //脚本传送门设置
    [/^(.*)Finished challenge2 because we are on zone$/, '$1该挑战2结束，因为我们到达了区域'], //脚本传送门设置
    [/^(.*)My RadonHr was: (.*) & the Best RadonHr was: (.*) at zone$/, '$1当前氡每小时为$2，自上次传送后最高的氡每小时为$3，出现区域为'], //脚本传送门设置
    [/^(.*)First Stage: Bought Max Greed$/, '$1第一阶段：购买最大数量的贪婪特权'], //脚本传送门设置
    [/^(.*)First Stage: Bought Max Looting$/, '$1第一阶段：购买最大数量的劫掠特权'], //脚本传送门设置
    [/^(.*)Second Stage: Bought Max Greed$/, '$1第二阶段：购买最大数量的贪婪特权'], //脚本传送门设置
    [/^(.*)Second Stage: Bought Max Looting$/, '$1第二阶段：购买最大数量的劫掠特权'], //脚本传送门设置
    [/^(.*)AutoStance B\/$/, '$1自动阵型 B/阵型'], //脚本阵型设置
    [/^(.*)Upgraded Miners$/, '$1购买升级：矿工'], //脚本升级设置
    [/^(.*)Upgraded Scientists$/, '$1购买升级：科学家'], //脚本升级设置
    [/^(.*)Upgraded Coordination$/, '$1购买升级：协作'], //脚本升级设置
    [/^(.*)Upgraded Speedminer$/, '$1购买升级：采矿加速'], //脚本升级设置
    [/^(.*)Upgraded Speedlumber$/, '$1购买升级：砍伐加速'], //脚本升级设置
    [/^(.*)Upgraded Speedfarming$/, '$1购买升级：耕作加速'], //脚本升级设置
    [/^(.*)Upgraded Speedscience$/, '$1购买升级：研究加速'], //脚本升级设置
    [/^(.*)Upgraded Speedexplorer$/, '$1购买升级：探险家加速'], //脚本升级设置
    [/^(.*)Upgraded Megaminer$/, '$1购买升级：超级采矿'], //脚本升级设置
    [/^(.*)Upgraded Megalumber$/, '$1购买升级：超级砍伐'], //脚本升级设置
    [/^(.*)Upgraded Megafarming$/, '$1购买升级：超级耕作'], //脚本升级设置
    [/^(.*)Upgraded Megascience$/, '$1购买升级：超级研究'], //脚本升级设置
    [/^(.*)Upgraded Efficiency$/, '$1购买升级：效率'], //脚本升级设置
    [/^(.*)Upgraded TrainTacular$/, '$1购买升级：格挡提升'], //脚本升级设置
    [/^(.*)Upgraded Trainers$/, '$1购买升级：训练师'], //脚本升级设置
    [/^(.*)Upgraded Explorers$/, '$1购买升级：探险家'], //脚本升级设置
    [/^(.*)Upgraded Blockmaster$/, '$1购买升级：格挡大师'], //脚本升级设置
    [/^(.*)Upgraded Battle$/, '$1购买升级：战斗'], //脚本升级设置
    [/^(.*)Upgraded Bloodlust$/, '$1购买升级：嗜血'], //脚本升级设置
    [/^(.*)Upgraded Bounty$/, '$1购买升级：赏金'], //脚本升级设置
    [/^(.*)Upgraded Egg$/, '$1购买升级：蛋'], //脚本升级设置
    [/^(.*)Upgraded Anger$/, '$1购买升级：愤怒'], //脚本升级设置
    [/^(.*)Upgraded Formations$/, '$1购买升级：阵型'], //脚本升级设置
    [/^(.*)Upgraded Dominance$/, '$1购买升级：支配阵型'], //脚本升级设置
    [/^(.*)Upgraded Barrier$/, '$1购买升级：屏障阵型'], //脚本升级设置
    [/^(.*)Upgraded UberHut$/, '$1购买升级：超级小屋'], //脚本升级设置
    [/^(.*)Upgraded UberHouse$/, '$1购买升级：超级宅院'], //脚本升级设置
    [/^(.*)Upgraded UberMansion$/, '$1购买升级：超级豪宅'], //脚本升级设置
    [/^(.*)Upgraded UberHotel$/, '$1购买升级：超级宾馆'], //脚本升级设置
    [/^(.*)Upgraded UberResort$/, '$1购买升级：超级度假村'], //脚本升级设置
    [/^(.*)Upgraded Trapstorm$/, '$1购买升级：自动陷阱'], //脚本升级设置
    [/^(.*)Upgraded Gigastation$/, '$1购买升级：千兆核心'], //脚本升级设置
    [/^(.*)Upgraded Shieldblock$/, '$1购买升级：盾牌格挡'], //脚本升级设置
    [/^(.*)Upgraded Potency$/, '$1购买升级：繁殖效率'], //脚本升级设置
    [/^(.*)Upgraded Magmamancers$/, '$1购买升级：岩浆巫师'], //脚本升级设置
    [/^(.*)Upgraded Rage$/, '$1购买升级：暴怒'], //脚本升级设置
    [/^(.*)Upgraded Prismatic$/, '$1购买升级：棱镜护盾'], //脚本升级设置
    [/^(.*)Upgraded Prismalicious$/, '$1购买升级：优质棱镜'], //脚本升级设置
    [/^(.*)Error: LocalStorage is full, or error. Attempt to delete some portals from your graph or restart browser.$/, '$1浏览器数据存储已满，或者出错。请删除一些图表中传送门的数据或重启浏览器。'], //脚本公用设置
]);
