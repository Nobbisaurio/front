import { StatusProject } from "@app/core/enum/statusProject.enum";


export interface EditProject {
  id:                 number;
  name:               string;
  description:        string;
  idBusinessTutor:    number;
  idTutorAcademic:    number;
  status:             StatusProject;

}
