import { createSelector } from "reselect";

import { RootState } from "store/store";
import { ITodo } from "types";

const selectTodos = (state: RootState) => state.todos;

export const getFormattedTodos = createSelector(selectTodos, (todos) =>
  todos.map((todo: ITodo) => ({ ...todo, isEditing: false }))
);
