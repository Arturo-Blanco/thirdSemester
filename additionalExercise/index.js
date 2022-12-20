"use strict";
let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";
let employeesData
let inputName=document.querySelector(".name");
let inputCity=document.querySelector(".city");
let inputBirthday=document.querySelector(".birthday");
let inputEmail=document.querySelector(".email");
let inputID=document.querySelector(".id");

function loadData(value){
    for(let i=0; i<value.length; i++){
        let employee= value[i];
        document.querySelector("#table").innerHTML+=`<tr>
        <td> ${employee.name} </td> <td> ${employee.city} </td> <td> ${employee.birthday} </td> <td> ${employee.email} </td> <td class="id">${employee.id} </td> <button type="button" class="btnEditar">Edit</button> <button type="button" class="btnDelete">Delete</button>`
        // let box=document.createElement("tr");
        // valuecontainer.innerHTML=box;
        // let name=document.createElement("td");
        // name.innerHTML=employee.name;
        // let city=document.createElement("td");
        // city.innerHTML=employee.city;
        // let birthday=document.createElement("td");
        // birthday.innerHTML=employee.birthday;
        // let email=document.createElement("td");
        // email.innerHTML=employee.email;
        // let id=document.createElement("td");
        // id.innerHTML=employee.id;
        // let btnEdit=document.createElement("button");
        // let btnDelete=document.createElement("button");
        // valuecontainer.appendChild(box);
        // box.appendChild(name);
        // box.appendChild(city);
        // box.appendChild(birthday);
        // box.appendChild(email);
        // box.appendChild(id);
        // box.appendChild(btnEdit);
        // box.appendChild(btnDelete);
        // `<tr>
        // <td> ${employee.name} </td> <td> ${employee.city} </td> <td> ${employee.birthday} </td> <td> ${employee.email} </td> <td class="id">${employee.id} </td> <td><button type="button" id="btnEdit">Edit</button> <button type="button" id="btnDelete">Delete</button> </td>`
        }
    }

    let btnEdit = document.querySelectorAll(".btnEditar");
    btnEdit.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Hola");
            editEmployee();
        })
        });

    function editEmployee(){
        i=this.value;
        console.log(i);
        inputName.value = employeesData[i].name;
        inputCity.value = employeesData[i].city;
        inputBirthday.value = employeesData[i].birthday;
        inputEmail.value = employeesData[i].email;
        inputID.value = employeesData[i].id;
    }
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        employeesData = data;
        loadData(employeesData);
    })

    /*
    let url = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees'

let datoGlobal
let inputName = document.getElementById('name');
let inputCity = document.getElementById('city');
let inputMail = document.getElementById('mail');
let inputBirthday = document.getElementById('birthday');  
let labelId = document.getElementById('id');   


let containerEmployees = document.getElementById('container-employess'); 




function chargeEmployees(employees) {
    for (let index = 0; index < employees.length; index++) {
        const employee = employees[index];

        let divOne = document.createElement('div');

        divOne.className = 'employee';

        let pName = document.createElement('h2');
        let pCity = document.createElement('h4');
        let pBirthday = document.createElement('birthday')
        let pMail = document.createElement('p');
        let pLabel = document.createElement('label');
        let pID = document.createElement('p');
        let btnEdition = document.createElement('button');
        let btnDelete = document.createElement('button');

        btnEdition.className = 'btn btn-success m-1';
        btnEdition.type ='button';
        btnEdition.value = index;
        btnEdition.innerText = 'Editar';
        btnDelete.className = 'btn btn-danger m-1';
        btnDelete.innerText ='Eliminar'
        pLabel.innerText = 'ID';
        //btnEdition.id =employees[index].id
        

        pName.innerText = employee.name;
        pCity.innerText = employee.city;
        pBirthday.innerText = employee.birthday;
        pMail.innerText = employee.email;
        pID.innerText = employee.id;
        btnEdition.id =employees[index].id

        divOne.appendChild(pName);
        divOne.appendChild(pCity);
        divOne.appendChild(pBirthday);
        divOne.appendChild(pMail);
        divOne.appendChild(pLabel)
        divOne.appendChild(pID);
        divOne.appendChild(btnEdition);
        divOne.appendChild(btnDelete);
        containerEmployees.appendChild(divOne);

        
        let btnEdit = document.querySelectorAll(".btn-success");
        btnEdit.forEach(boton => {
        boton.addEventListener("click", editUser);
        });

        let btnDel = document.querySelectorAll(".btn-danger");
        btnDel.forEach(boton => {
        boton.addEventListener("click", deleteUser); 
        });

        
    }
}
function editUser(){
    i=this.value;
    console.log(i)
    inputName.value = datoGlobal[i].name;
    inputCity.value = datoGlobal[i].city;
    inputMail.value = datoGlobal[i].email;
    inputBirthday.value = datoGlobal[i].birthday;
    labelId.innerText = datoGlobal[i].id;
    labelId.value = i;
}
function saveUser(){
    let i= labelId.value;
    datoGlobal[i].name = inputName.value;
    inputName.value = " ";
    datoGlobal[i].city = inputCity.value;
    inputCity.value = " ";
    datoGlobal[i].email = inputMail.value;
    inputMail.value = " ";
    datoGlobal[i].birthday = inputBirthday.value;
    inputBirthday.value = " ";

    containerEmployees.innerHTML =" ";
    chargeEmployees(datoGlobal);

}
function deleteUser(){
    i=this.value;
    console.log(i)
    datoGlobal.splice(i,1)
    containerEmployees.innerHTML =" ";
    chargeEmployees(datoGlobal) 

}
function userAdd(){
    let aux = {name: inputName.value , city: inputCity.value, birthday: inputBirthday.value, email: inputMail.value, id: (datoGlobal.length+1)}
    datoGlobal.push(aux)
    containerEmployees.innerHTML =" ";
    chargeEmployees(datoGlobal)
    //obtenerDatos()

}


let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', saveUser);

let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', userAdd);



fetch(url)
    .then (response => response.json())
    .then (data => {

        datoGlobal = data;

        chargeEmployees(datoGlobal)

    })
    */