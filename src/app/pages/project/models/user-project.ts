import { Company } from '@app/pages/company/models/user-company';
import { ListTutor } from '@app/pages/tutor/models/list-tutor';
import { ListTutorAcademic } from '@app/pages/tutor/models/list-tutor-academic';

export interface UserProject {
  name:               string;
  description:        string;
  academicTutor:      ListTutorAcademic;
  businessTutor:      ListTutor;
  status:             string;
  company:            Company;
  students:           Student[];

}

export interface Student{
  id:             number,
  fullName:       string,
  dni:            string,
  academicPeriod: string
}
