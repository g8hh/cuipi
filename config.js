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
		version: 4.814,
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
		runFluffyExp: 0,
		bestFluffyExp: 0,
		runTokens: 0,
		bestTokens: 0,
		genPaused: false,
		canMapAtZone: false,
		capTrimp: false,
		lastSoldierSentAt: new Date().getTime(),
		supervisionSetting: 100,
		canScryCache: false,
		waitToScry: false,
		waitToScryMaps: false,
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
			food: {average:0, accumulator: 0},
			wood: {average:0, accumulator: 0},
			metal: {average:0, accumulator: 0},
			gems: {average:0, accumulator: 0},
			fragments: {average:0, accumulator: 0},
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
				return "当这个赋权激活时，你的脆皮的每次成功攻击会给敌人叠加一个毒药负面效果,使你伤害的<b>" + this.formatModifier(this.getModifier()) + "%</b>叠入毒药效果中。每个回合毒药效果都会扣除敌人相应的生命，直到它死亡。你的脆皮每次攻击都会进一步叠加毒药效果。";
			},
			upgradeDescription: function () {
				return "毒药赋权期间，你每次攻击对敌人叠加的毒药效果增加<b>" + this.formatModifier(this.baseModifier) + "%</b>，现在你的毒药伤害系数是<b>" + this.formatModifier(this.getModifier()) +"%</b>, 下一级毒药伤害系数是<b>" + this.formatModifier(this.getModifier(1)) + "%</b>。";
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
				return "当这个赋权激活时，你的脆皮的每次成功攻击会对敌人叠加一个负面效果，导致大风刮来，并将额外的资源砸到你的手中。每层风效果增加<b>" + this.formatModifier(this.getModifier()) + "%所有来源获得的氦，</b>并增加<b>" + this.formatModifier(this.getModifier() * 10) + "%所有其他资源</b>，直到敌人死亡（最多200层）。氦气奖励不适用于地图。";
			},
			upgradeDescription: function () {
				return "在风赋权激活时，每层风效果多增加<b>" + this.formatModifier(this.baseModifier) + "%</b>的氦收益和<b>" + this.formatModifier(this.baseModifier * 10) + "%</b>的氦以外的资源收益。 你现在的氦奖励是每层效果增加<b>" + this.formatModifier(this.getModifier()) + "%</b>, 下一级的氦奖励是每层效果增加<b>" + this.formatModifier(this.getModifier(1)) + "%</b>。氦以外的资源的奖励总是氦的奖励的10倍，而氦的奖励在地图中不生效。";
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
				return "当这个赋权活动时，你的脆皮的每次成功攻击都会使敌人被冰冻，冰冻的负面效果会叠加，每层冰冻效果会减少敌人<b>" + this.formatModifier(this.getModifier()) + "%</b>的伤害(叠乘) ，同时增加你的脆皮对敌人造成的伤害(增加的百分比等于敌人减少的百分比，收益递减，最大100%)，直到敌人死亡。";
			},
			upgradeDescription: function () {
				return "每一层冰冻效果使敌人造成的伤害额外降低<b>" + this.formatModifier(1 - this.baseModifier) + "%</b> (复合)，并增加你的脆皮相同百分比的伤害加成。(收益递减，最大100%). 你现在的冰冻效果是每层 <b>" + this.formatModifier(this.getModifier()) + "%</b>, 下一级的冰冻效果是每层 <b>" + this.formatModifier(this.getModifier(1)) + "%</b>。";
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
	singleRunBonuses: {
		goldMaps: {
			name: "黄金地图",
			text: "+100%地图战利品",
			cost: 20,
			confirmation: "你正在花费20骨头购买黄金地图。<b>在你的下一轮前</b>，你现在的和未来的所有地图战利品获得增加100%。这是你想要的吗？", 
			owned: false,
			fire: function () {
				game.unlocks.goldMaps = true;
				refreshMaps();
			}
		},
		quickTrimps: {
			name: "快速脆皮",
			text: "+100%繁殖速度",
			cost: 20,
			confirmation: "你正在花费20骨头购买快速脆皮。这个将会<b>在你的下一轮前</b>使你的脆皮繁殖速度翻倍。这是你想要的吗？",
			owned: false,
			fire: function () {
				swapClass("psColor", "psColorOrange", document.getElementById("trimpsPs"));
			},
			reset: function () {
				swapClass("psColor", "psColorWhite", document.getElementById("trimpsPs"));
			},
			load: function () {
				this.fire();
			}
		},
		sharpTrimps: {
			name: "锋利脆皮",
			text: "+50%脆皮伤害",
			cost: 25,
			confirmation: "你正在花费25骨头购买锋利脆皮。这个将会<b>在你的下一轮前</b>使你的脆皮增加50%的伤害。这是你想要的吗？",
			owned: false,
			fire: function () {
				swapClass("attackColor", "attackColorOrange", document.getElementById("goodGuyAttack"));
			},
			reset: function () {
				swapClass("attackColor", "attackColorNormal", document.getElementById("goodGuyAttack"));
			},
			load: function () {
				this.fire();
			}

		},
		heliumy: {
			name: "高氦",
			text: "+25%氦",
			cost: 100,
			confirmation: "你正要花费100骨头购买高氦。这个将会<b>在你的下一轮前</b>使你从所有来源获得的氦增加25%。这是你想要的吗？?",
			owned: false,
			fire: function () {
				swapClass("hePhColor", "hePhColorOrange", document.getElementById("heliumPh"));
			},
			reset: function () {
				swapClass("hePhColor", "hePhColorNormal", document.getElementById("heliumPh"));
			},
			load: function () {
				this.fire();
			}
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
				description: "在“骨法商人”或“传家宝”菜单中不弹出确认提示。",
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
						game.global.lootAvgs[item] = {
							average: 0,
							accumulator: 0
						};
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
					var nextZone = "";
					if (this.setZone.length == 1) nextZone = this.setZone;
					else {
						for (var x = 0; x < this.setZone.length; x++){
							if (game.global.world < this.setZone[x]){
								nextZone = this.setZone[x];
								if (x < this.setZone.length - 1) nextZone += "+";
								break;
							}
						}
						if (nextZone == "") 
							nextZone = this.setZone[0];
					}
					return ["No Map At Zone", "Map At Z" + nextZone];
				},
				setZone: [200],
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
			showHeirloomAnimations: {
				enabled: 1,
				extraTags: "performance",
				description: "Enable/Disable animations on Heirlooms.",
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 499);
				},
				titles: ["No Heirloom Animations", "Heirloom Animations"]
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
						game.global.lastSoldierSentAt += dif;
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
			description: "<p>自动获取每一层仿生仙境(BW)地图当你超过BW的层数。如果您已经错过了本次运行的任何一个BW，或者您到达一个比您以前清除的任何BW都高的区域，则将无效。</p><p>另外,给所有当前和未来的副本仿生仙境的快速攻击的特殊的修饰符。</p>",
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
			description: "自动解锁房子、大厦、旅馆、娱乐场、出入口、虫洞和集电极，当通过他们降落的区域时。",
			name: "Home Detector",
			tier: 1,
			purchased: false,
			icon: "home"
		},
		turkimp: {
			description: "增加每一个Turkimp的奖励时间5分钟，最大奖励时间增加10分钟。",
			name: "Turkimp Tamer I",
			tier: 1,
			purchased: false,
			icon: "*spoon-knife"
		},
		voidPower: {
			description: "你的脆皮在虚空地图中会获得15%的额外攻击力和血量。",
			name: "Void Power I",
			tier: 2,
			purchased: false,
			icon: "*heart5"
		},
		pierce: {
			description: "减少敌人25%的穿刺伤害。",
			name: "Metallic Coat",
			tier: 2,
			purchased: false,
			icon: "tint"
		},
		headstart: {
			description: "腐败提早5个区域开始，即区域176。",
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
			description: "找到Turkimp的机会增加33%。",
			name: "Turkimp Tamer II",
			tier: 2,
			purchased: false,
			requires: "turkimp",
			icon: "*spoon-knife"
		},
		voidPower2: {
			description: "你的脆皮在虚空地图中会再获得20%的额外攻击力和血量。",
			name: "Void Power II",
			tier: 3,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower"
		},
		mapLoot: {
			description: "降低低地图掠夺惩罚1级，这允许你在当前世界层数的地图或当前世界层数-1的地图中获得相同数量的战利品。",
			name: "Map Reducer I",
			tier: 3,
			purchased: false,
			icon: "*gift2"
		},
		headstart2: {
			description: "腐败提早10个区域开始，即区域166。",
			name: "Headstart II",
			tier: 3,
			purchased: false,
			icon: "road",
			requires: "headstart"
		},
		doubleBuild: {
			description: "在建筑队列中的多个建筑将被一次构造两个。",
			name: "Double Build",
			tier: 3,
			purchased: false,
			icon: "*hammer"
		},
		skeletimp: {
			description: "Skeletimp进化为Megaskeletimp的概率变为原来的两倍。",
			name: "King of Bones I",
			tier: 3,
			purchased: false,
			icon: "italic",
		},
		hyperspeed: {
			description: "减少攻击间隔100ms。",
			name: "Hyperspeed I",
			tier: 4,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith: {
			get description () {
				return "每个清除的世界区域将直接掉落所有该等级的装备升级。直到区域" + Math.floor((game.global.highestLevelCleared + 1) / 2) + "（你最高区域的50％）";
			},
			name: "Blacksmithery I",
			tier: 4,
			purchased: false,
			icon: "*hammer2"
		},
		headstart3: {
			description: "腐败提早15个区域开始，即区域151。",
			name: "Headstart III",
			tier: 4,
			purchased: false,
			icon: "road",
			requires: "headstart2"
		},
		autoStructure: {
			get description(){
				 var text = "解锁自动建筑工具，允许您自动购买建筑。此外，所有的住房和战斗区域奖金将伴随准备好战斗的Trimps进入";
				 if (game.global.highestLevelCleared >= 229) text += " (不包括维度发生器)";
				 text += "!";
				 return text;
			},
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
			description: "增加Turkimp的奖励25%, 从 50% 到 75%.",
			name: "Turkimp Tamer III",
			tier: 4,
			purchased: false,
			requires: "turkimp2",
			icon: "*spoon-knife"
		},
		hyperspeed2: {
			get description(){
				return "减少战斗时间 100ms 直到 区域Z" + Math.floor((game.global.highestLevelCleared + 1) * 0.5) + "(你最高区域的50％)";
			},
			name: "Hyperspeed II",
			tier: 5,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith2: {
			get description () {
				return "每个清除的世界区域将直接掉落所有该等级的装备升级。直到区域" + Math.floor((game.global.highestLevelCleared + 1) * 0.75) + " （你最高区域的75％）";
			},
			name: "Blacksmithery II",
			requires: "blacksmith",
			tier: 5,
			purchased: false,
			icon: "*hammer2"
		},
		magmaFlow: {
			description: "增加两个额外的岩浆房间在任何已经有岩浆的区域。",
			name: "Magma Flow",
			tier: 5,
			purchased: false,
			icon: "*fire",
		},
		quickGen: {
			description: "增加维度发生器生产房子的速度50%.",
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
				return "每个清除的世界区域将直接掉落所有该等级的装备升级。直到区域" + Math.floor((game.global.highestLevelCleared + 1) * 0.9) + "（你最高区域的90％）";
			},
			name: "Blacksmithery III",
			requires: "blacksmith2",
			tier: 6,
			purchased: false,
			icon: "*hammer2"
		},
		nature: {
			description: "将您的自然符记转换比率从10：5提高到10：6",
			name: "Natural Diplomacy I",
			tier: 6,
			purchased: false,
			icon: "*tree3"
		},
		liquification: {
			get description () {
				var text = (this.purchased) ? "这个精通将增加" : "这个精通将增加";
				var totalSpires = game.global.spiresCompleted;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "Y";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = "将你的Fluffy的特殊能力视为完成了半个尖塔。";
					else fluffyText = "将你的Fluffy的两个特殊能力视为完成了一个尖塔。"
					totalSpires += (fluffyCount * 0.5);
				}
				return "将你的液化奖励提高5％，就好像你已经完成了1个额外的尖塔。" + fluffyText + " 您目前已完成了相当于 " + totalSpires + " 个尖塔" + ((totalSpires == 1) ? "" : "") + ", 将基于你所达到的最高区域(Z" + (game.global.highestLevelCleared +1) + ")，液化其中 " + (totalSpires * 5) + "% 的区域 (Z" + Math.floor((totalSpires / 20) * (game.global.highestLevelCleared + 1)) + ")。 " + text + "你的液化奖励到 " + ((totalSpires + 1) * 5) + "%的最高区域（Z" + Math.floor(((totalSpires + 1) / 20) * (game.global.highestLevelCleared + 1)) + "）。";
			},
			name: "Liquification I",
			tier: 6,
			purchased: false,
			icon: "*water"
		},
		turkimp4: {
			description: "学习发展自己的Turkimp，增加奖励+ 100％，并永久提供奖金。",
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
			description: "现在，巫师将会增加同样数量的攻击。 此外，开始每个区域后视为你已在本区域停留5分钟。",
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
			description: "将您的自然符记转换比率从10：6增加到10：8",
			name: "Natural Diplomacy II",
			tier: 7,
			purchased: false,
			requires: "nature",
			icon: "*tree3"
		},
		patience: {
			description: "预期现在可以达到45层。",
			name: "Patience",
			tier: 7,
			purchased: false,
			icon: "*clock2"
		},
		stillRowing: {
			description: "增肌50%的尖塔额外掉落奖励，从2％每行的额外奖励增加到3％。",
			name: "Still Rowing I",
			tier: 7,
			purchased: false,
			icon: "align-justify"
		},
		voidSpecial: {
			get description() {
				var text = "通过传送门时，上次运行每清除100个区域，你将获得1个免费的虚空地图。 来自虚空地图的氦气增加上次完成区域数*0.25％。";
				var amt = (game.global.lastPortal * 0.0025);
				text += " 你在上一个传送门中到达了 Z" + game.global.lastPortal + "，";
				if (this.purchased) text += " 获得了奖励 ";
				else text += " 这将为你本次的虚空地图获得 ";
				text +=  prettify(amt * 100) + "% 额外的氦气。"
				return text;
			},
			name: "Void Specialization",
			tier: 8,
			purchased: false,
			icon: "*feed"
		},
		healthStrength: {
			description: "你的脆皮根据当前区域内的健康细胞个数增加细胞数*15％的攻击力。",
			name: "Strength in Health",
			tier: 8,
			purchased: false,
			icon: "*aid-kit"
		},
		nature3: {
			description: "增加5个%自然赋权传递率而不增加成本。",
			name: "Natural Diplomacy III",
			tier: 8,
			purchased: false,
			requires: "nature2",
			icon: "*tree3"
		},
		liquification2: {
			get description () {
				var text = (this.purchased) ? "这个精通将增加" : "这个精通将增加";
				var totalSpires = game.global.spiresCompleted;
				if (game.talents.liquification.purchased) totalSpires++;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = "将你的Fluffy的特殊能力视为完成了半个尖塔。";
					else fluffyText += " 将你的Fluffy的两个特殊能力视为完成了一个尖塔。"
					totalSpires += (fluffyCount * 0.5);
				}
				return "将你的液化奖励提高5％，就好像你已经完成了1个额外的尖塔。" + fluffyText + "你已经完成了相当于 " + totalSpires + " 个尖塔" + ((totalSpires == 1) ? "" : "") + ", 将基于你所达到的最高区域(Z" + (game.global.highestLevelCleared +1) + ")，液化其中 " + (totalSpires * 5) + "% 的区域 (Z" + Math.floor((totalSpires / 20) * (game.global.highestLevelCleared + 1)) + ")。 " + text + "你的液化奖励到 " + ((totalSpires + 1) * 5) + "%的最高区域（Z" + Math.floor(((totalSpires + 1) / 20) * (game.global.highestLevelCleared + 1)) + "）。";
			},
			name: "Liquification II",
			tier: 8,
			requires: "liquification",
			purchased: false,
			icon: "*water"
		},
		stillRowing2: {
			description: "你的脆皮现在将获得等同于尖塔额外掉落奖励2倍的攻击加成。",
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
			tooltip: "运用你的技能从尖塔打捞物品，每级增加0.25%的战利品。这种额外福利的价格会增加，每一级的价格将比上一等级高出10000氦。",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Carpentry_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "你已经学会了更加客观地看待不再神秘的建筑设计，每级增加0.25%的居住空间。这将在木工I的基础上面成倍增加，这种额外福利的价格会增加，每一级的价格将比上一等级高出10000氦。",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Motivation_II: {
			level: 0,
			locked: true,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "腐败和即将到来的厄运是让你更加努力工作的巨大动力!每升一级增加脆皮的收集速度1%。这种额外福利的价格会增加，每一级的价格将比上一等级高出1000氦。",
			additive: true,
			additiveInc: 1000,
			modifier: 0.01
		},
		Power_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "你在渴望回家的欲望中找到了力量。让你的脆皮们一直听你谈论它，激怒他们，使他们的伤害每等级增加1%。这种额外福利的价格会增加，每一级的价格将比上一等级高出500氦。",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Toughness_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "当你记得你从哪里来的时候，你会感到更加踏实。将你的韧性扩展给你的脆皮，每级增加1%的生命。这种额外福利的价格会增加，每一级的价格将比上一等级高出500氦。",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Capable: {
			level: 0,
			locked: true,
			priceBase: 1e8,
			heliumSpent: 0,
			tooltip: "你可以在Fluffy中感受到巨大的力量，但他需要一些训练。 能力的每个级别都允许Fluffy获得1级的经验。 降低能力等级将暂时移除Fluffy的等级和经验以及相关的任何奖励，但所有的经验都将被保存，直到重新提升能力等级为止。 能力的每个级别比上一级贵10倍，购买第一级将允许Fluffy陪你一起传过传送门。",
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
				return "蓬松需要更多的氦气！ 每个级别的狡猾将增加 " + Math.round(this.modifier * 100) + "%经验(线性)。"
			}
		},
		Curious: {
			level: 0,
			locked: true,
			modifier: 30,
			priceBase: 1e14,
			heliumSpent: 0,
			get tooltip() {
				return "Fluffy 进步中, 但他进步的有点慢。 每一级的好奇都将加速Fluffy的发展。每级增加" + this.modifier + " 点每个区域的基础经验。"
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
			tooltip: "经历了对地图的限制教会了你如何变得更足智多谋。每级都能让你在购买所有建筑物时 <b>比当前的成本</b> 少花5%的资源。"
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
			tooltip: "通过利用研究协同作战的敌人时所获得的知识，每级协作升级所需的脆皮数量减少<b>当前数量的</b>2%(每级叠乘0.98),同时保持协作的奖励效果不变。"
		},
		Siphonology: {
			level: 0,
			locked: true,
			max: 3,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "使用替代维度中发现的策略从较低级别的地图虹吸地图伤害加成。 对于虹吸学的每个级别，您将可以从比当前区域低一级的地图获得伤害加成。 最多3个级别。",
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
				return "运用你对脆皮了解的经验，基于一支战斗队生产需要的时间来增加脆皮的伤害。每升一级，每秒繁殖时间增加2%伤害，上限为" + time + "秒。最高10级。"
			}
		},
		Resilience: {
			level: 0,
			locked: true,
			modifier: 0.1,
			priceBase: 100,
			heliumSpent: 0,
			tooltip: "使用你在脆皮挑战中所获取的技能，每级脆皮总生命增长10%（<b>复合</b>）。"
		},
		Meditation: {
			level: 0,
			locked: true,
			modifier: 1,
			priceBase: 75,
			heliumSpent: 0,
			max: 7,
			tooltip: "你在挑战中的经历教会了你从容不迫。每级冥想将让你在当前区域内每过10分钟，脆皮的收集速度增加1%，最多叠1小时，离线时仍然生效。这个加成将会在打通当前区域后重置。最高7级。",
			getBonusPercent: function (justStacks) {
				var timeOnZone = getGameTime() - game.global.zoneStarted;
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
			description: "调整传送门把你带到另一个现实，那里的矿工的概念不存在，迫使自己变得节俭与设备各具特色的战略。如果你在没有削弱挑战的情况下完成了愤怒维度，矿工将重新解锁。",
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
			description: "调整传送门，让你进入另一个现实，在那里脆皮越来越强大，迫使自己想出一个方法来建造更大的房屋。 你的脆皮会多收集50％的资源，但你的住房将少50％的脆皮。 如果您完成“愤怒维度”，你的数据将恢复正常。",
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
			description: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一层“不平衡”。 每当地图上的敌人被杀时，你将失去一层不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。在这个挑战激活的情况下，完成 <b>40区</b> 将额外获得100％的氦气。 这个挑战是可重复的！",
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
					game.global.soldierHealthMax /= 0.99;
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
			squaredDescription: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一层“不平衡”。 每当地图上的敌人被杀时，你将失去一层不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。",
			highestStacks: 0,
			fireAbandon: true,
			heldHelium: 0,
			heliumThrough: 40,
			unlockString: "到达区域 40"
		},
		Scientist: {
			get description (){
				var is5 = (game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4);
				return "尝试调整传送门来 " + ((is5) ? "从之前的维度中保留一些好处" : "保留一些资源") + "。在你完成这个挑战前，你开局便有<b>_</b>科学，但是不能研究或是雇佣科学家" + ((is5) ? " 并且<b style='color: maroon'>所有敌人的伤害都会提高10倍</b>" : "") + "。 明智地选择你的升级吧！ 在挑战中清除 <b>'障碍区' (11)</b> 能让你每次传送 * 。"
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
					document.getElementById("autoPrestigeBtn").style.display = "block";
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
			description: "调整传送门，来把你带到另一个现实当中，在那里有更多的混乱，将帮助你学会创造一个和平的地方。你将获得10x的战利品(不包括氦)，10x的收集和5x的脆皮攻击，但是每一秒都会积累一层衰变。每层的衰变都会减少战利品、收集以及脆皮攻击当前值的0.5%。当你杀死Blimp(区域boss)时积累的衰变会重置，并且衰变最高叠999层。进行本挑战完成 <b>区域55</b>能让你在创造地图时选择花园地图，未来创建的所有花园地图将获得+25%的战利品。",
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
			description: "调整传送门，让你进入一个维度，如果有超过1只脆皮在同时战斗，他们会爆炸。 你将不能学习协作， 但是完成 <b>'障碍区' (11)</b> 将教会你如何让你的脆皮存活更长时间。",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "调整传送门，让你进入一个维度，如果有超过1只脆皮在同时战斗，他们会爆炸。你将无法学会协作。",
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
				document.getElementById("realTrimpName").innerHTML = "Trimps";
			},
			start: function () {
				document.getElementById("realTrimpName").innerHTML = "Trimp";
			},
			onLoad: function () {
				this.start();
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
			description: "使用你在监狱中找到的钥匙，将你传送至一个极其危险的维度。在这个维度中，敌人会电击你的脆皮，敌人对脆皮的每次攻击会叠加一个减益效果，每层效果会在每个回合对脆皮造成10%最大血量的伤害，并减少脆皮10%的伤害(死亡后效果重置)。清除 <b>'监狱' (80)</b>将会奖励你200%的你所获得的氦(不包括区域80及以上所获得)。这个挑战是可重复的！",
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
			squaredDescription: "使用你在监狱中找到的钥匙，将你传送至一个极其危险的维度。在这个维度中，敌人会电击你的脆皮，敌人对脆皮的每次攻击会叠加一个减益效果，每层效果会在每个回合对脆皮造成10%最大血量的伤害，并减少脆皮10%的伤害(死亡后效果重置)。",
			stacks: 0,
			unlockString: "在区域80清除'监狱'"
		},
		Frugal: {
			description: "为了更好地掌握资源及装备管理，将你自己带入一个装备很便宜，但不能进阶的维度。在本挑战中完成<b>'愤怒维度' (20)</b>将在地图中返还锻造书，并且获得新技能节俭，将永久使50%加成的书变为60%加成的巨型书。",
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
			description: "探索一个通常充满亡灵生物的维度，但这个维度目前正被一种快速移动的病毒所干扰，这种病毒可以使亡灵生物复活。这个维度中所有敌人都有500%的额外攻击，1000%的额外生命值。攻击一个普通的亡灵敌人将使脆皮获得1层亡灵化，每层亡灵化将提高脆皮10%(叠加)的攻击和生命值。最高叠150层，且攻击一个复活敌人将移除5层的亡灵化。完成<b>区域110</b>将奖励你400%的你所获得的氦。这个挑战是可重复的！",
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
			description: "为了了解地图和世界之间的关系，去体验一个基于“电流”维度，但有轻微改动的维度。一切规则都与电流挑战相同，但是所有地图的难度额外增加300%清除<b>'监狱' (80)</b>将使世界复原。你<b>将会</b>获得电流挑战中的氦奖励。",
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
			description: "为了学习从自然中进化而来的协作模式，造访一个敌人会协作作战，但永不先攻的维度。带有本挑战完成<b>'愤怒维度' (20)</b>将使敌人失去协作效果。",
			completed: false,
			allowSquared: true,
			squaredDescription: "造访一个敌人会协作作战，但永不先攻的维度, 打败他们!",
			replaceSquareFreq: 3,
			replaceSquareThresh: 30,
			filter: function () {
				return (game.global.highestLevelCleared >= 119);
			},
			unlocks: "Coordinated",
			unlockString: "到达区域 120"
		},
		Crushed: {
			description: "到一个大气中氦含量丰富的维度，但是敌人有50%的几率产生+400%伤害的暴击，除非你的格挡和你当前的生命值水平一样高。清理 <b>仿生仙境 (Z125)</b> 将会给你额外的400%的氦，但不包括Z125。这个挑战是可重复的。",
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
			description: "传说中这个维度里居住着极其迅速的敌人，这里还有着一个强大而被遗忘的武器及护甲蓝图。在这个维度中所有敌人都先攻，但是带有本挑战清除<b>区域120</b> 将永久能够制造这些新装备。",
			completed: false,
			allowSquared: true,
			squaredDescription: "传说中这个维度里居住着极其迅速的敌人，你似乎想来这里证明些什么。这个维度中所有敌人都先攻，注意你的生命值！",
			filter: function () {
				return (game.global.highestLevelCleared >= 129);
			},
			unlockString: "到达区域 130"
		},
		Nom: {
			description: "传送到一个敌人喜欢吃脆皮的维度。每当一队脆皮死亡，敌人将会吃掉他们，增加25%(叠乘)的伤害，并恢复最大生命值5%的血量。富含甲烷的大气使你的脆皮每次攻击后血量都会减少最大生命值的5%。但是敌人由于体型过大，行动迟缓，无法先攻。清除<b>区域145</b>将奖励你350%的你所获得的氦。这个挑战是可重复的！",
			completed: false,
			allowSquared: true,
			squaredDescription: "传送到一个敌人觉得脆皮美味，喜欢吃脆皮的维度。每当一队脆皮死亡，敌人将会吃掉他们，并增加25%(叠乘)的伤害以及血量恢复最大生命值的5%。富含甲烷的大气使你的脆皮每次攻击后血量都会减少最大生命值的5%。但是敌人由于体型过大，行动迟缓，无法先攻。",
			heliumMultiplier: 3.5,
			filter: function () {
				return (game.global.highestLevelCleared >= 144);
			},
			heldHelium: 0,
			heliumThrough: 145,
			unlockString: "到达区域 145"
		},
		Mapology: {
			description: "为了学习如何变得更足智多谋，传送至一个地图稀缺的维度。每清除一个世界区域你将会获得一个地图点数，并且每运行一次地图都会失去一个地图点数。带有这个挑战完成<b>区域100</b>将带你返回原来的维度。科学家IV的二倍锻造书奖励在本挑战中无效。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 149);
			},
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "为了学习如何变得更足智多谋，传送至一个地图稀缺的维度。每清除一个世界区域你将会获得一个地图点数，并且每运行一次地图都会失去一个地图点数。<b>在进行本挑战时黑锻炼专精无法使用。</b>",
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
			description: "传送至一个富含氦，同时也有大量毒性敌人的维度。所有的敌人都有5倍攻击和2倍生命值。每次你攻击敌人，你的脆皮都会损失最大生命值5%的血量，而且使毒素释放到大气中，减少你脆皮0.3%(当前的)的繁殖速度，但也会增加所有资源获取0.15%，最多叠1500层。当你清除一个区域后效果重置。带有本挑战完成<b>区域165</b>将奖励你200%的你所获得的氦(不包括区域165及以上所获得)。这个挑战是可重复的！",
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
			squaredDescription: "传送至一个富含氦，同时也有大量毒性敌人的维度。所有的敌人都有5倍攻击和2倍生命值。每次你攻击敌人，你的脆皮都会损失最大生命值5%的血量，而且使毒素释放到大气中，减少你脆皮0.3%(当前的)的繁殖速度，但也会增加所有资源获取0.15%，最多叠1500层。当你清除一个区域后效果重置。",
			unlockString: "到达区域 165"
		},
		Devastation: {
			description: "传送至一个严酷的维度，在这里脆皮会因为前一组人的失误而受到惩罚。如果你的队伍在任何时候被杀，其超额的伤害将会对下一个脆皮队伍产生750%的伤害效果。完成<b>爆炸之心(区域170)</b>将会返回正常的世界。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			lastOverkill: -1,
			unlocks: "Overkill",
			unlockString: "到达区域 170"
		},
		Watch: {
			description: "传送至一个奇怪的维度，在这里既有好事也有坏事。在打通每个世界区域时，都会掉落任何可用的装备升级，同时所有未分配的脆皮都将平均分配给农民、伐木工以及矿工。但是，资源的生产以及从任何来源的掉落都会减半，所有敌人都会增加25%伤害。带有本挑战完成<b>区域180</b>将奖励你200%的你所获得的氦。",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			allowSquared: true,
			squaredDescription: "传送至一个奇怪的维度，在这里既有好事也有坏事。在打通每个世界区域时，都会掉落任何可用的装备升级，同时所有未分配的脆皮都将平均分配给农民、伐木工以及矿工。但是，资源的生产以及从任何来源的掉落都会减半，所有敌人都会增加25%伤害。休息一下让脆皮自己解决问题吧，你知道你也想这样做。",
			heliumMultiplier: 2,
			heldHelium: 0,
			heliumThrough: 180,
			unlockString: "到达区域 180",
			enteredMap: false
		},
		Lead: {
			description: "传送至一个由时间决定难度的维度。在奇数区域将使各种来源的资源加倍，并给脆皮50%的额外攻击。开始一个偶数区域的时候将使敌人获得200层的<b>动量</b>效果。在世界中清除一个房间将会移除一层动量效果，每层效果使敌人伤害和生命值增加4%，穿刺增加0.1%。如果你的脆皮攻击但没有杀死敌人，每层动量效果将会使脆皮将会损失最大生命值0.03%的血量。带有本挑战完成<b>区域180</b>将奖励你300%的你所获得的氦。",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			heliumMultiplier: 3,
			stacks: 0,
			heldHelium: 0,
			allowSquared: true,
			squaredDescription: "传送至一个由时间决定难度的维度。在奇数区域将使各种来源的资源加倍，并给脆皮50%的额外攻击。开始一个奇数区域的时候将使敌人获得200层的<b>动量</b>效果。在世界中清除一个房间将会移除一层动量效果，每层效果使敌人伤害和生命值增加4%，穿刺增加0.1%。如果你的脆皮攻击但没有杀死敌人，每层动量效果将会使脆皮将会损失最大生命值0.03%的血量。",
			heliumThrough: 180,
			unlockString: "到达区域 180",
			fireAbandon: true,
			abandon: function () {
				if (document.getElementById('determinedBuff')) document.getElementById('determinedBuff').style.display = "none";
			}
		},
		Corrupted: {
			get description(){ return "传送至一个敌人有3x攻击，并腐化猖獗的维度，腐化从60区域开始。在这个维度中腐化给予氦，但比正常世界少50%。在区域" + mutations.Corruption.start(true) + "前无序及虚空地图不会因腐化而变得更强，也不会因此有双倍奖励。带有本挑战完成<b>区域190</b>将奖励你200%的你所获得的氦，也会让你立刻回到原来的维度。"},
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
				return "与你最好的判断相反，传送至一个对你非常不友好的维度。Liquimps将无法液化, 敌人有" + num + "x倍的攻击和生命，装备的的价格变为" + num + "倍。每10个区域，敌人的攻击和生命都会再增加10倍。"
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
		gemsCollected: {
			title: "收集宝石",
			value: 0,
			valueTotal: 0,
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			}
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
		trimpsFired: {
			title: "解雇脆皮",
			value: 0,
			valueTotal: 0,
			//This stat was added in 3.6 and the numbers will look bad for a few months.
			//Open maybe 10/21/16ish
			display: function () {return false;}
		},
		spentOnWorms: {
			title: "蠕虫氦气",
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			},
			value: 0,
			valueTotal: 0
		},
		goldenUpgrades: {
			title: "黄金升级",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
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
		totalHelium: {
			title: "Total Helium Earned",
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			valueTotal: function () {
				return game.global.totalHeliumEarned;
			}
		},
		bestHeliumHour: {
			title: "Best He/Hour all Runs",
			display: function () {
				return (this.valueTotal > 0);
			},
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
		totalHeirlooms: { //added from createHeirloom to value
			title: "Heirlooms Found",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
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
			title: "Burned Nurseries",
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
		},
		bestTokens: {
			get title () {
				if (game.global.statsMode == "current") return "Tokens This Run"
				return "Most Tokens";
			},
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			keepHighest: true
		},
		amalgamators: {
			title: "Amalgamators Befriended",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			value: 0,
			valueTotal: 0
		},
		bestFluffyExp: {
			get title () {
				 if (game.global.statsMode == "current") return "Fluffy Exp This Run"
				 return "Best Fluffy Exp"
			},
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			keepHighest: true
		},
		fluffyExpHour: {
			title: "Fluffy Exp/Hr this Run",
			display: function () {
				return (game.stats.bestFluffyExp.value > 0);
			},
			value: function () {
				var timeThisPortal = new Date().getTime() - game.global.portalTime;
				if (timeThisPortal < 1) return 0;
				timeThisPortal /= 3600000;
				return Math.floor(game.stats.bestFluffyExp.value / timeThisPortal);
			}
		},
		bestFluffyExpHourThisRun: {
			title: "Best Fluffy Exp/Hr this Run",
			display: function () {
				return (this.storedValue > 0);
			},
			storedValue: 0,
			atZone: 0,
			value: function () {
				return prettify(game.stats.bestFluffyExpHourThisRun.storedValue) + ", Z:" + game.stats.bestFluffyExpHourThisRun.atZone;
			},
			evaluate: function () { //called from portalTime
				var xpHr = game.stats.fluffyExpHour.value();
				if (xpHr > this.storedValue){
					this.storedValue = xpHr;
					this.atZone = game.global.world;
				}
			},
			onPortal: function () {
				this.storedValue = 0;
				this.atZone = 0;
			},
			noFormat: true
		},
		bestFluffyExpHour: {
			title: "Best Fluffy Exp/Hr",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		highestLevel: {
			title: "Highest Zone",
			valueTotal: function () {
				return game.global.highestLevelCleared + 1;
			}
		},
		totalPortals: {
			title: "Total Portals Used",
			display: function () {
				return (game.global.totalPortals > 0);
			},
			valueTotal: function () {
				return game.global.totalPortals;
			}
		},
		planetsBroken: {
			title: "Planets Broken",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
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
				return "你的维度发生器现在会每个周期产生 " + prettify(scaleNumberForBonusHousing(this.tickAtFuel(burnRate))) + " 最大脆皮数并消耗 " + burnRate + " 燃料 (燃料消耗量)。 购买这个升级会提高维度发生器10%的效率（线性）";
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
				return "你的维度发生器现在可以储存最多 " + prettify(this.modifier) + "点燃料。每次升级会增加 " + prettify(this.baseIncrease) + "点燃料最大库存. 你储存的燃料越多，你一次生产的最大人口越多！";
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
				return "从区域 " + mutations.Magma.start() + "开始，每个岩浆单元格掉落0.2燃料, 之后每个区域可以多掉落0.01燃料. 您的维度发生器目前每个单元格最多能获得" + prettify(this.modifier) + "点燃料, 这意味着在区域 Z" + prettify(maxZone) + "后每单元格掉落不再增加。 购买这个升级会增加每个单元格的燃料掉落上限<b>0.02</b>，达到最大掉落的区域+<b>2</b>。";
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
				var requires = "<p class='" + ((game.permanentGeneratorUpgrades.Hybridization.owned && game.permanentGeneratorUpgrades.Storage.owned) ? "green" : "red") + "'>需要先解锁混合与存储。</p>";
				var text = requires + "<p>超频的第一次升级会解锁解锁维度发生器的超频功能，从而减少燃料浪费，只要你找到的燃料多于可存储的燃料。超频会消耗超出部分的燃料，并产生50%的正常产量的脆皮空间。</p><p>每次升级会降低1％的超频产量惩罚（指数）。</p>";
				if (this.upgrades > 0)
					text += "<p>你现在的超频效率是 " + ((1 - this.modifier) * 100).toFixed(2) + "%。下一等级, 你的超频效率会提高到 " + ((1 - (this.modifier * (1 - this.baseIncrease))) * 100).toFixed(2) + "%。</p>";
				return text;
			}
		}
	},
	permanentGeneratorUpgrades: {
		Hybridization: {
			description: "这个升级解锁将您的维度发生器的混合模式。当燃料低于最大值时，混合模式将自动切换到获取燃料模式，当燃油充满时自动切换到获取岩浆岩模式。",
			cost: 300,
			owned: false
		},
		Storage: {
			description: "解锁额外的燃料库存。 这个存储的大小等于你的普通燃料最大库存，原始最大库存存满后才会存入这个额外库存。这种额外储存的燃油不会增加维度发生器的每周期的脆皮上限产量，但是可以起到很好的填充作用，有效防止燃料的浪费。混合模式将尝试填充一半的额外存储空间。",
			cost: 600,
			owned: false
		},
		Shielding: {
			description: "每次通过传送门以后的岩浆岩损失减少10%（从30%降低到20%）",
			cost: 1050,
			owned: false
		},
		Slowburn: {
			description: "将每轮的燃料消耗降低0.1（从0.5降低到0.4）",
			cost: 1875,
			owned: false
		},
		Supervision: {
			description: "获得通过点击表盘来暂停维度发生器的能力，<b> 并且 </b>添加一个滑块到你的发生器窗口，让你可以降低最大燃料容量并获得对超频更好的控制。 将你的容量降低到你储存的燃料量以下不会浪费任何燃料，但是当超频第一次被触发时，所有超过上限的燃料将被消耗。",
			cost: 2000,
			owned: false,
			onPurchase: function() {
				var elem = document.getElementById('generatorWindow');
				if (elem != null)
					elem.innerHTML = getGeneratorHtml();
				updateGeneratorInfo();
			}
		},
		Simulacrum: {
			description: "现在，所有新生成的维度（最大脆皮数量）都会附带相同数量的脆皮。 慢慢生产脆皮来填充新增加上限的日子已经过去了！",
			cost: 2500,
			owned: false
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
				return "Highest is " + game.global.highestLevelCleared;
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
				return "Currently at " + prettify(this.evaluate());
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
			breakpoints: [1, 10, 40, 100, 500, 1111, 2000, 5000, 10000],
			tiers: [2, 2, 3, 3, 4, 5, 6, 7, 8],
			names: ["Finder", "Gatherer", "Accumulator", "Fancier", "Aficionado", "Devotee", "Connoisseur", "Expert", "Curator"],
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
			breakpoints: [5e5, 1e6, 5e6, 2.5e7, 2e9, 1e12, 1e15, 1e21],
			display: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			tiers: [3, 4, 5, 6, 7, 8, 8, 9],
			names: ["Daytermined", "Daydicated", "Daystiny", "Daylighted", "Daystroyer", "Daylusional", "Dayrailed", "Daypocalyptic"],
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
			breakpoints: [5, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600],
			tiers: [1, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 9],
			names: ["Sitter", "Watchdog", "Nanny", "Caretaker", "Supervisor", "Advocate", "Guardian", "Coddler", "Savior", "Defender", "Trimp Lover", "Righteous"],
			icon: "glyphicon glyphicon-eye-open",
			newStuff: [],
		},
		blockTimed: {
			finished: 0,
			title: "速度: 障碍区",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除障碍区地图用时少于" + number + "，从使用传送门开始计时。";
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 高墙",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除高墙地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 10 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 愤怒维度",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除愤怒维度地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 14 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 末日神殿",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除末日神殿地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 19 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 监狱",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除监狱地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 32 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 仿生仙境",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除仿生仙境地图用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 79);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 爆炸之星",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除爆炸之星地图用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 尖塔",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1300, 900, 500, 200, 175, 60, 2],
			tiers: [6, 6, 6, 7, 7, 7, 8],
			names: ["Spire Trialer", "Spire Rider", "Spire Strider", "Spire Glider", "Spire Flier", "Inspired", "Spire Spirer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire2Timed: {
			finished: 0,
			title: "速度: 尖塔 II",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔II用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 269);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [500, 200, 120, 60, 10],
			tiers: [6, 7, 8, 8, 9],
			names: ["Toxic Treader", "Toxic Trotter", "Toxic Traveller", "Toxic Tempo", "Toxic Teleporter"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire3Timed: {
			finished: 0,
			title: "速度: 尖塔 III",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔III用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 369);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
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
			title: "速度: 尖塔 IV",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔IV用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 469);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [4320, 2880, 1440, 300, 60],
			tiers: [8, 8, 8, 8, 9],
			names: ["Windy Walker", "Gusty Gait", "Breeze Breaker", "Zippy Zephyr", "Temporal Tempest"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		oneOffs: {
			//Turns out this method of handling the feats does NOT scale well... adding stuff to the middle is a nightmare
			finished: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			title: "特殊成就",
			get descriptions () {
				return ["在购买赏金升级前完成愤怒的维度地图", "达到30关使用不超过60氦且中途不修改氦气分配", "同时拥有超过 " + prettify(1e6) + " 个陷阱", "死于单个 Voidsnimp 50次", "完成平衡挑战, 从不超过100层不平衡Debuff", "达到10关，阵亡不超过5个脆皮。", "准确地达到 1337 氦每小时", "在电流挑战中，攻击20次不死亡。", "装备一个magnificent或更高级别的传家宝盾牌和管理人员", "达到60关，阵亡不超过1000个脆皮。", "达到120层，不使用玩家自己研究。", "达到75关，不购买任何房子。", "在高于146的虚空地图找到一个罕见级别的传家宝。", "使用超过 " + prettify(250e3) + " 氦在虫洞上。", "达到60关并使用不高于阶段Ⅲ的装备。", "一击杀死一无序。", "0死亡完成一个超过60级的虚空地图。", "在第5关后不被暴击的情况下完成一个粉碎挑战。", "击杀一个敌人在他100层Nom Buff时（美味挑战）。", "达到60层并且不雇佣任意一个工人。", "完成一个超过99关的区域且中途不低于150层生活buff。", "繁殖一支部队超过10分钟。", "完成毒性挑战，从不超过400层毒性buff。", "拥有每种人口建筑超过100个。", "在60关前超杀每一敌人。", "完成观察挑战，不进入地图且不购买托儿所。", "装备一个Magmatic级别的传家宝盾牌和管理人员。", "将一个世界上的敌人的攻击力降低到低于1。", "完成领导挑战切使用不超过一个千兆站。", "完成腐化挑战并且不使用遗传学家。", "完成一个尖塔并且0死亡。", "超杀一个Omnipotrimp", "战胜一个健康的细胞在超过200层风buff的情况下", "堆叠一个比你的攻击高1000倍的毒药效果", "获取超过2000%的挑战<sup>2</sup> 奖励", "完成一个高于你现在所处地图45级的仿生仙境地图。", "战胜一个尖塔使用不超过 " + prettify(100e6) + " 的氦气且中途不修改氦气分配。", "在Obliterated挑战中击败一个敌人。", "在区域1就找到一个合并者。", "连续10次红色暴击", "完成一个高于你现在所处地图200级的仿生仙境地图。", "在协同挑战中完成尖塔II"];
			},
			tiers: [2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9],
			description: function (number) {
				return this.descriptions[number];
			},
			filters: [19, 29, 29, -1, 39, 59, -1, 79, 124, 59, 119, 74, -1, -1, 59, 59, 59, 124, 144, 59, 109, -1, 164, 59, -1, 179, 229, 245, 179, 189, 199, 229, 300, 300, 65, 169, 199, 424, 349, -1, 324, 299],
			icon: "icomoon icon-flag",
			names: ["Forgot Something", "Underachiever", "Hoarder", "Needs Block", "Underbalanced", "Peacekeeper", "Elite Feat", "Grounded", "Swag", "Workplace Safety", "No Time for That", "Tent City", "Consolation Prize", "Holey", "Shaggy", "One-Hit Wonder", "Survivor", "Thick Skinned", "Great Host", "Unemployment", "Very Sneaky", "Extra Crispy", "Trimp is Poison", "Realtor", "Gotta Go Fast", "Grindless", "Swagmatic", "Brr", "Unsatisfied Customer", "Organic Trimps", "Invincible", "Mighty", "Mother Lode", "Infected", "Challenged", "Bionic Sniper", "Nerfed", "Obliterate", "M'Algamator", "Critical Luck", "Bionic Nuker", "Hypercoordinated"],
			newStuff: []
		}
	},

	heirlooms: { //Basic layout for modifiers. Steps can be set specifically for each modifier, or else default steps will be used
		//NOTE: currentBonus is the only thing that will persist!
		values: [10, 20, 30, 50, 150, 300, 800, 2000, 5000],
		slots: [1,2,2,3,3,4,4,5,5],
		defaultSteps: [[1, 2, 1], [2, 3, 1], [3, 6, 1], [6, 12, 1], [16, 40, 2], [32, 80, 4], [64, 160, 8], [128, 320, 16], [256, 640, 32]],
		rarityNames: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Magnificent', 'Ethereal', 'Magmatic', 'Plagued'],
		rarities:[[7500,2500,-1,-1,-1,-1,-1,-1,-1],[2000,6500,1500,-1,-1,-1,-1,-1,-1],[500,4500,5000,-1,-1,-1,-1,-1,-1],[-1,3200,4300,2500,-1,-1,-1,-1,-1],[-1,1600,3300,5000,100,-1,-1,-1,-1],[-1,820,2400,6500,200,80,-1,-1,-1],[-1,410,1500,7500,400,160,30,-1,-1],[-1,200,600,8000,800,320,80,-1,-1],[-1,-1,-1,7600,1600,640,160,-1,-1],[-1,-1,-1,3500,5000,1200,300,-1,-1],[-1,-1,-1,-1,8000,1570,350,80,-1],[-1,-1,-1,-1,6000,3170,680,150,-1],[-1,-1,-1,-1,3000,5000,1650,350,-1],[-1,-1,-1,-1,-1,4500,3000,2000,500]],
		rarityBreakpoints:[41,60,80,100,125,146,166,181,201,230,300,400,500],
		priceIncrease: [2, 1.5, 1.25, 1.19, 1.15, 1.12, 1.1, 1.06, 1.04],
		canReplaceMods: [true, true, true, true, true, true, true, true, false],
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
			FluffyExp: {
				name: "Fluffy Exp",
				currentBonus: 0,
				steps: [-1, -1, -1, -1, -1, -1, -1, -1, [25, 50, 1]]
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
				steps: [[2,4,1],[4,8,1],[8,16,1],[16,32,2],[32,64,4],[64,128,8],[128,256,16],[256,512,32],[512,1024,64]]
			},
			trainerEfficiency: {
				name: "培训师效率",
				currentBonus: 0,
				steps: [[1,5,1],[5,10,1],[10,20,1],[20,40,2],[40,60,2],[60,80,2],[80,100,2],[100,120,2],[120,140,2]]
			},
			storageSize: {
				name: "存储上限",
				currentBonus: 0,
				steps: [[8,16,4],[16,32,4],[32,64,4],[64,128,4],[128,256,8],[256,512,16],[512,768,16],[768,1024,16],[1024,1280,16]]
			},
			breedSpeed: {
				name: "繁殖速度",
				currentBonus: 0,
				steps: [[1,2,1],[2,5,1],[5,10,1],[10,20,1],[70,100,3],[100,130,3],[130,160,3],[160,190,3],[190,220,3]]
			},
			trimpHealth: {
				name: "脆皮生命",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200,260,6],[260,356,8]]
			},
			trimpAttack: {
				name: "脆皮攻击",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200,260,6],[260,356,8]]
			},
			trimpBlock: {
				name: "脆皮防御",
				currentBonus: 0,
				steps: [[1,2,1],[2,4,1],[4,7,1],[7,10,1],[28,40,1],[48,60,1],[68,80,1],[88,100,1],[108,120,1]]
			},
			critDamage: {
				name: "暴击伤害, 附加的",
				currentBonus: 0,
				steps: [[10,20,5],[20,40,5],[40,60,5],[60,100,5],[100,200,10],[200,300,10],[300,400,10],[400,500,10],[500,650,15]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			critChance: {
				name: "暴击几率, 附加的",
				currentBonus: 0,
				steps: [[0.2,0.6,0.2],[0.6,1.4,0.2],[1.4,2.6,0.2],[2.6,5,0.2],[5,7.4,0.2],[7.4,9.8,0.2],[9.8,12.2,0.2],[12.3,15.9,0.3],[20,30,0.5]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				},
				max: [30,30,30,30,30,30,30,30,100]
			},
			voidMaps: {
				name: "虚空地图掉落几率",
				currentBonus: 0,
				steps: [[0.5,1.5,0.5],[2.5,4,0.5],[5,7,0.5],[8,11,0.5],[12,16,0.5],[17,22,0.5],[24,30,0.5],[32,38,0.5],[40,50,0.25]],
				max: [50,50,50,50,50,50,50,50,80]
			},
			plaguebringer: {
				name: "Plaguebringer",
				specialDescription: function (modifier) {
					return modifier + "% of all non-lethal damage and nature stacks you afflict on your current enemy are copied onto the next enemy. Plaguebringer damage cannot bring an enemy below 5% health, but nature stacks will continue to accumulate."
				},
				currentBonus: 0,
				steps: [-1, -1, -1, -1, -1, -1, -1, -1, [1, 15, 0.5]],
				max: [0,0,0,0,0,0,0,0,75]
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
		w6: "你踩过了Blimp的尸体，它迅速的瘪了下去。你的其中一个脆皮听到这个声音，顿时咯咯地笑了起来。你们穿过了含硫的河流，来到了下一个区域，在这里你们感受到古代知识的存在。进行更好的探索吧。",
		w7: "慢而稳事必成， 除非跟你竞争的人比你更努力。",
		w8: "你住的地方变得越来越拥挤，街道上到处都是脆皮，你感觉自己越来越热。你突然有强烈的愿望想要创建一个地图，尽管你不太确定这会有什么帮助。",
		w9: "你不能排除那种你以前来过这里的感觉，似曾相识。",
		w10: "看起来像另一个顽固的守卫。但很难说，特别是从这么远的地方，不过它看起来比上次那个多了一个头。",
		w11: "你不可阻挡，只要没人阻拦你。 不幸的是，看起来有些东西像是真的想阻止你。",
		w12: "你看到绿光一闪而过吗？奇怪。噢，好吧。",
		w13: "你们的科学家们终于完成了他们关于这世界大小的分析报告。根据报告，它们很确信这个世界是无限大的，但你也很确信它们只是对这项检查厌倦了。",
		w14: "你试图帮助带回脆皮在上一个区域留在地上的一些装备，并且你得到了一个碎片。这个星球正在变得危险起来，保持警惕。",
		w15: "另一天,又是一个顽固的守卫在区域的尽头。",
		w16: "你是认真的吗？又一个守卫！",
		w17: "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
		w18: "似乎有一种奇怪的力量鼓励你继续前行。气氛变得有点，愤怒的感觉。 你的身体的一部分想转身回去,但其他大部分想继续前行。",
		w19: "你回头看看你的王国，你拥有宝石、殖民地和领土。 你在想你的脆皮是不是已经在战斗中牺牲了。 沉思之后，两个字从你的嘴里蹦了出来 “算了”",
		w20: "你感觉到你离你的目标已经不远了。",
		get w22 () {
			if (game.global.challengeActive == "Trimp" && game.jobs.Amalgamator.owned > 0) return toZalgo("你听到一种奇怪的哼唱声，似乎在吸引你靠近它，尽管你也分辨不出它是来源于哪个方向。你能感觉到这个声音是由" + ((game.jobs.Amalgamator.owned == 1) ? "" : "") + "合并者发出的,即使你从来没有听到过这个声音。它既令人不安又迷人，宇宙似乎很讨厌它。", 4, 1);
			return "奇怪，天空似乎变得更暗了。你询问其中一只脆皮现在是几点钟了，但是他都不知道什么是时钟。";
		},
		w25: "你是个叛逆者。宇宙指引你进入那个传送门，但是你执意向前推进。你感觉……自己好像没有来过这里。",
		w27: "似乎你越向前进，你知道的就越少。你仍然有使用传送门的冲动，但是这冲动已经开始减少了。",
		w29: "你的脆皮创造了一首非常吸引人的战歌，这首歌一直萦绕在你的脑海中。但是他们没有一人在下一场战斗中活下来，而且其中大部分的脆皮你也记不得了。生活是真的艰难。",
		w33: "你爬过一座将两个地区分开的大山。天空一片漆黑，远处有闪电划过。这里是一个腐化严重的地方。",
		w35: "你想知道自己一遍遍地重复同样的事情已经多久了。你一定能做些什么来打破这个循环。或许你能对传送门做些修改……",
		w40: "你不禁注意到，脆皮可能是这个星球上唯一不会立刻对外界敌对的生物。你询问附近的一个脆皮士兵，他认为你是什么？然后他有点流口水(迷恋？)。",
		w42: "这个世界看起来如此贫瘠。你觉得自己终于开始走在前面了，但你现在知道，这并不能让你感到舒服。",
		w44: "白天和黑夜似乎都比以前更长了。是时间变慢了吗？啊！你跪倒在地，头痛欲裂，并有一种强烈的想使用传送门的渴望。几分钟后，这个感觉消退了，你也忘记了刚才发生了什么。我们刚才在讨论什么来着？",
		w46: "回头望去，越过的山的痕迹越来越长。这个世界是平的，并充满了敌意。你希望你的脆皮们能更健谈一些。",
		w48: "当脆皮们从Blimp身上提取最后一点氦时，其中一只开始发狂。他跑来跑去，挥舞着他的小胳膊，其中一段时间发出了有趣的声音，吃了一些泥土，然后就开始小睡。你很好奇他是否还正常。是的……可能他还算不错。.",
		w50: "你很久没有在地图上找到蓝图了。你开始怀疑这些东西是从哪里来的。",
		w51: "你的科学家预测在59区域的尽头会有一个异常现象。他们建议你停止做任何你正在做的事情。",
		w53: "随着你越来越接近异常现象，你开始注意到越来越多脆皮的奇怪举动。当多种存在融合在一起时，你记忆中的漏洞开始变得明显。迷茫。",
		w54: "随着你越来越接近异常现象，你开始注意到越来越多脆皮的奇怪举动。当多种存在融合在一起时，你记忆中的漏洞开始变得明显。迷茫。",
		w56: "远处传来一阵响亮的隆隆声，然后一只脆皮伸出双手向你跑来，看起来他有些害怕。他可能只是想要一些武器和护甲！你递给他一些装备，他兴奋地接受了。",
		w58: "一场巨大的风暴已经形成，白昼已经成为一种你几乎忘记的奢侈品。你的脆皮似乎想回家，但你很确定你们应该继续向前走，所以你们继续前行。你已经离异常现象非常近了。",
		w59: "它……就在那里。那个异常现象，就在这个区域的尽头。你能看得见它，但是你不知道你正在看的这个东西究竟是什么。这个……东西……是从哪来的？！这个东西太无序了。",
		w60: "地面瞬间裂开，大量的绿色气体从星球核心向大气中逸出。这个星球给人的感觉不同了。一切事物给人的感觉都不同了。这个宇宙正在变得不稳定，这个星球已经破碎。你都做了些什么？",
		w61: "除了那些死去的脆皮以外，情况还没有变得那么差。",
		get w65 () {
			if (game.global.challengeActive == "Trimp" && game.jobs.Amalgamator.owned > 0) return toZalgo("这个宇宙似乎比你想象中更混乱，但是你的合并者" + ((game.jobs.Amalgamator.owned == 1) ? "" : "们") + "并不介意。你走向" + ((game.jobs.Amalgamator.owned == 1) ? "它" : "其中一只") + "来看的更清楚一点, 但是你发现你距离它更远了。", 2, 2);
			return "你感觉自己比起过去更加强大了。这个宇宙似乎在不断地调整自己来摆脱你，但是你奋起反抗并坚持下去。你如此渺小，却对抗着整个宇宙！";
		},
		w68: "你觉得有一些娱乐活动会很不错，并决定教你的脆皮怎样踢足球。几个小时后，没有任何进展，你非常后悔当时的决定。",
		w70: "无序似乎没有放慢速度。你明白你需要制定一个计划，但你不知道该计划什么。",
		w72: "你相对轻松地击碎并通过了又一个无序，但却感到有些不对劲。一股酸味扑鼻而来，让你感到恶行。你转头去寻找气味的来源。噢，等等，那只是一只脆皮而已。",
		w80: "你上一次制作地图是什么时候了？你有种感觉，你可能应该做张地图了。",
		w82: "哇哦，刚才那场战斗真令人振奋。你决定赏给你的脆皮一些炖无序。那真的很好吃。",
		w83: "现在觉得吃炖无序这个想法可能并不好。有人感觉难受吗？",
		w85: "一段古老而模糊的记忆悄悄地回到你的脑海。你不确定这段记忆是从哪里来的，但你知道这是你的记忆。你记得你在一艘太空船上，从轨道上看着这个行星。当时有个人在你身边！",
		w87: "当你继续和愤怒的源头保持距离的时候，零碎的记忆碎片仍在不断流回。你几乎能在脑海中看到是谁和你一起来到了这里。他们会在哪里……",
		w90: "你决定去让你的科学家发明一种花费巨大的机器来扫描你的大脑，来找回过去的记忆，看看其中是否有有用的信息。他们似乎对这个新项目很兴奋，很快就开始工作了。",
		w92: "你听到科学实验室中传来一阵巨大的爆炸声，你明白大脑扫描仪可能永远也无法完成了。",
		get w95 () {
			if (game.global.challengeActive == "Trimp" && game.jobs.Amalgamator.owned > 0) return toZalgo(((game.jobs.Amalgamator.owned == 1) ? "" : "") + "合并者开始在不同颜色间快速切换。如果它周围的东西没有四分五裂的话，就很迷人了。" + ((game.jobs.Amalgamator.owned == 1) ? "" : ""), 3, 2);
			return "需要一些动力吗?你可以做到的!或许吧。";
		},
		w100: "你在前行中突然停了下来。你想起来了是谁和你一起来到这里，你也记起来了你当时并不喜欢德鲁普提船长把你带到这里。你知道他和你一起降落了。你明白太空船仍在这里。他就在这里。",
		w105: "你叫来你所有的脆皮开了一次会，解释了一下现在的状况。在做了一段非常长的、史诗般的、振奋人心的演讲后，却没有听到任何脆皮们的回应，你明白你的脆皮们是无法理解你的。你有记得这个吗？",
		w106: "你在这个星球上被困多久了？几个月？几十年？多次穿梭时间确实扰乱了你的时间观念。",
		w109: "虽然你不知道你的母星在什么方位，你仍然相信这艘太空船的GPS可以带你回家。也许德鲁普提船长有这艘船的钥匙。你真的想找到他。",
		w115: "你刚刚想起了什么是墨西哥卷。你现在可以自己做墨西哥卷吃了。",
		w120: "你的耐力正快速下降。每个区域都让如此多额外脆皮加入军队让你感觉非常疲惫。为了成功，你需要训练一只更强的、更小型化的部队。",
		w123: "哇，你现在有这么多的脆皮。你没有真正地停下一会来思考有多少脆皮直接被你领导。简单！",
		w125: "你感觉到了金属和装备的气息，突然觉得自己应该打打地图。",
		w130: "你决定坐下来休息一会，突然一个脆皮摇摇摆摆地快速向你走来，手里拿着一张纸。这张纸上潦草地画着一个奇怪的武器和一种护甲，以及看起来像维度坐标一样的数字。你本来还想问他在哪里找到这个的，但看了坐标后你已经了解了。",
		w132: "你一直在想那只脆皮究竟从哪里找到迟钝维度坐标的。为什么那些想帮助你的东西不直接跳出来帮助你呢？",
		w135: "阿，你的背开始疼了。似乎通过传送回溯时间并不能逆转你衰老的过程。难受。",
		w136: "你的一位科学家告诉你，他的团队已经研究出一种治愈疗法，能够治愈一种不存在的疾病。他解释说要防患于未然。你沉重的叹了口气。",
		w137: "你的一位科学家告诉你，在实验室中检测到了一种新疾病的爆发。你去向你的科学家核实情况，很明显他们是为了引起注意而假装的。你沉重的叹了口气。",
		w138: "你看到另一个科学家正全速向你跑来。他迅速地表示他们在区域35附近发现了一个新的维度，被巨大的脆皮所占领。你沉重的叹了口气",
		w139: "另一个科学家过来了。你沉重的叹了口气。他也说了些愚蠢的话。你决定暂时忽略科学家们所说的话。",
		w140: "现在这里确实平静祥和。你看到一只Falcimp在空中转了几个圈。你不会介意拥有翅膀，但总的来说你对自己的种族很满意。",
		w143: "有个科学家围着你跳来跳去，想引起你的注意。天空中没有什么有趣的东西，所以你假装被石头吸引住了。科学家看到你很忙，耐心等待。",
		w145: "你的科学家很吵，想忽视它们可真不容易。你暴躁地问他们到底想要干什么。其中一个科学家表示他们发现了一个有大量额外氦的新维度。你可能会去看看，但你不会告诉他们。",
		w150: "哇哦。这些建筑物变得越来越贵了。或许有个维度能解决这个问题……",
		w153: "你回想起你过去遇到的一个人。在你曾经的生活中。你需要去找一个人。你会让他回来的。",
		w156: "你惊讶地看着一只脆皮抓着他们其中一个奇怪树状的东西摆来摆去。他们似乎变得更聪明了。",
		w157: "你并不那么惊讶地看着一只脆皮试图对着岩石咬一大口。他们并没有变得更聪明。",
		w159: "太阳下山了。你知道，一旦你最终走出这里，你绝对不会忘记这里的风景。当然，除非你刻意忘记。",
		w160: "一小群脆皮发出激动的声音朝你跑来。其中一只走在最前面，自豪地递来一只靴子。这个靴子有点大，但是和你的是一种款式的。这靴子一定是德鲁普提船长的，证明了你在向正确的方向前进。你奖励发现靴子的脆皮一些食物并拍拍它的头，之后便把靴子送到实验室，去寻找更多线索。你很奇怪，他为什么要脱下靴子呢？",
		w163: "你的科学家告诉你，由于一项“重要的”测试，现在有一半的靴子丢在了另一个维度。结果仍然是不确定的。你请他们把剩下一半靴子好好地留在这个维度，他们看起来好像有些失望。",
		w165: "这个是什么?! 你发现了一个小块的绿色金属。你的科学家告诉你这个东西来源于一个带有毒性、但氦量丰富的维度。他们表示如果你想去那里看看，他们可以调节传送门让你到达那个维度。",
		w166: "那个无序看起来是个不错的家伙。",
		w168: "希望太空船没有生锈。",
		w170: "你登上了一座极其巨大的高山的顶峰。你能看到至少有50个区域在你的前方延伸。大约在30个区域远的地方，你可以看到一个巨大的尖塔。它看起来就像你家乡的建筑。你希望这不是海市蜃楼……",
		w172: "周围有种气味，闻起来让你只能想到紫色。这可能不是一个好兆头。",
		w174: "这种奇怪的气味仍然在你周围不断扩大。从风向的变化来看，这个气味来源于尖塔。除了紫色，你仍然无法用其他文字来形容这个味道。",
		w175: "你的脆皮看起来很开心。它们不曾有过目标，现在有一个目标似乎对它们有着正面的影响！你叫来一只脆皮，问他感觉怎么样，然后你才想起来他不能说话。",
		w178: "你仍然不能确定这种气味究竟是什么。你感觉自己略微变强了一些，你担心你的敌人是不是也会这么觉得。",
		get w180 () {
		if (game.global.challengeActive != "Corrupted") return "在清理完之前的区域后，你决定花一天时间登上另一座极其巨大高山的顶峰，去寻找有关这个味道的信息。当你登上顶峰时，你惊得下巴都要掉了下来。你清清楚楚地看到，大量的紫色物质从塔尖的顶端倾泻到大气中。你看到你面前的区域开始改变。这真的不是好事情。";
		return "在清理完之前的区域后，你决定花一天时间登上另一座极其巨大高山的顶峰，去寻找有关这个味道的信息。当你登上顶峰时，你惊得下巴都要掉了下来。你清清楚楚地看到，大量的紫色物质从塔尖的顶端倾泻到大气中。这一定就是导致你一路上遇到的腐败的原因。这个星球似乎已经被严重腐化了，你怀疑你是否已经来得太晚了。";
		},
		w182: "好吧，对于这个已经没有疑问了。某种有智能的东西有意让你和你的脆皮遇到更多的困难。你觉得这代表着你是很重要的，为什么其他的某种东西会冒着毁灭整个星球的危险来阻止你?你的父母会为你自豪的。",
		get w184 () {
				return "越接近尖塔，腐化现象就变得越明显。看起来这个区域有" + mutations.Corruption.cellCount() + "个腐化房间。"
			},
		w185: "你很难准确地用语言表达腐化对这个星球上的生物的影响。它们似乎被剥夺了所有的自然能力，并赋予了某种可以存在于主维度中的，你不知道的力量。 ",
		w187: "这些被腐化的敌人似乎都没有眼睛，所以你想通过从一只旁边快速过去来试试能否躲过它们。当它愤怒地咆哮并跺脚时，你明白这些敌人已经足够强大，不再需要眼睛来观察这个世界。究竟<i>这些东西</i>是什么?!",
		w190: "从你睡觉的洞穴后面传来一阵狂乱而又令人恐惧的声音，使你从梦中惊醒，浑身冒着冷汗。你急忙地跑向噪音的源头，想确保你的脆皮是否还好。当你到那里时，你发现一小部分脆皮试图用一只很小但是非常生气的Snimp来作为乐器。你在耳朵中塞了些沙子，回去睡觉了。",
		w193: "当你靠近尖塔时，腐化继续加剧。你开始习惯了从尖塔中散发出的气味，并且不再介意它了。它让你想起蓝莓。邪恶的蓝莓。",
		w198: "你是如此接近腐化的源头，以至于你都可以尝到它的味道，但它并不好吃。",
		get w205 () {
			if (game.global.spireRows < 10)
				return "当你回头看尖塔时，仍然有很多腐败的东西从塔尖上冒出来，你觉得很失落，但你总有一天会打败他的。";
			return "你并不是很怀念德鲁普提。重点在于，你没有那么多记忆可供你怀念。";
		},
		get w210 () {
			if (game.global.spireRows < 10)
				return "闻起来腐化的程度更高了。那座尖塔对环境肯定不好。";
			return "腐化仍然存在，但是已经没那么有威胁性了。你在这个星球上感到更加平静，并觉得自己在不断修复它。你确信已经没有什么好害怕的了。";
		},
		get w220 () {
			if (game.global.spireRows < 10)
				return "你的脆皮看起来很满足。它们有点希望那座尖塔不要再向他们世界释放紫色的东西了，但是它们没那么介意。";
			return "你的脆皮看起来很满足。你教给他们一些基本的木偶戏，然后它们和被打败的Snimps一起上演了一场精彩的演出。";
		},
		w225: "你在一个凉爽、黑暗的洞穴一觉醒来后全身都是汗。你梦到你非常的热，尽管在过去温度从未成为一个问题。好吧，奇怪的梦和之前的记忆也没有真正表明什么重要的东西，可能没有什么事。",
		w231: "这里非常热。",
		w235: "热量随着你穿过区域而逐渐增强。你的本能告诉你要远离这些热量，但是那样就无法前进了。",
		get w245 () {
			if (game.jobs.Magmamancer.owned > 0)
				return "你的法师们想出一个办法，能够在基地周围的岩浆中制造喷泉。你喜欢这个效果。";
			return "你记得法师们是非常酷的。";
		},
		w251: "你和气地请求那只Omnipotrimp在你杀死它后不要自爆，但是它还是自爆了。真是粗鲁。",
		w255: "在你不断穿过这些区域的途中，你的脆皮在不断失去力量，但是它们精神上似乎适应得很好。似乎每一代脆皮都越来越喜欢高温了。",
		w265: "你决心修复这个星球，尽管你觉得还不可能。 无论哪种方式，你都知道你正在获得力量，你的脆皮会跟随你。",
		w270: "这个星球真是大得吓人。你感觉你在这个星球上行走了许多年，却还没有看完这个星球上所有的东西。这附近不应该有座尖塔或什么东西的吗？",
		w277: "又能闻到一种紫色的东西了。你必须接近另一座尖塔。",
		get w283() {
			var soldiers = game.resources.trimps.getCurrentSend();
			return "在一个无聊的夜晚，你们正在等待跨越一条非常汹涌的岩浆河。你计划着要教会你的脆皮通过相互叠起来，变成一种有趣的形状。" + prettify(soldiers) + "个脆皮叠起来而形成了巨大的Moongooseimp，你就要为第一个遇到它的Snimp而感到难过了。";
		},
		get w285(){
			if (game.global.spireRows >= 10)
				return "你终于可以看到了它，在你的视野中十分清晰。在不超过15个区域的距离中矗立着一个巨大的尖塔，这一座甚至比你遇到的第一座更具威胁性。一个巨大的、回响着的声音从尖塔涌出，语调和节律都和德鲁普提一致。你离得有点远，听不太清楚，但是似乎他在请你离开他。";
			return "你感觉哪里有些不对劲，但你却不知道到底是哪里有问题。你最后在你的鞋子中发现了一颗鹅卵石，然后一切似乎都变得更好了一些!";
		},
		get w286() {
			if (game.global.spireRows >= 10)
				return "你再一次听到了那个声音，并且你敢说这其中一定有古怪-这个声音是来自于鬼魂或者是什么东西。你的推测是有道理的，因为你亲手杀死了德鲁普提。";
			return "你听到灌木丛中有什么东西在沙沙作响，并为这种新的东西而完全激动起来。当你小心地走向灌木丛时，一只Rabbimp迅速跑出来并远去了。"
		},
		get w290() {
			if (game.global.spireRows >= 10)
				return "随着你距离尖塔越来越近，那个声音也越来越清晰。无论那上面是什么生物，你可以从他那听到恐怖的声音，好像他想独自毁灭世界一样。但你对他并没有什么同情心。";
			return "你被岩石绊了一下并蹒跚地走了两步，但在完全摔倒前稳定了脚步。你环顾四周，似乎没有脆皮注意到你的失误！";
		},
		get w295() {
			if (game.global.spireRows >= 10)
				return "你现在距离这座新尖塔非常的近，你都可以尝到它，真正地品尝到。这些东西令人作呕。";
			return "你想知道你的科学家能否发明出口香糖……"
		},
		get w298() {
			if (game.global.spireRows >= 10)
				return "尖塔上那个疯狂的意志在恳求你退后。很明显，他知道你摧毁了上一座尖塔，而且不希望你再摧毁一座。很不幸的是，你来了。";
			return "你内心深处的声音告诉你，应该很快就会有大事发生，但你什么也没有看到。噢，好吧。"
		},
		get w303() {
			if (game.global.spireRows >= 15 || game.portal.Capable.level > 0) return "你很高兴现在有蓬松陪伴着你。他似乎和其他脆皮相处的很好，而且似乎很高兴找到了和他一样精神正常的生命。他看起来比其他的脆皮聪明不了多少，所以你确信你可以从他身上发现不少乐趣。";
			return "你希望有一只宠物。";
		},
		get w315(){
			if (game.global.lastSpireCleared == 2) return "随着尖塔向空气喷射的越来越多，陆地上的健康地点似乎也变得越来越多！希望这是一件好事。你问：蓬松，你怎么看？蓬松点点头表示同意。";
			return "天啊，这种腐化现象开始变得相当严重。需要赶紧摧毁那些尖塔……";
		},
		w340: "注意脚下，那里有一些岩浆。",
		w350: "如果德鲁普提真的在无限数量的尖塔中永生，你可能要在这里多待一段时间。",
		get w360(){
			if (game.global.spireRows >= 15 || game.portal.Capable.level > 0) return "你试图让蓬松参与严格的科学家训练计划，但是他并不想参加。他不会有任何问题，但他不想要这个标签。有这个小东西跟在身边，你还是开心不起来。";
			return "你确实地觉得你的生活中缺少了什么。感觉一切都是空虚和悲伤。";
		},
		w375: "应该很快就要到另一个尖塔的区域了。你停下来，坐在一条美丽的岩浆河旁，并思考前方会有怎样疯狂的事物在等待着你。不久后你明白前方可能只是另一个尖塔而已，所以你站起身，继续前进。",
		w385: "一股熟悉的尖塔的气味再次直击你的鼻腔，你打了个喷嚏，如此滑稽，让你的脆皮们感到惊讶。年轻的心不会变老。",
		get w390(){
			if (game.global.lastSpireCleared == 2) return "你终于可以看到远处的下一个塔尖，一团紫色的厚云从塔顶滚滚展开。很难相信这里有如此多的腐化，这个星球有多大?";
			return "很奇怪，你觉得你现在应该能看到下一个塔尖，但它不在那里。也许你应该更彻底地检查一下之前的塔尖。";
		},
		get w395(){
			if (game.global.lastSpireCleared == 2) return "啊，又是那股令人作呕的尖塔味道。你永远也无法习惯这个味道。你大多数的脆皮都试图坐在树下，但是蓬松在跑来跑去，并将舌头伸出来，就像在追赶雪花一样。";
			return "你把烤箱打开了吗?噢，你没有烤箱。现在你甚至想知道什么是烤箱。哦，好吧。";
		},
		get w405(){
			if (game.global.lastSpireCleared == 3) return "似乎在刚才你真的把德鲁普提削弱了。或许只要再来一个尖塔，你就能关闭他所有的意识部分？";
			return "你无法摆脱这种感觉，就像你忘记了做一些事情一样。";
		},
		get w415(){
			if (game.global.lastSpireCleared == 3) return "健康变异现在已经传播得很好了。敌人的攻击变得更强，但是你很确定你做的是正确的事情，这让你感觉很好。";
			if (game.global.lastSpireCleared == 2) return "看起来健康的突变已经停止扩散。不过没关系，其他时间上的你可能会解决这个问题。";
			if (game.global.spireRows >= 15 || game.portal.Capable.level > 0) return "这片土地看起来确实很可怕而且腐化严重，但至少你有蓬松。";
			return "你对蓬松有什么不满吗?";
		},
		w430: "脆皮们试图将两个Turkimps绑在这棵高高的树上，然后Turkimps打败了脆皮们，并将脆皮摔向那棵树。脆皮们真的很累。那个Turkimps真的很强硬。",
		w440: "哇哦，您出已经走了很远了。你曾经完全想不到这里有如此多的区域，但是现在你已经抵达了如此远的地方。",
		w450: "是时候快要遇到另一个尖塔了，你不这样认为吗？",
		w460: "世界的这一部分似乎比你去过的任何其他地方都要高得多。空气出奇的清新，你可以看到天空中许多的行星围绕着你，比以往任何时候都要多。看到你为之奋斗的一切让你感觉很好，觉得非常值得。",
		w470: "这个地区的海拔似乎很低，而且腐化程度也在不断增加。令人恶心。",
		get w485(){
			if (game.global.lastSpireCleared == 3) return "又一次，你可以尝到尖塔的味道，那座尖塔一定就在下一座山丘的背后。蓬松似乎很激动。";
			return "嘿！这个是……噢，不是，这只是一些泥土。";
		},
		get w495(){
			if (game.global.lastSpireCleared == 3) return "是时候了。他很虚弱。你明白这点。是时候让这个星球恢复健康了。";
			return "你今天觉得很痒。你让一些脆皮抓抓你的后背，但他们并不想这么做。";
		},
		get w505(){
			if (game.global.lastSpireCleared == 4) return "现在你已经完全地、100%地消灭了德鲁普提的意识，你觉得是时候去清除尖塔上剩下的，他的无脑控制的回声了。也许<b>现在暂时</b>看不到什么任何新的、令人激动的东西了，但是能让人吹嘘也是很好的。";
			return "德鲁普提就在那里变得越来越强大，必须有人对他做点什么。";
		}
	},
	trimpDeathTexts: ["不再是", "化为尘土", "入土为安", "断气", "翘辫子了", "蒸发", "需要更多的装甲", "爆炸", "融化了", "摔死了", "游冥河", "脖子扭断", "忘了穿装备", "嘶哑的", "死了", "不会跟着你再次战斗", "死了。 瘸", "落后了", "魔脉"],
	badGuyDeathTexts: ["杀了", "被杀死的", "摧毁", "熄灭", "清算", "蒸发", "拆除", "破败", "遇难", "抹杀"],

	settings: {
		speed: 10,
		speedTemp: 0,
		slowdown: false,
                ewma_alpha: 0.05,
                ewma_ticks: 10, // 1 second
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
			getCurrentSend: function (checkLevelTemp) {
				var amt = (game.portal.Coordinated.level) ? ((checkLevelTemp) ? game.portal.Coordinated.onChange(true) : game.portal.Coordinated.currentSend) : game.resources.trimps.maxSoldiers;
				if (game.jobs.Amalgamator.owned > 0) {
					amt *= game.jobs.Amalgamator.getPopulationMult();
				}
				return amt;
			},
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
			tooltip: "一件强大的远程武器。你的脆皮可以用劲弩对敌人造成伤害。 每级给每个战士增加 $attackCalculated$ 攻击。",
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
			tooltip: "在胸甲下穿着一件舒适厚实的棉服夹克。 你的脆皮认为他们太棒了！ 每级给每个战士增加$healthCalculated$生命。",
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
				checkAchieve("angerTimed");
				if (game.upgrades.Bounty.done == 0) giveSingleAchieve("Forgot Something");
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
					refreshMaps();
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
				if (mapLevel >= game.global.world + 200) giveSingleAchieve("Bionic Nuker");
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
					refreshMaps();
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
				game.unlocks.impCount.Tauntimp++;
				game.unlocks.impCount.TauntimpAdded += amt;
				amt = (game.global.challengeActive == "Trapper") ? addMaxHousing(amt, false) : addMaxHousing(amt, true);
				var msg = "这是一个不错的，温暖并且宽敞的死亡Tauntimp。";
				if (game.global.challengeActive != "Trapper"){
					msg += "你发现了 ";
					if (amt == 1) msg += prettify(amt) + " 脆皮在里面，它看起来很无聊。";
					else msg += prettify(amt) + " 脆皮在里面, 他们都似乎满足于留在那里！";
					message(msg, "Loot", "gift", "exotic", "exotic");
				}
				else {
					message(msg + " 这个房间大得足够容纳 " + prettify(amt) + " 脆皮" + ((amt == 1) ? "" : "") + " 在里面生活" + ((amt == 1) ? ", 虽然它会很孤独。" : "!"), "Loot", "gift", "exotic", "exotic");
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
				addResCheckMax(item, amt, null, null, true);
				message("那个Jestimp给了你 " + prettify(amt) + " " + item + "!", "Loot", "*dice", "exotic", "exotic");
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
			title: "机械脆皮",
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
						var text = "你接近了一个孤立着的小机械脆皮。因为你很擅长训练别人，所以你决定带着他一起走。他增加你<b>20%</b>的额外伤害，而且有特殊的能力。你可以通过鼠标悬停在新的<span class='icomoon icon-chain'></span>图标上来了解更多有关特殊能力的信息。<br/><br/>你同时发现了一张加强版的仿生仙境地图。你相信那里有另一只机械脆皮正需要'拯救'。";
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
			title: "吉祥的存在",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.autoStorageAvailable;
			},
			fire: function(){
				var text = "在虚空中，一个吉祥的存在延伸出来并充满你的脑海。你感觉整个世界都非常和平。它询问你你最渴望的是什么，然后瞬间读取到了你的思想，说你想要脆皮足够聪明来自我管理仓库。这个存在告诉你愿望已经完成了，然后就消失了。你突然后悔没有要求回家。";
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
				var messageText = (fromGenerator) ? "当你启动你的传送门时，这个世界就不会那么愤怒了。你明白，在某个维度的某个地方，Megablimp已经不复存在。在你面前, " + ((game.global.runningChallengeSquared) ? "一个绿色闪耀的盒子出现" : "45 氦以及一个绿色闪耀的盒子出现") + "在地面上。盒子上有一行小字，你可以认清那行字是“时间传送门。此面向上”。" : "不要让任何人告诉你你刚才没有杀死那个Megablimp，因为你确实杀死它了。当它逐渐溶解消散时，你发现在地上有一个绿色的，发光的盒子。盒子上有一行小字，你能辨认出上面的字是“时间传送门。此端向上。”";
				message(messageText, "Story");
				game.global.portalActive = true;
				fadeIn("portalBtn", 10);
				if (game.global.runningChallengeSquared) return;
				fadeIn("helium", 10);
				addHelium(45);
				if (!fromGenerator){
					message("<span class='glyphicon glyphicon-oil'></span> 你从那个Blimp上提取到了45个氦!既然你知道了该如何得到氦，你现在就能从普通的Blimp身上提取出氦了。", "Story");
				}
				if (game.global.challengeActive == "Metal"){
					game.global.challengeActive = "";
					game.challenges.Metal.abandon();
					game.portal.Artisanistry.locked = false;
					game.challenges.Metal.completed = true;
					message("你已经完成了<b>金属挑战!</b>你解锁了一个新能力,在本轮中可以重新雇佣矿工", "Notices");
				}
				if (game.global.challengeActive == "Size"){
					game.global.challengeActive = "";
					game.challenges.Size.abandon();
					game.challenges.Size.completed = true;
					game.portal.Carpentry.locked = false;
					message("你已经完成了<b>尺寸挑战!</b>你解锁了一个新能力, 你的脆皮也缩小回原来的尺寸。", "Notices");
				}
				if (game.global.challengeActive == "Discipline"){
					game.global.challengeActive = "";
					game.challenges.Discipline.completed = true;
					game.portal.Range.locked = false;
					message("你已经完成了<b>纪律挑战!</b>你解锁了一个新能力,你的脆皮也重新变得有纪律。", "Notices");
				}
				if (game.global.challengeActive == "Frugal"){
					game.global.challengeActive = "";
					game.global.frugalDone = true;
					game.challenges.Frugal.abandon();
					message("你已经完成了'Frugal'挑战!你现在可以一次获得2级锻造书，巨型书也多增加10%收集速度!", "Notices");
				}
				if (game.global.challengeActive == "Coordinate"){
					game.global.challengeActive = "";
					game.portal.Coordinated.locked = false;
					message("你已经完成了'协同'挑战!本世界敌人不再协同作战,但又可以先攻. 你解锁了'协调'能力!", "Notices");
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
					message("你已经完成了<b>脆皮挑战!</b>你解锁了'弹性'能力,你的脆皮又能协同作战了。", "Notices");
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
				createMap(125, "Bionic Wonderland", "Bionic", 3, 100, 2.6, true);
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
			message: "你会发现一本名为“协作”的古书。令人兴奋的。",
			world: -1,
			level: 99,
			get icon (){
				return (game.global.world == mutations.Magma.start() - 1) ?  "*archive2" : "book";
			},
			title: "Coordination",
			fire: function() {
				if (game.global.challengeActive == "Trimp"){
					if (!checkIfLiquidZone())
						message("你的科学家不认为尝试本书中的任何建议是一个非常聪明的想法", "Notices");
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
				game.global.totalGifts += amt;
				amt = addMaxHousing(amt, game.talents.autoStructure.purchased);
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
					return "<p>岩浆一般是不利于健康的托儿所环境。 每个托儿所仍会增加脆皮每秒1％（叠乘）繁殖速度，但你每通过一个区域，由于距离岩浆更近，都会关闭你10%的托儿所。 安全第一！</p><p>你总共已经购买托儿所" + prettify(this.purchased) + "个</p>";
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
			get tooltip (){
				var text = "<p>每个遗传学家都会将每个脆皮的血量提高1％（复合），但会降低2％（复合）的脆皮繁殖速度。</p>"
				if (this.owned > 0) {
					var breedMult = Math.pow(.98, game.jobs.Geneticist.owned);
					var breedDisplay = (breedMult > 0.0001) ? breedMult.toFixed(4) : breedMult.toExponential(3);
					var healthMult = Math.pow(1.01, this.owned);
					var healthDisplay = prettify((healthMult * 100) - 100) + "%";
					text += "<p>拥有" + prettify(this.owned) + " 遗传学家" + ((this.owned == 1) ? "" : "") + "使你的繁殖速度变为" + breedDisplay + "倍,并且增加" + healthDisplay + "的生命。</p>";
				}
				return text;
			},
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
				var timeOnZone = Math.floor((getGameTime() - game.global.zoneStarted) / 60000);
				if (game.talents.magmamancer.purchased) timeOnZone += 5;
				var bonus = (this.getBonusPercent() - 1) * 100;
				var timeStr;
				if (timeOnZone >= 120)
					timeStr = "over 120 minutes (Max)";
				else{
					var remaining = 10 - (timeOnZone % 10);
					var nextBonus = ((this.getBonusPercent(false, Math.floor(timeOnZone / 10) + 1) - 1) * 100);
					timeStr = prettify(timeOnZone) + " 分钟" + ((timeOnZone == 1) ? "" : "") + "。 在 " + prettify(remaining) + " 分钟后" + ((remaining == 1) ? "" : "") + ", 这个奖金将增加到 " + prettify(nextBonus) + "%";
					if (timeOnZone < 10) bonus = 0;
				}
				var currentMag = (((1 - Math.pow(0.9999, this.owned)) * 3));
				var nextMag = (((1 - Math.pow(0.9999, this.owned + 1)) * 3));
				var nextBonus = (1 - (currentMag / nextMag)) * 100;
				var textString = "<p>训练一名巫师，将镐头和宝石还有岩浆混合在一起，形成每个区域独特的岩石。你有越多的巫师，你在一个区域花的时间越长，你的脆皮就能收集到的金属就越多!</p><p>你在这个区域中每花费十分钟（上限2小时）, 你的巫师的增益就会提高20% (指数增长). 你现在的增益是 <b>" + prettify(bonus) + "%</b>, and " + ((game.talents.magmamancer.purchased) ? "counting your Magmamancermancy Mastery " : "") + "你已经在该区域中停留了 " + timeStr + ".</p>";
				if (this.owned > 0) textString += "<p>你的下一个岩浆法师将增加总奖励 " + prettify(nextBonus) + "% (复利, 按住Ctrl键查看公式)</p>";
				else textString += "<p>培训了你的第一个岩浆法师之后，你的金属奖励将会是 " + prettify((nextMag * (Math.pow(1.2, this.getBonusPercent(true)) - 1)) * 100) + "%. (按住Ctrl键查看公式)</p>";
				if (ctrlPressed) textString += "<b><p>M = 巫师数量。T = 在这个区域中的时间（每10分钟为1个单位，向下取整）.</p><p>金属/秒 *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1))</p><b>";
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
					var timeOnZone = getGameTime() - game.global.zoneStarted;
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
				var ratio = this.getTriggerThresh();
				var currentRatio = (game.resources.trimps.realMax() / game.resources.trimps.getCurrentSend());
				var text = "<p>合并者不能手动雇佣或解雇合并者。他们是不可思议的生物，几乎不能再被认为是脆皮了。当你的军队规模占总人口的比例低于 <b>" + prettify(ratio) + ":1</b>。他们会自动出现在你的城镇。完成尖塔 II到V时，每一个尖塔都将使这个比例增大到原来的10倍。 如果现在这一比率大于 1: " + prettify(1e3) + ", 一个合并者就会离开。 你现在的比率是 <b>" + prettify(currentRatio) + ":1</b>. At your current army size, you need <b>" + prettify(ratio * game.resources.trimps.getCurrentSend()) + "</b> total Trimps to trigger the next Amalgamator.</p></p><p>合并者会融合一些空闲的脆皮到其他士兵中,大大加强他们的战斗力。每个合并者会增加出战脆皮的数量1000倍(指数),增加血量40倍(指数),增加伤害50%(线性)。</p><p>另外，当至少有一个合并者时，预期的增益将基于最后一支部队被派遣，而不是基于实际繁殖的时间。</p>";
				if (game.global.challengeActive == "Trimp"){
					text += "<p><i>" + toZalgo("This particular Universe</b> seems to directly conflict with the Amalgamators, yet they're here and the Trimps they Amalgamate seem immune to the dimensional restrictions. Things are getting weird though.", 1, Math.ceil(game.global.world / 100)) + "</i></p>";
				}
				else
					text += "<p><i>有人说合并者是诅咒，有人说他们是祝福，合并者他们自己大多只是说：“Blerghhhh”。</i></p>";
				return text;
			},
			cost: {
			},
			increase: "custom",
			populationModifier: 1000,
			healthModifier: 40,
			damageModifier: 0.5,
			fireThresh: 1e3,
			getTriggerThresh: function () {
				var startPoint = 1e10;
				var creditedSpires = game.global.lastSpireCleared;
				if (creditedSpires < 2) return startPoint;
				if (creditedSpires > 5) creditedSpires = 5;
				var reduction = Math.pow(10, (creditedSpires - 1));
				return (startPoint / reduction);
			},
			getFireThresh: function () {
				return this.fireThresh;
			},
			getHealthMult: function () {
				return Math.pow(this.healthModifier, this.owned);
			},
			getPopulationMult: function () {
				return Math.pow(this.populationModifier, this.owned);
			},
			getDamageMult: function () {
				return (this.owned * this.damageModifier) + 1;
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
				return "减少两个虚空地图掉落之间所需的最小敌人数量" + prettify(game.goldenUpgrades.Void.nextAmt() * 100) + "%。";
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
			tooltip: "使你的经纱站进阶，增加20%可居住的脆皮，基础价格增加75%。这是无法撤回的升级。升级后会废弃之前购买的经纱站，但它们仍然生效，所以你的脆皮仍然能住在那里。升级后会直接建造一个新的经纱站。<b>如果你买得起的话，按住Ctrl升级，将会在升级后购买与你现在数量等同的经纱站。</b>",
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
				addMaxHousing(game.buildings.Warpstation.increase.by, game.talents.autoStructure.purchased);
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
			tooltip: "这本书解释了使用盾牌实际上阻止伤害的方法。当前的盾牌需要完全摧毁和重建,但它将带来防御而不是生命。 <b>效果是永久的。</b> $你的盾牌必须在III阶或更高$",
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
				text += " <b>You have cleared " + cleared + " 仿生仙境" + ((cleared == 1) ? "" : "") + " at 185 or higher, and your MagnetoShriek cell count cap will be " + cap + "</b>";
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
					addMaxHousing(game.buildings.Hut.owned * game.buildings.Hut.increase.by, game.talents.autoStructure.purchased);
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
					addMaxHousing(game.buildings.House.owned * game.buildings.House.increase.by, game.talents.autoStructure.purchased);
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
					addMaxHousing(game.buildings.Mansion.owned * game.buildings.Mansion.increase.by, game.talents.autoStructure.purchased);
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
					addMaxHousing(game.buildings.Hotel.owned * game.buildings.Hotel.increase.by, game.talents.autoStructure.purchased);
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
					addMaxHousing(game.buildings.Resort.owned * game.buildings.Resort.increase.by, game.talents.autoStructure.purchased);
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
		}
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
