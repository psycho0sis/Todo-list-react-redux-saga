import { getTodos } from "./actions";

export const fetchTodos = () => {
  return function (dispatch: Function) {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => dispatch(getTodos(json.slice(0, 5))));
  };
};
