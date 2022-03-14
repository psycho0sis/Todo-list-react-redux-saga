import { createSelector } from "reselect";

import { RootState } from "store/store";

const selectTodos = (state: RootState) => state.todos;

export const getTodoSelector = createSelector([selectTodos], (todos) => todos);
