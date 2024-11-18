import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianScgema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  Name: { type: String, required: true },
  Occupation: { type: String, required: true },
  ContactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  connectNumber: { type: String, required: true },
  emargencyContact: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'O+', 'O-', 'B-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianScgema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['Active', 'blocked'],
});

//model
export const StudentModel = model<Student>('Student', studentSchema);
