let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";

let employeesData=[];

let box=document.querySelector(".employeeList");
let inputName=document.querySelector(".name");
let inputCity=document.querySelector(".city");
let inputBirthday=document.querySelector(".birthday");
let inputEmail=document.querySelector(".email");
let inputID=document.querySelector(".id");

function chargeData(){
    for(let i=0;i<employeesData.length;i++){
        let employee=employeesData[i];
    let card=document.createElement("div");
        card.className="card";
    let name=document.createElement("h4");
        name.innerHTML=employee.name;
    let city=document.createElement("p");
        city.innerHTML=employee.city;
    let birthday=document.createElement("p");
        birthday.innerHTML=employee.birthday;
    let email=document.createElement("p");
        email.innerHTML=employee.email;
    let ID=document.createElement("p");
        ID.innerHTML=employee.id;
    let divButton=document.createElement("div");
        divButton.className="divButton";
    let editButton=document.createElement("button");
        editButton.type="button";
        editButton.innerHTML="Edit";
        editButton.className="btnEdit";
        editButton.value=i;
    let deleteButton=document.createElement("button");
        deleteButton.type="button";
        deleteButton.innerHTML="Delete";
        deleteButton.className="btnDelete";
        deleteButton.value=i;
    box.appendChild(card);
    card.appendChild(name);
    card.appendChild(city);
    card.appendChild(birthday);
    card.appendChild(email);
    card.appendChild(ID);
    divButton.appendChild(editButton);
    divButton.appendChild(deleteButton);
    card.appendChild(divButton);

    let editEmployeeButton=document.querySelectorAll(".btnEdit");
        editEmployeeButton.forEach(btn => {
            btn.addEventListener("click", editEmployee);
        });
    let deleteEmployeeButton=document.querySelectorAll(".btnDelete");
        deleteEmployeeButton.forEach(btn => {
            btn.addEventListener("click", deleteEmployee);
        });
    }
}
let addButton=document.getElementById("btnAdd");
    addButton.addEventListener("click", () => {
        if(inputID.value!==undefined && inputID.value!==" "){
            saveData();
            clearInput(); 
        } else {
            if(inputName.value!==undefined && inputName.value!==" " && inputName.value!==""){
            addEmployee();
            clearInput();
            } else {
                alert("Ingrese el nombre del empleado para continuar");
            }
        }
    });
let cancelButton=document.getElementById("btnCancel");
    cancelButton.addEventListener("click", clearInput);
    
function editEmployee(){
    i=this.value;
    inputName.value=employeesData[i].name;
    inputCity.value=employeesData[i].city;
    inputBirthday.value=employeesData[i].birthday;
    inputEmail.value=employeesData[i].email;
    inputID.innerHTML="ID: "+employeesData[i].id;
    inputID.value=i;
}
function deleteEmployee(){
    i=this.value;
    employeesData.splice(i,1);
    box.innerHTML=" ";
    chargeData();
    clearInput();
}
function saveData(){
    let i=inputID.value;
    employeesData[i].name=inputName.value;
    employeesData[i].city=inputCity.value;
    employeesData[i].birthday=inputBirthday.value;
    employeesData[i].email=inputEmail.value;
    box.innerHTML=" ";
    chargeData();
}
function addEmployee(){
    let id=Number(employeesData[employeesData.length-1].id);
    let aux={name:inputName.value, city:inputCity.value, birthday:inputBirthday.value, email:inputEmail.value, id:id+1};
    employeesData.push(aux);
    box.innerHTML=" ";
    chargeData();
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
    chargeData();
});