import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json())
app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
    origin:["http://localhost:5173","http://locahost:5174","http://localhost:3000", "http://43.205.239.77:5174"],
    allowedHeaders:["Content-Type","Authroziation"]
}))

app.get("/api/check",(req,res)=> {
    res.json({message:"virtual private network work!"})
})


app.listen(port,"0.0.0.0",()=>{
    console.log(`server listen on http://localhost:${port}`)
})