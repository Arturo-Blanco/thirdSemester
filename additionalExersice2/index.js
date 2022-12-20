let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";

let employeesData;

let box=document.querySelector(".employeeList");
let inputName=document.querySelector(".name");
let inputCity=document.querySelector(".city");
let inputBirthday=document.querySelector(".birthday");
let inputEmail=document.querySelector(".email");
let inputID=document.querySelector(".id");

function chargeData(value){
    for(let i=0;i<value.length;i++){
        createCard(i);

    let editEmployeeButton=document.querySelectorAll("#btnEdit"+i);
        editEmployeeButton.forEach(btn => {
            btn.addEventListener("click", () => {
                editEmployee(i);
            });
        });
    let deleteEmployeeButton=document.querySelectorAll("#btnDelete"+i);
        deleteEmployeeButton.forEach(btn => {
            btn.addEventListener("click", () => {
                deleteUser(i);
            });
        });
    }
}

let addButton=document.getElementById("btnAdd");
    addButton.addEventListener("click", () => {
        if(inputID.value!==undefined && inputID.value!==" "){
            saveUser();
            clearInput(); 
        } else {
            addEmployee();
            clearInput();
        }
    });
let cancelButton=document.getElementById("btnCancel");
    cancelButton.addEventListener("click", clearInput);

function createCard(value){
    let card=document.createElement("div");
        card.className="card";
    let name=document.createElement("h4");
        name.innerHTML=employeesData[value].name;
    let city=document.createElement("p");
        city.innerHTML=employeesData[value].city;
    let birthday=document.createElement("p");
        birthday.innerHTML=employeesData[value].birthday;
    let email=document.createElement("p");
        email.innerHTML=employeesData[value].email
    let ID=document.createElement("p");
        ID.innerHTML=employeesData[value].id;
    let divButton=document.createElement("div");
        divButton.className="divButton";
    let editButton=document.createElement("button");
        editButton.type="button";
        editButton.innerHTML="Edit";
        editButton.id="btnEdit"+value;
        editButton.className="btnEdit";
    let deleteButton=document.createElement("button");
        deleteButton.type="button";
        deleteButton.innerHTML="Delete";
        deleteButton.className="btnDelete";
        deleteButton.id="btnDelete"+value;
    box.appendChild(card);
    card.appendChild(name);
    card.appendChild(city);
    card.appendChild(birthday);
    card.appendChild(email);
    card.appendChild(ID);
    divButton.appendChild(editButton);
    divButton.appendChild(deleteButton);
    card.appendChild(divButton);
}
function editEmployee(employee){
    inputName.value=employeesData[employee].name;
    inputCity.value=employeesData[employee].city;
    inputBirthday.value=employeesData[employee].birthday;
    inputEmail.value=employeesData[employee].email;
    inputID.innerHTML="ID: "+employeesData[employee].id;
    inputID.value=employee;
}
function deleteUser(employee){
    employeesData.splice(employee,1);
    box.innerHTML=" ";
    chargeData(employeesData);
    clearInput();
}
function saveUser(){
    let i=inputID.value;
    employeesData[i].name=inputName.value;
    employeesData[i].city=inputCity.value;
    employeesData[i].birthday=inputBirthday.value;
    employeesData[i].email=inputEmail.value;
    box.innerHTML=" ";
    chargeData(employeesData);
}
function addEmployee(){
    let aux={name:inputName.value, city:inputCity.value, birthday:inputBirthday.value, email:inputEmail.value, id:(employeesData.length+1)};
    employeesData.push(aux);
    box.innerHTML=" ";
    chargeData(employeesData);
}
function clearInput(){
    inputName.value=" ";
    inputCity.value=" ";
    inputBirthday.value=" ";
    inputEmail.value=" ";
    inputID.innerHTML=" ";
    inputID.value=" ";
}
fetch(url)
.then(Response => Response.json())
.then(data => {
    employeesData=data;
    chargeData(employeesData);
});