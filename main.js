let firstnumber;
let secondnumber;
let operator;
let step=0;
let result=0;


let display=document.getElementById('display')
let numArry=[];
let secnumarray=[];


function getNumber(num) {
    if (step==0|| step===1) {   
        numArry.push(num)
        step=1;
        firstnumber=Number(numArry.join(''))//makes it to one string 
        display.value=firstnumber;
    }
    else if (step===2) {
        secnumarray.push(num)
        secondnumber=Number(secnumarray.join(''));
        display.value=secondnumber;
    }
}

function getOperator(op) {
    step=2;
    operator=op;
}

function clearDisplay(params) {
    display.value=0;
    firstnumber=null;
    secondnumber=null;
    step=0;
    operator=null;
    result=0;
    numArry=[];
    secnumarray=[];
}


function calculateResult() {
	console.log('first number', firstnumber, 'second number', secondnumber)
	if (operator === '+') {
		result = firstnumber + secondnumber
		display.value = result
	} else if (operator === '-') {
		result = firstnumber - secondnumber
		display.value = result
	} else if (operator === '*') {
		result = firstnumber * secondnumber
		display.value = result
	} else if (operator === '/') {
		result = firstnumber / secondnumber
		display.value = result
	}
}