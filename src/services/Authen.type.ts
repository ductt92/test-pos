export interface IUser {
  id: string;
  fullName: string;
  username: string;
  status: string;
  roleId: string;
  phoneCode: string;
  phoneNumber: string;
}
export interface IExprires {
  token: string;
  expires: string;
}

export interface IToken {
  access: IExprires;
  refresh: IExprires;
}
export interface IUserTeam {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface ILogin {
  user: IUser;
  tokens: IToken;
  teams: Array<IUserTeam>;
}
