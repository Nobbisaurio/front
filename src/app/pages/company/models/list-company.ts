import { StatusCompany } from "@app/core/enum/statusCompany.enum";

export interface ListCompany {
  id:                     number,
  ruc:                    string,
  name:                   string,
  dniRepresentLegal:      string,
  nameRepresentLegal:     string,
  lastNameRepresentLegal: string,
  phone:                  string,
  address:                string,
  email:                  string,
  status:                 StatusCompany,
  idCareer:               number
  idUser:                 number,

}

