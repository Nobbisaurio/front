import { StatusStudent } from "@app/core/enum/statusStudent.enum";

export interface ListStudents {
  id:             number;
  typeDni:        string;
  dni:            string;
  completeNames:  string;
  career:         string;
  parallel:       string;
  email:          string;
  periodElective: string;
  periodAcademic: string;
  status:         StatusStudent;
}

export interface Student {
    completeNames:  string;
    periodElective: string;
    periodAcademic: string;
    project:        string;
}