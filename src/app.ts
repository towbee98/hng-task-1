import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config()
const PORT=process.env.PORT || 8787
const app = express();

app.use(cors({
    origin:"*"
}))

app.get("/", (req, res) => {
    res.status(200).json({
          "slackUsername": "towbee", "backend": true, "age": 30, "bio": "A software developer that likes to take risks"
    })
})
app.listen(PORT,()=>{
    console.log("Server listening at port "+ PORT)
})