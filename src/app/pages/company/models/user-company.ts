export interface Company {
  id:                 number;
  ruc:                string;
  name:               string;
  address:            string;
  status:             string;
  dniRepresentLegal:  string;
  nameRepresentLegal: string;
  email:              string;
  phone:              string;
  agreements:         Agreement[];
  projects:           Project[];
}

export interface Agreement {
  id:        number;
  code:      string;
  dateStart: string;
  dateEnd:   string;
  status:    string;
}

export interface Project {
  id:          number;
  name:        string;
  description: string;
  status:      string;
}

