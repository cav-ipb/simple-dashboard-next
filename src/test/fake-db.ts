"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Company } from "@/types/company";
import { Report } from "@/types/report";
import { User, UserReport } from "@/types/user";

export interface FakeDbSets {
  companies: Company[];
  reports: Report[];
  users: User[];
  userReports: UserReport[];
}

export interface FakeDbResult {
  success: boolean;
  message: string;
  data: any;
}

class FakeDb {
  COMPANIES_KEY = "fakedb-companies";
  REPORTS_KEY = "fakedb-reports";
  USERS_KEY = "fakedb-users";
  USERREPORT_KEY = "fakedb-userreports";

  sets: FakeDbSets = {
    companies: [
      { id: 1, name: "TechNova Solutions" },
      { id: 2, name: "BlueHorizon Industries" },
      { id: 3, name: "Quantum Dynamics" },
      { id: 4, name: "StellarSoft Systems" },
      { id: 5, name: "Apex Innovations" },
      { id: 6, name: "Nexus Enterprises" },
      { id: 7, name: "SilverLeaf Technologies" },
      { id: 8, name: "Vortex Robotics" },
      { id: 9, name: "Zenith Global" },
      { id: 10, name: "Eclipse Cybernetics" },
    ],

    reports: [
      {
        id: 1,
        name: "Annual Financial Review 2023",
        filename: "financial-review-2023.json",
        companyId: 1,
        public: true,
      },
      {
        id: 2,
        name: "Board Meeting Minutes",
        filename: "board-minutes-2023.json",
        companyId: 1,
        public: false,
      }, // this one should not be seeing by some users
      {
        id: 3,
        name: "Q2 Market Analysis",
        filename: "q2-market-analysis-2023.json",
        companyId: 2,
        public: false,
      },
      {
        id: 4,
        name: "Sustainability Report",
        filename: "sustainability-2023.json",
        companyId: 3,
        public: true,
      },
      {
        id: 5,
        name: "Internal Audit Findings",
        filename: "audit-2023.json",
        companyId: 4,
        public: false,
      },
      {
        id: 6,
        name: "Product Launch Strategy",
        filename: "product-launch-2024.json",
        companyId: 5,
        public: true,
      },
      {
        id: 7,
        name: "Employee Satisfaction Survey",
        filename: "employee-survey-2023.json",
        companyId: 6,
        public: false,
      },
      {
        id: 8,
        name: "Cybersecurity Assessment",
        filename: "cybersecurity-2023.json",
        companyId: 7,
        public: true,
      },
      {
        id: 9,
        name: "R&D Progress Report",
        filename: "rd-progress-2023.json",
        companyId: 8,
        public: false,
      },
      {
        id: 10,
        name: "Customer Feedback Insights",
        filename: "customer-feedback-2023.json",
        companyId: 9,
        public: true,
      },
      {
        id: 11,
        name: "Infrastructure Upgrade Plan",
        filename: "infrastructure-plan-2024.json",
        companyId: 10,
        public: false,
      },
      {
        id: 12,
        name: "Supply Chain Optimization",
        filename: "supply-chain-2023.json",
        companyId: 2,
        public: true,
      },
      {
        id: 13,
        name: "AI Integration Roadmap",
        filename: "ai-roadmap-2024.json",
        companyId: 3,
        public: false,
      },
      {
        id: 14,
        name: "Diversity & Inclusion Report",
        filename: "diversity-report-2023.json",
        companyId: 4,
        public: true,
      },
      {
        id: 15,
        name: "Post-Merger Analysis",
        filename: "merger-analysis-2023.json",
        companyId: 5,
        public: false,
      },
    ],

    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@technova.com",
        companyId: 1,
        password: "Apple123",
      }, // (A1pple)
      {
        id: 2,
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily.johnson@technova.com",
        companyId: 1,
        password: "Banana2",
      }, // (B2anana)
      {
        id: 3,
        firstName: "Michael",
        lastName: "Williams",
        email: "michael.williams@bluehorizon.com",
        companyId: 2,
        password: "Carrot3",
      }, // (C3arrot)
      {
        id: 4,
        firstName: "Sarah",
        lastName: "Brown",
        email: "sarah.brown@bluehorizon.com",
        companyId: 2,
        password: "Dragon4",
      }, // (D4ragon)
      {
        id: 5,
        firstName: "David",
        lastName: "Jones",
        email: "david.jones@quantumdynamics.com",
        companyId: 3,
        password: "Eleven5",
      }, // (E5leven)
      {
        id: 6,
        firstName: "Jennifer",
        lastName: "Garcia",
        email: "jennifer.garcia@quantumdynamics.com",
        companyId: 3,
        password: "Falcon6",
      }, // (F6alcon)
      {
        id: 7,
        firstName: "Robert",
        lastName: "Miller",
        email: "robert.miller@stellarsoft.com",
        companyId: 4,
        password: "Giraffe7",
      }, // (G7iraffe)
      {
        id: 8,
        firstName: "Jessica",
        lastName: "Davis",
        email: "jessica.davis@stellarsoft.com",
        companyId: 4,
        password: "Holiday8",
      }, // (H8oliday)
      {
        id: 9,
        firstName: "William",
        lastName: "Rodriguez",
        email: "william.rodriguez@apexinnovations.com",
        companyId: 5,
        password: "Igloo9",
      }, // (I9gloo)
      {
        id: 10,
        firstName: "Amanda",
        lastName: "Martinez",
        email: "amanda.martinez@apexinnovations.com",
        companyId: 5,
        password: "Jasmine1",
      }, // (J1asmine)
      {
        id: 11,
        firstName: "James",
        lastName: "Hernandez",
        email: "james.hernandez@nexusenterprises.com",
        companyId: 6,
        password: "Kangaro2",
      }, // (K2angaro)
      {
        id: 12,
        firstName: "Linda",
        lastName: "Lopez",
        email: "linda.lopez@nexusenterprises.com",
        companyId: 6,
        password: "Lemonad3",
      }, // (L3emonad)
      {
        id: 13,
        firstName: "Daniel",
        lastName: "Gonzalez",
        email: "daniel.gonzalez@silverleaftech.com",
        companyId: 7,
        password: "Mangoes4",
      }, // (M4angoes)
      {
        id: 14,
        firstName: "Patricia",
        lastName: "Wilson",
        email: "patricia.wilson@silverleaftech.com",
        companyId: 7,
        password: "Noodles5",
      }, // (N5oodles)
      {
        id: 15,
        firstName: "Christopher",
        lastName: "Anderson",
        email: "christopher.anderson@vortexrobotics.com",
        companyId: 8,
        password: "Octopus6",
      }, // (O6ctopus)
      {
        id: 16,
        firstName: "Elizabeth",
        lastName: "Thomas",
        email: "elizabeth.thomas@vortexrobotics.com",
        companyId: 8,
        password: "Penguin7",
      }, // (P7enguin)
      {
        id: 17,
        firstName: "Matthew",
        lastName: "Taylor",
        email: "matthew.taylor@zenithglobal.com",
        companyId: 9,
        password: "Quietly8",
      }, // (Q8uietly)
      {
        id: 18,
        firstName: "Ashley",
        lastName: "Moore",
        email: "ashley.moore@zenithglobal.com",
        companyId: 9,
        password: "Rainbow9",
      }, // (R9ainbow)
      {
        id: 19,
        firstName: "Andrew",
        lastName: "Jackson",
        email: "andrew.jackson@eclipsecybernetics.com",
        companyId: 10,
        password: "Sunset1",
      }, // (S1unset)
      {
        id: 20,
        firstName: "Michelle",
        lastName: "Martin",
        email: "michelle.martin@eclipsecybernetics.com",
        companyId: 10,
        password: "Turtle2",
      }, // (T2urtle)
    ],

    userReports: [{ id: 1, userId: 1, reportId: 2 }],
  };

  constructor() {
    // load all the tables from the local storage in case they exist
    // const companies = this.loadFromLocalStorage<Company[]>(this.COMPANIES_KEY);
    // if (companies != null) this.sets.companies = companies;
    // const reports = this.loadFromLocalStorage<Report[]>(this.REPORTS_KEY);
    // if (reports != null) this.sets.reports = reports;
    // const users = this.loadFromLocalStorage<User[]>(this.USERS_KEY);
    // if (users != null) this.sets.users = users;
    // const userReports = this.loadFromLocalStorage<UserReport[]>(
    //   this.USERREPORT_KEY
    // );
    // if (userReports != null) this.sets.userReports = userReports;
  }

  // CRUD operations

  async create(set: keyof FakeDbSets, item: any): Promise<FakeDbResult> {
    let message = `Added item to ${set} successfuly`;
    if (item.id === 0) {
      const max = this.getMax(this.sets[set].map((x) => x.id));
      item.id = max ? max + 1 : 1;
      this.sets[set].push(item);
    }

    const index = this.sets[set].findIndex((x) => x.id === item.id);
    if (index >= 0) {
      message = `Item found in set ${set} with id ${item.id}`;
    } else {
      this.sets[set].push(item);
    }

    // this.saveToLocalStorage(`fakedb-${set}`, this.sets[set]);

    // await this.sleep(3000); // simulate some api call delay

    return { success: index >= 0, message: message, data: null };
  }

  async update(
    set: keyof FakeDbSets,
    id: number,
    item: any,
  ): Promise<FakeDbResult> {
    let message = `Item in ${set} with id ${id} updated successfuly`;

    const index = this.sets[set].findIndex((x) => x.id === id);
    if (index >= 0) {
      this.sets[set][index] = { ...this.sets[set][index], ...item };
    } else {
      message = `Item not found in set ${set} with id ${id}`;
    }

    // this.saveToLocalStorage(`fakedb-${set}`, this.sets[set]);

    // await this.sleep(3000); // simulate some api call delay

    return { success: index >= 0, message: message, data: null };
  }

  async delete(set: keyof FakeDbSets, id: number): Promise<FakeDbResult> {
    let message = `Item in ${set} with id ${id} deleted successfuly`;
    const index = this.sets[set].findIndex((x) => x.id === id);
    if (index >= 0) {
      this.sets[set].splice(index, 1);
    } else {
      message = `Item not found in set ${set} with id ${id}`;
    }

    // this.saveToLocalStorage(`fakedb-${set}`, this.sets[set]);

    // await this.sleep(3000); // simulate some api call delay

    return { success: index >= 0, message: message, data: null };
  }

  async get(set: keyof FakeDbSets, id: number): Promise<FakeDbResult> {
    let message = `Found item in ${set} with id ${id} `;

    const index = this.sets[set].findIndex((x) => x.id === id);

    let result: any = null;
    if (index >= 0) {
      result = { ...this.sets[set][index] };
    } else {
      message = `Item not found in set ${set} with id ${id}`;
    }

    // await this.sleep(3000); // simulate some api call delay

    return { success: index >= 0, message: message, data: result };
  }

  async all(set: keyof FakeDbSets): Promise<FakeDbResult> {
    // await this.sleep(3000); // simulate some api call delay

    return { success: true, message: "", data: this.sets[set] };
  }

  async getUserReports(id: number): Promise<FakeDbResult> {
    const user = this.sets.users.find((x) => x.id === id);
    if (user == null)
      return { success: false, message: "user not found", data: null };

    const reports = this.sets.reports.filter(
      (x) => x.companyId === user.companyId,
    );

    return { success: true, message: "successful", data: reports };
  }

  async login(email: string, password: string): Promise<FakeDbResult> {
    const user = this.sets.users.find(
      (x) => x.email === email && password === password,
    );
    if (user != null) {
      user.password = "XSRF-TOKEN";
      return { success: true, message: "loged in", data: user };
    }
    return { success: false, message: "invalid credentials", data: null };
  }

  // Persistency

  //   /**
  //    * Retrieves a value from localStorage by key
  //    * @param key - The key to look up in localStorage
  //    * @returns The parsed value if found, or null if not found/invalid
  //    */
  //   loadFromLocalStorage<T>(key: string): T | null {
  //     try {
  //       const storedValue = localStorage.getItem(key);
  //       if (storedValue === null) {
  //         return null;
  //       }
  //       return JSON.parse(storedValue) as T;
  //     } catch (error) {
  //       console.error(`Error loading ${key} from localStorage:`, error);
  //       return null;
  //     }
  //   }

  //   saveToLocalStorage<T>(key: string, value: T): boolean {
  //     try {
  //       localStorage.setItem(key, JSON.stringify(value));
  //       return true;
  //     } catch (error) {
  //       console.error(`Error saving ${key} to localStorage:`, error);
  //       return false;
  //     }
  //   }

  // helpers
  getMax(numbers: number[]): number | null {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const fakeDb = new FakeDb();
