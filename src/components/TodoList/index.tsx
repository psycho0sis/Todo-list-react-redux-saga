import { TodoItem } from "components/TodoItem";

import { ITodoList, ITodo } from "types";

export const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo: ITodo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </ul>
  );
};
