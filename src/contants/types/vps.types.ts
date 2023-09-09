export type VPS_LIST_TYPE = Partial<{
  id: string;
  receivedDate: string | Date;
  vpsIp: string;
  dateExpiry: string | Date;
  vpsUser: string;
  vpsName: string;
  dob: string;
  ssn: string;
  address: string;
  bang: string;
  city: string;
  zip: string;
  mail: string;
  mailPass: string;
  emailRestore: string;
  phone: string;
  note: null;
  vpsId: string;
  statusOpen?: string;
  vpsPass: string;
  bank: null;
  userId: USER_VPS;
  team: string;
  routing: null;
  accType: null;
  status: null;
  createdAt: Date;
  updatedAt: Date;
  teamId: string;
  expiryDate: Date;
  partner: string;
  dateCreate?: string | Date;
}>;

export type USER_VPS = {
  username: string;
  fullName: string;
};
