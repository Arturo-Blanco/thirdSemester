"use strict";
let box=document.querySelector(".cards");

let createButton=document.querySelector("#btnCrear");
let showCardButton=document.querySelector("#showCardButton");
createButton.addEventListener('click',() => {
    if(checkInput(loadTitle()) && checkInput(loadBody()) && checkInput(loadImage())){
        box.appendChild(createCard());
    } else {
        alert("Faltan campos por rellenar.");
    }
    clearInput();
});
showCardButton.addEventListener('click',showCards);

function createCard(){
    let card=document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click',togglear);
    let image=document.createElement("img")
    image.classList.add("card-img-top");
    image.src=loadImage();
    //image.setAttribute("src",loadImage());
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
    document.querySelector(".card").classList.replace("card","hide");
}
function showCards(){
    document.querySelector(".hide").classList.replace("hide","card");
}