export interface Report {
  id: number;
  name: string;
  filename: string;
  companyId: number;
  public: boolean;
}

export interface ReportDetails {
  id: string;
  name: string;
  cards: { total: number; average: number };
  line: { date: string; value: number }[];
  bar: { category: string; value: number }[];
}
