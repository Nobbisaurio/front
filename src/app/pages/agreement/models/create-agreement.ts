import { StatusAgreement } from "@app/core/enum/statusAgreement.enum";

export interface CreateAgreement {
  id:           number,
  code:         string,
  dateStart:    Date,
  dateEnd:      Date,
  itvPath:      string,
  agreementPath:string,
  status:       StatusAgreement,
  company:      string,
}
