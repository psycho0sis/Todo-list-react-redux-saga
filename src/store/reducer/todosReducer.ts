import { AnyAction } from "redux";

import { ITodo } from "types";
import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
  IS_EDIT,
} from "store/actions/actionsTypes";

export const todosReducer = (state: ITodo[] = [], action: AnyAction) => {
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
    case UPDATE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, title: action.value } : todo
      );
    }
    case IS_EDIT: {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
    }
    default:
      return state;
  }
};
