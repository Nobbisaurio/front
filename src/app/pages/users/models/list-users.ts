export interface ListUsers {
  id: number;
  dni: number;
  typeDni: string;
  userName: string;
  role: string;
  email: string;
}

export interface ListUser {
  id: number;
  dni: number;
  userName: string;
  email: string;
  password: string;
  idRol: number;
}

export interface ListPassword {
  email: string;
  currentPassword: string,
  newPassword: string,
}

