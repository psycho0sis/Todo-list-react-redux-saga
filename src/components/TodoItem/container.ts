import { Dispatch, SetStateAction } from "react";
import { connect } from "react-redux";
import { Action } from "redux";

import  {TodoItem}  from ".";

import { toggleEditing, toggleTodo, updateTodo } from "actions/actions";
import { ITodo } from "types";

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