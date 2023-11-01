import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface ReimbursementInterface {
  id?: string;
  amount: number;
  status: string;
  request_date: any;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface ReimbursementGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  employee_id?: string;
}
