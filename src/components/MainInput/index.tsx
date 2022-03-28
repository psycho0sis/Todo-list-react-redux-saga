import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "actions/actions";

import { ITodo } from "types";

import addTodoBtn from "assets/addTodoBtn.svg"

import "./style.scss";

export const MainInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const addBtn = () => {
    const todo: ITodo = {
      title: value,
      completed: false,
      id: Date.now(),
      isEditing: false,
    };

    if (value !== "") {
      dispatch(addTodo(todo));
    }

    setValue("");
  };

  return (
    <div className='mainInput'>
      <input
        value={value}
        className='mainInput__input'
        placeholder='Enter smth...'
        onChange={onChangeInput}
      />

      <button type='button' className='mainInput__button' onClick={addBtn}>
      <img src={addTodoBtn} alt="Add"/> 
      </button>
    </div>
  );
};
