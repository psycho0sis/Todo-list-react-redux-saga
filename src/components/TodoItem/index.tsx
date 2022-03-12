import React from "react";
import { useDispatch } from "react-redux";

import { RemoveButton } from "components/RemoveButton";
import { UpdateButton } from "components/UpdateButton/";

import { Todo } from "store/types";
import { toggleTodo } from "store/actions/actions";

import "./style.scss";
interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { id, title, completed } = todo;
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
          onChange={() => onToggleTodo(id)}
          checked={completed}
        />
      </div>
      <p className={"todoItem__text"}>{title}</p>
      <div className='todoItem__buttons'>
        <UpdateButton />
        <RemoveButton id={id} />
      </div>
    </li>
  );
};
