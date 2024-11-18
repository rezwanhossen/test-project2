import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServics = {
  creatStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
