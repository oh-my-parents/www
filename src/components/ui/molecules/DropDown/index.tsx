import $ from "./index.module.scss";
import drop from "/images/drop.svg";
import Icon from "../../atoms/Icon/Icon";
import Modal from "./Modal";
import { useState } from "react";

export default function DropDown() {
  const age = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  const [click, setClick] = useState(1);
  const [state, setState] = useState(false);

  const onClickDropDown = () => {
    setState(!state);
  };

  return (
    <div className={$.dropDown}>
      <div onClick={onClickDropDown} className={$.dropDownBody}>
        <strong>{click}</strong>
        <Icon src={drop} size="small" variant="default" />
      </div>
      {state && <Modal setState={setState} setClick={setClick} array={age} />}
    </div>
  );
}
