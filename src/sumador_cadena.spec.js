import CalculadoraCadena from "./sumador_cadena.js"

describe("Devolver numeros", () => {
  let calculadoraCadena = null;
  beforeEach(() => {
    calculadoraCadena = new CalculadoraCadena();
  });

  it("Deberia mostrar el numero 0 cuando la cadena este vacia", () => {
    expect(calculadoraCadena.sumar(" ")).toEqual(0);
  });

  it("Deberia devolver un numero de una cadena", () => {
    expect(calculadoraCadena.sumar("1")).toEqual(1);
  });
});


describe("Sumar cadena", () => {
  let calculadoraCadena = null;
  beforeEach(() => {
    calculadoraCadena = new CalculadoraCadena();
  });
  it("Sumar una cadena con un delimitador de ,", () => {
    expect(calculadoraCadena.sumar("10,5")).toEqual(15);
  });
  it("Sumar una cadena de varios valores con un delimitador de ,", () => {
    expect(calculadoraCadena.sumar("10,5,6,11")).toEqual(32);
  });
});

describe("Sumar cadena diferentes delimitadores", () => {
  let calculadoraCadena = null;
  beforeEach(() => {
    calculadoraCadena = new CalculadoraCadena();
  });
  it("Sumar una cadena con un delimitador ',' y un delimitador '-'", () => {
    expect(calculadoraCadena.sumar("10,5-20")).toEqual(35);
  });
});

describe("Sumar cadena con delimitadores personalizados", () => {
  let calculadoraCadena = null;
  beforeEach(() => {
    calculadoraCadena = new CalculadoraCadena();
  });

  it("Sumar una cadena con un delimitador asignado", () => {
    expect(calculadoraCadena.sumar("[;]10;20")).toEqual(30);
  });
  it("Sumar una cadena con varios delimitador asignados", () => {
    expect(calculadoraCadena.sumar("[: ;]10:20;5-4,20")).toEqual(59);
  });


});

describe("Verificar valor", () => {
  let calculadoraCadena = null;
  beforeEach(() => {
    calculadoraCadena = new CalculadoraCadena();
  });

  it("No deberia aceptar la cadena porque no es numero", () => {
    expect(calculadoraCadena.sumar("cadena")).toEqual(0);
  });
  it("No deberia tomar en cuenta el 1000", () => {
    expect(calculadoraCadena.sumar("1000,100,10")).toEqual(110);
  });

  
});
