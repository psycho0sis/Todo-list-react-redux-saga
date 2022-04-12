import { IMouseEvent } from "types";

import updateBtn from "assets/updateBtn.svg"

import "styles.scss";

export const UpdateButton: React.FC<IMouseEvent> = ({ onToggleIsEditing }) => {
  return (
    <button type='button' className='button pink' onClick={onToggleIsEditing}>
      <img src={updateBtn} alt="Save"/>
    </button>
  );
};
