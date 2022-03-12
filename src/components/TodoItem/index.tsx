import React from "react";
import { useDispatch } from "react-redux";

import RemoveButton from "./RemoveButton";
import UpdateButton from "./UpdateButton";

import { Todo } from "../../store/types";

import "./style.scss";
import { toggleTodo } from "../../store/actions";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const onToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      className='todoItem'
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <div className=''>
        <input
          className='todoItem__checkbox'
          type='checkbox'
          onChange={() => onToggleTodo(todo.id)}
          checked={todo.completed}
        />
      </div>
      <p className={"todoItem__text"}>{todo.title}</p>
      <div className='todoItem__buttons'>
        <UpdateButton />
        <RemoveButton id={todo.id} />
      </div>
    </li>
  );
};

export default TodoItem;
