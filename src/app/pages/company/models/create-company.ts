import { StatusCompany } from "@app/core/enum/statusCompany.enum";

export interface CreateCompany {
  ruc:                        string,
  name:                       string,
  dniRepresentLegal:          string,
  nameRepresentLegal:         string,
  lastNameRepresentLegal:     string,
  email:                      string,
  phone:                      string
  address:                    string,
  status:                     StatusCompany;
  idCareer:                   number,
  idUser:                     number,
}
