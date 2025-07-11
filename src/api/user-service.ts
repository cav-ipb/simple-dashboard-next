import { FakeDataService, IDataService } from "./data-service";
import { fakeDb, FakeDbSets } from "@/test/fake-db";
import { User } from "@/types/user";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IUserService extends IDataService<User> {
  // this should be extended with custom functions for companies
  login(email: string, password: string): Promise<User | null>;
}

export class FakeUserService
  extends FakeDataService<User>
  implements IUserService
{
  set: keyof FakeDbSets = "users";

  async login(email: string, password: string): Promise<User | null> {
    const result = await fakeDb.login(email, password);
    if (result.success) return result.data;
    console.log(result.message);
    return null;
  }
}
