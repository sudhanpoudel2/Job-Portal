import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path : ""
});

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Job Portal</h1>")
})

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} at port ${PORT}`);
})