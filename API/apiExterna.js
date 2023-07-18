let botonBuscar= document.getElementById("botonBuscar");
botonBuscar.addEventListener("click", (e)=>{
    e.preventDefault();
    let buscar=document.getElementById("buscador").value
try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${buscar}&appid=b5fdd3955f472fd1077dbe4db72a8e66`;
    
    fetch(url)
    .then(respuesta=> {
        return respuesta.json();
        // console.log(respuesta);
    })
    .then(datos=>{
        console.log(datos);
        buildHtml(datos)
    });
    
    
    }
    catch (error) {
        throw 'Error al obtener los datos';
    }
})

function buildHtml(clima){
        let contenedor= document.getElementById("info");
            contenedor.innerHTML+= `<strong>Temperatura:</strong> ${clima.main.temp}<p> <p><strong>Descripción:</strong> ${clima.weather[0].description}<p> <p><strong>Longitud:</strong> ${clima.coord.lon}<p> <p><strong>Latitud:</strong> ${clima.coord.lat}<p>
 `
    
    }