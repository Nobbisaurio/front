import { StatusProject } from "@app/core/enum/statusProject.enum";

export interface ListProjects {
  id:               number;
  name:             string;
  idTutorAcademic:  number,
  idTutorBusiness:  number,
  idCompany:        number,
  status:           StatusProject;
  tutorBusiness:    string;
}
