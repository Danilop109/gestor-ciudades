import { postDepartamento } from "../API/api.js";


let formDepartamentos= document.getElementById("formDepartamentos");

formDepartamentos.addEventListener("submit", validateData)
function validateData(e){
    e.preventDefault();
    
    const nomDepartamento=document.getElementById("nomDepartamento").value;

    const data={
        nomDepartamento:nomDepartamento
    };
    
    if (validate(data)) {
        alert("Todos los campos son obligatorios");
        console.log("Todos los campos son obligatorios");
        return;
    }
        
    postDepartamento(data);

    document.getElementById("nomDepartamento").value=""
};

function validate(objeto) {
    return !Object.values(objeto).every((element) => element !== "");
  }
