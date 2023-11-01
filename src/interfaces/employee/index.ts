import { ReimbursementInterface } from 'interfaces/reimbursement';
import { SickLeaveInterface } from 'interfaces/sick-leave';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  hire_date: any;
  job_title: string;
  salary: number;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  reimbursement?: ReimbursementInterface[];
  sick_leave?: SickLeaveInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    reimbursement?: number;
    sick_leave?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  user_id?: string;
  organization_id?: string;
}
