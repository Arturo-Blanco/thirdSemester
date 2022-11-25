let displayOperator=document.querySelector(".displayOperator");
displayOperator.innerHTML="";
let displayResult=document.querySelector(".displayResult");
let btn_0=document.getElementById("btn_0");
btn_0.addEventListener("click",() => {
    displayOperator.innerHTML+="0";
});
let btn_1=document.getElementById("btn_1");
btn_1.addEventListener("click",() => {
    displayOperator.innerHTML+="1";
});
let btn_2=document.getElementById("btn_2");
btn_2.addEventListener("click",() => {
    displayOperator.innerHTML+="2";
});
let btn_3=document.getElementById("btn_3");
btn_3.addEventListener("click",() => {
    displayOperator.innerHTML+="3";
});
let btn_4=document.getElementById("btn_4");
btn_4.addEventListener("click",() => {
    displayOperator.innerHTML+="4";
});
let btn_5=document.getElementById("btn_5");
btn_5.addEventListener("click",() => {
    displayOperator.innerHTML+="5";
});
let btn_6=document.getElementById("btn_6");
btn_6.addEventListener("click",() => {
    displayOperator.innerHTML+="6";
});
let btn_7=document.getElementById("btn_7");
btn_7.addEventListener("click",() => {


    displayOperator.innerHTML+="7";
});
let btn_8=document.getElementById("btn_8");
btn_8.addEventListener("click",() => {
    displayOperator.innerHTML+="8";
});
let btn_9=document.getElementById("btn_9");
btn_9.addEventListener("click",() => {
    displayOperator.innerHTML+="9";
});
let btn_point=document.getElementById("btn_point");
btn_point.addEventListener("click",() => {
    displayOperator.innerHTML+=",";
});
let btn_clearAll=document.getElementById("btn_clearAll");
btn_clearAll.addEventListener("click",() => {
    displayOperator.innerHTML="";
});
