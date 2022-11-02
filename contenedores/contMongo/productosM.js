import mongoose from "mongoose"
import config from "../config.js"


await mongoose.connect(config.mongoDb.uri,config.mongoDb.options);


class ProductosMongo {
    constructor (coleccion,esquema){
        this.db = mongoose.model(coleccion,esquema)
    }
      
  
async save(producto){
    try{
        const data = this.db.create(producto);
        return data;
    }catch(e){
        console.error("No se pudo guardar producto",e)
    }
}


async getById(id){
    try{
        const data = this.db.find({_id:id})
        return data
    }catch(e){
        console.error("no se pudo acceder al contenido",e)
    }    
  
}


async getAll(){
    try{
        const data = await this.db.find({})
        return data
    }catch(e){
        console.error("no se pudo acceder al contenido",e)
    }
}


async deleteById(id){
    try{
        await this.db.deleteOne({_id:id})
    }catch(e){
     console.error("No se pudo eliminar archivo",e)
    }
}


async updateById(element) {
    try{
        await this.db.replaceOne({_id:element._id},element)
    }catch(e){
        console.error("no se pudo modificar el contenido",e)
    }
}

}

export default ProductosMongo