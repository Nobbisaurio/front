import { StatusProject } from "@app/core/enum/statusProject.enum";

export interface ListProjects {
  id:               number;
  name:             string;
  academicTutor:  Tutor,
  businessTutor:  Tutor,
  idCompany:        number,
  status:           StatusProject;
  tutorBusiness:    string;
  students:         studentList[]
}


export interface studentList {

    id: number,
    fullName: string,
    dni: string,
    academicPeriod: string

}

export interface Tutor{
  id:number
  firstName:string,
  lastName:string

}



