import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
//Import routes
import blogs from "./Routes/blogsRut.js"


const app = express()

//checcking form which production the app is running
if (process.env.NODE_ENV !== 'Production') {
    dotenv.config()
}
const port = process.env.PORT || 8000
//middle ware
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()) //for cross orgin resource sharing



//Db connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
       app.listen(port, () => console.log(`Server is listenitng to port : ${port}`))
    })
    .catch(err => console.error(err))

mongoose.set('useFindAndModify', false) //for not showing any warnings in console


//Routes
app.use("/blogs",blogs)
app.get("/",(req,res)=>{
    res.send("Welcome to Memories API")
})

export default app