import sumar_cadena from "./sumador_cadena.js"

describe("Devolver numeros", () => {
  it("Deberia mostrar el numero 0 cuando la cadena este vacia", () => {
    expect(sumar_cadena(" ")).toEqual(0);
  });

  it("Deberia devolver un numero de una cadena", () => {
    expect(sumar_cadena("1")).toEqual(1);
  });
});


describe("Sumar cadena", () => {
  it("Sumar una cadena con un delimitador de ,", () => {
    expect(sumar_cadena("10,5")).toEqual(15);
  });
  it("Sumar una cadena de varios valores con un delimitador de ,", () => {
    expect(sumar_cadena("10,5,6,11")).toEqual(32);
  });
});

describe("Sumar cadena diferentes delimitadores", () => {
  it("Sumar una cadena con un delimitador ',' y un delimitador '-'", () => {
    expect(sumar_cadena("10,5-20")).toEqual(35);
  });
});

describe("Sumar cadena con delimitadores personalizados", () => {
  it("Sumar una cadena con un delimitador asignado", () => {
    expect(sumar_cadena("[;]10;20")).toEqual(30);
  });
  it("Sumar una cadena con varios delimitador asignados", () => {
    expect(sumar_cadena("[: ;]10:20;5-4,20")).toEqual(59);
  });
});