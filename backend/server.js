const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/userRoute");
const { connection } = require("./connection/connection");



const app = express();
app.use(express.json());
app.use(cors());


app.use("/user" ,  userRoute )

app.listen(process.env.PORT, async  ()=>{
    try{
        await connection
        console.log("connected to MongoDB")
    }catch(error){
        console.log(error)
    }
})
