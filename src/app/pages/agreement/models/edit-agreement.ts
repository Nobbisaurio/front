import { StatusAgreement } from "@app/core/enum/statusAgreement.enum";

export interface EditAgreement {
  id:           number,
  code:         string,
  dateStart:    Date,
  dateEnd:      Date,
  status:       StatusAgreement,
  company:      string,
}





