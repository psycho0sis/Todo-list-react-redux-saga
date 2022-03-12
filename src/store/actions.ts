import { Todo } from "./types";

export const GET_TODOS = "GET_TODO";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

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
