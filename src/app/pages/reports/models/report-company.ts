
import { Student } from "@app/pages/students/models/list-students";

export interface ReportByCompany {
  

    company:       string;
    academicTutor: string;
    businessTutor: string;
    students:      Student[];

}

