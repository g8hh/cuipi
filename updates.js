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


var customUp;
var tooltipUpdateFunction = "";
var lastMousePos = [];
var lastTooltipFrom = "";
var onShift;
var openTooltip = null;

//"onmouseover="tooltip('*TOOLTIP_TITLE*', 'customText', event, '*TOOLTIP_TEXT*');" onmouseout="tooltip('hide')""
//in the event of what == 'confirm', numCheck works as a Title! Exciting, right?
function tooltip(what, isItIn, event, textString, attachFunction, numCheck, renameBtn, noHide, hideCancel, ignoreShift) { //Now 20% less menacing. Work in progress.
	if (!game.options.menu.bigPopups.enabled && (
		what == "The Improbability" ||
		(what == "Corruption" && game.global.highestLevelCleared >= 199) ||
		(what == "The Spire" && game.global.highestLevelCleared >= 219) ||
		(what == "The Magma" && game.global.highestLevelCleared >= 249)
	)){
		return;
	} 
	checkAlert(what, isItIn);
	if (game.global.lockTooltip && event != 'update') return;
	if (game.global.lockTooltip && isItIn && event == 'update') return;
	var elem = document.getElementById("tooltipDiv");
	swapClass("tooltipExtra", "tooltipExtraNone", elem);
	document.getElementById('tipText').className = "";
	var ondisplay = null; // if non-null, called after the tooltip is displayed
	openTooltip = null;
	if (what == "hide"){
		elem.style.display = "none";
		tooltipUpdateFunction = "";
		onShift = null;
		return;
	}
	if (event != 'lock' && (event != 'update' || isItIn) && !game.options.menu.tooltips.enabled && !shiftPressed && what != "Well Fed" && what != 'Perk Preset' && what != 'Activate Portal' && !ignoreShift) {
		var whatU = what, isItInU = isItIn, eventU = event, textStringU = textString, attachFunctionU = attachFunction, numCheckU = numCheck, renameBtnU = renameBtn, noHideU = noHide;
		var newFunction = function () {
			tooltip(whatU, isItInU, eventU, textStringU, attachFunctionU, numCheckU, renameBtnU, noHideU);
		};
		onShift = newFunction;
		return;
	}
	if (event != "update"){
		var whatU = what, isItInU = isItIn, eventU = event, textStringU = textString, attachFunctionU = attachFunction, numCheckU = numCheck, renameBtnU = renameBtn, noHideU = noHide;
		var newFunction = function () {
			tooltip(whatU, isItInU, eventU, textStringU, attachFunctionU, numCheckU, renameBtnU, noHideU);
		};
		tooltipUpdateFunction = newFunction;
	}
	var tooltipText;
	var costText = "";
	var toTip;
	var titleText;
	var tip2 = false;
	var noExtraCheck = false;
	if (isItIn !== null && isItIn != "maps" && isItIn != "customText" && isItIn != "dailyStack" && isItIn != "advMaps"){
		toTip = game[isItIn];
		toTip = toTip[what];
		if (typeof toTip === 'undefined') console.log(what);
		else {
			tooltipText = toTip.tooltip;
			if (typeof tooltipText === 'function') tooltipText = tooltipText();
			if (typeof toTip.cost !== 'undefined') costText = addTooltipPricing(toTip, what, isItIn);
		}
	}
	if (isItIn == "advMaps"){
		var advTips = {
			Loot: "This slider allows you to fine tune the map Loot modifier. Moving this slider from left to right will guarantee more loot from the map, but increase the cost.",
			Size: "This slider allows you to fine tune the map Size modifier. Moving this slider from left to right will guarantee a smaller map, but increase the cost.",
			Difficulty: "This slider allows you to fine tune the map Difficulty modifier. Moving this slider from left to right will guarantee an easier map, but increase the cost.",
			Biome: "If you're looking to farm something specific, you can select the biome here. Anything other than random will increase the cost of the map.",
			get Special_Modifier() {
				var text = "<p>Select a special modifier to add to your map from the drop-down below! You can only add one of these to each map. The following bonuses are currently available:</p><ul>"
				for (var item in mapSpecialModifierConfig){
					var bonusItem = mapSpecialModifierConfig[item];
					if (game.global.highestLevelCleared + 1 < bonusItem.unlocksAt){
						text += "<li><b>Next modifier unlocks at Z" + bonusItem.unlocksAt + "</b></li>";
						break;
					}
					text += "<li><b>" + bonusItem.name + " (" + bonusItem.abv + ")</b> - " + bonusItem.description + "</li>";
				}
				return text;
			},
			Show_Hide_Map_Config: "点击可折叠/展开地图配置选项。",
			Save_Map_Settings: "点击此按钮保存您当前的地图配置设置。 每次进入地图室时，这些设置都会默认加载。",
			Reset_Map_Settings: "点击此按钮将所有设置重置为默认位置。 这将不会清除您保存的设置，下次您进入地图室时仍然会将其加载。",
			Extra_Zones: "<p>Create a map up to 10 Zones higher than your current Zone number. This map will gain +10% loot per extra level (compounding), and can drop Prestige upgrades higher than you could get from a world level map.</p><p>A green background indicates that you could afford a map at this Extra Zone amount with your selected Special Modifier and Perfect Sliders. A gold background indicates that you could afford that map with your selected Special Modifier and some combination of non-perfect sliders.</p><p>You can only use this setting when creating a max level map.</p>",
			Perfect_Sliders: "<p>This option takes all of the RNG out of map generation! If sliders are maxxed and the box is checked, you have a 100% chance to get a perfect roll on Loot, Size, and Difficulty.</p><p>You can only choose this setting if the sliders for Loot, Size, and Difficulty are at the max.</p>",
			Map_Preset: "You can save up to 3 different map configurations to switch between at will. The most recently selected setting will load each time you enter your map chamber."
		}
		if (what == "Special Modifier" && game.global.highestLevelCleared >= 149) {
			swapClass("tooltipExtra", "tooltipExtraLg", elem);
			renameBtn = "forceLeft";
		}
		noExtraCheck = true;
		tooltipText = advTips[what.replace(/ /g, '_').replace(/\//g, '_')];
	}
	if (isItIn == "dailyStack"){
		tooltipText = dailyModifiers[what].stackDesc(game.global.dailyChallenge[what].strength, game.global.dailyChallenge[what].stacks);
		costText = "";
		what = what[0].toUpperCase() + what.substr(1)
	}
	if (what == "Confirm Purchase"){
		if (attachFunction == "purchaseImport()" && !boneTemp.selectedImport) return;
		if (game.options.menu.boneAlerts.enabled == 0 && numCheck){
			eval(attachFunction);
			return;
		}
		var btnText = "购买";
		if (numCheck && game.global.b < numCheck){
			if (typeof kongregate === 'undefined') return;
			tooltipText = "你付不起这笔奖金。你想去参观商店吗?";
			attachFunction = "showPurchaseBones()";
			btnText = "访问商店";
		}
		else
		tooltipText = textString;
		costText += '<div class="maxCenter"><div id="confirmTooltipBtn" class="btn btn-info" onclick="' + attachFunction + '; cancelTooltip()">' + btnText + '</div><div class="btn btn-info" onclick="cancelTooltip()">取消</div></div>';
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "脆皮信息"){
		var kongMode = (document.getElementById('boneBtn') !== null);
		var text = '<div class="trimpsInfoPopup">需要帮助，发现错误或者只想谈谈脆皮？ 请访问 <a href="https://www.reddit.com/r/trimps" target="_blank">脆皮论坛</a>';
		if (kongMode) text += ' 或者 <a href="https://www.kongregate.com/forums/11405-trimps" target="_blank">Kongregate论坛</a>.<br/><br/>';
		else text +=' 或者来新挂出去的 <a href="https://discord.gg/kSpNHte" target="_blank">脆皮官方</a>!<br/><br/>';
		text += ' 如果你想阅读或讨论脆皮力学的更详细的细节，请访问 <a href="https://trimps.wikia.com/wiki/Trimps_Wiki" target="_blank">社区创建的脆皮Wiki!</a><br/><br/>';
		if (kongMode) text += ' 如果您出于任何原因需要联系开发人员, <a target="_blank" href="https://www.kongregate.com/accounts/Greensatellite/private_messages?focus=true">发送一条悄悄话给GreenSatellite</a> 在Kongregate.';
		else text += ' 如果您出于任何原因需要联系开发人员, <a href="https://www.reddit.com/message/compose/?to=Brownprobe" target="_blank">点击这里在Reddit上发送消息</a> 或在脆皮Discord中找到GreenSatellite。<hr/><br/>' + "如果您想捐款来帮助支持脆皮的发展，现在可以使用PayPal来实现这一点！ 如果你想捐助，但无法承担捐款，你仍然可以通过加入社区，分享你的反馈意见或帮助他人。 谢谢你，你太棒了！ <form id='donateForm' style='text-align: center' action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='MGFEJS3VVJG6U'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'></form>";
		text += '</div>';
		tooltipText = text;
		costText = '<div class="btn btn-info" onclick="cancelTooltip()">关闭</div>';
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		noExtraCheck = true;
	}
	if (what == "Fluffy"){
		if (event == 'update'){
			//clicked
			game.global.lockTooltip = true;
			elem.style.top = "25%";
			elem.style.left = "25%";
			swapClass('tooltipExtra', 'tooltipExtraLg', elem);
			var fluffyTip = Fluffy.tooltip(true);
			tooltipText = "<div id='fluffyTooltipTopContainer'>" + fluffyTip[0] + "</div>";
			tooltipText += "<div id='fluffyLevelBreakdownContainer' class='niceScroll'>" + fluffyTip[1] + "</div>";
			costText = '<div class="btn btn-danger" onclick="cancelTooltip()">Close</div>';
			openTooltip = "Fluffy";
			setTimeout(Fluffy.refreshTooltip, 1000);
			ondisplay = function(){
				verticalCenterTooltip(false, true);
			};
		}
		else {
			//mouseover
			tooltipText = Fluffy.tooltip();
			costText = "Click for more detailed info"
		}
	}
	if (what == "Scryer Formation"){
		tooltipText = "<p>脆皮减少了一半的攻击、生命和阻挡，但是从掉落中获得了2倍资源(不包括氦气)，并且有机会在Z180以上的世界中找到黑暗精华。这个阵型必须在整个战斗中都处于激活状态的，才能从敌人那里得到奖励；并且必须在整个地图上都是活跃的，才能从地图隐藏奖励中获得奖励。(快捷键:S或5)</p>";
		if (game.global.formation == 4){
			if (!isScryerBonusActive()) tooltipText += "<p>You recently switched to Scryer and will <b>not</b> earn a bonus from this enemy.</p>";
			else tooltipText += "<p>You will earn a bonus from this enemy!</p>";
			if (game.global.mapsActive){
				var currentMap = getCurrentMapObject();
				if (currentMap.bonus && mapSpecialModifierConfig[currentMap.bonus].cache){
					if (game.global.canScryCache) tooltipText += "<p>You will earn a bonus from the Cache at the end of this map!</p>";
					else tooltipText += "<p>You completed some of this map outside of Scryer, and will <b>not</b> earn a bonus from the Cache.</p>";
				}
				if (game.global.voidBuff && game.talents.scry2.purchased){
					if (game.global.canScryCache) tooltipText += "<p>You will earn bonus Helium at the end of this map from Scryhard II!</p>";
					else tooltipText += "<p>You completed some of this map outside of Scryer, and will <b>not</b> earn a bonus to Helium from Scryhard II</p>";
				}
			}
		}
		if (game.global.world >= 180){
			var essenceRemaining = countRemainingEssenceDrops();
			tooltipText += "<p><b>" + essenceRemaining + " remaining " + ((essenceRemaining == 1) ? "enemy in your current Zone is" : "enemies in your current Zone are") + " holding Dark Essence.</b></p>"
		}
		costText = "";
	}
	if (what == "First Amalgamator"){
		tooltipText = "<p><b>You found your first Amalgamator! You can view this tooltip again and track how many Amalgamators you currently have under 'Jobs'.</b></p>";
		tooltipText += game.jobs.Amalgamator.tooltip;
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>Thanks for the help, tooltip, but you can go now.</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		noExtraCheck = true;
		ondisplay = function () { verticalCenterTooltip() };
	}
	if (what == "Empowerments of Nature"){
		var active = getEmpowerment();
		if (!active) return;
		var emp = game.empowerments[active];
		if (typeof emp.description === 'undefined') return;
		var lvlsLeft = ((5 - ((game.global.world - 1) % 5)) + (game.global.world - 1)) + 1;
		tooltipText = "<p>这个 " + active + " 赋权激活中！</p><p>" + emp.description() + "</p><p>这个自然赋权会结束于区域" + lvlsLeft + ", 在这个区域范围中，你将会碰到一个 " + getEmpowerment(null, true) + " 敌人并与他战斗，获胜后将获得若干个 " + active + "符记。</p>";
		costText = "";

	}
	if (what == "Finish Daily"){
		var value = getDailyHeliumValue(countDailyWeight()) / 100;
		var reward = game.resources.helium.owned + game.stats.spentOnWorms.value;
		if (reward > 0) reward = Math.floor(reward * value);
		tooltipText = "点击下方的<b>完成</b>将会中止你的日常挑战，你将不能再次运行本挑战。你将获得<b>" + prettify(reward) + "额外氦！</b>";
		costText = '<div class="maxCenter"><div id="confirmTooltipBtn" class="btn btn-info" onclick="abandonChallenge(); cancelTooltip()">完成</div><div class="btn btn-danger" onclick="cancelTooltip()">取消</div></div>';
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Switch Daily"){
		var daysUntilReset = Math.floor(7 + textString);
		tooltipText = "点击查看" + ((textString == 0) ? "今天" : cnItem(dayOfWeek(getDailyTimeString(textString, false, true)))) + "的挑战, 将在" + daysUntilReset + "天内重置" + ((daysUntilReset == 1) ? "" : "") + "。";
		costText = "";
	}
	if (what == "Decay"){
		var decayedAmt = ((1 - Math.pow(0.995, game.challenges.Decay.stacks)) * 100).toFixed(2);
		tooltipText = "事情正在迅速变得困难起来。收集速度，战利品以及脆皮攻击已经减少了" + decayedAmt + "%.";
		costText = "";
	}
	if (what == "Heirloom"){
		//attachFunction == location, numCheck == index
		tooltipUpdateFunction = "";
		tooltipText = displaySelectedHeirloom(false, 0, true, numCheck, attachFunction);
		costText = "";
		renameBtn = what;
		what = "";
		if (getSelectedHeirloom(numCheck, attachFunction).rarity == 8){
			ondisplay = function() {
				document.getElementById('tooltipHeirloomIcon').style.animationDelay = "-" + ((new Date().getTime() / 1000) % 30).toFixed(1) + "s";
			}
		}
		swapClass("tooltipExtra", "tooltipExtraHeirloom", elem);
		noExtraCheck = true;
	}
	if (what == "Respec"){
		tooltipText = "您可以为每个传送门重新分配一次。 点击此按钮后点击取消将不会消耗您的洗点。";
		costText = "";
	}
	if (what == "Well Fed"){
		var tBonus = 50;
		if (game.talents.turkimp4.purchased) tBonus = 100;
		else if (game.talents.turkimp3.purchased) tBonus = 75;
		tooltipText = "这Turkimp很可口，你有剩菜。 如果你设置自己收集食物，木头，或金属，而这个buff是积极的，你可以与你的工人分享，以提高他们的收集速度 " + tBonus + "%";
		costText = "";
	}
	if (what == "Geneticistassist"){
		tooltipText = "我是你的遗传学家！ 我会雇用和解雇遗传学家，直到您的总繁殖时间尽可能接近您选择的目标时间。 如果没有足够的工作空间，我将随机发射一个农夫，伐木工人或矿工，我永远不会在遗传学家身上花费超过1％的食物，并且可以在设置中自定义我的目标时间选项 <b>或者按住Ctrl键并点击我</b>. 我已经上传自己的传送门，将永远不会离开你。";
		costText = "";
	}
	if (what == "欢迎"){
		tooltipText = "欢迎来到脆皮！ 这个游戏会在浏览器中使用本地存储保存游戏进度。 清除您的Cookie或浏览器设置将导致您的游戏进度消失！ 请确保您通过使用下面的栏中的“导出”按钮或“设置”下的“在线保存”选项来定期备份保存文件。<br/> <br/> <b> Chrome和Firefox目前是 唯一完全支持的浏览器。</ b> <br/> <b>您是否希望在开始之前启用在线保存？</b><br/><br/>";
		if (document.getElementById('boneBtn') !== null){
			tooltipText += "<b style='color: red'>注意：你期望在这里看到你的保存？</b><br/>如果这是你从2017 11月13日开始的第一次游戏，请检查 <a target='_blank' href='http://trimps.github.io'>http://trimps.github.io</a> (确定你用的是 http, 不是 https), 看看它在不在那里。有关更多信息，请参见 <a target='_blank' href='http://www.kongregate.com/forums/11406-general-discussion/topics/941201-if-your-save-is-missing-after-november-13th-click-here?page=1#posts-11719541'>这个论坛主题</a>.<br/><br/>";
		}
		tooltipText += "<b>您希望在开始之前启用在线存储吗？</b>";
		game.global.lockTooltip = true;
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip(); toggleSetting(\"usePlayFab\");'>启用在线保存</div><div class='btn btn-danger' onclick='cancelTooltip()'>不启用</div></div>";
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "守信的脆皮"){
		tooltipText = textString;
		game.global.lockTooltip = true;
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>好的，谢谢。</div></div>";
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Unequip Heirloom"){
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		costText = "<div class='maxCenter'>";
		tooltipText = "<p>You have no more room to carry another Heirloom, ";
		if (game.global.maxCarriedHeirlooms > game.heirlooms.values.length){
			tooltipText += "and you've already purchased the maximum amount of slots.</p><p>Would you like to leave this Heirloom equipped "			
		}
		else if (game.global.nullifium < getNextCarriedCost()){
			tooltipText += "and don't have enough Nullifium to purchase another Carried slot.</p><p>Would you like to leave this Heirloom equipped "
		}
		else {
			tooltipText += "but you do have enough Nullifium to purchase another Carried slot!</p><p>Would you like to purchase another Carried slot, leave this Heirloom equipped, ";
			costText += "<div class='btn btn-success' onclick='cancelTooltip(); addCarried(true); unequipHeirloom();'>Buy a Slot (" + getNextCarriedCost() + " Nu)</div>";
		}
		tooltipText += "or put it in Temporary Storage? <b>If you use your Portal while this Heirloom is in Temporary Storage, it will be recycled!</b></p>";
		costText += "<div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>Leave it equipped</div><div class='btn btn-danger' onclick='cancelTooltip(); unequipHeirloom(null, \"heirloomsExtra\");'>Place in Temporary</div></div>";
	}
	if (what == "Configure AutoStructure"){
		tooltipText = "<p>在这里，您可以选择在自动建筑打开时自动购买哪些建筑。勾选一个复选框来自动购买该建筑，设置下拉菜单来指定应该在下面购买该结构的成本对资源的百分比，并将“Up to:”框设置为您希望购买的该结构的最大数量(0没有限制)。例如，将下拉菜单设为10%，“最多”框设为“房子”，当下一套房子的价格低于你的食物、金属和木材的10%时，只要你的房子少于50套，你就会自动购买房子。\'W\' for Gigastation is the required minimum amount of Warpstations before a Gigastation is purchased.</p><table id='autoStructureConfigTable'><tbody><tr>";
		var count = 0;
		var setting, selectedPerc, checkbox, options;
		for (var item in game.buildings){
			var building = game.buildings[item];
			if (!building.AP) continue;
			if (count != 0 && count % 2 == 0) tooltipText += "</tr><tr>";
			setting = game.global.autoStructureSetting[item];
			selectedPerc = (setting) ? setting.value : 0.1;		
			checkbox = buildNiceCheckbox('structConfig' + item, 'autoCheckbox', (setting && setting.enabled));
			options = "<option value='0.1'" + ((selectedPerc == 0.1) ? " selected" : "") + ">0.1%</option><option value='1'" + ((selectedPerc == 1) ? " selected" : "") + ">1%</option><option value='5'" + ((selectedPerc == 5) ? " selected" : "") + ">5%</option><option value='10'" + ((selectedPerc == 10) ? " selected" : "") + ">10%</option><option value='25'" + ((selectedPerc == 25) ? " selected" : "") + ">25%</option>";
			tooltipText += "<td><div class='row'><div class='col-xs-5' style='padding-right: 5px'>" + checkbox + "&nbsp;&nbsp;<span>" + item + "</span></div><div style='text-align: center; padding-left: 0px;' class='col-xs-2'><select  id='structSelect" + item + "'>" + options + "</select></div><div class='col-xs-5 lowPad' style='text-align: right'>Up To: <input class='structConfigQuantity' id='structQuant" + item + "' type='number'  value='" + ((setting && setting.buyMax) ? setting.buyMax : 0 ) + "'/></div></div></td>";
			count++;
		}
		tooltipText += "</tr><tr>";
		//stupid gigas making this all spaghetti
		setting = game.global.autoStructureSetting.Gigastation;
		selectedPerc = (setting) ? setting.value : 0.1;		
		checkbox = buildNiceCheckbox('structConfigGigastation', 'autoCheckbox', (setting && setting.enabled));
		options = "<option value='0.1'" + ((selectedPerc == 0.1) ? " selected" : "") + ">0.1%</option><option value='1'" + ((selectedPerc == 1) ? " selected" : "") + ">1%</option><option value='5'" + ((selectedPerc == 5) ? " selected" : "") + ">5%</option><option value='10'" + ((selectedPerc == 10) ? " selected" : "") + ">10%</option><option value='25'" + ((selectedPerc == 25) ? " selected" : "") + ">25%</option>";
		tooltipText += "<td><div class='row'><div class='col-xs-5' style='padding-right: 5px'>" + checkbox + "&nbsp;&nbsp;<span>Gigastation</span></div><div style='text-align: center; padding-left: 0px;' class='col-xs-2'><select  id='structSelectGigastation'>" + options + "</select></div><div class='col-xs-5 lowPad' style='text-align: right'>At W: <input class='structConfigQuantity' id='structQuantGigastation' type='number'  value='" + ((setting && setting.buyMax) ? setting.buyMax : 0 ) + "'/></div></div></td>";



		if (game.global.highestLevelCleared >= 229){
			var nurserySetting = (typeof game.global.autoStructureSetting.NurseryZones !== 'undefined') ? game.global.autoStructureSetting.NurseryZones : 1;
			tooltipText += "<td><div class='row'><div class='col-xs-12' style='text-align: right; padding-right: 5px;'>Don't buy Nurseries Until Z: <input style='width: 20.8%; margin-right: 4%;' class='structConfigQuantity' id='structZoneNursery' type='number' value='" + nurserySetting + "'></div></div></td>";
		}
		tooltipText += "</tr></tbody></table>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='saveAutoStructureConfig()'>Apply</div><div class='btn btn-danger' onclick='cancelTooltip()'>Cancel</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function(){
			verticalCenterTooltip(true);
		};
	}
	if (what == "AutoStructure"){
		tooltipText = "<p>你对这个世界的掌握使你的工头能够处理相当复杂的命令，关于哪些建筑应该建造的。点击按钮右侧的齿轮图标，告诉你的工头你什么时候想要什么建筑。点击按钮左侧，开启或者关闭该功能。</p>";
		costText = "";
	}
	if (what == "Configure Generator State"){
		geneMenuOpen = true;
		elem = document.getElementById('tooltipDiv2');
		tip2 = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		tooltipText = "<div style='padding: 1.5vw;'><div style='color: red; font-size: 1.1em; text-align: center;' id='genStateConfigError'></div>"
		tooltipText += "<div id='genStateConfigTooltip'>" + getGenStateConfigTooltip() + "</div>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='saveGenStateConfig()'>Apply</div><div class='btn btn-danger' onclick='cancelTooltip()'>Cancel</div></div>";
	}
	if (what == "Configure AutoJobs"){
		tooltipText = "<div style='color: red; font-size: 1.1em; text-align: center;' id='autoJobsError'></div><p>Welcome to AutoJobs! <span id='autoJobsHelpBtn' style='font-size: 0.6vw;' class='btn btn-md btn-info' onclick='toggleAutoJobsHelp()'>Help</span></p><div id='autoJobsHelpDiv' style='display: none'><p>The left side of this window is dedicated to jobs that are limited more by workspaces than resources. 1:1:1:1 will purchase all 4 of these ratio-based jobs evenly, and the ratio refers to the amount of workspaces you wish to dedicate to each job. You can use any number larger than 0. Ratio-based jobs will be purchased once at the end of every Zone AND once every 30 seconds, but not more often than once every 2 seconds.</p><p>The right side of this window is dedicated to jobs limited more by resources than workspaces. Set the dropdown to the percentage of resources that you'd like to be spent on each job, and add a max amount if you wish (0 for unlimited). Percentage-based jobs are purchased once every 2 seconds.</p></div><table id='autoStructureConfigTable' style='font-size: 1.1vw;'><tbody>";
		var percentJobs = ["Trainer", "Explorer", "Magmamancer"];
		var ratioJobs = ["Farmer", "Lumberjack", "Miner", "Scientist"];
		var count = 0;
		for (var x = 0; x < ratioJobs.length; x++){
			tooltipText += "<tr>";
			var item = ratioJobs[x];
			var setting = game.global.autoJobsSetting[item];
			var selectedPerc = (setting) ? setting.value : 0.1;
			var max;	
			var checkbox = buildNiceCheckbox('autoJobCheckbox' + item, 'autoCheckbox', (setting && setting.enabled));
			tooltipText += "<td style='width: 40%'><div class='row'><div class='col-xs-6' style='padding-right: 5px'>" + checkbox + "&nbsp;&nbsp;<span>" + item + "</span></div><div class='col-xs-6 lowPad' style='text-align: right'>Ratio: <input class='jobConfigQuantity' id='autoJobQuant" + item + "' type='number'  value='" + ((setting && setting.ratio) ? setting.ratio : 1 ) + "'/></div></div></td>"
			if (ratioJobs[x] == "Scientist"){
				max = ((setting && setting.buyMax) ? setting.buyMax : 0 );
				if (max > 1e4) max = max.toExponential().replace('+', '');
				tooltipText += "<td style='width: 60%'><div class='row' style='width: 50%; border: 0; text-align: left;'><span style='padding-left: 0.4vw'>&nbsp;</span>Up To: <input class='jobConfigQuantity' id='autoJobQuant" + item + "' value='" + prettify(max) + "'/></div></td>"
			}
			if (percentJobs.length > x){
				item = percentJobs[x];
				setting = game.global.autoJobsSetting[item];
				selectedPerc = (setting) ? setting.value : 0.1;
				max = ((setting && setting.buyMax) ? setting.buyMax : 0 );
				if (max > 1e4) max = max.toExponential().replace('+', '');	
				checkbox = buildNiceCheckbox('autoJobCheckbox' + item, 'autoCheckbox', (setting && setting.enabled));	
				var options = "<option value='0.1'" + ((selectedPerc == 0.001) ? " selected" : "") + ">0.1%</option><option value='1'" + ((selectedPerc == .01) ? " selected" : "") + ">1%</option><option value='5'" + ((selectedPerc == .05) ? " selected" : "") + ">5%</option><option value='10'" + ((selectedPerc == .10) ? " selected" : "") + ">10%</option><option value='25'" + ((selectedPerc == .25) ? " selected" : "") + ">25%</option>";
				tooltipText += "<td style='width: 60%'><div class='row'><div class='col-xs-5' style='padding-right: 5px'>" + checkbox + "&nbsp;&nbsp;<span>" + item + "</span></div><div style='text-align: center; padding-left: 0px;' class='col-xs-2'><select  id='autoJobSelect" + item + "'>" + options + "</select></div><div class='col-xs-5 lowPad' style='text-align: right'>Up To: <input class='jobConfigQuantity' id='autoJobQuant" + item + "'  value='" + prettify(max) + "'/></div></div></td></tr>";	
			}
		}
		tooltipText += "<tr><td style='width: 40%'><div class='col-xs-7' style='padding-right: 5px'>Gather on Portal:</div><div class='col-xs-5 lowPad' style='text-align: right'><select style='width: 100%' id='autoJobSelfGather'><option value='0'>Nothing</option>";
		var values = ['Food', 'Wood', 'Metal', 'Science'];
		for (var x = 0; x < values.length; x++){
			tooltipText += "<option" + ((game.global.autoJobsSetting.portalGather && game.global.autoJobsSetting.portalGather == values[x].toLowerCase()) ? " selected='selected'" : "") + " value='" + values[x].toLowerCase() + "'>" + values[x] + "</option>";
		}
		tooltipText += "</select></div></td></tr>";
		tooltipText += "</tbody></table>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='saveAutoJobsConfig()'>Apply</div><div class='btn btn-danger' onclick='cancelTooltip()'>Cancel</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function(){
			verticalCenterTooltip(true);
		};
	}
	if (what == "AutoJobs"){
		tooltipText = "<p>Your continued mastery of this world has enabled you to set rules for automatic job allocation. Click the cog icon on the right side of this button to tell your Human Resourceimps what you want and when you want it, then click the left side of the button to tell them to start or stop.</p>";
		costText = "";
	}
	if (what == "AutoGold"){
		tooltipText = '<p>感谢你杰出的科学家，你可以自动购买黄金升级！自动升级在以下几个选项间切换: </p><p><b>自动黄金升级关闭</b> 当你觉得不是特别可靠时。</p><p><b>自动黄金升级-氦 (' + game.goldenUpgrades.Helium.purchasedAt.length + '/' + Math.round(game.goldenUpgrades.Helium.currentBonus * 100) + '%)</b>当你想要提升你的能力（指消耗氦的升级）时。五分之四的脆皮同意这将增加你的整体氦气，尽管没有一个脆皮真正理解这个问题。</p><p><b>自动金色升级-战斗 (' + game.goldenUpgrades.Battle.purchasedAt.length + '/' + Math.round(game.goldenUpgrades.Battle.currentBonus * 100) + '%)</b> 当你的脆皮会在你转身的时候偷懒的时候。</p>';
		tooltipText += '<p><b>自动黄金升级-虚空 (' + game.goldenUpgrades.Void.purchasedAt.length + '/' + Math.round(game.goldenUpgrades.Void.currentBonus * 100) + '%)</b> 有两种不同的口味:<br/><b>虚空</b> - 在切换到金色氦之前，委托你的科学家购买尽可能多的金色虚空，或者...<br/><b>空隙</b> - 你的科学家将再次尝试购买尽可能多的金色虚空，但之后转而使用金色战斗。</p>';
		tooltipText += '<p>请在自动购买任何金色升级之前，点击此按钮后再等4秒。并且不要忘记经常感谢您的科学家!说真的,它们喜怒无常。</p>';
		costText = "";
	}
	if (what == "Unliving"){
		var stacks = game.challenges.Life.stacks;
		var mult = game.challenges.Life.getHealthMult(true);
		if (stacks > 130) tooltipText = "你的脆皮看起来快要死了，在这个维度是健康的表现。你维持的很好！";
		else if (stacks > 75) tooltipText = "你的脆皮看起来更有生机，但速度变得更慢，但至少他们仍然面色苍白。";
		else if (stacks > 30) tooltipText = "这个维度中的敌人看起来比你的脆皮死灵化程度更深!";
		else tooltipText = "你的脆皮看起来非常正常和健康，这不是你在这个维度中想要的状态。";
		tooltipText += " <b>脆皮的攻击和生命值都增加" + mult + "。</b>";
		costText = "";
	}
	if (what == "AutoGolden Unlocked"){
		tooltipText = "<p>Your Trimps have extracted and processed hundreds of Golden Upgrades by now, and though you're still nervous to leave things completely to them, you figure they can probably handle doing this on their own as well. You find the nearest Trimp and ask if he could handle buying Golden Upgrades on his own, as long as you told him which ones to buy. You can tell by the puddle of drool rapidly gaining mass at his feet that this is going to take either magic or a lot of hard work.</p><p>You can't find any magic anywhere, so you decide to found Trimp University, a school dedicated to teaching Trimps how to extract the might of Golden Upgrades without any assistance. Weeks go by while you and your Trimps work tirelessly to set up the University, choosing only the finest building materials and hiring only the most renowned Foremen to draw the plans. Just as you're finishing up, a Scientist stops by, sees what you're doing, and offers to just handle the Golden Upgrades instead. Probably should have just asked one of them first.</p><p><b>You have unlocked AutoGolden!</b></p>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip()'>关闭</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";

	}
	if (what == "Poisoned"){
		tooltipText = "这个敌人被毒赋权伤害,每个回合多受到" + prettify(game.empowerments.Poison.currentDebuffPower) + " 的额外伤害。";
		costText = "";
	}
	if (what == "Chilled"){
		tooltipText = "This enemy has been chilled by the Empowerment of Ice, is taking " + prettify(game.empowerments.Ice.getDamageModifier() * 100) + "% more damage, and is dealing " + prettify((1 - game.empowerments.Ice.getCombatModifier()) * 100) + "% less damage with each normal attack.";
		costText = "";
	}
	if (what == "Breezy"){
		var heliumText = (!game.global.mapsActive)? "增加 " + prettify(game.empowerments.Wind.getCombatModifier(true) * 100) + "% 所有氦的获取，以及" : "增加所有非氦 ";
		tooltipText = "这个敌人周围有大风刮来 " + heliumText + " 资源 " + prettify(game.empowerments.Wind.getCombatModifier() * 100) + "%.";
		costText = "";
	}
	if (what == "Perk Preset"){
		if (textString == "Save"){
			what = "保存额外福利预设";
			tooltipText = "点击把你当前的额外福利放在选定的预设值上";
		}
		else if (textString == "Rename"){
			what = "重命名额外福利预设";
			tooltipText = "点击为当前选中的额外福利设置一个名称";
		}
		else if (textString == "Load"){
			what = "加载额外福利预设";
			tooltipText = "点击载入当前选中的额外福利预设。";
			if (!game.global.respecActive) tooltipText += " <p class='red'>您必须有相应的激活才能加载预置!</p>";
		}
		else if (textString == "Import"){
			what = "Import Perk Preset";
			tooltipText = "Click to import a perk setup from a text string";
		}
		else if (textString == "Export"){
			what = "Export Perk Setup";
			tooltipText = "Click to export a copy of your current perk setup to share with friends, or to save and import later!"
		}
		else if (textString > 0 && textString <= 3){
			var preset = game.global["perkPreset" + textString];
			if (typeof preset === 'undefined') return;
			what = (preset.Name) ? "预设: " + preset.Name : "预设 " + textString;
			if (isObjectEmpty(preset)){
				tooltipText = "<span class='red'>这个预设槽是空的!</span> 选择这个插槽，然后点击“保存”，将当前的额外福利配置保存到这个槽中。只要您愿意，您就可以随时加载该配置，只要您有您的响应。";
			}
			else{
				tooltipText = "<p style='font-weight: bold'>这种预设:</p>";
				var count = 0;
				for (var item in preset){
					if (item == "Name") continue;
					tooltipText += (count > 0) ? ", " : "";
					tooltipText += '<b>' + cnItem(item.replace('_', ' ')) + ":</b>&nbsp;" + preset[item];
					count++;
				}
			}
		}
	}
	if (what == "Rename Preset"){
		what == "Rename Preset " + selectedPreset;
		tooltipText = "为你的额外福利预设输入一个名字！这个名字会出现在预设的栏中，并且很容易识别哪个预设是哪个。"
		if (textString) tooltipText += " <b>额外福利最多可以达到 1,000。</b>";
		var preset = game.global["perkPreset" + selectedPreset];
		var oldName = (preset && preset.Name) ? preset.Name : "";
		tooltipText += "<br/><br/><input id='renamePresetBox' maxlength='25' style='width: 50%' value='" + oldName + "' />";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='renamePerkPreset()'>确认</div><div class='btn btn-info' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function() {
			var box = document.getElementById("renamePresetBox");
			// Chrome chokes on setSelectionRange on a number box; fall back to select()
			try { box.setSelectionRange(0, box.value.length); }
			catch (e) { box.select(); }
			box.focus();
		};
		noExtraCheck = true;

	}
	if (what == "UnlockedChallenge2"){
		what = "Unlocked Challenge<sup>2</sup>";
		tooltipText = "You hear some strange noises behind you and turn around to see three excited scientists. They inform you that they've figured out a way to modify The Portal to take you to a new type of challenging dimension, a system they proudly call 'Challenge<sup>2</sup>'. You will be able to activate and check out their new technology by clicking the 'Challenge<sup>2</sup>' button next time you go to use The Portal.";
		game.global.lockTooltip = true;
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>Thanks, Scientists</div></div>";
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Eggs"){
		tooltipText = '<span class="eggMessage">It seems as if some sort of animal has placed a bunch of brightly colored eggs in the world. If you happen to see one, you can click on it to send a Trimp to pick it up! According to your scientists, they have a rare chance to contain some neat stuff, but they will not last forever...</span>';
		game.global.lockTooltip = true;
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>I'll keep an eye out.</div></div>";
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Portal"){
		tooltipText = "你找到的传送门装置在实验室里闪着绿光。 多么熟悉的画面...";
		costText = "";
	}
	if (what == "Repeat Map"){
		tooltipText = "允许脆皮们自己找到回广场的路，一旦他们在没有你的帮助下完成过后。他们成长的如此之快！<br/><br/>如果您<b>不</ b>重复，地图结束后，您当前的脆皮组将不会被放弃。 （热键：R）";
		costText = "";
	}
	if (what == "Challenge2"){
		what = "挑战<sup>2</sup>";
		tooltipText = "";
		if (!textString)
		tooltipText = "<p>单击以切换到挑战模式，迎接您的挑战!</p>";
		tooltipText += "<p>在挑战<sup>2</sup> 模式中, 你可以重新进行一些挑战，来为你的脆皮获取一个永久的攻击、生命、氦的加成。大多数的挑战<sup>2</sup>每打通<b>" + squaredConfig.rewardFreq + "个区域将会获得" + squaredConfig.rewardEach + "%的攻击和生命，以及" + prettify(squaredConfig.rewardEach / 10) + "%的氦。每 " + squaredConfig.thresh + " 个区域,每次奖励的攻击和生命的加成将额外增加1%,并且氦加成增加0.1%</b>。所有挑战<sup>2</sup>的加成是相加的, 而且你所达到的最高区域被记录且被换算为加成使用。</p><p><b>所有的挑战<sup>2</sup>都没有一个特定的截止区域</b>,它们只能通过使用传送门，或在“查看能力”页面中放弃挑战来结束。然而，<b>中途不会掉落氦，并且在挑战中及挑战后不会获得奖励氦</b>。虚空地图中仍然会掉落传家宝，所有其他的货币仍然可以获取。</p><p>由于挑战<sup>2</sup>加成，你现在已经得到了" + prettify(game.global.totalSquaredReward) + "%的额外攻击和生命，而且你已得到" + prettify(game.global.totalSquaredReward / 10) + "%的额外氦加成。</p>";
		if (game.talents.headstart.purchased) tooltipText += "<p><b>Note that your Headstart mastery will be disabled during Challenge<sup>2</sup> runs.</b></p>";
		costText = "";
	}
	if (what == "Geneticistassist Settings"){
		if (isItIn == null){
			geneMenuOpen = true;
			elem = document.getElementById('tooltipDiv2');
			tip2 = true;
			var steps = game.global.GeneticistassistSteps;
			tooltipText = "<div id='GATargetError'></div><div>Customize the target thresholds for your Geneticistassist! Use a number between 0.5 and 60 seconds for all 3 boxes. Each box corresponds to a Geneticistassist toggle threshold.</div><div style='width: 100%'><input class='GACustomInput' id='target1' value='" + steps[1] + "'/><input class='GACustomInput' id='target2' value='" + steps[2] + "'/><input class='GACustomInput' id='target3' value='" + steps[3] + "'/><hr class='noBotMarg'/><div class='maxCenter'>" + getSettingHtml(game.options.menu.gaFire, 'gaFire') + getSettingHtml(game.options.menu.geneSend, 'geneSend') + "</div><hr class='noTopMarg'/><div id='GADisableCheck'>" + buildNiceCheckbox('disableOnUnlockCheck', null, game.options.menu.GeneticistassistTarget.disableOnUnlock) + "&nbsp;Start disabled when unlocked each run</div></div>";
			costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='customizeGATargets();'>Confirm</div> <div class='btn btn-danger' onclick='cancelTooltip()'>取消</div>"
			elem.style.left = "33.75%";
			elem.style.top = "25%";
		}
	}
	if (what == "Configure Maps"){
		if (isItIn == null){
			geneMenuOpen = true;
			elem = document.getElementById('tooltipDiv2');
			tip2 = true;
			var steps = game.global.GeneticistassistSteps;
			tooltipText = "<div id='GATargetError'></div><div>自定义运行地图的设置！</div>";
			tooltipText += "<hr class='noBotMarg'/><div class='maxCenter'>"
			var settingCount = 0;
			if (game.global.totalPortals >= 1) {
				tooltipText += getSettingHtml(game.options.menu.mapLoot, 'mapLoot', null, "CM");
				settingCount++;
			}
			if (game.global.totalPortals >= 5){
				tooltipText += getSettingHtml(game.options.menu.repeatVoids, 'repeatVoids', null, "CM");
				settingCount++;
			}
			if (settingCount % 2 == 0) tooltipText += "<br/><br/>";
			tooltipText += '<div class="optionContainer"><div class="noselect settingsBtn ' + ((game.global.repeatMap) ? "settingBtn1" : "settingBtn0") + '" id="repeatBtn2" onmouseover="tooltip(\'Repeat Map\', null, event)" onmouseout="tooltip(\'hide\')" onclick="repeatClicked()">' + ((game.global.repeatMap) ? "重复开启" : "重复关闭") + '</div></div>';
			settingCount++;
			if (settingCount % 2 == 0) tooltipText += "<br/><br/>";
			tooltipText += getSettingHtml(game.options.menu.repeatUntil, 'repeatUntil', null, "CM");
			settingCount++;
			if (settingCount % 2 == 0) tooltipText += "<br/><br/>";
			tooltipText += getSettingHtml(game.options.menu.exitTo, 'exitTo', null, "CM")
			settingCount++;
			if (game.options.menu.mapsOnSpire.lockUnless()){
				if (settingCount % 2 == 0) tooltipText += "<br/><br/>";
				tooltipText +=  getSettingHtml(game.options.menu.mapsOnSpire, 'mapsOnSpire', null, "CM");
				settingCount++;
			}
			if (game.global.canMapAtZone){
				if (settingCount % 2 == 0) tooltipText += "<br/><br/>";
				tooltipText +=  getSettingHtml(game.options.menu.mapAtZone, 'mapAtZone', null, "CM");
				settingCount++;
			}
			tooltipText += "</div>";
			costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip();'>关闭</div></div>"
			elem.style.left = "33.75%";
			elem.style.top = "25%";
		}
	}
	if (what == "Set Map At Zone"){
		tooltipText = "Enter up to 5 numbers between 10 and 1000, separated by commas. Next time you reach any of those Zone numbers, you will automatically be pulled into the Map Chamber.<div id='mapAtZoneErrorText'></div><br/><input style='width: 50%; margin-left: 25%' id='mapAtZoneInput' value='" + game.options.menu.mapAtZone.setZone + "'/>";
		costText = "<div class='maxCenter'><span class='btn btn-success btn-md' id='confirmTooltipBtn' onclick='saveMapAtZone()'>Confirm</span><span class='btn btn-danger btn-md' onclick='cancelTooltip(true)'>Cancel</span>"
		game.global.lockTooltip = true;
		elem.style.top = "25%";
		elem.style.left = "25%";
		ondisplay = function(){
			document.getElementById('mapAtZoneInput').select();
		}
	}
	if (what == "Message Config"){
		tooltipText = "<div id='messageConfigMessage'>在这里，你可以微调你的消息设置，只看到你想要从每个类别。 将鼠标悬停在过滤器的名称上以获取更多信息。</div>";
		var msgs = game.global.messages;
		var toCheck = ["Loot", "Unlocks", "Combat"];
		tooltipText += "<div class='row'>";
		for (var x = 0; x < toCheck.length; x++){
			var name = toCheck[x];
			tooltipText += "<div class='col-xs-4'><span class='messageConfigTitle'>" + cnwhat(toCheck[x]) + "</span><br/>";
			for (var item in msgs[name]){
				if (item == "essence" && game.global.highestLevelCleared < 179) continue;
				if (item == "magma" && game.global.highestLevelCleared < 229) continue;
				if (item == "cache" && game.global.highestLevelCleared < 59) continue;
				if (item == "token" && game.global.highestLevelCleared < 235) continue;
				if (item == 'enabled') continue;
				tooltipText += "<span class='messageConfigContainer'><span class='messageCheckboxHolder'>" + buildNiceCheckbox(name + item, 'messageConfigCheckbox', (msgs[name][item])) + "</span><span onmouseover='messageConfigHover(\"" + name + item + "\", event)' onmouseout='tooltip(\"hide\")' class='messageNameHolder'> - " + cnItem(item) + "</span></span><br/>";
                //                item.charAt(0).toUpperCase() + item.substr(1)
			}
			tooltipText += "</div>";
		}
		tooltipText += "</div>";
		ondisplay = function () {verticalCenterTooltip();};
		game.global.lockTooltip = true;
		elem.style.top = "25%";
		elem.style.left = "25%";
		swapClass('tooltipExtra', 'tooltipExtraLg', elem);
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip();configMessages();'>确定</div> <div class='btn btn-danger' onclick='cancelTooltip()'>取消</div>"
	}

	if (isItIn == "goldenUpgrades"){
		var upgrade = game.goldenUpgrades[what];
		var timesPurchased = upgrade.purchasedAt.length
		var s = (timesPurchased == 1) ? "" : "";
		var three = (game.global.totalPortals >= 5) ? "three" : "two";
		tooltipText += " <b>你只能选择其中之一 " + three + " 黄金升级。 做出明智的选择...</b><br/><br/> 黄金升级每解锁一次，他们的实力就会增加。 你正在获得 " + Math.round(upgrade.currentBonus * 100) + "% 从购买这个升级 " + timesPurchased + " 次" + s + " 从你上一个传送门。";
		if (what == "Void" && (parseFloat((game.goldenUpgrades.Void.currentBonus + game.goldenUpgrades.Void.nextAmt()).toFixed(2)) > 0.72)) tooltipText += "<br/><br/><b class='red'>这个升级会让你超过60％的虚空地图机会，这会破坏宇宙的稳定。 你不想破坏宇宙，是吗？</b>";
		if (what == "Helium" && game.global.runningChallengeSquared) tooltipText += "<br/><br/><b class='red'>You can't earn helium while running a Challenge<sup>2</sup>!</b>";
		costText = "免费";
		if (getAvailableGoldenUpgrades() > 1) costText += " (" + getAvailableGoldenUpgrades() + " 剩余)";
		what = "Golden " + what + " (Tier " + romanNumeral(game.global.goldenUpgrades + 1) + ")";
	}
	if (isItIn == "talents"){
		var talent = game.talents[what];
		tooltipText = talent.description;
		var nextTalCost = getNextTalentCost();
		var thisTierTalents = countPurchasedTalents(talent.tier);
		if (ctrlPressed){
			var highestAffordable = getHighestPurchaseableRow();
			var highestIdeal = getHighestIdealRow();
			var isAffordable = (highestAffordable >= talent.tier);
			var isIdeal = (highestIdeal >= talent.tier);
			if (thisTierTalents == 6) {
				costText = "<span class='green'>你已经购买了这一层!</span>";
			}
			else if (isIdeal) {
				costText = "<span class='green'>你必须买下整个层，才能把你所有的黑暗精华都花光。</span>"
			}
			else if (isAffordable) {
				costText = "<span class='green'>您可以购买整层!</span> <span class='red'>然而，现在购买这一整层可能会限制你能接触到的其他大师。</span>"
			}
			else {
				costText = "<span class='red'>你负担不起购买这一整层的费用。</span>"
			}
		}
		else{
			if (talent.purchased)
				costText = "<span style='color: green'>已购买</span>";
			else if (getAllowedTalentTiers()[talent.tier - 1] < 1 && thisTierTalents < 6){
				costText = "<span style='color: red'>未解锁";
				var lastTierTalents = countPurchasedTalents(talent.tier - 1);
				if (lastTierTalents <= 1) costText += " (购买 " + ((lastTierTalents == 0) ? "2 精通" : "1 更多的精通") + " 从层 " + (talent.tier - 1) + " 去解锁层 " + talent.tier;
				else costText += " (购买1 精通从层 " + (talent.tier - 1) + " 去解锁下一层，从 " + talent.tier;
				if (typeof talent.requires !== 'undefined' && !game.talents[talent.requires].purchased) {
					costText += ". 这种精通需要 " + game.talents[talent.requires].name;
				}
				costText += ")</span>"
			}
			else if (typeof talent.requires !== 'undefined' && !game.talents[talent.requires].purchased)
				costText = "<span style='color: red'>需要 " + game.talents[talent.requires].name + "</span>";
			else if (game.global.essence < nextTalCost && prettify(game.global.essence) != prettify(nextTalCost))
				costText = "<span style='color: red'>" + prettify(nextTalCost) + " 黑暗精华 (使用占卜者阵型赚取更多)</span>";
			else {
				costText = prettify(nextTalCost) + " 黑暗精华";
				if (canPurchaseRow(talent.tier)) {
					costText += "<br/><b style='color: black; font-size: 0.8vw;'>你可以买下这整排!按住Ctrl键点击购买整个行和之前未完成的行。</b>";
				}

			}
		}
		what = talent.name;
		noExtraCheck = true;
	}
	if (what == "Mastery"){
		tooltipText = "<p>点击这里查看你的专精。</p><p>你现在拥有 " + prettify(game.global.essence) + "</b> 黑暗精华。</p>"
	}
	if (what == "The Improbability"){		
		tooltipText = "<span class='planetBreakMessage'>这不应该发生。 这里应该是一个飞艇那里。 有些东西变得不稳定。</span>";
		if (!game.global.autoUpgradesAvailable) tooltipText += "<br/><br/><span class='planetBreakMessage'><b>你的脆皮似乎明白，他们需要更多的帮助，并且你意识到如何永久使用它们来自动升级！<b></span><br/>";
		costText = "<span class='planetBreakDescription'><span class='bad'>脆皮品种速度降低10倍。目前20％的敌人伤害可以穿透你的防御。</span><span class='good'>你已经解锁了一个新的升级来学习一个队伍。 每个区域收获的氦气增加了5倍。设备成本大幅降低。 现在创建修改过的地图便宜了，而且您的科学家已经找到了改进地图的新方法！ 您可以访问“脆皮”挑战！<span></span>";
		if (game.global.challengeActive == "Corrupted") costText += "<br/><br/><span class='corruptedBadGuyName'>看起来腐败早就开始了...</span>";
		costText += "<hr/><div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>我会没事儿的</div><div class='btn btn-danger' onclick='cancelTooltip(); message(\"Sorry\", \"Notices\")'>我很害怕</div></div>"
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Corruption"){
		if (game.global.challengeActive == "Corrupted"){
			tooltipText = "<span class='planetBreakMessage'>Though you've seen the Corruption grow since the planet broke, you can now see a giant spire pumping out tons of the purple goo. Things seem to be absorbing it at a higher rate now.</span><br/>";
			costText += "<span class='planetBreakDescription'><span class='bad'>Improbabilities and Void Maps are now more difficult.</span> <span class='good'>Improbabilities and Void Maps now drop 2x helium.</span></span>";
		}
		else {
			tooltipText = (game.talents.headstart.purchased) ? "Off in the distance, you can see a giant spire grow larger as you approach it." : "You can now see a giant spire only about 20 Zones ahead of you.";
			tooltipText = "<span class='planetBreakMessage'>" + tooltipText + " Menacing plumes of some sort of goopy gas boil out of the spire and appear to be tainting the land even further. It looks to you like the Zones are permanently damaged, poor planet. You know that if you want to reach the spire, you'll have to deal with the goo.</span><br/>";
			costText = "<span class='planetBreakDescription'><span class='bad'>From now on as you press further through Zones, more and more corrupted cells of higher and higher difficulty will begin to spawn. Improbabilities and Void Maps are now more difficult.</span> <span class='good'>Improbabilities and Void Maps now drop 2x helium. Each corrupted cell will drop 15% of that Zone's helium reward.</span></span> ";
		}
		costText += "<hr/><div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>Bring it on</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "The Spire"){	
		tooltipText = "<span class='planetBreakMessage'>The Spire looms menacingly above you, and you take in a deep breath of corruption. You take a look back at your Trimps to help gather some courage, and you push the door open. You slowly walk inside and are greeted by an incredibly loud, deep, human voice.<br/><br/><b>Do you know what you face? If you are defeated ten times in this place, you shall be removed from this space. If you succeed, then you shall see the light of knowledge that you seek.</b><span>";
		tooltipText += "<br/><hr/><span class='planetBreakDescription'><span class='bad'>This Zone is considerably more difficult than the previous and next Zones. If 10 groups of Trimps die in combat while in the spire, the world will return to normal.</span> <span class='good'>Each cell gives more and more helium. Every 10th cell gives a larger reward, and increases all loot gained until your next portal by 2% (including helium).</span>";
		if (game.options.menu.mapsOnSpire.enabled) tooltipText += "<br/><hr/>You were moved to Maps to protect your limited chances at the spire. You can disable this in settings!";
		costText = "<div class='maxCenter'><div class='btn btn-info' onclick='startSpire(true)'>Bring it on</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "The Magma"){
		tooltipText = "<p>You stumble across a large locked chest, unlike anything you've ever seen. The lock looks rusty, you smack it with a rock, and it falls right off. Immediately the ground shakes and cracks beneath your feet, intense heat hits your face, and Magma boils up from the core.</p><p>Where one minute ago there was dirt, grass, and noxious fog, there are now rivers of molten rock (and noxious fog). You'd really like to try and repair the planet somehow, so you decide to keep pushing on. It's been working out well so far, there was some useful stuff in that chest!</p><hr/>";
		tooltipText += "<span class='planetBreakDescription'><span class='bad'>The heat is tough on your Trimps, causing each Zone to reduce their attack and health by 20% more than the last. 10% of your Nurseries will permanently close after each Zone to avoid Magma flows, and Corruption has seeped into both Void and regular Maps, further increasing their difficulty. </span><span class='good'> However, the chest contained plans and materials for the <b>Dimensional Generator</b> building, <b>" + prettify(textString) + " Helium</b>, and <b>100 copies of Coordination</b>! In addition, all Zones are now worth <b>3x Helium</b>!<span></span>";
		costText += "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>K</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Exit Spire"){
		tooltipText = "This will exit the spire, and you will be unable to re-enter until your next portal. Are you sure?";
		costText = "<div class='maxCenter'><div class='btn btn-info' onclick='cancelTooltip(); endSpire()'>Exit Spire</div><div class='btn btn-danger' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Confirm Respec Masteries"){
		if (!textString)
			tooltipText = "这将以20块骨头为代价，返回所有用于天赋的黑暗精华。 你确定吗？";
		else 
			tooltipText = "这将归还所有在大师身上花费的黑暗精华，并将使用" + ((game.global.freeTalentRespecs > 1) ? "one of " : "") + "your remaining " + game.global.freeTalentRespecs + " 免费精通洗点" + needAnS(game.global.freeTalentRespecs) + ".";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip(); respecTalents(true)'>洗点</div><div class='btn btn-danger' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Respec Masteries"){
		tooltipText = "<p>点击洗点按钮，退还花在专精上的所有黑暗精华。<p>";
		if (game.global.freeTalentRespecs > 0) tooltipText += "<p>前三次洗点是免费的, 你还有 " + game.global.freeTalentRespecs + " 次免费机会! 当你的免费机会用完，每次洗点将会花费20骨头。"
		costText = (game.global.freeTalentRespecs > 0) ? "免费!" : ((game.global.b >= 20) ? "<span class='green'>" : "<span class='red'>") + "20 骨头</span>";
	}
	if (what == "The Geneticistassist"){
		tooltipText = "Greetings, friend! I'm your new robotic pal <b>The Geneticistassist</b> and I am here to assist you with your Geneticists. I will hang out in your Jobs tab, and will appear every run after Geneticists are unlocked. You can customize me in Settings under 'General'!";
		costText = "<div class='maxCenter'><div class='btn btn-info' id='confirmTooltipBtn' onclick='cancelTooltip()'>Thanks, Geneticistassist!</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "MagnetoShriek"){
		var shriekValue = ((1 - game.mapUnlocks.roboTrimp.getShriekValue()) * 100).toFixed(1);
		tooltipText = "你的机械脆皮宠物似乎擅长于在你与敌人间扭曲出一个磁力护盾，尤其是无序。你可以每隔5个区域就激活这个能力，来让你的脆皮减少受到来自无序 " + shriekValue + "% 的攻击伤害，这技能必须在每次冷却后重新启动。";
		tooltipText += "<span id='roboTrimpTooltipActive' style='font-weight: bold'><br/><br/>";
		tooltipText += (game.global.useShriek) ? "磁力护盾正在运行，将在下一个无序后过热。" : "磁力护盾没有开启，也不会过热。";
		tooltipText += "</span>";
		costText = "";
		//elem.style.top = "55%";
	}
	if (what == "Reset"){
		tooltipText = "你确定要重置吗?这实际上真的会重置你的游戏。你不会得到任何好玩的东西，游戏记录将会消失。 <b style='color: red'>这不是你想要的软重置。 这将删除您的保存。</b>";
		costText="<div class='maxCenter'><div class='btn btn-danger' onclick='resetGame();unlockTooltip();tooltip(\"hide\")'>删除存档</div> <div class='btn btn-info' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "战斗"){
		tooltipText = "你把这些可怜的脆皮们运送到战场上去遭受厄运。然而你会得到很酷的东西,他们会明白的。 (热键: F)";
		var currentSend = game.resources.trimps.getCurrentSend();
		costText = (currentSend > 1) ? "" : "";
		costText = prettify(currentSend) + " 脆皮" + costText;
	}
	if (what == "自动战斗"){
		tooltipText = "允许这些脆皮们开始自己去战斗，当他们的小镇变得拥挤不堪的时候。(热键: A)";
		costText = "";
	}
	if (what == "New Achievements"){
		tooltipText = "宇宙已对您的成就表示关注，并开始跟踪您的成就。你已经完成了一些之前的冒险，你想看看吗?";
		costText = "<div class='maxCenter'><div class='btn btn-success' onclick='toggleAchievementWindow(); cancelTooltip()'>查看成就</div> <div class='btn btn-danger' onclick='cancelTooltip()'>不，听起来很蠢。</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Upgrade Generator"){
		tooltipText = getGeneratorUpgradeHtml();
		costText = "<b style='color: red'>这些升级通过传送门以后依旧有效，不能退款。做出你明智的选择！ " + getMagmiteDecayAmt() + "% 的岩浆岩在通过传送门时会遗失。</b><br/><br/><div class='maxCenter'><span class='btn btn-info' onclick='cancelTooltip()'>关闭</span></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function(){
			updateGeneratorUpgradeHtml();
			verticalCenterTooltip();
		};
		titleText = "<div id='generatorUpgradeTitle'>升级生成器</div><div id='magmiteOwned'></div>";
	}
	if (what == "Queue"){
		tooltipText = "在你的队列里有一个建筑，您需要点击 \"Build\" 去完成建造的工作。 点击队列里的项目将会取消它,并且资源将全额退还。";
		costText = "";
	}
	if (what == "Toxic" && isItIn != "dailyStack"){
		tooltipText = "这个敌人带有毒性。你将多获得 " + (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks).toFixed(1) + "% 的资源!噢,这个敌人也有5倍的攻击，2倍的防御，你的脆皮每次攻击将会损失5%最大生命值的血量，有毒的空气使脆皮的繁殖速度减少 " + (100 - (Math.pow(game.challenges.Toxicity.stackMult, game.challenges.Toxicity.stacks) * 100)).toFixed(2) + "% 。这些效果将在清除一个区域后重置。";
		costText = "";
	}
	if (what == "Momentum"){
		var stacks = game.challenges.Lead.stacks;
		tooltipText = "这个敌人的攻击和血量都增加 " + prettify(stacks * 4) + "% 额外多穿刺 " + (stacks * 0.1).toFixed(1) + "% 的防御,并且脆皮每次攻击不杀死它将会扣除脆皮 " + (stacks * 0.03).toFixed(2) + "% 生命值";
		costText = "";
	}
	if (what == "Custom"){
		customUp = (textString) ? 2 : 1;
		tooltipText = "在下方输入一个数字来自定义你购买的数量。您还可以使用2e5和200k的缩写来选择大量的数字，例如1/2和50％的分数来选择可用工作空间的一小部分。"
		if (textString) tooltipText += " <b>最大补贴1,000</b>";
		tooltipText += "<br/><br/><input id='customNumberBox' style='width: 50%' value='" + ((!isNumberBad(game.global.lastCustomExact)) ? prettify(game.global.lastCustomExact) : game.global.lastCustomExact) + "' />";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='numTab(5, " + textString + ")'>应用</div><div class='btn btn-info' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function() {
			var box = document.getElementById("customNumberBox");
			// Chrome chokes on setSelectionRange on a number box; fall back to select()
			try { box.setSelectionRange(0, box.value.length); }
			catch (e) { box.select(); }
			box.focus();
		};
		noExtraCheck = true;
	}
	if (what == "Max"){
		var forPortal = (textString) ? true : false;
		tooltipText = "没有理由把所有东西都花在一个地方! 在这里你可以设置你的资源比例，通过使用“最大的按钮。 把这个设置为0。5，最多只会花掉你50%的资源，等等。"
		costText = "<ul id='buyMaxUl'><li onclick='setMax(1, " + forPortal + ")'>最大</li><li onclick='setMax(0.5, " + forPortal + ")'>0.5</li><li onclick='setMax(0.33, " + forPortal + ")'>0.33</li><li onclick='setMax(0.25, " + forPortal + ")'>0.25</li><li onclick='setMax(0.1, " + forPortal + ")'>0.1</li></ul>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "导出"){
		var saveText = save(true);
		if (textString){
			tooltipText = textString + "<br/><br/><textarea id='exportArea' spellcheck='false' style='width: 100%' rows='5'>" + saveText + "</textarea>";
			what = "感谢!";
		}
		else
		tooltipText = "这是你的存档的字符串，有很多像这样的，但这一串是只属于你的。找个安全的地方保存起来，这样下次你玩的时候就能节省很多时间了。<br/><br/><textarea spellcheck='false' id='exportArea' style='width: 100%' rows='5'>" + saveText + "</textarea>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip()'>知道了</div>";
		if (document.queryCommandSupported('copy')){
			costText += "<div id='clipBoardBtn' class='btn btn-success'>复制到粘贴板</div>";
		}
		costText += "<a id='downloadLink' target='_blank' download='Trimps Save P" + game.global.totalPortals + " Z" + game.global.world + ".txt', href=";
		if (Blob !== null) {
			var blob = new Blob([saveText], {type: 'text/plain'});
			var uri = URL.createObjectURL(blob);
			costText += uri;
		} else {
			costText += 'data:text/plain,' + encodeURIComponent(saveText);
		}
		costText += " ><div class='btn btn-danger' id='downloadBtn'>Download as File</div></a>";
		costText += "</div>";
		ondisplay = tooltips.handleCopyButton();
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "Export Perks"){
		tooltipText = "It may not look like much, but all of your perks are in here! You can share this string with friends, or save it to your computer to import later!<br/><br/><textarea spellcheck='false' id='exportArea' style='width: 100%' rows='5'>" + exportPerks() + "</textarea>";
		costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip()'>Got it</div>";
		if (document.queryCommandSupported('copy')){
			costText += "<div id='clipBoardBtn' class='btn btn-success'>Copy to Clipboard</div>";
		}
		costText += "</div>";
		ondisplay = tooltips.handleCopyButton();
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "导入"){
		tooltipText = "导入你存档的字符串！很有趣，我保证！<br/><br/><textarea spellcheck='false' id='importBox' style='width: 100%' rows='5'></textarea>";
		costText="<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip(); load(true);'>导入</div>"
		if (playFabId != -1) costText += "<div class='btn btn-primary' onclick='loadFromPlayFab()'>从PlayFab导入</div>";
		costText += "<div class='btn btn-info' onclick='cancelTooltip()'>取消</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function () {
			document.getElementById('importBox').focus();
		}
	}
	if (what == "Import Perks"){
		tooltipText = "Import your perks from a text string!<br/><br/><textarea spellcheck='false' id='perkImportBox' style='width: 100%' rows='5'></textarea>";
		costText = "<p class='red'></p>";
		costText += "<div id='confirmTooltipBtn' class='btn btn-info' onclick='this.previousSibling.innerText = importPerks()'>Import</div>";
		costText += "<div class='btn btn-info' onclick='cancelTooltip()'>Cancel</div></div>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
		ondisplay = function () {
			document.getElementById('perkImportBox').focus();
		};
	}
	if (what == "AutoPrestige"){
		tooltipText = '<p>自从您第一次在这里崩溃以来，您的科学家已经走了很长一段路，</i>现在可以自动为您购买装备重铸，<i>几乎不会犯任何灾难性的错误。</i>他们理解“No”这个单词和以下三个命令: </p><p><b>自动重铸所有装备</b> 总是会先购买最便宜的装备重铸</p><p><b>只重铸武器</b> 正如你所能猜到的，将只购买武器重铸。</p><p><b>优先重铸武器</b> 只会购买武器的重铸，除非最便宜的装甲重铸低于最便宜的武器重铸的5%。 如果没有可用的武器声望，只有当其成本为总资源的5％或更少时，才会购买最便宜的装甲威望。</p>';
	}
	if (what == "AutoUpgrade"){
		tooltipText = "你的科学家终于能自己处理一些升级了！把这个打开将能自动升级大部分的升级项。不包括装备进阶以及会弹出确认窗口的升级。";
	}
	if (what == "Recycle All"){
		tooltipText = "回收所有在选定级别以下的地图。";
	}
	if (what == "PlayFab Login"){
		var tipHtml = getPlayFabLoginHTML();
		tooltipText = tipHtml[0];
		costText = tipHtml[1];
		game.global.lockTooltip = true;
		elem.style.top = "15%";
		elem.style.left = "25%";
		swapClass('tooltipExtra', 'tooltipExtraLg', elem);
		noExtraCheck = true;
	}
	if (what == "PlayFab Conflict"){
		tooltipText = "看起来你在PlayFab上保存的存档比你电脑上的存档进度更远一些。<br/><b>你在PlayFab上的存档总共获得了" + prettify(textString) + "氦,打通区域" + attachFunction + ",并且总共清除了" + prettify(numCheck) + "区域。在你电脑上的存档总共只有" + prettify(game.global.totalHeliumEarned) + "氦，打通区域" + game.global.highestLevelCleared + ",并且总共清除" + prettify(game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal) + "区域。</b><br/>你想要从PlayFab上下载存档,还是要用你电脑的存档覆盖网络上的存档,或者是取消，什么都不做?";
		costText = "<span class='btn btn-primary' onclick='playFabFinishLogin(true)'>从PlayFab下载存档</span><span class='btn btn-warning' onclick='playFabFinishLogin(false)'>用电脑存档覆盖PlayFab的存档</span><span class='btn btn-danger' onclick='cancelPlayFab();'>取消</span>";
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (what == "DominationDominating"){
		what = "Domination: Dominating";
		noExtraCheck = true;
		tooltipText = "This Bad Guy is Dominating! It has 2.5x attack, 7.5x health, and heals for 5% of its max health after each attack. However, it will also drop 3x Helium!"
		costText = "";
	}
	if (what == "DominationWeak"){
		what = "Domination: Weak";
		noExtraCheck = true;
		tooltipText = "This Bad Guy is having its power siphoned by an even worse Bad Guy! It deals 90% less damage and has 90% less health."
		costText = "";
	}
	if (what == "Fire Trimps"){
		if (!game.global.firing)
		tooltipText = "激活解雇模式，工作按钮将会变成红色并将会开始解雇脆皮们而不是雇佣他们。 被解雇的脆皮们将开始自我繁殖而不是工作， 但你不会得到任何资源的返还。";
		else
		tooltipText = "关闭解雇模式";
		costText = "";
	}
	if (what == "Maps"){
		if (!game.global.preMapsActive)
		tooltipText = "前往地图室，地图内充满了好东西。每打通一遍你能制作的最大级别的地图，你在打该区域时，便有20%的伤害加成。（最多叠加10次）。(热键: M)";
		else
		tooltipText = "回到世界地图 (热键: M)";
		costText = "";
	}

	if (what == 'Error') {
		game.global.lockTooltip = true;
		var returnObj = tooltips.showError(textString);
		tooltipText = returnObj.tooltip;
		costText = returnObj.costText;
		ondisplay = tooltips.handleCopyButton();
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (isItIn == "jobs"){
		var buyAmt = game.global.buyAmt;
		if (buyAmt == "Max") buyAmt = calculateMaxAfford(game.jobs[what], false, false, true);
		if (game.global.firing && what != "Amalgamator"){
			var firstChar = what.charAt(0);
			var aAn = (firstChar == "A" || firstChar == "E" || firstChar == "I" || firstChar == "O" || firstChar == "U") ? " an " : " a ";
			tooltipText = "Fire " + aAn + " " + what + ". Refunds no resources, but frees up some workspace for your Trimps.";
			costText = "";
		}
		else{
			var workspaces = game.workspaces;
			var ignoreWorkspaces = (game.jobs[what].allowAutoFire && game.options.menu.fireForJobs.enabled);
			if (workspaces < buyAmt && !ignoreWorkspaces) buyAmt = workspaces;
			costText = getTooltipJobText(what, buyAmt);
		}
		if (what == "Amalgamator") {
			noExtraCheck = true;
			costText = "";
		}
		else if (buyAmt > 1) cntitle(what) += " X " + prettify(buyAmt);
	}
	if (isItIn == "buildings"){
        var awhat="";
		costText = canAffordBuilding(what, false, true);
        awhat=cnwhat(what);
		if (game.global.buyAmt != 1) {
			if (game.buildings[what].percent){
				tooltipText += " <b>你只能购买 1 " + awhat + "同一时间.</b>";
				what =awhat + " X 1";
			}
			else {
				awhat += " X " + prettify((game.global.buyAmt == "Max") ? calculateMaxAfford(game.buildings[what], true) : game.global.buyAmt);
                what=awhat;
			}
		}
	}
	if (isItIn == "portal"){
		var resAppend = (game.global.kongBonusMode) ? " Bonus Points" : "氦";
		var perkItem = game.portal[what];
		if (!perkItem.max || perkItem.max > perkItem.level + perkItem.levelTemp) costText = "需要"+prettify(getPortalUpgradePrice(what)) + resAppend;
		else costText = "";
		if (game.global.buyAmt == "Max") what += " X " + getPerkBuyCount(what);
		else if (game.global.buyAmt > 1) what += " X " + game.global.buyAmt;
		tooltipText += " <b>(你已经花费 " + prettify(perkItem.heliumSpent + perkItem.heliumSpentTemp) + " 氦在这个能力上)</b>";
		what = what.replace("_", " ");
	}
	if (isItIn == "equipment"){
		costText = canAffordBuilding(what, false, true, true);
		if (what == "Shield" && game.equipment.Shield.blockNow){
			var blockPerShield = game.equipment.Shield.blockCalculated + (game.equipment.Shield.blockCalculated * game.jobs.Trainer.owned * (game.jobs.Trainer.modifier / 100));
			tooltipText += " (" + prettify(blockPerShield) + " 经过培训)";
		}
		if (game.global.buyAmt != 1) {
            var cwhat=cnwhat(what);
			cwhat += " X " + ((game.global.buyAmt == "Max") ? calculateMaxAfford(game.equipment[what], false, true) : game.global.buyAmt);
		}
	}
	if (isItIn == "upgrades"){
		var mouseOverElem = (lastMousePos[0] && lastMousePos[1]) ? document.elementFromPoint(lastMousePos[0], lastMousePos[1]) : null;
		if (mouseOverElem && mouseOverElem.id == "upgradesHere"){
			cancelTooltip();
			return;
		}
		if (typeof tooltipText.split('@')[1] !== 'undefined'){
			var prestigeCost = "<b>你可能不想这样做。</b> 你的下一 " + cntitle(game.upgrades[what].prestiges) + " 将授予 " + getNextPrestigeValue(what) + "。";
			tooltipText = tooltipText.replace('@', prestigeCost);
		}
		if (typeof tooltipText.split('$')[1] !== 'undefined'){
			var upgradeTextSplit = tooltipText.split('$');
			var color = game.upgrades[what].specialFilter();
			color = color ? "green" : "red";
			tooltipText = upgradeTextSplit[0] + "<span style='color: " + color + "; font-weight: bold;'>" + upgradeTextSplit[1]  + "</span>";
		}
		if (typeof tooltipText.split('?')[1] !== 'undefined' && what != 'Dominance'){
			var percentNum = (game.global.frugalDone) ? '60' : '50';
			tooltipText = tooltipText.replace('?', percentNum);
		}
		if (what == "Coordination"){
			var coordReplace = (game.portal.Coordinated.level) ? (25 * Math.pow(game.portal.Coordinated.modifier, game.portal.Coordinated.level)).toFixed(3) : 25;
			tooltipText = tooltipText.replace('<coord>', coordReplace);
			if (!canAffordCoordinationTrimps()){
				var currentSend = game.resources.trimps.getCurrentSend();
				var amtToGo = Math.floor((currentSend * 3) - game.resources.trimps.realMax());
				var s = (amtToGo == 1) ? "" : "";
				tooltipText += " <b>您需要足够的空间容纳最多 " + prettify(currentSend * 3) + " 的脆皮。 你现在缺少 " + prettify(Math.floor(amtToGo)) + " 脆皮" + s + "。</b>";
			}
		}
	}
	if (isItIn == "maps"){
		tooltipText = "这是一张地图。 点击它来查看它的属性或运行它。 地图可以根据需要多次运行。";
		costText = "";
	}
	if (what == 'confirm'){
		if (!renameBtn) renameBtn = "Confirm";
		what = numCheck;
		tooltipText = textString;
		if (attachFunction == null) attachFunction = "";
		if (!noHide) attachFunction = attachFunction + "; cancelTooltip()";
		attachFunction = (attachFunction) ? ' onclick="' + attachFunction + '"' : "";
		costText = ' <div class="maxCenter" id="confirmTipCost"><div id="confirmTooltipBtn" class="btn btn-info"' + attachFunction + '>' + renameBtn + '</div>';
		if (!hideCancel) costText += '<div class="btn btn-danger" onclick="cancelTooltip()">取消</div>';
		costText += '</div>';
		game.global.lockTooltip = true;
		elem.style.left = "33.75%";
		elem.style.top = "25%";
	}
	if (isItIn == 'customText') {
		costText = (attachFunction) ? attachFunction : "";
		tooltipText = textString;
		noExtraCheck = true;
		if (event == "lock"){
			if (what == "Spire Settings"){
				swapClass('tooltipExtra', 'tooltipExtraLg', elem);
				elem.style.left = "25%";
			}
			else{
				elem.style.left = "33.75%";
			}
			elem.style.top = "25%";
			game.global.lockTooltip = true;
			if (!attachFunction) costText = '<div class="btn btn-danger" onclick="cancelTooltip()">Close</div>';
			event = 'update';
		}
		if (numCheck == "center"){
			ondisplay = function(){
				verticalCenterTooltip();
			}
		}
	}

	if (!noExtraCheck){
		var tipSplit = tooltipText.split('$');
		if (typeof tipSplit[1] !== 'undefined'){
			if (tipSplit[1] == 'incby'){
				var increase = toTip.increase.by;
				if (game.portal.Carpentry.level && toTip.increase.what == "trimps.max") increase *= Math.pow(1.1, game.portal.Carpentry.level);
				if (game.portal.Carpentry_II.level && toTip.increase.what == "trimps.max") increase *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
				tooltipText = tipSplit[0] + prettify(increase) + tipSplit[2];
			}
			else if (isItIn == "jobs" && toTip.increase != "custom"){
				var newValue = toTip[tipSplit[1]];
				if (game.portal.Motivation.level > 0) newValue *= (1 + (game.portal.Motivation.level * 0.05));
				if (game.portal.Motivation_II.level > 0) newValue *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
				tooltipText = tipSplit[0] + prettify(newValue) + tipSplit[2];
			}
			else
			tooltipText = tipSplit[0] + prettify(toTip[tipSplit[1]]) + tipSplit[2];
		}
		if (isItIn == "buildings" && what.split(' ')[0] == "Warpstation" && game.global.lastWarp) {
			tooltipText += "<b>购买上一个千兆站时你拥有" + game.global.lastWarp + "个经纱站(" + game.upgrades.Gigastation.done + ").</b>";
		}
		if (typeof tooltipText.split('~') !== 'undefined') {
			var percentIncrease = game.upgrades.Gymystic.done;
			var text = ".";
			if (percentIncrease > 0){
				percentIncrease += 4;
				text = " and increases the base block of all Gyms by " + percentIncrease + "% (compounding).";
			}
			tooltipText = tooltipText.replace('~', text);
		}
	}
	titleText = (titleText) ? titleText : what;
	var tipNum = (tip2) ? "2" : "";
	document.getElementById("tipTitle" + tipNum).innerHTML = cntitle(titleText);
	document.getElementById("tipText" + tipNum).innerHTML = tooltipText;
	document.getElementById("tipCost" + tipNum).innerHTML = costText;
	elem.style.display = "block";
	if (ondisplay !== null)
		ondisplay();
	if (event != "update") positionTooltip(elem, event, renameBtn);
}

function swapNiceCheckbox(elem, forceSetting){
	//Send just the elem to swap the current state
	//Send elem and either true or false as forceSetting to force the checkbox to checked/unchecked
	var checked;
	if (typeof forceSetting === 'undefined') checked = !readNiceCheckbox(elem);
	else checked = (forceSetting == true);
	var newClass = (checked) ? "icon-checkbox-checked" : "icon-checkbox-unchecked";
	swapClass("icon-", newClass, elem);
	elem.setAttribute('data-checked', checked);
}

function readNiceCheckbox(elem){
	return (elem.dataset.checked == "true");
}

function buildNiceCheckbox(id, extraClass, enabled){
	var html = (enabled) ? "icomoon icon-checkbox-checked' data-checked='true' " : "icomoon icon-checkbox-unchecked' data-checked='false' ";
	var defaultClasses = " niceCheckbox noselect";
	extraClass = (extraClass) ? extraClass + defaultClasses : defaultClasses;
	html = "class='" + extraClass + " " + html;
	html = "<span id='" + id + "' " + html + " onclick='swapNiceCheckbox(this)'></span>";
	return html;	
}

function checkAlert(what, isItIn){
	if (document.getElementById(what + "Alert") === null) return;
		if (typeof game[isItIn] !== 'undefined') game[isItIn][what].alert = false;
		else return;
		document.getElementById(what + "Alert").innerHTML = "";
		if (document.getElementById(isItIn + "Alert") !== null)	document.getElementById(isItIn + "Alert").innerHTML = "";
}

function countAlertsIn(where){
	var count = 0;
	where = game[where];
	for (var item in where){
		item = where[item];
		if (item.alert) count++;
	}
	return count;
}

function positionTooltip(elem, event, extraInf){
	var cordx = 0;
	var cordy = 0;
	var e = event || window.event;
	if (!e) return;
	if (e.pageX || e.pageY) {
		cordx = e.pageX;
		cordy = e.pageY;
	} else if (e.clientX || e.clientY) {
		cordx = e.clientX;
		cordy = e.clientY;
	}
	lastMousePos = [cordx, cordy];
	var bodw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		bodh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		tiph = Math.max(elem.clientHeight, elem.scrollHeight, elem.offsetHeight),
		tipw = bodw * .325,
		center = cordx - (tipw / 2),
		spacing = bodh * 0.04,
		setLeft,
		setTop,
		setting;
		if (extraInf == "Heirloom") setting = 1;
		else setting = game.options.menu.tooltipPosition.enabled;
	if (extraInf == "forceLeft") {
		elem.style.left = Math.floor(cordx - (bodw * .55)) + "px";
		elem.style.top = Math.floor(cordy - (tiph * 0.5)) + "px";
		return;
	}
	
	if (setting == 0) {
		setLeft = cordx + spacing;
		if ((setLeft + tipw) > bodw) setLeft = (bodw - tipw);
		setTop = cordy - tiph - spacing;
	}
	if ((setting >= 1) || (setTop < 0)){
		setLeft = center;
		if (setLeft < 0)
			setLeft = 0;
		else if (setLeft > (bodw - tipw))
			setLeft = bodw - tipw;
		var maxAbove = (cordy - tiph - spacing);
		if (setting == 1 ||  (maxAbove < 0)){
			setTop = cordy + spacing;
			if ((setTop + tiph) > bodh)
				setTop = maxAbove;
		}
		else
			setTop = maxAbove;
	}
	elem.style.left = Math.floor(setLeft) + "px";
	elem.style.top = Math.floor(setTop) + "px";
}

function addTooltipPricing(toTip, what, isItIn) {
	var costText = "";
	var price;
	var canAfford;
	var percentOfTotal = "";
	for (var cost in toTip.cost) {
		if (typeof toTip.cost[cost] === 'object' && typeof toTip.cost[cost][1] === 'undefined') {
			var costItem = toTip.cost[cost];
			for (var item in costItem) {
				price = costItem[item];
				if (isItIn == "upgrades" && game.upgrades[what].prestiges && (item == "metal" || item == "wood")){
					if (game.global.challengeActive == "Daily" && typeof game.global.dailyChallenge.metallicThumb !== 'undefined'){
						price *= dailyModifiers.metallicThumb.getMult(game.global.dailyChallenge.metallicThumb.strength);
					}
					if (game.global.challengeActive == "Obliterated"){
						price *= 1e12;
					}
					if (game.global.challengeActive == "Eradicated"){
						price *= game.challenges.Eradicated.scaleModifier;
					}
					price *= Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level);
				}
				if (typeof price === 'function') price = price();
				if (typeof price[1] !== 'undefined') price = resolvePow(price, toTip);
				var itemToCheck = game[cost];
				if (typeof itemToCheck[item] !== 'undefined'){
					canAfford = (itemToCheck[item].owned >= price) ? "green" : "red";
					if ((item == "food" || item == "wood" || item == "metal") && price > getMaxForResource(item))
						canAfford = "orange";
					if (typeof itemToCheck[item].owned !== 'undefined'){
						if (itemToCheck[item].owned < price && (typeof game.resources[item] !== 'undefined')){
							var thisPs = getPsString(item, true);
							if (thisPs > 0){
								percentOfTotal = calculateTimeToMax(null, thisPs, (price - itemToCheck[item].owned));
								percentOfTotal = "(" + percentOfTotal + ")";
							}
							else percentOfTotal = "(<span class='icomoon icon-infinity'></span>)"
						}
						else {
							percentOfTotal = (itemToCheck[item].owned > 0) ? prettify(((price / itemToCheck[item].owned) * 100).toFixed(1)) : 0;
							percentOfTotal = "(" + percentOfTotal + "%)";
						}
					}
					costText += '<span class="' + canAfford + '">' + cnItem(item) + ':&nbsp;' + prettify(price) + '&nbsp;' + percentOfTotal + '</span>, ';
				}
				else
				costText += cnItem(item) + ": " + prettify(price) + ", ";
			}
			continue;
		}
	}
	costText = costText.slice(0, -2);
	return costText;
}

function configMessages(){
	var toCheck = ["Loot", "Unlocks", "Combat"];
	for (var x = 0; x < toCheck.length; x++){
		var name = toCheck[x];
		for (var item in game.global.messages[name]){
			if (item == "enabled") continue;
			var checkbox = document.getElementById(name + item);
			if (checkbox == null) continue;
			game.global.messages[name][item] = readNiceCheckbox(checkbox);
		}
	}
}

function messageConfigHover(what, event){
	var text = "";
	var title = "";
	switch(what){
		case 'Lootprimary':
			text = "记录常见的物品：食物，木头和金属。";
			title = "主要";
			break;
		case 'Lootsecondary':
			text = "记录不太常见的物品掉落物品：宝石，碎片，领土奖金，等等。";
			title = "次要";
			break;
		case 'Lootevents':
			text = "记录来自临时事件（例如假期）的掉落和消息。";
			title = "事件";
			break;
		case 'Lootexotic':
			text = "记录异域的进口授予的奖励。";
			title = "异域";
			break;
		case 'Loothelium':
			text = "记录氦奖励。";
			title = "氦";
			break;
		case 'Unlocksrepeated':
			text = "记录所有每次运行下降超过一次的解锁，例如Speedfarming或Coordination。";
			title = "重复";
			break;
		case 'Unlocksunique':
			text = "记录所有解锁，只有每门降一次，如健身房或矿工。";
			title = "独特";
			break;
		case 'Combattrimp':
			text = "记录涉及您的脆皮的所有战斗消息。";
			title = "脆皮";
			break;
		case 'Combatenemy':
			text = "记录涉及敌人的所有战斗消息。";
			title = "敌人";
			break;
		case 'Lootessence':
			text = "记录所有发现的黑暗精华。";
			title = "黑暗精华";
			break;
		case 'Lootmagma':
			text = "记录微捷码的细胞，包括燃料和Magmite下降。";
			title = "热门";
			break;
		case 'Loottoken':
			text = "自然符记日志。";
			title = "Token";
			break;
		case 'Lootcache':
			text = "地图掉落日志";
			title = "Cache";
			break;
		case 'Lootbone':
			text = "Log Bone drops from Skeletimps.";
			title = "Bone";
			break;
		default: return;
	}
    
	document.getElementById('messageConfigMessage').innerHTML = "<b>" + title + "</b> - " + text;
	tooltip(title, 'customText', event, text);
}

var geneMenuOpen = false;

// Correct function to call to cancel the current tooltip
function cancelTooltip(ignore2){
	unlockTooltip();
	tooltip("hide");
	if (!ignore2){
		 document.getElementById('tooltipDiv2').style.display = 'none';
		 geneMenuOpen = false;
	}
	tooltipUpdateFunction = "";
	document.getElementById("tipCost").innerHTML = "";
	document.getElementById("tipText").className = "";
	customUp = 0;
	lastMousePos = [0, 0];
	openTooltip = null;
}

function unlockTooltip(){
	game.global.lockTooltip = false;
}

function getPsString(what, rawNum) {
	if (what == "helium") return;
	var resOrder = ["food", "wood", "metal", "science", "gems", "fragments"];
	var books = ["farming", "lumber", "miner", "science"];
	var jobs = ["Farmer", "Lumberjack", "Miner", "Scientist", "Dragimp", "Explorer"];
	var index = resOrder.indexOf(what);
	var job = game.jobs[jobs[index]];
	var book = game.upgrades["Speed" + books[index]];
	var mBook = game.upgrades["Mega" + books[index]];
	var base = (what == "fragments") ? 0.4 : 0.5;
	var textString =  "<table class='bdTable table table-striped'><tbody>";
	//Add base
	textString += "<tr><td class='bdTitle'>基础</td><td class='bdPercent'></td><td class='bdNumber'>" + prettify(base) + "</td></tr>";
	//Add job count
	var currentCalc = job.owned * base;
	var s = job.owned == 1 ? "" : "";
	textString += "<tr><td class='bdTitle'>" + cnjob(jobs[index]) + s + "</td><td class='bdPercent'>" + prettify(job.owned) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	//Add books
	if (typeof book !== 'undefined' && book.done > 0){
		var bookStrength = Math.pow(1.25, book.done);
		currentCalc *= bookStrength;
		bookStrength = prettify((bookStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>速度" + cnItem(books[index]) + "</td><td class='bdPercent'>+ " + bookStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Megabooks
	if (typeof mBook !== 'undefined' && mBook.done > 0){
		var mod = (game.global.frugalDone) ? 1.6 : 1.5;
		var mBookStrength = Math.pow(mod, mBook.done);
		currentCalc *= mBookStrength;
		mBookStrength = prettify((mBookStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>巨型" + cnItem(books[index]) + "</td><td class='bdPercent'>+ " + mBookStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add bounty
	if (what != "gems" && game.upgrades.Bounty.done > 0){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>奖金</td><td class='bdPercent'>+ 100%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Tribute
	if (what == "gems" && game.buildings.Tribute.owned > 0){
		var tributeStrength = Math.pow(game.buildings.Tribute.increase.by, game.buildings.Tribute.owned);
		currentCalc *= tributeStrength;
		tributeStrength = prettify((tributeStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>贡品</td><td class='bdPercent'>+ " + tributeStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Whipimp
	if (game.unlocks.impCount.Whipimp > 0){
		var whipStrength = Math.pow(1.003, game.unlocks.impCount.Whipimp);
		currentCalc *= (whipStrength);
		whipStrength = prettify((whipStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>Whipimp</td><td class='bdPercent'>+ " + whipStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add motivation
	if (game.portal.Motivation.level > 0){
		var motivationStrength = (game.portal.Motivation.level * game.portal.Motivation.modifier);
		currentCalc  *= (motivationStrength + 1);
		motivationStrength = prettify(motivationStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>激励</td><td class='bdPercent'>+ " + motivationStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.portal.Motivation_II.level > 0){
		var motivationStrength = (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier);
		currentCalc  *= (motivationStrength + 1);
		motivationStrength = prettify(motivationStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>Motivation II</td><td class='bdPercent'>+ " + motivationStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Meditation
	if (game.portal.Meditation.level > 0){
		var meditation = game.portal.Meditation;
		var medStrength = meditation.getBonusPercent();
		if (medStrength > 0){
			currentCalc *= (1 + (medStrength * .01));
			textString += "<tr><td class='bdTitle'>Meditation</td><td class='bdPercent'>" + (meditation.getBonusPercent(true) * 10) + " 分钟 (+" + medStrength + "%)</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	//Add Magmamancer
	if (game.jobs.Magmamancer.owned > 0 && what == "metal"){
		var manceStrength = game.jobs.Magmamancer.getBonusPercent();
		if (manceStrength > 1){
			currentCalc *= manceStrength;
			manceStrength = (manceStrength - 1) * 100;
			textString += "<tr><td class='bdTitle'>Magmamancers</td><td class='bdPercent'>" + (game.jobs.Magmamancer.getBonusPercent(true) * 10) + " 分钟 (+" + prettify(manceStrength) + "%)</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	if (game.upgrades.Speedexplorer.done > 0 && what == "fragments"){
		var bonus = Math.pow(4, game.upgrades.Speedexplorer.done);
		currentCalc *= bonus;
		textString += "<tr><td class='bdTitle'>Speedexplorer</td><td class='bdPercent'>+ " + prettify((bonus - 1) * 100) + "%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Size (challenge)
	if (game.global.challengeActive == "Size"){
		currentCalc *= 1.5;
		textString += "<tr><td class='bdTitle'>巨大 (尺寸)</td><td class='bdPercent'>+ 50%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}	//Add meditate (challenge)
	if (game.global.challengeActive == "Meditate"){
		currentCalc *= 1.25;
		textString += "<tr><td class='bdTitle'>冥想</td><td class='bdPercent'>+ 25%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Toxicity"){
		var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
		currentCalc *= (1 + toxMult);
		toxMult = (toxMult * 100).toFixed(1) + "%";
		textString += "<tr><td class='bdTitle'>微调 (毒)</td><td class='bdPercent'>+ " + toxMult + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Balance"){
		currentCalc *= game.challenges.Balance.getGatherMult();
		textString += "<tr><td class='bdTitle'>增益 (平衡)</td><td class='bdPercent'>+ " + game.challenges.Balance.getGatherMult(true) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Decay"){
		currentCalc *= 10;
		textString += "<tr><td class='bdTitle'>明智 (衰变)</td><td class='bdPercent'>x 10</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		var stackStr = Math.pow(0.995, game.challenges.Decay.stacks);
		currentCalc *= stackStr;
		textString += "<tr style='color: red'><td class='bdTitle'>衰变</td><td class='bdPercent'>x " + stackStr.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Watch"){
		currentCalc /= 2;
		textString += "<tr style='color: red'><td class='bdTitle'>Sleepy (Watch)</td><td class='bdPercent'>50%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>决心 (Lead)</td><td class='bdPercent'>+ 100%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Daily"){
		var mult = 0;
		if (typeof game.global.dailyChallenge.dedication !== 'undefined'){
			mult = dailyModifiers.dedication.getMult(game.global.dailyChallenge.dedication.strength);
			currentCalc *= mult;
			textString += "<tr><td class='bdTitle'>专用 (日常)</td><td class='bdPercent'>+ " + prettify((mult * 100) - 100) + "%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
		if (typeof game.global.dailyChallenge.famine !== 'undefined' && what != "fragments" && what != "science"){
			mult = dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>饥荒 (日常)</td><td class='bdPercent'>" + prettify(mult * 100) + "%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	if (what != "fragments" && getEmpowerment() == "Wind"){
		var windMod = game.empowerments.Wind.getCombatModifier();
		currentCalc *= (1 + windMod);
		textString += "<tr><td class='bdTitle'>迅捷 (风)</td><td class='bdPercent'>+ " + prettify(windMod * 100) +"%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	var heirloomBonus = calcHeirloomBonus("Staff", jobs[index] + "Speed", 0, true);
	if (heirloomBonus > 0){
		currentCalc *= ((heirloomBonus / 100) + 1);
		heirloomBonus = prettify(heirloomBonus) + '%';
		textString += "<tr><td class='bdTitle'>传家宝 (员工)</td><td class='bdPercent'>+ " + heirloomBonus + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add player
	if (game.global.playerGathering == what){
		if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (what == "food" || what == "wood" || what == "metal")){
			var tBonus = 50;
			if (game.talents.turkimp4.purchased) tBonus = 100;
			else if (game.talents.turkimp3.purchased) tBonus = 75;
			currentCalc *= (1 + (tBonus / 100));
			textString += "<tr><td class='bdTitle'>分享食物</td><td class='bdPercent'>+ " + tBonus + "%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
		var playerStrength = getPlayerModifier();
		currentCalc += playerStrength;
		textString += "<tr><td class='bdTitle'>你</td><td class='bdPercent'>+ " + prettify(playerStrength) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";

	}
	//Add Loot	ALWAYS LAST
	if (game.options.menu.useAverages.enabled){
		var avg = getAvgLootSecond(what);
		if (avg > 0.001) {
			currentCalc += avg;
			textString += "<tr><td class='bdTitle'>平均战利品</td><td class='bdPercent'>+ " + prettify(avg) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	if (rawNum) return currentCalc;
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	tooltip('confirm', null, 'update', textString, "getPsString('" + what + "')", cnItem(what.charAt(0).toUpperCase() + what.substr(1, what.length)) + " 每秒", "刷新", true);
}



function getZoneStats(event, update) {
	if (!update && game.global.lockTooltip) return;
	var textString =  "<table class='bdTable table table-striped'><tbody>";
	textString += "<tr><td class='bdTitle bdZoneTitle' colspan='3'>区域 "  + game.global.world + ", 房间 " + (game.global.lastClearedCell + 2) + "</td></tr>";
	textString += "<tr><td colspan='3'>你已经在这个区域 " + formatMinutesForDescriptions((getGameTime() - game.global.zoneStarted) / 1000 / 60) + "</td></tr>";
	if (game.global.spireActive) textString += "<tr><td colspan='3'>" + game.global.spireDeaths + " group of Trimps" + ((game.global.spireDeaths == 1) ? " has" : " have") + " died in this Spire.</td></tr>";
	if ((game.global.mapsActive || game.global.preMapsActive) && game.global.currentMapId){
		var map = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)];
		textString += "<tr><td class='bdTitle bdZoneTitle' colspan='3'>" + map.name + ", 等级 " + map.level;
		if (map.location == "Bionic" && game.talents.bionic2.purchased)
			textString += " (P, FA)";
		else if (map.bonus && typeof mapSpecialModifierConfig[map.bonus] !== 'undefined')
			textString += " (" + mapSpecialModifierConfig[map.bonus].abv + ")";
		textString += ", 房间 " + (game.global.lastClearedMapCell + 2) + "</td></tr>";
		textString += '<tr><td><span class="' + getMapIcon(map) + '"></span> ' + ((map.location == "Void") ? voidBuffConfig[game.global.voidBuff].title : getMapIcon(map, true)) + '</td><td><span class="icomoon icon-gift2"></span>' + Math.floor(map.loot * 100) + '%</span> <span class="icomoon icon-cube2"></span>' + map.size + ' <span class="icon icon-warning"></span>' + Math.floor(map.difficulty * 100) + '%</td><td>' + ((map.location == "Void") ? '&nbsp' : ('物品: ' + addSpecials(true, true, map))) + '</td></tr>';
		textString += "<tr><td colspan='3'>你已经在这个地图上停留了 " + formatMinutesForDescriptions((getGameTime() - game.global.mapStarted) / 1000 / 60) + "</td></tr>";
		var stackedMaps = 0;
		if (Fluffy.isRewardActive('void')) stackedMaps = countStackedVoidMaps();
		if (map.location == "Void") textString += "<tr><td colspan='3'>你拥有 " + game.global.totalVoidMaps + " 虚空地图" + ((game.global.totalVoidMaps == 1) ? "" : "s") + ((stackedMaps) ? " (" + stackedMaps + " stacked)." : "") + "</td></tr>";
	}
	textString += "</tbody></table>";
	if (update) {
		document.getElementById("tipText").innerHTML = textString;
		return;
	}
	tooltip("世界信息", "customText", event, textString)
	tooltipUpdateFunction = function() {
		getZoneStats(null, true);
	}

}

function countStackedVoidMaps(){
	var count = 0;
	for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
		if (game.global.mapsOwnedArray[x].location == "Void") count++;
	}
	return count;
}

function getTrimpPs() {
	if (game.global.challengeActive == "Trapper") return;
	var trimps = game.resources.trimps;
	var base = 0.0085;
	var textString =  "<table class='bdTable table table-striped'><tbody>";
	//Add base
	textString += "<tr><td class='bdTitle'>基础</td><td class='bdPercent'></td><td class='bdNumber'>" + base + "</td></tr>";
	//Add job count
	var breeding = trimps.owned - trimps.employed;
	var currentCalc = breeding * base;
	textString += "<tr><td class='bdTitle'>配种</td><td class='bdPercent'>" + prettify(breeding) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	//Add Potency
	if (game.upgrades.Potency.done > 0){
		var potencyStrength = Math.pow(1.1, game.upgrades.Potency.done);
		currentCalc *= potencyStrength;
		potencyStrength = prettify((potencyStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>繁殖效率</td><td class='bdPercent'>+ " + potencyStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Nurseries
	if (game.buildings.Nursery.owned > 0){
		var nurseryStrength = Math.pow(1.01, game.buildings.Nursery.owned);
		currentCalc *= nurseryStrength;
		nurseryStrength = prettify((nurseryStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>托儿所</td><td class='bdPercent'>+ " + nurseryStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Venimp
	if (game.unlocks.impCount.Venimp > 0){
		var venimpStrength = Math.pow(1.003, game.unlocks.impCount.Venimp);
		currentCalc *= (venimpStrength);
		venimpStrength = prettify((venimpStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>Venimp</td><td class='bdPercent'>+ " + venimpStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.brokenPlanet){
		currentCalc /= 10;
		textString += "<tr style='color: red'><td class='bdTitle'>破碎星球</td><td class='bdPercent'>x 0.1</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";

	}
	//Add pheromones
	if (game.portal.Pheromones.level > 0){
		var PheromonesStrength = (game.portal.Pheromones.level * game.portal.Pheromones.modifier);
		currentCalc  *= (PheromonesStrength + 1);
		PheromonesStrength = prettify(PheromonesStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>信息素</td><td class='bdPercent'>+ " + PheromonesStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Geneticist
	if (game.jobs.Geneticist.owned > 0) {
		var mult = Math.pow(.98, game.jobs.Geneticist.owned);
		currentCalc *= mult;
		var display = (mult > 0.0001) ? mult.toFixed(4) : mult.toExponential(3);
		textString += "<tr style='color: red'><td class='bdTitle'>遗传学家</td><td class='bdPercent'>x  " + display + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add quick trimps
	if (game.singleRunBonuses.quickTrimps.owned){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>快速脆皮</td><td class='bdPercent'>+ 100%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Daily"){
		var mult = 0;
		if (typeof game.global.dailyChallenge.dysfunctional !== 'undefined'){
			mult = dailyModifiers.dysfunctional.getMult(game.global.dailyChallenge.dysfunctional.strength);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>功能失调 (日常)</td><td class='bdPercent'>x  " + mult.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
		}
		if (typeof game.global.dailyChallenge.toxic !== 'undefined'){
			mult = dailyModifiers.toxic.getMult(game.global.dailyChallenge.toxic.strength, game.global.dailyChallenge.toxic.stacks);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>毒物 (日常)</td><td class='bdPercent'>x  " + mult.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
		}
	}
	if (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.stacks > 0){
		var potencyMod = Math.pow(game.challenges.Toxicity.stackMult, game.challenges.Toxicity.stacks);
		currentCalc *= potencyMod;
		textString += "<tr style='color: red'><td class='bdTitle'>有毒空气</td><td class='bdPercent'>x  " + potencyMod.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
	}
	if (game.global.voidBuff == "slowBreed"){
		currentCalc *= 0.2;
		textString += "<tr style='color: red'><td class='bdTitle'>虚空气体</td><td class='bdPercent'>x  0.2</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
	}
	var heirloomBonus = calcHeirloomBonus("Shield", "breedSpeed", 0, true);
	if (heirloomBonus > 0){
		currentCalc *= ((heirloomBonus / 100) + 1);
		heirloomBonus = prettify(heirloomBonus) + '%';
		textString += "<tr><td class='bdTitle'>传家宝 (护盾)</td><td class='bdPercent'>+ " + heirloomBonus + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
	}
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	tooltip('confirm', null, 'update', textString, "getTrimpPs()", "Trimps Per Second", "刷新", true);
}

function getFluctuation(number, minFluct, maxFluct){
	var min = Math.floor(number * (1 - minFluct));
    var max = Math.ceil(number + (number * maxFluct));
	return "<td>" + prettify(min) + "</td><td>" + prettify(max) + "</td>";
}

function getBattleStatBd(what) {
	var equipment = {};
	var name = what.charAt(0).toUpperCase() + what.substr(1, what.length);
	var textString =  "<table class='bdTableSm table table-striped'><tbody><tr><td></td><td>基础</td><td>等级</td><td>Item " + name + "</td><td>总计</td>" + ((what == "attack") ? "<td>最小</td><td>最大</td>" : "") + "</tr>";
	var currentCalc = 0;
	var maxFluct = 0.2;
	var minFluct = 0.2;
	var percent = 0;
	if (what == "health" || what == "attack"){
		currentCalc += (what == "health") ? 50 : 6;
		textString += "<tr><td class='bdTitle'>基础</td><td class='bdPercentSm'>" + prettify(currentCalc) + "</td><td></td><td></td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? "<td>-20%</td><td>+20%</td>" : "") + "</tr>";
		if (what == "attack"){
			//Discipline
			if (game.global.challengeActive == "Discipline"){
				minFluct = 0.995;
				maxFluct = 0.995;
				textString += "<tr><td class='bdTitle'>缺乏纪律</td><td class='bdPercentSm'></td><td></td><td></td><td class='bdNumberSm'></td><td>-99.5%</td><td>+99.5%</td></tr>";
			}
			else {
				//Range
					if (game.portal.Range.level > 0){
						minFluct -= (0.02 * game.portal.Range.level);
						textString += "<tr><td class='bdTitle'>距离</td><td class='bdPercentSm'>+2% 最少</td><td>" + game.portal.Range.level + "</td><td>+" + prettify(2 * game.portal.Range.level) + "% 最少</td><td class='bdNumberSm'></td><td>-" + prettify(minFluct * 100) + "%</td><td>+" + prettify(maxFluct * 100) + "%</td></tr>";
					}
				//MinDamageDaily
					if (typeof game.global.dailyChallenge.minDamage !== 'undefined'){
						var addMin = dailyModifiers.minDamage.getMult(game.global.dailyChallenge.minDamage.strength);
						minFluct += addMin;
						if (minFluct > 1) minFluct = 1;
						textString += "<tr style='color: red'><td class='bdTitle'>最低限度 (日常)</td><td class='bdPercentSm'>-" + prettify(addMin * 100) + "% 最少</td><td></td><td></td><td class='bdNumberSm'></td><td>-" + prettify(minFluct * 100) + "%</td><td>+" + prettify(maxFluct * 100) + "%</td></tr>";
					}
				//MaxDamageDaily
					if (typeof game.global.dailyChallenge.maxDamage !== 'undefined'){
						var addMax = dailyModifiers.maxDamage.getMult(game.global.dailyChallenge.maxDamage.strength);
						maxFluct += addMax;
						textString += "<tr><td class='bdTitle'>败家子 (日常)</td><td class='bdPercentSm'>+" + prettify(addMax * 100) + "% Max</td><td></td><td></td><td class='bdNumberSm'></td><td>-" + prettify(minFluct * 100) + "%</td><td>+" + prettify(maxFluct * 100) + "%</td></tr>";
					}
			}
		}
		for (var equip in game.equipment){
			var temp = game.equipment[equip];
			if (typeof temp[what] === 'undefined' || temp.level <= 0 || temp.blockNow) continue;
			var equipStrength = temp[what + "Calculated"] * temp.level;
			currentCalc += equipStrength;
			percent = ((equipStrength / game.global[what]) * 100).toFixed(1) + "%";
			textString += "<tr><td class='bdTitle'>" + cnequip(equip) + "</td><td>" + prettify(temp[what + "Calculated"]) + "</td><td>" + temp.level + "</td><td>" + prettify(equipStrength) + " (" + percent + ")</td><td>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
		}
	}
	else if (what == "block"){
		//Add Gym
		var gym = game.buildings.Gym;
		if (gym.owned > 0){
			var gymStrength = gym.owned * gym.increase.by;
			percent = ((gymStrength / game.global.block) * 100).toFixed(1) + "%";
			currentCalc += gymStrength;
			textString += "<tr><td class='bdTitle'>健身房</td><td>" + prettify(gym.increase.by) + "</td><td>" + prettify(gym.owned) + "</td><td>" + prettify(gymStrength) + " (" + percent + ")</td><td>" + prettify(currentCalc) + "</td></tr>";
		}
		var shield = game.equipment.Shield;
		if (shield.blockNow && shield.level > 0){
			var shieldStrength = shield.level * shield.blockCalculated;
			percent = ((shieldStrength / game.global.block) * 100).toFixed(1) + "%";
			currentCalc += shieldStrength;
			textString += "<tr><td class='bdTitle'>盾</td><td>" + prettify(shield.blockCalculated) + "</td><td>" + prettify(shield.level) + "</td><td>" + prettify(shieldStrength) + " (" + percent + ")</td><td>" + prettify(currentCalc) + "</td></tr>";
		}
		var trainer = game.jobs.Trainer;
		if (trainer.owned > 0){
			var trainerStrength = trainer.owned * (trainer.modifier / 100);
			trainerStrength = calcHeirloomBonus("Shield", "trainerEfficiency", trainerStrength);
			currentCalc  = Math.floor(currentCalc * (trainerStrength + 1));
			trainerStrength = prettify(trainerStrength * 100) + "%";
			textString += "<tr><td class='bdTitle'>培训师</td><td>" + prettify(calcHeirloomBonus("Shield", "trainerEfficiency", trainer.modifier)) + "%</td><td>" + prettify(trainer.owned) + "</td><td>+ " + trainerStrength + "</td><td>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	//Add coordination
	currentCalc  *= game.resources.trimps.maxSoldiers;
	textString += "<tr><td class='bdTitle'>士兵</td><td class='bdPercentSm'></td><td></td><td>x " + prettify(game.resources.trimps.maxSoldiers) + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";

	//Add achievements
	if (what == "attack" && game.global.achievementBonus > 0){
		currentCalc *= 1 + (game.global.achievementBonus / 100);
		textString += "<tr><td class='bdTitle'>成就</td><td class='bdPercentSm'></td><td></td><td>+ " + game.global.achievementBonus + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
	}
	//Add perk
	var perk = "";
	if (what == "health") perk = "Toughness";
	if (what == "attack") perk = "Power";
	if (perk && game.portal[perk].level > 0){
		var PerkStrength = (game.portal[perk].level * game.portal[perk].modifier);
		currentCalc  *= (PerkStrength + 1);
		PerkStrength = prettify(PerkStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>" + cnperk(perk) + "</td><td>" + (game.portal[perk].modifier * 100) + "%</td><td>" + game.portal[perk].level + "</td><td>+ " + PerkStrength + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}
	perk = perk + "_II";
	if (game.portal[perk] && game.portal[perk].level > 0){
		var PerkStrength = (game.portal[perk].level * game.portal[perk].modifier);
		currentCalc  *= (PerkStrength + 1);
		PerkStrength = prettify(PerkStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>" + cnperk(perk.replace('_', ' ')) + "</td><td>" + (game.portal[perk].modifier * 100) + "%</td><td>" + game.portal[perk].level + "</td><td>+ " + PerkStrength + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}
	//Add resilience
	if (what == "health" && game.portal.Resilience.level > 0){
		var resStrength = Math.pow(game.portal.Resilience.modifier + 1, game.portal.Resilience.level);
		currentCalc *= resStrength;
		resStrength = prettify((resStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>弹力</td><td>" + (game.portal.Resilience.modifier * 100) + "%</td><td>" + game.portal.Resilience.level + "</td><td>+ " + resStrength + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Geneticist
	var geneticist = game.jobs.Geneticist;
	if (game.global.lastLowGen > 0 && what == "health"){
		var calcedGenes = game.global.lastLowGen;
		var geneticistStrength = Math.pow(1.01, calcedGenes);
		currentCalc  *= geneticistStrength;
		geneticistStrength = prettify((geneticistStrength * 100) - 100) + "%";
		textString += "<tr><td class='bdTitle'>遗传学家</td><td>1%</td><td>" + prettify(calcedGenes) + "</td><td>+ " + geneticistStrength + "</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Anticipation
	var anticipation = game.portal.Anticipation;
	if (anticipation.level > 0 && what == "attack"){
		var antiStrength = ((anticipation.level * anticipation.modifier * game.global.antiStacks) + 1);
		currentCalc *= antiStrength;
		antiStrength = prettify((antiStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>预期</td><td>2% (X" + game.global.antiStacks + ")</td><td>" + prettify(anticipation.level) + "</td><td>+ " + antiStrength + "</td><td>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";

	}
	//Add formations
	if (game.global.formation > 0){
		var formStrength = 0.5;
		if ((game.global.formation == 1 && what == "health") || (game.global.formation == 2 && what == "attack") || (game.global.formation == 3 && what == "block")) formStrength = 4;
		currentCalc *= formStrength;
		textString += "<tr><td class='bdTitle'>阵型</td><td></td><td></td><td>x " + formStrength + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";

	}
	//Add Titimp
	if (game.global.titimpLeft > 1 && game.global.mapsActive && what == "attack"){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>Titimp</td><td></td><td></td><td>x 2</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	//Add map bonus
	if (!game.global.mapsActive && game.global.mapBonus > 0 && what == "attack"){
		var mapBonusMult = 0.2 * game.global.mapBonus;
		currentCalc *= (1 + mapBonusMult);
		mapBonusMult *= 100;
		textString += "<tr><td class='bdTitle'>地图奖金</td><td>20%</td><td>" + game.global.mapBonus + "</td><td>+ " + prettify(mapBonusMult) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	//Add RoboTrimp
	if (what == "attack" && game.global.roboTrimpLevel > 0){
		var roboTrimpMod = 0.2 * game.global.roboTrimpLevel;
		currentCalc *= (1 + roboTrimpMod);
		roboTrimpMod *= 100;
		textString += "<tr><td class='bdTitle'><span class='icomoon icon-chain'></span> 机械脆皮 <span class='icomoon icon-chain'></span></td><td>20%</td><td>" + game.global.roboTrimpLevel + "</td><td>+ " + prettify(roboTrimpMod) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	//Add challenges
	if (what == "health" && game.global.challengeActive == "Life"){
		currentCalc *= game.challenges.Life.getHealthMult();
		textString += "<tr><td class='bdTitle'>亡灵化 (生命挑战)</td><td>10%</td><td>" + game.challenges.Life.stacks + "</td><td>+ " + game.challenges.Life.getHealthMult(true) + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (what == "attack" && game.global.challengeActive == "Life"){
		currentCalc *= game.challenges.Life.getHealthMult();
		textString += "<tr><td class='bdTitle'>亡灵化(生命挑战)</td><td></td><td></td><td>+ " + game.challenges.Life.getHealthMult(true) + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (what == "health" && game.global.challengeActive == "Balance"){
		currentCalc *= game.challenges.Balance.getHealthMult();
		textString += "<tr style='color: red'><td class='bdTitle'>虚弱 (平衡)</td><td>1%</td><td>" + game.challenges.Balance.balanceStacks + "</td><td>- " + game.challenges.Balance.getHealthMult(true) + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (what == "attack" && game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)){
		currentCalc *= 1.5;
		textString += "<tr><td class='bdTitle'>Determined (Lead)</td><td></td><td></td><td>+ 50%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	var heirloomBonus = calcHeirloomBonus("Shield", "trimp" + capitalizeFirstLetter(what), 0, true);
	if (heirloomBonus > 0){
		currentCalc *= ((heirloomBonus / 100) + 1);
		heirloomBonus = prettify(heirloomBonus) + '%';
		textString += "<tr><td class='bdTitle'>传家宝 (护盾)</td><td></td><td></td><td>+ " + heirloomBonus + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}
	if (game.global.challengeActive == "Decay" && what == "attack"){
		currentCalc *= 5;
		textString += "<tr><td class='bdTitle'>明智 (衰变)</td><td></td><td></td><td class='bdPercent'>x 5</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
		var stackStr = Math.pow(0.995, game.challenges.Decay.stacks);
		currentCalc *= stackStr;
		textString += "<tr style='color: red'><td class='bdTitle'>衰变</td><td>x 0.995</td><td>" + game.challenges.Decay.stacks + "</td><td class='bdPercent'>x " + stackStr.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if ((game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") && what == "attack") {
		var mult = (1 - (game.challenges.Electricity.stacks * 0.1));
		currentCalc *= mult;

		textString += "<tr style='color: red'><td class='bdTitle'>" + cntitle(game.global.challengeActive) + "</td><td>-10%</td><td>" + game.challenges.Electricity.stacks.toString() + "</td><td class='bdPercent'>x " + mult.toFixed(1) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (game.global.challengeActive == "Daily"){
		var mult = 0;
		if (typeof game.global.dailyChallenge.weakness !== 'undefined' && what == "attack"){
			mult = dailyModifiers.weakness.getMult(game.global.dailyChallenge.weakness.strength, game.global.dailyChallenge.weakness.stacks);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>虚弱 (日常)</td><td>" + formatMultAsPercent(dailyModifiers.weakness.getMult(game.global.dailyChallenge.weakness.strength, 1)) + "</td><td>" + game.global.dailyChallenge.weakness.stacks + "</td><td class='bdPercent'>" + formatMultAsPercent(mult) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
		}
		if (typeof game.global.dailyChallenge.oddTrimpNerf !== 'undefined' && what == "attack" && (game.global.world % 2 == 1)){
			mult = dailyModifiers.oddTrimpNerf.getMult(game.global.dailyChallenge.oddTrimpNerf.strength);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>非常弱 (日常)</td><td>" + formatMultAsPercent(mult) + "</td><td></td><td class='bdPercent'>" + formatMultAsPercent(mult) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
		}
		if (typeof game.global.dailyChallenge.evenTrimpBuff !== 'undefined' && what == "attack" && (game.global.world % 2 == 0)){
			mult = dailyModifiers.evenTrimpBuff.getMult(game.global.dailyChallenge.evenTrimpBuff.strength);
			currentCalc *= mult;
			textString += "<tr><td class='bdTitle'>甚至更强 (日常)</td><td>" + formatMultAsPercent(mult) + "</td><td></td><td class='bdPercent'>" + formatMultAsPercent(mult) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
		}
		if (typeof game.global.dailyChallenge.rampage !== 'undefined' && what == "attack"){
			mult = dailyModifiers.rampage.getMult(game.global.dailyChallenge.rampage.strength, game.global.dailyChallenge.rampage.stacks);
			currentCalc *= mult;
			textString += "<tr><td class='bdTitle'>暴怒 (日常)</td><td>" + formatMultAsPercent(dailyModifiers.rampage.getMult(game.global.dailyChallenge.rampage.strength, 1)) + "</td><td>" + game.global.dailyChallenge.rampage.stacks + "</td><td class='bdPercent'>" + formatMultAsPercent(mult) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
		}
		if (typeof game.global.dailyChallenge.pressure !== 'undefined' && what == "health"){
			mult = dailyModifiers.pressure.getMult(game.global.dailyChallenge.pressure.strength, game.global.dailyChallenge.pressure.stacks);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>压力 (日常)</td><td>" + formatMultAsPercent(mult) + "</td><td></td><td class='bdPercent'>" + formatMultAsPercent(mult) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	//Add golden battle
	if (what != "block" && game.goldenUpgrades.Battle.currentBonus > 0){
		amt = game.goldenUpgrades.Battle.currentBonus;
		currentCalc *= 1 + amt;
		textString += "<tr><td class='bdTitle'>黄金升级</td><td></td><td></td><td>+ " + prettify(amt * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}
	//Masteries
	if (what != "block" && game.talents.voidPower.purchased && game.global.voidBuff){
		amt = (game.talents.voidPower2.purchased) ? ((game.talents.voidPower3.purchased) ? 65 : 35) : 15;
		currentCalc *= (1 + (amt / 100));
		textString += "<tr><td class='bdTitle'>虚空力量</td><td></td><td>" + ((game.talents.voidPower2.purchased) ? ((game.talents.voidPower3.purchased) ? "III" : "II") : "I") + "</td><td>+ " + amt + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}
	if (what == "attack" && isScryerBonusActive() && game.talents.scry.purchased && !game.global.mapsActive && (getCurrentWorldCell().mutation == "Corruption" || getCurrentWorldCell().mutation == "Healthy")){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>Scryhard I</td><td>+100%</td><td></td><td>+ 100%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (what == "attack" && game.talents.daily.purchased && game.global.challengeActive == "Daily"){
		currentCalc *= 1.5;
		textString += "<tr><td class='bdTitle'>Legs for Days</td><td>+50%</td><td></td><td>+ 50%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (game.talents.magmamancer.purchased && what == "attack" && game.jobs.Magmamancer.getBonusPercent() > 1){
		amt = game.jobs.Magmamancer.getBonusPercent();
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>岩浆活动</td><td></td><td></td><td>+ " + prettify((amt - 1) * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (game.talents.stillRowing2.purchased && what == "attack" && game.global.spireRows >= 1){
		amt = game.global.spireRows * 0.06;
		currentCalc *= (amt + 1);
		textString += "<tr><td class='bdTitle'>静止划桨 II</td><td>6%</td><td>" + game.global.spireRows + "</td><td>+ " + prettify(amt * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (game.talents.healthStrength.purchased && what == "attack" && mutations.Healthy.active()){
		var cellCount = mutations.Healthy.cellCount();
		amt = (0.15 * cellCount);
		currentCalc *= (amt + 1);
		textString += "<tr><td class='bdTitle'>健康的力量</td><td>15%</td><td>" + cellCount + "</td><td>+ " + prettify(amt * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	if (what == "attack" && game.global.mapsActive && game.talents.bionic2.purchased && getCurrentMapObject().level > game.global.world){
		currentCalc *= 1.5;
		textString += "<tr><td class='bdTitle'>Bionic Magnet II</td><td>+50%</td><td></td><td>+ 50%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>";
	}
	//Pumpkimp buff
	if (game.global.sugarRush > 0 && what == "attack"){
		currentCalc *= sugarRush.getAttackStrength();
		textString += "<tr class='pumpkimpRow'><td class='bdTitle'>甜蜜冲击</td><td>&nbsp;</td><td>&nbsp;</td><td>x " + sugarRush.getAttackStrength() + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";		
	}

	//Challenge^2 bonus
	if (game.global.totalSquaredReward > 0 && (what == "attack" || what == "health")){
		amt = game.global.totalSquaredReward;
		currentCalc *= (1 + (amt / 100));
		textString += "<tr><td class='bdTitle'>挑战² 奖励</td><td></td><td></td><td>+ " + amt + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>"
	}

	//Ice
	if (what == "attack" && getEmpowerment() == "Ice"){
		amt = game.empowerments.Ice.getDamageModifier();
		currentCalc *= (1 + amt);
		textString += "<tr><td class='bdTitle'>冷冻敌人</td><td></td><td></td><td>+ " + prettify(amt * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"

	}
	//Fluffy
	if (what == "attack" && Fluffy.isActive()){
		amt = Fluffy.getDamageModifier();
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>Fluffy</td><td></td><td></td><td>+ " + prettify((amt -1 ) * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
		
	}
	//Fluffy E8
	if (what == "attack" && Fluffy.isRewardActive('voidSiphon') && game.stats.totalVoidMaps.value){
		var voids = game.stats.totalVoidMaps.value;
		var voidWeight = 0.05;
		amt = voidWeight * voids;
		currentCalc *= (1 + amt);
		var voidE = ((game.talents.fluffyAbility.purchased) ? "8" : "9");
		textString += "<tr><td class='bdTitle'>Void Siphon (Fluffy E" + voidE + ")</td><td>+ " + (voidWeight * 100) + "%</td><td>" + voids + "</td><td>+ " + prettify(amt * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
	}
	//Amalgamator health
	if (what == "health" && game.jobs.Amalgamator.owned > 0){
		amt = game.jobs.Amalgamator.getHealthMult();
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>合并者</td><td>x " + prettify(game.jobs.Amalgamator.healthModifier) + "</td><td class='bdNumberSm'>" + prettify(game.jobs.Amalgamator.owned) + "</td><td class='bdNumberSm'>x " + prettify(amt) + "</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Gator attack
	if (what == "attack" && game.jobs.Amalgamator.owned > 0){
		amt = game.jobs.Amalgamator.getDamageMult();
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>合并者</td><td>+ " + prettify(game.jobs.Amalgamator.damageModifier * 100) + "%</td><td>" + game.jobs.Amalgamator.owned + "</td><td>+ " + prettify((amt -1 ) * 100) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
		
	}
	//Strength Towers - TD
	if (what == "attack" && playerSpireTraps.Strength.owned){
		amt = playerSpireTraps.Strength.getWorldBonus();
		currentCalc *= (1 + (amt / 100));
		textString += "<tr><td class='bdTitle'>Strength Tower" + needAnS(playerSpireTraps.Strength.owned) + "</td><td>+ " + prettify(playerSpireTraps.Strength.getWorldBonus(true)) + "%</td><td>" + playerSpireTraps.Strength.owned + "</td><td>+ " + prettify(amt) + "%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
		
	}
	//Sharp Trimps - bones
	if (what == "attack" && game.singleRunBonuses.sharpTrimps.owned){
		currentCalc *= 1.5;
		textString += "<tr><td class='bdTitle'>锋利脆皮</td><td></td><td></td><td>+ 50%</td><td class='bdNumberSm'>" + prettify(currentCalc) + "</td>" + getFluctuation(currentCalc, minFluct, maxFluct) + "</tr>"
		
	}
	//Magma
	if (mutations.Magma.active() && (what == "attack" || what == "health")){
		mult = mutations.Magma.getTrimpDecay();
		var lvls = game.global.world - mutations.Magma.start() + 1;
		currentCalc *= mult;
		var display = (mult > 0.0001) ? mult.toFixed(4) : mult.toExponential(3);
		textString += "<tr style='color: red'><td class='bdTitle'>Overheating (Magma)</td><td>x 0.8</td><td>" + lvls + "</td><td class='bdPercent'>x " + display + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td>" + ((what == "attack") ? getFluctuation(currentCalc, minFluct, maxFluct) : "") + "</tr>";
	}

	//Crit
	if (what == "attack"){
		var critChance = getPlayerCritChance();
		var thisCritChance = 0;
		var critCalc = 0;
		var critMult = 0;
		var baseCritMult = getPlayerCritDamageMult();
		if (critChance < 0){
			//From reduced crit chance daily or maybe other stuff later
			critMult = 1;
			critCalc = currentCalc;
			textString += "<tr class='critRow'><td class='bdTitle'><span style='color: yellow;'>暴击!</span> 几率</td><td>0% (" + (critChance * 100).toFixed(1) + "% Total)</td><td class='bdTitle'><span style='color: yellow;'>暴击!</span> 伤害</td><td>+ " + prettify((critMult - 1) * 100) + "%</td><td class='bdNumberSm'>" + prettify(critCalc) + "</td>" + getFluctuation(critCalc, minFluct, maxFluct) + "</tr>";
			textString += "<tr class='critRow'><td class='bdTitle'><span style='color: cyan;'>虚弱!</span> 几率</td><td>" + (Math.abs(critChance) * 100).toFixed(1) + "%</td><td class='bdTitle'><span style='color: cyan;'>虚弱!</span> 伤害</td><td>x 0.2</td><td class='bdNumberSm'>" + prettify(currentCalc * 0.2) + "</td>" + getFluctuation((currentCalc * 0.2), minFluct, maxFluct) + "</tr>";
		}
		else {
			if (critChance > 0){
				critMult = baseCritMult;
				if (critChance >= 2) thisCritChance = 0;
				else if (critChance >= 1) thisCritChance = 1 - (critChance % 1);
				else thisCritChance = critChance;
				critCalc = currentCalc * critMult;
				textString += "<tr class='critRow'><td class='bdTitle'><span style='color: yellow;'>暴击!</span> 几率</td><td>" + (thisCritChance * 100).toFixed(1) + "%";
				if (critChance > 1) textString += " (" + (critChance * 100).toFixed(1) + "% Total)";
				textString += "</td><td class='bdTitle'><span style='color: yellow;'>暴击!</span> 伤害</td><td>+ " + prettify((critMult - 1) * 100) + "%</td><td class='bdNumberSm'>" + prettify(critCalc) + "</td>" + getFluctuation(critCalc, minFluct, maxFluct) + "</tr>";
			}
			if (critChance > 1 && critChance < 3){
				if (critChance >= 2) thisCritChance = 1 - (critChance % 1);
				else if (critChance >= 3) thisCritChance = 0;
				else thisCritChance = critChance - 1;
				critMult = getMegaCritDamageMult(2);
				critCalc = currentCalc * critMult * baseCritMult;
				textString += "<tr class='critRow'><td class='bdTitle'><span style='color: orange;'>暴击!</span> 几率</td><td>" + (thisCritChance * 100).toFixed(1) + "%</td><td class='bdTitle'><span style='color: orange;'>暴击!</span> 伤害</td><td><span style='color: yellow;'>Crit!</span> x " + prettify(critMult) + "</td><td class='bdNumberSm'>" + prettify(critCalc) + "</td>" + getFluctuation(critCalc, minFluct, maxFluct) + "</tr>";
			}
			if (critChance > 2){
				if (critChance >= 3) thisCritChance = 1;
				else thisCritChance = critChance - 2;
				critMult = getMegaCritDamageMult(3);
				critCalc = currentCalc * critMult * baseCritMult;
				textString += "<tr class='critRow'><td class='bdTitle'><span style='color: red;'>暴击!!</span> 几率</td><td>" + (thisCritChance * 100).toFixed(1) + "%</td><td class='bdTitle'><span style='color: red;'>暴击!!</span> 伤害</td><td><span style='color: yellow;'>Crit!</span> x " + prettify(critMult) + "</td><td class='bdNumberSm'>" + prettify(critCalc) + "</td>" + getFluctuation(critCalc, minFluct, maxFluct) + "</tr>";
			}
		}
	}
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	document.getElementById('tipText').className = "";
	tooltip('confirm', null, 'update', textString, "getBattleStatBd('" + what + "')", name, "刷新", true);
	if (what == "attack" || what == "health"){
		verticalCenterTooltip(true);
	}
}

function formatMultAsPercent(mult){
	if (mult < 1)
		return "- " + (Math.round(10000 * (1 - mult)) / 100) + "%";
	return "+ " + (Math.round(10000 * (mult - 1)) / 100) + "%";
}

function verticalCenterTooltip(makeLarge, makeSuperLarge){
	var tipElem = document.getElementById('tooltipDiv');
	if (makeLarge){
		swapClass('tooltipExtra', 'tooltipExtraLg', tipElem);
		tipElem.style.left = "25%";
	}
	if (makeSuperLarge){
		swapClass('tooltipExtra', 'tooltipExtraSuperLg', tipElem);
		tipElem.style.left = "17.5%";
	}
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var tipHeight = Math.max(tipElem.clientHeight, tipElem.innerHeight || 0);
	if (makeLarge && tipHeight / height > 0.95){
		document.getElementById('tipText').className = "tinyTextTip";
		tipHeight = Math.max(tipElem.clientHeight, tipElem.innerHeight || 0);
	}
	var dif = (height - tipHeight);
	tipElem.style.top = (dif > 0) ? (dif / 2) + "px" : "0";
}

function capitalizeFirstLetter(word){
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function getMaxTrimps() {
	var trimps = game.resources.trimps;
	var base = 10;
	var textString =  "<table class='bdTable table table-striped'><tbody>";
	//Add base
	textString += "<tr><td class='bdTitle'>基础</td><td class='bdPercent'></td><td class='bdNumber'>" + base + "</td></tr>";
	//Add job count
	var housing = trimps.max - game.global.totalGifts - game.unlocks.impCount.TauntimpAdded - base - game.global.trimpsGenerated;
	if (housing < 0) housing = 0;
	var currentCalc = housing + base;
	textString += "<tr><td class='bdTitle'>房屋</td><td class='bdPercent'>+ " + prettify(housing) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	//Add generatorUpgrades
	if (game.global.trimpsGenerated > 0){
		currentCalc += game.global.trimpsGenerated;
		textString += "<tr><td class='bdTitle'>产生的房屋</td><td class='bdPercent'>+ " + prettify(game.global.trimpsGenerated) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Territory Bonus
	if (game.global.totalGifts > 0){
		currentCalc += game.global.totalGifts;
		textString += "<tr><td class='bdTitle'>领土奖金</td><td class='bdPercent'>+ " + prettify(game.global.totalGifts) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Tauntimp
	if (game.unlocks.impCount.TauntimpAdded > 0){
		currentCalc += game.unlocks.impCount.TauntimpAdded;
		textString += "<tr><td class='bdTitle'>陶工</td><td class='bdPercent'>+ " + prettify(game.unlocks.impCount.TauntimpAdded) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Carpentry
	if (game.portal.Carpentry.level > 0){
		var carpentryStrength = Math.pow(1.1, game.portal.Carpentry.level);
		currentCalc  *= (carpentryStrength);
		currentCalc = Math.floor(currentCalc);
		carpentryStrength = prettify((carpentryStrength - 1) * 100) + "%";
		textString += "<tr><td class='bdTitle'>木工</td><td class='bdPercent'>+ " + carpentryStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.portal.Carpentry_II.level > 0){
		var carpentryStrength = game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level;
		currentCalc  *= (1 + carpentryStrength);
		currentCalc = Math.floor(currentCalc);
		carpentryStrength = prettify(carpentryStrength * 100) + "%";
		textString += "<tr><td class='bdTitle'>木工 II</td><td class='bdPercent'>+ " + carpentryStrength + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	//Add Size Challenge
	if (game.global.challengeActive == "Size"){
		currentCalc = Math.floor(currentCalc / 2);
		textString += "<tr style='color: red'><td class='bdTitle'>巨大的</td><td class='bdPercent'>x 0.5</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.large !== 'undefined'){
			var mult = dailyModifiers.large.getMult(game.global.dailyChallenge.large.strength);
			currentCalc = Math.floor(currentCalc * mult);
			textString += "<tr style='color: red'><td class='bdTitle'>强大 (日常)</td><td class='bdPercent'>x " + mult.toFixed(2) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	tooltip('confirm', null, 'update', textString, "getMaxTrimps()", "Max Trimps", "刷新", true);
}

function getMaxResources(what) {
	var structure;
	switch (what) {
		case "Food":
			structure = "Barn";
			break;
		case "Wood":
			structure = "Shed";
			break;
		case "Metal":
			structure = "Forge";
			break;
	}
	if (!structure) return;
	var structureObj = game.buildings[structure];
	var base = 500;
	var textString =  "<table class='bdTable table table-striped'><tbody>";
	//Add base
	var currentCalc = base;
	textString += "<tr><td class='bdTitle'>基础</td><td class='bdPercent'></td><td class='bdNumber'>" + base + "</td></tr>";
	//Add structure
	var structBonus = Math.pow(2, structureObj.owned);
	currentCalc *= structBonus;
	structBonus = prettify(structBonus * 100) + "%";
	textString += "<tr><td class='bdTitle'>" + cnwhat(structure) + "</td><td class='bdPercent'>+ " + structBonus + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	//Add packrat
	if (game.portal.Packrat.level){
		var packAmt = (game.portal.Packrat.level * 0.2) + 1;
		currentCalc *= packAmt;
		packAmt = prettify((packAmt - 1) * 100) + '%';
		textString += "<tr><td class='bdTitle'>包装</td><td class='bdPercent'>+ " + packAmt + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.heirlooms.Shield.storageSize.currentBonus > 0){
		var hatAmt = calcHeirloomBonus("Shield", "storageSize", 0, true);
		currentCalc *= ((hatAmt / 100) + 1);
		hatAmt = prettify(hatAmt) + '%';
		textString += "<tr><td class='bdTitle'>传家宝 (护盾)</td><td class='bdPercent'>+ " + hatAmt + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	tooltip('confirm', null, 'update', textString, "getMaxResources('" + what + "')", "最大 " + cnItem(what), "刷新", true);
}

function getLootBd(what) {
    var map;
	var world;
	var level = "";
	var cell;
    if (game.global.mapsActive) {
        map = getCurrentMapObject();
		cell = game.global.lastClearedMapCell + 1;
        level = scaleLootLevel(cell, map.level);
		world = map.level;
    } else {
		cell = game.global.lastClearedCell + 1;
        level = scaleLootLevel(cell);
		world = game.global.world;
    }
	var textString = '	<div><ul id="lootBdTabs" class="nav nav-tabs nav-justified"><li role="presentation" onclick="getLootBd(\'Food/Wood/Metal\')"><a href="#">Food/Wood/Metal</a></li>';
	if (game.global.mapsUnlocked) textString += '<li role="presentation" onclick="getLootBd(\'Fragments\')"><a href="#">Fragments</a></li><li role="presentation" onclick="getLootBd(\'Gems\')"><a href="#">Gems</a></li>';
	if (game.global.world >= 20) textString += '<li role="presentation" onclick="getLootBd(\'Helium\')"><a href="#">Helium</a></li>';
	textString += '</ul></div>';
	textString +=  "<table class='bdTableSm table table-striped'><tbody><tr><td style='font-weight: bold; font-size: 1.1em'>" + what + "</td><td>基础</td><td>Amount</td><td>Line Total</td><td>总计</td></tr>";
	var currentCalc = 0;
	var percent = 0;
	var amt = 0;
	switch(what) {
		case "Food/Wood/Metal":
			var tempModifier = 0.5 * Math.pow(1.25, (game.global.world >= 59) ? 59 : game.global.world);
			//Mega books
			if (game.global.world >= 60) {
				if (game.global.frugalDone) tempModifier *= Math.pow(1.6, game.global.world - 59);
				else tempModifier *= Math.pow(1.5, game.global.world - 59);
			}
			//Bounty
			if (game.global.world >= 15) tempModifier *= 2;
			//Whipimp
			if (game.unlocks.impCount.Whipimp) tempModifier *= Math.pow(1.003, game.unlocks.impCount.Whipimp);
			var avgSec = tempModifier;
			if (game.global.world < 100)
				amt = avgSec * 3.5;
			else
				amt = avgSec * 5;
			amt = (amt * .8) + ((amt * .002) * (cell + 1));
			currentCalc = amt;
			textString += "<tr><td class='bdTitle'>Base</td><td></td><td></td><td>" + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && (game.global.playerGathering == "food" || game.global.playerGathering == "metal" || game.global.playerGathering == "wood")){
				//Average the bonus out amongst all 3 resources. I can't remember why turkimp3 is 1.249 instead of 1.25 but at this point I'm too scared to change it
				tBonus = 1.166;
				if (game.talents.turkimp4.purchased) tBonus = 1.333;
				else if (game.talents.turkimp3.purchased) tBonus = 1.249;
				currentCalc *= tBonus;
				textString += "<tr><td class='bdTitle'>Turkimp</td><td></td><td></td><td>+ " + prettify((tBonus - 1) * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			amt = game.resources.trimps.realMax() * 0.16;
			currentCalc *= amt;
			textString += "<tr><td class='bdTitle'>Trimps</td><td>0.16</td><td>" + prettify(game.resources.trimps.realMax()) + "</td><td>x " + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			break;
		case "Gems":
			level = (level - 400) * 1.35;
			if (level < 0) {
				level = 0;
			}
			amt = Math.round(0.5 * Math.pow(1.23, Math.sqrt(level)));
			amt += Math.round(0.5 * level);
			amt = (amt * .8) + ((amt * .002) * (cell + 1));
			currentCalc = amt;
			textString += "<tr><td class='bdTitle'>基础</td><td></td><td></td><td>" + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			if (game.jobs.Dragimp.owned >= 1){
				amt = 1.5 * game.jobs.Dragimp.modifier;
				amt = (amt * .8) + ((amt * .002) * (cell + 1));
				currentCalc += amt;
				textString += "<tr><td class='bdTitle'>Dragimp Scouting</td><td></td><td></td><td>+ " + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			break;
		case "Fragments":
			amt = Math.floor(Math.pow(1.15, game.global.world) * game.global.world * game.global.world * 0.02);
			currentCalc = amt;
			textString += "<tr><td class='bdTitle'>基础</td><td></td><td></td><td>" + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			break;
		case "Helium":
			var level = scaleLootLevel(99);
			level = Math.round((level - 1900) / 100);
			level *= 1.35;
			if (level < 0) level = 0;
			var baseAmt = 0;
			if (game.global.world < 59 || (game.global.world == 59 && game.global.mapsActive)) baseAmt = 1;
			else if (game.global.world < mutations.Corruption.start(true)) baseAmt = 5;
			else baseAmt = 10;
			var amt = Math.round(baseAmt * Math.pow(1.23, Math.sqrt(level)));
			amt += Math.round(baseAmt * level);
			amt /= baseAmt;
			currentCalc = amt;
			textString += "<tr><td class='bdTitle'>基础</td><td></td><td></td><td>" + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			if (baseAmt >= 5){
				if (mutations.Magma.active()){
					currentCalc *= 15;
					textString += "<tr><td class='bdTitle'>综合奖金</td><td></td><td></td><td>x 15</td><td>" + prettify(currentCalc) + "</td></tr>";
				}
				else {
					currentCalc *= 5;
					textString += "<tr><td class='bdTitle'>无序加成</td><td></td><td></td><td>x 5</td><td>" + prettify(currentCalc) + "</td></tr>";
				}
			}

			if (baseAmt >= 10){
				currentCalc *= 2;
				textString += "<tr><td class='bdTitle'>腐败奖金</td><td></td><td></td><td>x 2</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			if (game.global.sLevel >= 5){
				amt = Math.pow(1.005, game.global.world);
				currentCalc *= amt;
				textString += "<tr><td class='bdTitle'>科学家 V</td><td></td><td></td><td>x " + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			if (game.goldenUpgrades.Helium.currentBonus > 0){
				amt = game.goldenUpgrades.Helium.currentBonus;
				currentCalc *= 1 + amt;
				textString += "<tr><td class='bdTitle'>金色氦</td><td></td><td></td><td>+ " + prettify(amt * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			if (game.talents.scry2.purchased && game.global.voidBuff && game.global.canScryCache){
				currentCalc *= 1.5;
				textString += "<tr><td class='bdTitle'>Scryhard II</td><td></td><td></td><td>+ 50%</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			if (game.global.voidBuff) {
				currentCalc *= 2;
				textString += "<tr><td class='bdTitle'>虚空地图</td><td></td><td></td><td>x 2</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
			var fluffyBonus = Fluffy.isRewardActive("helium");
			if (fluffyBonus > 0){
				currentCalc += (currentCalc * (0.25 * fluffyBonus));
				textString += "<tr><td class='bdTitle'>Fluffy Helium</td><td>25%</td><td>" + fluffyBonus + "</td><td>+ " + (25 * fluffyBonus) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
			}
	}
	if (game.global.mapsActive && what != "Helium") {
		var compareLv = game.global.world;
		if (world > compareLv && map.location != "Bionic"){
			amt = Math.pow(1.1, (world - compareLv));
			currentCalc *= amt;
			textString += "<tr><td class='bdTitle'>额外的地图区域</td><td>+10%</td><td>x " + (world - compareLv) + "</td><td>+ " + prettify((amt - 1) * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";			
		}
		else {
			if (game.talents.mapLoot.purchased)
				compareLv--;
			if (world < compareLv){
				//-20% loot compounding for each level below world
				amt = Math.pow(0.8, (compareLv - world));
				currentCalc *= amt;
				textString += "<tr style='color: red'><td class='bdTitle'>Low Map Level</td><td>-20%</td><td>" + (compareLv - world) + "</td><td>x " + prettify(amt) + "</td><td>" + prettify(currentCalc) + "</td></tr>";

			}
		}
		//Add map loot bonus
		currentCalc = Math.round(currentCalc * map.loot);
		textString += "<tr><td class='bdTitle'>地图搜括</td><td></td><td></td><td>+ " + Math.round((map.loot - 1) * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.portal.Looting.level){
		amt = (1 + (game.portal.Looting.level * game.portal.Looting.modifier));
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>掠夺 (perk)</td><td>+ 5%</td><td>" + game.portal.Looting.level + "</td><td>+ " + prettify((amt - 1) * 100) + "%</td><td>" + prettify(Math.floor(currentCalc)) + "</td></tr>";
	}
	if (game.portal.Looting_II.level){
		amt = (1 + (game.portal.Looting_II.level * game.portal.Looting_II.modifier));
		currentCalc *= amt;
		textString += "<tr><td class='bdTitle'>掠夺 II (perk)</td><td>+ " + prettify(game.portal.Looting_II.modifier * 100) + "%</td><td>" + prettify(game.portal.Looting_II.level) + "</td><td>+ " + prettify((amt - 1) * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.unlocks.impCount.Magnimp && what != "Helium"){

		amt = Math.pow(1.003, game.unlocks.impCount.Magnimp);
		currentCalc = Math.floor(currentCalc * amt);
		textString += "<tr><td class='bdTitle'>Magnimp</td><td>+ 0.3%</td><td>" + game.unlocks.impCount.Magnimp + "</td><td>+ " + prettify((amt - 1)  * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";

	}
	if (game.global.challengeActive == "Toxicity"){
		var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
		currentCalc *= (1 + toxMult);
		toxMult = (toxMult * 100).toFixed(1) + "%";
		textString += "<tr><td class='bdTitle'>调整 (毒性)</td><td>+" + game.challenges.Toxicity.lootMult + "%</td><td>" + game.challenges.Toxicity.stacks + "</td><td>+ " + toxMult + "</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Decay" && what != "Helium"){
		currentCalc *= 10;
		textString += "<tr><td class='bdTitle'>明智 (衰变)</td><td></td><td></td><td class='bdPercent'>x 10</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		var stackStr = Math.pow(0.995, game.challenges.Decay.stacks);
		currentCalc *= stackStr;
		textString += "<tr style='color: red'><td class='bdTitle'>衰变</td><td>x 0.995</td><td>" + game.challenges.Decay.stacks + "</td><td class='bdPercent'>x " + stackStr.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Watch" && what != "Helium"){
		currentCalc /= 2;
		textString += "<tr style='color: red'><td class='bdTitle'>昏昏欲睡 (注视)</td><td></td><td></td><td class='bdPercent'>50%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>决心 (领导)</td><td></td><td></td><td class='bdPercent'>+ 100%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.challengeActive == "Daily"){
		if (typeof game.global.dailyChallenge.famine !== 'undefined' && what != "Fragments" && what != "Helium"){
			mult = dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
			currentCalc *= mult;
			textString += "<tr style='color: red'><td class='bdTitle'>饥荒 (日常)</td><td class='bdPercent'>" + prettify(mult * 100) + "%</td><td></td><td>" + prettify(mult * 100) + "%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
		}
		if (typeof game.global.dailyChallenge.karma !== 'undefined' && what != "Helium"){
			mult = dailyModifiers.karma.getMult(game.global.dailyChallenge.karma.strength, game.global.dailyChallenge.karma.stacks);
			currentCalc *= mult;
			textString += "<tr><td class='bdTitle'>业力 (日常)</td><td class='bdPercent'>x  " + mult.toFixed(3) + "</td><td></td><td>x  " + mult.toFixed(3) + "</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>"
		}
	}
	if (game.global.spireRows > 0){
		var spireRowBonus = (game.talents.stillRowing.purchased) ? 0.03 : 0.02;
		amt = game.global.spireRows * spireRowBonus;
		currentCalc *= (1 + amt);
		textString += "<tr><td class='bdTitle'>尖顶行</td><td>+ " + Math.round(spireRowBonus * 100) + "%</td><td>" + game.global.spireRows + "</td><td>+ " + prettify(amt * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.voidBuff && what == "Helium" && game.talents.voidSpecial.purchased){
		amt = (game.global.lastPortal * 0.0025);
		currentCalc *= (1 + amt);
		textString += "<tr><td class='bdTitle'>Void Special</td><td></td><td></td><td>+ " + prettify(amt * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (what != "Fragments" && getEmpowerment() == "Wind" && (what != "Helium" || !game.global.mapsActive)){
		var windMod;
		var baseMod = 0;
		if (what == "Helium"){
			windMod = game.empowerments.Wind.getCombatModifier(true);
			baseMod = game.empowerments.Wind.getModifier(0, true);
		}
		else{
			windMod = game.empowerments.Wind.getCombatModifier();
			baseMod *= game.empowerments.Wind.getModifier();
		}
		baseMod *= 100;
		currentCalc *= (1 + windMod);
		textString += "<tr><td class='bdTitle'>敏捷 (风)</td><td>" + prettify(baseMod) + "%</td><td>" + prettify(game.empowerments.Wind.currentDebuffPower) + "</td><td class='bdPercent'>+ " + prettify(windMod * 100) +"%</td><td class='bdNumber'>" + prettify(currentCalc) + "</td></tr>";
	}
	if (what != "Helium" && isScryerBonusActive()){
		currentCalc *= 2;
		textString += "<tr><td class='bdTitle'>队形</td><td></td><td></td><td>x 2</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	var heirloomBonus = 0;
	if (what == "Food/Wood/Metal"){
		heirloomBonus = calcHeirloomBonus("Staff", "foodDrop", 0, true);
		if (heirloomBonus > 0){
			textString += "<tr><td class='bdTitle'>传家宝 - 食物 (员工)</td><td></td><td></td><td>+ " + prettify(heirloomBonus) + "%</td><td>" + prettify(currentCalc * ((heirloomBonus / 100) + 1)) + "</td></tr>";
			heirloomBonus = 0;
		}
		heirloomBonus = calcHeirloomBonus("Staff", "woodDrop", 0, true);
		if (heirloomBonus > 0){
			textString += "<tr><td class='bdTitle'>传家宝 - 木头 (员工)</td><td></td><td></td><td>+ " + prettify(heirloomBonus) + "%</td><td>" + prettify(currentCalc * ((heirloomBonus / 100) + 1)) + "</td></tr>";
			heirloomBonus = 0;
		}
		heirloomBonus = calcHeirloomBonus("Staff", "metalDrop", 0, true);
		if (heirloomBonus > 0){
			textString += "<tr><td class='bdTitle'>传家宝 - 金属 (员工)</td><td></td><td></td><td>+ " + prettify(heirloomBonus) + "%</td><td>" + prettify(currentCalc * ((heirloomBonus / 100) + 1)) + "</td></tr>";
			heirloomBonus = 0;
		}
	}
	else if (what == "Fragments"){
		heirloomBonus = calcHeirloomBonus("Staff", "fragmentsDrop", 0, true);
		if (heirloomBonus > 0){
			textString += "<tr><td class='bdTitle'>传家宝 (员工)</td><td></td><td></td><td>+ " + prettify(heirloomBonus) + "%</td><td>" + prettify(currentCalc * ((heirloomBonus / 100) + 1)) + "</td></tr>";
			heirloomBonus = 0;
		}
	}
	else if (what == "Gems"){
		heirloomBonus = calcHeirloomBonus("Staff", "gemsDrop", 0, true);
		if (heirloomBonus > 0){
			textString += "<tr><td class='bdTitle'>传家宝 (员工)</td><td></td><td></td><td>+ " + prettify(heirloomBonus) + "%</td><td>" + prettify(currentCalc * ((heirloomBonus / 100) + 1)) + "</td></tr>";
			heirloomBonus = 0;
		}
	}
	if (game.global.totalSquaredReward > 0 && what == "Helium"){
		amt = game.global.totalSquaredReward / 1000;
		currentCalc *= (amt + 1);
		textString += "<tr><td class='bdTitle'>挑战² 奖励</td><td></td><td></td><td>+ " + prettify(amt * 100) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (what == "Helium" && playerSpireTraps.Condenser.owned){
		var amt = playerSpireTraps.Condenser.getWorldBonus();
		currentCalc *= (1 + (amt / 100));
		textString += "<tr><td class='bdTitle'>冷凝器塔" + needAnS(playerSpireTraps.Condenser.owned) + "</td><td>+ " + prettify(playerSpireTraps.Condenser.getWorldBonus(true)) + "%</td><td>" + playerSpireTraps.Condenser.owned + "</td><td>+" + prettify(amt) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.global.runningChallengeSquared && what == "Helium"){
		currentCalc = 0;
		textString += "<tr class='colorSquared'><td class='bdTitle'>挑战²</td><td></td><td></td><td>0%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	if (game.singleRunBonuses.heliumy.owned && what == "Helium"){
		currentCalc *= 1.25;
		textString += "<tr><td class='bdTitle'>Heliumy</td><td>25%</td><td></td><td>+ 25%</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	//Bonus from Domination challenge, keep right above Corruption/Healthy stuff, as regular boss bonus does not affect it
	if (game.global.challengeActive == "Domination" && what == "Helium"){
		textString += "<tr><td class='bdTitle'>Domination (Boss Only)</td><td>x 3</td><td></td><td>x 3</td><td>" + prettify(currentCalc * 3) + "</td></tr>";
		if (game.global.voidBuff) currentCalc *= 3;
	}
	//Corruption - World
	var fullCorVal = currentCalc;
	if (what == "Helium" && !game.global.voidBuff && (game.global.world >= mutations.Corruption.start())){
		var corrVal = (game.global.challengeActive == "Corrupted") ? 7.5 : 15;
		var corrCount = mutations.Corruption.cellCount();
		if (mutations.Healthy.active()) corrCount -= mutations.Healthy.cellCount();
		var corrCalc = (corrVal / 100) * currentCalc;
		fullCorVal = currentCalc + (corrCalc * corrCount);
		textString += "<tr class='corruptedCalcRow'><td class='bdTitle' style='vertical-align: middle'>Corruption Value</td><td>" + corrVal + "%<br/>" + corrCount + " Cells</td><td>Per Cell:<br/>" + prettify(corrCalc) + "</td><td>Per Zone:<br/>" + prettify(Math.round(corrCalc * corrCount)) + "</td><td style='vertical-align: middle'>" + prettify(fullCorVal) + "</td></tr>";
		//<tr><td class='bdTitle'>Total Per Zone</td><td></td><td></td><td></td><td>" + prettify(currentCalc + (corrCalc * corrVal)) + "</td></tr>
	}
	//Healthy - World
	if (what == "Helium" && mutations.Healthy.active() && !game.global.voidBuff){
		var healthyCount = mutations.Healthy.cellCount();
		var healthyVal = 45;
		var healthyCalc = (healthyVal / 100) * currentCalc;
		textString += "<tr class='healthyCalcRow'><td class='bdTitle' style='vertical-align: middle'>Healthy Value</td><td>" + healthyVal + "%<br/>" + healthyCount + " Cells</td><td>Per Cell:<br/>" + prettify(healthyCalc) + "</td><td>Per Zone:<br/>" + prettify(Math.round(healthyCalc * healthyCount)) + "</td><td style='vertical-align: middle'>" + prettify(fullCorVal + (healthyCalc * healthyCount)) + "</td></tr>";		
	}
	//Healthy - Void Maps

	if (what == "Helium" && game.global.voidBuff && mutations.Corruption.active()){
		var corruptedCells = mutations.Corruption.cellCount();
		if (mutations.Healthy.active()) corruptedCells -= mutations.Healthy.cellCount();
		var corrVal = (game.global.challengeActive == "Corrupted") ? 7.5 : 15;
		var percent = ((corrVal / 100) * (corruptedCells));
		

		if (mutations.Healthy.active()){
			textString += "<tr class='corruptedCalcRow mutationSumRow'><td class='bdTitle'>Corruption Value</td><td>" + corrVal + "%</td><td>" + corruptedCells + "</td><td>+ " + prettify(Math.round(percent * 100)) + "%</td><td></td></tr>";
			var healthyCells = mutations.Healthy.cellCount();
			var healthyVal = 45;
			var healthyPercent = ((healthyVal / 100) * (healthyCells));
			textString += "<tr class='healthyCalcRow mutationSumRow'><td class='bdTitle'>Healthy Value</td><td>" + healthyVal + "%</td><td>" + healthyCells + "</td><td>+ " + prettify(Math.round(healthyPercent * 100)) + "%</td><td></td></tr>";
			var mutationPercent = (percent + healthyPercent);
			currentCalc *= (mutationPercent + 1);
			textString += "<tr class='mutationSumRow mutationTotalRow'><td class='bdTitle'>Mutation Total</td><td></td><td>" + (healthyCells + corruptedCells) + "</td><td>+ " + prettify(Math.round(mutationPercent * 100)) + "%</td><td>" + prettify(currentCalc) + "</td></tr>";
		}
		else {
			percent++;
			currentCalc *= percent;
			textString += "<tr class='corruptedCalcRow'><td class='bdTitle'>Corruption Value</td><td>" + corrVal + "%</td><td>" + corruptedCells + "</td><td>x " + prettify(percent) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
		}
	}
	if (what == "Helium" && game.global.mapsActive && game.global.voidBuff && map.stacked >= 1){
		var stacks = map.stacked;
		var bonusMod = (1 + (0.5 * stacks));
		var flatBonus = currentCalc * bonusMod * stacks;
		currentCalc += flatBonus;
		textString += "<tr class='fluffyCalcRow'><td class='bdTitle'>Stacked Map" + needAnS(stacks) + " (Fluffy)</td><td>+ " + prettify((bonusMod - 1) * 100) + "%</td><td>" + stacks + " extra</td><td>+ " + prettify(flatBonus) + "</td><td>" + prettify(currentCalc) + "</td></tr>";
	}
	textString += "</tbody></table>";
	game.global.lockTooltip = false;
	tooltip('confirm', null, 'update', textString, "getLootBd('" + what + "')", what + " Loot Breakdown", "刷新", true);
	verticalCenterTooltip();
}

function swapNotation(updateOnly){
	if (!updateOnly) game.options.menu.standardNotation.enabled = !game.options.menu.standardNotation.enabled;
	document.getElementById("notationBtn").innerHTML = (game.options.menu.standardNotation.enabled) ? "Standard Notation" : "Scientific Notation";
	if (game.global.fighting) updateAllBattleNumbers();
}

function prettify(number) {
	var numberTmp = number;
	if (!isFinite(number)) return "<span class='icomoon icon-infinity'></span>";
	if (number >= 1000 && number < 10000) return Math.floor(number);
	if (number == 0) return prettifySub(0);
	if (number < 0) return "-" + prettify(-number);
	if (number < 0.005) return (+number).toExponential(2);

	var base = Math.floor(Math.log(number)/Math.log(1000));
	if (base <= 0) return prettifySub(number);
	number /= Math.pow(1000, base);
	if (number >= 999.5) {
		// 999.5 rounds to 1000 and we don’t want to show “1000K” or such
		number /= 1000;
		++base;
	}
	if (game.options.menu.standardNotation.enabled == 3){
		var suffices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		if (base <= suffices.length) suffix = suffices[base -1];
		else {
			var suf2 = (base % suffices.length) - 1;
			if (suf2 < 0) suf2 = suffices.length - 1;
			suffix = suffices[Math.ceil(base / suffices.length) - 2] + suffices[suf2];
		}
	}
	else {
		var suffices = [
			'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
            'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
            'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tg', 'Utg', 'Dtg', 'Ttg',
            'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Otg', 'Ntg', 'Qaa', 'Uqa', 'Dqa', 'Tqa',
            'Qaqa', 'Qiqa', 'Sxqa', 'Spqa', 'Oqa', 'Nqa', 'Qia', 'Uqi', 'Dqi',
            'Tqi', 'Qaqi', 'Qiqi', 'Sxqi', 'Spqi', 'Oqi', 'Nqi', 'Sxa', 'Usx',
            'Dsx', 'Tsx', 'Qasx', 'Qisx', 'Sxsx', 'Spsx', 'Osx', 'Nsx', 'Spa',
            'Usp', 'Dsp', 'Tsp', 'Qasp', 'Qisp', 'Sxsp', 'Spsp', 'Osp', 'Nsp',
            'Og', 'Uog', 'Dog', 'Tog', 'Qaog', 'Qiog', 'Sxog', 'Spog', 'Oog',
            'Nog', 'Na', 'Un', 'Dn', 'Tn', 'Qan', 'Qin', 'Sxn', 'Spn', 'On',
            'Nn', 'Ct', 'Uc'
		];
		var suffix;
		if (game.options.menu.standardNotation.enabled == 2 || (game.options.menu.standardNotation.enabled == 1 && base > suffices.length) || (game.options.menu.standardNotation.enabled == 4 && base > 31))
			suffix = "e" + ((base) * 3);
		else if (game.options.menu.standardNotation.enabled && base <= suffices.length)
			suffix = suffices[base-1];
		else
		{
			var exponent = parseFloat(numberTmp).toExponential(2);
			exponent = exponent.replace('+', '');
			return exponent;
		}
	}
	return prettifySub(number) + suffix;
}

function romanNumeral(number){
//This is only accurate up to 399, but that's more than plenty for this game. Probably not the cleanest converter ever, but I thought of it myself, it works, and I'm proud.
	var numeral = "";
	while (number >= 100){
		number -= 100;
		numeral += "C";
	}
	//77
	if (number >= 90){
		number -= 90;
		numeral += "XC";
	}
	if (number >= 50){
		number -= 50;
		numeral += "L";
	}
	if (number >= 40){
		number -= 40;
		numeral += "XL";
	}
	while (number >= 10){
		number -= 10;
		numeral += "X";
	}
	if (number >= 9){
		number -= 9;
		numeral += "IX";
	}
	if (number >= 5){
		number -= 5;
		numeral += "V";
	}
	if (number >= 4){
		number -= 4;
		numeral += "IV";
	}
	while (number >= 1){
		number -= 1;
		numeral += "I";
	}
	return numeral;
}

function prettifySub(number){
	number = parseFloat(number);
	var floor = Math.floor(number);
	if (number === floor) // number is an integer, just show it as-is
		return number;
	var precision = 3 - floor.toString().length; // use the right number of digits

	return number.toFixed(3 - floor.toString().length);
}

function resetGame(keepPortal) {
	if (game.options.menu.pauseGame.enabled){
		game.options.menu.pauseGame.enabled = 0;
		game.options.menu.pauseGame.onToggle();
	}
	game.resources.trimps.soldiers = 0;
	game.global.autoBattle = false;
	document.getElementById("wood").style.visibility = "hidden";
	document.getElementById("metal").style.visibility = "hidden";
	document.getElementById("trimps").style.visibility = "hidden";
	document.getElementById("gems").style.visibility = "hidden";
	document.getElementById("fragments").style.visibility = "hidden";
	document.getElementById("buyCol").style.visibility = "hidden";
	document.getElementById("unempHide").style.visibility = "hidden";
	document.getElementById("empHide").style.visibility = "hidden";
	document.getElementById("upgradesTitleSpan").innerHTML = "升级<br/>(先做研究)";
	document.getElementById("science").style.visibility = "hidden";
	document.getElementById("battleContainer").style.visibility = "hidden";
	document.getElementById("pauseFight").style.display = "none";
	document.getElementById("blockDiv").style.visibility = "hidden";
	document.getElementById("badGuyCol").style.visibility = "hidden";
	document.getElementById("jobsHere").innerHTML = "";
	document.getElementById("jobsTab").style.visibility = "hidden";
	document.getElementById("upgradesTab").style.visibility = "hidden";
	document.getElementById("equipmentTab").style.visibility = "hidden";
	document.getElementById("foremenCount").innerHTML = "";
	document.getElementById("upgradesHere").innerHTML = "";
	document.getElementById("mapsBtn").style.display = "none";
	document.getElementById("grid").style.display = "block";
	document.getElementById("preMaps").style.display = "none";
	document.getElementById("mapGrid").style.display = "none";
	document.getElementById("buildingsHere").innerHTML = "";
	document.getElementById("grid").innerHTML = "";
	document.getElementById("equipmentHere").innerHTML = "";
	document.getElementById("queueItemsHere").innerHTML = "";
	var log = document.getElementById("log");
	log.innerHTML = "";
	log.scrollTop = log.scrollHeight;
	document.getElementById("worldNumber").innerHTML = "1";
	document.getElementById("mapsHere").innerHTML = "";
	document.getElementById("sciencePs").innerHTML = "+0/秒";
	document.getElementById("repeatBtn").style.display = "none";
	document.getElementById("helium").style.visibility = "hidden";
	document.getElementById("jobsTitleDiv").style.display = "none";
	document.getElementById("upgradesTitleDiv").style.display = "none";
	document.getElementById("equipmentTitleDiv").style.display = "none";
	document.getElementById("portalBtn").style.display = "none";
	document.getElementById("respecPortalBtn").style.display = "none";
	document.getElementById("battleHeadContainer").style.display = "block";
	document.getElementById("mapsCreateRow").style.display = "none";
	document.getElementById("worldName").innerHTML = "区域";
	document.getElementById("wrapper").style.background = "url(css/bg2.png) center repeat-x";
	document.getElementById("wrapper").className = "wrapperUnbroken"
	document.getElementById("turkimpBuff").style.display = "none";
	document.getElementById("statsBtnRow").style.display = "block";
	document.getElementById("mapsBtnText").innerHTML = "地图";
	document.getElementById("mapBonus").innerHTML = "";
	document.getElementById("roboTrimpTurnsLeft").innerHTML = "";
	swapClass("shriekState", "shriekStateCooldown", document.getElementById("chainHolder"));
	document.getElementById("chainHolder").style.visibility = "hidden";
	swapClass("dmgColor", "dmgColorWhite", document.getElementById("badGuyAttack"));
	document.getElementById("badCrit").innerHTML = "";
	document.getElementById("badCanCrit").style.display = "none";
	document.getElementById("autoUpgradeBtn").style.display = "none";
	document.getElementById("autoPrestigeBtn").style.display = "none";
	document.getElementById("voidBuff").innerHTML = "";
	document.getElementById("voidMapsHere").innerHTML = "";
	document.getElementById("heirloomWrapper").style.display = "none";
	document.getElementById("heirloomBtnContainer").style.display = "none";
	document.getElementById("goodGuyName").innerHTML = '<span id="realTrimpName">脆皮</span>&nbsp;(<span id="trimpsFighting">1</span>) <span id="anticipationSpan"></span> <span id="titimpBuff"></span> <span id="debuffSpan"></span>';
	document.getElementById("autoStorageBtn").style.display = "none";
	document.getElementById("repeatVoidsContainer").style.display = "none";
	document.getElementById('corruptionBuff').innerHTML = "";
	document.getElementById("portalTimer").className = "timerNotPaused";
	document.getElementById("grid").className = "";
	document.getElementById('exitSpireBtnContainer').style.display = "none";
	document.getElementById('badDebuffSpan').innerHTML = "";
	document.getElementById('heliumPh').innerHTML = "";
	document.getElementById("mapCreditsLeft").innerHTML = "";
	document.getElementById("swapToCurrentChallengeBtn").style.display = "none";
	document.getElementById('autoGoldenBtn').style.display = "none";
	document.getElementById('scienceCollectBtn').style.display = "block";
	document.getElementById('trimpsBreedingTitle').innerHTML = "配种";
	lookingAtCurrentChallenge = false;
	swapClass("col-xs", "col-xs-10", document.getElementById("gridContainer"));
	swapClass("col-xs", "col-xs-off", document.getElementById("extraMapBtns"));
	mutations.Magma.multiplier = -1;
	mutations.Magma.lastCalculatedMultiplier = -1;
	game.achievements.humaneRun.earnable = true;
	game.achievements.humaneRun.lastZone = 0;
	heirloomsShown = false;
	goldenUpgradesShown = false;
	game.global.selectedHeirloom = [];
	playFabLoginErrors = 0;

	setFormation("0");
	hideFormations();
	hideBones();
	cancelTooltip();

	for (var item in game.resources){
		var elem = document.getElementById(item + "Ps");
		if (elem !== null) elem.innerHTML = "+0/秒";
	}
	filterTabs("all");
	var gatherBtns = ["buildings", "food", "wood", "metal", "science", "trimps"];
	for (var gatherBtn in gatherBtns){
		setGather(gatherBtns[gatherBtn], true);
	}
	var messages = game.global.messages;
	var portal;
	var helium;
	var b;
	var imps;
	var highestLevel;
	var challenge = "";
	var sLevel = 0;
	var lastSkele;
	var bestHelium;
	var totalHeliumEarned;
	var options = game.options;
	var prison;
	var frugal;
	var slow;
	var stats;
	var repeat;
	var achieves;
	var pres;
	var roboTrimp;
	var autoStorage;
	var heirloomStuff = {};
	var lastPortal;
	var autoStorageActive;
	var autoPrestiges;
	var autoUpgrades;
	var heirloomBoneSeed;
	var voidMaxLevel;
	var autoUpgradesAvailable;
	var rememberInfo;
	var playFabLoginType;
	var GeneticistassistSetting;
	var Geneticistassist
	var GeneticistassistSteps;
	var essence;
	var spentEssence;
	var talents;
	var decayDone;
	var recentDailies;
	var trapBuildToggled;
	var magmite;
	var genUpgrades;
	var permanentGenUpgrades;
	var genMode;
	var advMaps;
	var lastBonePresimpt;
	var challengeSquared = false;
	var c2s;
	var perkPresets;
	var improvedAutoStorage;
	var firstCustomAmt;
	var firstCustomExact;
	var autoStructureSetting;
	var pauseFightMember; //Member? I Member
	var autoGolden;
	var heirloomSeed;
	var empowerments;
	var spiresCompleted;
	var hideMapRow;
	var fluffyExp;
	var fluffyPrestige;
	var canMapAtZone;
	var supervisionSetting;
	var autoJobs;
	var freeTalentRespecs;
	var genStateConfig;
	var maxSplit;
	if (keepPortal){
		portal = game.portal;
		helium = game.global.heliumLeftover;
		totalPortals = game.global.totalPortals;
		b = game.global.b;
		imps = game.unlocks.imps;
		highestLevel = game.global.highestLevelCleared;
		sLevel = game.global.sLevel;
		lastSkele = game.global.lastSkeletimp;
		totalHeliumEarned = game.global.totalHeliumEarned;
		prison = game.global.prisonClear;
		frugal = game.global.frugalDone;
		slow = game.global.slowDone;
		autoStorage = game.global.autoStorageAvailable;
		autoUpgradesAvailable = game.global.autoUpgradesAvailable;
		decayDone = game.global.decayDone;
		if (game.global.dailyHelium) game.global.tempHighHelium -= game.global.dailyHelium;
		bestHelium = (game.global.tempHighHelium > game.global.bestHelium) ? game.global.tempHighHelium : game.global.bestHelium;
		if (game.stats.bestHeliumHour.valueTotal < game.stats.heliumHour.value(true)){
			game.stats.bestHeliumHour.valueTotal = game.stats.heliumHour.value(true);
		}
		if (game.stats.bestFluffyExp.value > 0 && game.stats.bestFluffyExpHour.valueTotal < game.stats.fluffyExpHour.value()){
			game.stats.bestFluffyExpHour.valueTotal = game.stats.fluffyExpHour.value();
		}
		stats = game.stats;
		repeat = game.global.repeatMap;
		if (game.global.selectedChallenge) challenge = game.global.selectedChallenge;
		achieves = game.achievements;
		pres = game.global.presimptStore;
		roboTrimp = game.global.roboTrimpLevel;
		lastPortal = game.global.world;
		recentDailies = game.global.recentDailies;
		trapBuildToggled = game.global.trapBuildToggled;
		recycleAllExtraHeirlooms();
		heirloomStuff = {
			heirloomsCarried: game.global.heirloomsCarried,
			StaffEquipped: game.global.StaffEquipped,
			ShieldEquipped: game.global.ShieldEquipped,
			nullifium: game.global.nullifium,
			maxCarriedHeirlooms: game.global.maxCarriedHeirlooms,
		};
		perkPresets = {
			perkPreset1: game.global.perkPreset1,
			perkPreset2: game.global.perkPreset2,
			perkPreset3: game.global.perkPreset3
		};
		autoStorageActive = game.global.autoStorage;
		autoPrestiges = game.global.autoPrestiges;
		autoUpgrades = game.global.autoUpgrades;
		heirloomBoneSeed = game.global.heirloomBoneSeed;
		heirloomSeed = game.global.heirloomSeed;
		voidMaxLevel = game.global.voidMaxLevel;
		playFabLoginType = game.global.playFabLoginType;
		rememberInfo = game.global.rememberInfo;
		GeneticistassistSetting = game.global.GeneticistassistSetting;
		Geneticistassist = game.global.Geneticistassist;
		GeneticistassistSteps = game.global.GeneticistassistSteps;
		essence = game.global.essence;
		talents = game.talents;
		spentEssence = game.global.spentEssence;
		magmite = (game.global.magmite > 0) ? Math.floor(game.global.magmite * ((100 - getMagmiteDecayAmt()) / 100)) : 0;
		genUpgrades = game.generatorUpgrades;
		permanentGenUpgrades = game.permanentGeneratorUpgrades;
		genMode = game.global.generatorMode;
		advMaps = game.global.mapPresets;
		lastBonePresimpt = game.global.lastBonePresimpt;
		challengeSquared = game.global.runningChallengeSquared;
		improvedAutoStorage = game.global.improvedAutoStorage;
		c2s = game.c2;
		firstCustomAmt = (game.global.firstCustomAmt != -1) ? game.global.firstCustomAmt : game.global.lastCustomAmt;
		firstCustomExact = (game.global.firstCustomExact != -1) ? game.global.firstCustomExact: game.global.lastCustomExact;
		autoStructureSetting = game.global.autoStructureSetting;
		pauseFightMember = game.global.pauseFight;
		autoGolden = game.global.autoGolden;
		empowerments = game.empowerments;
		spiresCompleted = game.global.spiresCompleted;
		hideMapRow = game.global.hideMapRow;
		fluffyExp = game.global.fluffyExp;
		fluffyPrestige = game.global.fluffyPrestige;
		canMapAtZone = game.global.canMapAtZone;
		supervisionSetting = game.global.supervisionSetting;
		freeTalentRespecs = game.global.freeTalentRespecs;
		genStateConfig = game.global.genStateConfig;
		maxSplit = game.global.maxSplit;
		if (!game.global.canMagma) {
			if (highestLevel > 229) highestLevel = 229;
			if (roboTrimp > 8) roboTrimp = 8;
		}
		autoJobs = game.global.autoJobsSetting;
	}
	game = null;
	game = newGame();
	game.global.autoSave = autoSave;
	game.global.messages = messages;
	game.options = options;
	if (keepPortal){
		game.achievements = achieves;
		calculateAchievementBonus();
		game.global.bestHelium = bestHelium;
		game.portal = portal;
		game.global.b = b;
		game.global.heliumLeftover = helium;
		game.global.totalPortals = totalPortals;
		game.unlocks.imps = imps;
		game.global.highestLevelCleared = highestLevel;
		game.global.challengeActive = challenge;
		game.global.recentDailies = recentDailies;
		if (challenge == "Daily") game.global.dailyChallenge = getDailyChallenge(readingDaily, true, false);
		game.global.sLevel = sLevel;
		game.global.lastSkeletimp = lastSkele;
		game.global.totalHeliumEarned = totalHeliumEarned;
		game.global.prisonClear = prison;
		game.global.frugalDone = frugal;
		game.global.slowDone = slow;
		game.global.autoStorageAvailable = autoStorage;
		game.global.roboTrimpLevel = roboTrimp;
		game.global.lastPortal = lastPortal;
		game.global.autoStorage = autoStorageActive;
		game.global.autoPrestiges = autoPrestiges;
		game.global.autoUpgrades = autoUpgrades;
		game.global.autoUpgradesAvailable = autoUpgradesAvailable;
		game.global.playFabLoginType = playFabLoginType;
		game.global.rememberInfo = rememberInfo;
		game.global.heirloomBoneSeed = heirloomBoneSeed;
		game.global.heirloomSeed = heirloomSeed;
		game.global.trapBuildToggled = trapBuildToggled;
		game.global.GeneticistassistSetting = (game.options.menu.GeneticistassistTarget.disableOnUnlock) ? -1 : GeneticistassistSetting;
		game.global.Geneticistassist = Geneticistassist;
		game.global.GeneticistassistSteps = GeneticistassistSteps;
		game.global.essence = essence;
		game.global.spentEssence = spentEssence;
		game.talents = talents;
		game.global.decayDone = decayDone;
		game.global.magmite = magmite;
		game.generatorUpgrades = genUpgrades;
		game.permanentGeneratorUpgrades = permanentGenUpgrades;
		game.global.generatorMode = genMode;
		game.global.mapPresets = advMaps;
		game.global.lastBonePresimpt = lastBonePresimpt;
		game.global.runningChallengeSquared = challengeSquared;
		game.global.perkPreset1 = perkPresets.perkPreset1;
		game.global.perkPreset2 = perkPresets.perkPreset2;
		game.global.perkPreset3 = perkPresets.perkPreset3;
		game.global.autoGolden = autoGolden;
		if (improvedAutoStorage)
			enableImprovedAutoStorage();
		game.global.lastCustomAmt = firstCustomAmt;
		game.global.lastCustomExact = firstCustomExact;
		game.global.autoStructureSetting = autoStructureSetting;
		game.global.pauseFight = pauseFightMember;
		game.empowerments = empowerments;
		game.global.spiresCompleted = spiresCompleted;
		game.global.hideMapRow = hideMapRow;
		game.global.fluffyExp = fluffyExp;
		game.global.fluffyPrestige = fluffyPrestige;
		game.global.canMapAtZone = canMapAtZone;
		game.global.supervisionSetting = supervisionSetting;
		game.global.autoJobsSetting = autoJobs;
		game.global.genStateConfig = genStateConfig;
		game.global.freeTalentRespecs = freeTalentRespecs;
		game.global.maxSplit = maxSplit;
		for (var statItem in stats){
			statItem = stats[statItem];
			if (typeof statItem.value !== 'undefined' && typeof statItem.valueTotal !== 'undefined' && !statItem.noAdd) statItem.valueTotal += statItem.value;
			if (statItem.keepHighest && statItem.value > statItem.valueTotal) statItem.valueTotal = statItem.value;
			if (typeof statItem.value !== 'undefined' && typeof statItem.value !== 'function') statItem.value = 0;
			if (typeof statItem.onPortal === 'function') statItem.onPortal();
		}
		game.stats = stats;
		game.global.repeatMap = repeat;

		if (sLevel >= 1) applyS1();
		if (sLevel >= 2) applyS2();
		if (sLevel >= 3) applyS3();
		if (sLevel >= 4) {
			game.buildings.Warpstation.craftTime = 0;
			document.getElementById("autoPrestigeBtn").style.display = "block";
		}
		if (sLevel >= 5) applyS5();
		if (game.global.autoUpgradesAvailable) document.getElementById("autoUpgradeBtn").style.display = "block";
		if (game.global.autoStorageAvailable) {
			document.getElementById("autoStorageBtn").style.display = "block";
			toggleAutoStorage(true);
		}
		if (challenge !== "" && typeof game.challenges[challenge].start !== 'undefined') game.challenges[challenge].start();
		game.portal.Coordinated.currentSend = 1;
		if (pres == "gems" || pres == "fragments"){
			pres = "food";
		}
		game.global.presimptStore = pres;
		for (var heirItem in heirloomStuff){
			game.global[heirItem] = heirloomStuff[heirItem];
		}
		if (game.global.totalPortals == 5) message("Heavy use of the portal has created a chance for the Void to seep into your world. Be alert.", "Story", null, "voidMessage");
		if (game.global.totalPortals >= 5) document.getElementById("heirloomBtnContainer").style.display = "block";
		recalculateHeirloomBonuses();
		if (lastPortal < voidMaxLevel) {
			voidMaxLevel = Math.floor(voidMaxLevel * 0.95);
			if (voidMaxLevel < lastPortal) voidMaxLevel = lastPortal;
		}
		game.global.voidMaxLevel = voidMaxLevel;
		for (var cItem in c2s){
			game.c2[cItem] = c2s[cItem];
		}
		if (game.global.challengeActive == "Trapper"){
			game.global.autoJobsSetting.enabled = false;
		}
	}
	else {
		game.options.menu.darkTheme.enabled = 1;
		game.options.menu.darkTheme.removeStyles();
		game.options.menu.usePlayFab.enabled = 0;
		toggleSetting("usePlayFab", null, false, true);
		playFabId = -1;
	}
	missingTrimps = new DecimalBreed(0);
	Fluffy.handleBox();
	Fluffy.checkAndRunVoidelicious();
	Fluffy.checkAndRunVoidance();
	numTab(1);
	document.getElementById("tab5Text").innerHTML = "+" + prettify(game.global.lastCustomAmt);
	pauseFight(true);
	repeatClicked(true);
	toggleAutoTrap(true);
	toggleAutoStructure(true);
	toggleAutoJobs(true);
	toggleAutoGolden(true);
	toggleAutoUpgrades(true);
	toggleAutoPrestiges(true);
	toggleVoidMaps(true);
	fireMode(true);
	setEmpowerTab();
	resetAdvMaps();
	cancelPortal();
	updateElectricityStacks();
	updateDecayStacks();
	updateAntiStacks();
	setNonMapBox();
	checkChallengeSquaredAllowed();
	initTalents();
	countChallengeSquaredReward();
	displayGoldenUpgrades();
	updateSkeleBtn();
	Fluffy.calculateLevel();
	game.options.menu.tinyButtons.onToggle();
	if (keepPortal) checkAchieve("portals");
	document.getElementById("goodGuyAttack").innerHTML = "";
	document.getElementById("goodGuyBlock").innerHTML = "";
	document.getElementById("goodGuyBar").style.width = "0%";
	document.getElementById("goodGuyHealth").innerHTML = "0";
	document.getElementById("goodGuyHealthMax").innerHTML = "0";
	document.getElementById("trimpsFighting").innerHTML = "1";
	document.getElementById("critSpan").innerHTML = "";
	document.getElementById('togglemapAtZone2').style.display = (game.global.canMapAtZone) ? "block" : "none";
	if (game.global.autoGolden != -1)
		lastAutoGoldenToggle = new Date().getTime();
	if (game.talents.voidSpecial.purchased){
		var mapsToGive = Math.floor(lastPortal / 100);
		if (game.talents.voidSpecial2.purchased) mapsToGive += Math.floor((lastPortal + 50) / 100);
		for (var x = 0; x < mapsToGive; x++){
			createVoidMap();
		}
	}
	if (game.talents.explorers2.purchased){
		unlockUpgrade("Speedexplorer");
	}
	resetSingleBonusColors();
	lastAutoJob = 0;
	if (game.talents.autoJobs.purchased && game.global.autoJobsSetting.portalGather){
		if (game.global.autoJobsSetting.portalGather == "metal") fadeIn("metal", 10);
		setGather(game.global.autoJobsSetting.portalGather);
	}
}

function resetSingleBonusColors(){
	for (var item in game.singleRunBonuses){
		item = game.singleRunBonuses[item];
		if (item.reset) item.reset();
	}
}

function loadSingleBonusColors(){
	for (var item in game.singleRunBonuses){
		item = game.singleRunBonuses[item];
		if (item.owned && item.load) item.load();
	}
}

function enableImprovedAutoStorage(){
	game.global.improvedAutoStorage = true;
	game.buildings.Barn.craftTime = 0;
	game.buildings.Shed.craftTime = 0;
	game.buildings.Forge.craftTime = 0;
}

function applyS1(){
	game.resources.science.owned += 5000;
	fadeIn("science", 10);
	document.getElementById("upgradesTitleSpan").innerHTML = "升级";
	game.resources.wood.owned += 100;
	game.resources.food.owned += 100;
	game.buildings.Trap.owned += 10;
	fadeIn("trimps", 10);
	game.global.autoCraftModifier += 0.25;
	document.getElementById("foremenCount").innerHTML = (game.global.autoCraftModifier * 4) + " 工头";
}

function applyS2(){
	game.triggers.upgrades.fire();
	if (game.global.challengeActive != "Frugal"){
		var toUnlock = ["Supershield", "Dagadder", "Bootboost", "Megamace", "Hellishmet", "Polierarm", "Pantastic", "Axeidic", "Smoldershoulder", "Greatersword", "Bestplate"];
		if (game.global.slowDone){
			toUnlock.push("Harmbalest");
			toUnlock.push("GambesOP");
		}
		for (var x = 0; x < toUnlock.length; x++){
			var upgradeToUnlock = game.mapUnlocks[toUnlock[x]];
			upgradeToUnlock.fire();
			upgradeToUnlock.last += 5;
		}
	}
	game.buildings.Barn.owned = 5;
	game.buildings.Barn.purchased = 5;
	game.resources.food.max = 16000;
	game.buildings.Shed.owned = 5;
	game.buildings.Shed.purchased = 5;
	game.resources.wood.max = 16000;
	game.buildings.Forge.owned = 5;
	game.buildings.Forge.purchased = 5;
	game.resources.metal.max = 16000;
}

function applyS3(){
	game.global.playerModifier = 2;
	game.resources.trimps.owned = game.resources.trimps.realMax();
	if (document.getElementById("trimps").style.visibility == "hidden") fadeIn("trimps", 10);
}
//4.39Qi
function applyS5(){
	game.global.playerModifier = 10;
	game.buildings.Barn.owned = 50;
	game.buildings.Barn.purchased = 50;
	game.resources.food.max = 562949953421312000;
	game.buildings.Shed.owned = 50;
	game.buildings.Shed.purchased = 50;
	game.resources.wood.max = 562949953421312000;
	game.buildings.Forge.owned = 50;
	game.buildings.Forge.purchased = 50;
	game.resources.metal.max = 562949953421312000;
}


var pendingLogs = {
    Loot: [],
    Unlocks: [],
    Combat: [],
    Notices: [],
    all: [],
    RAF: null
};

var messageLock = false;
function message(messageString, type, lootIcon, extraClass, extraTag, htmlPrefix) {
	if (messageLock && type !== "Notices"){
		return;
	}
	if (extraTag && typeof game.global.messages[type][extraTag] !== 'undefined' && !game.global.messages[type][extraTag]){
		return;
	}
	var log = document.getElementById("log");
	var displayType = (game.global.messages[type].enabled) ? "block" : "none";
	var prefix = "";
	var addId = "";
	if (messageString == "Game Saved!" || extraClass == 'save') {
		addId = " id='saveGame'";
		if (document.getElementById('saveGame') !== null){
			var needsScroll = ((log.scrollTop + 10) > (log.scrollHeight - log.clientHeight));
			var oldElem = document.getElementById('saveGame');
			log.removeChild(oldElem);
			log.appendChild(oldElem);
			if (messageString != "Game Saved!") messageString = "<span class='glyphicon glyphicon-off'></span>" + messageString;
			oldElem.innerHTML = messageString;
			if (needsScroll) log.scrollTop = log.scrollHeight;
			return;
		}
	}
    if (game.options.menu.timestamps.enabled){
        messageString = ((game.options.menu.timestamps.enabled == 1) ? getCurrentTime() : updatePortalTimer(true)) + " " + messageString;
    }
    if (!htmlPrefix){
        if (lootIcon && lootIcon.charAt(0) == "*") {
            lootIcon = lootIcon.replace("*", "");
            prefix =  "icomoon icon-";
        }
        else prefix = "glyphicon glyphicon-";
        if (type == "Story") messageString = "<span class='glyphicon glyphicon-star'></span> " + messageString;
        if (type == "Combat") messageString = "<span class='glyphicon glyphicon-flag'></span> " + messageString;
        if (type == "Loot" && lootIcon) messageString = "<span class='" + prefix + lootIcon + "'></span> " + messageString;
        if (type == "Notices"){
			if (lootIcon !== null) messageString = "<span class='" + prefix + lootIcon + "'></span> " + messageString;
			else messageString = "<span class='glyphicon glyphicon-off'></span> " + messageString;
        }
    }
    else messageString = htmlPrefix + " " + messageString;
    var messageHTML = "<span" + addId + " class='" + type + "Message message" +  " " + extraClass + "' style='display: " + displayType + "'>" + messageString + "</span>";
    pendingLogs.all.push(messageHTML);
    if (type != "Story"){
        var pendingArray = pendingLogs[type];
        pendingArray.push(pendingLogs.all.length - 1);
        if (pendingArray.length > 10){
            var index = pendingArray[0];
            pendingLogs.all.splice(index, 1)
            pendingArray.splice(0, 1);
            adjustMessageIndexes(index);
        }
    }
}

function adjustMessageIndexes(index){
    for (var item in pendingLogs){
        if (item == "all" || item == "RAF") continue;
        for (var x = 0; x < pendingLogs[item].length; x++){
            if (pendingLogs[item][x] > index)
                pendingLogs[item][x]--;
        }
    }
}

function postMessages(){
    if (pendingLogs.RAF != null) cancelAnimationFrame(pendingLogs.RAF);

    if(pendingLogs.all.length < 1) {
        return;
    }

    pendingLogs.RAF = requestAnimationFrame(function() {
        var log = document.getElementById("log");
        var needsScroll = ((log.scrollTop + 10) > (log.scrollHeight - log.clientHeight));
        var pendingMessages = pendingLogs.all.join('');
        log.innerHTML += pendingMessages;
        pendingLogs.all = [];
        for (var item in pendingLogs){
            if (item == "all" || item == "RAF") continue;
            if (pendingLogs[item].length)
                trimMessages(item);
            pendingLogs[item] = [];
        }
        if (needsScroll) log.scrollTop = log.scrollHeight;
    });
}

function getCurrentTime(){
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	if (seconds <= 9) seconds = "0" + seconds;
	if (minutes <= 9) minutes = "0" + minutes;
	if (hours <= 9) hours = "0" + hours;
	return hours + ":" + minutes + ":" + seconds;
}

function nodeToArray(nodeList){
	for(var a=[], l=nodeList.length; l--; a[l]=nodeList[l]);
    return a;
}

function trimMessages(what){
	var log = document.getElementById("log");
	var toChange = document.getElementsByClassName(what + "Message");
	toChange = nodeToArray(toChange);
	var messageCount = toChange.length;
	if (messageCount > 20){
		for (var count = 0; count < (messageCount - 20); count++){
			log.removeChild(toChange[count]);
		}
	}
}

function filterMessage(what, updateOnly){ //send true for updateOnly
	var log = document.getElementById("log");
	var displayed = game.global.messages[what].enabled;
	if (!updateOnly){
		displayed = (displayed) ? false : true;
		game.global.messages[what].enabled = displayed;
	}
	var toChange = document.getElementsByClassName(what + "Message");
	var btnText = (displayed) ? cnwhat(what) : cnwhat(what) + "关闭";
	var btnElem = document.getElementById(what + "Filter");
	if (btnElem == null) return;
	btnElem.innerHTML = btnText;
	btnElem.className = "";
	btnElem.className = getTabClass(displayed);
	displayed = (displayed) ? "block" : "none";
	for (var x = 0; x < toChange.length; x++){
		toChange[x].style.display = displayed;
	}
	log.scrollTop = log.scrollHeight;
}

//
//Menu Stuff
var lastScrolls = {};
function filterTabs (what) {
	document.getElementById('talentsTab').style.display = (game.global.highestLevelCleared >= 180) ? "table-cell" : "none";
	var buyContainer = document.getElementById('buyContainer');
	buyContainer.style.height = (game.global.highestLevelCleared >= 180) ? "calc(99vh - 22.2vw - 175px)" : "calc(99vh - 20vw - 195px)";
	lastScrolls[game.global.buyTab] = buyContainer.scrollTop;
	enableDisableTab(game.global.buyTab, false);
	game.global.buyTab = what;
	enableDisableTab(what, true);
	var tabs = ["buildings", "jobs", "upgrades", "equipment", "talents", "nature"];
	for (var tab in tabs){
		tab = tabs[tab];
		document.getElementById(tab + "Container").style.display = ((what == "all" && tab != "talents" && tab != "nature") || tab == what) ? "block" : "none";
	}
	if (what == "talents") displayTalents();
	if (what == "nature") displayNature();
	if (lastScrolls[what]) buyContainer.scrollTop = lastScrolls[what];
}

function enableDisableTab(what, enable){
	var elem = document.getElementById(what + "Tab");
	if(enable)
		elem.className = elem.className.replace("tabNotSelected", "tabSelected");
	else
		elem.className = elem.className.replace("tabSelected", "tabNotSelected");
	//document.getElementById(what + "A").style.borderBottom = (enable) ? "0" : "1px solid #ddd";
}


function getTabClass(displayed){
	return (displayed) ? "btn btn-success logFlt" : "btn btn-danger logFlt";
}

function setMax(amount, forPortal){
	game.global.maxSplit = amount;
	cancelTooltip();
	var elemName = (forPortal) ? "ptab6Text" : "tab6Text";
	document.getElementById(elemName).innerHTML = (amount != 1) ? game.global.maxSplit : "最大";
	if (forPortal) displayPortalUpgrades(true);
}

function numTab(what, p) {
	var num = 0;
	if (what == 6 && game.global.buyAmt == "Max") tooltip('Max', null, 'update', p);
	if (what == 5){
		unlockTooltip();
		tooltip('hide');
		var numBox = document.getElementById("customNumberBox");
		if (numBox){
			num = numBox.value;
			game.global.lastCustomExact = num;
			if (game.global.firstCustomExact == -1) game.global.firstCustomExact = num;
			if (num.split('%')[1] == ""){
				num = num.split('%');
				num[0] = parseFloat(num[0]);
				if (num[0] <= 100 && num[0] >= 0){
					var workspaces = game.workspaces;
					num = Math.floor(workspaces * (num[0] / 100));
				}
				else num = 1;
			}
			else if (num.split('/')[1]){
				num = num.split('/');
				num[0] = parseFloat(num[0]);
				num[1] = parseFloat(num[1]);
				var workspaces = game.workspaces;
				num = Math.floor(workspaces * (num[0] / num[1]));
				if (num < 0 || num > workspaces) num = 1;
			}
			else {
				num = convertNotationsToNumber(num);
			}
		}
		else num = game.global.lastCustomAmt;
		if (num == 0) num = 1;
		if (!isNumberBad(num)) {
			var text = "+" + prettify(num);
			document.getElementById("tab5Text").innerHTML = text;
			document.getElementById("ptab5Text").innerHTML = text;
			game.global.buyAmt = num;
			game.global.lastCustomAmt = num;
			if (game.global.firstCustomAmt == -1) game.global.firstCustomAmt = num;
		}
		else {
			if (numBox.value == "pants" && game.global.sLevel >= 4) {
				//Dedicated to Sleeves, who would be upset if I never added a pants easter egg.
				pantsMode = true;
				message("Get a leg up with PANTS! Until your next trou... browser refresh, you can enable the useless but stylish PANTS ONLY AutoPrestige setting! Denim-ite!", "Notices");
				return;
			}
			message("Please use a number greater than 0!", "Notices");
			return;
		}
	}
	if (typeof what === 'undefined') what = game.global.numTab;
	else
	game.global.numTab = what;
	var tabType = (p) ? "ptab" : "tab";
	var count = 6;
	for (var x = 1; x <= count; x++){
		var thisTab = document.getElementById(tabType + x);
		if(what == x)
			thisTab.className = thisTab.className.replace("tabNotSelected", "tabSelected");
		else
			thisTab.className = thisTab.className.replace("tabSelected", "tabNotSelected");
		if (x == 5) continue;
		switch (x){
			case 1:
				num = 1;
				break;
			case 2:
				num = 10;
				break;
			case 3:
				num = 25;
				break;
			case 4:
				num = 100;
				break;
			case 6:
				num = 'Max';
		}
		if (x == what) game.global.buyAmt = num;
	}
	document.getElementById(tabType + "6Text").innerHTML = (what == 6 && game.global.maxSplit != 1) ? game.global.maxSplit : "最大";
	if (p) {
		displayPortalUpgrades(true);
	}
}

function convertNotationsToNumber(num){
	num = num.toLowerCase();
	if (num.split('e')[1]){
		num = Math.floor(parseFloat(num));
		return num;
	}
	var letters = num.replace(/[^a-z]/gi, "");
	var base = 0;
	if (letters.length){
		if (game.options.menu.standardNotation.enabled == 3){
			var suffices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
			base = (suffices.indexOf(letters[0]) + 1);
			if (letters.length > 1) {
				base *= suffices.length;
				base += (suffices.indexOf(letters[1]) + 1);
			}
		}
		else {
			var suffices = [
				'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
				'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
				'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tg', 'Utg', 'Dtg', 'Ttg',
				'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Otg', 'Ntg', 'Qaa', 'Uqa', 'Dqa', 'Tqa',
				'Qaqa', 'Qiqa', 'Sxqa', 'Spqa', 'Oqa', 'Nqa', 'Qia', 'Uqi', 'Dqi',
				'Tqi', 'Qaqi', 'Qiqi', 'Sxqi', 'Spqi', 'Oqi', 'Nqi', 'Sxa', 'Usx',
				'Dsx', 'Tsx', 'Qasx', 'Qisx', 'Sxsx', 'Spsx', 'Osx', 'Nsx', 'Spa',
				'Usp', 'Dsp', 'Tsp', 'Qasp', 'Qisp', 'Sxsp', 'Spsp', 'Osp', 'Nsp',
				'Og', 'Uog', 'Dog', 'Tog', 'Qaog', 'Qiog', 'Sxog', 'Spog', 'Oog',
				'Nog', 'Na', 'Un', 'Dn', 'Tn', 'Qan', 'Qin', 'Sxn', 'Spn', 'On',
				'Nn', 'Ct', 'Uc'
			];
			for (var x = 0; x < suffices.length; x++){
				if (suffices[x].toLowerCase() == letters){
					base = x + 1;
					break;
				}
			}
		}
		if (base) num = Math.round(parseFloat(num.split(letters)[0]) * Math.pow(1000, base));
	}
	if (!base) num = parseInt(num, 10);
	return num;
}

//Buildings Specific
function removeQueueItem(what, force) {
	if (game.options.menu.pauseGame.enabled && !force) return;
	var queue = document.getElementById("queueItemsHere");
	var elem;
	var multiCraftMax = 1;
	if (game.talents.doubleBuild.purchased) multiCraftMax = 2;
	if (game.talents.deciBuild.purchased) multiCraftMax = 10;
	if (what == "first"){
		elem = queue.firstChild;
		var name = game.global.buildingsQueue[0].split('.');
		if (name[1] > 1){
			var item = name[0];
			name[1] = parseInt(name[1], 10);
			if (multiCraftMax > name[1]){
				multiCraftMax = name[1];
			}
			name[1] -= multiCraftMax;
			if (multiCraftMax > 1){
				for (var x = 1; x < multiCraftMax; x++){
					buildBuilding(item);
				}
			}
			if (name[1] > 0){
				var newQueue = name[0] + "." + name[1];
				name = name[0] + " X" + name[1];
				game.global.buildingsQueue[0] = newQueue;
				elem.firstChild.innerHTML = name;
				checkEndOfQueue();
				return;
			}
		}
		queue.removeChild(elem);
		game.global.buildingsQueue.splice(0, 1);
		checkEndOfQueue();
		return;
	}
	var index = getQueueElemIndex(what, queue);
	elem = document.getElementById(what);
	if (!game.global.buildingsQueue[index]) index = 0;
	queue.removeChild(elem);
	refundQueueItem(game.global.buildingsQueue[index]);
	game.global.buildingsQueue.splice(index, 1);
	if (index === 0) {
		game.global.crafting = "";
		game.global.timeLeftOnCraft = 0;
	}
	checkEndOfQueue();
}

function getQueueElemIndex(id, queue){
	var childs = queue.getElementsByTagName('*');
	for (var i = 0, len = childs.length; i < len; i++){
		if (childs[i].id == id) return ((i - 2)/ 3);
	}
}

function checkEndOfQueue(){
	if (game.global.buildingsQueue.length === 0){
		document.getElementById("noQueue").style.display = "block";
		game.global.nextQueueId = 0;
		game.global.crafting = "";
	}
}

function addQueueItem(what) {
	var elem = document.getElementById("queueItemsHere");
	document.getElementById("noQueue").style.display = "none";
	var name = what.split('.');
	if (name[1] > 1) name = name[0] + " X" + prettify(name[1]);
	else name = name[0];
	elem.innerHTML += '<div class="queueItem" id="queueItem' + game.global.nextQueueId + '" onmouseover="tooltip(\'Queue\',null,event)" onmouseout="tooltip(\'hide\')" onClick="removeQueueItem(\'queueItem' + game.global.nextQueueId + '\'); cancelTooltip();"><span class="queueItemName">' + cnwhat(name) + '</span><div id="animationDiv"></div></div>';
	if (game.global.nextQueueId === 0) setNewCraftItem();
	game.global.nextQueueId++;
}

function updateSkeleBtn(){
	document.getElementById("boneBtnContainer").style.display = "block";
	document.getElementById("boneBtnText").innerHTML = "交易 " + prettify(game.global.b) + " 骨头" + (game.global.b == 1 ? "" : "");
}

//
//Number updates
function updateLabels() { //Tried just updating as something changes, but seems to be better to do all at once all the time
	var toUpdate;
	//Resources (food, wood, metal, trimps, science). Per second will be handled in separate function, and called from job loop.
	for (var item in game.resources){
		toUpdate = game.resources[item];
		if (!(toUpdate.owned > 0)){
			toUpdate.owned = parseFloat(toUpdate.owned);
			if (!(toUpdate.owned > 0)) toUpdate.owned = 0;
		}
		document.getElementById(item + "Owned").innerHTML = prettify(Math.floor(toUpdate.owned));
		if (toUpdate.max == -1 || document.getElementById(item + "Max") === null) continue;
		var newMax = toUpdate.max;
		if (item != "trimps")
			newMax = calcHeirloomBonus("Shield", "storageSize", (newMax * (game.portal.Packrat.modifier * game.portal.Packrat.level + 1)));
		else if (item == "trimps") newMax = toUpdate.realMax();
		document.getElementById(item + "Max").innerHTML = prettify(newMax);
		var bar = document.getElementById(item + "Bar");
		if (game.options.menu.progressBars.enabled){
			var percentToMax = ((toUpdate.owned / newMax) * 100);
			swapClass("percentColor", getBarColorClass(100 - percentToMax), bar);
			bar.style.width = percentToMax + "%";
		}
	}
	updateSideTrimps();
	//Buildings, trap is the only unique building, needs to be displayed in trimp area as well
	for (var itemA in game.buildings){
		toUpdate = game.buildings[itemA];
		if (toUpdate.locked == 1) continue;
		var elem = document.getElementById(itemA + "Owned");
		if (elem === null){
			unlockBuilding(itemA);
			elem = document.getElementById(itemA + "Owned");
		}
		elem.innerHTML = (game.options.menu.menuFormatting.enabled) ? prettify(toUpdate.owned) : toUpdate.owned;
		if (itemA == "Trap") {
			var trap1 = document.getElementById("trimpTrapText")
			if (trap1) trap1.innerHTML = prettify(toUpdate.owned);
			var trap2 = document.getElementById("trimpTrapText2")
			if (trap2) trap2.innerHTML = prettify(toUpdate.owned);
		}
	}
	//Jobs, check PS here and stuff. Trimps per second is handled by breed() function
	for (var itemB in game.jobs){
		toUpdate = game.jobs[itemB];
		if (toUpdate.locked == 1 && toUpdate.increase == "custom") continue;
		if (toUpdate.locked == 1) {
			if (game.resources[toUpdate.increase].owned > 0)
			updatePs(toUpdate, false, itemB);
			continue;
		}
		if (document.getElementById(itemB) === null) unlockJob(itemB);
		document.getElementById(itemB + "Owned").innerHTML = (game.options.menu.menuFormatting.enabled) ? prettify(toUpdate.owned) : toUpdate.owned;
		var perSec = (toUpdate.owned * toUpdate.modifier);
		updatePs(toUpdate, false, itemB);
	}
	//Upgrades, owned will only exist if 'allowed' exists on object
	for (var itemC in game.upgrades){
		toUpdate = game.upgrades[itemC];
		if (toUpdate.allowed - toUpdate.done >= 1) toUpdate.locked = 0;
		if (toUpdate.locked == 1) continue;
		if (document.getElementById(itemC) === null) unlockUpgrade(itemC, true);
	}
	//Equipment
	checkAndDisplayEquipment();
}

 function checkAndDisplayEquipment() {
	for (var itemD in game.equipment){
		var toUpdate = game.equipment[itemD];
		if (toUpdate.locked == 1) continue;
		if (document.getElementById(itemD) === null) drawAllEquipment();
		document.getElementById(itemD + "Owned").innerHTML = toUpdate.level;
	}
}

function updatePs(jobObj, trimps, jobName){ //trimps is true/false, send PS as first if trimps is true, like (32.4, true)
		if (jobObj.increase == "custom" || (typeof jobObj.increase === 'undefined' && !trimps)) return;
		var psText;
		var elem;
		if (trimps) {
			psText = jobObj.toFixed(3);
			elem = document.getElementById("trimpsPs");
		}
		else{
			var increase = jobObj.increase;
			psText = (jobObj.owned * jobObj.modifier);
			//portal Motivation
			if (game.portal.Motivation.level) psText *= (1 + (game.portal.Motivation.level * game.portal.Motivation.modifier));
			if (game.portal.Motivation_II.level) psText *= (1 + (game.portal.Motivation_II.level * game.portal.Motivation_II.modifier));
			if (game.portal.Meditation.level > 0) psText *= (1 + (game.portal.Meditation.getBonusPercent() * 0.01));
			if (game.jobs.Magmamancer.owned > 0 && increase == "metal") psText *= game.jobs.Magmamancer.getBonusPercent();
			if (game.global.challengeActive == "Meditate") psText *= 1.25;
			else if (game.global.challengeActive == "Size") psText *= 1.5;
			if (game.global.challengeActive == "Toxicity"){
					var toxMult = (game.challenges.Toxicity.lootMult * game.challenges.Toxicity.stacks) / 100;
					psText *= (1 + toxMult);
			}
			if (game.global.challengeActive == "Balance"){
				psText *= game.challenges.Balance.getGatherMult();
			}
			if (game.global.challengeActive == "Decay"){
				psText *= 10 * (Math.pow(0.995, game.challenges.Decay.stacks));
			}
			if (game.global.challengeActive == "Daily"){
				if (typeof game.global.dailyChallenge.famine !== 'undefined' && increase != "fragments" && increase != "science"){
					psText *= dailyModifiers.famine.getMult(game.global.dailyChallenge.famine.strength);
				}
				if (typeof game.global.dailyChallenge.dedication !== 'undefined'){
					psText *= dailyModifiers.dedication.getMult(game.global.dailyChallenge.dedication.strength);
				}
			}
			if (game.global.challengeActive == "Watch") psText /= 2;
			if (game.global.challengeActive == "Lead" && ((game.global.world % 2) == 1)) psText *= 2;
			if (jobName != "Explorer" && getEmpowerment() == "Wind"){
				psText *= 1 + (game.empowerments.Wind.getCombatModifier());
			}
			psText = calcHeirloomBonus("Staff", jobName + "Speed", psText);
			if (game.global.playerGathering == increase){
				if ((game.talents.turkimp4.purchased || game.global.turkimpTimer > 0) && increase != "science"){
					var tBonus = 1.5;
					if (game.talents.turkimp4.purchased) tBonus = 2;
					else if (game.talents.turkimp3.purchased) tBonus = 1.75;
					psText *= tBonus;
				}
			psText += getPlayerModifier();
		}
			elem = document.getElementById(increase + "Ps");
			//Portal Packrat
			increase = game.resources[increase];
			if (increase.max != -1){
				var newMax = increase.max + (increase.max * game.portal.Packrat.modifier * game.portal.Packrat.level);
				newMax = calcHeirloomBonus("Shield", "storageSize", newMax);
				if (increase.owned >= newMax) psText = 0;
			}
			psText = psText;

		}
		if (game.options.menu.useAverages.enabled) psText = parseFloat(psText) + getAvgLootSecond(jobObj.increase);
		psText = prettify(psText);
		psText = "+" + psText + "/秒";
		elem.textContent = psText;
		swapClass('sizeSec', ((psText.replace('.','').length >= 11) ? 'sizeSecReduced' : 'sizeSecRegular'), elem);
}

function updateSideTrimps(){
	var trimps = game.resources.trimps;
	document.getElementById("trimpsEmployed").innerHTML = prettify(trimps.employed);
	var breedCount = (trimps.owned - trimps.employed > 2) ? prettify(Math.floor(trimps.owned - trimps.employed)) : 0;
	document.getElementById("trimpsUnemployed").innerHTML = breedCount;
	document.getElementById("maxEmployed").innerHTML = prettify(Math.ceil(trimps.realMax() / 2));
	var free = (Math.ceil(trimps.realMax() / 2) - trimps.employed);
	if (free < 0) free = 0;
	var s = (free > 1) ? "" : "";
	document.getElementById("jobsTitleUnemployed").innerHTML = prettify(free) + " 工作空间";
}

function unlockBuilding(what) {
	game.global.lastUnlock = new Date().getTime();
	var building = game.buildings[what];
	if (building.locked == 1) building.alert = true;
	building.locked = 0;
	drawAllBuildings();
}

function drawAllBuildings(){
	var elem = document.getElementById("buildingsHere");
	elem.innerHTML = "";
	for (var item in game.buildings){
		building = game.buildings[item];
		if (building.locked == 1) continue;
        //建筑名称
		drawBuilding(item, elem);
		if (building.alert && game.options.menu.showAlerts.enabled){
			document.getElementById("buildingsAlert").innerHTML = "!";
			if (document.getElementById(item + "Alert")) document.getElementById(item + "Alert").innerHTML = "!";
		}
	}
	updateGeneratorInfo();
}

function drawBuilding(what, where){
	where.innerHTML += '<div onmouseover="tooltip(\'' + what + '\',\'buildings\',event)" onmouseout="tooltip(\'hide\')" class="thingColorCanNotAfford thing noselect pointer buildingThing" id="' + what + '" onclick="buyBuilding(\'' + what + '\')"><span class="thingName"><span id="' + what + 'Alert" class="alert badge"></span>' + cnwhat(what) + '</span><br/><span class="thingOwned" id="' + what + 'Owned">0</span></div>';
}

function unlockJob(what) {
	game.global.lastUnlock = new Date().getTime();
	var job = game.jobs[what];
	if (job.locked == 1) job.alert = true;
	job.locked = 0;
	drawAllJobs();
}

function drawAllJobs(){
	var elem = document.getElementById("jobsHere");
	elem.innerHTML = "";
	for (var item in game.jobs){
		if (game.jobs[item].locked == 1) continue;
		if (item == "Geneticist" && game.global.Geneticistassist){
			drawGeneticistassist(elem);
		}
		else
			drawJob(item, elem);
		if (game.jobs[item].alert && game.options.menu.showAlerts.enabled){
			document.getElementById("jobsAlert").innerHTML = "!";
			if (document.getElementById(item + "Alert")) document.getElementById(item + "Alert").innerHTML = "!";
		}
	}
}

function drawJob(what, where){
	where.innerHTML += '<div onmouseover="tooltip(\'' + what + '\',\'jobs\',event)" onmouseout="tooltip(\'hide\')" class="thingColorCanNotAfford thing noselect pointer jobThing" id="' + what + '" onclick="buyJob(\'' + what + '\')"><span class="thingName"><span id="' + what + 'Alert" class="alert badge"></span>' + cnjob(what) + '</span><br/><span class="thingOwned" id="' + what + 'Owned">0</span></div>';
}

function drawGeneticistassist(where){
	where.innerHTML += '<div id="GeneticistassistContainer" class="thing"><div onmouseover="tooltip(\'Geneticist\',\'jobs\',event)" onmouseout="tooltip(\'hide\')" class="thingColorCanNotAfford thing noselect pointer jobThing" id="Geneticist" onclick="buyJob(\'Geneticist\')"><span class="thingName"><span id="GeneticistAlert" class="alert badge"></span>遗传学家</span><br/><span class="thingOwned" id="GeneticistOwned">0</span></div><div onmouseover="tooltip(\'Geneticistassist\',null,event)" onmouseout="tooltip(\'hide\')" class="thing thingColorNone noselect stateHappy pointer jobThing" id="Geneticistassist" onclick="toggleGeneticistassist()">遗传学家助手<span id="GAIndicator"></span><br/><span id="GeneticistassistSetting">&nbsp;</span></div></div>';
	toggleGeneticistassist(true);
}

function refreshMaps(){
	document.getElementById("mapsHere").innerHTML = "";
	document.getElementById("voidMapsHere").innerHTML = "";
	for (var item in game.global.mapsOwnedArray) {
			unlockMap(item);
	}
}

function getUniqueColor(item){
	if (!game.global.runningChallengeSquared) {
		if (item.name == "The Prison" && game.global.challengeActive == "Electricity")
			return " noRecycle";
		if (item.name == "The Prison" && game.global.challengeActive == "Mapocalypse")
			return " noRecycle";
		if (item.name == "Imploding Star" && game.global.challengeActive == "Devastation")
			return " noRecycle";
	}

	if (item.location && game.mapConfig.locations[item.location].upgrade){
			var upgrade = game.mapConfig.locations[item.location].upgrade;
			upgrade = (typeof upgrade === 'object') ? upgrade[0] : upgrade;
			upgrade = game.mapUnlocks[upgrade];
			if (upgrade.specialFilter){
				if (!upgrade.specialFilter(item.level)) return " noRecycleDone";
				if (upgrade.specialFilter(item.level) && typeof upgrade.canRunOnce === 'undefined') return " noRecycle";
			}
			if (upgrade.canRunOnce) return " noRecycle";
		}
	return " noRecycleDone";
}

function getMapIcon(mapObject, nameOnly) {
	var icon = mapObject.location;
	icon = game.mapConfig.locations[icon].resourceType;
	if (nameOnly) return icon;
	if (mapObject.voidBuff)
		return voidBuffConfig[mapObject.voidBuff].icon;
	switch (icon){
		case "Food":
			return "glyphicon glyphicon-apple";
		case "Metal":
			return "icomoon icon-cubes";
		case "Wood":
			return "glyphicon glyphicon-tree-deciduous";
		case "Gems":
			return "icomoon icon-diamond";
		case "Any":
			return "icomoon icon-leaf2";
	}
	return "icomoon icon-cubes";
}

function unlockMap(what) { //what here is the array index
	var item = game.global.mapsOwnedArray[what];
	var btnClass = "mapElementNotSelected thing noselect pointer mapThing";
	if (game.singleRunBonuses.goldMaps.owned && !item.noRecycle) btnClass += " goldMap";
	var level = item.level;
	var tooltip = "";
	var loc = "mapsHere";
	if (item.location == "Void") {
		btnClass += " voidMap";
		level = '<span class="glyphicon glyphicon-globe"></span>';
		tooltip = " onmouseover=\"tooltip('Void Map', 'customText', event, '这张地图将按你当前的区域等级进行变化，敌人有一个随机buff，最后一个单元格的boss会掉落氦。此地图在完成一次后将消失，离开地图将重置其进度。');\" onmouseout=\"tooltip('hide')\"";
		loc = "voidMapsHere";
	}
	else if (item.noRecycle) btnClass += getUniqueColor(item);
	var elem = document.getElementById(loc);
	var abbrev = item.bonus;
	if (item.location == "Bionic" && game.talents.bionic2.purchased) abbrev = '<span class="mapSpec"> (P, FA)</span>';
	else abbrev = ((abbrev) ? getMapSpecTag(abbrev) : "");
	if (game.options.menu.extraStats.enabled) elem.innerHTML = '<div' + tooltip + ' class="' + btnClass + '" id="' + item.id + '" onclick="selectMap(\'' + item.id + '\')"><div class="onMapIcon"><span class="' + getMapIcon(item) + '"></span></div><div class="thingName onMapName">' + cnmap(item.name) + '</div><br/><span class="thingOwned mapLevel"><span class="stackedVoids">' + ((item.stacked) ? "(x" + (item.stacked + 1) + ") " : "") + '</span>等级 ' + level + abbrev + '</span><br/><span class="onMapStats"><span class="icomoon icon-gift2"></span>' + Math.floor(item.loot * 100) + '% </span><span class="icomoon icon-cube2"></span>' + item.size + ' <span class="icon icon-warning"></span>' + Math.floor(item.difficulty * 100) + '%</div>' + elem.innerHTML;
	else elem.innerHTML = '<div' + tooltip + ' class="' + btnClass + '" id="' + item.id + '" onclick="selectMap(\'' + item.id + '\')"><span class="thingName">' + item.name + '</span><br/><span class="thingOwned mapLevel"><span class="stackedVoids">' + ((item.stacked) ? "(x" + (item.stacked + 1) + ") " : "") + '</span>Level ' + level + abbrev + '</span></div>' + elem.innerHTML;
	if (item.id == game.global.currentMapId) swapClass("mapElement", "mapElementSelected", document.getElementById(item.id));
}

function getMapSpecTag(modifier){
	return '<span class="mapSpec"> (' + mapSpecialModifierConfig[modifier].abv + ')</span>'
}

function unlockUpgrade(what, displayOnly) {
	if (!displayOnly) game.global.lastUnlock = new Date().getTime();
	if (getAvailableGoldenUpgrades() >= 1) displayGoldenUpgrades(true);
	var upgrade = game.upgrades[what];
	upgrade.locked = 0;
	if (upgrade.prestiges){
		var resName = (what == "Supershield") ? "wood" : "metal";
		upgrade.cost.resources[resName] = getNextPrestigeCost(what);
	}
	if (!displayOnly) {
		upgrade.allowed++;
		upgrade.alert = true;
	}
	drawAllUpgrades();
}

function drawAllUpgrades(){
	var elem = document.getElementById("upgradesHere");
	elem.innerHTML = "";
	for (var item in game.upgrades){
		if (game.upgrades[item].locked == 1) continue;
		drawUpgrade(item, elem);
		if (game.upgrades[item].alert && game.options.menu.showAlerts.enabled){
			document.getElementById("upgradesAlert").innerHTML = "!";
			if (document.getElementById(item + "Alert")) document.getElementById(item + "Alert").innerHTML = "!";
		}
	}
	goldenUpgradesShown = false;
	displayGoldenUpgrades();
}



function drawUpgrade(what, where){
	var upgrade = game.upgrades[what];
	if (upgrade.prestiges && (!upgrade.cost.resources[metal] || !upgrade.cost.resources[wood])){
		var resName = (what == "Supershield") ? "wood" : "metal";
		upgrade.cost.resources[resName] = getNextPrestigeCost(what);
	}
	var done = upgrade.done;
	var dif = upgrade.allowed - done;
	if (dif >= 1) dif -= 1;
     
	where.innerHTML += '<div onmouseover="tooltip(\'' + what + '\',\'upgrades\',event)" onmouseout="tooltip(\'hide\')" class="thingColorCanNotAfford thing noselect pointer upgradeThing" id="' + what + '" onclick="buyUpgrade(\'' + what + '\')"><span id="' + what + 'Alert" class="alert badge"></span><span class="thingName">' + cntitle(what) + '</span><br/><span class="thingOwned" id="' + what + 'Owned">' + done + '</span></div>';
	if (dif >= 1) document.getElementById(what + "Owned").innerHTML = upgrade.done + "(+" + dif + ")";
}

function checkButtons(what) {
	var where = game[what];
	if (what == "jobs") {
		var workspaces = game.workspaces;
		for (var item in game.jobs){
			if (game.jobs[item].locked == 1) continue;
			if (workspaces <= 0 && !(game.jobs[item].allowAutoFire && game.options.menu.fireForJobs.enabled)) updateButtonColor(item, false, true);
			else updateButtonColor(item,canAffordJob(item, false, workspaces, true),true);
		}
		return;
	}
	if (what == "upgrades"){
		for (var itemA in game.upgrades){
			if (game.upgrades[itemA].locked == 1) continue;
			if (itemA == "Coordination")
				updateButtonColor(itemA, (canAffordTwoLevel(game.upgrades[itemA]) && canAffordCoordinationTrimps()));
			else
				updateButtonColor(itemA, canAffordTwoLevel(game.upgrades[itemA]));
		}
		return;
	}
	if (what == "buildings"){
		for (var itemBuild in game.buildings){
			var thisBuilding = game.buildings[itemBuild];
			if (thisBuilding.locked == 1) continue;
			var canAfford = canAffordBuilding(itemBuild, false, false, false, true);
/* 			if (itemBuild == "Nursery" && mutations.Magma.active())
				canAfford = false;
 */			updateButtonColor(itemBuild, canAfford);
		}
		return;
	}
	if (what == "equipment"){
		for (var itemEquip in game.equipment){
			var thisEquipment = game.equipment[itemEquip];
			if (thisEquipment.locked == 1) continue;
			updateButtonColor(itemEquip, canAffordBuilding(itemEquip, null, null, true, true));
		}
		return;
	}
	for (var itemB in where) {
		if (where[itemB].locked == 1) continue;
		var canAfford = true;
		for (var cost in where[itemB].cost) {
			var costItem = where[itemB].cost[cost];
			var numCost = (typeof costItem === 'function') ? costItem() : costItem;
			if (typeof costItem[1] !== 'undefined') numCost = resolvePow(costItem, where[itemB]);
			if (game.resources[cost].owned < numCost) {
				canAfford = false;
				break;
			}
		}
		if (canAfford === false) {
			updateButtonColor(itemB, false);
			continue;
		}
		updateButtonColor(itemB, true);
	}
}

function updateButtonColor(what, canAfford, isJob) {
	if (what == "Amalgamator") return;
	var elem = document.getElementById(what);
	if (elem === null){
		return;
	}
	if (game.options.menu.lockOnUnlock.enabled == 1 && (new Date().getTime() - 1000 <= game.global.lastUnlock)) canAfford = false;
	if (isJob && game.global.firing === true) {
		if(game.jobs[what].owned >= 1) {
			//note for future self:
			//if you need to add more states here, change these to use the swapClass func -grabz
			//with "thingColor" as first param
			swapClass("thingColor", "thingColorFiringJob", elem);
		}
		else{
			swapClass("thingColor", "thingColorCanNotAfford", elem);
		}
		return;
	}
	if (what == "Warpstation") {
		if(canAfford)
			elem.style.backgroundColor = getWarpstationColor();
		else
			elem.style.backgroundColor = "";
	}

	if(canAfford){
		if
			(what == "Gigastation" && (ctrlPressed || game.options.menu.ctrlGigas.enabled)) swapClass("thingColor", "thingColorCtrl", elem);
		else
		swapClass("thingColor", "thingColorCanAfford", elem);
	}
	else
		swapClass("thingColor", "thingColorCanNotAfford", elem);
}

function getWarpstationColor() {
	var amt = game.upgrades.Gigastation.done * 5;
	if (amt > 255) amt = 255;
	return "rgb(0, " + Math.floor(amt / 2) + ", " + amt + ")";

}

function unlockEquipment(what, fromCheck) {
	game.global.lastUnlock = new Date().getTime();
	var equipment = game.equipment[what];
	equipment.locked = 0;
	if (!fromCheck){
		drawAllEquipment();
		return;
	}
}

function drawAllEquipment(){
	var elem = document.getElementById("equipmentHere");
	elem.innerHTML = "";
	for (var item in game.equipment){
		if (game.equipment[item].locked == 1) continue;
		drawEquipment(item, elem);
	}
}

function drawEquipment(what, elem){
	var numeral = "";
	var equipment = game.equipment[what];
	if (equipment.prestige > 1){
		numeral = romanNumeral(equipment.prestige);
	}
	elem.innerHTML += '<div onmouseover="tooltip(\'' + what + '\',\'equipment\',event)" onmouseout="tooltip(\'hide\')" class="noselect pointer thingColorCanNotAfford thing" id="' + what + '" onclick="buyEquipment(\'' + what + '\')"><span class="thingName">' + cnequip(what) + ' <span id="' + what + 'Numeral">' + numeral + '</span></span><br/><span class="thingOwned">等级: <span id="' + what + 'Owned">0</span></span></div>';
}

//isPrevious returns the previous color, used for swapping with str.replace to know which one was before
function getBarColorClass(percent) {
	if (percent > 50) return "percentColorBlue";
	else if (percent > 25) return "percentColorYellow";
	else if (percent > 10) return "percentColorOrange";
	else return "percentColorRed";
}

function displayPerksBtn(){
	var btn = document.getElementById("pastUpgradesBtn");
	if (game.global.totalPortals == 0){
		btn.className = "btn";
		btn.innerHTML = "???";
	}
	else {
		btn.className = "btn btn-primary";
		btn.innerHTML = "查看能力";
	}
}

var hasNewSetting = false;
function toggleSettingsMenu(){
	game.options.displayed = !game.options.displayed;
	var menuElem = document.getElementById("settingsHere");
	if (game.options.displayed) {
		var searchElem = document.getElementById('searchSettings');
		menuElem.style.display = "block";
		toggleSettingSection(true);
		settingTab(((hasNewSetting) ? "New" : "General"));
		return;
	}
	menuElem.style.display = "none";
	if (hasNewSetting) clearNewSettings();
}

function addNewSetting(name){
	game.options.menu[name].isNew = true;
	hasNewSetting = true;
	toggleSettingAlert();
}

function clearNewSettings(){
	for (var item in game.options.menu){
		if (game.options.menu[item].isNew) game.options.menu[item].isNew = false;
	}
	hasNewSetting = false;
	toggleSettingAlert();
	document.getElementById('NewTab').style.display = 'none';
}

function toggleSettingAlert(){
	var elem = document.getElementById('settingsAlert');
	if (elem == null) {
		if (hasNewSetting) document.getElementById('settingsText').innerHTML += ' <span class="alert" id="settingsAlert">!</span>';
		return;
	}
	if (hasNewSetting) elem.style.display = 'inline-block';
	else elem.style.display = 'none';
}

function displayAllSettings() {
	var settingsHere = document.getElementById("allSettingsHere");
	var html = "";
	for (var item in game.options.menu){
		var optionItem = game.options.menu[item];
		if (optionItem.locked) continue;
		if (typeof optionItem.lockUnless === 'function' && !optionItem.lockUnless()) continue;
		html += getSettingHtml(optionItem, item);
	}
	settingsHere.innerHTML = html;
}

function toggleSettingSection(toSearch){
	document.getElementById('searchSettingsWindow').style.display = (toSearch) ? "block" : "none";
	document.getElementById('allSettings').style.display = (toSearch) ? "none" : "block";
	document.getElementById(((toSearch) ? 'allSettingsHere' : 'settingSearchResults')).innerHTML = '';
	if (!toSearch) displayAllSettings();
	else searchSettings(document.getElementById('searchSettings'));
}

function settingTab(what){
	var elem = document.getElementById('searchSettings');
	elem.value = what;
	searchSettings(elem);
	clearSettingTabs();
	var tabElem = document.getElementById(what + "Tab");
	if (tabElem) swapClass('tab', 'tabSelected', tabElem);
	if (what == "New") document.getElementById('NewTab').style.display = "table-cell";
}

function clearSettingTabs(){
	var elems = document.getElementsByClassName('settingTab');
	for (var x = 0; x < elems.length; x++){
		swapClass('tab', 'tabNotSelected', elems[x])
	}
}

function searchSettings(elem){
	var search = elem.value.toLowerCase();
	var resultsElem = document.getElementById('settingSearchResults');
	if (search.length < 2) {
		resultsElem.innerHTML = "";
		return;
	}
	var results = [];
	for (var optionName in game.options.menu){
		var optionObject = game.options.menu[optionName];
		if (optionObject.locked) continue;
		if (typeof optionObject.lockUnless === 'function' && !optionObject.lockUnless()) continue;
		if (search == "new"){
			if (!optionObject.isNew) continue;
			results.push(optionName);
			continue;
		}
		if (optionObject.extraTags && optionObject.extraTags.search(search) != -1) results.push(optionName);
		else if (optionObject.description.toLowerCase().search(search) != -1) results.push(optionName);
		else {
			for (var x = 0; x < optionObject.titles.length; x++){
				if (optionObject.titles[x].toLowerCase().search(search) != -1){
					results.push(optionName);
					break;
				}
			}
		}
	}
	var text = "";
	var forceClass = "";
	if (results.length > 10) {
		if (results.length > 12) {
			resultsElem.innerHTML = "";
			return;
		}
		else forceClass = ' settingFit12';

	}
	clearSettingTabs();
	for (var x = 0; x < results.length; x++){
		text += getSettingHtml(game.options.menu[results[x]], results[x], forceClass);
	}
	resultsElem.innerHTML = text;
}

function getSettingHtml(optionItem, item, forceClass, appendId){
	if (!appendId) appendId = "";
	if (!forceClass) forceClass = "";
	var text = optionItem.titles[optionItem.enabled];
	return "<div class='optionContainer" + forceClass + "'><div id='toggle" + item + appendId + "' class='noselect settingsBtn settingBtn" + optionItem.enabled + "' onclick='toggleSetting(\"" + item + "\"" + ((appendId) ? "" : ", this") + ")' onmouseover='tooltip(\"" + text + "\", \"customText\", event, \"" + optionItem.description + "\")' onmouseout='tooltip(\"hide\")'>" + text + "</div></div>";
}

function saveMapAtZone(){
	var elem = document.getElementById('mapAtZoneInput');
	var errText = document.getElementById('mapAtZoneErrorText');
	if (elem == null){
		cancelTooltip(true);
		return;
	}
	if (errText) errText.innerHTML = "";
	var value = elem.value.replace(' ', '');
	value = value.split(',');
	var newValue = [];
	var count = value.length;
	var errors = 0;
	if (count > 5) count = 5;
	for (var x = 0; x < count; x++){
		var thisItem = parseInt(value[x], 10);
		if (newValue.indexOf(thisItem) >= 0) continue;
		if (isNaN(thisItem)){
			if (errText) {
				errText.innerHTML += value[x] + " is not a number. ";
				errors++;
			}
		}
		else if (thisItem < 10 || thisItem > 1000){
			if (errText){
				errText.innerHTML += thisItem + " is not between 10 and 1000. ";
				errors++;
			}
		}
		else{
			newValue.push(thisItem);
		}
	}
	if (errors <= 0){
		newValue.sort(function(a, b){return a - b});
		game.options.menu.mapAtZone.setZone = newValue;
		game.options.menu.mapAtZone.enabled = 1;
		toggleSetting('mapAtZone', null, false, true);
		cancelTooltip(true);
	}
}

var lastPause = -1;
function toggleSetting(setting, elem, fromPortal, updateOnly, backwards){
	if (setting == "GeneticistassistTarget") {
		tooltip('Geneticistassist Settings', null, 'update');
		return;
	}
	if (setting == "generatorStart" && ctrlPressed && game.permanentGeneratorUpgrades.Supervision.owned){
		tooltip("Configure Generator State", null, "update");
		return;
	}
	if (setting == "pauseGame"){
		if (game.options.menu.disablePause.enabled == 0) return;
		if (new Date().getTime() - lastPause < 110) return;
		lastPause = new Date().getTime();
	}
	var menuOption = game.options.menu[setting];
	if (setting == "mapAtZone" && !updateOnly && menuOption.enabled == 0){
		tooltip('Set Map At Zone', null, 'update');
		return;
	}
	if (setting == "usePlayFab" && !updateOnly){
		if (menuOption.enabled == 0){
			authenticated = enablePlayFab();
			if (!authenticated) return;
		}
		else {
			game.global.playFabLoginType = -1;
			playFabId = -1;
		}
	}
	var toggles = menuOption.titles.length;
	if (!updateOnly){
		if (backwards && toggles > 2){
			menuOption.enabled--;
			if (menuOption.enabled < 0) menuOption.enabled = toggles - 1;
		}
		else {
			if (toggles == 2)	menuOption.enabled = (menuOption.enabled) ? 0 : 1;
			else {
				menuOption.enabled++;
				if (menuOption.enabled >= toggles) menuOption.enabled = 0;
			}
		}
		if (menuOption.onToggle) menuOption.onToggle();
	}
	else if (setting == "usePlayFab") menuOption.onToggle();
	if (fromPortal){
		document.getElementById('ptabInfoText').innerHTML = (menuOption.enabled) ? "Less Info" : "More Info";
		displayPortalUpgrades(true);
		return;
	}
	var menuElem = [];
	menuElem[0] = (elem) ? elem : document.getElementById("toggle" + setting);
	if (typeof menuOption.secondLocation !== 'undefined'){
		for (var z = 0; z < menuOption.secondLocation.length; z++){
			menuElem.push(document.getElementById(menuOption.secondLocation[z]));
		}
	}
	for (var x = 0; x < menuElem.length; x++){
		if (menuElem[x] === null) continue;
		menuElem[x].innerHTML = menuOption.titles[menuOption.enabled];
		swapClass("settingBtn", "settingBtn" + menuOption.enabled, menuElem[x]);
		if (setting == "deleteSave") return;
		if (!updateOnly && elem) cancelTooltip(true);
		menuElem[x].onmouseover = function(event) {tooltip(menuOption.titles[menuOption.enabled], "customText", event, menuOption.description)};
	}
	if (!updateOnly && elem) tooltip(menuOption.titles[menuOption.enabled], "customText", 'update', menuOption.description)
}

	function achievementCompatibilityUnlock() {
		checkAchieve("zones", null, false, true);
		checkAchieve("damage", calculateDamage(game.global.soldierCurrentAttack, true, true, true), false, true);
		checkAchieve("trimps", game.resources.trimps.owned, false, true);
		checkAchieve("portals", null, false, true);
		checkAchieve("totalZones", null, false, true);
		checkAchieve("totalMaps", null, false, true);
		game.stats.gemsCollected.value += game.resources.gems.owned;
		checkAchieve("totalGems", null, false, true);
		for (var item in game.achievements.housing.breakpoints){
			item = game.achievements.housing.breakpoints[item];
			if (game.buildings[item] && game.buildings[item].owned > 0) checkAchieve("housing", item, false, true);
			else break;
		}
		if (game.global.achievementBonus > 0){
			cancelTooltip();
			tooltip("New Achievements", null, 'update');
		}
	}

	function displayAchievementPopup(id, forHover, displayNumber){
		if (!forHover && game.options.menu.achievementPopups.enabled == 0) return;
		var achievement = game.achievements[id];
		var index = achievement.newStuff.indexOf(displayNumber);
		if (index != -1) {
			document.getElementById(id + displayNumber + "Alert").style.display = "none";
			achievement.newStuff.splice(index, 1);
		}
		var location = (forHover) ? "Hover" : "Popup";
		if (!forHover && typeof achievement.finished === 'number') displayNumber = achievement.finished;
		var prog = document.getElementById("achievementHoverProgress");
		var one = (typeof achievement.finished !== 'number');
		var titleElem = document.getElementById('achievement' + location + 'Title');
		if (forHover && ((!one && !achievement.showAll && displayNumber > achievement.finished) || (one && (game.global.highestLevelCleared < achievement.filters[displayNumber] && !achievement.finished[displayNumber])))) {
			document.getElementById("achievement" + location).style.display = "block";
			document.getElementById("achievement" + location + "IconContainer").innerHTML = '<span class="achieveTier' + achievement.tiers[displayNumber] + ' icomoon icon-locked achievementPopupIcon"></span>';
			titleElem.innerHTML = "未解锁";
			titleElem.className = 'achieveTier' + achievement.tiers[displayNumber];
			document.getElementById("achievement" + location + "Description").innerHTML = "未解锁";
			document.getElementById("achievement" + location + "Reward").innerHTML = '<b>奖励:</b> +' + game.tierValues[achievement.tiers[displayNumber]] + "% 伤害";
			prog.innerHTML = "";
			return;
		}
		document.getElementById("achievement" + location).style.display = "block";
		document.getElementById("achievement" + location + "IconContainer").innerHTML = '<span class="achieveTier' + achievement.tiers[displayNumber] + ' ' + achievement.icon + ' achievementPopupIcon"></span>';
		titleElem.innerHTML = achievement.names[displayNumber];
		titleElem.className = 'achieveTier' + achievement.tiers[displayNumber];
		document.getElementById("achievement" + location + "Description").innerHTML = achievement.description(displayNumber);
		document.getElementById("achievement" + location + "Reward").innerHTML = '<b>奖励:</b> +' + game.tierValues[achievement.tiers[displayNumber]] + "% 伤害";
		if (forHover && typeof achievement.progress !== 'undefined' && (typeof achievement.highest === 'undefined' || (achievement.highest > 0 || achievement.finished > 0))){
			if (!one && achievement.tiers.length == achievement.finished){
				prog.innerHTML = "行已完成! (" + achievement.progress() + ")";
			}
			else{
				prog.innerHTML = "进度: " + achievement.progress();
			}
		}
		else
			prog.innerHTML = "";
	}

	function checkAchieve(id, evalProperty, doubleChecking, noDisplay) {
		if (id == "housing" && checkHousing() >= 100) giveSingleAchieve("Realtor");
		var achievement = game.achievements[id];
		if (typeof achievement.evaluate !== 'undefined') evalProperty = achievement.evaluate();
		if (achievement.timed && evalProperty < 0) return;
		if (typeof achievement.highest !== 'undefined') {
			if (achievement.reverse) {
				if (achievement.highest === 0 || evalProperty < achievement.highest) achievement.highest = evalProperty;
			}
			else {
				if (evalProperty > achievement.highest) achievement.highest = evalProperty;
			}
		}
		if (achievement.finished == achievement.tiers.length) return;
		if (typeof achievement.breakpoints[achievement.finished] === 'number'){
			if (!achievement.reverse){
				if (evalProperty < achievement.breakpoints[achievement.finished]) return;
			}
			else {
				if (evalProperty >= achievement.breakpoints[achievement.finished]) return;
			}
		}
		else if (evalProperty != achievement.breakpoints[achievement.finished]) return;
		if (!noDisplay) displayAchievementPopup(id, false, achievement.finished);
		achievement.newStuff.push(achievement.finished);
		achievement.finished++;
		checkAchieve(id, evalProperty, true, noDisplay);
		if (!doubleChecking) calculateAchievementBonus();
		if (trimpAchievementsOpen && !doubleChecking) displayAchievements();
	}

	function giveSingleAchieve(index){
		var achievement = game.achievements.oneOffs;
		index = game.achievements.oneOffs.names.indexOf(index);
		if (achievement.finished[index]) return;
		displayAchievementPopup("oneOffs", false, index);
		achievement.newStuff.push(index);
		achievement.finished[index] = true;
		calculateAchievementBonus();
		if (trimpAchievementsOpen) displayAchievements();
	}

	function calculateAchievementBonus(){
		var totalBonus = 0;
		for (var item in game.achievements){
			var achievement = game.achievements[item];
			var one = (typeof achievement.finished !== 'number'); //Check for one-off achievement
			var count = (one) ? achievement.finished.length : achievement.finished;
			for (var x = 0; x < count; x++){
				if (one && !achievement.finished[x]) continue;
				totalBonus += game.tierValues[achievement.tiers[x]];
			}
		}
		game.global.achievementBonus = parseFloat(totalBonus.toFixed(1));
	}

	function displayAchievements(){
		var htmlString = "";
		for (var item in game.achievements) {
			var achievement = game.achievements[item];
			if (typeof achievement.display !== 'undefined' && !achievement.display()) continue;
			var amount = achievement.tiers.length;
			var one = (typeof achievement.finished !== 'number');
			var titleClass = 'class="achievementTitle';
			if (amount > 48)
				titleClass += ' quinTall';
			else if (amount > 36)
				titleClass += ' quadTall';
			else if (amount > 24)
				titleClass += ' tripleTall';
			else if (amount > 12)
				titleClass += ' doubleTall';


			htmlString += '<div class="achievementsContainer"><div ' + titleClass + '">' + achievement.title + '</div><span class="littleAchievementWrapper">';
			var width = 7.3;
			for (var x = 0; x < amount; x++){
				if (one && achievement.filters[x] == -1 && !achievement.finished[x]) continue;
				var displayColor = "grey";
				var borderStyle = "";
				var tierValue = "<span style='color: black;' class='" + achievement.icon + "'></span>";
				if ((!one && achievement.finished == x) || (one && !achievement.finished[x] && game.global.highestLevelCleared >= achievement.filters[x])) {
					if (item == "humaneRun")
						displayColor = (achievement.evaluate() == 0) ? "#b32d00" : "#C5C515"; //Yellow
					else
						displayColor = (one && !checkFeatEarnable(achievement.names[x])) ? "#b32d00" : "#C5C515"; //Yellow
				}
				else if ((one && achievement.finished[x]) || (!one && achievement.finished > x)) {
					displayColor = "#159515"; //Greenz
					if (achievement.newStuff.length && achievement.newStuff.indexOf(x) != -1) tierValue = "<span id='" + item + x + "Alert' style='color: yellow;' class='icomoon icon-exclamation-circle'></span>&nbsp;" + tierValue;
				}
				else tierValue = "&nbsp;";
				htmlString += '<div onmouseover="displayAchievementPopup(\'' + item + '\', true, ' + x + ')" class="achievementContainer achieveTier' + achievement.tiers[x] + '" style="background-color: ' + displayColor + '; width: ' + width + '%;">' + tierValue + '</div>';
			}
			htmlString += '</span><div id="' + item + 'Description" class="achievementDescription")"></div></div>';
		}
		document.getElementById("achievementsHere").innerHTML = htmlString;
		document.getElementById("achievementTotalPercent").innerHTML = game.global.achievementBonus;
	}

	var trimpAchievementsOpen = false;
	function toggleAchievementWindow(){
		closeAchievementPopup();
		document.getElementById("achievementWrapper").style.display = (trimpAchievementsOpen) ? "none" : "block";
		document.getElementById("wrapper").style.display = (trimpAchievementsOpen) ? "block" : "none";
		trimpAchievementsOpen = !trimpAchievementsOpen;
		if (trimpAchievementHelpOn) toggleAchievementHelp();
		if (!trimpAchievementsOpen) return;
		displayAchievements();
		var fluff = [
			[", 更好的取得更多的成就", ", 你会做一些更多的成就更好", " 但是你希望你有更多的成就"],
			[", your achievement game shows promise", "，在你成就的道路上", ",多亏了你的成就"],
			[",多亏了你大量的成就", ", must be all those achievements", ", you are one with the achievements", " and you water your achievements daily"],
			[", your Trimps are mighty impressed", ", your achievements are mind blowing", ". You wake up, achieve, then sleep", ", you have achievement in your blood"],
			[", 你的成就超越了凡人的理解", ", 脆皮远播告诉你的成就的故事", ", 你取得了成就", ", 你接触的一切都变成成就"],
			[", 你的成就已经取得成就", ", 你的成就的消息传遍了整个银河系。", ", 成就符合你的意愿", ", 你的成就超越了现实"],
			[", word of your achievement spreads throughout the universe", ", everyone else is super jealous", ", the achievements of your achievements have achieved achievement", ", your achievements have gained sentience", ", everyone else just stays home", ", you appear if someone says 'Achievement' 3 times in a mirror"]
		];
		var fluffLevel = getAchievementStrengthLevel();
		fluff = fluff[fluffLevel];
		fluff = fluff[Math.floor(Math.random() * fluff.length)]
		document.getElementById("achievementFluff").innerHTML = fluff;
		document.getElementById("achievementTotalPercent").innerHTML = game.global.achievementBonus;
		setGoldenBonusAchievementText();
	}

	function checkFeatEarnable(which){
		var failables = {
			Underachiever: function (){
				return (game.global.world < 30 && game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 60);
			},
			Underbalanced: function () {
				return (game.global.challengeActive == "Balance" && !game.global.runningChallengeSquared && game.challenges.Balance.highestStacks <= 100);
			},
			Peacekeeper: function (){
				return (game.global.world < 10 && game.stats.trimpsKilled.value <= 5);
			},
			Workplace_Safety: function () {
				return (game.global.world < 60 && game.stats.trimpsKilled.value <= 1000);
			},
			No_Time_for_That: function () {
				return (game.global.world < 120 && !game.global.researched);
			},
			Tent_City: function () {
				return (game.global.world < 75 && checkHousing(true) == 0);
			},
			Shaggy: function () {
				return (game.global.world < 60 && getHighestPrestige() <= 3);
			},
			Thick_Skinned: function () {
				return (game.global.challengeActive == "Crushed" && game.challenges.Crushed.critsTaken == 0);
			},
			Great_Host: function () {
				return (game.global.challengeActive == "Nom");
			},
			Unemployment: function () {
				var jobCount = 0;
				for (var job in game.jobs) {
					jobCount += game.jobs[job].owned;
				}
				return (game.global.world < 60 && jobCount - game.jobs.Dragimp.owned - game.jobs.Amalgamator.owned == 0 && game.stats.trimpsFired.value == 0);
			},
			Trimp_is_Poison: function () {
				return (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.highestStacks <= 400);
			},
			Grindless: function () {
				return (game.global.challengeActive == "Watch" && !game.challenges.Watch.enteredMap && game.buildings.Nursery.purchased == 0);
			},
			Unsatisfied_Customer: function () {
				return (game.global.challengeActive == "Lead" && game.upgrades.Gigastation.done <= 1);
			},
			Organic_Trimps: function () {
				return (game.global.challengeActive == "Corrupted" && !game.challenges.Corrupted.hiredGenes && game.jobs.Geneticist.owned == 0);
			},
			Invincible: function () {
				return (game.global.world <= 200 && game.global.spireDeaths == 0);
			},
			Grounded: function () {
				return game.global.challengeActive == "Electricity";
			},
			Very_Sneaky: function () {
				return game.global.challengeActive == "Life";
			},
			Nerfed: function () {
				return (game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 100e6);
			},
			Obliterate: function () {
				return (game.global.challengeActive == "Obliterated");
			},
			M_Algamator: function () {
				return (game.global.world == 1);
			},
			Hypercoordinated: function () {
				return (game.global.challengeActive == "Coordinate")
			},
			Forgot_Something: function () {
				return (game.upgrades.Bounty.done == 0)
			},
			Unbroken: function () {
				return (game.stats.battlesLost.value <= 5);
			},
			Leadership: function () {
				return (game.stats.battlesLost.value <= 100 && game.global.challengeActive == "Lead");
			},
			AntiScience: function () {
				return (game.global.challengeActive == "Scientist" && game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4)
			},
			Nerfeder: function () {
				return (game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 1e9);
			},
			Imploderated: function () {
				return (game.global.challengeActive == "Obliterated");
			},
			Fhtagn: function(){
				return (game.global.challengeActive == "Domination");
			},
			Eradicate: function(){
				return (game.global.challengeActive == "Eradicated");
			},
			Invisible: function(){
				return (game.global.world < 599 || (game.global.spireDeaths == 0 && game.global.spireActive));
			},
			Unessenceted: function(){
				return (game.global.canRespecPerks && !game.global.bonePortalThisRun && countHeliumSpent() <= 0)
			},
			Melted: function(){
				return (game.global.challengeActive == "Obliterated");
			},
			Screwed: function(){
				return (game.global.challengeActive == "Eradicated");
			}

		};
		which = which.replace(/ /g, '_').replace("'", '_');
		if (typeof failables[which] === 'function') return failables[which]();
		else return true;
	}

	function countTotalPossibleAchievePercent(){
		var total = 0;
		for (var item in game.achievements){
			var achieve = game.achievements[item];
			for (var x = 0; x < achieve.tiers.length; x++){
				total += game.tierValues[achieve.tiers[x]];
			}
		}
		return total;
	}

	function setGoldenBonusAchievementText(){
		var elem = document.getElementById('achievementGoldenBonusContainer');
		var tier = getAchievementStrengthLevel();
		var tiers = [15, 100, 300, 600, 1000, 2000];
		var freq = getGoldenFrequency(tier);
		if (tier <= 0) {
			elem.innerHTML = "";
			return false;
		}
		var html = "你每过" + freq + "区域将获得一个金色升级。";
		if (tier < tiers.length) html += "当成就增加" + tiers[tier] + "%的额外伤害时获得金色升级的频率增加。";
		else {
			var count = countExtraAchievementGoldens();
			html += "在额外伤害超过2000%后，每增加500%额外伤害，在传送后刚开局都会给一个额外的金色升级。现在能够获得" + count + "个额外金色升级" + ((count == 1) ? "" : "") + "。";
		}
		elem.innerHTML = html;
	}

	function getAchievementStrengthLevel(){
		var percent = game.global.achievementBonus;
		if (percent < 15) return 0;
		else if (percent < 100) return 1;
		else if (percent < 300) return 2;
		else if (percent < 600) return 3;
		else if (percent < 1000) return 4;
		else if (percent < 2000) return 5;
		return 6;
	}

	function countExtraAchievementGoldens(){
		var bonus = Math.floor((game.global.achievementBonus - 2000) / 500);
		return (bonus > 0) ? bonus : 0;
	}

	var trimpAchievementHelpOn = false;
	function toggleAchievementHelp(){
		document.getElementById("achievementHelp").style.color = (trimpAchievementHelpOn) ? "#202080" : "#6060C0";
		document.getElementById("achievementHeader").style.display = (trimpAchievementHelpOn) ? "block" : "none";
		document.getElementById("achievementHelpContainer").style.display = (trimpAchievementHelpOn) ? "none" : "block";
		trimpAchievementHelpOn = !trimpAchievementHelpOn;
	}

	function closeAchievementPopup(forHover){
		var location = (forHover) ? "Hover" : "Popup";
		document.getElementById("achievement" + location).style.display = "none";
	}

/* 	function showAchievementDescription(id, number){
		var elem = document.getElementById(id + "Description");
		var achievement = game.achievements[id];
		if (number > achievement.finished) return;
		elem.innerHTML = "<b>" + achievement.names[number] + ":</b> " + achievement.description(number) + "<br/><br/>";
	}

	function hideAchievementDescription(id){
		document.getElementById(id + "Description").innerHTML = "";
	} */

function updateDecayStacks(addStack){
	var elem = document.getElementById('decayStacks');
	if (game.global.challengeActive != "Decay"){
		if (elem == null) return;
		elem.style.display = "none";
		return;
	}
	if (addStack && game.challenges.Decay.stacks < 999 && game.upgrades.Battle.done > 0) game.challenges.Decay.stacks++;
	if (elem == null){
		document.getElementById('debuffSpan').innerHTML += "<span id='decayStacks' onmouseout='tooltip(\"hide\")' class='badge antiBadge'><span id='decayStackCount'></span> <span class='glyphicon glyphicon-cloud'></span></span>";
		elem = document.getElementById('decayStacks');
	}
	var amt = ((1 - Math.pow(0.995, game.challenges.Decay.stacks)) * 100).toFixed(2);
	elem.setAttribute('onmouseover', 'tooltip("Decay", null, event)');
	document.getElementById('decayStackCount').innerHTML = game.challenges.Decay.stacks;
}

function swapClass(prefix, newClass, elem) {
if (elem == null) {
	console.log("swapClass, No element found. Prefix: " + prefix + ", newClass: " + newClass);
	return;
	}
  var className = elem.className;
  if (typeof className.split('newClass')[1] !== 'undefined') return;
  className = className.split(prefix);
  if(typeof className[1] === 'undefined') {
	  console.log("swapClass function error: Tried to replace a class that doesn't exist at [" + elem.className + "] using " + prefix + " as prefix and " + newClass + " as target class.");
	  elem.className += " " + newClass;
	  return;
  }
  var classEnd = className[1].indexOf(' ');
  if (classEnd >= 0)
  	className = className[0] + newClass + className[1].slice(classEnd, className[1].length);
  else
  	className = className[0] + newClass;
  elem.className = className;
}

function goRadial(elem, currentSeconds, totalSeconds, frameTime){

        if (currentSeconds <= 0) currentSeconds = 0;
        elem.style.transition = "";
        elem.style.transform = "rotate(" + timeToDegrees(currentSeconds, totalSeconds) + "deg)";
        setTimeout(
            (function(ft, cs, ts) {
                return function() {
                    elem.style.transform = "rotate(" + timeToDegrees(cs + ft / 1000, ts) + "deg)";
                    elem.style.transition = cs < 0.1 ? "" : "transform " + ft + "ms linear";
                }
            })(frameTime, currentSeconds, totalSeconds).bind(this)
        , 0);
}

function isObjectEmpty(obj){
	for (var item in obj){
		return false;
	}
	return true;
}

function timeToDegrees(currentSeconds, totalSeconds){
	var degrees = (360 * (currentSeconds / totalSeconds * 100) / 100);
	return degrees % 360;
}

// 431741580's code

var tooltips = {};
/**
 * Generates tooltip and text for error popup
 * @param  {String} textString String of error stack
 * @return {{tooltip: String, costText: String}}   tooltip to be shown[description]
 */
tooltips.showError = function (textString) {
	var tooltip = "<p>嗯，这很尴尬。脆皮遇到了一个错误。尝试刷新页面。</p>";
	tooltip += "<p>如果你把下面的内容贴在网站上就太棒了 <a href='https://reddit.com/r/Trimps/'>trimps subreddit</a> 或者发邮件给 trimpsgame@gmail.com</p>";
	tooltip += "注意：保存已被禁用。<br/><br/><textarea id='exportArea' spellcheck='false' style='width: 100%' rows='5'>";
	var bugReport = "--BEGIN ERROR STACK--\n";
	bugReport += textString + '\n';
	bugReport += "--END ERROR STACK--\n\n";
	bugReport += "--BEGIN SAVE FILE--\n";
	var saveFile;
	try {
		saveFile = save(true);
		bugReport += saveFile + "\n";
	} catch (e) {
		bugReport += "While attempting to save, the following error occured\n"
		bugReport += e.stack + "\n";
	}
	bugReport += "--END SAVE FILE--";
	tooltip += bugReport;
	tooltip += "</textarea>";
	var costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip()'>Got it</div>";
	if (document.queryCommandSupported('copy')){
		costText += "<div id='clipBoardBtn' class='btn btn-success'>复制到粘贴板</div>";
	}
	costText += "<a id='downloadLink' target='_blank' download='Trimps Bug Report', href=";
	if (Blob !== null) {
		var blob = new Blob([bugReport], {type: 'text/plain'});
		var uri = URL.createObjectURL(blob);
		costText += uri;
	} else {
		costText += 'data:text/plain,' + encodeURIComponent(bugReport);
	}
	costText += " ><div class='btn btn-danger' id='downloadBtn'>Download as file</div></a>";
	disableSaving = true;
	return {tooltip: tooltip, costText: costText};
};

/**
 * Generates a function to handle copy button on popups
 * @return {Function} Function to handle copy butons
 */
tooltips.handleCopyButton = function () {
	var ondisplay;
	if (document.queryCommandSupported('copy')){
		ondisplay = function(){
			document.getElementById('exportArea').select();
			document.getElementById('clipBoardBtn').addEventListener('click', function(event) {
				document.getElementById('exportArea').select();
				  try {
					document.execCommand('copy');
				  } catch (err) {
					document.getElementById('clipBoardBtn').innerHTML = "错误，未复制";
				  }
			});
		}
	} else {
		ondisplay = function () {document.getElementById('exportArea').select()};
	}
	return ondisplay;
};

function cnjob(job){
    //工作汉化
        var cnjob="";
    var what=job;
   if(what=="Farmer"){
        cnjob="农民";
    }else if(what=="Lumberjack"){
        cnjob="伐木工";
    }else if(what=="Miner"){
        cnjob="矿工";
    }else if(what=="Scientist"){
        cnjob="科学家";
    }else if(what=="Trainer"){
        cnjob="培训师";
    }else if(what=="Explorer"){
        cnjob="探险者";
    }else if(what=="Magmamancer"){
        cnjob="巫师";
    }else if(what=="Geneticist"){
        cnjob="遗传学家";
    }else if(what=="Amalgamator"){
        cnjob="合并者";
    }else{
        cnjob=job;
    }
    return cnjob;
}


function cnwhat(hat){
    //汉化建筑名称
    var cnwhat="";
    var what=hat;
    if(what=="Trap"){
        cnwhat="陷阱"
    }else if(what=="Barn"){
        cnwhat="谷仓"
    }else if(what=="Shed"){
        cnwhat="窝棚"
    }else if(what=="Forge"){
        cnwhat="锻造室"
    }else if(what=="Hut"){
        cnwhat="茅舍"
    }else if(what=="House"){
        cnwhat="房子"
    }else if(what=="Mansion"){
        cnwhat="大厦"
    }else if(what=="Hotel"){
        cnwhat="旅馆"
    }else if(what=="Resort"){
        cnwhat="娱乐场"
    }else if(what=="Gateway"){
        cnwhat="出入口"
    }else if(what=="Wormhole"){
        cnwhat="虫洞"
    }else if(what=="Collector"){
        cnwhat="集电极"
    }else if(what=="Warpstation"){
        cnwhat="经纱站"
    }else if(what=="Gym"){
        cnwhat="健身房"
    }else if(what=="Tribute"){
        cnwhat="贡品"
    }else if(what=="Nursery"){
        cnwhat="托儿所"
    }else if(what=="Loot"){
        //日志筛选
        cnwhat="战利品"
    }else if(what=="Unlocks"){
        cnwhat="解锁"
    }else if(what=="Combat"){
        cnwhat="战斗"
    }else{
    cnwhat=what;
    }
    return cnwhat;
}

function cnequip(obj){
    //装备汉化
    var cnequip="";
    var what=obj;
    if(what=="Shield"){
        cnequip="盾"
    }else if(what=="Dagger"){
        cnequip="匕首"
    }else if(what=="Boots"){
        cnequip="靴子"
    }else if(what=="Mace"){
        cnequip="狼牙棒"
    }else if(what=="Helmet"){
        cnequip="头盔"
    }else if(what=="Polearm"){
        cnequip="长柄武器"
    }else if(what=="Pants"){
        cnequip="裤子"
    }else if(what=="Battleaxe"){
        cnequip="战斧"
    }else if(what=="Shoulderguards"){
        cnequip="护肩"
    }else if(what=="Greatsword"){
        cnequip="巨剑"
    }else if(what=="Breastplate"){
        cnequip="护胸甲"
    }else if(what=="Arbalest"){
        cnequip="劲弩"
    }else if(what=="Gambeson"){
        cnequip="夹克"
    }else{
        cnequip=obj
    }
    return cnequip;
}


    function cnperk(obj){
    //攻击/防御明细汉化
    var cnperk="";
    var what=obj;
    if(what=="Power"){
        cnperk="力量" 
    }else if(what=="Toughness"){
        cnperk="坚韧"
    }else if(what=="Meditation"){
        cnperk="冥想"
    }else if(what=="Power II"){
        cnperk="力量 II"
    }else if(what=="Toughness II"){
        cnperk="坚韧 II"
    }else{
        cnperk=obj
    }
    return cnperk;
}

 

var nums=0;
function importAuto(){
    if(nums==0){
    document.body.appendChild(document.createElement('script')).src='https://likexia.gitee.io/autotrimps/autotrimps.js';
    var ins=document.getElementById("autoCuipi");
        ins.innerHTML="已启用"
        nums=1;
    }else{
        console.log("自动脆皮脚本已经启动了~")
        return;
    }
        
    
}