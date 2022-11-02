import ProductosMongo from "./contenedores/contMongo/productosM.js";

(async()=>{

    
    const productosMongo = new ProductosMongo("productos",{
        nombre:{type:String, required:true},
        material:{type:String, required:true},
        precio:{type:Number, required:true},
        url: String
    })
    
const guardar = await productosMongo.getById("6361ccfe7499d33bb25e0a06")
console.log(guardar)

})()