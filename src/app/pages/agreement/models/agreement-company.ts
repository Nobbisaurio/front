import { Company } from "@app/pages/company/models/user-company";

export interface AgreementCompany {
  id:           number,
  code:         string,
  dateStart:    string,
  dateEnd:      string,
  itvPath:      string,
  agreementPath:string,
  status:       string,
  company:      Company,
}
