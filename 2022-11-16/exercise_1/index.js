"use strict";
let caja=document.querySelector(".cards");
let btnCrear=document.getElementById("btnCrear");
btnCrear.addEventListener('click',() => {
    if(checkInput(loadTitle()) && checkInput(loadBody()) && checkInput(loadImage())){
        caja.appendChild(createCard());
    } else {
        alert("Faltan campos por rellenar.");
    }
    clearInput();
});
togglear();
function createCard(){
    let card=document.createElement("div");
    card.classList.add("card");
    let image=document.createElement("img")
    image.classList.add("card-img-top");
    //image.setAttribute("src",loadImage());
    image.src=loadImage();
    let body=document.createElement("div");
    body.classList.add("card-body");
    let title=document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML=loadTitle();
    let text=document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML=loadBody();
    body.appendChild(title);
    body.appendChild(text);
    card.appendChild(image);
    card.appendChild(body);
    return card;
}
function loadTitle(){
    let title=document.querySelector(".title").value;
    return title;
}
function loadImage(){
    let url=document.querySelector(".url").value;
    return url;
}
function loadBody(){
    let textArea=document.querySelector(".textArea").value;
    return textArea;
}
function checkInput(value){
    let check=false
    if(value!==""){
        check=true;
    }
    return check;
}
function clearInput(){
    document.querySelector(".title").value="";
    document.querySelector(".url").value="";
    document.querySelector(".textArea").value="";
}
function togglear(){
    document.querySelector(".card").addEventListener('click',()=>{
    classList.toggle("hide");
});
}