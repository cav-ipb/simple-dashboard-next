export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  companyId: number;
  password?: string;
}

export interface UserReport {
  id: number;
  userId: number;
  reportId: number;
}
