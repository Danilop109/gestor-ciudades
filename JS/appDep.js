import { getDepartamento, deleteDepartamento, putDepartamento, deleteCiudadesAll } from "../API/api.js";

(function mostrarDepartamentos() {

    const cuerpoDepartamento=document.querySelector(".cuerpoDepartamento");

    document.addEventListener("DOMContentLoaded", muestraDep);

    const setDepartamentos= new Set();

    cuerpoDepartamento.addEventListener("click", confirmDeUp)

    async function muestraDep(){
    let departamentos= await getDepartamento();
    console.log(departamentos);

    const cuerpoTDepar = document.getElementById("cuerpoDepartamento");
    departamentos.forEach((departamento) => {
        const {id, nomDepartamento}= departamento;
        const rows= document.createElement("tr");
        rows. innerHTML= `
        <th scope="row">${id}</th>
        <td>${nomDepartamento}</td>
        <td><button type="button" data-departamento="${id}" class="btn btn-danger delete">Delete</button></td>
        <td><button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar" data-departamento="${id}" class="btn btn-warning update">Update</button></td>

        `
        cuerpoTDepar.appendChild(rows);
        setDepartamentos.add(id);
    });  
    selectCiudades(setDepartamentos)    
}

function selectCiudades(numIds){
    let selecCiudad= document.getElementById("idDep");
    let selecCiudadModal=document.getElementById("cateDepModal");
    selecCiudad.innerHTML= "";
    selecCiudadModal.innerHTML= "";

    numIds.forEach(value => {
        selecCiudad.innerHTML += `<option value="${value}">${value}</option>`
        selecCiudadModal.innerHTML += `<option value="${value}">${value}</option>`

    });
}

function confirmDeUp(e){
    if(e.target.classList.contains('delete')){
        // console.log('diste click delete');
        const elId= parseInt(e.target.dataset.departamento);
        // console.log(elId);
        let confirmar= confirm('¿Deseas eliminar este Departamento?');
        if(confirmar){
            deleteDepartamento(elId);
            deleteCiudadesAll(elId);
        }
    }
    else if(e.target.classList.contains('update')){
        const otroId= parseInt(e.target.dataset.departamento);
        console.log(otroId);
        document.getElementById("formUpdateDep").addEventListener("submit", (e) => {
            e.preventDefault();
    
            let dato = Object.fromEntries(new FormData(e.target));
            document.getElementById("nomDepartamento").value="";
            putDepartamento(dato,otroId);
          })
        
        
    }
}
}
)();