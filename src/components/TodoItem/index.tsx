import { RemoveButton } from "components/RemoveButton";
import { UpdateButton } from "components/UpdateButton/";
import { SaveButton } from "components/SaveButton";


import { ITodoItem, DispatchProps } from "types";

import "./style.scss";

export const TodoItem: React.FC<ITodoItem & DispatchProps> = ({
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
      <>
        <input
          className='todoItem__checkbox'
          type='checkbox'
          onChange={onToggleTodo}
          checked={completed}
        />
      </>
      {content}
      <div className='todoItem__buttons'>
        {button}
        <RemoveButton id={id} />
      </div>
    </li>
  );
};
