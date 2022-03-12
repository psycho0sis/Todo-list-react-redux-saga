export interface ITodo {
  title: string;
  completed: boolean;
  id: number;
  isEditing: boolean;
}
export interface ITodoList {
  todos: ITodo[];
}
export interface ITodoItem {
  todo: ITodo;
}

export interface IId {
  id: number;
}

export interface IMouseEvent {
  toggleIsEditing: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
