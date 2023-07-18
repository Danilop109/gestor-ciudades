import { postCiudad } from "../API/api.js";

let formCiudades=document.getElementById("formCiudades"); 

formCiudades.addEventListener("submit",validateDataCiu) 

function validateDataCiu(e){
    e.preventDefault();
    var nomCiudad=document.getElementById("nomCiudad").value;
    const departamentoId=parseInt(document.getElementById("idDep").value);
    
    const imagen="https://cajica.gov.co/wp-content/uploads/2021/02/img12.jpg"
    const coordenadas=  {
        "lat": 4,
        "lon": 72
      }
    
    const dataCiu= {
        nomCiudad:nomCiudad,
        departamentoId:departamentoId,
        imagen:imagen,
        coordenadas:coordenadas,
    };
    
    if (validate(dataCiu)) {
        alert("Todos los campos son obligatorios");
        console.log("Todos los campos son obligatorios");
        return;
    }
    console.log(dataCiu);
    postCiudad(dataCiu);
    
    document.getElementById("formCiudades").reset();
};

function validate(objeto) {
    return !Object.values(objeto).every((element) => element !== "");
}

