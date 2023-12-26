export interface ListTutor {
  id: number;
  dni: number;
  firstName: string;
  lastName: string;
  completeName: string;
  isAcademic: boolean;
  email: string;
  idCareer?: number;
  career?: string;
  idCompany?: number;
  company?: string;
  state: boolean;
}
