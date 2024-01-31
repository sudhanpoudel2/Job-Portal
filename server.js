import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './DB/dataBase.js';
import testRoutes from './routes/test.routes.js';

dotenv.config({
    path : ""
});

//rest object
const app = express();

app.use('/api/v1/test',testRoutes);

// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to Job Portal</h1>")
// })

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} at port ${PORT}`);
})