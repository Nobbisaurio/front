import {StatusStudent} from "@app/core/enum/statusStudent.enum";

export interface UserStudent {
  id: number;
  typeDni: string;
  dni: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  idCareer: number;
  career: string;
  parallel: string;
  email: string;
  electivePeriod: string;
  academicPeriod: string;
  idCompany: number;
  company: string;
  project: string;
  academicTutor: string;
  businessTutor: string;
  status: StatusStudent;
}

