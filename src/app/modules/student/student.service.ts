import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
export const StudentServics = {
  creatStudentIntoDB,
};
