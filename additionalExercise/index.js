"use strict";
document.addEventListener("DOMContentLoaded", () => {
    /**************comunicacion api ************** */
    //
    let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";
    async function mostrarData() {
        let res = await fetch(url)
        let data = await res.json();
        data.forEach(e => {
            document.querySelector("#table").innerHTML +=
                `<tr>
                <td> ${e.name} </td> <td> ${e.city} </td> <td> ${e.birthday} </td> <td> ${e.email} </td> <td>${e.id} </td>`
        });
        let tr = document.querySelectorAll("td.id");
        tr.forEach(item => {
            item.addEventListener("mouseover", () => {
                document.querySelector("section.btn button").classList.remove("oculto");
            })
            
        });
    }
    mostrarData();
})