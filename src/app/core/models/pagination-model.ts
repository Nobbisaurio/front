export interface PaginationModel<T> {
  results: T[];
  total: number;
  page: number;
  limit: number;
}

export interface PaginationOptions {
  identification?: string;
  name?:           string;
  email?:          string;
  code?:           string;
  dateStart?:      string;
  dateEnd?:        string;
  company?:        string;
  academicTutor?:  string;
  businessTutor?:  string;
  page:            number;
  limit:           number;
}
