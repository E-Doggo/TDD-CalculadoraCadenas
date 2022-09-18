import sumar_cadena from "./sumador_cadena.js"

describe("Devolver numeros", () => {
  it("Deberia mostrar el numero 0 cuando la cadena este vacia", () => {
    expect(sumar_cadena(" ")).toEqual(0);
  });

  it("Deberia devolver un numero de una cadena", () => {
    expect(sumar_cadena("1")).toEqual(1);
  });
});