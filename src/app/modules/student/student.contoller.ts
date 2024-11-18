import { Request, Response } from 'express';
import { StudentServics } from './student.service';

const ceratStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServics.creatStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student is creat succrssfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServics.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieved succrssfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServics.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student are retrieved succrssfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StusentControllers = {
  ceratStudent,
  getAllStudents,
  getSingleStudents,
};
