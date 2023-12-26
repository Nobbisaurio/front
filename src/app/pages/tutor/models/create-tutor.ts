
export interface CreateTutorAcademic {
  id?: number;
  dni: number;
  firstName: string;
  lastName: string;
  email: string;
  idCareer: number;
}

export interface CreateTutorBusiness {
  id?: number;
  dni: number;
  firstName: string;
  lastName: string;
  email: string;
  idCompany: number;
}
