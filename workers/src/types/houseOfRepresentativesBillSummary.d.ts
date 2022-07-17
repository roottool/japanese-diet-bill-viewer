/** 過程詳細 */
interface HouseOfRepresentativesBillProgressStep {
  /** 参議院議案受理年月日 */
  AcceptedByCouncilorsDate: string
  /** 衆議院議案受理年月日 */
  AcceptedByRepresentativesDate: string
  /** 参議院予備審査議案受理年月日 */
  AcceptedPreliminaryExaminationByCouncilorsDate: string
  /** 衆議院予備審査議案受理年月日 */
  AcceptedPreliminaryExaminationDate: string
  /** 参議院予備付託年月日／参議院予備付託委員会 */
  CouncilorsPreReferenceDateAndCommittee: `${string}／${string}`
  /** 参議院付託年月日／参議院付託委員会 */
  CouncilorsReferenceDateAndCommittee: `${string}／${string}`
  /** 衆議院審議時賛成会派 */
  FactionInFavorWhileDeliberation: string
  /** 衆議院審議時会派態度 */
  FactionalAttitudeWhileDeliberation: string
  /** 衆議院審議時反対会派 */
  OppositionFactionWhileDeliberation: string
  /** 衆議院予備付託年月日／衆議院予備付託委員会 */
  PreReferenceDateAndCommittee: `${string}／${string}`
  /** 衆議院付託年月日／衆議院付託委員会 */
  ReferenceDateAndCommittee: `${string}／${string}`
  /** 番号 */
  billNumber: `${number}`
  /** 議案種類 */
  billType: string
  /** 審議状況 */
  deliberationStatus: string
  /** 参議院審議終了年月日／参議院審議結果 */
  endOfCouncilorsDeliberationDateAndResult: `${string}／${string}`
  /** 参議院審査終了年月日／参議院審査結果 */
  endOfCouncilorsExaminationDateAndResult: `${string}／${string}`
  /** 衆議院審議終了年月日／衆議院審議結果 */
  endOfDeliberationDateAndResult: `${string}／${string}`
  /** 衆議院審査終了年月日／衆議院審査結果 */
  endOfExaminationDateAndResult: `${string}／${string}`
  /** 本文情報 */
  fullTextInfo: string
  /** 本文情報URL */
  fullTextInfoUrl: string
  /** 経過情報 */
  progressInfo: string
  /** 経過情報URL */
  progressInfoUrl: string
  /** 公布年月日／法律番号 */
  promulgationDateAndLawNumber: `${string}／${string}`
}

export interface HouseOfRepresentativesBillSummaryResponse {
  /** 議案提出会派 */
  billConstituency: string
  /** 番号 */
  billNumber: `${number}`
  /** 議案提出の賛成者 */
  billProponentsList: string
  /** 議案提出者 */
  billProposer: string
  /** 議案提出者一覧 */
  billProposersList: string
  /** 議案種類 */
  billType: string
  /** 審議状況 */
  deliberationStatus: string
  /** 議案件名 */
  name: string
  /** 掲載回次 */
  orderOfPublication: `${number}`
  /** 提出回次 */
  orderOfSubMission: `${number}`
  /** 過程 */
  progressStepsList: HouseOfRepresentativesBillProgressStep[]
}
