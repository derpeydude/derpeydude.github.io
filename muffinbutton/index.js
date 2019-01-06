
//variables
var muffin = {
	amount:0,
	perSecond:0
};
var click = {
	amount:1,
	cost:200,
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
	document.getElementById("presserAmount").innerHTML = "pressers: " + presser.amount;
	document.getElementById("presserCost").innerHTML = "cost: " + presser.cost;
	document.getElementById("gokuAmount").innerHTML = "gokus: " + goku.amount;
	document.getElementById("gokuCost").innerHTML = "cost: " + goku.cost;
}
setInterval (update, 100);

//increase muffin functions
function muffinClick () {
	muffin.amount += click.production;
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
function buyPresser() {
	if (muffin.amount >= presser.cost){
		muffin.amount -= presser.cost;
		presser.amount += 1;
		if (presser.amount <= 10){
			presser.cost += 3;
		}else if (presser.amount <= 20){
			presser.cost += 12;
		}else if (presser.amount <= 100){
			presser.cost += 100;
		}else if (presser.amount < 1000){
			presser.cost += 1000;
		}else if (presser.amount < 10000){
			presser.cost += 10000;
		}else {
			presser.cost += 1000000;
		}
	}
}

function buyGoku() {
	if (muffin.amount >= goku.cost){
		muffin.amount -= goku.cost;
		goku.amount += 1;
		if (goku.amount <= 10){
			goku.cost += 120;
		}
	}
}

//end

















