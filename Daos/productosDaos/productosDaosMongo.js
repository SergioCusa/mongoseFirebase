import ProductosMongo from "../../contenedores/contMongo/productosM.js";

class productosDaosMongo extends ProductosMongo {
    constructor() {
        super("productos", {
            nombre: { type: String, required: true },
            material: { type: String, required: true },
            precio: { type: Number, required: true },
            timestamp: {type:Date,default:Date},
            url: String
        })
    }
}

export default productosDaosMongo