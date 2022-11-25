let displayOperator=document.querySelector(".displayOperator");
let saveNumber="0";   //variable donde se guardan los valores que luego se van a imprimir en pantalla      
let point=false; 
let operator="";    //se inicia la coma decimal en false
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
    printNumber(",");
});
let btn_sum=document.getElementById("btn_sum");
btn_sum.addEventListener("click",()=> {
    mathOperation("+");
    //displayOperator.innerHTML+="+";
});
let btn_rest=document.getElementById("btn_rest");
btn_rest.addEventListener("click",()=> {
    mathOperation("-");
    //displayOperator.innerHTML+="-";
});
let btn_split=document.getElementById("btn_split");
btn_split.addEventListener("click",()=> {
    mathOperation("/");
    //displayOperator.innerHTML+="/";
});
let btn_multiplication=document.getElementById("btn_multiplication");
btn_multiplication.addEventListener("click",()=> {
    mathOperation("*");
    //displayOperator.innerHTML+="*";
});
let btn_total=document.getElementById("btn_total");
btn_total.addEventListener("click",()=> {
    equal();
});
let btn_clearAll=document.getElementById("btn_clearAll");
btn_clearAll.addEventListener("click",() => {
    displayOperator.innerHTML="";
    displayResult.innerHTML="";
});
function printNumber(value) {
    if (saveNumber=="0") {                // inicializar un número, 
        displayOperator.innerHTML=value;   //mostrar en pantalla
        saveNumber=value;                           //guardar número
        if (value===",") {                 //si escribimos una coma al principio del número
           displayOperator.innerHTML="0,"; //escribimos 0.
           saveNumber=value;                        //guardar número
           point=true;                     //cambiar estado de la coma
        }
    }
       else {                                        //continuar escribiendo un número
           if (value==="," && point===false) {      //si escribimos una coma decimal p�r primera vez
            displayOperator.innerHTML+=value;
            saveNumber+=value;
            point=true;                          //cambiar el estado de la coma  
        }
         //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (value=="," && point==true) {} 
        //Resto de casos: escribir un número del 0 al 9: 	 
        else {
            displayOperator.innerHTML+=value;
            saveNumber+=value
        }
    }                           
    }
function mathOperation(operatorSimbol){
    equal();
    operator=operatorSimbol;
    displayOperator.innerHTML+=operator;
    }
function equal() {
    if(operator===""){
        displayOperator.innerHTML=saveNumber;
    } else if (operator!==""){
        let operation=saveNumber+operator+saveNumber;
        let total=eval(operation);
        displayResult.innerHTML=total;
    }
}