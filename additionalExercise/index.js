"use strict";
let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";

let employeesData=[];

let inputName=document.querySelector(".name");
let inputCity=document.querySelector(".city");
let inputBirthday=document.querySelector(".birthday");
let inputEmail=document.querySelector(".email");
let inputID=document.querySelector(".id");

function loadData(){
    for(let i=0;i<employeesData.length;i++){
        let employee=employeesData[i];
    document.querySelector("#table").innerHTML+=`<tr>
        <td> ${employee.name} </td> <td> ${employee.city} </td> <td> ${employee.birthday} </td> <td> ${employee.email} </td> <td class="id">${employee.id} </td> <td> <button type="button" id="${employee.id}" value="${i}" class="editButton">Edit</button> <button type="button" class="deleteButton">Delete</button> </td>`
    };
    let btnEdit = document.querySelectorAll(".editButton");
        btnEdit.forEach(btn => {
            btn.addEventListener("click",() => {
                console.log();
                editEmployee(btn.value);
            });
        })
    let btnDelete=document.querySelectorAll(".deleteButton");
        btnDelete.forEach(btn => {
            btn.addEventListener("click", () => {
                deleteUser(btn.value);
            });
        });
}
function editEmployee(value){
    let i=value;
    inputName.value = employeesData[i].name;
    inputCity.value = employeesData[i].city;
    inputBirthday.value = employeesData[i].birthday;
    inputEmail.value = employeesData[i].email;
    inputID.innerHTML = "ID: "+ employeesData[i].id;
    inputID.value=i;
}
function deleteUser(value){
    let i= value;
    employeesData.splice(i,1);
    document.querySelector("tr").innerHTML=" ";
    loadData(employeesData);
    clearInput();
}
function clearInput(){
    inputName.value=" ";
    inputCity.value=" ";
    inputBirthday.value=" ";
    inputEmail.value=" ";
    inputID.innerHTML=" ";
    inputID.value=" ";
}
function saveUser(){
    let i=inputID.value;
    employeesData[i].name=inputName.value;
    employeesData[i].city=inputCity.value;
    employeesData[i].birthday=inputBirthday.value;
    employeesData[i].email=inputEmail.value;
    document.querySelector("tr").innerHTML=" ";
    loadData(employeesData);
}
    fetch(url)
    .then (response => response.json())
    .then (data => {
        employeesData = data;
        loadData(employeesData)
    });