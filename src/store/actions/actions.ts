import { Todo } from "../types";

import {
  ADD_TODO,
  GET_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "./actionsTypes";

export function getTodos(payload: Todo[]) {
  return { type: GET_TODOS, payload };
}

export function addTodo(todo: Todo) {
  return { type: ADD_TODO, payload: todo };
}

export function toggleTodo(id: Todo["id"]) {
  return { type: TOGGLE_TODO, payload: id };
}

export function removeTodo(id: Todo["id"]) {
  return { type: REMOVE_TODO, payload: id };
}

export function updateTodo(id: Todo["id"]) {
  return { type: UPDATE_TODO, payload: id };
}
