import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.TIPO)

const daos = {

    arch: async () => {
        const { default: carritosDaosArchivos } = await import("./carritosDaos/carritosDaosArchivos.js")
        const { default: productosDaosArchivos } = await import("./productosDaos/productosDaosArchivos.js")
        return {
            carrDao: new carritosDaosArchivos(),
            prodDao: new productosDaosArchivos()
        }
    },

    fire: async () => {
        const { default: carritosDaosFire } = await import("./carritosDaos/carritosDaosFire.js")
        const { default: productosDaosFire } = await import("./productosDaos/productosDaosFire.js")
        return {
            carrDao: new carritosDaosFire(),
            prodDao: new productosDaosFire()
        }
    },

    mongo: async () => {
        const { default: carritosDaosMongo } = await import("./carritosDaos/carritosDaosMongo.js")
        const { default: productosDaosMongo } = await import("./productosDaos/productosDaosMongo.js")
        return {
            carrDao: new carritosDaosMongo(),
            prodDao: new productosDaosMongo()
        }
    }

}

export default daos[process.env.TIPO]

