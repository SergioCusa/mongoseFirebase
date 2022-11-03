import ProductosMongo from "../../contenedores/contMongo/productosM.js";

class productosDaosMongo extends ProductosMongo {
    constructor() {
        super("productos", {
            nombre: { type: String, required: true },
            material: { type: String, required: true },
            precio: { type: Number, required: true },
            url: String
        })
    }
}

export default productosDaosMongo