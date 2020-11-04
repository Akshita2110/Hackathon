var a;
var nums;
var optiona;
var optionb;
var optionc;
var optiond;
var result = 0;

myFunc();
var answer = randomMy();
makeQuestion();

var mcq = [answer, answer - 100, answer + 100, answer - 15];
for (let i = mcq.length - 1; i > 0; i--) {// shuffle so that all options are interchanged.
	let j = Math.floor(Math.random() * (i + 1));
	[mcq[i], mcq[j]] = [mcq[j], mcq[i]];
}


function myFunc() {
	//	var sign = ["+", "-", "*", "/"];
	nums = new Array(25);
	for (var i = 0; i < 26; i++) {
		nums[i] = i * 10 + 5;
		console.log(nums[i]);
	}
}


function makeQuestion() {
	document.getElementById("question1").innerHTML = a + "X" + a;
}




function randomMy() {
	a = nums[Math.floor(Math.random() * 25)];
	var a2 = a * a;
	return a2;
}



document.getElementById("optiona").innerHTML = mcq[0];
document.getElementById("optionb").innerHTML = mcq[1];
document.getElementById("optionc").innerHTML = mcq[2];
document.getElementById("optiond").innerHTML = mcq[3];



function checka() {
	console.log("A is clicked");
	if (a * a == mcq[0]) {
		result++
		document.getElementById("optiona").className = "btn btn-success btn-block";
	}
	else {
		document.getElementById("optiona").className = "btn btn-danger btn-block";
	}
	document.getElementById("123").innerHTML = result;
	console.log(result);


}

function checkb() {
	console.log("B is clicked");
	if (mcq[1] == a * a) {
		result++
		document.getElementById("optionb").className = "btn btn-success btn-block";
	}
	else {
		document.getElementById("optionb").className = "btn btn-danger btn-block";
	}
	document.getElementById("123").innerHTML = result;
	console.log(result);

}

function checkc() {
	console.log("C is clicked");
	if (mcq[2] == a * a) {
		result++
		document.getElementById("optionc").className = "btn btn-success btn-block";
	}
	else {
		document.getElementById("optionc").className = "btn btn-danger btn-block";
	}
	document.getElementById("123").innerHTML = result;
	console.log(result);
}

function checkd() {
	console.log("D is clicked");
	if (mcq[3] == a * a) {
		result++
		document.getElementById("optiond").className = "btn btn-success btn-block";

	}
	else {
		document.getElementById("optiond").className = "btn btn-danger btn-block";
	}
	document.getElementById("123").innerHTML = result;
	console.loginnerHTML
}

var counter = 10;
setInterval(function () {
	counter--;
	if (counter >= 0) {
		id = document.getElementById("count");
		id.innerHTML = counter;
	}
}, 1000);
