import express from "express";
const app = express();

import { Router } from "express";

import Daos from "./Daos/index.js";
const { prodDao, carrDao } = await Daos()




//*Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("views"))



//*declaracion de rutas productos 

const ProdDao = new Router()
app.use("/api/productos", ProdDao)

ProdDao.get("/", async (req, res) => {
    const data = await prodDao.getAll()
    res.send(data)
})

ProdDao.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const data = await prodDao.getById(id)
        res.send(data)
    } catch (e) {
        res.status(404).send({ error: true, msj: e.message })
    }
})

ProdDao.post("/", async (req, res) => {
    const user = true
    if (user) {
        const { nombre, material, precio } = req.body
        await prodDao.save({ nombre, material, precio })
        const data = await prodDao.getAll()
        res.send(data)
    } else {
        res.send("usted no es admin")
    }
})

ProdDao.put("/:id", (req, res) => {
    const user = true
    if (user) {
        try {
            const { id } = req.params
            const prodNuevo = req.body
            // const idInt = parseInt(id)
            res.send(prodDao.updateById(id, prodNuevo))
        } catch (err) {
            res.status(404).send(err.msg)
        }
    } else {
        res.send("Usted no es admin")
    }
})

ProdDao.delete("/:id", async (req, res) => {
    const user = true
    if (user) {
        try {
            const { id } = req.params
            prodDao.deleteById((parseInt, id))
            const data = await prodDao.getAll()
            res.send(data)
        } catch (err) {
            res.status(404).send(err.msg)
        }
    } else {
        res.send("Usted no es admin")
    }
})


//* declaracion de rutas carritos 

const CarrDao = new Router()
app.use("/api/carritos", CarrDao)

CarrDao.get("/", async (req, res) => {
    const data = await carrDao.getAll()
    res.send(data)
})

CarrDao.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const data = await carrDao.getById(id)
        res.send(data)
    } catch (e) {
        res.status(404).send({ error: true, msj: e.message })
    }
})

CarrDao.post("/", async (req, res) => {
    const user = true
    if (user) {
        const { productos } = req.body
        await carrDao.save({ productos })
        const data = await carrDao.getAll()
        res.send(data)
    } else {
        res.send("usted no es admin")
    }
})

CarrDao.put("/:id", (req, res) => {
    const user = true
    if (user) {
        try {
            const { id } = req.params
            const prodNuevo = req.body
            // const idInt = parseInt(id)
            res.send(carrDao.updateById(id, prodNuevo))
        } catch (err) {
            res.status(404).send(err.msg)
        }
    } else {
        res.send("Usted no es admin")
    }
})

CarrDao.delete("/:id", async (req, res) => {
    const user = true
    if (user) {
        try {
            const { id } = req.params
            carrDao.deleteById((parseInt, id))
            const data = await carrDao.getAll()
            res.send(data)
        } catch (err) {
            res.status(404).send(err.msg)
        }
    } else {
        res.send("Usted no es admin")
    }
})




export default app