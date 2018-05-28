/*		Trimps
		Copyright (C) 2016 Zach Hood

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program (if you are reading this on the original
		author's website, you can find a copy at
		<trimps.github.io/license.txt>). If not, see
		<http://www.gnu.org/licenses/>. */

//Spoilers ahead, proceed with caution
function newGame () {
var toReturn = {
	global: {
		version: 4.72,
		isBeta: false,
		betaV: 0,
		killSavesBelow: 0.13,
		playerGathering: "",
		playerModifier: 1,
		buildingsQueue: [],
		timeLeftOnCraft: 0,
		crafting: "",
		timeLeftOnTrap: -1,
		world: 1,
		gridArray: [],
		mapGridArray: [],
		mapsOwnedArray: [],
		currentMapId: "",
		lastClearedCell: -1,
		lastClearedMapCell: -1,
		pauseFight: true,
		soldierHealth: 0,
		soldierHealthMax: 0,
		soldierHealthRemaining: 0,
		soldierCurrentAttack: 0,
		soldierCurrentBlock: 0,
		fighting: false,
		health: 50,
		attack: 6,
		block: 0,
		autoBattle: false,
		autoCraftModifier: 0,
		start: new Date().getTime(),
		time: 0,
		portalTime: new Date().getTime(),
		lastFightUpdate: "",
		battleCounter: 0,
		firing: false,
		mapsActive: false,
		preMapsActive: false,
		switchToMaps: false,
		switchToWorld: false,
		lookingAtMap: "",
		mapsOwned: 0,
		totalMapsEarned: 0,
		freshFight: false,
		tab: "All",
		repeatMap: false,
		buyAmt: 1,
		numTab: 1,
		spreadsheetMode: false,
		lockTooltip: false,
		portalActive: false,
		mapsUnlocked: false,
		lastOnline: 0,
		buyTab: "all",
		nextQueueId: 0,
		kongBonusMode: false,
		canRespecPerks: true,
		respecActive: false,
		heliumLeftover: 0,
		viewingUpgrades: false,
		totalPortals: 0,
		lastCustomAmt: 1,
		trapBuildAllowed: false,
		trapBuildToggled: false,
		lastSkeletimp: 0,
		pp: [],
		highestLevelCleared: 0,
		b: 0,
		challengeActive: "",
		selectedChallenge: "",
		lastOfflineProgress: "",
		sLevel: 0,
		totalGifts: 0,
		brokenPlanet: false,
		formation: 0,
		bestHelium: 0,
		tempHighHelium: 0,
		totalHeliumEarned: 0,
		removingPerks: false,
		lastBreedTime: 0,
		antiStacks: 0,
		prisonClear: 0,
		frugalDone: false,
		lastUnlock: 0,
		lowestGen: -1,
		breedBack: -1,
		titimpLeft: 0,
		mapBonus: 0,
		slowDone: false,
		turkimpTimer: 0,
		statsMode: "current",
		achievementBonus: 0,
		lastLowGen: 0,
		presimptStore: "food",
		lastWarp: 0,
		zoneStarted: new Date().getTime(),
		mapStarted: new Date().getTime(),
		bionicOwned: 0,
		roboTrimpLevel: 0,
		roboTrimpCooldown: 0,
		useShriek: false,
		usingShriek: false,
		autoUpgrades: false,
		autoUpgradesAvailable: false,
		autoPrestiges: 0,
		autoStorage: false,
		autoStorageAvailable: false,
		totalVoidMaps: 0,
		voidMapsToggled: false,
		voidBuff: "",
		lastVoidMap: 0,
		voidSeed: Math.floor(Math.random() * 1000000),
		heirloomSeed: Math.floor(Math.random() * 1000000),
		heirloomBoneSeed: Math.floor(Math.random() * 1000000),
		eggSeed: Math.floor(Math.random() * 1000000),
		mutationSeed: Math.floor(Math.random() * 1000000),
		enemySeed: Math.floor(Math.random() * 1000000),
		heirloomsExtra: [],
		heirloomsCarried: [],
		StaffEquipped: {},
		ShieldEquipped: {},
		nullifium: 0,
		maxCarriedHeirlooms: 1,
		selectedHeirloom: [],
		lastPortal: -1,
		addonUser: false,
		eggLoc: -1,
		researched: false,
		bonePortalThisRun: false,
		maxSplit: 1,
		maxSoldiersAtStart: -1,
		playFabLoginType: -1,
		lastCustomExact: 1,
		voidMaxLevel: -1,
		rememberInfo: false,
		spireActive: false,
		spireDeaths: 0,
		Geneticistassist: false,
		GeneticistassistSetting: -1,
		GeneticistassistSteps: [-1, 1, 10, 30],
		spireRows: 0,
		goldenUpgrades: 0,
		voidDeaths: 0,
		essence: 0,
		spentEssence: 0,
		skeleSeed: Math.floor(Math.random() * 1000000),
		decayDone: false,
		dailyChallenge: {},
		recentDailies: [],
		dailyHelium: 0,
		breedTime: 1,
		magmite: 0,
		magmaFuel: 0,
		generatorMode: 1, //0 passive, 1 active, 2 hybrid
		trimpsGenerated: 0,
		timeSinceLastGeneratorTick: -1,
		canMagma: true,
		lastBonePresimpt: 0,
		runningChallengeSquared: false,
		totalSquaredReward: 0,
		perkPreset1: {},
		perkPreset2: {},
		perkPreset3: {},
		improvedAutoStorage: false,
		firstCustomAmt: -1,
		firstCustomExact: -1,
		autoGolden: -1,
		autoStructureSetting: {enabled: false},
		passive: true,
		spiresCompleted: 0,
		lastSpireCleared: 0,
		sugarRush: 0,
		holidaySeed: Math.floor(Math.random() * 100000),
		hideMapRow: false,
		mapExtraBonus: "",
		realBreedTime: 0,
		fluffyExp: 0,
		fluffyPrestige: 0,
		selectedMapPreset: 1,
		genPaused: false,
		canMapAtZone: false,
		capTrimp: false,
		mapPresets: {
			p1: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0
			},
			p2: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0				
			},
			p3: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0
			}
		},
		lootAvgs: {
			food: [0],
			foodTotal: 0,
			wood: [0],
			woodTotal: 0,
			metal: [0],
			metalTotal: 0,
			gems: [0],
			gemsTotal: 0,
			fragments: [0],
			fragmentsTotal: 0
		},
		menu: {
			buildings: true,
			jobs: false,
			upgrades: false
		},
		messages: {
			Story: {
				enabled: true
			},
			Loot: {
				enabled: true,
				primary: true,
				secondary: true,
				bone: true,
				exotic: true,
				helium: true,
				essence: true,
				token: true,
				magma: true,
				events: true,
				cache: true
			},
			Unlocks: {
				enabled: true,
				repeated: true,
				unique: true
			},
			Combat: {
				enabled: true,
				trimp: true,
				enemy: true
			},
			Notices: {
				enabled: true
			}
		},
		prestige: {
			attack: 13,
			health: 14,
			cost: 57,
			block: 10
		},
		difs: {
			attack: 0,
			health: 0,
			block: 0,
			trainers: 0
		},
		getEnemyAttack: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			var amt = 0;
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var adjWorld = ((world - 1) * 100) + level;
			amt += 50 * Math.sqrt(world) * Math.pow(3.27, world / 2);
			amt -= 10;
			if (world == 1){
				amt *= 0.35;
				amt = (amt * 0.20) + ((amt * 0.75) * (level / 100));
			}
			else if (world == 2){
				amt *= 0.5;
				amt = (amt * 0.32) + ((amt * 0.68) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.375) + ((amt * 0.7) * (level / 100));
			else{
				amt = (amt * 0.4) + ((amt * 0.9) * (level / 100));
				amt *= Math.pow(1.15, world - 59);
			}
			if (world < 60) amt *= 0.85;
			if (world > 6 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].attack;
			return Math.floor(amt);
		},
		getEnemyHealth: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var amt = 0;
			amt += 130 * Math.sqrt(world) * Math.pow(3.265, world / 2);
			amt -= 110;
			if (world == 1 || world == 2 && level < 10){
				amt *= 0.6;
			amt = (amt * 0.25) + ((amt * 0.72) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.4) + ((amt * 0.4) * (level / 110));
			else{
				amt = (amt * 0.5) + ((amt * 0.8) * (level / 100));
				amt *= Math.pow(1.1, world - 59);
			}
			if (world < 60) amt *= 0.75;
			if (world > 5 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].health;
			return Math.floor(amt);
		}
	},
	empowerments: {
		Poison: {
			description: function () {
				return "When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing it to take <b>" + this.formatModifier(this.getModifier()) + "%</b> of the damage you dealt every attack until it dies. Each attack by your Trimps will further add to the poison effect.";
			},
			upgradeDescription: function () {
				return "Increases the percentage of damage that sticks to enemies as poison during the Empowerment of Poison by <b>" + this.formatModifier(this.baseModifier) + "%</b>. You currently poison for <b>" + this.formatModifier(this.getModifier()) + "%</b>, and next level will cause you to poison for <b>" + this.formatModifier(this.getModifier(1)) + "%</b>.";
			},
			baseModifier: 0.01,
			getModifier: function (change) {
				if (!change) change = 0;
				var bonusLevels = (game.talents.nature3.purchased) ? 5 : 0;
				return ((this.level + change + bonusLevels) * this.baseModifier);
			},
			formatModifier: function (number){
				return prettify(number * 100);
			},
			color: "#33bb33",
			currentDebuffPower: 0,
			level: 1,
			retainLevel: 0,
			tokens: 0
		},
		Wind: {
			description: function () {
				return "当这个赋权活动时，你的脆皮的每次成功攻击会对敌人造成一个debuff，导致风向膨胀，并将额外资源砸到你的手中。 每个堆栈增加从所有来源获得的氦 <b>" + this.formatModifier(this.getModifier()) + "%</b> 并增加所获得的所有其他资源 <b>" + this.formatModifier(this.getModifier() * 10) + "%</b> 直到敌人死亡（最多200堆）。 氦气奖金不适用于地图。";
			},
			upgradeDescription: function () {
				return "Increases the amount of extra Helium you find by <b>" + this.formatModifier(this.baseModifier) + "%</b> and non-Helium resources by <b>" + this.formatModifier(this.baseModifier * 10) + "%</b> per stack when the Empowerment of Wind is active. Your current bonus is <b>" + this.formatModifier(this.getModifier()) + "%</b> Helium, and next level will bring your bonus to <b>" + this.formatModifier(this.getModifier(1)) + "%</b> extra helium. Non-Helium resource gain is always 10x that of Helium, and the Helium bonus does not apply in maps.";
			},
			baseModifier: 0.001,
			getModifier: function (change) {
				if (!change) change = 0;
				var bonusLevels = (game.talents.nature3.purchased) ? 5 : 0;
				return ((this.level + change + bonusLevels) * this.baseModifier);
			},
			formatModifier: function (number) {
				return prettify(number * 100);
			},
			getCombatModifier: function () {
				return this.currentDebuffPower * this.getModifier();
			},
			currentDebuffPower: 0,
			color: "#337733",
			level: 1,
			retainLevel: 0,
			maxStacks: 200,
			tokens: 0
		},
		Ice: {
			description: function () {
				return "When this Empowerment is active, enemies will be Chilled each time your Trimps attack. The Chill debuff stacks, reduces the damage that enemy deals by <b>" + this.formatModifier(this.getModifier()) + "%</b> (compounding) per stack, and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%) until it dies.";
			},
			upgradeDescription: function () {
				return "Reduces the enemy's damage dealt from each stack of Chilled when the Empowerment of Ice is active by <b>" + this.formatModifier(1 - this.baseModifier) + "%</b> (compounding), and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%). Your current bonus is <b>" + this.formatModifier(this.getModifier()) + "%</b>, and next level will bring your bonus to <b>" + this.formatModifier(this.getModifier(1)) + "%</b>.";
			},
			baseModifier: 0.01,
			getModifier: function (change) {
				if (!change) change = 0;
				var bonusLevels = (game.talents.nature3.purchased) ? 5 : 0;
				return Math.pow(1 - this.baseModifier, (this.level + change + bonusLevels));
			},
			getCombatModifier: function () {
				return Math.pow(this.getModifier(), this.currentDebuffPower);
			},
			formatModifier: function (number){
				return prettify((1 - number) * 100);
			},
			color: "#3333bb",
			currentDebuffPower: 0,
			level: 1,
			retainLevel: 0,
			tokens: 0
		}
	},
	options: {
		displayed: false,
		menu: {
			autoSave: {
				enabled: 1,
				extraTags: "popular general",
				description: "每分钟自动保存游戏一次",
				titles: ["不自动保存", "自动保存"],
				onToggle: function () {
					var elem = document.getElementById("saveIndicator");
					if (this.enabled) elem.innerHTML = "<span class='autosaving'>(自动保存)</span>";
					else elem.innerHTML = "<span class='notAutosaving'>(不自动保存)</span>";
				}
			},
			usePlayFab: {
				enabled: 0,
				extraTags: "popular general cloud",
				description: "当游戏保存时，每30分钟也可以使用PlayFab在线备份副本。 在使用此设置时，如果您的计算机上的版本超前，您将被询问是否要下载在线保存。 您还可以通过导入菜单从PlayFab手动导入保存。",
				titles: ["不在线保存", "使用PlayFab在线保存"],
				onToggle: function () {
					var indicatorElem = document.getElementById("playFabIndicator");
					if (this.enabled == 1) indicatorElem.className = "icomoon icon-wifi iconStateGood";
					else indicatorElem.className = "";
				},
				//lockUnless: function (){return false}
			},
			standardNotation: {
				enabled: 1,
				extraTags: "layout",
				description: "标准格式之间进行切换 (12.7M, 540B), 工程表示法 (12.7e6, 540e9), 科学计数法 (1.27e7, 5.40e11), 字母符号 (12.7b, 540c), 和混合符号（标准高达e96，然后工程。摹拟标准前4.6）。",
				titles: ["科学计数法", "标准格式", "工程符号", "字母符号", "混合符号"],
				onToggle: function () {
					document.getElementById("tab5Text").innerHTML = "+" + prettify(game.global.lastCustomAmt);
				}
			},
			tooltips: {
				enabled: 1,
				extraTags: "alerts",
				description: "<p><b>显示工具提示<b> 将确保所有的工具提示都在鼠标经过它们的时候显示。</p><p><b>按住Shift键的工具提示</b> 默认会隐藏大部分提示，直到你按下Shift键。在解锁新事物时，请牢记这一设置，因为游戏的大部分内容都在工具提示中解释！</p>",
				titles: ["隐藏工具提示", "显示工具提示"]
			},
			tooltipPosition: {
				enabled: 0,
				extraTags: "alerts",
				description: "切换您的工具提示位置，位于右上方，居中或位于鼠标下方。",
				titles: ["右上角提示", "底部中心提示", "顶部中心提示"]
			},
			queueAnimation: {
				enabled: 1,
				extraTags: "layout animation performance",
				description: "打开或关闭建筑队列蓝色动画。",
				titles: ["不用排队动画", "排队动画"]
			},
			barOutlines: {
				enabled: 1,
				extraTags: "layout",
				description: "在所有进度条的末尾打开或关闭黑色条。 可以帮助辨别进度条结束的地方。",
				titles: ["没有轮廓", "轮廓"],
				onToggle: function () {
					var outlineStyle = (this.enabled) ? "2px solid black" : "none";
					var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						bars[x].style.borderRight = outlineStyle;
					}
				}
			},
			menuFormatting: {
				enabled: 1,
				extraTags: "layout",
				description: "在左侧菜单上打开或关闭大量格式的作业和建筑物。",
				titles: ["无菜单格式", "格式菜单"]
			},
			formatPerkLevels: {
				enabled: 1,
				extraTags: "layout",
				description: "打开或关闭津贴级别的大数字格式。",
				titles: ["不格式化Perk", "格式化Perk级别"]
			},
			smallPerks: {
				extraTags: "layout",
				enabled: 0,
				description: "Shrink the size of perk buttons in the Portal and View Perks windows. <b>Large Perk Buttons</b> is default and fits 5 buttons per row. <b>Small Perk Buttons</b> shrinks the size to fit 6 per row, and <b>Tiny Perk Buttons</b> fits 7 per row.",
				titles: ["Large Perk Buttons", "Small Perk Buttons", "Tiny Perk Buttons"]
			},
			progressBars: {
				enabled: 1,
				extraTags: "performance",
				description: "将进度条切换到打开，关闭或显示。 性能和关闭将降低CPU使用率。",
				titles: ["没有进度条", "显示进度条", "性能条"],
				onToggle: function () {
				var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						if (this.enabled == 2) bars[x].className += " noTransition";
						else {
							bars[x].className = bars[x].className.replace(" noTransition", "");
							if (this.enabled == 0) bars[x].style.width = "0%";
						}
					}
				}
			},
			confirmhole: {
				enabled: 1,
				extraTags: "alerts",
				description: "打开或关闭确认框，像购买虫洞时弹出确认框。",
				titles: ["不确认", "需确认"],
			},
			lockOnUnlock: {
				enabled: 0,
				extraTags: "qol",
				description: "启用/禁用建筑，就业，升级的锁定，以及设备解锁新的东西后1秒。 有助于防止意外购买。",
				titles: ["不锁定", "锁定"],
			},
			achievementPopups: {
				enabled: 1,
				extraTags: "alerts",
				description: "决定你是否希望在完成一个成就后弹出提示窗口。",
				titles: ["不弹出", "弹出成就"]
			},
			mapLoot: {
				enabled: 0,
				extraTags: "qol",
				description: "<p>如果自上次运行地图以来一段时间，请选择您的首要升级。</p><p><b>升级优先</b> 会导致地图在移到下一层之前删除最低层的所有项目。 （巨剑II - >胸甲II - >盾III）</p><p><b>装备优先</b> 将从盾牌开始，并在继续匕首之前放下所有可用的盾牌声望，等等。 （盾III - >盾IV - >匕首III）</p>",
				titles: ["升级优先", "装备优先"],
				secondLocation: ["togglemapLoot2", "togglemapLootCM"]
			},
			repeatUntil: {
				enabled: 0,
				description: "<p><b>Repeat Forever</b> will cause the map to continually repeat if Repeat Maps is enabled.</p><p><b>Repeat to 10</b> will repeat unless you have 10 Map Bonus stacks.</p><p><b>Repeat for Items</b> will repeat unless there are no more special items left for that level of map.</p><p><b>Repeat for Any</b> will repeat unless there are no special items available AND you can not earn more Map Bonus stacks.</p><p><b>This setting only matters if Repeat is on. Toggling Repeat off will still leave the map when it is finished no matter what.</b></p>",
				titles: ["永远重复", "重复10次", "重复项", "重复所有"],
				locked: true,
				secondLocation: ['togglerepeatUntilCM']
			},
			exitTo: {
				enabled: 0,
				description: "Choose whether to go to the Maps Screen or World after completing a map.",
				titles: ["退出地图", "退出世界"],
				locked: true,
				secondLocation: ['toggleexitToCM']
			},
			repeatVoids: {
				enabled: 0,
				description: "Decide if you want to continue running the rest of your Void Maps after finishing one.",
				titles: ["一个虚空地图", "完成全部虚空地图"],
				locked: true,
				secondLocation: ['togglerepeatVoidsCM']
			},
			boneAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "在“骨交易员”或“传家宝”菜单中不弹出确认提示。",
				titles: ["不确认骨头", "确认骨头"]
			},
			showAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "当解锁新的东西时，打开或关闭黄色提醒图标的显示。",
				titles: ["不提醒", "提醒"]
			},
			showFullBreed: {
				enabled: 0,
				extraTags: "popular general",
				description: "显示时间培育当前品种计时器旁边的一整队士兵。",
				titles: ["更少的品种定时器", "更多的繁殖计时器"]
			},
			darkTheme: {
				extraTags: "general",
				enabled: 1,
				description: "在默认脆皮主题，由u / Grabarz19制作的自定义黑色主题，由u / k1d_5h31d0n制作的渐变主题以及黑色背景的默认主题之间切换。",
				titles: ["黑底主题", "默认主题", "黑色主题", "渐变主题"],
				//styleName index should always be equal to title index minus 2, and should match the css file name
				styleNames: ["dark", "gradient"],
				removeStyles: function () {
					for (var x = 0; x < this.styleNames.length; x++){
						var link = document.getElementById(this.styleNames[x] + "Theme");
						if (!link) continue;
						document.head.removeChild(link);
					}
					document.getElementById("innerWrapper").style.backgroundColor = "initial";
				},
				applyStyle: function (titleIndex){
					var styleName = this.styleNames[titleIndex - 2];
					var link = document.createElement('link');
					link.type = 'text/css';
					link.rel = 'stylesheet';
					link.href = 'css/' + styleName + '.css';
					link.id = styleName + 'Theme';
					document.head.appendChild(link);
				},
				onToggle: function () {
					this.removeStyles();
					if (this.enabled == 1) return;
					if (this.enabled == 0){
						document.getElementById("innerWrapper").style.backgroundColor = "black";
						return;
					}
					this.applyStyle(this.enabled);
				}
			},
			fadeIns: {
				enabled: 1,
				extraTags: "layout performance animation",
				description: "打开或关闭对元素的淡入效果。",
				titles: ["不衰退", "衰退"]
			},
			extraStats: {
				enabled: 1,
				extraTags: "layout",
				description: "打开或关闭添加额外的信息，以映射项目。",
				titles: ["极简地图", "额外的地图信息"],
				onToggle: function () {
					refreshMaps();
				}
			},
			useAverages: {
				extraTags: "popular general",
				enabled: 0,
				description: "切换是否从地图和世界的战利品应计入战利品分解和工具提示计算。 计算战利品最后两分钟的平均值。 如果您想清除最后2分钟，请尝试将其关闭并重新打开。",
				titles: ["不平均", "平均"],
				onToggle: function () {
					for (var item in game.global.lootAvgs){
						if (Array.isArray(game.global.lootAvgs[item])) game.global.lootAvgs[item] = [0];
						else game.global.lootAvgs[item] = 0;
					}
				}
			},
			voidPopups: {
				extraTags: "alerts",
				enabled: 1,
				description: "决定是否要弹出掠夺传家宝。",
				titles: ["没有传家宝流行", "流行的传家宝"]
			},
			detailedPerks: {
				extraTags: "qol",
				enabled: 0,
				description: "决定是否在额外津贴按钮上显示额外的信息",
				titles: ["最小化额外津贴信息", "额外的信息"]
			},
			alwaysAbandon: {
				extraTags: "general",
				enabled: 0,
				description: "决定是否要等待士兵在地图上和世界之间切换死亡。 切换这个将自动放弃你的士兵。",
				titles: ["等待旅行", "自动放弃"]
			},
			extraMapBtns: {
				extraTags: "layout",
				enabled: 0,
				description: "将按钮菜单切换到地图网格的右侧",
				titles: ["较少的地图按钮", "额外的地图按钮"],
				onToggle: function () {
					if (!game.global.mapsActive) return;
					var setTo = (this.enabled) ? ["8", "2"] : ["10", "off"];
					swapClass("col-xs", "col-xs-" + setTo[0], document.getElementById("gridContainer"));
					swapClass("col-xs", "col-xs-" + setTo[1], document.getElementById("extraMapBtns"));
				},
				lockUnless: function () {
					return (game.global.totalPortals > 0)
				},
			},
			GeneticistassistTarget: {
				enabled: 0,
				disableOnUnlock: false,
				extraTags: "popular general",
				description: "自定义您的三个可用的遗传学家目标，选择发射和发送选项，并决定每次运行解锁时遗传学家是否应该自动启动。",
				titles: ["遗传学家帮助设置"],
				lockUnless: function () {
					return (game.global.Geneticistassist);
				}
			},
			liquification: {
				enabled: 1,
				extraTags: "general",
				description: "启用或禁用液化。 游戏中的任何事情都不应该在启用液化的情况下完成，但如果你只是想放慢速度，那么你完全有权这样做。",
				titles: ["液化关闭", "液化开启"],
				lockUnless: function () {
					return (game.global.spiresCompleted > 0);
				}

			},
			overkillColor: {
				enabled: 1,
				extraTags: "layout",
				description: "选择你是否想要一个不同的细胞来处理你过度使用的细胞。<b>没有过度的颜色</b> 将不会改变任何颜色基于过度杀伤。 <b>1过度杀伤细胞</b> 是默认设置，并用特殊颜色显示被过度杀死的单元格。 <b>2过度杀伤细胞</b> 将显示为所有细胞过度杀灭的细胞颜色。",
				titles: ["没有过度的颜色", "1过度杀伤细胞", "2过度杀伤细胞"],
				lockUnless: function () {
					return (!game.portal.Overkill.locked)
				},
			},
			forceQueue: {
				enabled: 0,
				extraTags: "qol",
				get description() {
					var appliesTo = " 只有经纱站";
					if (game.global.improvedAutoStorage) appliesTo = " 去经纱站和自动存储";
					return "选择是否强制即时工艺建筑物使用队列。 目前适用 " + appliesTo + ". 可能是双重检查价格有用建设之前！";
				},
				titles: ["不强制队列", "强制队列"],
				lockUnless: function () {
					return (game.global.sLevel >= 4);
				}
			},
			mapsOnSpire: {
				enabled: 1,
				extraTags: "other",
				description: "选择是否希望游戏在到达尖塔时通过发送地图来暂停战斗。<b>保持在尖塔格斗</b> 到达尖塔时不会中断你， <b>地图在尖顶</b> will send you to maps on every Spire, <b>Map at Top 2 Spires</b> will send you to maps at the highest and second highest level Spire reached, and <b>Map at Top Spire</b> will switch to maps only on the single highest Spire reached.",
				titles: ["Keep Fighting at Spires", "Map at Spires", "Map at Top 2 Spires", "Map at Top Spire"],
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 199);
				},
				secondLocation: ["togglemapsOnSpireCM"]
			},
			mapAtZone: {
				enabled: 0,
				extraTags: "other",
				description: "When enabled, you will automatically abandon your Trimps in the World and enter the Map Chamber as soon as you hit your specified Zone number.",
				get titles(){
					return ["No Map At Zone", "Map At Z" + this.setZone];
				},
				setZone: 200,
				secondLocation: ["togglemapAtZone2", "togglemapAtZoneCM"],
				lockUnless: function () {
					return game.global.canMapAtZone;
				}
			},
			siphonologyMapLevel: {
				enabled: 0,
				extraTags: "qol",
				description: "When entering the Maps screen, by default the Level Selector starts at your current world number. Toggling this setting on will force this number to default to your minimum Siphonology level instead.",
				titles: ["Use World Number", "Use Siphonology Level"],
				lockUnless: function () {
					return (!game.portal.Siphonology.locked)
				}
			},
			timestamps: {
				enabled: 0,
				extraTags: "qol",
				description: "选择是否在消息日志中显示时间戳。 <b>本地时间戳</b> 将根据您的电脑记录当前时间， <b>运行时间戳</b> 将记录自运行开始以来的时间。 请注意，切换此设置不会添加或删除以前的邮件的时间戳，但将添加或删除任何新的邮件。",
				titles: ["没有时间戳", "本地时间戳", "运行时间戳"]
			},
			gaFire: {
				enabled: 1,
				locked: true,
				extraTags: "qol",
				description: "<p>Toggle between <b>Limited GA Firing</b>, <b>Geneticistassist Fire</b> and <b>No GA Firing</b>.</p><p><b>Limited GA Firing</b> will prevent Geneticistassist from firing Farmers, Lumberjacks, or Miners.</p><p><b>Geneticistassist Fire</b> is the default value, and allows Geneticistassist to fire anything.</p><p><b>No GA Firing</b> prevents your Geneticistassist from being able to fire anything at all, including other Geneticists.</p>",
				titles: ["Limited GA Firing", "Geneticistassist Fire", "No GA Firing"],
				lockUnless: function () {
					return game.global.Geneticistassist
				}
			},
			tinyButtons: {
				enabled: 0,
				extraTags: "layout",
				description: "收缩的菜单，您购买的建筑物，升级，工作，和装备的按钮。 <b>大按钮</b> 是默认的，适合每行4个按钮。 <b>小按钮</b> 收缩以适应5每行的大小，和 <b>小按钮</b> 适合每行6个。 小按钮和超小按钮可能不适合在小屏幕上阅读。",
				titles: ["大按钮", "小按钮", "超小按钮"],
				onToggle: function () {
					var classNames = ["buttonSizeLarge", "buttonSizeSmall", "buttonSizeTiny"];
					swapClass("buttonSize", classNames[this.enabled], document.getElementById('buyHere'));
				}
			},
			masteryTab: {
				enabled: 1,
				extraTags: "alerts",
				description: "Choose what you would like to see on your Mastery Tab! <b>No Mastery Info</b> will keep the tab clean and static. <b>Alert Mastery</b> will show an alert on the tab as soon as a new Mastery becomes affordable. <b>Show Essence</b> will always show your total amount of unspent essence on the tab. <b>Hybrid Essence</b> will show your total amount of unspent essence on the tab, but will switch to the alert icon once you have enough essence for a new Mastery.",
				titles: ["No Mastery Info", "Alert Mastery", "Show Essence", "Hybrid Alerts"],
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 180)
				},
				onToggle: function () {
					updateTalentNumbers();
				}
			},
			bigPopups: {
				enabled: 1,
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 79);
				},
				get description(){
					var text = "<p>This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup";
					if (game.global.highestLevelCleared >= 199) text += ", the popup at Corruption";
					if (game.global.highestLevelCleared >= 219) text += ", the popup at The Spire";
					if (game.global.highestLevelCleared >= 249) text += ", and the popup on reaching Magma.";
					text += "</p><p>Note that this setting only blocks large popups once your Highest Zone Reached is 20 zones past the location of the popup</p>";
					return text;
				},
				extraTags: "alerts popups",
				titles: ["Block Big Popups", "Allow Big Popups"]

			},
			generatorStart: {
				enabled: 0,
				extraTags: "general",
				description: "Choose what mode the Dimensional Generator should start each run on. <b>Default Generator</b> will continue with whatever setting you were using at the end of your last run. <b>The Rest of The Settings<b> are named by what mode will be set to active at the start of each run.",
				get titles () {
					var arr = ["Default Generator", "Gain Fuel", "Gain Mi"];
					if (game.permanentGeneratorUpgrades.Hybridization.owned) arr.push("Hybrid");
					return arr;
				},
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 229);
				}
			},
//			showSnow: {
//				enabled: 1,
//				extraTags: "general",
//				description: "禁用世界上的雪花效果。 <b>此设置更改后，此功能将在下一个区域生效</b>。 这个设置是暂时的，并且在下雪时会融化。",
//				titles: ["No Snow", "Show Snow"]
//			},
			// showSnow: {
			// 	enabled: 1,
			// 	extraTags: "general",
			// 	description: "Disable the snow effect in the world. <b>This will take effect on the next zone after this setting is changed</b>. This setting is temporary, and will melt when the snow does.",
			// 	titles: ["No Snow", "Show Snow"]
			// },
/*			showHoliday: {
				enabled: 1,
				extraTags: "general",
				description: "<p>Choose between <b>Show Pumpkimps</b>, <b>Bordered Pumpkimps</b>, and <b>No Pumpkimps</b>. This setting applies only to the visual effect of Pumpkimp zones in the world, does not apply to maps, and has no impact on how many Pumpkimps or Pumpkimp Zones actually spawn. This setting is temporary and will rot away after the Pumpkimp season!</p><p><b>Show Pumpkimps</b> is the default, and displays Pumpkimp Zones as normal.</p><p><b>Bordered Pumpkimps</b> displays Pumpkimp cells by changing the border color instead of the background color.</p><p><b>No Pumpkimps</b> will not show any indicator at all that a world zone is a Pumpkimp Zone. Pumpkimps will still spawn at the same rate.</p>",
				titles: ["No Pumpkimps", "Show Pumpkimps", "Bordered Pumpkimps"],
				locked: true
			},*/
			geneSend: {
				enabled: 0,
				locked: true,
				extraTags: "other",
				description: "<p>当 <b>使用基因发送</b> 启用时, 只要你有一个遗传学家，自动战斗会自动派遣战士，如果他们的繁殖时间超过了你的遗传学家的设定。</p><p>当 <b>强制基因发送</b> 启用时, 只要你有一个遗传学家，自动战斗将永远不会派出一组脆皮战斗，除非你是最大的人口，或者你已经达到了你的设置基因学计时器。</p><p>最后, 如果你选择了 <b>等待基因发送</b> 只要你有一个遗传学家，自动战斗只会派遣战士当它们已经繁殖了足够长的时间，可以到达你的遗传基因辅助定时器。这保证了预期和遗传学家的水平，只要你的设置计时器，但可能导致没有士兵被发送一段时间，而你坐的完全人口。</p>",
				titles: ["不基因发送", "使用基因发送", "强制基因发送", "等待基因发送"]
			},
			fireForJobs: {
				enabled: 0,
				extraTags: "other",
				description: "启用后，雇用脆皮与缩放提价（培训师，探险者等）的工作，而你没有工作区将尝试火灾农民，伐木工人和矿工，直到你有足够的空间。",
				titles: ["不招聘工作", "招聘工作"]
			},
			ctrlGigas: {
				enabled: 0,
				extraTags: "other",
				description: "启用后，所有千兆站购买行为都将按住Ctrl键，无论是否实际持有。 禁用时，您必须按住Ctrl键才能让千兆站自动购买变形站（请参阅千兆站工具提示获取更多信息）。",
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 60);
				},
				titles: ["动态按Ctrl键", "始终按Ctrl键"]
			},
			hotkeys: {
				enabled: 1,
				extraTags: "other",
				description: "启用或禁用热键",
				titles: ["禁用热键", "启用热键"]
			},
			offlineProgress: {
				enabled: 1,
				extraTags: "other",
				description: "在离线状态下禁用或启用赚钱资源。 <b>警告：如果切换关闭，离线后回到游戏时，将不会从可信的脆皮那里获得资源。</b> 如果您正在分析统计信息并且不需要在没有定时器运行时计算资源，这可能会有所帮助",
				titles: ["禁止离线进度", "离线进度"]
			},
			pauseGame: {
				enabled: 0,
				extraTags: "other",
				description: "暂停你的游戏。 这将暂停所有资源收集，离线进度和计时器。 （热键：空格键）",
				titles: ["不暂停", "暂停"],
				timeAtPause: 0,
				onToggle: function () {
					if (this.enabled) {
						this.timeAtPause = new Date().getTime();
						if (game.options.menu.autoSave.enabled == 1) save(false, true);
						swapClass("timer", "timerPaused", document.getElementById("portalTimer"));
					}
					else if (this.timeAtPause) {
						var now = new Date().getTime();
						var dif = now - this.timeAtPause;
						game.global.portalTime += dif;
						game.global.lastSkeletimp += dif;
						game.global.zoneStarted += dif;
						game.global.mapStarted += dif;
						game.global.lastGeneratorTick += dif;
						this.timeAtPause = 0;
						game.global.time = 0;
						game.global.lastOnline = now;
						game.global.start = now;
						setTimeout(gameTimeout, (100));
						swapClass("timer", "timerNotPaused", document.getElementById("portalTimer"));
					}
				},
				locked: true
			},
			disablePause: {
				enabled: 1,
				extraTags: "other",
				description: "您可以通过单击屏幕右下角的运行计时器来暂停游戏。 此设置允许您删除该功能!",
				titles: ["禁用暂停", "启用暂停"]
			},
			deleteSave: {
				enabled: 0,
				extraTags: "reset hard wipe clear other",
				description: "删除您的存档并重新开始，你的脆皮会不开心.",
				titles: ["删除存档"],
				onToggle: function () {
					cancelTooltip();
					tooltip('Reset', null, 'update');
					game.global.lockTooltip = true;
					tooltipUpdateFunction = "";
					this.enabled = 0;
				}
			}
		}
	},
	talents: {
		bionic: {
			description: "<p>Automatically pick up each level of 仿生仙境 (BW) as you pass a BW zone. Will not work if you have already missed any BWs this run, or if you reach a zone higher than any BW you have ever cleared before.</p><p>In addition, give all current and future copies of 仿生仙境 the 'Fast Attacks' special modifier.</p>",
			name: "Bionic Magnet",
			onPurchase: function (clear) {
				addMapModifier('Bionic', 'fa');
			},
			onRespec: function () {
				addMapModifier('Bionic', null, true);
			},
			tier: 1,
			purchased: false,
			icon: "magnet"
		},
		portal: {
			description: "打开Z20后马上打开传送门。",
			name: "Portal Generator",
			tier: 1,
			purchased: false,
			icon: "eye-open",
		},
		bounty: {
			description: "在清理Z15后马上解锁赏金。",
			name: "Bounty Hunter",
			tier: 1,
			purchased: false,
			icon: "th-large",
		},
		housing: {
			description: "Unlock Mansion, Hotel, Nursery, Resort, Gateway, Wormhole, and Collector automatically when passing the zone they drop at.",
			name: "Home Detector",
			tier: 1,
			purchased: false,
			icon: "home"
		},
		turkimp: {
			description: "Increases the bonus time from each Turkimp by 5 minutes, and increases the time cap by 10 minutes.",
			name: "Turkimp Tamer I",
			tier: 1,
			purchased: false,
			icon: "*spoon-knife"
		},
		voidPower: {
			description: "Your Trimps gain 15% attack and health inside Void Maps.",
			name: "Void Power I",
			tier: 2,
			purchased: false,
			icon: "*heart5"
		},
		pierce: {
			description: "Reduce the amount of enemy damage that can pierce block by 25%.",
			name: "Metallic Coat",
			tier: 2,
			purchased: false,
			icon: "tint"
		},
		headstart: {
			description: "腐败在5级时候开始，在区176。",
			name: "Headstart I",
			tier: 2,
			purchased: false,
			icon: "road"
		},
		foreman: {
			description: "召集50000名工头帮助施工。",
			name: "Foremany",
			tier: 2,
			purchased: false,
			onPurchase: function () {
				game.global.autoCraftModifier += 12500;
				updateForemenCount();
			},
			onRespec: function () {
				game.global.autoCraftModifier -= 12500;
				updateForemenCount();
			},
			icon: "user",
		},
		turkimp2: {
			description: "Increase the chance of finding a Turkimp by 33%.",
			name: "Turkimp Tamer II",
			tier: 2,
			purchased: false,
			requires: "turkimp",
			icon: "*spoon-knife"
		},
		voidPower2: {
			description: "Your Trimps gain an additional 20% attack and health inside Void Maps.",
			name: "Void Power II",
			tier: 3,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower"
		},
		mapLoot: {
			description: "Reduces the starting point of the Low Map Level Loot Penalty by 1 level. This allows you to earn the same amount of loot by doing a map at your current world number, or at your current world number minus 1.",
			name: "Map Reducer I",
			tier: 3,
			purchased: false,
			icon: "*gift2"
		},
		headstart2: {
			description: "Corruption begins an additional 10 levels earlier, at zone 166.",
			name: "Headstart II",
			tier: 3,
			purchased: false,
			icon: "road",
			requires: "headstart"
		},
		doubleBuild: {
			description: "Stacked items in the Building Queue will be constructed two at a time.",
			name: "Double Build",
			tier: 3,
			purchased: false,
			icon: "*hammer"
		},
		skeletimp: {
			description: "Double the chance for a Megaskeletimp to appear instead of a Skeletimp.",
			name: "King of Bones I",
			tier: 3,
			purchased: false,
			icon: "italic",
		},
		hyperspeed: {
			description: "Reduce the time in between fights and attacks by 100ms.",
			name: "Hyperspeed I",
			tier: 4,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith: {
			get description () {
				return "Each cleared zone through Z" + Math.floor((game.global.highestLevelCleared + 1) / 2) + " (half of your highest zone reached) will drop all available equipment prestiges from maps.";
			},
			name: "Blacksmithery I",
			tier: 4,
			purchased: false,
			icon: "*hammer2"
		},
		headstart3: {
			description: "Corruption begins an additional 15 levels earlier, at zone 151.",
			name: "Headstart III",
			tier: 4,
			purchased: false,
			icon: "road",
			requires: "headstart2"
		},
		autoStructure: {
			description: "Unlock the AutoStructure tool, allowing you to automatically purchase structures.",
			name: "AutoStructure",
			tier: 4,
			purchased: false,
			icon: "home",
			requires: "doubleBuild",
			onPurchase: function () {
				toggleAutoStructure(true);
			},
			onRespec: function () {
				game.global.autoStructureSetting.enabled = false;
				toggleAutoStructure(true, true);
			}
		},
		turkimp3: {
			description: "Increase the bonus resources gained while Well Fed from a Turkimp by 25%, from 50% to 75%.",
			name: "Turkimp Tamer III",
			tier: 4,
			purchased: false,
			requires: "turkimp2",
			icon: "*spoon-knife"
		},
		hyperspeed2: {
			get description(){
				return "Reduce the time in between fights and attacks by an additional 100ms through Z" + Math.floor((game.global.highestLevelCleared + 1) * 0.5) + " (50% of your highest zone reached)";
			},
			name: "Hyperspeed II",
			tier: 5,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith2: {
			get description () {
				return "Each cleared zone through Z" + Math.floor((game.global.highestLevelCleared + 1) * 0.75) + " (75% of your highest zone reached) will drop all available equipment prestiges from maps.";
			},
			name: "Blacksmithery II",
			requires: "blacksmith",
			tier: 5,
			purchased: false,
			icon: "*hammer2"
		},
		magmaFlow: {
			description: "Cause two extra Magma cells to appear on any zone that already has Magma.",
			name: "Magma Flow",
			tier: 5,
			purchased: false,
			icon: "*fire",
		},
		quickGen: {
			description: "Increase the amount of speed that the Dimensional Generator gains per zone by 50%.",
			name: "Quick Gen",
			tier: 5,
			purchased: false,
			icon: "*diamonds"
		},
		skeletimp2: {
			description: "将Skeletimp产卵之间的最短时间缩短10分钟",
			name: "King of Bones II",
			tier: 5,
			purchased: false,
			icon: "italic",
			requires: "skeletimp"
		},
		voidPower3: {
			description: "你的脆皮在虚空地图内获得额外的30％攻击力和生命，所有当前和未来的虚空地图都会获得“快速攻击”特效修正。",
			name: "Void Power III",
			onPurchase: function (clear) {
				if(game.global.world > 1)
				addMapModifier('Void', 'fa');
			},
			onRespec: function () {
				addMapModifier('Void', null, true);
			},
			tier: 6,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower2"
		},
		blacksmith3: {
			get description () {
				return "每个清除的区域通过区域" + Math.floor((game.global.highestLevelCleared + 1) * 0.9) + " （达到你最高区域的90％）将会从地图上掉落所有可用的装备声望。";
			},
			name: "Blacksmithery III",
			requires: "blacksmith2",
			tier: 6,
			purchased: false,
			icon: "*hammer2"
		},
		nature: {
			description: "将您的令牌交易比率从10：5提高到10：6",
			name: "Natural Diplomacy I",
			tier: 6,
			purchased: false,
			icon: "*tree3"
		},
		liquification: {
			get description () {
				var text = (this.purchased) ? "这种精通正在增加 " : "这种精通会增加 ";
				var totalSpires = game.global.spiresCompleted;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "Y";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = "计算你的蓬松奖励为尖塔的一半，";
					else fluffyText = "计算你的两个蓬松奖金作为一个尖塔，"
					totalSpires += (fluffyCount * 0.5);
				}
				return "将你的液化奖励提高5％，就好像你已经完成了1个额外的尖塔。" + fluffyText + " 您目前已完成 " + totalSpires + " 独特的尖塔" + ((totalSpires == 1) ? "" : "") + ", 给你 " + (totalSpires * 5) + "% 你达到的最高区域 (通过 Z" + Math.floor((totalSpires / 20) * (game.global.highestLevelCleared + 1)) + "). " + text + " 你的奖金 " + ((totalSpires + 1) * 5) + "% 你达到的最高区域 (通过 " + Math.floor(((totalSpires + 1) / 20) * (game.global.highestLevelCleared + 1)) + ").";
			},
			name: "Liquification I",
			tier: 6,
			purchased: false,
			icon: "*water"
		},
		turkimp4: {
			description: "学习发展自己的土耳其人，增加奖金+ 100％，并永久提供奖金。",
			name: "Turkimp Tamer IV",
			tier: 6,
			purchased: false,
			requires: "turkimp3",
			icon: "*spoon-knife",
			onPurchase: function(){
				document.getElementById("turkimpBuff").style.display = "block";
				if (game.global.playerGathering) setGather(game.global.playerGathering);
			},
			onRespec: function(){
				if (game.global.turkimpTimer <= 0)
					document.getElementById("turkimpBuff").style.display = "none";
				if (game.global.playerGathering) setGather(game.global.playerGathering);

			}
		},
		magmamancer: {
			description: "现在，岩浆喷浆机将会增加同样数量的金属增加。 此外，开始每个后岩浆区与5分钟的信用已经适用于你的岩浆机。",
			name: "Magmamancermancy",
			tier: 7,
			purchased: false,
			icon: "*fire2"
		},
		mapLoot2: {
			description: "创建地图时，将最小和最大单元数减少5。",
			name: "Map Reducer II",
			tier: 7,
			purchased: false,
			requires: "mapLoot",
			icon: "*gift2"
		},
		nature2: {
			description: "将您的令牌交易比率从10：6增加到10：8",
			name: "Natural Diplomacy II",
			tier: 7,
			purchased: false,
			requires: "nature",
			icon: "*tree3"
		},
		patience: {
			description: "预计现在可以达到45堆。",
			name: "Patience",
			tier: 7,
			purchased: false,
			icon: "*clock2"
		},
		stillRowing: {
			description: "在尖塔中增加50％的奖励，从2％的额外战利品增加到3％。",
			name: "Still Rowing I",
			tier: 7,
			purchased: false,
			icon: "align-justify"
		},
		voidSpecial: {
			get description() {
				var text = "使用您的传送门清除上次运行的每个100个区域后，获得1个免费的虚空地图。 来自虚空地图的氦气在上一次清除的每个区域也增加了0.25％。";
				var amt = (game.global.lastPortal * 0.0025);
				text += " 你到达了 Z" + game.global.lastPortal + " 是一个传送门, ";
				if (this.purchased) text += " 获得了奖励 ";
				else text += " 这将为你赢得奖金 ";
				text +=  prettify(amt * 100) + "% 额外的氦气。"
				return text;
			},
			name: "Void Specialization",
			tier: 8,
			purchased: false,
			icon: "*feed"
		},
		healthStrength: {
			description: "你的脆皮在你当前区域内的每个健康细胞中获得15％的附加伤害。",
			name: "Strength in Health",
			tier: 8,
			purchased: false,
			icon: "*aid-kit"
		},
		nature3: {
			description: "增加5个级别的升级和堆栈转让的所有3个自然赋权，而不增加成本。",
			name: "Natural Diplomacy III",
			tier: 8,
			purchased: false,
			requires: "nature2",
			icon: "*tree3"
		},
		liquification2: {
			get description () {
				var text = (this.purchased) ? "这种掌握在增加 " : "掌握这将增加 ";
				var totalSpires = game.global.spiresCompleted;
				if (game.talents.liquification.purchased) totalSpires++;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = " 你的蓬松奖金是尖塔的一半";
					else fluffyText += " 和你的两个蓬松奖金作为另一个"
					totalSpires += (fluffyCount * 0.5);
				}
				return "将你的液化奖励提高5％，就好像你已经完成了1个额外的尖塔。 计算液化我是一个塔尖。" + fluffyText + ", 你已经完成了相当于 " + totalSpires + " 唯一尖塔" + ((totalSpires == 1) ? "" : "") + ", 给你 " + (totalSpires * 5) + "% 达到你的最高区域 (通过区域Z" + Math.floor((totalSpires / 20) * (game.global.highestLevelCleared + 1)) + "). " + text + " 你的奖金 " + ((totalSpires + 1) * 5) + "% 达到你的最高区域 (通过区域 Z" + Math.floor(((totalSpires + 1) / 20) * (game.global.highestLevelCleared + 1)) + ").";
			},
			name: "Liquification II",
			tier: 8,
			requires: "liquification",
			purchased: false,
			icon: "*water"
		},
		stillRowing2: {
			description: "你的脆皮现在将获得等于他们从每个尖塔行清除的2倍的掠夺奖金。",
			name: "Still Rowing II",
			tier: 8,
			purchased: false,
			requires: "stillRowing",
			icon: "align-justify"
		},
		//don't forget to add new talent tier to getHighestTalentTier()
	},
	//portal
	portal: {
		Looting_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "Apply your skills at salvaging things from the Spire to increase all loot gained by 0.25% per level. The price for this perk increases additively, and each level will cost exactly 10000 more than the previous level.",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Carpentry_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "You've learned to look more objectively at the no longer mysterious building designs, allowing you to increase housing space by 0.25% per level. This multiplies on top of Carpentry I, but the bonus stacks additively. The price for this perk also increases additively, and each level will cost exactly 10000 more than the previous level.",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Motivation_II: {
			level: 0,
			locked: true,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "Corruption and impending doom are great motivators to work a bit harder! Increases Trimp gather speed by 1% per level. The price for this perk increases additively, and each level will cost exactly 1000 more than the previous level.",
			additive: true,
			additiveInc: 1000,
			modifier: 0.01
		},
		Power_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "You find strength in the desire to some day return home. Anger your Trimps by making them listen to you talk about it all the time, increasing their damage by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Toughness_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "当你记得你从哪里来的时候，你会感到更加踏实。将你的韧性扩展给你的脆皮，每级增加1%的生命。这种额外福利的价格会增加，而且每一层的价格将比之前的水平高出整整500美元。",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Capable: {
			level: 0,
			locked: true,
			priceBase: 1e8,
			heliumSpent: 0,
			tooltip: "You can sense great power within Fluffy, but he'll need some training. Each level of Capable allows Fluffy to gain 1 level of experience. Respeccing to remove Capable will temporarily remove any bonuses associated with Fluffy's level and experience, but all exp will be saved until you add points back. Each level of Capable is 10x more expensive than the last, and buying the first level will allow Fluffy to take Portals with you.",
			max: 10,
			specialGrowth: 10,
			onChange: function(){
				Fluffy.handleBox();
			}
		},
		Cunning: {
			level: 0,
			locked: true,
			modifier: 0.25,
			priceBase: 1e11,
			heliumSpent: 0,
			get tooltip(){
				return "Fluffy demands more helium! Each level of Cunning will increase the final amount of experience Fluffy gains from each zone by " + Math.round(this.modifier * 100) + "% (additive)."
			}
		},
		Curious: {
			level: 0,
			locked: true,
			modifier: 30,
			priceBase: 1e14,
			heliumSpent: 0,
			get tooltip() {
				return "Fluffy is coming along, but he's coming along slowly. Each point of Curious will speed up Fluffy's progression by adding " + this.modifier + " exp to the base amount he gains per zone clear."
			}
		},
		Overkill: {
			level: 0,
			locked: true,
			priceBase: 1000000,
			heliumSpent: 0,
			tooltip: "你已经完成了一个超凡脱俗的目标，那就是获得超额伤害(超出敌人生命值的伤害)，出类拔萃！每个等级的能力将会允许你的超额伤害的0.5%去伤害下一个敌人。如果这个伤害杀死了下一个敌人，你就不用再经过那个方块了。最高30层。",
			max: 30
		},
		Resourceful: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "在有限的地图上花时间教会了你如何变得更足智多谋。每级都能让你 <b>比当前的成本</b> 少花5%的资源，在所有结构。"
		},
		Coordinated: {
			level: 0,
			locked: true,
			priceBase: 150000,
			modifier: 0.98,
			heliumSpent: 0,
			currentSend: 1,
			onChange: function (overrideLevel) {
				var newValue = 1;
				var level = (overrideLevel) ? this.level + this.levelTemp : this.level;
				var currentMod = 0.25 * Math.pow(this.modifier, level);
				currentMod += 1;
				for (var x = 0; x < game.upgrades.Coordination.done; x++){
					newValue = Math.ceil(newValue * currentMod);
				}
				if (overrideLevel) return newValue;
				this.currentSend = newValue;
			},
			tooltip: "Use knowledge gained while studying Coordinated Bad Guys to reduce the amount of Trimps required per level of Coordination by 2% <b>of current amount (compounding)</b>, while keeping the stat bonus the same."
		},
		Siphonology: {
			level: 0,
			locked: true,
			max: 3,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "使用替代维度中发现的策略从较低级别的地图虹吸地图奖励伤害堆栈。 对于虹吸学的每个级别，您将从比当前世界低一级的地图获得堆叠。 最多3个级别。",
		},
		Anticipation: {
			level: 0,
			locked: true,
			max: 10,
			modifier: 0.02,
			priceBase: 1000,
			heliumSpent: 0,
			onChange: function () {
				if (this.level <= 0) {
					game.global.antiStacks = 0;
					updateAntiStacks();
				}
			},
			get tooltip(){
				var time = game.talents.patience.purchased ? 45 : 30;
				return "Use your experiences in understanding the attention span of Trimps to increase the damage dealt by all soldiers based on how long it took to get an army together. Increases damage by 2% per level per second up to " + time + " seconds. Maximum of 10 levels."
			}
		},
		Resilience: {
			level: 0,
			locked: true,
			modifier: 0.1,
			priceBase: 100,
			heliumSpent: 0,
			tooltip: "Use your acquired skills in Trimp strengthening to gain a 10% <b>compounding</b> increase to total Trimp health."
		},
		Meditation: {
			level: 0,
			locked: true,
			modifier: 1,
			priceBase: 75,
			heliumSpent: 0,
			max: 7,
			tooltip: "Your experiences in the Dimension of Strong Things have taught you the value of taking your time. Every level of Meditation will increase your Trimps' gather speed by 1% for every 10 minutes spent on the same zone, up to 1 hour, even when offline. This bonus is reset after clearing the current zone. Maximum of 7 levels.",
			getBonusPercent: function (justStacks) {
				var timeOnZone = new Date().getTime() - game.global.zoneStarted;
				timeOnZone = Math.floor(timeOnZone / 600000);
				if (timeOnZone > 6) timeOnZone = 6;
				else if (timeOnZone <= 0) return 0;
				if (justStacks) return timeOnZone;
				return (timeOnZone * this.modifier * this.level);
			}
		},
		Relentlessness:{
			level: 0,
			locked: true,
			modifier: 0.05,
			otherModifier: 0.3,
			priceBase: 75,
			heliumSpent: 0,
			tooltip: "你已经看到太多的失败了，是时候进行更积极的训练了。 带回这些记忆会使你的脆皮在1级时获得5％的几率造成+ 130％的伤害，并且每级将获得额外的5％暴击几率和30％的爆击伤害。 最多10个级别。",
			max: 10
		},
		Carpentry: {
			level: 0,
			locked: true,
			modifier: 0.1,
			priceBase: 25,
			heliumSpent: 0,
			tooltip: "你已经建了很多房子，而且你已经做得很好了。 通过传送门将您在建筑方面的专业知识带回来，将使您能够在每个级别上存放比当前数量多10％的脆皮（复合）。"
		},
		Artisanistry: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 15,
			heliumSpent: 0,
			tooltip: "你已经开始注意到用相当少的资源制造同样强大的设备的方法。 带回这些新想法将使您可以在所有设备上花费比现有成本低5％的资源。"
		},
		Range: {
			level: 0,
			locked: true,
			modifier: 2,
			max: 10,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "使用你的新发现的领导技能，使你的脆皮最低伤害提高2％。 叠加10次，不会影响最大伤害。 在10级时，每次攻击造成至少100％的伤害。",
		},
		Agility: {
			level: 0,
			modifier: 0.05,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "把你的传送门搞成超速，需要额外的氦气，但是增加了宇宙的时钟速度。 每个级别都会将脆皮与坏人的攻击间隔缩短5％（复合）。 最高20级。",
			max: 20
		},
		Bait: {
			level: 0,
			modifier: 1,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "放一些这个在你的陷阱中，一定会给你带来额外的脆皮的。 每个级别允许陷阱捕捉到 $modifier$ 额外的脆皮。"
		},
		Trumps: {
		//fiveTrimpMax worldUnlock
			locked: 0,
			level: 0,
			modifier: 1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "练习进攻性的策略允许你从每次战斗的领土红利中获得 $modifier$ 额外的最大人口。"
		},
		//breed main
		Pheromones: {
			level: 0,
			modifier: 0.1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "你可以带上一些费洛蒙，以确保你的脆皮能够永久性地增加10%的繁殖速度。"
		},
		//trapThings main
		Packrat: {
			modifier: 0.2,
			heliumSpent: 0,
			tooltip: "研究古代、秘密的贮藏方法。每一级都增加了你可以在每个谷仓里塞进的东西数量，存储上限增加20%。",
			priceBase: 3,
			level: 0
		},
		//updatePs updates
		//gather main
		Motivation: {
			modifier: 0.05,
			heliumSpent: 0,
			tooltip: "给你的脆皮们进行一些演讲吧。 每一级能增加5%工人生产的资源。",
			priceBase: 2,
			level: 0
		},
		//startFight main
		Power: {
			level: 0,
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "脆皮们通过例子来学习。 花一些时间去卧推死掉的大象来使今后的脆皮们变得更加强大。 永久性增加脆皮5%攻击力。"
		},
		//startFight main
		Toughness: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "让你的脆皮学习如何变得像个硬汉，而不是一个老实巴交的容易受欺负的。 永久性增加脆皮5%的生命值。",
			level: 0
		},
		//rewardResources main
		Looting: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "从空荡荡的区域往回走，让他们学会如何榨干敌人的每一分血汗钱。 每一级永久性增加5%的战利品资源。",
			level: 0
		},
	},
	c2: {
		Discipline: 0,
		Metal: 0,
		Size: 0,
		Balance: 0,
		Meditate: 0,
		Trimp: 0,
		Trapper: 0,
		Electricity: 0,
		Coordinate: 0,
		Slow: 0,
		Nom: 0,
		Mapology: 0,
		Toxicity: 0,
		Watch: 0,
		Lead: 0,
		Obliterated: 0
	},
	challenges: {
		Daily: {
			get description(){
				return (isSaving) ? "" : getDailyChallenge(0);
			},
			filter: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			start: function () {
				startDaily();
			},
			abandon: function () {
				abandonDaily();
			},
			fireAbandon: true,
			unlockString: "到达区域 100"
		},
		Discipline: {
			description: "调整传送门，让你回到脆皮不那么被训练的世界，以教你如何做一个更好的脆皮教练。 你的脆皮的最小伤害将大大降低，但是他们的极限伤害会更高。 完成愤怒维度将导致脆皮伤害恢复正常。",
			filter: function () {
				return (game.resources.helium.owned >= 30 || game.global.totalHeliumEarned >= 30);
			},
			allowSquared: true,
			squaredDescription: "调整传送门，让你回到脆皮不那么被训练的世界，以教你如何做一个更好的脆皮教练。 你的脆皮的最小伤害将大大降低，但是他们的极限伤害会更高。",
			unlocks: "Range",
			unlockString: "have 30 total helium"
		},
		Metal: {
			description: "调整传送门把你带到另一个现实，那里的矿工的概念不存在，迫使自己变得节俭与设备各具特色的战略。如果你在没有削弱挑战的情况下完成了Dimension of Anger，矿工将重新解锁。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 24);
			},
			abandon: function () {
				game.worldUnlocks.Miner.fire();
				if (this.heldBooks >= 1){
					game.upgrades.Speedminer.locked = 0;
					if (this.heldBooks > 1){
						game.upgrades.Speedminer.allowed += this.heldBooks - 1;
					}
					unlockUpgrade("Speedminer");
				}
				if (this.heldMegaBooks >= 1){
					game.upgrades.Megaminer.locked = 0;
					if (this.heldMegaBooks > 1){
						game.upgrades.Megaminer.allowed += this.heldMegaBooks - 1;
					}
					unlockUpgrade("Megaminer");
				}
				if (this.holdMagma)
					unlockUpgrade("Magmamancers");
			},
			allowSquared: true,
			squaredDescription: "调整传送门把你带到另一个现实，那里的矿工的概念不存在，迫使自己变得节俭与设备各具特色的战略。",
			fireAbandon: false,
			heldBooks: 0,
			heldMegaBooks: 0,
			holdMagma: false,
			unlocks: "Artisanistry",
			unlockString: "到达区域 25"
		},
		Size: {
			description: "调整传送门，让你进入另一个现实，在那里脆皮越来越强大，迫使自己想出一个方法来建造更大的房屋。 你的脆皮会多收集50％的资源，但你的住房将少50％的脆皮。 如果您完成“Dimension of Anger”，你的数据将恢复正常。",
			completed: false,
			filter: function () {
				return (game.global.world >= 35 || game.global.highestLevelCleared >= 34);
			},
			abandon: function () {
				game.jobs.Farmer.modifier *= (2/3);
				game.jobs.Lumberjack.modifier *= (2/3);
				game.jobs.Miner.modifier *= (2/3);
				game.resources.trimps.maxMod = 1;
			},
			start: function () {
				game.jobs.Farmer.modifier *= 1.5;
				game.jobs.Lumberjack.modifier *= 1.5;
				game.jobs.Miner.modifier *= 1.5;
				game.resources.trimps.maxMod = 0.5;
			},
			allowSquared: true,
			squaredDescription: "调整传送门，让你进入另一个现实，在那里脆皮越来越强大，迫使自己想出一个方法来建造更大的房屋。 你的脆皮会多收集50％的资源，但你的住房将少50％的脆皮。",
			fireAbandon: true,
			unlocks: "Carpentry",
			unlockString: "到达区域 35"
		},
		Balance: {
			description: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一堆“不平衡”。 每当地图上的敌人被杀时，你将失去一堆不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。在这个挑战激活的情况下，完成 <b>40区</b> 将额外获得100％的氦气。 这个挑战是可重复的！",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 39);
			},
			balanceStacks: 0,
			addStack: function () {
				this.balanceStacks++;
				if (this.balanceStacks > 250) this.balanceStacks = 250;
				else {
					game.global.soldierHealthMax *= 0.99;
					if (game.global.soldierHealth > game.global.soldierHealthMax) game.global.soldierHealth = game.global.soldierHealthMax;
				}
				if (this.balanceStacks > this.highestStacks) this.highestStacks = this.balanceStacks;
			},
			removeStack: function () {
				this.balanceStacks--;
				if (this.balanceStacks < 0) this.balanceStacks = 0;
				else {
					game.global.soldierHealthMax *= 1.01;
				}
			},
			abandon: function () {
				this.balanceStacks = 0;
				updateBalanceStacks();
			},
			getHealthMult: function (formatText) {
				var num = Math.pow(0.99, this.balanceStacks);
				if (formatText) return Math.floor((1 - num) * 100) + "%";
				return num;
			},
			getGatherMult: function (formatText) {
				if (formatText) return this.balanceStacks + "%";
				return ((this.balanceStacks * 0.01) + 1);
			},
			allowSquared: true,
			squaredDescription: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一堆“不平衡”。 每当地图上的敌人被杀时，你将失去一堆不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。",
			highestStacks: 0,
			fireAbandon: true,
			heldHelium: 0,
			heliumThrough: 40,
			unlockString: "到达区域 40"
		},
		Scientist: {
			get description (){
				var is5 = (game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4);
				return "尝试调整传送门来 " + ((is5) ? "retain positive qualities from previous dimensions" : "保留一些资源") + ". 在你完成这个挑战前，你开局便有<b>_</b>科学，但是不能研究或是雇佣科学家" + ((is5) ? " and <b style='color: maroon'>all enemy damage will be 10X higher</b>" : "") + ". 明智地选择你的升级吧！ 在挑战中清除 <b>'The Block' (11)</b> 能让你每次传送 * ."
			},
			mustRestart: true,
			completed: false,
			heldBooks: 0,
			filter: function (fromCheck) {
				if (game.global.sLevel == 0) return (game.global.highestLevelCleared >= 39);
				else if (game.global.sLevel == 1) return (game.global.highestLevelCleared >= 49);
				else if (game.global.sLevel == 2) {
					return (game.global.highestLevelCleared >= 89);
				}
				else if (game.global.sLevel == 3){
					 return (game.global.highestLevelCleared >= 109);
				}
				else if (game.global.sLevel >= 4){
					return (game.global.highestLevelCleared >= 129);
				}
				else return true;
			},
			abandon: function () {
				game.worldUnlocks.Scientist.fire();
				document.getElementById("scienceCollectBtn").style.display = "block";
				for (var x = 0; x < this.heldBooks; x++){
					unlockUpgrade("Speedscience");
				}
				message("你可以再次研究科学!", "Notices");
				if (game.global.sLevel >= 4) {
					if (game.buildings.Warpstation.craftTime > 0){
						game.buildings.Warpstation.craftTime = 0;
						addNewSetting('forceQueue');
					}
					if (game.global.autoUpgrades) document.getElementById("autoPrestigeBtn").style.display = "block";
				}
			},
			start: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
				game.resources.science.owned = getScientistInfo(getScientistLevel());
				game.global.autoUpgrades = false;
				toggleAutoUpgrades(true);
			},
			onLoad: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
			},
			fireAbandon: false,
			unlockString: function () {
				if (game.global.sLevel == 0) return "到达区域 40";
				else if (game.global.sLevel == 1) return "到达区域 50";
				else if (game.global.sLevel == 2) return "到达区域 90";
				else if (game.global.sLevel == 3) return "到达区域 110";
				else if (game.global.sLevel >= 4) return "到达区域 130";
			}
		},
		Meditate: {
			description: "访问一个更强大的维度，试图学习如何更好地训练你的脆皮。 所有的敌人将拥有+100%的生命和+50%的攻击，但是你的脆皮收集速度将会提高25%。 完成 <b>'Trimple of Doom' (33)</b> 后将返回正常的世界。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 44);
			},
			allowSquared: true,
			squaredDescription: "访问一个更强大的维度，尝试学习如何更好地训练你的脆皮。 所有的敌人将拥有+100%的生命和+50%的攻击，但是你的脆皮收集速度将会提高25%。",
			unlocks: "Meditation",
			unlockString: "到达区域 45"
		},
		Decay: {
			description: "Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing <b>Zone 55</b> with this challenge active will allow you to select the Gardens biome when creating maps, and all future Gardens maps created will gain +25% loot.",
			completed: false,
			abandon: function () {
				updateDecayStacks();
			},
			fireAbandon: true,
			stacks: 0,
			filter: function () {
				return (game.global.highestLevelCleared >= 54);
			},
			unlockString: "到达区域55",
		},
		Trimp: {
			description: "调整传送门，让你进入一个维度，如果一次超过1次的战斗，脆皮会爆炸。 你将不能学习协调， 但是完成 <b>'The Block' (11)</b> 将教会你如何让你的脆皮存活更长时间。",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "调整传送门，让你进入一个维度，如果一次超过1次的战斗，脆皮会爆炸。你将无法学会协调。",
			replaceSquareThresh: 40,
			replaceSquareReward: 3,
			replaceSquareGrowth: 3,
			unlocks: "Resilience",
			filter: function () {
				return (game.global.world >= 60 || game.global.highestLevelCleared >= 59);
			},
			abandon: function () {
				if (game.challenges.Trimp.heldBooks > 1)
					game.upgrades.Coordination.allowed += game.challenges.Trimp.heldBooks - 1;
				if (game.challenges.Trimp.heldBooks > 0)
					unlockUpgrade("Coordination");
			},
			unlockString: "到达区域 60"
		},
		Trapper: {
			description: "旅行到一个地方，在那里，脆皮拒绝在人工饲养的环境中繁殖，为你自己学习如何利用繁殖率较低的新环境。 清理 <b>'Trimple Of Doom' (33)</b> 有了这个挑战，你的繁殖率就会恢复到正常水平。",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "旅行到一个地方，在那里，脆皮拒绝在囚禁中繁殖，祝你好运!",
			replaceSquareThresh: 50,
			replaceSquareGrowth: 2,
			unlocks: "Anticipation",
			filter: function () {
				return (game.global.highestLevelCleared >= 69);
			},
			start: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "bored";
			},
			onLoad: function () {
				this.start();
			},
			abandon: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "breeding";
				for (var x = 0; x < game.challenges.Trapper.heldBooks; x++){
					unlockUpgrade("Potency");
				}
			},
			unlockString: "到达区域 70"
		},
		Electricity: {
			description: "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing <b>'The Prison' (80)</b> will reward you with an additional 200% of all helium earned up to but not including Zone 80. This is repeatable!",
			completed: false,
			hasKey: false,
			filter: function () {
				return (game.global.prisonClear > 0);
			},
			fireAbandon: true,
			abandon: function () {
				game.challenges.Electricity.stacks = 0;
				updateElectricityStacks();
			},
			heldHelium: 0,
			heliumThrough: 79,
			allowSquared: true,
			attacksInARow: 0,
			squaredDescription: "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack.",
			stacks: 0,
			unlockString: "clear 'The Prison' at Zone 80"
		},
		Frugal: {
			description: "Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing <b>'Dimension of Anger' (20)</b> with this challenge active will return missing books to maps, and your new skills in Frugality will permanently cause MegaBooks to increase gather speed by 60% instead of 50%.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			start: function (reset) {
				var mod = (reset) ? 1.2 : 1.1;
				for (var item in game.equipment){
					var cost = (item == "Shield") ? "wood" : "metal";
					game.equipment[item].cost[cost][1] = mod;
				}
			},
			onLoad: function () {
				this.start();
			},
			fireAbandon: true,
			abandon: function () {
				this.start(true);
			},
			unlockString: "到达区域 100"
		},
		Life: {
			description: "Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing <b>Zone 110</b> will reward you with an additional 400% of all helium earned up to that point. This is repeatable!",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 109)
			},
			heliumMultiplier: 4,
			heldHelium: 0,
			heliumThrough: 110,
			unlockString: "到达区域 110",
			stacks: 150,
			maxStacks: 150,
			fireAbandon: true,
			lowestStacks: 150,
			getHealthMult: function(forDisplay){
				var mult = (this.stacks / 10);
				if (forDisplay) return (prettify(mult * 100) + "%");
				return 1 + mult;
			},
			arrayHolder: [[]],
			start: function () {
				updateLivingStacks();
			},
			abandon: function () {
				if (document.getElementById('livingBuff')) document.getElementById('goodGuyName').removeChild(document.getElementById('livingBuff'));
			}
		},
		Mapocalypse: {
			description: "Experience a slightly distorted version of the 'Electricity' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing <b>'The Prison' (80)</b> will cause the world to return to normal. You <b>will</b> receive the Helium reward from Electricity.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 114);
			},
			fireAbandon: true,
			abandon: function () {
				for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
					game.global.mapsOwnedArray[x].difficulty = parseFloat(game.global.mapsOwnedArray[x].difficulty) - this.difficultyIncrease;
				}
			},
			unlocks: "Siphonology",
			unlockString: "到达区域 115",
			difficultyIncrease: 3
		},
		Coordinate: {
			description: "Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing <b>'Dimension of Anger' (20)</b> with this challenge active will cause all enemies to lose their Coordination.",
			completed: false,
			allowSquared: true,
			squaredDescription: "Visit a dimension where Bad Guys are Coordinated but never fast, chip 'em down!",
			replaceSquareFreq: 3,
			replaceSquareThresh: 30,
			filter: function () {
				return (game.global.highestLevelCleared >= 119);
			},
			unlocks: "Coordinated",
			unlockString: "到达区域 120"
		},
		Crushed: {
			description: "到大气中氦含量丰富的维度，但是坏家伙有50%的几率爆击+400%的伤害，除非你的格挡和你当前的生命值水平一样高。 清理 <b>仿生仙境 (Z125)</b> 将会给你额外的400%的氦，但不包括Z125。这个挑战是可重复的。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			critsTaken: 0,
			fireAbandon: true,
			abandon: function () {
				document.getElementById("badCrit").innerHTML = "";
				document.getElementById("badCanCrit").style.display = "none";
			},
			heldHelium: 0,
			heliumThrough: 124,
			unlockString: "到达区域 125"
		},
		Slow: {
			description: "Legends tell of a dimension inhabited by incredibly fast bad guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All bad guys will attack first in this dimension, but clearing <b>Zone 120</b> with this challenge active will forever-after allow you to create these new pieces of equipment.",
			completed: false,
			allowSquared: true,
			squaredDescription: "Legends tell of a dimension inhabited by incredibly fast bad guys, and you seem to want to go there to prove something. All bad guys will attack first in this dimension, watch your health!",
			filter: function () {
				return (game.global.highestLevelCleared >= 129);
			},
			unlockString: "到达区域 130"
		},
		Nom: {
			description: "Travel to a dimension where bad guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the bad guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the bad guys are too big and slow to attack first. Clearing <b>Zone 145</b> will reward you with an additional 350% of all helium earned up to that point. This is repeatable!",
			completed: false,
			allowSquared: true,
			squaredDescription: "Travel to a dimension where bad guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the bad guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the bad guys are too big and slow to attack first.",
			heliumMultiplier: 3.5,
			filter: function () {
				return (game.global.highestLevelCleared >= 144);
			},
			heldHelium: 0,
			heliumThrough: 145,
			unlockString: "到达区域 145"
		},
		Mapology: {
			description: "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing <b>Zone 100</b> with this challenge active will return you to your original dimension. Double prestige from Scientist IV will not work during this challenge.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 149);
			},
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. <b>The mastery Blacksmithery will not function while this challenge is active.</b>",
			abandon: function (){
				document.getElementById("mapCreditsLeft").innerHTML = "";
			},
			onLoad: function () {
				updateMapCredits();
			},
			unlocks: "Resourceful",
			credits: 0,
			unlockString: "到达区域 150"
		},
		Toxicity: {
			description: "Travel to a dimension rich in helium, but also rich in toxic bad guys. All bad guys have 5x attack and 2x health. Each time you attack a bad guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a zone. Completing <b>Zone 165</b> with this challenge active will reward you with an additional 200% of all helium earned up to that point. This is repeatable!",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 164);
			},
			highestStacks: 0,
			heldHelium: 0,
			heliumThrough: 165,
			heliumMultiplier: 2,
			stacks: 0,
			maxStacks: 1500, //Changing this breaks the feat spaghetti
			stackMult: 0.997,
			lootMult: 0.15,
			allowSquared: true,
			squaredDescription: "Travel to a dimension filled with the glory that comes from killing toxic bad guys. All bad guys have 5x attack and 2x health. Each time you attack a bad guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a zone.",
			unlockString: "到达区域 165"
		},
		Devastation: {
			description: "Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing <b>Imploding Star (Zone 170)</b> will return the world to normal.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			lastOverkill: -1,
			unlocks: "Overkill",
			unlockString: "到达区域 170"
		},
		Watch: {
			description: "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing <b>Zone 180</b> with this challenge active will reward you with an additional 200% of all helium earned up to that point.",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			allowSquared: true,
			squaredDescription: "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to.",
			heliumMultiplier: 2,
			heldHelium: 0,
			heliumThrough: 180,
			unlockString: "到达区域 180",
			enteredMap: false
		},
		Lead: {
			description: "Travel to a dimension where life is easier or harder depending on the time. Odd numbered zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered zone will cause all enemies to gain 200 stacks of <b>Momentum</b>. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy's damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack. Completing <b>Zone 180</b> with this challenge active will reward you with an additional 300% of all helium earned up to that point.",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			heliumMultiplier: 3,
			stacks: 0,
			heldHelium: 0,
			allowSquared: true,
			squaredDescription: "Travel to a dimension where life is easier or harder depending on the time. Odd numbered zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered zone will cause all enemies to gain 200 stacks of <b>Momentum</b>. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy's damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack.",
			heliumThrough: 180,
			unlockString: "到达区域 180",
			fireAbandon: true,
			abandon: function () {
				if (document.getElementById('determinedBuff')) document.getElementById('determinedBuff').style.display = "none";
			}
		},
		Corrupted: {
			get description(){ return "Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z" + mutations.Corruption.start(true) + ". Completing <b>Zone 190</b> with this challenge active will reward you with an extra 200% helium earned from any source up to that point, and will instantly transport you back to your normal dimension."},
			filter: function () {
				return (game.global.highestLevelCleared >= 189);
			},
			heliumMultiplier: 2,
			heldHelium: 0,
			heliumThrough: 190,
			hiredGenes: false,
			unlockString: "到达区域 190"
		},
		Obliterated: {
			get squaredDescription() {
				var num = prettify(1e12);
				return "Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have " + num + "x attack and health and equipment is " + num + "x more expensive. Every 10 zones, enemy attack and health will increase by another 10x."
			},
			filter: function () {
				return (game.global.highestLevelCleared >= 424);
			},
			replaceSquareFreq: 1,
			replaceSquareThresh: 10,
			onlySquared: true,
			allowSquared: true,
			fireAbandon: true,
			unlockString: "到达区域 425",
			mustRestart: true
		}
	},
	stats:{
		trimpsKilled: {
			title: "死掉的脆皮",
			value: 0,
			valueTotal: 0
		},
		battlesWon: {
			title: "战斗胜利",
			value: 0,
			valueTotal: 0
		},
		battlesLost: {
			title: "战斗失败",
			value: 0,
			valueTotal: 0
		},
		mapsCleared: {
			title: "清理地图",
			value: 0,
			valueTotal: 0
		},
		zonesCleared: {
			title: "清理区域",
			value: 0,
			valueTotal: 0
		},
		gemsCollected: {
			title: "收集宝石",
			value: 0,
			valueTotal: 0,
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			}
		},
		trimpsFired: {
			title: "解雇脆皮",
			value: 0,
			valueTotal: 0,
			//This stat was added in 3.6 and the numbers will look bad for a few months.
			//Open maybe 10/21/16ish
			display: function () {return false;}
		},
		highestLevel: {
			title: "最高区域",
			valueTotal: function () {
				return game.global.highestLevelCleared + 1;
			}
		},
		totalPortals: {
			title: "使用的总传送门数",
			display: function () {
				return (game.global.totalPortals > 0);
			},
			valueTotal: function () {
				return game.global.totalPortals;
			}
		},
		totalHelium: {
			title: "总氦气获得",
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			valueTotal: function () {
				return game.global.totalHeliumEarned;
			}
		},
		spentOnWorms: {
			title: "蠕虫氦气",
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			},
			value: 0,
			valueTotal: 0
		},
		heliumHour: {
			title: "游戏时间",
			display: function () {
				return (game.resources.helium.owned > 0);
			},
			value: function (useTemp) {
				var timeThisPortal = new Date().getTime() - game.global.portalTime;
				if (timeThisPortal < 1) return 0;
				timeThisPortal /= 3600000;
				var resToUse = (useTemp) ? game.global.tempHighHelium : game.resources.helium.owned;
				return Math.floor(resToUse / timeThisPortal);
			}
		},
		bestHeliumHourThisRun: {
			title: "Best He/Hr this Run",
			display: function () {
				return (this.storedValue > 0);
			},
			storedValue: 0,
			atZone: 0,
			value: function () {
				return prettify(game.stats.bestHeliumHourThisRun.storedValue) + ", Z:" + game.stats.bestHeliumHourThisRun.atZone;
			},
			evaluate: function () { //called from portalTime
				var heHr = game.stats.heliumHour.value();
				if (heHr > this.storedValue){
					this.storedValue = heHr;
					this.atZone = game.global.world;
				}
			},
			onPortal: function () {
				this.storedValue = 0;
				this.atZone = 0;
			},
			noFormat: true
		},
		bestHeliumHour: {
			title: "Best He/Hour all Runs",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		planetsBroken: {
			title: "Planets Broken",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		highestVoidMap: {
			title: "Highest Void Map Clear",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			evaluate: function() { //called on completion of void map
				if (game.global.world > this.value) this.value = game.global.world;
				if (game.global.world > this.valueTotal) this.valueTotal = game.global.world;
			}
		},
		goldenUpgrades: {
			title: "Golden Upgrades",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		totalHeirlooms: { //added from createHeirloom to value
			title: "Heirlooms Found",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		dailyBonusHelium: {
			title: "Daily Challenge Helium",
			display: function () {
				return (this.value >0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		cellsOverkilled: {
			title: "World Cells Overkilled",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		trimpsGenerated: {
			title: "Trimps from Generator",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		decayedNurseries: {
			title: "Nurseries Closed by Magma",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		zonesLiquified: {
			title: "Zones Liquified",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0)
			},
			value: 0,
			valueTotal: 0
		}
	},
	generatorUpgrades: {
		Efficiency: {
			base: 5e8,
			baseCost: 8,
			upgrades: 0,
			modifier: 1,
			tickAtFuel: function(fuel){
				return Math.floor(Math.sqrt(fuel) * ((this.base * 0.1 * this.upgrades) + this.base));
			},
			cost: function(){
				return this.baseCost + (8 * this.upgrades);
			},
			description: function(){
				var burnRate = getFuelBurnRate();
				return "Your Generator currently grants " + prettify(scaleNumberForBonusHousing(this.tickAtFuel(burnRate))) + " Max Trimps per tick at " + burnRate + " fuel (the amount of fuel needed to tick). Purchase this to increase the Generator's efficiency by 10% (additive)";
			}
		},
		Capacity: {
			base: 3,
			baseCost: 32,
			upgrades: 0,
			modifier: 3,
			baseIncrease: 0.4,
			cost: function(){
				return this.baseCost + (32 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				return "Your Generator can currently store " + prettify(this.modifier) + " fuel. Purchase this to increase the fuel capacity by " + prettify(this.baseIncrease) + ". The more fuel you have in storage, the more housing you'll create per tick!";
			}
		},
		Supply: {
			base: 0.2,
			baseCost: 64,
			baseIncrease: 0.02,
			upgrades: 0,
			modifier: 0.2,
			cost: function(){
				return this.baseCost + (64 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				var currentAmt = this.modifier;
				var maxZone = ((currentAmt - 0.2) / 0.01) + mutations.Magma.start();
				return "The Magma at Zone " + mutations.Magma.start() + " contains 0.2 fuel per cell, and each zone after that can drop 0.01 more. Your generator can currently only harvest a max of " + prettify(this.modifier) + " per cell, meaning some fuel after Z" + prettify(maxZone) + " will be unharvestable. Purchase this upgrade to increase the amount you can harvest per cell by <b>0.02</b>, taking advantage of <b>2 extra zones</b>.";
			}
		},
		Overclocker: {
			base: 0.5,
			baseCost: 512,
			baseIncrease: 0.01,
			upgrades: 0,
			modifier: 0.5,
			cost: function () {
				return this.baseCost + (32 * this.upgrades);
			},
			nextModifier: function () {
				if (this.upgrades == 0) return this.modifier;
				return this.modifier * (1 - this.baseIncrease);
			},
			description: function () {
				var requires = "<p class='" + ((game.permanentGeneratorUpgrades.Hybridization.owned && game.permanentGeneratorUpgrades.Storage.owned) ? "green" : "red") + "'>Requires Hybridization and Storage.</p>";
				var text = requires + "<p>The first level of this upgrade will cause the Dimensional Generator to overclock instead of wasting fuel whenever you find more fuel than you can store. Overclocking will cause an instant Generator tick at a base of 50% effectiveness.</p><p>Every upgrade purchased after the first will reduce the Overclocking penalty by 1%, compounding.</p>";
				if (this.upgrades > 0)
					text += "<p>Your current Overclocker effectiveness is " + ((1 - this.modifier) * 100).toFixed(2) + "%. Next level, your Overclocker effectiveness will be " + ((1 - (this.modifier * (1 - this.baseIncrease))) * 100).toFixed(2) + "%.</p>";
				return text;
			}
		}
	},
	permanentGeneratorUpgrades: {
		Hybridization: {
			description: "Unlock the ability to switch your Dimensional Generator to Hybrid mode. Hybrid mode will automatically switch to Gain Fuel when fuel is below max, and Gain Mi when fuel is full.",
			cost: 300,
			owned: false
		},
		Storage: {
			description: "Unlock extra fuel storage. This storage will always be equal to your normal fuel cap and will only store extra fuel above your normal cap. Fuel in this extra storage does not increase generator Trimps/tick, but acts as nice padding to help prevent wasted fuel. Hybrid mode will attempt to fill your extra storage halfway.",
			cost: 600,
			owned: false
		},
		Shielding: {
			description: "Reduce the amount of Magmite that decays after each portal by 10% (additive)",
			cost: 1050,
			owned: false
		},
		Slowburn: {
			description: "将每轮的燃料消耗率降低0.1，从0.5降低到0.4",
			cost: 1875,
			owned: false
		},
		Supervision: {
			description: "Gain the ability to pause the Dimensional Generator, opening up new strategic possibilities!",
			cost: 2000,
			owned: false,
			onPurchase: function() {
				var elem = document.getElementById('generatorWindow');
				if (elem != null)
					elem.innerHTML = getGeneratorHtml();
				updateGeneratorInfo();
			}
		}
	},
	//Total 4448% after 4.6
	tierValues: [0, 0.3, 1, 2.5, 5, 10, 20, 40, 80, 160],
	//rip colorsList, 11/28/15 - 11/28/17. He served us well until it became obvious that CSS was better.
	//colorsList: ["white", "#155515", "#151565", "#551555", "#954515", "#651515", "#951545", "#35a5a5", "#d58565", "#d53535"],
	achievements: {
		zones: {
			finished: 0,
			title: "区域进度",
			description: function (number) {
				return "完成区域 " + this.breakpoints[number];
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return game.global.highestLevelCleared + " / " + this.breakpoints[this.finished];
				return game.global.highestLevelCleared + " total";
			},
			evaluate: function () { return game.global.highestLevelCleared},
			breakpoints: [2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 350, 400, 450, 500],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
			names: ["这很容易", "飞艇杀手", "都是开拓", "开端", "决心", "教授", "脆皮业余爱好者", "星际杀手", "上进心", "电气", "残端", "耐久力", "坚定不移", "配合", "已解决", "坚定", "砂砾", "恒心", "坚持", "韧性", "研究者", "破坏者", "毁灭者", "灭火器", "制热机", "加热器", "热断路器", "热火杀手", "热火专家", "热弯机", "火山", "岩浆大师", "大自然", "灵感", "癫狂", "尖顶大师"],
			icon: "icomoon icon-compass2",
			newStuff: []
		},
		damage: {
			finished: 0,
			title: "脆皮伤害",
			description: function (number) {
				return "达到 " + prettify(this.breakpoints[number]) + " 显示伤害";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.highest) + " / " + prettify(this.breakpoints[this.finished]);
				return "最高的是 " + prettify(this.highest);
			},
			highest: 0,
			breakpoints: [100, 100000, 1e+11, 1e+17, 1e+23, 1e+29, 1e+35, 1e+41, 1e+47, 1e+53, 1e+60, 1e+67],
			tiers: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			names: ["领导脆皮", "银色脆皮", "金色脆皮", "铜色脆皮", "白金脆皮", "铁脆皮", "钢脆皮", "黑曜石脆皮", "钴脆皮", "黄玉脆皮", "钻石脆皮", "超越脆皮"],
			icon: "icomoon icon-bomb",
			newStuff: []
		},
		trimps: {
			finished: 0,
			highest: 0,
			title: "拥有脆皮",
			description: function (number) {
				return "累计拥有  " + prettify(this.breakpoints[number]) + " 脆皮";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.highest)) + " / " + prettify(this.breakpoints[this.finished]);
				return "Highest is " + prettify(Math.floor(this.highest));
			},
			breakpoints: [50, 150, 300, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000],
			tiers: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
			names: ["太多脆皮", "人满为患", "这是脆皮", "建成部落", "建成乡镇", "建成城市", "建成国家", "调整增长", "MMMEGATRIMPS", "它是一个国家", "星球", "宇宙"],
			icon: "icomoon icon-group",
			newStuff: []
		},
		housing: {
			finished: 0,
			title: "房地产",
			description: function (number) {
				if (number == 9) return "使用维度生成器";
				return "建造你的第一个  " + cnwhat(this.breakpoints[number]);
			},
//			breakpoints: ["窝棚", "房子", "大厦", "旅馆", "娱乐场", "出入口", "虫洞", "集电极", "经线站", "发电机"],
            breakpoints: ["Hut", "House", "Mansion", "Hotel", "Resort", "Gateway", "Wormhole", "Collector", "Warpstation", "Generator"],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3, 5],
			names: ["小公寓", "住宅开发", "品味奢华", "花俏", "地平线", "维漂移", "对氦来说太酷了", "星际空间", "无穷无尽", "大众新一代"],
			icon: "icomoon icon-building-o",
			newStuff: []
		},
		portals: {
			finished: 0,
			title: "总传送门",
			description: function (number) {
				var s = (number > 0) ? "" : "";
				return "使用传送门 " + prettify(this.breakpoints[number]) + " 次" + s;
			},
			display: function () {
				return (game.global.totalPortals > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return this.evaluate() + " total";
			},
			evaluate: function () { return game.global.totalPortals},
			breakpoints: [1, 3, 10, 20, 50, 100, 200, 500],
			tiers: [1, 2, 2, 2, 3, 3, 4, 4],
			names: ["A Trimp Through Time", "When The Wild Things Are", "A Time Like No Other", "Venti Timeachino", "Time of Your Life", "Centennial Trimper", "Amnesia", "Dedicated Traveller"],
			icon: "icomoon icon-history",
			newStuff: []
		},
		totalZones: {
			finished: 0,
			title: "总清理区域",
			description: function (number) {
				return "清理了  " + prettify(this.breakpoints[number]) + " 总区域";
			},
			evaluate: function () {
				return game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return prettify(this.evaluate()) + " 总共";
			},
			breakpoints: [30, 70, 130, 200, 400, 777, 1000, 1500, 10000, 50000],//total zones according to stats
			tiers: [2, 2, 3, 3, 3, 4, 4, 5, 7, 7],
			names: ["Pathfinder", "Bushwhacker", "Pioneer", "Seeker", "Adventurer", "Lucky Resolve", "GigaClearer", "Globetrotter", "Vanquisher", "Conquistador"],
			icon: "icomoon icon-globe3",
			newStuff: []
		},
		totalMaps: {
			finished: 0,
			title: "地图总清理数",
			description: function (number) {
				return "总共清理了  " + prettify(this.breakpoints[number]) + " 地图";
			},
			display: function () {
				return (this.evaluate() > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " 总共";
			},
			evaluate: function () {
				return game.stats.mapsCleared.value + game.stats.mapsCleared.valueTotal;
			},
			breakpoints: [50, 100, 2000, 5000, 10000, 20000, 50000, 100000],//total maps according to stats
			tiers: [1, 2, 2, 3, 3, 4, 4, 5],
			names: ["Map Maker", "Map Runner", "Map Destroyer", "Map Annihilator", "Map Slaughterer", "Map Commander", "Maptain", "Cartographer"],
			icon: "icomoon icon-map4",
			newStuff: []
		},
		totalHelium: {
			finished: 0,
			title: "氦收集",
			description: function (number) {
				return "Gather " + prettify(this.breakpoints[number]) + " total Helium";
			},
			progress: function (){
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.evaluate() * 10000) / 10000) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.global.totalHeliumEarned;
			},
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			breakpoints: [100, 10e2, 10e3, 10e4, 10e5, 10e6, 10e7, 10e8, 10e10, 10e11, 10e13, 10e15],
			tiers: [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8],
			names: ["Cool", "Crisp", "Brisk", "Chilly", "Frosty", "Frigid", "Frozen", "Gelid", "Glacial", "Freaking Cold", "Arctic", "Absolute Zero"],
			icon: "glyphicon glyphicon-oil",
			newStuff: []
		},
		heliumHour: {
			finished: 0,
			title: "氦每小时",
			description: function (number) {
				return "达到 " + prettify(this.breakpoints[number]) + " 氦每小时";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.evaluate() * 10000) / 10000) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.stats.heliumHour.value();
			},
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			breakpoints: [10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e9, 1e11, 1e13, 1e15, 5e17],
			tiers: [2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9],
			names: ["Coldlector", "Centelium", "Frosty Tanker", "Blimp Snatcher", "Squeaky Dasher", "Quick N Cool", "Hour Bender", "Acquired Frost", "Vacuum", "Levitator", "Soarer", "Cool Runnings"],
			icon: "icomoon icon-cloudy2",
			newStuff: []
		},
		totalHeirlooms: {
			finished: 0,
			title: "传家宝收藏",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "" : "";
				return "收集了 " + prettify(number) + " 传家宝" + s;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return prettify(this.evaluate()) + " 总计";
			},
			evaluate: function () {
				return game.stats.totalHeirlooms.value + game.stats.totalHeirlooms.valueTotal;
			},
			display: function () {
				return (game.global.totalPortals >= 5);
			},
			breakpoints: [1, 10, 40, 100, 500, 1111, 2000, 5000],
			tiers: [2, 2, 3, 3, 4, 5, 6, 7],
			names: ["Finder", "Gatherer", "Accumulator", "Fancier", "Aficionado", "Devotee", "Connoisseur", "Expert"],
			icon: "icomoon icon-archive",
			newStuff: []
		},
		totalGems: {
			finished: 0,
			title: "宝石收集",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "" : "";
				return "收集  " + prettify(number) + " 宝石" + s;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " 总共";
			},
			evaluate: function () {
				return game.stats.gemsCollected.value + game.stats.gemsCollected.valueTotal;
			},
			breakpoints: [1, 1e+9, 1e+21, 1e+30, 1e+39, 1e+48],//total gems according to statistics
			tiers: [1, 2, 3, 4, 5, 6],
			names: ["这个是干什么的?", "Shinies收藏家", "Dragimp爱人", "Shinies专家", "珠宝商", "宝石大师"],
			icon: "icomoon icon-diamond",
			newStuff: []
		},
		dailyHelium: {
			finished: 0,
			title: "日常奖金",
			description: function (number) {
				var number = this.breakpoints[number];
				return "获取 " + prettify(number) + " 氦气从每日挑战";
			},
			evaluate: function () {
				return game.stats.dailyBonusHelium.value + game.stats.dailyBonusHelium.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			breakpoints: [5e5, 1e6, 5e6, 2.5e7, 2e9, 1e12],
			display: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			tiers: [3, 4, 5, 6, 7, 8],
			names: ["Daytermined", "Daydicated", "Daystiny", "Daylighted", "Daystroyer", "Daylusional"],
			icon: "icomoon icon-sun",
			newStuff: []
		},
		humaneRun: {
			finished: 0,
			title: "人性化战斗",
			description: function (number){
				var number = this.breakpoints[number];
				return "<span style='font-size: .8em'>关爱区域" + number + " 每个区域失去不超过一个战士。</span>";
			},
			evaluate: function () {
				if (!this.earnable || game.stats.battlesLost.value > this.lastZone + 1) return 0;
				return game.global.world;
			},
			progress: function () {
				if (!this.earnable && this.lastZone == -1) return "您需要传送门才能符合条件";
				if (!this.earnable) return "你失去了不止一次区域" + this.lastZone;
				if (game.stats.battlesLost.value > this.lastZone + 1) return "你失去了太多战士!";
				if (game.stats.battlesLost.value == this.lastZone + 1) return "你在该区域已经失败了一次，要小心!";
				return "Still Earnable!";
			},
			earnable: true,
			lastZone: 0,
			breakpoints: [5, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
			tiers: [1, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8],
			names: ["Sitter", "Watchdog", "Nanny", "Caretaker", "Supervisor", "Advocate", "Guardian", "Coddler", "Savior", "Defender", "Trimp Lover"],
			icon: "glyphicon glyphicon-eye-open",
			newStuff: [],
		},
		blockTimed: {
			finished: 0,
			title: "Speed: The Block",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "Clear The Block in less than " + number + " from start of run";
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			display: function () {
				return (game.global.totalPortals >= 1 || this.finished >= 1);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [1, 1, 2, 2],
			names: ["Block Hobbyist", "Block Apprentice", "Block Professional", "Block Rockstar"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		wallTimed: {
			finished: 0,
			title: "Speed: The Wall",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "Clear The Wall in less than " + number + " from start of run";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 10 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 2, 2, 3],
			names: ["Wall Novice", "Wall Student", "Wall Contender", "Wall Scaler"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		angerTimed: {
			finished: 0,
			title: "Speed: Anger",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "Clear DoA in less than " + number + " from start of run";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 14 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60, 1],//In minutes
			tiers: [2, 2, 3, 3, 8],
			names: ["Angry Jogger", "Angry Runner", "Angry Sprinter", "Angry Racer", "Angry Teleporter"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		doomTimed: {
			finished: 0,
			title: "Speed: Doom",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "Clear ToD in less than " + number + " from start of run";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 19 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 3, 3, 4],
			names: ["Walk to Doom", "Trot to Doom", "Canter to Doom", "Gallop to Doom"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		prisonTimed: {
			finished: 0,
			title: "Speed: The Prison",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "Clear Prison in less than " + number + " from start of run";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 32 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 360, 240, 180, 150, 120, 105, 90, 10], //In minutes
			tiers: [3, 4, 4, 5, 5, 5, 6, 6, 8],
			names: ["Prison Odyssey", "Prison Expedition", "Prison Adventure", "Prison Trek", "Prison Tour", "Prison Road Trip", "Prison Hike", "Prison Jog", "Prison Sprint"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		bionicTimed: {
			finished: 0,
			title: "Speed: Bionic",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear 仿生仙境 in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 79);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1440, 1200, 720, 480, 210, 150], //In minutes
			tiers: [4, 4, 5, 5, 6, 6],
			names: ["Lover of Bots", "Friend of Bots", "Acquaintance of Bots", "Bot Disliker", "Bot Hater", "Bot Slayer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		starTimed: {
			finished: 0,
			title: "Speed: Star",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Imploding Star in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1680, 1080, 390, 180, 150, 50, 5], //In minutes
			tiers: [5, 5, 5, 6, 6, 7, 8],
			names: ["Cosmic Curiosity", "Star Struck", "Space Speeder", "Intense Inertia", "Stellar Striker", "Insane Imploder", "Born Imploded"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spireTimed: {
			finished: 0,
			title: "Speed: Spire",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear the Spire in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1300, 900, 500, 200, 175, 60],
			tiers: [6, 6, 6, 7, 7, 7],
			names: ["Spire Trialer", "Spire Rider", "Spire Strider", "Spire Glider", "Spire Flier", "Inspired"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire2Timed: {
			finished: 0,
			title: "Speed: Spire II",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Spire II in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 269);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [500, 200, 120, 60],
			tiers: [6, 7, 8, 8],
			names: ["Toxic Treader", "Toxic Trotter", "Toxic Traveller", "Toxic Tempo"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire3Timed: {
			finished: 0,
			title: "Speed: Spire III",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Spire III in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 369);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 80],
			tiers: [6, 7, 8, 8],
			names: ["Chillin", "Arctic Accelerator", "Rimy Runner", "Subzero Sprinter"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire4Timed: {
			finished: 0,
			title: "Speed: Spire IV",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Spire IV in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 469);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [4320, 2880, 1440],
			tiers: [8, 8, 9],
			names: ["Windy Walker", "Zippy Zephyr", "Temporal Tempest"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		oneOffs: {
			//Turns out this method of handling the feats does NOT scale well... adding stuff to the middle is a nightmare
			finished: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			title: "Feats",
			get descriptions () {
				return ["Reach Z30 with no respec and 60 or less He spent", "Have over " + prettify(1e6) + " traps at once", "Die 50 times to a single Voidsnimp", "Beat Balance, never having more than 100 stacks", "Reach Zone 10 with 5 or fewer dead Trimps", "Reach exactly 1337 he/hr", "Attack 20 times without dying in Electricity", "Equip a magnificent or better Staff and Shield", "Reach Z60 with 1000 or fewer dead Trimps", "Reach Z120 without using manual research", "Reach Z75 without buying any housing", "Find an uncommon heirloom at Z146 or higher", "Spend over " + prettify(250e3) + " total He on Wormholes", "Reach Z60 with rank III or lower equipment", "Kill an Improbability in one hit", "Beat a Lv 60+ Destructive Void Map with no deaths", "Beat Crushed without being crit past Z5", "Kill an enemy with 100 stacks of Nom", "Reach Z60 without hiring a single Trimp", "Complete a zone above 99 without falling below 150 stacks on Life", "Spend at least 10 minutes breeding an army with Geneticists", "Beat Toxicity, never having more than 400 stacks", "Own 100 of all housing buildings", "Overkill every possible world cell before Z60", "Complete Watch without entering maps or buying Nurseries", "Equip a Magmatic Staff and Shield", "Bring a world enemy's attack below 1", "Complete Lead with 1 or fewer Gigastations", "Complete Corrupted without Geneticists", "Complete The Spire with 0 deaths", "Overkill an Omnipotrimp", "Defeat a Healthy enemy with 200 stacks of wind", "Earn a Challenge<sup>2</sup> bonus of 2000%", "Complete a Bionic Wonderland map 45 levels higher than your zone number", "Beat the Spire with no respec and less than " + prettify(100e6) + " He Spent", "Defeat an enemy on Obliterated"];
			},
			tiers: [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
			description: function (number) {
				return this.descriptions[number];
			},
			filters: [29, 29, -1, 39, 59, -1, 79, 124, 59, 119, 74, -1, -1, 59, 59, 59, 124, 144, 59, 109, -1, 164, 59, -1, 179, 229, 245, 179, 189, 199, 229, 300, 65, 169, 199, 424],
			icon: "icomoon icon-flag",
			names: ["Underachiever", "Hoarder", "Needs Block", "Underbalanced", "Peacekeeper", "Elite Feat", "Grounded", "Swag", "Workplace Safety", "No Time for That", "Tent City", "Consolation Prize", "Holey", "Shaggy", "One-Hit Wonder", "Survivor", "Thick Skinned", "Great Host", "Unemployment", "Very Sneaky", "Extra Crispy", "Trimp is Poison", "Realtor", "Gotta Go Fast", "Grindless", "Swagmatic", "Brr", "Unsatisfied Customer", "Organic Trimps", "Invincible", "Mighty", "Mother Lode", "Challenged", "Bionic Sniper", "Nerfed", "Obliterate"],
			newStuff: []
		}
	},

	heirlooms: { //Basic layout for modifiers. Steps can be set specifically for each modifier, or else default steps will be used
		//NOTE: currentBonus is the only thing that will persist!
		values: [10, 20, 30, 50, 150, 300, 800, 2000],
		defaultSteps: [[1, 2, 1], [2, 3, 1], [3, 6, 1], [6, 12, 1], [16, 40, 2], [32, 80, 4], [64, 160, 8], [128, 320, 16]],
        rarityNames: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Magnificent', 'Ethereal', '岩浆'],
		rarities:[[7500,2500,-1,-1,-1,-1,-1, -1],[2000,6500,1500,-1,-1,-1,-1, -1],[500,4500,5000,-1,-1,-1,-1, -1],[-1,3200,4300,2500,-1,-1,-1, -1],[-1,1600,3300,5000,100,-1,-1, -1],[-1,820,2400,6500,200,80,-1, -1],[-1,410,1500,7500,400,160,30, -1],[-1,200,600,8000,800,320,80, -1],[-1,-1,-1,7600,1600,640,160, -1], [-1,-1,-1,3500,5000,1200, 300, -1], [-1, -1, -1, -1, 8000, 1570, 350, 80], [-1, -1, -1, -1, 6000, 3170, 680, 150], [-1, -1, -1, -1, 3000, 5000, 1650, 350]],
		rarityBreakpoints: [41, 60, 80, 100, 125, 146, 166, 181, 201, 230, 300, 400],
		Staff: {
			metalDrop: {
				name: "金属掉落加成",
				currentBonus: 0,
			},
			foodDrop: {
				name: "食物掉落加成",
				currentBonus: 0,
			},
			woodDrop: {
				name: "木头掉落加成",
				currentBonus: 0,
			},
			gemsDrop: {
				name: "宝石掉落加成",
				currentBonus: 0,
			},
			fragmentsDrop: {
				name: "碎片掉落加成",
				currentBonus: 0,
			},
			FarmerSpeed: {
				name: "农民效率",
				currentBonus: 0,
			},
			LumberjackSpeed: {
				name: "伐木工的效率",
				currentBonus: 0,
			},
			MinerSpeed: {
				name: "矿工效率",
				currentBonus: 0,
			},
			DragimpSpeed: {
				name: "宝石效率",
				currentBonus: 0,
			},
			ExplorerSpeed: {
				name: "探险家效率",
				currentBonus: 0,
			},
			ScientistSpeed: {
				name: "科学家效率",
				currentBonus: 0,
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
			}
		},
		Shield: {
			playerEfficiency: {
				name: "玩家效率",
				currentBonus: 0,
				steps: [[2,4,1],[4,8,1],[8,16,1],[16,32,2],[32,64,4],[64,128,8],[128,256,16], [256, 512, 32]]
			},
			trainerEfficiency: {
				name: "培训师效率",
				currentBonus: 0,
				steps: [[1,5,1],[5,10,1],[10,20,1],[20,40,2],[40,60,2],[60,80,2],[80,100,2], [100, 120, 2]]
			},
			storageSize: {
				name: "存储上限",
				currentBonus: 0,
				steps: [[8,16,4],[16,32,4],[32,64,4],[64,128,4],[128,256,8],[256,512,16],[512,768,16],[768, 1024, 16]]
			},
			breedSpeed: {
				name: "繁殖速度",
				currentBonus: 0,
				steps: [[1,2,1],[2,5,1],[5,10,1],[10,20,1],[70,100,3],[100,130,3],[130,160,3],[160, 190, 3]]
			},
			trimpHealth: {
				name: "脆皮生命",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200, 260, 6]]
			},
			trimpAttack: {
				name: "脆皮攻击",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200, 260, 6]]
			},
			trimpBlock: {
				name: "脆皮防御",
				currentBonus: 0,
				steps: [[1,2,1],[2,4,1],[4,7,1],[7,10,1],[28,40,1],[48,60,1],[68,80,1],[88, 100, 1]]
			},
			critDamage: {
				name: "暴击伤害, 附加的",
				currentBonus: 0,
				steps: [[10,20,5],[20,40,5],[40,60,5],[60,100,5],[100,200,10],[200,300,10],[300,400,10],[400, 500, 10]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			critChance: {
				name: "暴击几率, 附加的",
				currentBonus: 0,
				steps: [[0.2,0.6,0.2],[0.6,1.4,0.2],[1.4,2.6,0.2],[2.6,5,0.2],[5,7.4,0.2],[7.4,9.8,0.2],[9.8,12.2,0.2], [12.3, 15.9, 0.3]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			voidMaps: {
				name: "虚空地图掉落几率",
				currentBonus: 0,
				steps: [[0.5,1.5,0.5],[2.5,4,0.5],[5,7,0.5],[8,11,0.5],[12,16,0.5],[17,22,0.5],[24,30,0.5],[32, 38, 0.5]]
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
				rarity: 1
			}
		}

	},


	worldText: {
		w2: "你的脆皮在那里杀死了很多坏人。 看起来你似乎已经弄清楚这是怎么一回事了。 然而这个世界很大，依然有去多区域需要探索，“砍”“砍”...",
		w3: "根据您的命令，您的科学家们已经开始尝试了解这个星球有多大。",
		w4: "您命令脆皮在该地区搜索您的船只的钥匙，但没有人找到任何东西。真令人失望。",
		w5: "你看到尽头的那个东西了吗？多么的巨大！多么的可怕！ 你以前从未见过这样的东西,但是你知道这是一个顽固的守卫。你是怎么知道的？别问为什么了，去杀死它！",
		w6: "You step over the corpse of the Blimp as it rapidly deflates, and one of your Trimps chuckles at the sound produced. You all cross the sulfuric river to the next zone, and can feel the presence of an ancient knowledge. Better explore.",
		w7: "慢而稳事必成， 除非跟你竞争的人比你更努力。",
		w8: "Your settlement is getting crowded, there's Trimps in the streets, and you're taking heat. You feel a sudden strong desire to create a map, though you're not quite sure how that would help.",
		w9: "你不能排除那种你以前来过这里的感觉，似曾相识。",
		w10: "看起来像另一个顽固的守卫。但很难说，特别是从这么远的地方，不过它看起来比上次那个多了一个头。",
		w11: "你不可阻挡，只要没人阻拦你。 不幸的是，看起来有些东西像是真的想阻止你。",
		w12: "你看到绿光一闪而过吗？奇怪。噢，好吧。",
		w13: "Your scientists have finally concluded their report on the analysis of the size of the world. According to the report, they're pretty sure it's infinitely large, but you're pretty sure they just got bored of checking.",
		w14: "You were trying to help bring back some of the Equipment your Trimps left on the ground in that last zone, and you got a splinter. This planet is getting dangerous, stay alert.",
		w15: "另一天,又是一个顽固的守卫在区域的尽头。",
		w16: "你是认真的吗？又一个守卫！",
		w17: "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
		w18: "似乎有一种奇怪的力量鼓励你继续前行。气氛变得有点，愤怒的感觉。 你的身体的一部分想转身回去,但其他大部分想继续前行。",
		w19: "你回头看看你的王国，你拥有宝石、殖民地和领土。 你在想你的脆皮是不是已经在战斗中牺牲了。 沉思之后， 两个字从你的嘴里蹦了出来 “算了”",
		w20: "你感觉到你离你的目标已经不远了。",
		w22: "Strange, the sky seems to be getting darker. You ask one of your Trimps for the time, but he doesn't know what a clock is.",
		w25: "You're a rebel. The universe pointed you into that portal, but you kept pushing forward. You feel... less like you've been here before.",
		w27: "It seems like the further you press on, the less you know. You still feel an urge to use the portal, though the urge has begun to dwindle.",
		w29: "Your Trimps came up with a pretty catchy battle song that got stuck in your head. None of them survived the next fight though, and you can't remember most of it. Life's tough.",
		w33: "You climb over a large hill that was separating this zone from the last. The sky is pitch black and lightning crackles in the distance. This is a site of heavy corruption.",
		w35: "You start to wonder how long you've been doing the same thing over and over. There must be something you can do to start to break the cycle. Perhaps you could alter the portal...",
		w40: "You can't help but notice that the Trimps seem to be the only creatures on this planet not immediately hostile towards outsiders. You ask a nearby Trimp soldier what he thinks you are, and he drools a bit.",
		w42: "The world seems so barren out this far. You feel like you're finally starting to get ahead of the curve, but you know by now not to get comfortable.",
		w44: "Each day and night seems to grow longer than the one before. Is time slowing down? Argh! You fall to your knees with a splitting headache and a strong desire to use the portal. After a few minutes, it passes and you forget what happened. What are we talking about?",
		w46: "All traces of hills and mountains have long since been trudged past. The world is flat and hostile. You wish your Trimps were better conversationalists.",
		w48: "As your Trimps scavenge every last bit of helium from that Blimp, one of them begins freaking out. He runs around waving his little arms and making funny noises for a while, eats some dirt, then takes a little nap. You wonder if that's normal. Yeah... probably fine.",
		w50: "It's been a long time since you've found any blueprints in the maps. You start to wonder where those things even come from.",
		w51: "Your scientists have detected an anomaly at the end of Zone 59. They recommend that you stop doing whatever it is that you're doing.",
		w53: "As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend into one. Trippy.",
		w54: "As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend into one. Trippy.",
		w56: "A loud boom echoes in the distance, and one of your Trimps runs up to you with outstretched arms, looking quite frightened. He probably just wants some armor and weapons! You hand him some gear, and he accepts it with excitement.",
		w58: "A huge storm has formed and daylight has become a luxury you have mostly forgotten about. Your Trimps seem to want to go back home, but you're pretty sure you're supposed to keep going this way, so you do. You're very close to the anomaly.",
		w59: "There it is. The anomaly is at the end of the zone. You can see it but you don't know what you're seeing. Where did that... thing... come from?! This is highly Improbable.",
		w60: "The ground instantly cracks and large plumes of green gas escape from the planet's core to the atmosphere. The planet feels different. Everything feels different. This Universe has grown unstable, the planet has broken. What have you done?",
		w61: "Other than all the dead Trimps, that wasn't so bad.",
		w65: "You feel more powerful than ever. The universe seems to be constantly adjusting itself to get rid of you, yet you rise against and persist. Something as tiny as you taking on an entire universe!",
		w68: "You figure some entertainment wouldn't be awful, and decide to teach your Trimps how to play soccer. A few hours and zero progress later, you really regret that decision.",
		w70: "The Improbabilities haven't seemed to slow down. You know you need to figure out a plan, but you don't know what to plan for.",
		w72: "You slash through another Improbability with relative ease, but something isn't right. A sour smell hits your nose and in disgust, you whip around in search of the source. Oh, wait, it's just the Trimps.",
		w80: "When's the last time you made a map? You have a feeling you should probably do that.",
		w82: "Whew, that was an exhilarating kill. You decide to reward your Trimps with some Improbability stew. It's pretty tasty.",
		w83: "That stew was probably a bad idea. Anyone else feeling sick?",
		w85: "An ancient and fuzzy memory just crept back into your head. You're not quite sure where it came from, but you know the memory is yours. You remember being on a ship, and seeing this planet from orbit. There was someone with you!",
		w87: "Bits and pieces of memories continue trickling back in as you continue to put distance between yourself and the source of Anger. You can almost see in your mind who you came here with. Where could they be...",
		w90: "You decide to ask your scientists to come up with an extravagant machine that can scan your brain for old memories to see if there's anything helpful up there. They seem excited about a new project and quickly get to work.",
		w92: "You hear a huge explosion from the science lab and realize that the brain scan machine will probably never be finished.",
		w95: "Need some motivation? You can do it! Maybe.",
		w100: "You stop dead in your tracks. You remember who you came here with, and you remember that you are not happy with Captain Druopitee for bringing you here. You know he landed with you. You know the ship is still here. He's here.",
		w105: "You call a meeting with all of your Trimps to explain the situation. After giving an extremely long, epic, and motivational speech but hearing no reaction from the crowd, you remember that your Trimps cannot understand you. Will you ever learn?",
		w106: "How long have you been trapped on this planet? Months? Decades? Travelling through time sure screws up your chronological perception.",
		w109: "Though you have no idea which direction your home planet is, you still believe the ship's GPS could get you home. Maybe Druopitee has the keys. You really want to find him.",
		w115: "You just remembered what a taco was. You could really use a taco right now.",
		w120: "Your stamina is quickly dwindling. Trying to keep up with so many more extra Trimps each zone is beginning to wear you down. You'll need to practice fighting with stronger, smaller groups to succeed.",
		w123: "Woah, you have a lot of Trimps right now. You hadn't really stopped to think about just how many individual Trimps you have directly under your control in a while. Neat!",
		w125: "You smell metal and gears, and suddenly feel like you should run a map.",
		w130: "You decide to sit down and take a breather, when suddenly a Trimp comes waddle-galloping towards you holding a piece of paper. Hurriedly scrawled on the paper is a drawing of a strange weapon and piece of armor, along with numbers that seem to be dimensional coordinates. You would ask where he found it, but you know better by now.",
		w132: "You can't stop thinking about where that Trimp found the coordinates for the Slow dimension. Why can't whatever is helping you just come out and help you?",
		w135: "Ugh, your back is getting sore. It seems like travelling back in time does not reverse the ageing process for the traveller. Bummer.",
		w136: "One of your scientists has informed you that his team was able to successfully create a cure for a non-existent disease. He explains that it's best to be prepared. You sigh heavily.",
		w137: "One of your scientists has informed you that an outbreak of a new disease was detected in the laboratory. You go to check on your scientists, and it's quite obvious that they're faking it for attention. You sigh heavily.",
		w138: "You spot another scientist running full speed towards you. He hurriedly informs you that they discovered a new dimension near Zone 35 that is occupied by gigantic Trimps. You sigh heavily.",
		w139: "Another scientist is coming. You sigh heavily. He says something dumb. You decide to ignore the scientists for a little bit.",
		w140: "It sure is calm and peaceful now. You watch a Falcimp turn a few circles in the sky. You wouldn't mind having wings, but overall you're pretty happy with your species.",
		w143: "There's a scientist jumping around trying to get your attention. There's nothing interesting in the sky so you pretend to be fascinated with a rock. The scientist can see you're busy and waits patiently.",
		w145: "Your Scientists are not making it easy to ignore them. You not-so-calmly ask what they want. One of them explains that they discovered a new dimension with lots of extra helium. You'll probably check it out, but you won't tell them that.",
		w150: "Wow. These structures are getting expensive. There's probably a dimension for that...",
		w153: "You remember a person from your past. From your old life. There's someone you need to get back to. You'll make it back.",
		w156: "You watch in amazement as a Trimp grabs on to one of those weird tree things and swings around by its arms. These things are getting pretty strong.",
		w157: "You watch in less amazement as a Trimp tries to take a bite out of a very large rock. These things are not getting much smarter.",
		w159: "That's quite a sunset. You know once you finally make it out of here, you'll definitely never forget the sights. Unless, of course, you do.",
		w160: "A small horde of Trimps comes running up towards you, making excited sounding noises. One of them walks to the front of the loud congregation and proudly holds up a boot, slightly larger but the same style as your own. It must be Druopitee's, confirmation that you're heading the right direction. You reward the Trimp who found it with some food and a few pats on the head, then send the boot to the lab to look for any further clues. You wonder why he took his boot off.",
		w163: "Your scientists have informed you that half of the boot is now lost in another dimension, thanks to an 'important' test. The results were inconclusive. You ask them to please leave the remaining half in our current dimension, and they look disappointed.",
		w165: "What's this now?! You found a little green piece of metal. Your scientists tell you that it came from a toxic dimension, but that it is also from a dimension rich in helium. They let you know that they can tune your portal to travel to the dimension it originated from, should you want to check it out.",
		w166: "That last Improbability seemed like a nice guy.",
		w168: "Hopefully spaceships don't rust.",
		w170: "You reach the top of an incredibly large mountain. You can see at least 50 zones sprawled out before you. About 30 zones away, you can see a gigantic spire. It looks like architecture from your home world. You hope it's not a mirage...",
		w172: "Something smells purple. That's probably not good.",
		w174: "Strange smells continue to swell around you. Judging by changes in wind direction, the smells are coming from the spire. You still can't describe it other than purple.",
		w175: "Your Trimps seem happy. They're not used to having a purpose, and having one seems to positively affect them! You call a Trimp over and ask him how he's doing, then you remember that he can't talk.",
		w178: "You're still not quite sure what that smell is. You feel slightly more powerful, and you fear that your enemies may feel the same way.",
		get w180 () {
		if (game.global.challengeActive != "Corrupted") return "After clearing out the previous zone, you decide to take a day hike to the top of another gigantic mountain to try to find more info about the smell. As you reach the top, your jaw drops. Clear as day, a healthy amount of purple goo is pouring into the atmosphere from the top of the spire. You can see the zones in front of you beginning to change. This really can't be good.";
		return "After clearing out the previous zone, you decide to take a day hike to the top of another gigantic mountain to try to find more info about the smell. As you reach the top, your jaw drops. Clear as day, a healthy amount of purple goo is pouring into the atmosphere from the top of the spire. This must be what's causing all of this Corruption you've been trudging through. The planet seems pretty heavily Corrupted already, you wonder if you're too late.";
		},
		w182: "Well, there's not really much doubt about it anymore. Some sort of intelligence is intentionally making life more difficult for you and your Trimps. You take this as a sign that you're pretty important, why else would something risk destroying an entire planet to stop you? Your parents would be so proud.",
		get w184 () {
				return "The corruption seems to be more pronounced the closer you get to the Spire. Looks like there's " + mutations.Corruption.cellCount() + " of em now."
			},
		w185: "You have trouble putting into words exactly what the Corruption does to the creatures on this planet. They seem to be stripped of all natural abilities and given powers that you didn't know could exist in the primary dimension.",
		w187: "None of these corrupted enemies seem to have eyes, so you decide to see if you can get away with flipping one off. As it reacts by roaring and stomping around in a rage, you realize that these things are powerful enough not to need eyes to observe the world. What <i>are</i> these?!",
		w190: "You awaken from your sleep in a cold sweat to a frantic and terrified noise from the back of the cave where you were sleeping. With urgency, you run to the source of the noise to make sure your Trimps are okay. As you reach the back, you see a handful of Trimps trying to use a small and very angry Snimp as a musical instrument. You put some sand in your ears and go back to sleep.",
		w193: "The corruption continues to thicken as you near the Spire. You're beginning to grow accustomed to the smell of the Spire, and really don't mind it anymore. It reminds you of blueberries. Evil blueberries.",
		w198: "You're so close to the source of corruption that you can taste it, and it doesn't taste good.",
		get w205 () {
			if (game.global.spireRows < 10)
				return "You look back at The Spire and feel kinda bad that there's still a ton of Corruption coming out of it, but you'll get him some time.";
			return "You don't miss Druopitee too much. You don't remember all that much to miss, but the point stands.";
		},
		get w210 () {
			if (game.global.spireRows < 10)
				return "It smells extra corrupt. That Spire can't be healthy for the environment.";
			return "There's still Corruption, but it feels less threatening. You feel more at peace with the planet and feel like you're on track to repairing it. Surely nothing else terrible will happen any time soon.";
		},
		get w220 () {
			if (game.global.spireRows < 10)
				return "Your Trimps seem content. They kinda wish that spire wasn't still pumping purple stuff into their world, but they don't mind too much.";
			return "Your Trimps seem content. You taught some basic puppetry to them and they've been putting on some great shows with defeated Snimps.";
		},
		w225: "You wake up in a sweat after a good night's sleep in a cool, dark cave. You dreamt that you were overheating, though that's never really been a problem before. Oh well, strange dreams and memories haven't really indicated anything important before, it's probably nothing.",
		w231: "It's pretty hot.",
		w235: "The heat intensifies as you move further and further through the zones. Instinct says to turn away from the heat, but that wouldn't be any fun.",
		get w245 () {
			if (game.jobs.Magmamancer.owned > 0)
				return "Your Magmamancers have figured out how to make little fountains in the Magma around the base. You like the effect.";
			return "You remember Magmamancers as being pretty cool.";
		},
		w251: "You asked that Omnipotrimp nicely not to explode after you killed it, but it exploded anyways. Pretty rude.",
		w255: "Your Trimps continue to lose strength as you press through the zones, but they seem to be adapting well in spirits. It seems like each generation likes the heat more and more.",
		w265: "你决心修复这个星球，尽管你觉得还不可能。 无论哪种方式，你都知道你正在获得力量，你的脆皮会跟随你。",
		w270: "This planet is really freaking big. You feel like you've been walking around it for years and still haven't seen everything there is to offer. Shouldn't there be another spire around here or something?",
		w277: "It's starting to smell purple again. You must be getting close to another spire.",
		get w283() {
			var soldiers = (game.portal.Coordinated.level) ? game.portal.Coordinated.currentSend : game.resources.trimps.maxSoldiers;
			return "During a boring night while waiting to cross a particularly rough Magma river, you managed to teach your Trimps how to stack on each other to create some funny shapes. You almost feel bad for the first Snimp to come across " + prettify(soldiers) + " Trimps stuck together in the shape of a humongous Moongooseimp.";
		},
		get w285(){
			if (game.global.spireRows >= 10)
				return "You can finally see it, clear as day. No more than 15 zones in the distance stands a giant spire, even more menacing than the first. A loud, echoing voice booms from the tower, matching the tone and cadence of Druopitee himself. It's a little far away to hear perfectly, but it sounds like he's asking you nicely to please leave him be.";
			return "Something feels wrong, but you can't quite figure out what. You eventually find a pebble in your shoe and everything seems much better!";
		},
		get w286() {
			if (game.global.spireRows >= 10)
				return "You hear the voice again, and can tell there's definitely something weird about it - as if it was coming from a ghost or something. Though you suppose that makes sense, since you've already killed Druopitee.";
			return "You hear something rustling in a bush and get totally psyched up for something new and exciting. As you walk cautiously towards the bush, a Rabbimp quickly runs out and away."
		},
		get w290() {
			if (game.global.spireRows >= 10)
				return "As you get closer and closer to the spire, the voice gets clearer and clearer. You can pick up notes of terror from whatever being is up there, as if he wants to just be left alone to destroy the world. You don't feel much sympathy though.";
			return "You trip over a rock and stumble a bit, but fix your footing before totally falling over. You glance around and it doesn't seem like any of the Trimps noticed!";
		},
		get w295() {
			if (game.global.spireRows >= 10)
				return "You're now so close to this new spire that you can taste it, literally. These things are gross.";
			return "You wonder if you could get your scientists to invent chewing gum..."
		},
		get w298() {
			if (game.global.spireRows >= 10)
				return "The deranged spirit in the tower is now begging that you stay back. It obviously knows you destroyed the last tower and doesn't want you taking out another. Too bad, buddy. You're coming.";
			return "A voice in the back of your mind tells you there should be something big soon, but you see nothing. Oh well."
		},
		get w303() {
			if (game.global.spireRows >= 15) return "You're glad you have Fluffy around now. He seems to be getting along well with the other Trimps, and seems happy to have found others like him. He doesn't seem to be any smarter than a normal Trimp so you're sure you'll get some entertainment out of him.";
			return "你希望有一只宠物。";
		},
		get w315(){
			if (game.global.lastSpireCleared == 2) return "These healthy spots of land seem to be increasing as the Spire pumps more and more into the air! Hopefully that's a good thing. You ask Fluffy what he thinks and he nods in approval.";
			return "Geeze, this Corruption is starting to look pretty nasty. Those Spires need to fall soon...";
		},
		w340: "Watch your step, there's some Magma on the ground over there.",
		w350: "If Druopitee has really immortalized himself in an infinite amount of Spires, you might be here for a while.",
		get w360(){
			if (game.global.spireRows >= 15) return "You attempt to put Fluffy through your rigorous Scientist training program, but he doesn't want to. He wouldn't have any trouble, but he doesn't want the label. You still couldn't be happier to have the little guy around!";
			return "You really feel like something is missing from your life. Everything feels hollow and sad.";
		},
		w375: "Should be coming up on another Spire zone soon. You stop and sit beside a beautiful Magma river and wonder what kinds of crazy stuff could be waiting for you up there. Then you realize it's probably just another Spire, so you get up and keep moving.",
		w385: "Some familiar Spirish odors begin hitting your nostrils again and you sneeze, hilariously startling a few billion Trimps. Never gets old.",
		get w390(){
			if (game.global.lastSpireCleared == 2) return "You can finally see the next Spire in the distance, a thick purple cloud boiling out of the top. Hard to believe there's an infinite amount of these things, how big even is this planet?";
			return "Weird, you feel like you should be able to see the next Spire by now, but it's not there. Maybe you should have checked the other Spires a bit more thoroughly.";
		},
		get w395(){
			if (game.global.lastSpireCleared == 2) return "Ahh, that gross old taste of Spire. You'll never get used to that. Most of your Trimps are trying to stay under trees, but Fluffy is running around with his tongue out as if he was trying to catch snowflakes.";
			return "Did you leave the oven on? Oh yeah, you don't have an oven. Now you wonder what an oven even is. Oh well.";
		},
		get w405(){
			if (game.global.lastSpireCleared == 3) return "It really seemed like you weakened Druopitee back there. Maybe you'll be able to at least shut off any last conscious parts of him with just one more Spire?";
			return "你无法摆脱这种感觉，就像你忘记了做一些事情一样。";
		},
		get w415(){
			if (game.global.lastSpireCleared == 3) return "The Healthy mutation is starting to spread nicely now. The bad guys hurt quite a bit more, but you're pretty sure you're doing the right thing which kinda makes you feel good.";
			if (game.global.lastSpireCleared == 2) return "It seems like the Healthy mutation has stopped spreading. That's alright though, some other version of you will probably take care of it.";
			if (game.global.spireRows >= 15) return "The land sure looks terrible and corrupted, but at least you have Fluffy.";
			return "What do you have against Fluffy?";
		},
		w430: "The Trimps tried tying two Turkimps to this tall tree, then the Turkimps thrashed those three trillion Trimps, throwing the Trimps tumbling towards the tall tree. The Trimps truly tried. Those Turkimps though... they tough.",
		w440: "Wow, you've gotten pretty far. You would have never guessed there'd be this many zones out there, but here you are.",
		w450: "It's just about time for another Spire, don't you think?",
		w460: "This part of the world seems to be at a much higher elevation than any other part that you've been at. The air is strangely clear, and you can see more of the planet sprawled out around you than ever before. It feels good to see everything you're fighting for and feel like it's worth it.",
		w470: "This part of the world seems to be at a really low elevation, and lots of Corruption is building up in it. Gross.",
		get w485(){
			if (game.global.lastSpireCleared == 3) return "Once again, you can taste the Spire, it must just be over that next hill now. Fluffy seems excited.";
			return "Hey! Is that... oh, nope, just some dirt.";
		},
		get w495(){
			if (game.global.lastSpireCleared == 3) return "It's time. He's weak. You've got this. Time to make this planet Healthy again.";
			return "You're feeling rather itchy today. You ask some Trimps to scratch your back but they don't really want to.";
		},
		get w505(){
			if (game.global.lastSpireCleared == 4) return "Well you've totally 100% eradicated Druopitee's consciousness, now you figure it's just time to clear the rest of his brainless Echoes out of the Spires. There may not be anything new and exciting to see <b>yet</b>, but bragging rights are always nice.";
			return "Druopitee is just over there getting stronger, someone should really do something about him.";
		}
	},
	trimpDeathTexts: ["不再是", "化为尘土", "入土为安", "断气", "翘辫子了", "蒸发", "需要更多的装甲", "爆炸", "融化了", "摔死了", "游冥河", "脖子扭断", "忘了穿装备", "嘶哑的", "死了", "不会跟着你再次战斗", "死了。 瘸", "落后了", "魔脉"],
	badGuyDeathTexts: ["杀了", "被杀死的", "摧毁", "熄灭", "清算", "蒸发", "拆除", "破败", "遇难", "抹杀"],

	settings: {
		speed: 10,
		speedTemp: 0,
		slowdown: false,
	},

	resources: {
		food: {
			owned: 0,
			max: 500
		},
		wood: {
			owned: 0,
			max: 500
		},
		metal: {
			owned: 0,
			max: 500
		},
		trimps: {
			owned: 0,
			max: 10,
			maxMod: 1,
			realMax: function () {
				var num = this.max;
				num *= this.maxMod;
				if (game.portal.Carpentry.level > 0) num = Math.floor(num * (Math.pow(1 + game.portal.Carpentry.modifier, game.portal.Carpentry.level)));
				if (game.portal.Carpentry_II.level > 0) num = Math.floor(num * (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level)));
				return num;
			},
			working: 0,
			speed: 5,
			get employed () {
				var total = 0;
				for (var job in game.jobs) {
					total += game.jobs[job].owned;
				}
				total -= game.jobs.Dragimp.owned;
				return total;
			},
			set employed (value) {
				console.warn('就业现在是一个吸气剂，不需要设定');
				return;
			},
			soldiers: 0,
			maxSoldiers: 1,
			potency: 0.0085
		},
		science: {
			owned: 0,
			max: -1
		},
		gems: {
			owned: 0,
			max: -1
		},
		fragments: {
			owned: 0,
			max: -1
		},
		helium: {
			owned: 0,
			max: -1
		}
	},
	equipment: {
		Shield: {
			locked: 1,
			tooltip: "一个巨大的木制的盾牌。 每级给每个战士增加 $healthCalculated$ 生命。",
			blocktip: "一个巨大的木制的盾牌。 每级给每个战士增加 $blockCalculated$ 防御。",
			modifier: 1,
			level: 0,
			cost: {
				wood: [40, 1.2]
			},
			oc: 40,
			health: 4,
			healthCalculated: 4,
			blockNow: false,
			block: 1.5,
			blockCalculated: 1.5,
			prestige: 1
		},
		Dagger: {
			locked: 1,
			tooltip: "聊胜于无。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [40, 1.2]
			},
			oc: 40,
			attack: 2,
			attackCalculated: 2,
			prestige: 1
		},
		Boots: {
			locked: 1,
			tooltip: "至少能保住他们的脚。每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [55, 1.2]
			},
			oc: 55,
			health: 6,
			healthCalculated: 6,
			prestige: 1
		},
		//2
		Mace: {
			locked: 1,
			tooltip: "对你的脆皮来说有点重，但他们能搞定。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [80, 1.2]
			},
			oc: 80,
			attack: 3,
			attackCalculated: 3,
			prestige: 1
		},
		Helmet: {
			locked: 1,
			tooltip: "给你的脆皮们的头部提供相当程度的保护，每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [100, 1.2]
			},
			oc: 100,
			health: 10,
			healthCalculated: 10,
			prestige: 1
		},
		//3
		Polearm: {
			locked: 1,
			tooltip: "这玩意儿又大又尖！ 每级给每个战士增加 $attackCalculated$ 攻击力。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [140, 1.2]
			},
			oc: 140,
			attack: 4,
			attackCalculated: 4,
			prestige: 1
		},
		Pants: {
			locked: 1,
			tooltip: "给小脆皮们特制的裤衩！每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [160, 1.2]
			},
			oc: 160,
			health: 14,
			healthCalculated: 14,
			prestige: 1
		},
		//4
		Battleaxe: {
			locked: 1,
			tooltip: "这武器看起来十分吓人，但你的脆皮们能够搞定。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [230, 1.2]
			},
			oc: 230,
			attack: 7,
			attackCalculated: 7,
			prestige: 1
		},
		Shoulderguards: {
			locked: 1,
			tooltip: "这些护肩能够保护你的脆皮们的脖子和肩膀，而且它们看起来很酷！每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [275, 1.2]
			},
			oc: 275,
			health: 23,
			healthCalculated: 23,
			prestige: 1
		},
		//5
		Greatsword: {
			locked: 1,
			tooltip: "这些大剑看起来甜美。说真的,如果你能看到它，你也会认为它看起来甜。相信我。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [375, 1.2]
			},
			oc: 375,
			attack: 9,
			attackCalculated: 9,
			prestige: 1
		},
		Breastplate: {
			locked: 1,
			tooltip: "一些真正的重型装甲。每一个穿着重型护甲的人看起来都很痞气。 每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [415, 1.2]
			},
			oc: 415,
			health: 35,
			healthCalculated: 35,
			prestige: 1
		},
		Arbalest: {
			locked: 1,
			tooltip: "A powerful ranged weapon. Your Trimps can do some damage with this sucker. Adds $attackCalculated$ attack to each soldier per level",
			modifier: 1,
			level: 0,
			cost: {
				metal: [450, 1.2]
			},
			oc: 450,
			attack: 15,
			attackCalculated: 15,
			prestige: 1
		},
		Gambeson: {
			locked: 1,
			tooltip: "在胸甲下穿着一件舒适厚实的棉服夹克。 你的脆皮认为他们太棒了！ 为每个级别的每名士兵增加$healthCalculated$生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [500, 1.2]
			},
			oc: 500,
			health: 60,
			healthCalculated: 60,
			prestige: 1
		}
	},

	badGuys: {
		Liquimp: {
			location: "None",
			locked: 1,
			attack: 3,
			health: 200,
			fast: true,
			loot: function () {
				rewardLiquidZone();
			}
		},
		Presimpt: {
			location: "World",
			locked: 1,
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Politically Correct Holidays, everyone!
				givePresimptLoot();
			}
		},
		Turkimp: {
			location: "World",
			locked: 1,
			attack: 1,
			health: 1.6,
			fast: false,
			loot: function () {
				//Happy Thanksgiving and stuff.
				//Also, happy post thanksgiving and stuff.
				//Also, happy normal days now I guess
				activateTurkimpPowers();
			}
		},
		Pumpkimp: {
			location: "None",
			attack: 0.9,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Halloween and stuff.
				givePumpkimpLoot();
			}
		},
		Squimp: {
			location: "All",
			attack: 0.8,
			health: 0.7,
			fast: true
		},
		Elephimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Turtlimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Chimp: {
			location: "All",
			attack: 1,
			health: 1,
			fast: false
		},
		Penguimp: {
			location: "All",
			attack: 1.1,
			health: 0.7,
			fast: false
		},
		Snimp: {
			location: "All",
			attack: 1.05,
			health: 0.8,
			fast: true
		},
		Gorillimp: {
			location: "All",
			attack: 0.9,
			health: 1.1,
			fast: true
		},
		Shrimp: {
			location: "Sea",
			attack: 0.8,
			health: 0.9,
			fast: true
		},
		Mountimp: {
			location: "Mountain",
			attack: 0.5,
			health: 2,
			fast: false
		},
		Frimp: {
			location: "Forest",
			attack: 0.75,
			health: 1.2,
			fast: true
		},
		Chickimp: {
			location: "Sea",
			attack: 0.8,
			health: 1.1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("那个小鸡怪掉落了 " + prettify(amt) + " 食物!", "Loot", "apple", null, 'primary');
			}
		},
		Hippopotamimp: {
		   location: "Sea",
		   attack: 1.4,
		   health: 1.1,
		   fast: false
		},
		Onoudidimp: {
			location: "Mountain",
			attack: 0.8,
			health: 1.4,
			fast: false
		},
		//Honorary Imps
		Kittimp: {
			//Designed by K1d_5h31d0n
			location: "Forest",
			location2: "Mountain",
			attack: 1,
			health: 0.85,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("You hear nearby Kittimps running away in fear and decide to check out their former home. There, you find a prey pile with " + prettify(amt) + " food!", "Loot", "apple", null, 'primary');
			}
		},
		Grimp: {
			//Designed by Grabarz
			location: "Forest",
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("那个Grimp掉落了" + prettify(amt) + " 木头!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Golimp: {
			//Designed by Syc_Golem
			location: "Depths",
			attack: 1.2,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var random = Math.floor(Math.random() * 5);
				var amt;
				var res;
				var icon;
				var tag;
				if (random === 0) {
					amt = rewardResource("fragments", 1, level, true);
					res = "fragments";
					icon = "th";
					tag = "secondary";
				}
				else {
					amt = rewardResource("metal", 0.3, level, true);
					res = "bars of metal";
					icon = "*cubes";
					tag = "primary";
				}
				message("The Golimp fell to pieces! You manage to grab " + prettify(amt) + " " + res + " before it begins pulling itself together.", "Loot", icon, null, tag);
			}
		},
		Seirimp: {
			//Designed by Seiyria
			location: "Mountain",
			attack: 1.15,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.5, level, true);
				message("那Seirimp掉落了 " + prettify(amt) + " 金属! Neat-O.", "Loot", "*cubes", null, 'primary');
			}
		},
		Slagimp: {
			location: "Depths",
			attack: 0.9,
			health: 1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("gems", 0.3, level, true);
				message("那个Slagimp倒下了， " + prettify(amt) + "宝石弹出来！ 怎么样？", "Loot", "*diamond", null, 'secondary');
			}
		},
		Moltimp: {
			location: "Depths",
			attack: 1.2,
			health: 0.7,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.2, level, true);
				message("Moltimp为了感谢你的战斗，给了你 " + prettify(amt) + " 金属条! 然后就死了。", "Loot", "*cubes", null, 'primary');
			}
		},
		Lavimp: {
			location: "Depths",
			attack: 1,
			health: 0.8,
			fast: true
		},
		Flowimp: {
			location: "Plentiful",
			attack: 1.3,
			health: 0.95,
			fast: false
		},
		Kangarimp: {
			location: "Plentiful",
			attack: 0.95,
			health: 0.95,
			fast: true
		},
		Gnomimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1,
			fast: false
		},
		Slosnimp: {
			location: "Plentiful",
			attack: 1.05,
			health: 0.8,
			fast: false
		},
		Entimp: {
			location: "Plentiful",
			attack: 0.6,
			health: 1.3,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 0.35, level, true);
				message("Entimp已经不复存在了。你从他的行李箱得到了 " + prettify(amt) + " 木材原木!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Squirrimp: {
			location: "Plentiful",
			attack: 1,
			health: 1.1,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 0.35, level, true);
				message("该吃点炖菜了! 你得到了 " + prettify(amt) + " 来自那个地方的食物。!", "Loot", "apple", null, 'primary');
			}
		},
		Gravelimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.35, level, true);
				message("你在坟墓里摸索着，设法找到了 " + prettify(amt) + " 金属条! 祝贺你!", "Loot", "*cubes", null, 'primary');
			}
		},
		Blimp: {
			location: "World",
			last: true,
			world: 5,
			attack: 1.2,
			health: 2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 2, level);
				rewardResource("wood", 2, level);
				rewardResource("metal", 2, level);
				message("那个守卫掉落了 " + prettify(amt) + " 食品、木头和金属!这些应该是有用的。", "Loot", "piggy-bank", null, 'primary');
				if (game.global.runningChallengeSquared) return;
				if (game.global.world >= 21 && (game.global.totalPortals >= 1 || game.global.portalActive)){
					if (game.resources.helium.owned == 0) fadeIn("helium", 10);
					amt = rewardResource("helium", 1, level);
					message("那个守卫掉落了氦罐！你从中提取了 " + prettify(amt) + " 氦气！", "Loot", "oil", "helium", "helium");
					if (game.global.world >= 40 && game.global.challengeActive == "Balance") {
						if (game.challenges.Balance.highestStacks <= 100) giveSingleAchieve("Underbalanced");
						var reward = game.challenges.Balance.heldHelium;
						message("你已经完成了平衡挑战! 你获得了 " + prettify(reward) + " 氦, 你可以重复这个挑战。", "Notices");
						game.challenges.Balance.abandon();
						game.global.challengeActive = "";
						addHelium(reward);
					}
				}
			}
		},
		Cthulimp: {
			location: "Void",
			last: true,
			world: 6,
			attack: 2,
			health: 5,
			fast: true,
			loot: function (level, fromFluffy) {
				if (game.resources.helium.owned == 0) fadeIn("helium", 10);
				var amt = (game.global.world >= 60) ? 10 : 2;
				if (mutations.Magma.active()) amt *= 3;
				var percentage = 1;
				var rewardPercent = 1;
				if (game.global.world >= mutations.Corruption.start(true)){
					rewardPercent = 2;
					percentage = (game.global.challengeActive == "Corrupted") ? 0.075 : 0.15;
					var corrCount = mutations.Corruption.cellCount();
					if (mutations.Healthy.active()) corrCount -= mutations.Healthy.cellCount();
					percentage *= corrCount;
					if (mutations.Healthy.active()){
						amt *= ((mutations.Healthy.cellCount() * 0.45) + percentage + 1);
					}
					else {
						amt *= (percentage + 1);
					}
				}
				if (game.talents.voidSpecial.purchased){
					amt *= ((game.global.lastPortal * 0.0025) + 1);
				}
				if (fromFluffy) amt *= 1.5;
				
				if (game.global.runningChallengeSquared)
					amt = 0;
				else
					amt = rewardResource("helium", amt, level, false, rewardPercent);
				game.stats.highestVoidMap.evaluate();
				var msg = "Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to ";				
				if (fromFluffy){
					msg = "Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot.";
					if (!game.global.runningChallengeSquared) msg += " You gained another " + prettify(amt) + " Helium!";
					message(msg, "Loot", "oil", "helium", "helium");
					return;
				}
				if (game.options.menu.repeatVoids.enabled && game.global.totalVoidMaps > 1){
					msg += "下一个虚空地图";
				}
				else {
					msg += ((game.options.menu.exitTo.enabled) ? "the world " : "your map chamber");
				}
				if (game.global.runningChallengeSquared) msg += ".";
				else msg += " with an extra " + prettify(amt) + " Helium!";
				message(msg, "Loot", "oil", "helium", "helium");
				
			}
		},
		Shadimp: {
			location: "Void",
			world: 6,
			attack: 1.2,
			health: 1.3,
			fast: true
		},
		Voidsnimp: {
			location: "Void",
			world: 6,
			attack: 2.1,
			health: 0.5,
			fast: true
		},
		Megablimp: {
			location: "Hell",
			last: true,
			world: 20,
			attack: 1.1,
			health: 4,
			fast: false,
			loot: function (level) {
				checkAchieve("angerTimed")
			}
		},
		Dragimp: {
			location: "World",
			world: 17,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 0.35, level, false);
				message("那条龙掉落了 " + prettify(amt) + " 宝石!", "Loot", "*diamond", null, 'secondary');
			}
		},
		Mitschimp: {
			location: "Block",
			last: true,
			world: 10,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				checkAchieve("blockTimed");
				var amt = rewardResource("wood", 2, level, true);
				message("那只鼹鼠掉落了 " + prettify(amt) + " 木头!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Brickimp: {
			location: "Wall",
			last: true,
			world: 15,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				checkAchieve("wallTimed")
			}
		},
		Indianimp: {
			location: "Doom",
			last: true,
			world: 33,
			attack: 1.07,
			health: 0.9,
			fast: true,
			loot: function (level) {
				checkAchieve("doomTimed");
				var amt = rewardResource("metal", 2, level, true);
				message("Indianimp 掉落了 " + prettify(amt) + " 金属!", "Loot", "*cubes", null, 'primary');
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Trapper"){
					game.global.challengeActive = "";
					game.challenges.Trapper.abandon();
					game.portal.Anticipation.locked = false;
					message("你完成了 '捕手' 挑战! 你的脆皮现在还记得如何繁殖，而且你已经解锁了一个新的能力!", "Notices");
				}
				if (game.global.challengeActive == "Meditate"){
					game.global.challengeActive = "";
					game.portal.Meditation.locked = false;
					message("你完成了 '冥想' 挑战! 这个维度已经恢复正常了，你已经解锁了一个新福利！", "Notices");
				}
			}
		},
		Warden: {
			location: "Prison",
			last: true,
			world: 80,
			attack: 2,
			health: 3,
			fast: false,
			loot: function (level) {
				checkAchieve("prisonTimed");
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") {
					var reward = Math.floor(game.challenges.Electricity.heldHelium * 2);
					if (game.global.challengeActive == "Electricity") message("你已经完成了电力挑战! 你获得了 " + prettify(reward) + " 氦, 你可以重复这个挑战。", "Notices");
					else if (game.global.challengeActive == "Mapocalypse") {
						message("你已经完成了Mapocalypse挑战! 你解锁了 '虹吸学' 能力,并且获得了 " + prettify(reward) + " 氦。", "Notices");
						if (game.portal.Siphonology.locked) addNewSetting('siphonologyMapLevel');
						game.portal.Siphonology.locked = false;
						game.challenges.Mapocalypse.abandon();
					}
					game.challenges.Electricity.heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(reward);
					game.challenges.Electricity.stacks = 0;
					updateElectricityStacks();
				}
			}
		},
		//Putting Bionic Wonderland stuff right.... here cause why not
		Robotrimp: {
			location: "Bionic",
			last: true,
			world: 125,
			attack: 2.1,
			health: 2.9,
			fast: false,
			loot: function (level) {
				var mapLevel = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)].level;
				if (mapLevel >= game.global.world + 45) giveSingleAchieve("Bionic Sniper");
				checkAchieve("bionicTimed");
				var amt1 = rewardResource("wood", 1, level, true);
				var amt2 = rewardResource("food", 1, level, true);
				message("Robotrimp discombobulated. Loot inspection reveals: " + prettify(amt1) + " wood and " + prettify(amt2) + " food. Splendiferous.", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Crushed") {
					var heliumAdded = (game.challenges.Crushed.heldHelium * 4);
					message("You have completed the Crushed challenge! You have been rewarded with " + prettify(heliumAdded) + " Helium.", "Notices");
					game.challenges.Crushed.heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(heliumAdded);
					if (game.challenges.Crushed.critsTaken == 0) giveSingleAchieve("Thick Skinned");
					game.challenges.Crushed.abandon();
				}
			}
		},
		Mechimp: {
			location: "Bionic",
			world: 125,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Mechimp disengaged. Reward encountered: " + prettify(amt) + " bars of metal. Huzzah.", "Loot", "*cubes", null, 'primary');
			}
		},
		Destructimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 0.8,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Destructimp shorted out. Salvage results: " + prettify(amt) + " bars of metal. Acceptable.", "Loot", "*cubes", null, 'primary');
			}
		},
		Terminatimp: {
			location: "Bionic",
			world: 125,
			attack: 1.2,
			health: 1.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Terminatimp Terminated. Findings: " + prettify(amt) + " bars of metal. Hasta la Vista.", "Loot", "*cubes", null, 'primary');
			}
		},
		Autoimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 1.3,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("Autoimp force quit. Memory dump provides " + prettify(amt) + " bars of metal and no clues. It's a feature!", "Loot", "*cubes", null, 'primary');
			}
		},
		Artimp: {
			location: "Bionic",
			world: 125,
			attack: 1.3,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.3, level, true);
				message("The Artimp wordlessly sputters, whirrs, beeps, then drops " + prettify(amt) + " perfect cubes of metal on the ground. Cubist art is your favorite!", "Loot", "*cubes", null, 'primary');
			}
		},
		//End Bionic Wonderland stuff
		//Start Imploding Star stuff
		Neutrimp: {
			location: "Star",
			last: true,
			world: 170,
			attack: 1.3,
			health: 2.5,
			fast: true,
			loot: function (level) {
				checkAchieve("starTimed");
				var amt1 = rewardResource("wood", 1.5, level, true);
				var amt2 = rewardResource("metal", 1.5, level, true);
				message("The Neutrimp gasps, shimmers, squeaks, then poofs into a quickly dispersing purple cloud. You spend a few moments trying to make sense of what you've just seen, but look around and find " + prettify(amt1) + " wood and " + prettify(amt2) + " metal instead!", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Devastation") {
					message("You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!", "Notices");
					game.global.challengeActive = "";
					game.portal.Overkill.locked = false;
					addNewSetting('overkillColor');
				}
			}
		},
		Fusimp: {
			location: "Star",
			world: 170,
			attack: 1.4,
			health: 1.8,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("The Fusimp explodes, leaving behind " + prettify(amt) + " bars of metal and a nice dose of radiation.", "Loot", "*cubes", null, 'primary');
			}
		},
		Hydrogimp: {
			location: "Star",
			world: 170,
			attack: 1.8,
			health: 2.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 1, level, true);
				message("Before you can blink, the Hydrogimp vaporizes. That's fine though, it left " + prettify(amt) + " food for you!", "Loot", "apple", null, 'primary');
			}
		},
		Carbimp: {
			location: "Star",
			world: 170,
			attack: 1,
			health: 4,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 1, level, true);
				message("The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is " + prettify(amt) + " wood.", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		//End Imploding Star stuff
		Improbability: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				if (game.global.spireActive) return;
				if (!game.global.brokenPlanet) planetBreaker();
				if (game.global.runningChallengeSquared) return;
				var amt = (game.global.world >= mutations.Corruption.start(true)) ? 10 : 5;
				amt = rewardResource("helium", amt, level);
				message("You managed to steal " + prettify(amt) + " Helium canisters from that Improbability. That'll teach it.", "Loot", "oil", 'helium', 'helium');
				if (game.global.challengeActive == "Slow" && game.global.world == 120){
					message("You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!", "Notices");
					game.global.challengeActive = "";
					if (!game.global.slowDone){
						unlockEquipment("Arbalest");
						unlockEquipment("Gambeson");
					}
					game.global.slowDone = true;
				}
				else if ((game.global.challengeActive == "Life" && game.global.world == 110) || (game.global.challengeActive == "Nom" && game.global.world == 145) || (game.global.challengeActive == "Toxicity" && game.global.world == 165) || ((game.global.challengeActive == "Watch" || game.global.challengeActive == "Lead") && game.global.world >= 180) || (game.global.challengeActive == "Corrupted" && game.global.world >= 190)){
					var challenge = game.global.challengeActive;
					if (game.global.challengeActive == "Watch" && !game.challenges.Watch.enteredMap && game.buildings.Nursery.purchased == 0) giveSingleAchieve("Grindless");
					if (game.global.challengeActive == "Lead" && game.upgrades.Gigastation.done <= 1) giveSingleAchieve("Unsatisfied Customer");
					if (game.global.challengeActive == "Corrupted" && !game.challenges.Corrupted.hiredGenes && game.jobs.Geneticist.owned == 0) giveSingleAchieve("Organic Trimps");
					if (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.highestStacks <= 400) giveSingleAchieve("Trimp is Poison");
					if (game.global.challengeActive == "Life"){
						if (game.challenges.Life.lowestStacks == 150) giveSingleAchieve("Very Sneaky");
						game.challenges.Life.abandon();
					}
					var reward = (game.challenges[challenge].heliumMultiplier) ? game.challenges[challenge].heliumMultiplier : 2;
					reward = game.challenges[challenge].heldHelium * reward;
					message("You have completed the " + challenge + " challenge! You have been rewarded with " + prettify(reward) + " Helium, and you may repeat the challenge.", "Notices");
					game.challenges[challenge].heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(reward);
				}
				else if (game.global.challengeActive == "Mapology" && game.global.world == 100){
					message("You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!", "Notices");
					game.global.challengeActive = "";
					game.portal.Resourceful.locked = false;
					game.challenges.Mapology.abandon();
				}
			}
		},
		Omnipotrimp: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				if (game.global.spireActive){
					return;
				}
				if (!game.global.runningChallengeSquared){
					amt = rewardResource("helium", 30, level);
					message("You managed to steal " + prettify(amt) + " Helium canisters from that Omnipotrimp. That'll teach it.", "Loot", "oil", 'helium', 'helium');
				}
				if (game.global.world % 5 == 0){
					message("The Omnipotrimp explodes, killing all of your soldiers!", "Combat", null, null, 'trimp');
					game.stats.trimpsKilled.value += game.resources.trimps.soldiers;
					game.global.soldierHealth = 0;
					game.global.fighting = false;
					game.resources.trimps.soldiers = 0;
					updateGoodBar();
				}
			}
		},
		Mutimp: {
			location: "World",
			locked: 1,
			attack: 3,
			health: 6,
			fast: true,
			loot: function (level) {
				amt = rewardResource("metal", 5, level);
				message("Radioactive waste spills to the ground as the Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being " + prettify(amt) + " bars of metal!", "Loot", "*cubes", null, 'primary');
			}
		},
		Hulking_Mutimp: {
			location: "World",
			locked: 1,
			attack: 5,
			health: 12,
			fast: true,
			loot: function (level) {
				amt = rewardResource("metal", 8, level);
				message("Radioactive waste spills to the ground as the Hulking Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being " + prettify(amt) + " bars of metal!", "Loot", "*cubes", null, 'primary');
			}
		},
		//Exotics
		Goblimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			dropDesc: "掉落 6x 宝石",
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 3, level, true);
				message("那个Goblimp掉落了 " + prettify(amt) + " 宝石! 多好的兄弟!", "Loot", "*diamond", "exotic", 'exotic');
				game.unlocks.impCount.Goblimp++;
			}
		},
		Feyimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			dropDesc: "掉落 15x 宝石",
			fast: false,
			loot: function (level) {
				if (game.resources.gems.owned == 0) 	fadeIn("gems", 10);
				var amt = rewardResource("gems", 7.5, level);
				message("那个Feyimp给了你 " + prettify(amt) + " 宝石! 谢谢，Feyimp!", "Loot", "*diamond", "exotic", "exotic");
				game.unlocks.impCount.Feyimp++;
			}
		},
		Flutimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "掉落碎片",
			loot: function (level) {
				var amt = rewardResource("fragments", 1, level, true);
				message("你偷了 " + prettify(amt) + " 碎片从那个小恶魔那里 !虽然看起来她并不需要他们，但也不要觉得不好。", "Loot", "th", "exotic", "exotic");
				game.unlocks.impCount.Flutimp++;
			}
		},
		Tauntimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "现有的脆皮最大值增加0.3%",
			loot: function () {
				var amt = Math.ceil(game.resources.trimps.max * 0.003);
				game.resources.trimps.max += amt;
				game.unlocks.impCount.Tauntimp++;
				game.unlocks.impCount.TauntimpAdded += amt;
				if (game.portal.Carpentry.level) amt *= Math.pow((1 + game.portal.Carpentry.modifier), game.portal.Carpentry.level);
				if (game.portal.Carpentry_II.level > 0) amt *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
				if (game.global.challengeActive != "Trapper"){
					game.resources.trimps.owned += amt;
					message("这是一个不错的，温暖并且宽敞的死亡Tauntimp。你发现了 " + prettify(amt) + " 脆皮在里面, 他们都似乎满足于留在那里！", "Loot", "gift", "exotic", "exotic");
				}
				else {
					message("这是一个不错的，温暖并且宽敞的死亡Tauntimp。 它大得足够容纳 " + prettify(amt) + " 脆皮在里面生活!", "Loot", "gift", "exotic", "exotic");
				}
			}
		},
		Whipimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "脆皮资源生产速度增加0.3%",
			loot: function () {
				game.unlocks.impCount.Whipimp++;
				game.jobs.Farmer.modifier *= 1.003;
				game.jobs.Lumberjack.modifier *= 1.003;
				game.jobs.Miner.modifier *= 1.003;
				game.jobs.Scientist.modifier *= 1.003;
				game.jobs.Dragimp.modifier *= 1.003;
				game.jobs.Explorer.modifier *= 1.003;
				var amt = Math.pow(1.003, game.unlocks.impCount.Whipimp);
				amt = (amt - 1) * 100;
				var s = (game.unlocks.impCount.Whipimp == 1) ? "" : "";
				message("看见惠皮普" + s + " 坠落，会让你的所有脆皮工作效率提升 " + amt.toFixed(2) + "% !", "Loot", "star", "exotic", "exotic");
			}
		},
		Venimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "脆皮繁殖速度增加0.3%",
			loot: function () {
				game.unlocks.impCount.Venimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Venimp);
				amt = (amt - 1) * 100;
				message("The ground up Venimp now increases your Trimps' breed speed by " + amt.toFixed(2) + "%!", "Loot", "glass", "exotic", "exotic");
			}
		},
		Jestimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "45秒生产1个随机资源",
			loot: function () {
				var eligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) eligible.push("gems");
				var roll = Math.floor(Math.random() * eligible.length);
				var item = eligible[roll];
				var amt = simpleSeconds(item, 45);
				amt = scaleToCurrentMap(amt);
				addResCheckMax(item, amt);
				message("那个Jestimp给了你 " + prettify(amt) + " " + cnresourcetype(item) + "!", "Loot", "*dice", "exotic", "exotic");
				game.unlocks.impCount.Jestimp++;
			}
		},
		Titimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "+100% 攻击在本地图中",
			loot: function () {
				var timeRemaining = parseInt(game.global.titimpLeft);
				if (timeRemaining > 0) {
					timeRemaining += 30;
					if (timeRemaining > 45) timeRemaining = 45;
				}
				else timeRemaining = 30;
				game.global.titimpLeft = timeRemaining;
				message("那个Titimp使你的脆皮非常强壮!", "Loot", "*hammer", "exotic", "exotic");
			}
		},
		Chronoimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "所有基本资源5秒的产量",
			loot: function () {
				var eligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) eligible.push("gems");
				var cMessage = "那个Chronoimp掉落了 ";
				for (var x = 0; x < eligible.length; x++){
					var item = eligible[x];
					var amt = simpleSeconds(item, 5);
					amt = scaleToCurrentMap(amt);
					addResCheckMax(item, amt, null, null, true);
					cMessage += prettify(amt) + " " + cnitem(item);
					if (x == (eligible.length - 1)) cMessage += "!";
					else if (x == (eligible.length - 2)) cMessage += ", 和 ";
					else cMessage += ", ";
				}
				message(cMessage, "Loot", "hourglass", "exotic", "exotic");
				game.unlocks.impCount.Chronoimp++;
			}
		},
		Magnimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "0.3%额外的战利品从地图和区域（除了氦）",
			loot: function () {
				game.unlocks.impCount.Magnimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Magnimp);
				amt = (amt - 1) * 100;
				message("你杀死了一个Magnimp! The strong magnetic forces now increase your loot by " + amt.toFixed(2) + "%!", "Loot", "magnet", "exotic", "exotic");
			}
		},
		Skeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.77,
			health: 2,
			fast: false,
			loot: function () {
				message("你的Trimps设法从Skeletimp中取出一块保存完好的骨头！", "Loot", "italic", null, "bone");
				game.global.b++;
				game.global.lastSkeletimp = new Date().getTime();
				updateSkeleBtn();
			}
		},
		Megaskeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.99,
			health: 2.5,
			fast: false,
			loot: function () {
				message("That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!", "Loot", "italic", null, "bone");
				game.global.b += 2;
				game.global.lastSkeletimp  = new Date().getTime();
				updateSkeleBtn();
			}
		}

	},

	mapConfig: {
		names: {
			prefix: ["静悄悄的", "沙地的", "小的", "大的", "腐臭的", "疲倦的", "搞笑的", "哭泣的", "多风的", "可怕的", "肮脏的", "恶劣的",
			"红的", "黑的", "歌唱", "炽烈的", "岩石", "闹鬼的", "被遗忘的", "悲惨的", "被诅咒的", "污染的", "神佑的", "神圣的",
			"被遗弃的", "自然的", "被施魔法的", "有魔力的", "平静的", "崎岖的", "暴力的", "不可思议的", "秘密的", "被禁止的", "被施巫术的", 
			"黑暗的", "光明的", "宏伟的", "邪恶的", "圣洁的", "圣光的", "亵渎的", "寂静的", "不朽的", "地下的", "温和的", "寒冷的", 
			"泥泞的", "潮湿的", "多雾的", "湿润的", "干燥的", "腐败的", "污秽的", "危险的", "被损毁的", "枯萎的", "清澈的", "冻结的", "简单的", "永恒的"],
			suffix: ["Creek.Sea", "Coast.Sea", "Swamp.Sea", "Forest.Forest", "Mountain.Mountain", "Beach.Sea", "Hill.Mountain", "Butte.Mountain",
			"Ridge.Mountain", "Mesa.Mountain", "Valley.Depths", "Peak.Mountain", "Canyon.Depths", "Plateau.Mountain", "Crag.Depths",
			"Crater.Depths", "Oaks.Forest",  "Volcano.Mountain", "Glacier.Sea",  "Brook.Sea", "Cave.Depths",  "Sea.Sea", "Ocean.Sea",
			"Lake.Sea", "Jungle.Forest", "Island.Sea", "Ruins.Depths", "Temple.Depths", "Bog.Sea", "Grove.Forest", "Jungle.Forest",
			"Thicket.Forest", "Woods.Forest", "Oasis.Forest", "Mineshaft.Depths", "Tunnel.Depths", "Depths.Depths", "Cavern.Depths",
			"Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful",
			"Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful"]
		},
		locations: {
		//Add new resources to function getMapIcon in updates.js to get icons on maps
			Sea: {
				resourceType: "Food"
			},
			Mountain: {
				resourceType: "Metal"
			},
			Forest: {
				resourceType: "Wood"
			},
			Depths: {
				resourceType: "Gems"
			},
			Plentiful: {
				resourceType: "Any"
			},
			Hell: {
				resourceType: "Metal",
				upgrade: "Portal"
			},
			Block: {
				resourceType: "Wood",
				upgrade: "Shieldblock"
			},
			Wall: {
				resourceType: "Food",
				upgrade: "Bounty"
			},
			Doom: {
				resourceType: "Metal",
				upgrade: [ "AncientTreasure", "Relentlessness"]
			},
			Prison: {
				resourceType: "Food",
				upgrade: "Keys"
			},
			Bionic: {
				resourceType: "Any",
				upgrade: ["roboTrimp", "Geneticistassist"]
			},
			Void: {
				resourceType: "Any",
				upgrade: ["AutoStorage", "Heirloom", "ImprovedAutoStorage", "MapAtZone"]
			},
			Star: {
				resourceType: "Metal"
			},
			All: {
				resourceType: "Metal"
			}
		},
		sizeBase: 50,
		sizeRange: 25,
		difficultyBase: 1.2,
		difficultyRange: 0.45,
		lootBase: 1.3,
		lootRange: 0.3
	},

	mapUnlocks: {
		roboTrimp: {
			world: 125,
			level: "last",
			icon: "*chain",
			title: "RoboTrimp",
			canRunWhenever: true,
			filterUpgrade: true,
			specialFilter: function (world) {
				var tier = Math.floor((world - 125) / 15);
				return ((game.global.bionicOwned == tier + 1) || (game.global.roboTrimpLevel == tier));
			},
			getShriekValue: function () {
				var level = game.global.roboTrimpLevel;
				if (level == 0) return 1;
				if (level == 1) return 0.85;
				return (0.85 * Math.pow(0.90, level - 1));
			},
			createMap: function(tier) {
				game.global.bionicOwned++;
				if (game.global.bionicOwned == 1)
					message("你发现了一个通往仿生仙境的地图。听起来很有趣!", "Story");
				else
					message("你找到了一个更高级版本的仿生仙境的地图!看起来很吓人……你的科学家提醒你，你一次只能携带3个非常重的金属地图。", "Story");
				var roman = romanNumeral(tier + 1);
				createMap(((tier * 15) + 125), "仿生仙境 " + roman, "Bionic", 3, 100, 2.6, true);
				purgeBionics();
			},
			fire: function (fromTalent) {
				var level = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)].level;
				var bionicTier = parseInt(((level - 125) / 15)) + 1;
				if (bionicTier == game.global.bionicOwned) {
					this.createMap(bionicTier);
				}
				if (fromTalent === true) return;
				if (bionicTier - 1 == game.global.roboTrimpLevel) {
					if (game.global.roboTrimpLevel == 0){
						cancelTooltip();
						var text = "There seems to be a small RoboTrimp that you appear to have orphaned. You decide to take him with you, since you're pretty good at training stuff. He deals <b>20%</b> extra damage for you, and has a special ability. You can learn more about the special ability by hovering over the new <span class='icomoon icon-chain'></span> icon by your soldiers.<br/><br/>You also found a map to a more powerful version of the 仿生仙境. You would bet there's another RoboTrimp who needs 'rescuing' in there.";
						if (game.options.menu.tooltips.enabled == 0) text += '<br/><br/><b>Just a heads up</b>: You have tooltips disabled, so you will need to hold shift when you mouse over the <span class="icomoon icon-chain"></span> to read about it.';
						tooltip('confirm', null, 'update', text, null, 'RoboTrimp');
						game.global.roboTrimpLevel = 1;
						document.getElementById("chainHolder").style.visibility = 'visible';
					}
					else {
						game.global.roboTrimpLevel++;
						var values = game.global.roboTrimpLevel;
						values = [(values) * 20, ((1 - this.getShriekValue()) * 100).toFixed(1)];
						message("<span class='icomoon icon-chain'></span> Hey look, another baby RoboTrimp! You decide to add him to your collection. You now deal " + Math.floor(values[0]) + "% extra damage thanks to your pets, and MagnetoShriek now removes " + Math.floor(values[1]) + "% of an Improbability's attack", "Notices");
					}
				}
			}
		},
		Geneticistassist: {
			world: 170,
			level: 79,
			icon: "*clipboard",
			title: "Geneticistassist",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function (){
				return (!game.global.Geneticistassist);
			},
			fire: function () {
				tooltip('The Geneticistassist', null, 'update');
				game.global.Geneticistassist = true;
				unlockJob("Geneticist");
				addNewSetting("GeneticistassistTarget");
				addNewSetting("geneSend");
			}
		},
		AutoStorage: {
			world: 75,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.autoStorageAvailable;
			},
			fire: function(){
				var text = "From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most, and without a second thought you reply that you wish your Trimps were smart enough to manage storage structures on their own. The presence lets you know that it is done, then dissipates. You instantly regret not asking to go home.";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence');
				game.global.autoStorageAvailable = true;
				document.getElementById("autoStorageBtn").style.display = "block";
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary", null, null, true);
			}
		},
		ImprovedAutoStorage: {
			world: 150,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence Part II",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.improvedAutoStorage;
			},
			fire: function(){
				var text = "<p>From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... hasn't this happened before? Last time you asked for your Trimps to be smart enough to manage storage structures on their own. You can make it better this time! You excitedly ask for your Trimps to waste less resources when managing resources on their own. The presence lets you know that it is done, then dissipates. You get serious déjà-vu while regretting not asking to go home.</p><p style='font-weight: bold'>From now on, storage facilities will be constructed instantly. If you collect more resources from one source than you can hold, the extra resources will be used to build new storage facilities without wasting any resources. You may not be home, but your Trimps are now quite talented!</p>";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence Part II', null, null, true);
				enableImprovedAutoStorage();
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		MapAtZone: {
			world: 225,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence Part III",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.canMapAtZone;
			},
			fire: function(){
				var text = "<p>From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... how many times has this happened now? You're fairly positive that there was something you regretted not asking last time, but you can't quite remember. You've asked for Trimps to be able to manage storage structures, and you've asked for them to be better at managing those structures. Even though you're content with your storage solutions, you suddenly realize the perfect request! You wish the Trimps would stop pushing so far through the zones while you're sleeping, so you ask for a way to tell the Trimps to stop fighting at a Zone of your choosing. The presence lets you know that it is done, then dissipates. As usual, you get serious déjà-vu while regretting not asking to go home.</p><p style='font-weight: bold'>From now on, you have access to the Map At Zone setting. This setting can be accessed through the Map Sidebar, Settings, or the 'Configure Maps' popup!</p>";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence Part III', null, null, true);
				game.global.canMapAtZone = true;
				addNewSetting("mapAtZone");
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		AncientTreasure: {
			world: 33,
			level: "last",
			icon: "piggy-bank",
			title: "Ancient Treasure",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.portal.Relentlessness.locked;
			},
			fire: function(){
				addResCheckMax("food", game.resources.food.owned);
				addResCheckMax("wood", game.resources.wood.owned);
				addResCheckMax("metal", game.resources.metal.owned);
				message("After barely escaping a fierce boulder, you check out the relic you found in there. It glows extremely bright for a few seconds before disappearing, and you look at your storages to see that your Food, Wood, and Metal have been doubled!", "Story", "piggy-bank", "highlightStoryMessage");
			}

		},
		Heirloom: {
			world: 6,
			level: "last",
			icon: "*archive",
			title: "Heirloom",
			filterUpgrade: true,
			canRunWhenever: true,
			fire: function () {
				createHeirloom();
				if (game.global.world >= 60 && game.global.voidDeaths == 0 && game.global.voidBuff == "bleed") giveSingleAchieve("Survivor");
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		Keys: {
			world: 80,
			level: "last",
			icon: "*key4",
			title: "The Warden's Keys",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return (game.global.prisonClear == 0);
			},
			fire: function () {
				message("You have slain the Warden and taken his keys. How weird would it be if they fit in that key hole on the portal?", "Story");
				game.challenges.Electricity.hasKey = true;
				game.global.prisonClear++;
			}
		},
		Relentlessness: {
			world: 33,
			level: "last",
			icon: "compressed",
			title: "Unleash the Crit",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return game.portal.Relentlessness.locked;
			},
			fire: function () {
				message("You've never been here before. Like, ever. This entire place felt cold and unfamiliar. Where are you? Why have so many Trimps had to fall to get here? You're suddenly angry, it's time to take a stand.", "Story");
				message("You have permanantly unlocked a new Perk, Relentlessness, which will remain unlocked through portals.", "Notices");
				game.portal.Relentlessness.locked = false;
			}
		},
		Portal: {
			world: 20,
			level: "last",
			icon: "repeat",
			title: "Portal",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function (level, fromGenerator) {
				if (!this.canRunOnce) return;
				var messageText = (fromGenerator) ? "The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, " + ((game.global.runningChallengeSquared) ? "a green, shining box appears" : "45 helium and a green, shining box appear") + " on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'." : "Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a green, shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.";
				message(messageText, "Story");
				game.global.portalActive = true;
				fadeIn("portalBtn", 10);
				if (game.global.runningChallengeSquared) return;
				fadeIn("helium", 10);
				addHelium(45);
				if (!fromGenerator){
					message("<span class='glyphicon glyphicon-oil'></span> You were able to extract 45 Helium canisters from that Blimp! Now that you know how to do it, you'll be able to extract helium from normal Blimps.", "Story");
				}
				if (game.global.challengeActive == "Metal"){
					game.global.challengeActive = "";
					game.challenges.Metal.abandon();
					game.portal.Artisanistry.locked = false;
					game.challenges.Metal.completed = true;
					message("You have completed the <b>Metal Challenge!</b> You have unlocked a new perk, and Miners have returned to your game.", "Notices");
				}
				if (game.global.challengeActive == "Size"){
					game.global.challengeActive = "";
					game.challenges.Size.abandon();
					game.challenges.Size.completed = true;
					game.portal.Carpentry.locked = false;
					message("You have completed the <b>Size Challenge!</b> You have unlocked a new perk, and your Trimps have been reduced down to their normal size.", "Notices");
				}
				if (game.global.challengeActive == "Discipline"){
					game.global.challengeActive = "";
					game.challenges.Discipline.completed = true;
					game.portal.Range.locked = false;
					message("You have completed the <b>Discipline Challenge!</b> You have unlocked a new perk, and your Trimps have regained their Discipline.", "Notices");
				}
				if (game.global.challengeActive == "Frugal"){
					game.global.challengeActive = "";
					game.global.frugalDone = true;
					game.challenges.Frugal.abandon();
					message("You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!", "Notices");
				}
				if (game.global.challengeActive == "Coordinate"){
					game.global.challengeActive = "";
					game.portal.Coordinated.locked = false;
					message("You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!", "Notices");
				}
			}
		},
		Shieldblock: {
			world: 10,
			message: "那玩意儿掉了一本书。看起来不像一个普通的书。看起来...是块盾牌...",
			level: "last",
			icon: "book",
			title: "Shieldblock",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("Shieldblock");
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Scientist"){
					game.global.challengeActive = "";
					game.global.sLevel = getScientistLevel();
					game.challenges.Scientist.abandon();
					message("你已经完成了 <b>科学家</b> 的挑战！ 每次游戏你都将从 " + getScientistInfo(game.global.sLevel, true) + " 开始。 你已经解锁了科学家，别忘了你可以再次点击研究你的科学！", "Notices");
				}
				if (game.global.challengeActive == "Trimp"){
					game.global.challengeActive = "";
					game.challenges.Trimp.abandon();
					game.portal.Resilience.locked = false;
					message("You have completed the <b>Trimp Challenge!</b> You have unlocked the 'Resilience' perk, and your Trimps can fight together again.", "Notices");
				}
			}
		},
		Bounty: {
			world: 15,
			message: "It's all shiny and stuff. You're pretty sure you've never seen a book this shiny.",
			level: "last",
			icon: "book",
			title: "Bounty",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockUpgrade("Bounty");
			}
		},
		Supershield: {
			world: -1,
			message: "你发现这本书会教你如何升级你的盾牌！",
			level: "last",
			icon: "book",
			title: "Supershield",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Supershield");
			}
		},
		Dagadder: {
			world: -1,
			message: "你发现这本书会教你如何升级你的匕首!",
			level: "last",
			icon: "book",
			title: "Dagadder",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Dagadder");
			}
		},
		Bootboost: {
			world: -1,
			message: "你发现这本书会教你如何升级你的靴子!",
			level: "last",
			icon: "book",
			title: "Bootboost",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Bootboost");
			}
		},
		Megamace: {
			world: -1,
			message: "你发现这本书会教你如何升级你的狼牙棒!",
			level: "last",
			icon: "book",
			title: "Megamace",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Megamace");
			}
		},
		Hellishmet: {
			world: -1,
			message: "你发现这本书会教你如何升级你的头盔!",
			level: "last",
			icon: "book",
			title: "Hellishmet",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Hellishmet");
			}
		},
		Polierarm: {
			world: -1,
			message: "你发现这本书会教你如何升级你的长柄武器!",
			level: "last",
			icon: "book",
			title: "Polierarm",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Polierarm");
			}
		},
		Pantastic: {
			world: -1,
			message: "你发现这本书会教你如何升级你的裤子!",
			level: "last",
			icon: "book",
			title: "Pantastic",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Pantastic");
			}
		},
		Axeidic: {
			world: -1,
			message: "你发现这本书会教你如何升级你的战斧!",
			level: "last",
			icon: "book",
			title: "Axeidic",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Axeidic");
			}
		},
		Smoldershoulder: {
			world: -1,
			message: "你发现这本书会教你如何升级你的护肩!",
			level: "last",
			icon: "book",
			title: "Smoldershoulder",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Smoldershoulder");
			}
		},
		Greatersword: {
			world: -1,
			message: "你发现这本书会教你如何升级你的大剑!",
			level: "last",
			icon: "book",
			title: "Greatersword",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Greatersword");
			}
		},
		Bestplate: {
			world: -1,
			message: "你发现这本书会教你如何升级你的胸甲!",
			title: "Bestplate",
			level: "last",
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Bestplate");
			}
		},
		Harmbalest: {
			world: -1,
			message: "You found a book that will teach you how to upgrade your Arbalest!",
			title: "Harmbalest",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Arbalest.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Harmbalest");
			}
		},
		GambesOP: {
			world: -1,
			message: "You found a book that will teach you how to upgrade your Gambeson!",
			title: "GambesOP",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Gambeson.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("GambesOP");
			}
		},
		Speedexplorer: {
			world: -1,
			specialFilter: function (mapLevel) {
				var booksNeeded = Math.floor((mapLevel - this.next) / 10);
				return (booksNeeded > 0);
			},
			addToCount: true,
			level: [10, 20],
			icon: "book",
			title: "A well-hidden book",
			next: 10,
			fire: function () {
				if (!getCurrentMapObject() || !getCurrentMapObject().level) return;
				var mapLevel = getCurrentMapObject().level;
				var booksNeeded = Math.floor((mapLevel - this.next) / 10);
				if (booksNeeded > 0){
					for (var x = 0; x < booksNeeded; x++) {
						unlockUpgrade("Speedexplorer");
						this.next += 10;
					}
				}
				var copy = (booksNeeded == 1) ? "copy" : booksNeeded + " copies";
				message("The " + copy + " of 'Speedexplorer' under these bushes will certainly be useful!", "Unlocks", null, null, 'repeated', convertUnlockIconToSpan(this));
			}
		},
		TheBlock: {
			world: -1,
			message: "神圣的奶牛！一个独特的地图！",
			level: [10, 20],
			icon: "th-large",
			title: "The Block",
			startAt: 11,
			canRunOnce: true,
			fire: function () {
				message("你制作了一张地图！", "Story");
				createMap(11, "The Block", "Block", 2, 100, 1.3, true, true);
			}
		},
		TheWall: {
			world: -1,
			message: "Oh snap! Another unique map!",
			level: [10, 20],
			icon: "th-large",
			title: "The Wall",
			startAt: 15,
			canRunOnce: true,
			fire: function () {
				message("你刚刚做了一张墙垣地图！", "Story");
				createMap(15, "The Wall", "Wall", 2, 100, 1.5, true, true);
			}
		},
		ThePrison: {
			startAt: 80,
			level: [1, 10],
			icon: "th-large",
			canRunOnce: true,
			title: "The Prison",
			fire: function () {
				game.global.mapsUnlocked = true;
				unlockMapStuff();
				createMap(80, "The Prison", "Prison", 2.6, 100, 2.6, true);
				message("你找到了监狱！ 你对进去有一个不好的感觉...", "Story");
			}
		},
		BionicWonderland: {
			startAt: 125,
			level: [1, 15],
			icon: "th-large",
			canRunOnce: true,
			title: "仿生仙境",
			fire: function () {
				message("你找到了一个地图通往映射到仿生仙境。 听起来很有趣！", "Story");
				game.global.bionicOwned++;
				createMap(125, "仿生仙境", "Bionic", 3, 100, 2.6, true);
			}
		},
		ImplodingStar: {
			startAt: 170,
			level: [1, 15],
			icon: 'th-large',
			canRunOnce: true,
			title: 'Imploding Star',
			fire: function () {
				message("你发现了一个地图的星爆过冷的尺寸内。 温度是完美的！", "Story");
				createMap(170, "Imploding Star", "Star", 3, 100, 3.2, true);
			}
		},
		Mansion: {
			world: -1,
			startAt: 8,
			message: "你找到了建造一个大厦的蓝图! 你的脆皮会感到十分振奋！",
			level: [10, 20],
			icon: "*home4",
			title: "Mansion",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Mansion");
			}
		},
		Hotel: {
			world: -1,
			startAt: 14,
			message: "你找到了建造一个旅馆的蓝图! （一家体面的旅馆，当然！）",
			level: [10, 20],
			icon: "*office",
			title: "The Trimps' Guide to Cheap Hotel Construction",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Hotel");
			}
		},
		UberHut: {
			world: -1,
			startAt: 18,
			message: "This extremely technical book will teach anyone who can understand the big words how to make bigger huts.",
			level: [10, 20],
			icon: "book",
			title: "Hut hut hut",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHut");
			}
		},
		UberHouse: {
			world: -1,
			startAt: 29,
			message: "This book talks about adding a second floor to your homes! Mind... blown...",
			level: [10, 20],
			icon: "book",
			title: "A Tale of Two Stories",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHouse");
			}
		},
		UberMansion: {
			world: -1,
			startAt: 34,
			message: "This book will teach you how to make your Trimps share their mansions!",
			level: [10, 20],
			icon: "book",
			title: "Sharing is Caring",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberMansion");
			}
		},
		UberHotel: {
			world: -1,
			startAt: 40,
			message: "This book will teach you how to build smaller hotel rooms!",
			level: [5, 10],
			icon: "book",
			title: "The Art of Tiny Hotel Rooms",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHotel");
			}
		},
		UberResort: {
			world: -1,
			startAt: 47,
			level: [5, 10],
			message: "Wow! This book! It's so Resortsfull!",
			icon: "book",
			title: "Time for a better vacation",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberResort");
			}
		},
		Resort: {
			world: -1,
			startAt: 25,
			message: "You found plans for a huge resort!",
			level: [10, 20],
			icon: "*building",
			title: "Time for a vacation",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Resort");
			}
		},
		Gateway: {
			world: -1,
			startAt: 30,
			message: "You found a key to Dimension ZZZ!",
			level: [10, 20],
			icon: "cog",
			title: "Transgalactic Gateway",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Gateway");
			}
		},
		Wormhole: {
			world: -1,
			startAt: 37,
			message: "You found a crystal powerful enough to create wormholes!",
			level: [10, 20],
			icon: "link",
			title: "Inter-Dimensional Hole-Maker",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Wormhole");
			}
		},
		Collector: {
			world: -1,
			startAt: 50,
			message: "你发现了一些设计过于复杂的太阳能电池板的图纸。",
			level: [3, 19],
			icon: "dashboard",
			title: "Collector",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Collector");
			}
		},
		Trapstorm: {
			world: -1,
			startAt: 10,
			message: "A book that teaches your Foremen a new skill. Riveting.",
			level: [5, 15],
			icon: "book",
			title: "Trapstorm",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("Trapstorm");
			}
		},

		Nursery: {
			world: -1,
			startAt: 23,
			message: "你找到了一些可以从宝石中获得更多能量的托儿所的蓝图。",
			level: [5, 20],
			icon: "home",
			title: "Nursery",
			canRunOnce: true,
			fire: function () {
				unlockBuilding("Nursery");
			}
		},
		//This one is for all maps
		gems: {
			world: -1,
			level: [0, 7],
			icon: "*diamond",
			title: "Gems",
			repeat: 5,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你找到了 " + prettify(amt) + " 宝石! 好极了!", "Loot", "*diamond", null, "secondary");
			}
		},
		//This one is for depths maps
		Gems: {
			world: -1,
			level: [0, 4],
			repeat: 3,
			icon: "*diamond",
			title: "Gems",
			filter: true,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你找到了 " + prettify(amt) + " 宝石! 好极了!", "Loot", "*diamond", null, "secondary");
			}
		},
		Any: {
			world: -1,
			level: [0, 2],
			icon: "*leaf2",
			title: "Food/Wood/Metal",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var rand = Math.floor(Math.random() * 3);
				switch(rand) {
					case 0:
						game.mapUnlocks.Food.fire(level);
						break;
					case 1:
						game.mapUnlocks.Wood.fire(level);
						break;
					case 2:
						game.mapUnlocks.Metal.fire(level);
						break;
				}
			}
		},
		Metal: {
			world: -1,
			level: [0, 2],
			icon: "*cubes",
			title: "Metal",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("metal", 0.5, level, true);
				message("你发现了 " + prettify(amt) + " 金属条！ 不错！", "Loot", "*cubes", null, "primary");
			}
		},
		Food: {
			world: -1,
			level: [0, 2],
			icon: "apple",
			title: "Food",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("那家伙在地上留下了 " + prettify(amt) + " 食物! 爽!", "Loot", "apple", null, "primary");
			}
		},
		Wood: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "Wood",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("你发现了 " + prettify(amt) + "木头！ 干得相当漂亮！", "Loot", "tree-deciduous", null, "primary");
			}
		}
	},

	//if you put a function in here as fire, you won't have anything unlocked, the name is just for funsies
	//-1 is all worlds, -2 is even world numbers, -3 is odd world numbers, -5 is every 5th world
	//min is inclusive, max is exclusive. too lazy to fix
	//More important stuff should be towards the top in case of bailouts
	worldUnlocks: {
		Shield: {
			message: "你找到盾牌的图纸！ 它甚至会告诉你如何升级它，如果你有足够的木材。 这是很好的坏家伙。",
			world: 1,
			title: "新装甲",
			level: 4,
			icon: "question-sign"
		},
		Boots: {
			message: "你找到了靴子的图纸！ 膨胀！",
			world: 1,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Dagger: {
			message: "你找到了匕首的图纸!真想不到!",
			world: 1,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Mace: {
			message: "你找到了一个狼牙棒的图纸!",
			world: 2,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Helmet: {
			message: "你找到了一个头盔的图纸！",
			world: 2,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Polearm: {
			message: "你发现了一个长柄武器设计图!",
			world: 3,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Pants: {
			message: "你找到裤子的图纸！",
			world: 3,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Battleaxe: {
			message: "你找到了一个战斧的图纸！",
			world: 4,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Shoulderguards: {
			message: "你找到了护肩的图纸！",
			world: 4,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Greatsword: {
			message: "你找到了巨剑的图纸！",
			world: 5,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Breastplate: {
			message: "你找到了护胸甲的图纸！",
			world: 5,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		//Non Equipment
		Bloodlust: {
			message: "你找到一本名为《嗜血》的古书。你应该看看它或别的什么。",
			world: 1,
			level: 9,
			icon: "book",
			title: "Bloodlust",
			fire: function() {
				unlockUpgrade("Bloodlust");
			}
		},
		Efficiency: {
			message: "嘿，这本书可能适合你!",
			world: -2,
			level: 9,
			icon: "book",
			title: "Efficiency",
			fire: function() {
				unlockUpgrade("Efficiency");
			}
		},
		Gym: {
			message: "嗨，瞧，一个新的健身房设计图!",
			world: 2,
			level: 4,
			icon: "home",
			title: "新建筑",
			fire: function() {
				unlockBuilding("Gym");
				document.getElementById("blockDiv").style.visibility = "visible";
			}
		},
		TrainTacular: {
			message: "这本书是给您的培训师的！",
			world: -5,
			level: 9,
			icon: "book",
			title: "TrainTacular",
			fire: function () {
				unlockUpgrade("TrainTacular");
			}
		},
		Warpstation: {
			message: "是时候殖民星系了。",
			world: 60,
			level: 19,
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "银河将是你的海洋",
			icon: "*rocket4",
			fire: function () {
				unlockBuilding("Warpstation");
			}
		},
		Gymystic: {
			world: -5,
			startAt: 25,
			lastAt: 55,
			level: 44,
			icon: "book",
			message: "脆皮洞穴壁画预言了这本书的存在，你根本不知道它的存在。它有灰尘气味。",
			title: "一些旧的、布满灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Gymystic2: {
			world: -25,
			startAt: 75,
			lastAt: 150,
			level: 54,
			icon: "book",
			displayAs: "Gymystic",
			message: "脆皮洞穴壁画预言了这本书的存在，你根本不知道它的存在。它有灰尘气味。",
			title: "一些旧的、布满灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Dominance: {
			world: 70,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "Formation",
			fire: function () {
				unlockUpgrade("Dominance");
			}
		},
		  Barrier: {
			world: 80,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "队形",
			fire: function () {
				unlockUpgrade("Barrier");
			}
		},
		Potency: {
			message: "这本书将帮助你的脆皮产生更多的脆皮！",
			world: -5,
			level: 29,
			icon: "book",
			title: "",
			fire: function () {
				if (game.global.challengeActive == "Trapper"){
					message("你的科学家让你知道，你的脆皮不会理解这本书，但是他们会为你保留它。真是太好了!", "Notices");
					game.challenges.Trapper.heldBooks++;
					return;
				}
				unlockUpgrade("Potency");
			}
		},
/* 		SuperShriek: {
			message: "This book will help your RoboTrimp shriek louder!",
			world: 183,
			level: 5,
			icon: "book",
			title: "MagnetoShriek is love, MagnetoShriek is life",
			fire: function () {
				unlockUpgrade("SuperShriek");
			}
		}, */
		//19 is for Armor
		Miner: {
			message: "你找到一本关于采矿的古书。通过一些研究，你应该能够教会我的脆皮们！",
			world: 1,
			level: 29,
			icon: "book",
			title: "矿工",
			fire: function () {
				if (game.global.challengeActive == "Metal"){
					message("你的脆皮根本不理解这本书在说什么。这是他们的想法。什么是“矿工”? !", "Notices");
					game.challenges.Metal.fireAbandon = true;
					return;
				}
				unlockUpgrade("Miners");
			}
		},
		Trainer: {
			message: "你找到了一本关于适当的体能训练的书！",
			world: 3,
			level: 3,
			icon: "book",
			title: "加强你的方块游戏!",
			fire: function () {
				unlockUpgrade("Trainers");
			}
		},
		Scientist: {
			message: "你找到一本关于爱因斯坦脆皮的书。!",
			world: 1,
			level: 39,
			icon: "book",
			title: "科学家",
			fire: function () {
				if (game.global.challengeActive == "Scientist"){
					message("你的脆皮认为他们在科学上太擅长阅读你的愚蠢的书。。他们已经在研究传送门技术了!", "Notices");
					game.challenges.Scientist.fireAbandon = true;
					return;
				}
				unlockUpgrade("Scientists");
			}
		},
		Explorer: {
			message: "你找到了一本书，详细描述了独自探索的错综复杂之处!",
			world: 15,
			level: 39,
			icon: "book",
			title: "Explorer",
			fire: function () {
				if (game.upgrades.Explorers.allowed === 0) unlockUpgrade("Explorers");
			}
		},
		Speedscience: {
			message: "你找到了一本叫做《速度科学》的书!你认为它能做什么?!",
			brokenPlanet: -1,
			world: -2,
			level: 39,
			icon: "book",
			title: "Speedscience",
			fire: function () {
			if (game.global.challengeActive == "Scientist"){
				message("你找到一本叫《速度科学》的书，但你还没找到读它的人。真遗憾。", "Notices");
				game.challenges.Scientist.heldBooks++;
				return;
			}
				unlockUpgrade("Speedscience");
			}
		},
		Megascience: {
			message: "你找到了一本书叫《超级科学》!它似乎在现实中逐渐消失。",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			level: 39,
			icon: "book",
			title: "Megascience",
			fire: function () {
				unlockUpgrade("Megascience");
			}
		},
		Gigastation: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			startAt: 61,
			lastAt: 69,
			level: 19,
			icon: "*make-group",
			title: "千兆站",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation2: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			startAt: 70,
			lastAt: 78,
			level: 19,
			icon: "*make-group",
			displayAs: "Gigastation",
			title: "千兆站",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation3: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -33,
			startAt: 81,
			lastAt: 90,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			displayAs: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation4: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -5,
			startAt: 95,
			lastAt: 170,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			displayAs: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation5: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -10,
			startAt: 180,
			lastAt: 229,
			level: 19,
			icon: "*make-group",
			displayAs: "Gigastation",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Magmamancer: {
			message: "你会发现一本闷烧的书，看起来像是从这个星球的核心被推了出来。里面是用宝石和岩浆进行仪式的脆皮的画。摸起来很热，但是你随身携带，因为你已经有一段时间没有新的阅读材料了。",
			world: 230,
			level: 90,
			icon: "book",
			title: "Magmamancers",
			fire: function () {
				if (game.global.challengeActive == "Metal"){
					game.challenges.Metal.holdMagma = true;
					message("这本书在你处理这个维度的矿物元素的过程中真的没什么帮助。最好让你的科学家为你保留这一点。", "Notices");
					return;
				}
				unlockUpgrade("Magmamancers");
			}
		},
		//49 is for weapon
		Speedfarming:{
			message: "你找到了一本叫做“速度农场”的书!它看起来美味!",
			brokenPlanet: -1,
			world: -1,
			level: 79,
			icon: "book",
			title: "Speedfarming",
			fire: function () {
				unlockUpgrade("Speedfarming");
			}
		},
		Megafarming:{
			message: "你发现了一本书叫《大型农场》它表明你实际上应该给你的庄稼浇水。太棒了!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 79,
			icon: "book",
			title: "Megafarming",
			fire: function () {
				unlockUpgrade("Megafarming");
			}
		},

		Speedlumber: {
			message: "你找到了一本书叫《速度木材》!它看起来长。",
			brokenPlanet: -1,
			world: -1,
			level: 69,
			icon: "book",
			title: "Speedlumber",
			fire: function () {
				unlockUpgrade("Speedlumber");
			}
		},
		Megalumber: {
			message: "你找到了一本书叫《超级木材》!背面的引用上写着:“如果一个木三轮车能劈木头，木头能砍多少木头?”",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 69,
			icon: "book",
			title: "Megalumber",
			fire: function () {
				unlockUpgrade("Megalumber");
			}
		},
		Speedminer: {
			message: "你找到了一本叫《速度矿工》的书!",
			brokenPlanet: -1,
			world: -1,
			level: 59,
			icon: "book",
			title: "Speedminer",
			fire: function() {
				if (game.global.challengeActive == "Metal"){
					message("你的科学家茫然地盯着你看了一会儿，然后慢慢地静静地把新书放在书架上。", "Notices");
					game.challenges.Metal.heldBooks++;
					return;
				}
				unlockUpgrade("Speedminer");
			}
		},
		Megaminer: {
			message: "You found a book called Megaminer! The front is really shiny and has a Trimp on it. Creepy, it seems to follow your eyes.",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 59,
			icon: "book",
			title: "Megaminer",
			fire: function() {
				if (game.global.challengeActive == "Metal"){
					message("Your scientists appreciate the fact that you've managed to find another useless book, but they make sure to let you know it's still useless.", "Notices");
					game.challenges.Metal.heldMegaBooks++;
					return;
				}
				unlockUpgrade("Megaminer");
			}
		},
		Geneticist: {
			message: "Your Trimps report a strange bronze object on the floor, and you decide to come look at it. It looks freaky, so you ask one of your Trimps to pick it up first. He instantly starts itching his face and babbling off a bunch of science stuff, so you let another Trimp touch it and he does the same. This seems to make your Trimps smarter than Scientists, but may cause side effects.",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: 70,
			level: 49,
			title: "The Great Bell of Trimp",
			icon: "bell",
			fire: function () {
				unlockJob("Geneticist");
			}
		},
		Foreman: {
			message: "You found a crafting foreman! He will build buildings automatically for you!",
			world: -1,
			level: 89,
			icon: "user",
			title: "Foreman",
			fire: function () {
				game.global.autoCraftModifier += 0.25;
				updateForemenCount();
			}
		},
		Anger: {
			world: 20,
			level: 99,
			icon: "eye-open",
			title: "路的尽头",
			fire: function () {
				message(	"你往下看去，看到一个绿色的宝石似乎在回瞪你。你把它捡起来,感觉你身体内的肾上腺素激增。 也许最好把这个带回实验室进行一些研究。", "Story");
				unlockUpgrade("Anger");
			}
		},
		Coordination: {
			message: "你会发现一本名为“协调”的古书。令人兴奋的。",
			world: -1,
			level: 99,
			get icon (){
				return (game.global.world == mutations.Magma.start() - 1) ?  "*archive2" : "book";
			},
			title: "Coordination",
			fire: function() {
				if (game.global.challengeActive == "Trimp"){
					message("你的科学家不认为尝试本书中的任何建议是一个非常聪明的想法。", "Notices");
					game.challenges.Trimp.heldBooks ++;
					return;
				}
				unlockUpgrade("Coordination");
			}
		},
		Blockmaster: {
			message: "You found a book discussing tactics for better blocking!",
			world: 4,
			level: 29,
			icon: "book",
			title: "Blockmaster",
			fire: function () {
				unlockUpgrade("Blockmaster");
			}
		},
		Egg: {
			message: "This egg looks crazy. Seriously, guys, come look at this crazy egg!",
			world: 17,
			level: 55,
			icon: "record",
			title: "Egg",
			fire: function () {
				if (game.upgrades.Egg.allowed === 0) unlockUpgrade("Egg");
			}
		},
		Doom: {
			world: 33,
			level: [15, 50],
			icon: "th-large",
			title: "Too dark to see",
			fire: function () {
				createMap(33, "Trimple Of Doom", "Doom", 3, 100, 1.8, true);
				message("这张地图有些奇怪。它似乎没有反射任何光线，只是纯粹的黑暗。", "Story");
			}
		},
		FirstMap: {
			world: 6,
			level: [1, 5],
			icon: "th-large",
			title: "Tricky Paradise",
			fire: function () {
				game.global.mapsUnlocked = true;
				unlockMapStuff();
				createMap(6, "Tricky Paradise", "Plentiful", 1.2, 45, 0.85);
				message("你找到了你的第一个地图! 前往你的地图室看看吧。", "Story");
			}
		},
		easterEgg: {
			world: -1,
			locked: true,
			level: [0, 99],
			title: "Colored Egg",
			icon: "*droplet",
			addClass: function () {
				return "easterEgg easterEgg" + getRandomIntSeeded(game.global.eggSeed + 1, 0, 4);
			},
			chance: 0.15,
			fire: function (){}
		},
		//Multiples
		Map: {
			world: -1,
			startAt: 6,
			level: [0, 20],
			repeat: 10,
			icon: "th",
			title: "地图碎片",
			fire: function() {
				var amt = rewardResource("fragments");
				message("你找到了 " + prettify(amt) + " 地图碎片!", "Loot", "th", null, "secondary");
			}
		},
		//portal Trumps
		fiveTrimpMax: {
			world: -1,
			level: [10, 20],
			icon: "gift",
			title: "战场上的奖励!",
			repeat: 45,
			fire: function () {
				var amt = 5 + (game.portal.Trumps.modifier * game.portal.Trumps.level);
				game.resources.trimps.max += amt;
				game.global.totalGifts += amt;
				if (game.portal.Carpentry.level) amt *= Math.pow((1 + game.portal.Carpentry.modifier), game.portal.Carpentry.level);
				if (game.portal.Carpentry_II.level > 0) amt *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
				message("你已经清除了足够的土地来容纳更多 " + prettify(amt) + " 的脆皮!", "Loot", "gift", null, "secondary");
			}
		},
		fruit: {
			world: -1,
			level: [0, 4],
			icon: "apple",
			title: "Food",
			repeat: 9,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level);
				message("那个家伙还在地上留下了 " + prettify(amt) + " 食物! 美味!", "Loot", "apple", null, 'primary');
			}
		},
		groundLumber: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "Wood",
			repeat: 8,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level);
				message("你发现了 " + prettify(amt) + " 木头！ 干得相当漂亮！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		freeMetals: {
			world: -1,
			level: [3, 5],
			title: "Metal",
			icon: "*cubes",
			repeat: 6,
			fire: function (level) {
				var amt = rewardResource("metal", 0.5, level);
				message("你发现了 " + prettify(amt) + " 金属条！ 不错！", "Loot", "*cubes", null, 'primary');
			}
		},
		spireMetals: {
			world: -1,
			start: 200,
			level: [1,4],
			repeat: 4,
			fire: function (level) {
				if (!game.global.spireActive) return;
				var amt = rewardResource("metal", 25, level);
				message("肯定有很多金属在这个尖顶周围！ 你发现了 " + prettify(amt) + " 更多!", "Loot", "*safe", "spireMetalsMsg", "primary");
			},
			specialFilter: function (){
				return checkIfSpireWorld();
			},
			title: "Spire Metal",
			icon: "*safe",
			addClass: "spireMetals"
		}
	},
	//buildings with percent = true cannot have multiple purchases at a time
	buildings: {
		Trap: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 5,
			tooltip: function () {
				var catchAmt = (game.portal.Bait.level + 1);
				var s = (catchAmt > 1) ? "" : "";
				return "每个陷阱都能让你抓住 " + prettify(catchAmt) + " 东西" + s + ".";
			},
			cost: {
				food: 10,
				wood: 10
			},
			first: function () {
				if (document.getElementById("trimps").style.visibility == "hidden") fadeIn("trimps", 10);
			}
		},
		Barn: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			tooltip: "增加100%食物储量上限.",
			percent: true,
			cost: {
				food: function () {
					return calculatePercentageBuildingCost("Barn", "food", 0.25);
				}
			},
			increase: {
				what: "food.max.mult",
				by: 2
			}
		},
		Shed: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "增加100%木头储量上限.",
			cost: {
				wood: function () {
					return calculatePercentageBuildingCost("Shed", "wood", 0.25);
				}
			},
			increase: {
				what: "wood.max.mult",
				by: 2
			}
		},
		Forge: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "增加100%金属储量上限.",
			cost: {
				metal: function () {
					return calculatePercentageBuildingCost("Forge", "metal", 0.25);
				}
			},
			increase: {
				what: "metal.max.mult",
				by: 2
			}
		},
		Hut: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			AP: true,
			tooltip: "棚屋可以居住$incby$更可爱的脆皮。 所有的脆皮住房都有足够的工作空间，只有一半的脆皮可以住在那里。",
			cost: {
				food: [125, 1.24],
				wood: [75, 1.24]
			},
			increase: {
				what: "trimps.max",
				by: 3
			}
		},
		House: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			AP: true,
			tooltip: "一个更好的房子对于您的脆皮！ 每个房子支持$incby$更多的脆皮。",
			cost: {
				food: [1500, 1.22],
				wood: [750, 1.22],
				metal: [150, 1.22]
			},
			increase: {
				what: "trimps.max",
				by: 5
			}
		},
		Mansion: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 60,
			AP: true,
			tooltip: "一个相当恶心的豪宅，让你的脆皮住在里面。 每个可以住 $incby$ 脆皮",
			cost: {
				gems: [100, 1.2],
				food: [3000, 1.2],
				wood: [2000, 1.2],
				metal: [500, 1.2]

			},
			increase: {
				what: "trimps.max",
				by: 10
			}
		},
		Hotel: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			tooltip: "看上去不错的旅馆，成为很多脆皮的住所。提供客房服务和一个迷你酒吧完成。 可以住 $incby$ 脆皮。",
			cost: {
				gems: [2000, 1.18],
				food: [10000, 1.18],
				wood: [12000, 1.18],
				metal: [5000, 1.18]

			},
			increase: {
				what: "trimps.max",
				by: 20
			}
		},
		Resort: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 240,
			AP: true,
			tooltip: "对于你的脆皮来说，这是一个巨大的胜地。 可以住 $incby$ 脆皮。",
			cost: {
				gems: [20000, 1.16],
				food: [100000, 1.16],
				wood: [120000, 1.16],
				metal: [50000, 1.16]

			},
			increase: {
				what: "trimps.max",
				by: 40
			}
		},
		Gateway: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 480,
			AP: true,
			tooltip: "另一个维度的传送门，你的脆皮可以睡觉和工作. 可以住 $incby$ 脆皮。",
			cost: {
				fragments: [3000, 1.14],
				gems: [20000, 1.14],
				metal: [75000, 1.14]
			},
			increase: {
				what: "trimps.max",
				by: 100
			}
		},
		Wormhole: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 600,
			AP: true,
			tooltip: "使用你疯狂的，氦冷却，容易瞄准的虫洞发生器创建易于旅行的链接到其他可定居的行星，在那里你的脆皮可以睡觉和工作。 每个可以住 $incby$ 脆皮. <b>这座建筑需要耗费氦气来创造。</b>",
			cost: {
				helium: [10, 1.075],
				metal: [100000, 1.1]
			},
			increase:{
				what: "trimps.max",
				by: 1500
			}
		},
		Collector: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			AP: true,
			tooltip: "每个收集器都可以让你收获更多的家庭之星的力量，让你的脆皮能够在你的太阳系中占据更大的比例。 每个可以住 $incby$ 脆皮.",
			cost: {
				gems: [500000000000, 1.12]
			},
			increase: {
				what: "trimps.max",
				by: 5000
			}
		},
		Warpstation: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			origTime: 1200,
			AP: true,
			tooltip: "创造一个巨大的经纱站，能够容纳大量的脆皮，并在需要时立即将它们运回家园。可以住 $incby$ 脆皮。",
			cost: {
				gems: [100000000000000, 1.4],
				metal: [1000000000000000, 1.4]
			},
			increase: {
				what: "trimps.max",
				by: 10000
			}

		},
		Gym: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			AP: true,
			tooltip: "你的脆皮可以锻炼的建筑物。 每个健身房都可以增加每个脆皮$incby$〜格挡的伤害量",
			cost: {
				wood: [400, 1.185]
			},
			increase: {
			what: "global.block",
			by: 4
			},
			fire: function () {
				if (game.upgrades.Gymystic.done === 0) return;
				var oldBlock = game.buildings.Gym.increase.by;
				game.buildings.Gym.increase.by *= (game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done - 1)));
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * (game.buildings.Gym.owned));
			}
		},
		Tribute: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			tooltip: "向您的Dragimp捐款，增加他的胃口和速度。 他将更快地收集宝石5%（复合）。",
			cost: {
				food: [10000, 1.05]
			},
			increase: {
				what: "Dragimp.modifier.mult",
				by: 1.05
			}
		},
		Nursery: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			get tooltip () {
				if (mutations.Magma.active())
					return "<p>岩浆一般是不利于健康的幼儿园环境。 各苗圃仍会增加脆皮每秒从1％（配混）繁殖，但作为岩浆移近您的活性苗圃的10％将关闭每个区域。 安全第一！</p><p>你总共已经购买托儿所" + prettify(this.purchased) + "个</p>";
				return "构建一个宝石托儿所，脆皮宝宝可以更快地成长。 繁殖率每秒增加1％（复合）。";

			},
			cost: {
				gems: [400000, 1.06],
				wood: [1000000, 1.06],
				metal: [500000, 1.06]
			}
		},
	},
//jobs
	jobs: {
		Farmer: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会耕作的技术。 每个农民每秒生产 $modifier$ 食物。",
			cost: {
				food: 5
			},
			increase: "food",
			modifier: 0.5
		},
		Lumberjack: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会砍伐的技术。 每个木工每秒生产 $modifier$ 木头。",
			cost: {
				food: 5
			},
			increase: "wood",
			modifier: 0.5
		},
		Miner: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会采矿的技术。 每个矿工每秒生产 $modifier$ 金属。",
			cost: {
				food: 20
			},
			increase: "metal",
			modifier: 0.5
		},
		Scientist: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会如何研究。 每个科学家每秒生产 $modifier$ 科学点。",
			cost: {
				food: 100
			},
			increase: "science",
			modifier: 0.5
		},
		Trainer: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			tooltip: function () {
				var text = "每个训练员都将增加你的士兵防御";
				var heirloomBonus = game.heirlooms.Shield.trainerEfficiency.currentBonus;
				var modifier = game.jobs.Trainer.modifier;
				if (heirloomBonus > 0){
					modifier = calcHeirloomBonus("Shield", "trainerEfficiency", modifier).toFixed(1);
					return text + modifier + "%. (" + game.jobs.Trainer.modifier + "% increased by " + heirloomBonus + "% thanks to " + game.global.ShieldEquipped.name + ")";
				}
				return text + modifier + "%.";
			},
			cost: {
				food: [750, 1.1]
			},
			increase: "custom",
			modifier: 20
		},
		Explorer: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			tooltip: "每个探险家平均每秒会找到 $modifier$ 碎片。",
			cost: {
				food: [15000, 1.1]
			},
			increase: "fragments",
			modifier: 0.4
		},
		Dragimp: {
			locked: 1,
			owned: 0,
			increase: "gems",
			modifier: 0.5
		},
		Geneticist: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			tooltip: "每个遗传学家都会将每个脆皮的生命状况提高1％（复合），但会降低婴儿脆皮生长2％（复合）的速度。",
			cost: {
				food: [1000000000000000, 1.03],
			},
			increase: "custom",
			modifier: 1
		},
		Magmamancer: {
			locked: 1,
			owned: 0,
			allowAutoFire: true,
			get tooltip(){
				var timeOnZone = Math.floor((new Date().getTime() - game.global.zoneStarted) / 60000);
				if (game.talents.magmamancer.purchased) timeOnZone += 5;
				var bonus = (this.getBonusPercent() - 1) * 100;
				var timeStr;
				if (timeOnZone >= 120)
					timeStr = "over 120 minutes (Max)";
				else{
					var remaining = 10 - (timeOnZone % 10);
					var nextBonus = ((this.getBonusPercent(false, Math.floor(timeOnZone / 10) + 1) - 1) * 100);
					timeStr = prettify(timeOnZone) + " 分钟" + ((timeOnZone == 1) ? "" : "") + "。 在 " + prettify(remaining) + " 分钟里" + ((remaining == 1) ? "" : "") + ", 这个奖金将增加到 " + prettify(nextBonus) + "%";
					if (timeOnZone < 10) bonus = 0;
				}
				var currentMag = (((1 - Math.pow(0.9999, this.owned)) * 3));
				var nextMag = (((1 - Math.pow(0.9999, this.owned + 1)) * 3));
				var nextBonus = (1 - (currentMag / nextMag)) * 100;
				var textString = "<p>Train a Magmamancer to craft pickaxe heads infused with Gems and Magma, custom for the unique rocks in each zone. The more Magmamancers you have and the longer you spend in one zone, the more Metal your Trimps will be able to gather!</p><p>For each 10 minutes you spend in a zone with Magmamancers up to 2 hours, your Magmamancer bonus will increase by 20% (compounding). Your current bonus is <b>" + prettify(bonus) + "%</b>, and you've been on this zone for " + timeStr + ".</p>";
				if (this.owned > 0) textString += "<p>你的下一个岩浆法师将增加总奖励 " + prettify(nextBonus) + "% (复利, 按住Ctrl键查看公式)</p>";
				else textString += "<p>培训了你的第一个岩浆法师之后，你的金属奖励将会是 " + prettify((nextMag * (Math.pow(1.2, this.getBonusPercent(true)) - 1)) * 100) + "%. (按住Ctrl键查看公式)</p>";
				if (ctrlPressed) textString += "<b><p>M = Magmamancer count. T = Time on zone in minutes, divided by 10, rounded down.</p><p>金属/秒 *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1))</p><b>";
				return textString;
			},
			cost: {
				gems: [1e60, 1.01]
			},
			increase: "custom",
			modifier: 1,
			getBonusPercent: function (justStacks, forceTime) {
				var boostMult = 0.9999;
				var boostMax = 3;
				var expInc = 1.2;
				var timeOnZone;
				if (typeof forceTime === 'undefined'){
					var timeOnZone = new Date().getTime() - game.global.zoneStarted;
					if (game.talents.magmamancer.purchased) timeOnZone += 300000;
					timeOnZone = Math.floor(timeOnZone / 600000);
					
					if (timeOnZone > 12) timeOnZone = 12;
					else if (timeOnZone <= 0) return 1;
				}
				else timeOnZone = forceTime;
				if (justStacks) return timeOnZone;
				return 1 + ((((1 - Math.pow(boostMult, this.owned)) * boostMax)) * (Math.pow(expInc, timeOnZone) - 1));
			}
		},
		Amalgamator: {
			locked: 1,
			owned: 0,
			allowAutoFire: true,
			get tooltip(){
				return "Doubles your soldiers, doubles your health.";
			},
			cost: {
				gems: [1e60, 1.01]
			},
			increase: "custom",
			modifier: 1,
			getBonusPercent: function (justStacks, forceTime) {
				var boostMult = 0.9999;
				var boostMax = 3;
				var expInc = 1.2;
				var timeOnZone;
				if (typeof forceTime === 'undefined'){
					var timeOnZone = new Date().getTime() - game.global.zoneStarted;
					if (game.talents.magmamancer.purchased) timeOnZone += 300000;
					timeOnZone = Math.floor(timeOnZone / 600000);
					
					if (timeOnZone > 12) timeOnZone = 12;
					else if (timeOnZone <= 0) return 1;
				}
				else timeOnZone = forceTime;
				if (justStacks) return timeOnZone;
				return 1 + ((((1 - Math.pow(boostMult, this.owned)) * boostMax)) * (Math.pow(expInc, timeOnZone) - 1));
			}			
		}
	},

	goldenUpgrades: {
		Helium: {
			tooltip: function() {
				return "增加氦获得量 " + prettify(game.goldenUpgrades.Helium.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.01 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Battle: {
			tooltip: function() {
				return "增加脆皮的攻击和生命 " + prettify(game.goldenUpgrades.Battle.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.03 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Void: {
			tooltip: function() {
				return "减少虚空地图掉落时的最小敌人数量 " + prettify(game.goldenUpgrades.Void.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.02 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		}
	},

	upgrades: {
	//Important Upgrades
		Coordination: {
			locked: 1,
			tooltip: "这本书能教会你的战士们如何多人协同作战。 战斗需要 <coord>%更多的脆皮（集合），但攻击和生命也同样的提升了。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [250, 1.3],
					food: [600, 1.3],
					wood: [600, 1.3],
					metal: [300, 1.3]
				}
			},
			fire: function () {
				game.resources.trimps.maxSoldiers = Math.ceil(1.25 * game.resources.trimps.maxSoldiers);
				if (game.portal.Coordinated.level) game.portal.Coordinated.currentSend = Math.ceil(game.portal.Coordinated.currentSend * ((0.25 * Math.pow(game.portal.Coordinated.modifier, game.portal.Coordinated.level)) + 1));
			}
		},
		Gigastation: {
			locked: 1,
			allowed: 0,
			tooltip: "Prestige your Warpstation, increasing the amount of Trimps it can house by 20% and the base cost by 75%. There's no turning back, learning these blueprints will make your previous model of Warpstation obsolete but functional, and you will keep all Trimps housed there. Learning this will build one new Warpstation. <b>Holding Ctrl will cause as many Warpstations as you currently own to be purchased immediately after Gigastation, if you can afford them.</b>",
			done: 0,
			cost: {
				resources: {
					gems: [100000000000000, 1.75],
					metal: [1000000000000000, 1.75],
					science: [100000000000, 1.4]
				}
			},
			fire: function (heldCtrl) {
				if (game.buildings.Warpstation.purchased > game.buildings.Warpstation.owned){
					clearQueue('Warpstation');
				}
				var oldAmt = game.buildings.Warpstation.owned;
				game.global.lastWarp = game.buildings.Warpstation.owned;
				game.buildings.Warpstation.increase.by *= 1.20;
				game.buildings.Warpstation.cost.gems[0] *= 1.75;
				game.buildings.Warpstation.cost.metal[0] *= 1.75;
				game.buildings.Warpstation.purchased = 1;
				game.buildings.Warpstation.owned = 1;
				game.resources.trimps.max += game.buildings.Warpstation.increase.by;
				if ((ctrlPressed || heldCtrl) && oldAmt > 1) buyBuilding("Warpstation", false, false, oldAmt - 1);
			}
		},

	//One Time Use Upgrades, in order of common unlock order
		Battle: { //0
			locked: 1,
			tooltip: "弄清楚如何教这些脆皮们去战斗并杀死那些坏家伙。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 10
				}
			},
			fire: function () {
				fadeIn("equipmentTitleDiv", 10);
				fadeIn("equipmentTab", 10);
				fadeIn("battleContainer", 10);
				buildGrid();
				liquifyZone();
				drawGrid();
				game.global.BattleClock = -1;
				fadeIn("metal", 10);
				if (game.global.slowDone) {
					unlockEquipment("Gambeson");
					unlockEquipment("Arbalest");
				}
			}
		},
		Bloodlust: { //1
			locked: 1,
			tooltip: "这本书能教会脆皮们如何进行持久战。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					food: 150
				}
			},
			fire: function () {
				game.global.autoBattle = true;
				pauseFight(true);
				fadeIn("pauseFight", 1);
			}
		},
		Blockmaster: { //4
			locked: 1,
			allowed: 0,
			tooltip: "这本书能增加50%每个健身馆所提供的防御。",
			done: 0,
			cost: {
				resources: {
					science: [750, 1.17],
					food: [2000, 1.17],
					metal: [1000, 1.17]
				}
			},
			fire: function () {
				game.global.block = Math.ceil(1.5 * game.global.block);
				game.buildings.Gym.increase.by = Math.ceil(1.5 * game.buildings.Gym.increase.by);
			}
		},
		Trapstorm: { //10
			locked: 1,
			allowed: 0,
			tooltip: "这本书详细介绍了教你的工头们实际做事情而不是无所事事的艺术。当被问到，如果队列是空的，你的工头将会开始建造一个新的陷阱。",
			done: 0,
			cost: {
				resources: {
					science: 10000,
					food: 100000,
					wood: 100000

				}
			},
			fire: function () {
				game.global.trapBuildAllowed = true;
				fadeIn("autoTrapBtn", 10);
				toggleAutoTrap(true);
			}
		},
		Shieldblock: { //11
			locked: 1,
			allowed: 0,
			tooltip: "这本书解释了使用盾牌实际上阻止伤害的方法。当前的盾牌需要完全摧毁和重建,但它将带来防御而不是生命。 <b>效果是永久的。</b> $Your Shield Must be Prestige III or higher$",
			done: 0,
			specialFilter: function () {
				return (game.equipment.Shield.prestige >= 3) ? true : false;
			},
			cost: {
				resources: {
					science: 3000,
					wood: 10000
				}
			},
			fire: function () {
			var equipment = game.equipment.Shield;
				prestigeEquipment("Shield", false, true);
				equipment.blockNow = true;
				equipment.tooltip = game.equipment.Shield.blocktip;
				equipment.blockCalculated = Math.round(equipment.block * Math.pow(1.19, ((equipment.prestige - 1) * game.global.prestige.block) + 1));
				levelEquipment("Shield", 1);
			}
		},
		Bounty: { //15
			locked: 1,
			tooltip: "这本书将教给你的农民、伐木工、矿工、科学家和探险家，提高两倍生产力",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [40000, 2],
					food: [100000, 2],
					wood: [100000, 2],
					metal: [100000, 2]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 2;
				game.jobs.Lumberjack.modifier *= 2;
				game.jobs.Miner.modifier *= 2;
				game.jobs.Scientist.modifier *= 2;
				game.jobs.Explorer.modifier *= 2;

			}
		},
		Egg: { //17
			locked: 1,
			allowed: 0,
			tooltip: "你的顶尖科学家都确信这是一个龙蛋。他们知道龙喜欢闪亮的东西,也许它会找到一些宝石",
			done: 0,
			cost: {
				resources: {
					gems: 10000
				}
			},
			fire: function () {
				game.jobs.Dragimp.owned = 1;
				fadeIn("gemsPs", 10);
				unlockBuilding("Tribute");
			}
		},
		Anger: { //20
			locked: 1,
			allowed: 0,
			tooltip: "你的科学家们很生气。不是因为你做的任何事情,而是这宝石似乎让他们疯了。虽然需要一些研究,但你认为你可以创建一张地图去到这些宝石的原产地。",
			done: 0,
			cost: {
				resources: {
					science: 100000,
					fragments: 15
				}
			},
			fire: function () {
				message("你制作了一张通往愤怒次元的地图！应该会很有趣！", "Notices");
				createMap(20, "Dimension of Anger", "Hell", 3, 100, 2.5, true, true);
			}
		},
		Gymystic: { //25
			locked: 1,
			allowed: 0,
			tooltip: "本书将使您购买的每个健身房增加5％所有健身房提供的防御。 这个升级的每个连续级别都会增加一个额外的1％. <b>每个健身房提供额外的防御。</b>",
			done: 0,
			cost: {
				resources: {
					wood: 1000000000,
					science: 5000000
				}
			},
			modifier: 1.05,
			fire: function () {
				var oldBlock = game.buildings.Gym.increase.by;
				game.buildings.Gym.increase.by = 6 * Math.pow(game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done)), game.buildings.Gym.owned);
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * game.buildings.Gym.owned);
			}
		},
		SuperShriek: {
			locked: 1,
			allowed: 0,
			get tooltip (){
				var text = "This book will teach your Robotrimp how to do a much better job of shrieking, allowing MagnetoShriek to be used on multiple Corrupted cells in addition to Improbabilities. Upgraded MagnetoShriek starts off only being able to affect 1 cell at a time, but each use after purchasing this upgrade will extend the bonus by one additional cell, up to a max of 5 cells (resets on portal). <br/><br/> Each new 仿生仙境 clear starting at Z185 will permanently increase the cell count cap by 1.";
				var cap = 5;
				if (game.global.roboTrimpLevel >= 5)
					cap += game.global.roboTrimpLevel - 4;
				var cleared = (game.global.roboTrimpLevel - 4);
				text += " <b>You have cleared " + cleared + " 仿生仙境" + ((cleared == 1) ? "" : "s") + " at 185 or higher, and your MagnetoShriek cell count cap will be " + cap + "</b>";
				return text;
			}
		},
	//Formations
		Formations: {
			locked: 1,
			allowed: 0,
			tooltip: "The air may be filled with pollution, but your Trimps seem to be getting smarter and a battle technique from what could only be a past life has crept into your memory. This would probably be a good opportunity to teach it to your Trimps. Once researched, you will be able to enter the '堆叠阵型'. This can be toggled to increase your Trimps' health by 4x, but reduce block and attack by half.",
			done: 0,
			cost: {
				resources: {
					science: 10000000000,
					food: 100000000000
				}
			},
			fire: function () {
				unlockFormation("start");
			}
		},
		Dominance: {
			locked: 1,
			allowed: 0,
			tooltip: "Another formation has crept back into your memory. Where are these coming from? Who are you? Who cares, this one will allow your Trimps to deal 4x damage at the cost of half health and block.",
			done: 0,
			cost: {
				resources: {
					science: 20000000000,
					food: 200000000000
				}
			},
			fire: function () {
				unlockFormation(2);
			}
		},
		Barrier: {
			locked: 1,
			allowed: 0,
			tooltip: "Woah, you just remembered that all Trimps lifting their shields in the same direction at the same time can produce a nice protecting wall. Seems like common sense now that you thought of it. This formation increases block by 4x and cuts the amount of block that enemies can pierce by 50%, at the cost of half attack and health.",
			done: 0,
			cost: {
				resources: {
					science: 40000000000,
					food: 400000000000
				}
			},
			fire: function () {
				unlockFormation(3);
			}
		},
	//Jobs, in order of unlock
		Miners: {
			locked: 1,
			tooltip: "你真的不喜欢读书,但这似乎比起自己挖掘要好。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					wood: 300,
					metal: 100
				}
			},
			fire: function () {
				unlockJob("Miner");
			}
		},
		Scientists: {
			locked: 1,
			tooltip: "你真的不相信,但这本书表明脆皮们可以更聪明。好好读一下去了解了解吧。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 100,
					food: 350
				}
			},
			fire: function () {
				unlockJob("Scientist");
			}
		},
		Trainers: {
			locked: 1,
			tooltip: "这本书是所有的高层管理的秘密。 训练你的脆皮去训练其他脆皮。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 500,
					food: 1000
				}
			},
			fire: function () {
				unlockJob("Trainer");
			}
		},
		Explorers: {
			locked: 1,
			tooltip: "这本书能让你雇佣一些脆皮去为你找到地图碎片！",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50000,
					fragments: 5
				}
			},
			fire: function () {
				unlockJob("Explorer");
				fadeIn("fragmentsPs", 10);
			}
		},
		Magmamancers: {
			locked: 1,
			tooltip: "Your scientists think they can study this book to figure out how to train Trimps as Magmamancers. According to your scientists, according to legend, Magmamancers require gems instead of food as sustainance and can increase the rate of Metal gathering more and more as they stay on the same zone.",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50e15,
					gems: 1e60
				}
			},
			fire: function () {
				unlockJob("Magmamancer");
			}
		},
	//Housing upgrades, in order of unlock
		UberHut: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个小屋的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 30000,
						food: 200000,
						metal: 100000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Hut.owned) * game.buildings.Hut.increase.by);
					game.buildings.Hut.increase.by *= 2;
				}
			},
		UberHouse: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个房子的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 300000,
						food: 2000000,
						metal: 1000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.House.owned) * game.buildings.House.increase.by);
					game.buildings.House.increase.by *= 2;
				}
			},
		UberMansion: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个大厦的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 3000000,
						food: 20000000,
						metal: 10000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Mansion.owned) * game.buildings.Mansion.increase.by);
					game.buildings.Mansion.increase.by *= 2;
				}
			},
		UberHotel: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个旅馆的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 30000000,
						food: 200000000,
						metal: 100000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Hotel.owned) * game.buildings.Hotel.increase.by);
					game.buildings.Hotel.increase.by *= 2;
				}
			},
		UberResort: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个娱乐场的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 300000000,
						food: 2000000000,
						metal: 1000000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Resort.owned) * game.buildings.Resort.increase.by);
					game.buildings.Resort.increase.by *= 2;
				}
			},
	//Equipment Prestiges
		Supershield: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的盾牌。 这将使您的盾牌达到1级，并大大增加进一步升级的成本，但会大大增加统计数据。@",
			done: 0,
			cost: {
				resources: {
					science: [1200, 1.7],
					gems: [40, 3]
				}
			},
			prestiges: "Shield",
			fire: function () {
				prestigeEquipment("Shield");
			}
		},
		Dagadder: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的匕首。这将使你的匕首达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1250, 1.7],
					gems: [60, 3]
				}
			},
			prestiges: "Dagger",
			fire: function () {
				prestigeEquipment("Dagger");
			}
		},
		Bootboost: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的靴子。这将使您的靴子达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1300, 1.7],
					gems: [70, 3]
				}
			},
			prestiges: "Boots",
			fire: function () {
				prestigeEquipment("Boots");
			}
		},
		Megamace: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的狼牙棒。这将使你的狼牙棒达到1级，并大大增加进一步升级的成本，但会大大增加攻击的伤害。@",
			done: 0,
			cost: {
				resources: {
					science: [1400, 1.7],
					gems: [100, 3]
				}
			},
			prestiges: "Mace",
			fire: function () {
				prestigeEquipment("Mace");
			}
		},
		Hellishmet: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的头盔。这将使您的头盔达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1450, 1.7],
					gems: [150, 3]
				}
			},
			prestiges: "Helmet",
			fire: function () {
				prestigeEquipment("Helmet");
			}
		},
		Polierarm: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的长柄武器。这将使你的长柄武器达到1级，并大大增加进一步升级的成本，但会大大增加攻击的伤害。@",
			done: 0,
			cost: {
				resources: {
					science: [1550, 1.7],
					gems: [225, 3]
				}
			},
			prestiges: "Polearm",
			fire: function () {
				prestigeEquipment("Polearm");
			}
		},
		Pantastic: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的裤子。这将使您的裤子达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1600, 1.7],
					gems: [275, 3]
				}
			},
			prestiges: "Pants",
			fire: function () {
				prestigeEquipment("Pants");
			}
		},
		Axeidic: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的战斧。这将使你的斧头达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1700, 1.7],
					gems: [400, 3]
				}
			},
			prestiges: "Battleaxe",
			fire: function () {
				prestigeEquipment("Battleaxe");
			}
		},
		Smoldershoulder: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的护肩。这将使您的护肩达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1750, 1.7],
					gems: [525, 3]
				}
			},
			prestiges: "Shoulderguards",
			fire: function () {
				prestigeEquipment("Shoulderguards");
			}
		},
		Greatersword: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的大剑。这将使你的大剑成为第一级，大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1850, 1.7],
					gems: [650, 3]
				}
			},
			prestiges: "Greatsword",
			fire: function () {
				prestigeEquipment("Greatsword");
			}
		},
		Bestplate: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的胸甲。这将使您的胸甲达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1900, 1.7],
					gems: [800, 3]
				}
			},
			prestiges: "Breastplate",
			fire: function () {
				prestigeEquipment("Breastplate");
			}
		},
		Harmbalest: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的劲弩。 这将使你的劲弩达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1950, 1.7],
					gems: [810, 3]
				}
			},
			prestiges: "Arbalest",
			fire: function () {
				prestigeEquipment("Arbalest");
			}
		},
		GambesOP: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的gambeson。 这将使您的gambeson进入1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [2000, 1.7],
					gems: [820, 3]
				}
			},
			prestiges: "Gambeson",
			fire: function () {
				prestigeEquipment("Gambeson");
			}
		},
	//Repeatable upgrades, in order of frequency (rarest first)
		Potency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教会你如何提升10%的繁殖脆皮的效率。",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.4],
					wood: [4000, 1.4]
				}
			},
			fire: function () {
				//psh
			}
		},
		TrainTacular: { //5
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教会你的训练员们增加5%的防御。",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.7],
					food: [2000, 1.7],
					wood: [3000, 1.7],
					metal: [2000, 1.7]
				}
			},
			fire: function () {
				game.jobs.Trainer.modifier = Math.ceil(game.jobs.Trainer.modifier += 5);
			}
		},
		Efficiency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书教你如何将全部的生产效率变为两倍！万岁！ <b>注意：这只作用于生产率，而不是工人。</b>",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.25],
					food: [400, 1.2],
					wood: [400, 1.2],
					metal: [400, 1.2]
				}
			},
			fire: function () {
				game.global.playerModifier *= 2;
			}
		},
		Speedminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的采矿速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					metal: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Miner.modifier *= 1.25;
			}
		},
		Speedlumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的砍伐速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					wood: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Lumberjack.modifier *= 1.25;
			}
		},
		Speedfarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的耕作速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					food: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 1.25;
			}
		},
		Speedscience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的研究速度！",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.4]
				}
			},
			fire: function () {
				game.jobs.Scientist.modifier *= 1.25;
			}
		},
		Speedexplorer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何更有效地探索,  碎片生产加速300%！",
			done: 0,
			cost: {
				resources: {
					science: [200, 28.9],
					fragments: [500, 4]
				}
			},
			fire: function () {
				game.jobs.Explorer.modifier *= 4;
			}
		},
		Megaminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何挖矿加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					metal: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Miner.modifier *= amt;
			}
		},
		Megalumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何让脆皮伐木加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					wood: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Lumberjack.modifier *= amt;
			}
		},
		Megafarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何让脆皮种植加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					food: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Farmer.modifier *= amt;
			}
		},
		Megascience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何更快的研究科学的  ?%  东西！",
			done: 0,
			cost: {
				resources: {
					science: [100000000000, 1.6]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Scientist.modifier *= amt;
			}
		},
	},

	triggers: {
		Trap: {
			done: 0,
			message: "也许这里能捕获到一些美味多肉的东西。",
			cost: {
				resources: {
					food: 5,
					wood: 5
				}
			},
			fire: function () {
				fadeIn("buyCol", 10);
				unlockBuilding("Trap");
			}
		},
		wood: {
			done: 0,
			message: "你需要一些木材来建造东西...",
			cost: {
				resources: {
					food: 5
				}
			},
			fire: function () {
				fadeIn("wood", 10);

			}
		},
		Barn: {
			done: 0,
			message: "食品存储的很满了,也许你应该开始考虑建一个谷仓。",
			cost: {
				resources: {
					food: 350
				}
			},
			fire: function () {
				unlockBuilding("Barn");
			}
		},
		Shed: {
			done: 0,
			message: "一个棚子能让你存储更多的木头。",
			cost: {
				resources: {
					wood: 350
				}
			},
			fire: function () {
				unlockBuilding("Shed");
			}
		},
		Forge: {
			done: 0,
			message: "一个熔炼能让你存储更多的金属。",
			cost: {
				resources: {
					metal: 350
				}
			},
			fire: function () {
				unlockBuilding("Forge");
			}
		},
		jobs: {
			done: 0,
			message: "陷阱里抓住了一个奇怪的小鬼似得小生物。 一个脆皮，你决定这么称呼它。既然你是如此富有创造力，那你也可以训练这个脆皮来帮你的忙。",
			cost: {
				resources: {
					trimps: 1
				}
			},
			fire: function () {
				fadeIn("jobsTab", 10);
				document.getElementById("trimpTitle").innerHTML = "脆皮";
				document.getElementById("empHide").style.visibility = "visible";
				unlockJob("Farmer");
				document.getElementById("jobsTitleDiv").style.display = "block";
				game.global.menu.jobs = true;
			}
		},
		Lumberjack: {
			done: 0,
			cost: {
				jobs: {
					Farmer: 1
				}
			},
			fire: function () {
				unlockJob("Lumberjack");
			}
		},
		upgrades: {
			done: 0,
			message: "这个星球感觉起来如此熟悉，又那么陌生。也许，是时候开始研究一些东西了。",
			cost: {
				resources: {
					trimps: 2,
					food: 15
				}
			},
			fire: function () {
				fadeIn("upgradesTab", 10);
				fadeIn("science", 10);
				document.getElementById("upgradesTitleDiv").style.display = "block";
				game.global.menu.upgrades = true;
			}
		},
		Battle: {
			done: 0,
			once: function() {document.getElementById("upgradesTitleSpan").innerHTML = "升级";},
			message: "战争...它到底有什么好处呢？探索或是别的什么吧。",
			cost: {
				special: function () {
					return (game.triggers.upgrades.done > 0 && game.resources.science.owned > 0);
				}
			},
			fire: function () {
				unlockUpgrade('Battle');
				document.getElementById("upgradesTitleSpan").innerHTML = "升级";
			}
		},
		Hut: {
			done: 0,
			message: "看起来并不是所有的脆皮都能适合住你的船。幸运的是，你还记得如何去建造小屋。",
			cost: {
				resources: {
					trimps: 8
				}
			},
			fire: function () {
				unlockBuilding('Hut');
			}
		},
		House: {
			done: 0,
			message: "这里开始变得非常拥挤了，也许你应该开始建造一些更好的住房。",
			cost: {
				resources: {
					trimps: 65
				}
			},
			fire: function () {
				unlockBuilding('House');
			}
		},
		breeding: {
			done: 0,
			message: function () {
				if (game.global.challengeActive == "Trapper") return "你的脆皮看起来很无聊。";
				else return "很明显， 这些脆皮不工作的时候就在进行繁殖活动（#_#！）。看起来不像岛国爱情动作片那么美~~ ";
			},
			cost: {
				special: function () {
					return (game.resources.trimps.owned - game.resources.trimps.employed >= 2) ? true : false;
				}
			},
			fire: function () {
				document.getElementById("unempHide").style.visibility = "visible";
			}
		}
	},
	unlocks: {
		imps: {
			Goblimp: false,
			Feyimp: false,
			Flutimp: false,
			Tauntimp: false,
			Venimp: false,
			Whipimp: false,
			Jestimp: false,
			Titimp: false,
			Chronoimp: false,
			Magnimp: false,
		},
		impCount: {
			Goblimp: 0,
			Feyimp: 0,
			Flutimp: 0,
			Tauntimp: 0,
			TauntimpAdded: 0,
			Venimp: 0,
			Whipimp: 0,
			Jestimp: 0,
			Titimp: 0,
			Chronoimp: 0,
			Magnimp: 0
		},
		goldMaps: false,
		quickTrimps: false
	},
	get workspaces () {
		return Math.ceil(this.resources.trimps.realMax() / 2) - this.resources.trimps.employed;
	},
	set workspaces (value) {
		console.warn('工作区现在是一个吸气剂，不需要设置');
		return;
	},
};
return toReturn;
}
var game = newGame();
