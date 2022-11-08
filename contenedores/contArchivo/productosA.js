import fs from "fs"

class ProductosArch {
    constructor(archivo) {
        this.archivo = archivo
        this.time = new Date().toLocaleString()
    }


    async save(producto) {
        try {
            const data = await fs.promises.readFile(`${this.archivo}`, "utf-8")
            const objetos = JSON.parse(data)
            const id = objetos.length + 1
            producto.id = id
            const time = new Date().toLocaleString()
            producto.timestamp = time
            objetos.push(producto)
            const productosString = JSON.stringify(objetos)
            await fs.promises.writeFile(`${this.archivo}`, productosString)
            console.log("Se guardo el objeto")
            console.log(objetos)
        }
        catch (e) {
            console.log("No se pudo guardar archivo", e)
        }
    }


    async getById(id) {
        const data = await fs.promises.readFile(`${this.archivo}`, "utf-8")
        const objetos = JSON.parse(data)
        const objeto = objetos.find((objeto) => objeto.id == id)
        if (objeto) {
            return (objeto)
        }
        else {
            throw new Error("Producto no encontrado!!")
        }
    }


    async getAll() {
        try {
            const data = await fs.promises.readFile(`${this.archivo}`, "utf-8")
            const objetos = JSON.parse(data)
            return objetos
        }
        catch (err) {
            console.log("No se consiguio info")
        }
    }


    async deleteById(id)  {
        try {
            const data = await fs.promises.readFile(`${this.archivo}`, "utf-8")
            const parse = JSON.parse(data)
            const filtro = parse.filter((objeto) => objeto.id !== id)
            const string = JSON.stringify(filtro)
            fs.promises.writeFile(`${this.archivo}`, string)
            console.log(filtro)
        }
        catch (err) {
            console.log("No se encontro ID")
        }
    }


    async updateById(id, objetoNuevo) {
        try{

            const data = await fs.readFileSync(this.archivo, "utf-8");
            let dataParseada = JSON.parse(data);
        let productoViejo = dataParseada.find((objeto) => objeto.id === id);
        let mensaje = "Se reemplazo el producto";
        if (productoViejo === undefined) {
            throw { msg: "404 Not found" };
        }
        let productosFiltrados = dataParseada.filter((objeto) => objeto.id !== id);
        productoViejo = { id, ...objetoNuevo };
        productosFiltrados.push(productoViejo);
        await fs.writeFileSync(this.archivo, JSON.stringify(productosFiltrados, null, 2));
        return mensaje;
    }catch(e){
        console.error(e)
    }
    }
}




export default ProductosArch

