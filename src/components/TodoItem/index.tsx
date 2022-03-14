import { Dispatch, SetStateAction } from "react";
import { connect } from "react-redux";
import { Action } from "redux";

import { RemoveButton } from "components/RemoveButton";
import { UpdateButton } from "components/UpdateButton/";
import { SaveButton } from "components/SaveButton";

import { toggleEditing, toggleTodo, updateTodo } from "store/actions/actions";
import { ITodo, ITodoItem, DispatchProps } from "types";

import "./style.scss";

const TodoItem: React.FC<ITodoItem & DispatchProps> = ({
  onToggleTodo,
  onToggleIsEditing,
  onUpdateTodo,
  todo: { id, title, completed, isEditing },
}) => {
  const content = isEditing ? (
    <input className='todoItem__input' value={title} onChange={onUpdateTodo} />
  ) : (
    <p className='todoItem__text'>{title}</p>
  );

  const button = isEditing ? (
    <SaveButton onToggleIsEditing={onToggleIsEditing} />
  ) : (
    <UpdateButton onToggleIsEditing={onToggleIsEditing} />
  );

  return (
    <li className={completed && !isEditing ? "todoItem completed" : "todoItem"}>
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
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  key: { todo: ITodo }
) => {
  const id: number = key.todo.id;

  return {
    onToggleTodo: () => {
      dispatch(toggleTodo(id));
    },
    onToggleIsEditing: () => dispatch(toggleEditing(id)),
    onUpdateTodo: (e: { target: { value: SetStateAction<string> } }) =>
      dispatch(updateTodo(id, e)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
