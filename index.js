import carritosDaosFire from "./Daos/carritosDaos/carritosDaosFire.js";
import productosDaosMongo from "./Daos/productosDaos/productosDaosMongo.js";






(async () => {

const productoMongo = new productosDaosMongo()
console.log(await productoMongo.save({nombre:"abre latas",material:"metalico",precio:12341}));

const carritoFire = new carritosDaosFire()
console.log(await carritoFire.save({productos:["botella","mate","escritorio"]}))


})()