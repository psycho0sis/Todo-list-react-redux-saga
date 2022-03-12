import { AnyAction } from "redux";
import { Todo } from "store/types";
import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS,
  TOGGLE_TODO,
} from "../actions/actionsType";

const reducer = (state: Todo[] = [], action: AnyAction) => {
  switch (action.type) {
    case GET_TODOS: {
      return [...state, ...action.payload];
    }
    case ADD_TODO: {
      // console.log(state, action.payload);
      return [...state, action.payload];
    }
    case REMOVE_TODO: {
      // console.log(state.filter((todo) => todo.id !== action.payload));
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
