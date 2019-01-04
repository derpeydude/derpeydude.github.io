
//variables
var muffin = {
	amount:0,
	perSecond:0
};
var click = {
	amount:1,
	cost:200,
	production:10
}
var presser = {
	amount:0,
	cost:100,
	production:1
};
var goku = {
	amount:0,
	cost:10000,
	production:10
};

//functions
function update () {
	document.getElementById("muffinAmountDisplay").innerHTML = muffin.amount + " muffins exist";
	document.getElementById("muffinPerSecondDisplay").innerHTML =  "per sec: " + muffin.perSecond;
}

function cookieTimer () {
	muffin.amount += (presser.production*presser.amount) + (goku.production*goku.amount);
	muffin.perSecond = 10*(presser.production*presser.amount) + (goku.production*goku.amount);
}
setInterval (update, 100);

function muffinClick () {
	muffin.amount += click.production;
}

//end