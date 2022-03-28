import { IMouseEvent } from "types";

import saveBtn from "assets/saveBtn.svg"

import "styles.scss";

export const SaveButton: React.FC<IMouseEvent> = ({ onToggleIsEditing }) => {
  return (
    <button type='button' className='button orange' onClick={onToggleIsEditing}>
      <img src={saveBtn} alt="Save"/>
    </button>
  );
};
