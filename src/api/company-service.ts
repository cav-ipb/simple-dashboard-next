import { Company } from "@/types/company";
import { FakeDataService, IDataService } from "./data-service";
import { FakeDbSets } from "@/test/fake-db";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ICompanyService extends IDataService<Company> {
  // this should be extended with custom functions for companies
}

export class FakeCompanySerivce
  extends FakeDataService<Company>
  implements ICompanyService
{
  set: keyof FakeDbSets = "companies";
}
