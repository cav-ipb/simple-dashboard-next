import { Company } from "./company";

export interface Report {
    id: string;
    name: string;
    url: string;
    companyId: number;
    company?: Company;
    public: boolean;
}

export interface ReportDetails {
    id: string;
    name: string;
    cards: { total: number, average: number };
    line: {date: string, value: number}[];
    bar: {category: string, value: number}[];
}








