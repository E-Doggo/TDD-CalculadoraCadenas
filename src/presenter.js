import sumar_cadena from "./sumador_cadena.js"

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + sumar_cadena(cadena.value.toString()) + "</p>";
});
