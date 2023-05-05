import $ from "./index.module.scss";

type Props = {
  array: number[] | string[];
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setClick: React.Dispatch<React.SetStateAction<number>>;
};

export default function Modal({ setState, setClick, array }: Props) {
  const onClickModal = (e: any) => {
    setState(false);
    setClick(e);
  };
  return (
    <div className={$.dropDownModalDiv}>
      {array.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickModal(item)}
            className={$.dropDownModal}
          >
            <strong>{item}</strong>
          </div>
        );
      })}
    </div>
  );
}
