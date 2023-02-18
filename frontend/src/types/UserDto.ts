export interface UserDto {
  // id of user
  id?: number;
  // username of user
  username: string;
  fullName?: string;
  password: string;
  telefon?: string | null;
  sex?: string,
  characteristics?: string;
  isEmailConfirmated?: boolean;
  sessions?: number[]
}
