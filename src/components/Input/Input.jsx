import "./Input.scss";
import { useState } from "react";
import classNames from "classnames";

export function Input(props) {
  const [num, setNum] = useState(props.defoultValue);

  function handleChange(event) {
    validate(event.currentTarget.value);
  }
  function handleChange1(event) {
    props.onChange(event.currentTarget.value);
    setNum(event.currentTarget.value);
  }
  function validate(value) {
    if (value < props.minValue) {
      props.onChange(props.minValue);
      setNum(props.minValue);
    } else if (value > props.maxValue) {
      props.onChange(props.maxValue);
      setNum(props.maxValue);
    } else {
      props.onChange(value);
      setNum(value);
    }
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
        value={num}
        name={props.name}
        type="number"
        onChange={handleChange1}
        disabled={props.disabled}
        onBlur={handleChange}
      />
      <input
        className="range"
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        type="range"
        value={num}
        onChange={handleChange1}
        disabled={props.disabled}
      />
      <div className={DetailsClass}>{props.designation}</div>
    </div>
  );
}
