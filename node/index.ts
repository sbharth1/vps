import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv/config'
const app = express();
const apiUrl = process.env.API_URL || "http://localhost:4000";
const port = Number(process.env.PORT) || 4000;

app.use(express.json())
app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
    origin:["http://localhost:5173","http://locahost:5174","http://localhost:3000",`${apiUrl}`],
    allowedHeaders:["Content-Type","Authroziation"]
}))

app.get(`${apiUrl}`,(req,res)=> {
    res.json({message:"node work!!"})
})


app.listen(port,"0.0.0.0",()=>{
    console.log(`server listen on http://localhost:${port}`)
})