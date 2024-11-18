import { Request, Response } from 'express';
import { StudentServics } from './student.service';

const ceratStudent = async (req: Request, res: Response) => {
  try {
    const Student = req.body;
    const result = await StudentServics.creatStudentIntoDB(Student);
    res.status(200).json({
      success: true,
      message: 'student is creat succrssfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StusentControllers = {
  ceratStudent,
};
