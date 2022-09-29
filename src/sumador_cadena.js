class CalculadoraCadena
{

  constructor(){
    let arrayDeNumeros = [];
  }

  #concatenarDelimiters(strRegex)
  {
    let str = ",|-"
    if (strRegex != null)
    {
      str += "|" + strRegex;
    }
    return str;
  }

  #modificarDelimiter(str)
  {
    str = str.replace(/\[|\]/g,"");
    str = str.split(" ");
    str = str.join("|");
    return str;
  }


  #getDelimiters(cadena)
  {
    let strDelimiters = cadena.match(/\[.*\]/g);
    if (strDelimiters != null)
    {
      strDelimiters = this.#modificarDelimiter(strDelimiters.toString());
    }
    let delimitadores = RegExp(this.#concatenarDelimiters(strDelimiters));
    return delimitadores;
  }

  #sumarArray()
  {
    let suma = 0;
    for (let contador = 0; contador < this.arrayDeNumeros.length; contador++)
    {
      let num = parseInt(this.arrayDeNumeros[contador]);
      if (!isNaN(num) && num < 1000)
      {
        suma += num;
      }
    }
    return suma;
  }

  sumar(cadena) {
    let regex = this.#getDelimiters(cadena);
    cadena = cadena.replace(/\[.*\]/g,"");
    this.arrayDeNumeros = cadena.split(regex);
    let sum = this.#sumarArray();
    return sum;
  }

}
export default CalculadoraCadena;