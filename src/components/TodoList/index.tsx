import TodoItem from "../TodoItem";

import { Todo } from "../../store/types";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map((item: Todo) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
    </ul>
  );
};

export default TodoList;
