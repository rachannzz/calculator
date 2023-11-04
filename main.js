function add(a,b) {     //addition
   let sum=0;       

   return sum=a+b;  

}


function subtract(a,b) {    //subtraction
    let sub=0;

    return sub=a-b;
    
}

function multiply(a,b) {    //multiplication
    
    let mul=0;

    return mul=a*b;

}

function divide(a,b) {      //division

    let div=0;

    return div=a/b;
    
}

function operate(firstnumber,operator,secondnumber) {
    
}


letssum=document.querySelector('.button15').addEventListener('click',add)


let firstnumber;
let operator;
let secondnumber;


let populates=document.getElementById('parentButton')

big=populates.addEventListener('click' , buttonclicks) ; 

function buttonclicks(e) {
    
     display=document.querySelector('.display p')
     if (e.target.matches('button')) {
        display.innerHTML+=e.target.value;
     }
     let displayvalue=document.querySelector('.display p').innerHTML
     console.log(displayvalue)
     
}
console.log(big)



