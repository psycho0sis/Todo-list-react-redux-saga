import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "store/actions/actions";

import { ITodo } from "types";

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          focusable='false'
          viewBox='0 0 12 12'
        >
          <path
            stroke='#ffffff'
            strokeLinecap='round'
            strokeWidth='2'
            d='M6 2v8m4-4H2'
          />
        </svg>
      </button>
    </div>
  );
};
