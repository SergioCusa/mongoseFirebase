import ProductosMongo from "./contenedores/contMongo/productosM.js";
import CarritosMongo from "./contenedores/contMongo/carritoM.js";

(async () => {


    const productosMongo = new ProductosMongo("productos", {
        nombre: { type: String, required: true },
        material: { type: String, required: true },
        precio: { type: Number, required: true },
        timestamp: { type: Date, default: Date },
        url: String
    })

    console.log(await productosMongo.save({ nombre: "cuchara", material: "metal", precio: 1234 }))

    const carritosMongo = new CarritosMongo("carritos", {
        productos: { type: [], default: [] },
        timestamp: { type: Date, default: Date }
    })
    console.log(await carritosMongo.save({productos:["mesa","vaso","mesa ratona"]}))

})()