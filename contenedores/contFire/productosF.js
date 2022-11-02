class CarritosMongo {
    constructor (coleccion,esquema){
        this.db = mongoose.model(coleccion,esquema)
    }
      
  
async save(carrito){
    try{
        const data = this.db.create(carrito);
        return data;
    }catch(e){
        console.error("No se pudo guardar carrito",e)
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
     console.error("No se pudo eliminar carrito",e)
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