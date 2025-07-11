
import { FakeDataService, IDataService } from "./data-service";
import { FakeDbSets } from "@/test/fake-db";
import { User } from "@/types/user";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IUserService extends IDataService<User> {
    // this should be extended with custom functions for companies
}

export class FakeUserService extends FakeDataService<User> implements IUserService {
    set: keyof FakeDbSets = "users";
}