let array = [];

function concatenarDelimiters(regex)
{
  let str = ",|-"
  if (regex != null)
  {
    str += "|" + regex;
  }
  return str;
}

function modificarStrDelimiter(str)
{
  str = str.replace(/\[|\]/g,"");
  str = str.split(" ");
  str = str.join("|");
  return str;
}


function getDelimiters(cadena)
{
  let strDelimiters = cadena.match(/\[.*\]/g);
  if (strDelimiters != null)
  {
    strDelimiters = modificarStrDelimiter(strDelimiters.toString());
  }
  let delimitadores = RegExp(concatenarDelimiters(strDelimiters));
  return delimitadores;
}

function sumar_cadena(cadena) {
  let suma = 0;
  if (cadena.trim() == "")
  {
    return 0;
  }
  let regex = getDelimiters(cadena);
  cadena = cadena.replace(/\[.*\]/g,"");
  array = cadena.split(regex);
  for (let i = 0; i < array.length; i++)
  {
    suma += parseInt(array[i]);
  }
  return suma;
}



export default sumar_cadena;