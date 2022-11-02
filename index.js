import ProductosMongo from "./contenedores/contMongo/productosM.js";

(async()=>{

    
    const productosMongo = new ProductosMongo("productos",{
        nombre:{type:String, required:true},
        material:{type:String, required:true},
        precio:{type:Number, required:true},
        url: String
    })
    
const guardar = await productosMongo.save({nombre:"mesa ratona",material:"madera",precio:123,url:"asd331ww1w"})
console.log(guardar)

})()