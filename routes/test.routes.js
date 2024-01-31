import express from 'express';
import { testPostController } from '../controllers/test.controllers.js';

//routes object 
const router = express.Router();

//routes
router.post('/', testPostController);

//export
export default router