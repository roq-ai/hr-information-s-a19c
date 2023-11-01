interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read organization information',
    'Read employee information',
    'Read reimbursement status',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organization data',
    'Manage employee details',
    'Manage vacation and sick leave records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7c74ff90-88e0-4883-bb07-2b5d2b498ceb',
};
