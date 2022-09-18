let array = [];
let suma = 0;
function sumar_cadena(cadena) {
  if (cadena.trim() == "")
  {
    return 0;
  }
  array = cadena.split(/,|-/);
  suma = 0;
  for (let i =0; i < array.length; i++)
  {
    suma += parseInt(array[i]);
  }
  return suma;
}

export default sumar_cadena;