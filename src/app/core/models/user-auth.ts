export interface UserAuth {
  career:   Person;
  id:       number;
  dni:      string;
  userName: string;
  email:    string;
  rol:      RolOrCareer;
  student:  Person;
  tutor:    Person;
  company:  CompanyAuth;
  project:  ProjectAuth;

}

export interface CompanyAuth {
  id:     number;
  ruc:    string;
  name:   string;
  status: string;
  career: RolOrCareer;
}

export interface RolOrCareer {
  id:   number;
  code: string;
  name: string;
}

export interface Person {
  id:        number;
  firstName: string;
  lastName:  string;
  career:    RolOrCareer;
  status:    string;
  company:  CompanyAuth;
}
 export interface ProjectAuth{

  id:          number;
  name:        string;
  description: string;
  status:      string;

 }
