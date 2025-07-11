
import { FakeDataService, IDataService } from "./data-service";
import { FakeDbSets } from "@/test/fake-db";
import { Report } from "@/types/report";


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IReportService extends IDataService<Report> {
    // this should be extended with custom functions for companies
}

export class FakeReportService extends FakeDataService<Report> implements IReportService {
    set: keyof FakeDbSets = "reports";
}