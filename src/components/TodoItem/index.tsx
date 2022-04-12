import { RemoveButton } from "components/RemoveButton";
import { UpdateButton } from "components/UpdateButton/";
import { SaveButton } from "components/SaveButton";


import { ITodoItem, IDispatchProps } from "types";

import "./style.scss";

export const TodoItem: React.FC<ITodoItem & IDispatchProps> = ({
  onToggleTodo,
  onToggleIsEditing,
  onUpdateTodo,
  todo
}) => {
  const { id, title, completed, isEditing } = todo;

  return (
    <li className={completed && !isEditing ? "todoItem completed" : "todoItem"}>
      <>
        <input
          className='todoItem__checkbox'
          type='checkbox'
          onChange={onToggleTodo}
          checked={completed}
        />
      </>
      {isEditing ? (
        <input className='todoItem__input' value={title} onChange={onUpdateTodo} />
      ) : (
        <p className='todoItem__text'>{title}</p>
      )}
      <div className='todoItem__buttons'>
        {isEditing ? (
        <SaveButton onToggleIsEditing={onToggleIsEditing} />
      ) : (
        <UpdateButton onToggleIsEditing={onToggleIsEditing} />
      )}
        <RemoveButton id={id} />
      </div>
    </li>
  );
};
