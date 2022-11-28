let numberDiv=document.querySelector(".numberDiv");
let timeCreate=document.querySelector(".timeCreate");
let colourDiv=document.querySelector(".colourDiv");
let formDiv=document.querySelector(".formDiv");
let boxContain=document.querySelector(".box");
let btnCreate=document.getElementById("btnCreate");
btnCreate.addEventListener("click", ()=>{
    let valueTime=timeCreate.value;
    let valueNumberDiv=numberDiv.value;
    showDivs(valueTime, valueNumberDiv);
});
function createDiv() {
    let valueColour=colourDiv.value;
    let newDiv=document.createElement("div");
    newDiv.classList.add("styleDiv");
    newDiv.classList.add(valueColour);
    boxContain.appendChild(newDiv);
}
function multiplyDiv(number) {
    for(let i=0;i<number;i++){
        createDiv();
    }
}
function showDivs(time, numberDiv){
    setTimeout(function(){
        multiplyDiv(numberDiv);
    }, time)
}