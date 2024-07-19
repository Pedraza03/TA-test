
const express = require("express")
const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config()
const server = express()
const port = process.env.PORT || 3000 

server.get("/soyTA", async (req, res)=> {
    try {
        const response = await axios.get(process.env.API_URL)
        res.status(200).json(
            response.data
        )
    } catch (error) {
        res.status(500).json({
            error: "Algo salio mal"
        })
    }

})
server.listen(port,()=>{
    console.log(`Servidor escuchando el puerto ${port}`)
})

