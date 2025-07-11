import { fakeDb, FakeDbSets } from "@/test/ fake-db";

export interface IDataService<T> {
   get(id:number) : Promise<T | null>;
   all(): Promise<T[]>;
   create(item: T) : Promise<boolean>;
   update(id:number, item: T) : Promise<boolean>;
   delete(id:number): Promise<boolean>;


}

export abstract class FakeDataService<T> implements IDataService<T> {
    
    set: keyof FakeDbSets = "companies";
    
    async get(id: number) {
        const result = await fakeDb.get(this.set, id);
        if (result.success)
            return result.data as T;
        return null;
    }


    async all() {
        const result = await fakeDb.all(this.set);
        if (result.success)
            return result.data as T[];
        return [];
    }

    async create(item: T) {
        const result = await fakeDb.create(this.set, item);
        if (result.success)
            console.log("success");
        else console.log("failure");
        return result.success;
    }

    async update(id: number, item: T) {
        const result = await fakeDb.update(this.set, id, item);
        if (result.success)
            console.log("success");
        else console.log("failure");
        return result.success;
    }


    async delete(id: number) {
       const result = await fakeDb.delete(this.set, id);
        if (result.success)
            console.log("success");
        else console.log("failure");
        return result.success;
    }


}