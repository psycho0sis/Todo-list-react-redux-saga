import { TodoItem } from "components/TodoItem";

import { Todo } from "store/types";

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map((item: Todo) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
    </ul>
  );
};
