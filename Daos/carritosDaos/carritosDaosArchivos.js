import CarritosArch from "../../contenedores/contArchivo/carritoA.js";

class carritosDaosArch extends CarritosArch {
    constructor() {
        super("./carrito.json")
    }
}

export default carritosDaosArch