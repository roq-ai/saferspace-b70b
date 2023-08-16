interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'User', 'Investigator', 'Resolver'],
  tenantName: 'Organization',
  applicationName: 'SaferSpace',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
