const express = require('express')
const app = express()
const PORT = 3500

const route = require("./routes/taskRoutes")

app.use(express.json())

app.use("/api/v1/tasks", route)

app.get("/",(req,res)=>{
    res.status(200).json("Hello World!!")
})

app.listen(PORT, ()=>{
    console.log(`The server started running at http://localhost:${PORT}`)
})