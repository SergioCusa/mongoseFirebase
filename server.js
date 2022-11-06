import express from "express";
const app = express();

import { Router } from "express";
import Daos from "./Daos/index.js";
const router = Router()

const {prodDao,carrDao} = await Daos()

app.use("/api/productos",prodDao)

router.get("/",async(req,res)=>{
    const data = await prodDao.getAll()
    res.send(data)
})


export default app