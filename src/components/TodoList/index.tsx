import { TodoItem } from "components/TodoItem";

import { ITodoList, Todo } from "store/types";

export const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map((item: Todo) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
    </ul>
  );
};
