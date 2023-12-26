import {ListPermissions} from "@pages/permissions/models/list-permissions";

export interface Role {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    state: boolean;
}

export interface RoleInfo{
  code: string,
  name: string,
  permissions: ListPermissions[]
}
