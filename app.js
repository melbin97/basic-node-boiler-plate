import express, { json } from 'express';
import morgan from 'morgan';
import { connect } from 'mongoose';
require('dotenv').config()

const app = new express()
const PORT = process.env.PORT || 5000;

connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('succesfully connected to mongoose....')
        })
        .catch((ex)=>{
            console.log('Error in connection with exception: ', ex)
        })
app.use(json())
app.use(morgan("dev"))

app.get("/ping", (req,res)=>{
    return res.send({
        status: 'healthy'
    });
});

app.listen(PORT, () => {
    console.log("server listening on PORT: ", PORT)
})

