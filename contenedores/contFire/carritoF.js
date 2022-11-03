import admin from "firebase-admin"
import config from "../config"


admin.initializeApp({
    credential:admin.credential.cert(config.fireBase),
    databaseURL:"https://ser-fire-coder.firebaseio.com"
    
})
 
const db = admin.firestore()

class CarritosFire {
    constructor (coleccion){
        this.db = db.collection(coleccion)
    }
      
  
async save(carrito){
    try{
        const data = await this.db.add(carrito)
        return {...carrito, id: data.id}
    }catch(e){
        console.error("No se pudo guardar carrito",e)
    }
}


async getById(id){
    try{
        const data = await this.db.doc(id).get()
        const carrito = data.data()
        return {...carrito,id}
    }catch(e){
        console.error("no se pudo acceder al contenido",e)
    }    
  
}


async getAll(){
    try {
        const result = []
        const snapshot = await this.coleccion.get();
        snapshot.forEach(doc => {
            result.push({ id: doc.id, ...doc.data() })
        })
        return result
    } catch (error) {
        throw new Error(`Error al listar todo: ${error}`)
    }
}


async deleteById(id){
    try{
        const data = await this.db.doc(id).delete()
    }catch(e){
     console.error("No se pudo eliminar carrito",e)
    }
}


async updateById(element) {
    try{
        const nuevoElement = await this.db.doc(element.id).set(element)
        return nuevoElement
    }catch(e){
        console.error("no se pudo modificar el contenido",e)
    }
}

}

export default CarritosFire