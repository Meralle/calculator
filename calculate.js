let input1 ="";
let input2 ="";
let operator = ""
let display = document.getElementById("display");

let clearbutton = document.getElementById("clearbutton");
let claculabutton = document.getElementById("claculabutton");
let persbutton = document.getElementById("persbutton");
let dividbutton = document.getElementById("dividbutton");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let xbutton = document.getElementById("xbutton");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let minusbutton = document.getElementById("minusbutton");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let plusbutton = document.getElementById("plusbutton");
let num0 = document.getElementById("num0");
let pointbutton = document.getElementById("pountbutton");
let equalbutton = document.getElementById("equalbutton");




clearbutton.addEventListener("click", clear);
function clear() {
	console.log(clearbutton);
	display.innerHTML = "";
	input1 = "";
	input2 = "";
	operator ="";

}

claculabutton.addEventListener("click", calcu);
function calcu() {
	console.log(claculabutton);
	display.innerHTML+=claculabutton.value;
	operator = "+/-";
}

persbutton.addEventListener("click", pers);
function pers() {
	console.log(persbutton);
	display.innerHTML+=persbutton.value;
	operator = "%";
}

dividbutton.addEventListener("click", divi);
function divi() {
	console.log(dividbutton);
	display.innerHTML+=dividbutton.value;
	operator = "/"
}

num7.addEventListener ("click", button7);
function button7() {
	console.log(num7);
	display.innerHTML+=num7.value;

	if (operator === "") {
		input1 += num7.value;		
	} else {
		input2 += num7.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num8.addEventListener("click", button8);
function button8() {
	console.log(num8);
	display.innerHTML+=num8.value;

	if (operator === "") {
		input1 += num8.value;		
	} else {
		input2 += num8.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num9.addEventListener("click", button9);
function button9() {
	console.log(num9);
	display.innerHTML+=num9.value;

	if (operator === "") {
		input1 += num9.value;		
	} else {
		input2 += num9.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

xbutton.addEventListener("click", buttonx);
function buttonx() {
	console.log(xbutton);
	display.innerHTML+=xbutton.value;
	operator = "x";
}


num4.addEventListener("click", button4);
function button4() {
	console.log(num4);
	display.innerHTML+=num4.value;

	if (operator === "") {
		input1 += num4.value;		
	} else {
		input2 += num4.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num5.addEventListener("click", button5);
function button5() {
	console.log(num5);
	display.innerHTML+=num5.value;

	if (operator === "") {
		input1 += num5.value;		
	} else {
		input2 += num5.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num6.addEventListener("click", button6);
function button6() {
	console.log(num6);
	display.innerHTML+=num6.value;

	if (operator === "") {
		input1 += num6.value;		
	} else {
		input2 += num6.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

minusbutton.addEventListener("click", minus);
function minus() {
	console.log(minusbutton);
	display.innerHTML+=minusbutton.value;
	operator = "-";
}

num1.addEventListener("click", button1);
function button1() {
	console.log(num1);
	display.innerHTML+=num1.value;

	if (operator === "") {
		input1 += num1.value;		
	} else {
		input2 += num1.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num2.addEventListener("click", button2);
function button2() {
	console.log(num2);
	display.innerHTML+=num2.value;

	if (operator === "") {
		input1 += num2.value;
	}else {
		input2 += num2.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

num3.addEventListener("click", button3);
function button3() {
	console.log(num3);
	display.innerHTML+=num3.value;

	if (operator === "") {
		input1 += num3.value;		
	} else {
		input2 += num3.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

plusbutton.addEventListener("click", plus);
function plus() {
	console.log(plusbutton);
	display.innerHTML+=plusbutton.value;
	operator = "+";
}

num0.addEventListener("click", button0);
function button0() {
	console.log(num0);
	display.innerHTML+=num0.value;

	if (operator === "") {
		input1 += num0.value;		
	} else {
		input2 += num0.value;
	}
	console.log('input1: ', input1, 'input2: ', input2, 'operator: ', operator)
}

punktbutton.addEventListener("click", point);
function point() {
	console.log(punktbutton);
	display.innerHTML+=punktbutton.value;
	operator = ".";
}

equalbutton.addEventListener("click", equal);
function equal() {
	console.log(equalbutton);
	display.innerHTML+=equalbutton.value;
	doMath(input1, input2, operator);
	input1 = "";
	input2 = "";
	
}

function doMath(num1, num2, operator){
	let result;
	console.log(num1, num2);
	let number1 = Number(num1);
	let number2 = Number(num2);
	console.log(number1, number2)
	if (operator === "+") {
		result = number1 + number2;
	}else if (operator === "-") {
		result = number1 - number2;
	}else if (operator === "/") {
		result = number1 / number2;
	}else if (operator === "x") {
		result = number1 * number2;
	}
	display.innerHTML = result;
} 
