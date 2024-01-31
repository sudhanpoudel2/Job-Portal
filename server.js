import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { dbConnection } from './DB/dataBase.js';
import testRoutes from './routes/test.routes.js';

dotenv.config({
    path : ""
});

//rest object
const app = express();

//middelWare
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); //after run console ma method bhako show garchha

app.use('/api/v1/test',testRoutes);

// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to Job Portal</h1>")
// })

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} at port ${PORT}`);
})