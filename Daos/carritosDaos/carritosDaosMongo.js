import CarritosMongo from "../../contenedores/contMongo/productosM.js";

class carritostosDaosMongo extends CarritosMongo {
    constructor() {
        super("carritos", {
            productos: { type: [], default: [] },
            timestamp: {type: Date , default : Date.now}
        })
    }
}

export default carritostosDaosMongo