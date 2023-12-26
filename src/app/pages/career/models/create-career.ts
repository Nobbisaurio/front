export interface CreateCareer {
  id?: number,
  code: string,
  name: string,
  dateStart: Date,
  dateEnd: Date,
  timeRenovationAgreement: number,
  idCoordinator: number,
  idViceCoordinator: number,
  idRespStepDual: number,
  state: boolean
}
