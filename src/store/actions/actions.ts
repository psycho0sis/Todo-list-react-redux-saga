import { SetStateAction } from "react";

import { ITodo } from "../../types";

import {
  ADD_TODO,
  GET_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  IS_EDIT,
} from "./actionsTypes";

export function getTodos(payload: ITodo[]) {
  return { type: GET_TODOS, payload };
}

export function addTodo(todo: ITodo) {
  return { type: ADD_TODO, payload: todo };
}

export function toggleTodo(id: ITodo["id"]) {
  return { type: TOGGLE_TODO, payload: id };
}

export function removeTodo(id: ITodo["id"]) {
  return { type: REMOVE_TODO, payload: id };
}

export function updateTodo(
  id: ITodo["id"],
  e: { target: { value: SetStateAction<string> } }
) {
  return { type: UPDATE_TODO, payload: id, value: e.target.value };
}

export function toggleEditing(id: ITodo["id"]) {
  return { type: IS_EDIT, payload: id };
}
