import React, { SetStateAction, memo } from "react";
import { useDispatch } from "react-redux";

import { RemoveButton } from "components/RemoveButton";
import { UpdateButton } from "components/UpdateButton/";
import { SaveButton } from "components/SaveButton";

import { toggleEditing, toggleTodo, updateTodo } from "store/actions/actions";
import { ITodoItem } from "types";

import "./style.scss";

export const TodoItem: React.FC<ITodoItem> = memo(
  ({ todo: { id, title, completed, isEditing } }) => {
    const dispatch = useDispatch();

    const onToggleTodo = () => dispatch(toggleTodo(id));

    const toggleIsEditing = () => dispatch(toggleEditing(id));

    const onUpdateTodo = (e: { target: { value: SetStateAction<string> } }) =>
      dispatch(updateTodo(id, e));

    const content = isEditing ? (
      <input
        className='todoItem__input'
        value={title}
        onChange={onUpdateTodo}
      />
    ) : (
      <p className='todoItem__text'>{title}</p>
    );

    const button = isEditing ? (
      <SaveButton toggleIsEditing={toggleIsEditing} />
    ) : (
      <UpdateButton toggleIsEditing={toggleIsEditing} />
    );

    return (
      <li
        className={completed && !isEditing ? "todoItem completed" : "todoItem"}
      >
        <div className=''>
          <input
            className='todoItem__checkbox'
            type='checkbox'
            onChange={onToggleTodo}
            checked={completed}
          />
        </div>
        {content}
        <div className='todoItem__buttons'>
          {button}
          <RemoveButton id={id} />
        </div>
      </li>
    );
  }
);
