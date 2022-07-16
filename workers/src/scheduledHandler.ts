import type { HouseOfRepresentativesBillSummaryResponse } from './types/houseOfRepresentativesBillSummary'

const HOUSE_OF_REPRESENTATIVES_BILL_SUMMARY_URL =
  'https://raw.githubusercontent.com/smartnews-smri/house-of-representatives/main/data/gian_summary.json' as const

export const handleRequest = async () => {
  const response = await fetchHouseOfRepresentativesBillSummary()
  const summary: HouseOfRepresentativesBillSummaryResponse =
    await response.json()
  return formatHouseOfRepresentativesBillSummary(summary)
}

const fetchHouseOfRepresentativesBillSummary = async () => {
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  return await fetch(HOUSE_OF_REPRESENTATIVES_BILL_SUMMARY_URL, init)
}

const formatHouseOfRepresentativesBillSummary = (
  summary: HouseOfRepresentativesBillSummaryResponse,
) => {
  summary
}
