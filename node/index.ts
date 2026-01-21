import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
    origin:["http://localhost:5173","http://locahost:5174","http://localhost:3000"],
    allowedHeaders:["Content-Type","Authroziation"]
}))

app.use("/api/check",(req,res)=> {
    res.json({message:"node work!!"})
})


app.listen(4000,"0.0.0.0",()=>{
    console.log("server listen on http://localhost:4000")
})