import $ from "./index.module.scss";
import drop from "/images/drop.svg";
import Icon from "../../atoms/Icon/Icon";
import Modal from "./Modal";

type Props = {
  array: number[];
  click: number;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setClick: React.Dispatch<React.SetStateAction<number>>;
};
export default function DropDown({
  array,
  click,
  setClick,
  state,
  setState,
}: Props) {
  const onClickDropDown = () => {
    setState(!state);
  };

  return (
    <div className={$.dropDown}>
      <div onClick={onClickDropDown} className={$.dropDownBody}>
        <strong>{click}</strong>
        <Icon src={drop} size="small" variant="default" />
      </div>
      {state && <Modal setState={setState} setClick={setClick} array={array} />}
    </div>
  );
}
