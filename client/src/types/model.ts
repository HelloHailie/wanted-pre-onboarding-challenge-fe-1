export interface TodoMD {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IToken {
  access_token: string;
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}

export type TNavigate = (to: string) => void;

export interface ILoadingBar {
  isLoading: boolean;
}

export interface ToDoContent {
  title: string;
  content: string;
}
export interface ToDoContentAndId {
  id: string | undefined;
  data: ToDoContent;
}
