
import app from "./server.js"

app.get("/",(req,res)=>{
    res.send("hola")
})

try{
    const server = app.listen(8080,()=>{
        console.log("Conexion exitosa!")
    
    }) 
}catch(e){
    console.error("Error al establecer coneccion".e)
}

