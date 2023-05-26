export interface Employee {
  name?: string;
  biography?: string;
  image?: string;
  colleagues?: string[];
  popularity?: number;
}

export type Data = { employees:Employee[] };
export type Employees = Employee[];
