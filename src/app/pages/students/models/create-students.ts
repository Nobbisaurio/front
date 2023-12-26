import { StatusStudent } from "@app/core/enum/statusStudent.enum";

export interface CreateStudents {
  typeDni:        string;
  dni:            number;
  firstName:      string;
  secondName:     string;
  lastName:       string;
  secondLastName: string;
  email:          string;
  idCareer:       string;
  electivePeriod: string;
  academicPeriod: string;
  status:         StatusStudent;
}
