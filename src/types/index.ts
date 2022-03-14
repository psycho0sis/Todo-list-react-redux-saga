import { SetStateAction } from "react";

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
  onToggleIsEditing: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DispatchProps {
  onToggleTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleIsEditing: () => void;
  onUpdateTodo: (e: { target: { value: SetStateAction<string> } }) => void;
}
