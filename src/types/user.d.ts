import { Company } from "./company";
import { Report } from "./report";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    companyId: number;
    company: Company;
    password?: string;
}

export interface UserReport {
    userId: number;
    reportId: string;
    report: Report;
}