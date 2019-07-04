
//variables
var muffin = {
	amount:0,
	perSecond:0
};
var click = {
	amount:1,
	cost:100,
	production:1
}
var presser = {
	amount:0,
	cost:50,
	production:1
};
var goku = {
	amount:0,
	cost:800,
	production:10
};

//functions
function update () {
	muffin.perSecond = (presser.amount) + (goku.production*goku.amount);
	document.getElementById("muffinAmountDisplay").innerHTML = muffin.amount + " muffins exist";
	document.getElementById("muffinPerSecondDisplay").innerHTML =  "per sec: " + muffin.perSecond;
	document.getElementById("clickAmount").innerHTML = "click: " + click.amount;
	document.getElementById("clickCost").innerHTML = "cost: " + click.cost;
	document.getElementById("presserAmount").innerHTML = "pressers: " + presser.amount;
	document.getElementById("presserCost").innerHTML = "cost: " + presser.cost;
	document.getElementById("gokuAmount").innerHTML = "gokus: " + goku.amount;
	document.getElementById("gokuCost").innerHTML = "cost: " + goku.cost;
}
setInterval (update, 100);

//save and load functions
function save () {
	localStorage.setItem("muffinamount", muffin.amount);
	localStorage.setItem("muffinpersecond", muffin.perSecond);
	localStorage.setItem("clickamount", click.amount);
	localStorage.setItem("clickcost", click.cost);
	localStorage.setItem("clickproduction", click.production);
	localStorage.setItem("presseramount", presser.amount);
	localStorage.setItem("pressercost", presser.cost);
	localStorage.setItem("presserproduction", presser.production);
	localStorage.setItem("gokuamount", goku.amount);
	localStorage.setItem("gokucost", goku.cost);
	localStorage.setItem("gokuproduction", goku.production);
}
function load () {
	if (localStorage.muffinamount) {
		muffin.amount = localStorage.getItem("muffinamount");
		muffin.amount = parseInt(muffin.amount);
	}
	if (localStorage.muffinpersecond) {
		muffin.perSecond = localStorage.getItem("muffinpersecond");
		muffin.perSecond = parseInt(muffin.perSecond);
	}
	if (localStorage.clickamount) {
		click.amount = localStorage.getItem("clickamount");
		click.amount = parseInt(click.amount);
	}
	if (localStorage.clickcost) {
		click.cost = localStorage.getItem("clickcost");
		click.cost = parseInt(click.cost);
	}
	if (localStorage.clickproduction) {
		click.production = localStorage.getItem("clickproduction");
		click.production = parseInt(click.production);
	}
	if (localStorage.presseramount) {
		presser.amount = localStorage.getItem("presseramount");
		presser.amount = parseInt(presser.amount);
	}
	if (localStorage.pressercost) {
		presser.cost = localStorage.getItem("pressercost");
		presser.cost = parseInt(presser.cost);
	}
	if (localStorage.presserproduction) {
		presser.production = localStorage.getItem("presserproduction");
		presser.production = parseInt(presser.production);
	}
	if (localStorage.gokuamount) {
		goku.amount = localStorage.getItem("gokuamount");
		goku.amount = parseInt(goku.amount)
	}
	if (localStorage.gokucost) {
		goku.cost = localStorage.getItem("gokucost");
		goku.cost = parseInt(goku.cost);
	}
	if (localStorage.gokuproduction){
		goku.production = localStorage.getItem("gokuproduction");
		goku.production = parseInt(goku.production);
	}
}

//increase muffin functions
function muffinClick () {
	muffin.amount += click.amount;
}
function presserClick () {
	muffin.amount += presser.amount;
}
setInterval (presserClick, 1000)
function gokuClick () {
	muffin.amount += goku.amount;
}
setInterval (gokuClick, 100)

//functions for upgrades
function buyClickUpgrade () {
	if (muffin.amount >= click.cost) {
		muffin.amount -= click.cost;
		click.amount += 1;
		if (click.amount <= 10) {
			click.cost += 100
		}else {
			click.cost += 100
		}
	}
}

function buyPresser() {
	if (muffin.amount >= presser.cost){
		muffin.amount -= presser.cost;
		presser.amount += 1;
		if (presser.amount <= 10){
			presser.cost += 3;
		}else if (presser.amount <= 20){
			presser.cost += 12;
		}else if (presser.amount <= 30){
			presser.cost += 80;
		}else if (presser.amount <= 100){
			presser.cost += 100;
		}else if (presser.amount <= 1000){
			presser.cost += 1000;
		}else {
			presser.cost += 10000;
		}
	}
}

function buyGoku() {
	if (muffin.amount >= goku.cost){
		muffin.amount -= goku.cost;
		goku.amount += 1;
		if (goku.amount <= 10){
			goku.cost += 120;
		}else {
			goku.cost += 1000;
			}
	}
}

//end

















