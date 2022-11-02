import mongoose from "mongoose"
import config from "../config.js"


await mongoose.connect(config.mongoDb.uri,config.mongoDb.options);


class ProductosMongo {
    constructor (coleccion,esquema){
        this.db = mongoose.model(coleccion,esquema)
    }
      
  
async save(producto){
    try{
        const doc = this.db.create(producto);
        return doc;
    }catch(e){
        console.error("No se pudo guardar producto",e)
    }
}


async getById(id){
  
}


async getAll(){
    try{
        const data = datathis.db.find({})
        return data
    }catch(e){
        console.error("no se pudo acceder al contenido",e)
    }
}


async deleteById(id){
  
}


updateById(id, objetoNuevo) {
   
}

}

export default ProductosMongo