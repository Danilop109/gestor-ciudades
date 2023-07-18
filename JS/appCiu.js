import { getCiudad, putCiudades, deleteCiudades } from "../API/api.js";

(function muestraCiudades() {
  const cuerpoCiudad = document.querySelector(".cuerpoCiudad");

  document.addEventListener("DOMContentLoaded", muestraCiu);

  cuerpoCiudad.addEventListener("click", confirmDeUpCiu);

  async function muestraCiu() {
    let ciudades = await getCiudad();
    console.log(ciudades);

    const cuerpoCiu = document.getElementById("cuerpoCiudad");
    ciudades.forEach((ciudad) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${ciudad.id}</th>
        <td>${ciudad.nomCiudad}</td>
        <td> <img src="${ciudad.imagen}"> </td>
        <td>${ciudad.departamentoId}</td>
        <td>${ciudad.coordenadas.lat}</td>
        <td>${ciudad.coordenadas.lon}</td>
        <td><button type="button" data-ciudades="${ciudad.id}" class="btn btn-danger deleteciudad">Delete</button></td>
        <td><button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar2" data-ciudades="${ciudad.id}" class="btn btn-warning updateciudad">Update</button></td>

        `;
      cuerpoCiu.appendChild(row);
    });
  }

  function confirmDeUpCiu(e) {
    if (e.target.classList.contains("deleteciudad")) {
      // console.log('diste click delete');
      const idDele = parseInt(e.target.dataset.ciudades);
      // console.log(idPunto);
      let confirmando = confirm("¿Deseas eliminar esta ciudad?");
      if (confirmando) {
        deleteCiudades(idDele);
      }
    } else if (e.target.classList.contains("updateciudad")) {
      const idUpdate = parseInt(e.target.dataset.ciudades);
      console.log(idUpdate);
      document
        .getElementById("formUpdateCiudad")
        .addEventListener("submit", (e) => {
          e.preventDefault();

          const nomCiudadAct = document.getElementById("nomCiudadAct").value;
          const cateDepModal = parseInt(document.getElementById("cateDepModal").value);
          const imagenUp ="https://f.hubspotusercontent10.net/hubfs/4704261/bucaramanga.jpg";
          const coordenadasUp = {
            lat: 4,
            lon: 72,
          };

          const dataCiu = {
            nomCiudad: nomCiudadAct,
            departamentoId: cateDepModal,
            imagen: imagenUp,
            coordenadas: coordenadasUp,
          };

          console.log(dataCiu);
          putCiudades(dataCiu, idUpdate);
        });
    }
  }
})();
