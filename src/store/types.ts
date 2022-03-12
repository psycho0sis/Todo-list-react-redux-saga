export interface Todo {
  title: string;
  completed: boolean;
  id: number;
  userId: number;
}

export interface ITodoList {
  todos: Todo[];
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
