import express from 'express';
import { StusentControllers } from './student.contoller';
const router = express.Router();
router.post('/creat-student', StusentControllers.ceratStudent);
