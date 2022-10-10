import "./Input.scss";
import { useState } from "react";
import classNames from "classnames";

export function Input(props) {
  const [num, setNum] = useState(0);

  function handleChange(event) {
    props.onChange(event.currentTarget.value);
    setNum(event.currentTarget.value);
  }
  const DetailsClass = classNames(
    "details",
    { details__disabled: props.theme === "disabled" },
    { details__nochange: props.theme === "nochange" }
  );

  return (
    <div className="fields">
      <p>{props.name}</p>
      <input
        className="text"
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
        disabled={props.disabled}
      />
      <input
        className="range"
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        type="range"
        value={num}
        onChange={handleChange}
        disabled={props.disabled}
      />
      <div className={DetailsClass}>{props.designation}</div>
    </div>
  );
}
