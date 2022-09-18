import sumar_cadena from "./sumador_cadena.js"

describe("Sumar", () => {
  it("Deberia mostrar el numero 0 cuando la cadena este vacia", () => {
    expect(sumar_cadena(" ")).toEqual(0);
  });
});
