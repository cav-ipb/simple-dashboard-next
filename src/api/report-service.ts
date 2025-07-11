
import { FakeDataService, IDataService } from "./data-service";
import { fakeDb, FakeDbSets } from "@/test/fake-db";
import { Report } from "@/types/report";


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IReportService extends IDataService<Report> {
       getUserReports(id:number) : Promise<Report[]>;
    // this should be extended with custom functions for companies
}

export class FakeReportService extends FakeDataService<Report> implements IReportService {
   
    set: keyof FakeDbSets = "reports";

    async getUserReports(id: number): Promise<Report[]> {
        const result = await fakeDb.getUserReports(id);
        if (result.success)
            return result.data;
        return [];
    }
}