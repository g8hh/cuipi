/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //#region 标题标点等
    'Trimps Updates!': '脆皮更新日志！',
    '!': '！',
    //#endregion 
    //#region 更新大类
    'Balance': '平衡性调整',
    'Bug Fix': '错误修复',
    'Bug Fixes': '错误修复',
    'Bug Fixes (U1 and U2)': '错误修复(宇宙1及宇宙2)',
    'Content': '游戏内容',
    'Content Change': '游戏内容变更',
    'Content (Universe 2)': '游戏内容(宇宙2)',
    'Content (Universe 2 spoilers!)': '游戏内容(含宇宙2剧透！)',
    'Content/Balance': '游戏内容/平衡性调整',
    'Misc': '杂项',
    'Other': '其他',
    'QOL': '游戏体验',
    'Screen Reader': '屏幕阅读版',
    'Screen Reader Version': '屏幕阅读版',
    'Spire Assault': '尖塔突击',
    'UI/QOL': '游戏界面/游戏体验',
    'UI/Quality Of Life': '游戏界面/游戏体验',
    'UI/Quality of Life': '游戏界面/游戏体验',
    'UI / Quality of Life Stuff': '游戏界面/游戏体验等',
    'Universe 1': '宇宙1',
    'Universe 2': '宇宙2',
    'Universe 2 UI/QOL': '宇宙2游戏界面/游戏体验',
    //#endregion
    //#region 5.6.5
    'The Experience Challenge no longer requires that you end the Challenge on a BW in order to get the extra bonus. If you complete Experience by completing Z700, you\'ll now get credit for the highest BW cleared on that run. Adjusted descriptions/tooltips for new behavior. NOTE: You need to clear a BW on this patch for it to count. If you\'re mid-Experience and above Z600 when updating to 5.6.5, you\'ll still need to finish that one last run via BW completion.': '经历挑战不再需要通过仿生仙境地图来获得额外加成。如果您通过区域700完成经历挑战，那么将根据本周目最高通过的仿生仙境地图来获得加成。相应描述文字也进行了调整。注意：如果您在本次更新前正在进行经历挑战，则仍然需要至少通过一张仿生仙境地图才能获得加成。',
    'Holey (U1 ': '多洞(宇宙1',
    'hidden': '隐藏',
    ' feat) now unhides at Z75. This feat was added back when it was more realistic to actually spend this much on Wormholes and is no longer meeting the goal of hidden feats being things that will usually just happen eventually.': '壮举)在区域75才出现。到达该区域后您差不多可以获得足够数量的氦来消耗到虫洞上，此时再隐藏这个壮举就没有意义了。',
    'Added an Equality UI to Time Warp where applicable': '在时间跃迁界面中添加了平等界面。',
    'Added a stat for highest BW clear': '增加了仿生仙境地图最高通过区域的统计。',
    'Fixed a crash that could occur when MaZ tried to run Melting Point while there was another map in progress.': '修复了自动进图在运行一张地图时又尝试运行熔点地图导致的游戏崩溃问题。',
    //#endregion
    //#region 5.6.4
    'SA Presets saved after 5.6.4 will store your current Enemy Level and Ring Mods as well. Added options for enabling/disabling the loading of Enemy Level and Ring Mods when loading a preset. These options don\'t need to be on when saving a preset, just for loading.': '从5.6.4版本开始，尖塔突击保存的预设也会保存敌人等级和灵戒词缀。增加了读取预设时是否设置敌人等级和载入灵戒词缀的选项。这些选项只需要在读取预设时设置。',
    'Moved around some things in the SA settings screen to fit some extra information and to make sure the save/load/rename buttons are always at the top if item lists get really long later on.': '调整了尖塔突击设置的界面以适应新增的选项，并保证即使在物品列表极长的情况下，保存、读取和重命名按钮也始终位于顶部。',
    'Time Warp\'s Formations UI now properly updates as you unlock new Formations in game.': '时间跃迁的阵型界面可以在解锁新阵型后正确刷新。',
    //#endregion
    //#region 5.6.3
    'Bag of Nails now stops Slowing Aura on the same turn that you apply a bleed': '锐钉之袋可以在触发流血的同一回合使怒怒的减速气场无效了。',
    'Frozen Castle Heirlooms now have their own seed': '冻结城堡掉落的传家宝拥有了自己的随机数种子。',
    'Equipping a hidden SA item now unhides it': '装备隐藏的尖塔突击物品时将使它取消隐藏。',
    'Fixed an issue where the SA UI would be unresponsive when killing enemies really quickly': '修复了过快击杀敌人时尖塔突击界面无响应的问题。',
    'Tightened up the Heirloom UI so the two most recent tiers fit better on the screen': '调整了传家宝界面，以使最后两种传家宝的显示效果变得更好。',
    //#endregion
    //#region 5.6.2
    'SA Ring upgrades purchased after this patch can now be undone': '可以回滚本次更新后进行的灵戒升级了。',
    'Frozen Castle is now green on the map selection screen': '在地图界面中，冻结城堡变为绿色背景。',
    'Frozen Castle now has the visual snow effect': '冻结城堡拥有了下雪的视觉效果。',
    'You can now change Perks on the Portal screen without needing to abandon Hypothermia first': '您不需要放弃失温挑战，也可以在传送门界面中调整特权了。',
    'The Equality tab now has a visual indicator for when scaling is on or off': '平等面板可以直接显示目前是否启用缩放了。',
    'Equality stacks now also show when scaling is disabled': '禁用缩放时也可以显示平等生效等级了。',
    'When using a screen with less than 1000px width, the Equality popup uses a larger percentage of your screen\'s width': '当屏幕宽度低于1000px时，平等窗口的显示大小增加。',
    'Vertically centered tooltips no longer consider the settings bar to be valid screen space, and try to avoid overlapping it': '垂直居中的提示框不再把底部设置纳入居中范围内，并会尝试覆盖底部设置。',
    'Scruffy\'s L18 bonus no longer considers it a run if you Portal below Z25 with no completed Void Maps': '如果您在低于区域25的区域传送了，且没有运行过虚空地图，则不纳入污污等级18的技能加成计算中。',
    'Glass stacks can no longer fall below 0': '玻璃层数无法低于0了。',
    'Fixed an issue where Omni-Enhancer wasn\'t providing Poison Stack Rate': '修复了全领域强化器不增加中毒层数叠加数的问题。',
    'Fixed an issue where Wrath Crafted Hatchet wasn\'t providing Attack Speed': '修复了狂怒手斧不减少攻击间隔的问题。',
    //#endregion
    //#region 5.6.1
    'Shards are now properly refunded when canceling a contract': '放弃合约时可以正确返还晶块了。',
    'Fixed a display bug where Experience would show an infinity symbol instead of "0%" from Bionic Wonderlands if the Challenge was completed via Z700 instead of BWs.': '修复了通过区域700完成经历挑战时，仿生仙境的经验值加成显示无穷大，而不是0%的问题。',
    'The Run Map button for Frozen Castle now properly disappears after the map does': '冻结城堡的运行地图按钮可以正常地消失了。',
    'Reworded the Hypothermia Ember tooltip for clarity': '调整了失温挑战的余烬提示框文字。',
    'Reworded the end of the Experience description involving completion via BW vs Z700': '调整了经历挑战通过仿生仙境地图和区域700完成挑战时的相应文字。',
    'Fixed some cut-off text on Doppelganger Signet\'s Contract description': '修复了分身纹章的合约描述中部分截断文本的问题。',
    //#endregion
    //#region 5.6.0
    'Added a new Challenge at Z600, "Experience". This is a repeatable Challenge that grants extra Fluffy Exp instead of Helium.': '增加了一个区域600解锁的挑战“经历”。它是一个可重复挑战，可以额外获得绒绒经验值。',
    'Added a new Heirloom tier that can begin dropping at Z200, and two brand new mods that can roll at the new tier.': '传家宝增加了新的稀有度，它在区域200开始掉落，并且可以出现两个新词缀。',
    'Added a new repeatable Radon Challenge at U2 Z175 that also unlocks a new Perk on first completion': '增加了一个区域175解锁的可重复挑战，首次完成后还可以解锁一个特权。',
    'Added another new Challenge with a unique reward. This Challenge is also available as a Challenge': '增加了另一个拥有独特奖励的挑战。它同时也出现在挑战',
    'Added a new Unique Map at U2 Z175': '增加了一张在区域175出现的新独特地图。',
    'Added a new crit tier': '增加了新的暴击阶级。',
    'Added Scruffy bonuses to Levels 17, 18, and 19.': '污污增加了等级17，18，19的技能。',
    'Added a new Achievement tier and 6 new Achievements': '增加了新的成就阶级和6个成就。',
    'Observation now has 1 level included as part of the base perk when it is unlocked. This grants everyone +1000 trinket storage and 1 perk level worth of increased drop chance and mult. The guaranteed drop every 25 zones for every 2 levels of the perk is unchanged and still increases at 2/4/6 etc.': '解锁洞察特权后直接获得1级特权的效果。它可以使小符饰上限增加1000，相应的加成也正常计算。稳定获得的小符饰不受影响。',
    'Added a bunch of new affixes that can spawn starting at Enemy Level 51. Some of these new affixes are considered "Specials" and are mutually exclusive.': '增加了大量新词缀，从敌人等级51以后出现。部分能力词缀为“特殊”词缀，彼此互斥。',
    'Enemies killed at and above level 51 after this patch now drop Shards in addition to Dust, at a rate of 1 shard per 1 billion Dust earned at 51+.': '击杀敌人等级51及以上的敌人后除了获得魔尘以外还可以获得晶块，每获得十亿(1e9)魔尘就可以获得1晶块。',
    'Shards can be used to purchase Contracts for and Upgrade new items from this patch, or to upgrade a powerful new customizable bonus item called The Ring.': '你可以使用晶块来接受新合约，升级新物品，或者是升级新的自定义奖励物品，灵戒。',
    'Above enemy level 50, you are now much less likely to run into the same resistance on back to back levels, and much less likely to get two different resists on the same level.': '对于超过敌人等级50的敌人来说，相邻等级的敌人拥有相同种类抗性的概率大幅度下降，同一等级敌人拥有两种抗性的概率大幅度下降。',
    'You no longer get the warning that you need an item that can cause a shock when using Nozzled Goggles.': '装备护目镜时不再提示需要可以使敌人震荡的物品。',
    'Enemy Slow Aura is now always applied before Huffy\'s excess Attack Speed -> Slow Aura conversion, making sure Huffy can reach 0.5 Attack Time on levels with Slow Aura.': '从现在起，将先计算敌人的减速气场，然后再计算怒怒的攻击间隔是否低于下限，是否转化为减速气场。这可以保证怒怒在敌人拥有减速气场时还可以达到0.5的攻击间隔。',
    'Added 7 new items that cost Shards': '增加了7个需要花费晶块的新物品。',
    'Added 1 new item that costs Dust.': '增加了1个需要花费魔尘的新物品。',
    'Added stats for highest level and Shards': '增加了最高等级和晶块的统计。',
    'Added a Formations UI to Time Warp': '时间跃迁中增加了阵型界面。',
    'AutoEquip, AutoUpgrade, AutoPrestige, and AutoStructure purchases will now be checked automatically before resources shred on Pandemonium': '在群魔乱舞的效果减少资源之前，会先判断能否触发自动装备、自动升级、自动重铸和自动建造。',
    'When in the Map Chamber, the Hotkey "C" will now Continue/Run Map': '当在地图界面时，可以使用快捷键：C来继续或运行地图。',
    'Prettified the Nu cost of adding a Carry slot in the Heirlooms window': '在传家宝界面中，升级携带栏容量的虚空物质花费数值也使用设置中的相应记数法。',
    'When Portaling with Heirlooms that will be recycled, the confirmation popup now tells you the highest rarity of Heirloom in your inventory': '传送时，如果有可以回收的传家宝，将提示您临时栏中传家宝最高的稀有度。',
    'When finding Dark Essence, the message in the log now tells you how many drops remain on the current Zone': '获得黑暗精华时，消息会提示您当前区域中还可以掉落几次黑暗精华。',
    'After finishing your final Scientist Challenge, you can now click the Portal Title (Time Portal Mk. VI) to change the background color to one of the earlier ones.': '完成最后一次科学家挑战后，您可以点击传送门标题(时空传送门·改 VI)来切换时空传送门背景颜色。',
    'Heirloom upgrades can now be purchased 100x at a time': '传家宝升级可以一次性购买100次升级了。',
    'Darkened the orange tooltip price text that indicates insufficient storage space': '调暗了提示存储上限不足的橙色提示框文字颜色。',
    'Observation\'s tooltip now updates mult and drop chance on the Portal screen while allocating perk levels without having to confirm': '传送门界面中，洞察特权的相应加成变化可以在分配后直接查看，无需确认分配。',
    'Adjusted the U2 style to move the Prismatic Shield display a bit more to the right so "Crit!"s aren\'t overlapped with high PS values': '调整了棱镜护盾的显示位置，以免暴击文字覆盖棱镜护盾的相应内容。',
    'The MaZ error message for Start Zone being too low or too high now properly says Start Zone instead of Exit at Zone': '自动进图对于起点区域太低或太高报错的消息提示文字不再显示“退出区域”，改为显示“起点区域”。',
    'Fixed an issue where the max for MaZ End Zone was 1 lower than Start Zone': '修复了自动进图的终点区域最大值比起点区域低1级时导致的问题。',
    'The Liquification III tooltip in U2 now shows the proper HSII zone': '宇宙2的液化 III专精提示框中，区域的相关数值可以正确显示了。',
    'Fixed an issue where replacing a mod on a Spire Core could sometimes think you don\'t have enough Spirestones when you do': '修复了替换尖塔核心词缀时，可能错误认为尖塔石不足的问题。',
    'Fixed a display issue where leftover Radon sometimes showed an incorrect value on the View Perks screen until a perk was bought': '修复了查看特权界面中剩余氡的数值有时不准确的问题。',
    'The game now clears your Ctrl/Shift key state when you unfocus the game': '当游戏未处于前台时，将自动弹起Ctrl和Shift按键。',
    //#endregion
    //#region 5.5.1
    'Added "i" as a hotkey to open Spire Assault, and added a Help/FAQ entry for it.': '您可以使用快捷键：i打开尖塔突击了，在尖塔突击帮助/提示中增加了相应描述。',
    'Added a Help/FAQ SA entry explaining how to progress the Kill counter': '在尖塔突击帮助/提示中增加了关于击杀计数的描述。',
    'Added a Help/FAQ SA entry explaining how to reset the Session Score': '在尖塔突击帮助/提示中增加了关于击杀计数重置的描述。',
    'Fixed an issue where the AutoJob balancing on Miner/Scientist unlock wasn\'t respecting the set max for that job': '修复了自动工作在解锁矿工或科学家自动分配工作时忽略工作上限的问题。',
    'Fixed an issue where the SA item description bar would disappear when renaming a preset': '修复了为尖塔突击预设重命名导致物品描述消失的问题。',
    'Removed the hover effect/pointer when mousing over the health bars in SA': '将鼠标停留在尖塔突击的生命条上时不再显示悬停效果或指针。',
    'Reworded the description of Huffstle to clarify that you need a score of 100-0 rather than 100 wins in a row': '调整了怒怒之城成就的描述，更准确表达完成条件。',
    'Fixed an issue where the Scientist Challenge was starting with the incorrect amount of Science': '修复了科学家挑战的起始科学点不正确的问题。',
    'Fixed an issue that existed prior to 5.5.0 where U2 Perk import strings were checking against U1 perks when deciding if a respec needed to be used': '修复了5.5.0之前就存在的问题，宇宙2导入特权时检查是否需要洗点错误地基于宇宙1特权进行。',
    //#endregion
    //#region 5.5.0
    'Holidays are now automated! The Pumpkimp Event now automatically turns on from Oct 1 through Nov 5, the Presimpt Event runs from Dec 15 through Jan 15, and the Eggs Event runs for all of April': '从现在起，活动将自动开始和结束！脆皮南瓜怪活动从10月1日开始，到11月5日结束；脆皮小礼活动从12月15日开始，到1月15日结束；万圣节彩蛋活动持续整个4月。',
    'The Curious Perk now grants +80 base Fluffy XP per level, up from +60': '好奇特权的绒绒基础经验奖励从+60变为+80。',
    'Towers in the Personal Spire are now capped to 10 each. Once you have 10 of each Tower, you\'ll gain the option to "Seal" your Spire for an extra bonus.': '从现在起，您的尖塔中每种小塔最多可以建造10个。当每种小塔都到达10个以后，您将可以“关闭尖塔”以获得额外加成。',
    'Added 2 new Frost Trap upgrades and 2 new Poison Trap upgrades to the Player Spire': '冰霜陷阱和剧毒陷阱增加了两次升级。',
    'Bionic Wonderlands can no longer be created more than 100 Zones past your Obsidian level': '仿生仙境地图等级无法超过黑曜石区域加上100层。',
    'The Daily Challenge Reflect modifier no longer reflects Overkill damage, and the damage dealt in U2 no longer skips your Shield.': '日常挑战的[反馈]词缀不再反馈溢出伤害，宇宙2中造成的伤害不再无视棱镜护盾。',
    ' bonus is now capped at 60K%': '加成无法超过60K%(6e4%)。',
    'Added a new minigame-style feature to Universe 2, unlocked at Z75.': '宇宙2增加了一个新机制，在区域75解锁。',
    'Added a new repeatable Radon Challenge at Z155': '增加了一个区域155解锁的可重复挑战。',
    'Added a new Mayhem-like challenge at Z150': '增加了一个区域150解锁的挑战，机制与暴乱类似。',
    'The Mayhem Challenge completion bonus now also applies to Helium in U1': '暴乱挑战的加成对宇宙1的氦也生效。',
    'Added 15 new Achievements': '新增了15个成就。',
    'Achievement percentage above 50k now grants 1 GU every 10k%': '成就的伤害加成超过50K%(5e4%，50000%)以后，每有10K%(1e4%，10000%)伤害加成，每周目初始就获得一个金色升级。',
    'Added a bonus to Scruffy L16': '污污增加了等级16的技能。',
    'Changed some story messages between Z60-100, and added new story messages through Z160': '调整了区域60至区域100的部分故事消息，故事消息新增至区域160。',
    'The Archaeology Challenge has moved from Z95 to Z90': '考古学挑战从区域95解锁变为区域90解锁。',
    'The second time you complete Archaeology will now unlock a string based Custom AutoGold option': '第二次完成考古学挑战后可以解锁自定义自动金色升级。',
    'Added the ability to run Melting Point from Map at Zone, and added 1 new Map Preset for U2 to put it in.': '您可以在自动进图中自动运行熔点地图了。',
    'The U2 Explode Daily Mod now hits your Shield': '宇宙2日常挑战中被击杀时造成伤害的词缀不再无视棱镜护盾。',
    'Equality Reversing now has its own slider, and now works based on current attack count against the enemy rather than waiting for something to die. This potentially allows multiple stacks of Equality to be reversed on the same enemy.': '平等消除追加滑块，效果从基于阵亡次数改为基于攻击次数。改动后可以对同一个敌人触发多次平等消除。',
    'Scruffy L14 now grants 1300% damage, up from 1225%': '污污等级14的攻击力加成从1225%变为1300%。',
    'The Bublé Challenge now grants +500% Rn (up from +300%) on completion, and +200% Rn (up from +100%) on fail.': '泡影挑战完成时的氡额外获取量从+300%变为+500%，失败时的氡额外获取量从+100%变为+200%。',
    'The Exterminate Achievement now requires that you reach 100 Swarm Stacks by Z120, then complete the Challenge.': '灭虫挑战的成就变为需要在到达区域120时至少拥有100层虫群壮大，然后完成灭虫挑战。',
    'Map at Zone \'Exit At Zone\' renamed to \'Start Zone\', and a new field has been added for \'End Zone\'. End Zone defaults to 999 but can be changed to cause a setting to stop repeating at a given Zone. Settings that exit at the same cell will not conflict if one ends before the other starts.': '自动进图中的“退出区域”更名为“起点区域”，新增了一个叫做“终点区域”的选项框。终点区域默认为999，设置后将在相应区域停止地图重复。在相同格子退出的设置，如果在其他设置生效前该设置到达终点，则不会冲突。',
    'Added an option for \'Repeat X Times\' to the Map at Zone repeat dropdown': '自动进图的设置重复次数中新增一项“重复X次”，可以自定义重复次数。',
    'Reunited a lost closing paranthesis with his family in the resource breakdown for Gatherer (Scruffy/Fluffy)': '资源产量明细中的丰产(污污/绒绒)补上了丢失的右括号。',
    'If AutoJobs is enabled and enough workspaces are available, AutoJobs will now fill Miners and Scientists to their proper ratio amount as soon as they\'re unlocked.': '如果开启了自动工作，且工作区足够，则它会在解锁矿工和科学家时立刻分配相应工作。',
    'Added the Storm and Berserk Challenge descriptions to their C3 descriptions': '增加了风暴和狂战的挑战³描述。',
    'You can now see a brief description of the effects of each Map Biome in the Map Biome Dropdown tooltip': '地图界面的生物群落增加了每种生物群落的简单效果描述。',
    'Scruffy L15 (+10% Nu spend mult) now works in U1 as well': '污污等级15的技能(传家宝可使用的虚空物质上限增加10%)可在宇宙1中生效了。',
    'Improved the alignment of Achievement category bottom corners in the Achievements UI': '改进了成就界面中成就类别底角的对齐方式。',
    'Fixed a Universe 2 bug where the "Base" in the Loot Breakdown was compensating for nonexistent MegaBooks': '修复了宇宙2中战利品明细的“基础值”错误地乘以不存在的超级升级的问题。',
    'The Portal Error message now fits better without overlapping text': '传送时报错的消息提示文字不再互相重叠。',
    'Fixed an issue where you could remove too many points of Carpentry on the Downsize Challenge, potentially bricking your run': '修复了进行精简挑战时可能移除过多木工特权，从而阻碍进度的问题。',
    'Respeccing out of Frenzy now properly clears the Frenzy stack icon': '将战狂特权洗点至0级后不再使战狂层数图标仍然留在界面上。',
    'Fixed an issue where the damage display would still show red crits as base once purple crits were at or above 100% chance': '修复了当紫色暴击率达到或超过100%时，游戏界面的攻击力旁暴击颜色仍然为红色的问题。',
    'Fixed an issue where the Equality popup would get messed up if pressing the hotkey while another tooltip was active': '修复了同时按下快捷键导致平等窗口错乱的问题。',
    //#endregion
    //#region 5.4.6
    'Strange eggs have started appearing in some Zones, click them and see what\'s inside! This event will last for the rest of April.': '有一些区域开始出现奇怪的蛋，点击它们，看看里面有什么！活动持续到4月底。',
    //#endregion
    //#region 5.4.5
    'Presimpts and Snow have melted away until next year': '雪和脆皮小礼融化了，明年再见。',
    //#endregion
    //#region 5.4.4
    'Added a new repeatable Challenge to U2 Z130, and a new Perk that can be unlocked from the new Challenge.': '增加了一个宇宙2区域130解锁的可重复挑战，该挑战可以解锁一个新的特权。',
    //#endregion
    //#region 5.4.3
    'Note: A new U2 Challenge and Perk are in the works and currently being tested on our Discord server. However they need a few more days of testing/balance and I really wanted to switch to snow! Expect another patch in the next few days.': '注意：新的宇宙2挑战和特权已经制作完毕，在Discord上进行测试了。尽管它还需要测试和完善，但我已经迫不及待想让雪进来了！之后很快就会有另一个补丁的。',
    'Pumpkimps have gone in to hiding until next year': '脆皮南瓜怪躲起来了，明年再见。',
    'Snow and Presimpts have returned to the World for the rest of the year!': '雪和脆皮小礼又回到了世界上，它们会待到年底！',
    'Added 5 placeholder levels to Scruffy that only grant bonus damage.': '污污追加了5级上限，暂时只用于占位，提供伤害加成。',
    'You can now pat your pets!': '可以给绒绒污污拍头了！',
    'Centered the Equality Scaling popup over the left side of the screen rather than the entire screen, so that the battle pane is fully visible.': '平等缩放的提示框从屏幕中央移到了屏幕左边，这样就不会遮住战斗界面了。',
    //#endregion
    //#region 5.4.2
    'Pumpkimps have made their return to Trimps for the next few weeks! Find a Pumpkimp Patch in Zones, or lone Pumpkimps in maps for a chance at some treats!': '脆皮南瓜怪们又回来啦！接下来几周内，世界上可能出现一个由脆皮南瓜怪组成的图案，地图中也有零星落单的脆皮南瓜怪出现，击败它们可以获得很多好东西！',
    //#endregion
    //#region 5.4.1
    'Fixed an issue that was causing U2 Improbability stats to inflate as if Corruption was present in U2': '修复了宇宙2乌有者数值因腐化错误生效而不正常的问题。',
    'Fixed an issue that could cause Mayhem bosses to not gain any extra health or attack in certain situations': '修复了暴乱挑战的首领在某些情况下数值不上涨的问题。',
    'Fixed a spot on Golden Radon that said Helium': '修正了一处金色氡仍然被称为金色氦的文本错误。',
    //#endregion
    //#region 4.21
    'Challenge': '挑战',
    //#endregion

    //原样
    '': '',
    '': '',
}


//需处理的前缀
var cnPrefix = {
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    ": ": "：",
}

//需排除的，正则匹配
var cnExcludeWhole = [
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
]);