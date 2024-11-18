import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
// const port = 3000;

app.use(express.json());
app.use(cors());

const getAcontollor = (req: Request, res: Response) => {
  const a: number = 10;
  res.send('Hello World!');
};

app.get('/', getAcontollor);
export default app;
