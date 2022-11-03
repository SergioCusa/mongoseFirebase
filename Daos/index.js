import * as dotenv from "dotenv";
dotenv.config();

const daos = {

    arch: async () => {
        const { default: carritosDaosArchivos } = await import("./carritosDaos/carritosDaosArchivos.js")
        const { default: productosDaosArchivos } = await import("./productosDaos/productosDaosArchivos.js")
        return {
            carritosDao: new carritosDaosArchivos(),
            productosDao: new productosDaosArchivos()
        }
    },

    fire: async () => {
        const { default: carritosDaosFire } = await import("./carritosDaos/carritosDaosFire.js")
        const { default: productosDaosFire } = await import("./productosDaos/productosDaosFire.js")
        return {
            carritosDao: new carritosDaosFire(),
            productosDao: new productosDaosFire()
        }
    },

    mongo: async () => {
        const { default: carritosDaosMongo } = await import("./carritosDaos/carritosDaosMongo.js")
        const { default: productosDaosMongo } = await import("./productosDaos/productosDaosMongo.js")
        return {
            carritosDao: new carritosDaosMongo(),
            productosDao: new productosDaosMongo()
        }
    }

}

console.log(await daos[process.env.TIPO]())