export type USER_TYPE = {
  password: string;
  username: string;
  fullName: string;
  roleId: string;
  phoneCode: string;
  role: string;
  status: string;
  phoneNumber: string;
  id?: string;
  teams: Array<teams>;
};
type teams = {
  teamId: string;
};
