import app from "./server.js"



try{
    const server = app.listen(8080,()=>{
        console.log("Conexion exitosa!")
    
    }) 
}catch(e){
    console.error("Error al establecer coneccion".e)
}

