let displayOperator=document.querySelector(".displayOperator");     
let saveNumber="0";
let point=false; 
let total=0;
let operator=false;
let displayResult=document.querySelector(".displayResult");

let btn_0=document.getElementById("btn_0");
btn_0.addEventListener("click",() => {
    printNumber("0");
});
let btn_1=document.getElementById("btn_1");
btn_1.addEventListener("click",() => {
    printNumber("1");
});
let btn_2=document.getElementById("btn_2");
btn_2.addEventListener("click",() => {
    printNumber("2");
});
let btn_3=document.getElementById("btn_3");
btn_3.addEventListener("click",() => {
    printNumber("3");
});
let btn_4=document.getElementById("btn_4");
btn_4.addEventListener("click",() => {
    printNumber("4");
});
let btn_5=document.getElementById("btn_5");
btn_5.addEventListener("click",() => {
    printNumber("5");
});
let btn_6=document.getElementById("btn_6");
btn_6.addEventListener("click",() => {
    printNumber("6");
});
let btn_7=document.getElementById("btn_7");
btn_7.addEventListener("click",() => {
    printNumber("7");
});
let btn_8=document.getElementById("btn_8");
btn_8.addEventListener("click",() => {
    printNumber("8");
});
let btn_9=document.getElementById("btn_9");
btn_9.addEventListener("click",() => {
    printNumber("9");
});
let btn_point=document.getElementById("btn_point");
btn_point.addEventListener("click",() => {
    printNumber(".");
});
let btn_sum=document.getElementById("btn_sum");
btn_sum.addEventListener("click",() => {
    mathOperation("+");
});
let btn_rest=document.getElementById("btn_rest");
btn_rest.addEventListener("click",() => {
    mathOperation("-");
});
let btn_split=document.getElementById("btn_split");
btn_split.addEventListener("click",() => {
    mathOperation("/");
});
let btn_multiplication=document.getElementById("btn_multiplication");
btn_multiplication.addEventListener("click",() => {
    mathOperation("*");
});
let btn_total=document.getElementById("btn_total");
btn_total.addEventListener("click",() => {
    equal(saveNumber);
});
let btn_clear=document.getElementById("btn_clear");
btn_clear.addEventListener("click",() => {
    back();
});
let btn_clearAll=document.getElementById("btn_clearAll");
btn_clearAll.addEventListener("click",() => {
    displayOperator.innerHTML="";
    displayResult.innerHTML="";
    saveNumber="0";
    point=false; 
    total=0;
    operator=false;
});
function printNumber(value){
    if(saveNumber=="0") {                 
        displayOperator.innerHTML=value;  
        saveNumber=value;                           
        if(value==="."){                 
            displayOperator.innerHTML="0."; 
            saveNumber=value;                      
            point=true;
            operator=false;                   
        }
    } else {                                   
        if(value==="." && point===false){     
            displayOperator.innerHTML+=value;
            saveNumber+=value;
            point=true;
            operator=false;                         
        } else {
            displayOperator.innerHTML+=value;
            saveNumber+=value;
            operator=false;
        }
    }                           
}
function mathOperation(operatorSimbol){
    if(operator===false){
        if(saveNumber!=="0" && operatorSimbol!=="" && total==0){
            displayOperator.innerHTML+=operatorSimbol;
            saveNumber+=operatorSimbol;
            operator=true;
        } else {
            displayOperator.innerHTML=total+operatorSimbol;
            saveNumber=total+operatorSimbol;
            operator=true;
        }
    }
}
function equal(value){
    total=eval(value);
    if(Number.isInteger(total)){
        displayResult.innerHTML=total;
    } else {
        total=total.toFixed(2);
        displayResult.innerHTML=total;
    }
    operator=false;
}
function back(){
    let values=saveNumber.length;
    let back=saveNumber.substring(0,values-1);
    saveNumber=saveNumber.substring(0,values-1);
    if(saveNumber===""){
        saveNumber="0";
    }
    if(back==="*"||back==="+"||back==="-"||back==="/"){
        operator=true;
    }
    if(back===","){
        point==false;
    }
    displayOperator.innerHTML=saveNumber;
}