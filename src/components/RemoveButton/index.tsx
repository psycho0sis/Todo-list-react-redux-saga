import { useDispatch } from "react-redux";

import { removeTodo } from "actions/actions";
import { IId } from "types";

import removeBtnIcon from "assets/removeBtn.svg"

import "styles.scss";

export const RemoveButton: React.FC<IId> = ({ id }) => {
  const dispatch = useDispatch();

  const removeBtn = () => dispatch(removeTodo(id));

  return (
    <button type='button' className='button' onClick={removeBtn}>
      <img src={removeBtnIcon} alt="Remove"/>
    </button>
  );
};
