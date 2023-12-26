import { StatusProject } from "@app/core/enum/statusProject.enum";


export interface CreateProjects {
  name:               string;
  description:        string;
  idTutorBusiness:    number,
  status:             StatusProject

 }
