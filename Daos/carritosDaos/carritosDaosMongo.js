import CarritosMongo from "../../contenedores/contMongo/productosM.js";

class carritostosDaosMongo extends CarritosMongo {
    constructor() {
        super("carritos", {
            productos: { type: [], default: [] },
            
        })
    }
}

export default carritostosDaosMongo