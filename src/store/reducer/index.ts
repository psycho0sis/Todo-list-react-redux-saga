import { AnyAction } from "redux";

import { Todo } from "store/types";
import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS,
  TOGGLE_TODO,
} from "store/actions/actionsTypes";

const reducer = (state: Todo[] = [], action: AnyAction) => {
  switch (action.type) {
    case GET_TODOS: {
      return [...state, ...action.payload];
    }
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case REMOVE_TODO: {
      return [...state.filter((todo) => todo.id !== action.payload)];
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return state;
  }
};

export default reducer;
