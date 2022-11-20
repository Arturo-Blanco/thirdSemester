"use strict";
let title=document.querySelector(".title");
let url=document.querySelector(".url");
let textArea=document.querySelector(".textArea");
let btnCrear=document.getElementById("btnCrear");
btnCrear.addEventListener('click',() => {
    loadTitle();
    loadImage();
    loadBody();
    console.log("Hola");
});
function loadTitle(){
    
    let aux=title.value;
    if(aux!=="" && aux!==undefined){
        document.querySelector(".card-title").innerHTML=aux;
        document.querySelector(".title").value="";
    } else {
        alert("Ingrese un titulo para su tarjeta");
    }
}
function loadImage(){
    
    let aux=url.value;
    if(aux!=="" && aux!==undefined){
        document.querySelector(".card-img-top").src=aux;
        document.querySelector(".url").value="";
    } else {
        alert("Ingrese una direccion de imagen valida");
    }
}
function loadBody(){
    
    let aux=textArea.value;
    if(aux!=="" && aux!==undefined){
        document.querySelector(".card-text").innerHTML=aux;
        document.querySelector(".textArea").value="";
    } else {
        alert("Ingrese un contenido para su tarjeta");
    }
}