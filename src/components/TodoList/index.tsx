import TodoItem from "components/TodoItem/container";

import { ITodoList, ITodo } from "types";

export const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos?.map((item: ITodo) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
    </ul>
  );
};
