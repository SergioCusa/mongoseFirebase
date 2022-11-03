import ProductosArch from "../../contenedores/contArchivo/productosA.js";

class productosDaosArchivos extends ProductosArch {
    constructor() {
        super("./productos.json")
    }
}

export default productosDaosArchivos