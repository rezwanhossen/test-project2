import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
// const port = 3000;

app.use(express.json());
app.use(cors());
//application route
app.use('/api/v1/students/', studentRoutes);

// const getAcontollor = (req: Request, res: Response) => {
//   const a: number = 10;
//   res.send('Hello World!');
// };

// app.get('/', getAcontollor);
export default app;
