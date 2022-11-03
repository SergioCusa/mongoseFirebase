import ProductosArch from "../../contenedores/contArchivo/productosA";

class productosDaosArchivos extends ProductosArch {
    constructor(){
        super("./productos.json")
    }
}

export default productosDaosArchivos