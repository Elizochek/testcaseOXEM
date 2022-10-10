import "../Calc/Calc.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useState } from "react";
import { getData } from "../../rest";

export function Calc() {
  const [price, setPrice] = useState(1000000);
  const [pay, setPay] = useState(0.1);
  const [liz, setLiz] = useState(1);
  const [loading, setLoading] = useState(false);

  const enabled = price > 1000000 && pay > 0.1 && liz > 0;
  const buttontext = loading ? " " : "Оставить заявку";

  function handleSubmit() {
    setLoading(!loading);
  }
  //     const data=getData({
  //         "car_coast":price,
  //         "initail_payment": 400000,
  //         "initail_payment_percent": 10,
  //         "lease_term": 24,
  //         "total_sum": 5000000,
  //         "monthly_payment_from": 30000
  //       })
  //       if(data.success===true) {setLoading(false)}

  //   }

  function handlePrice(value) {
    setPrice(value);
  }
  function handlePay(value) {
    setPay(value);
  }
  function handleLiz(value) {
    setLiz(value);
  }
  function initialPay() {
    return Math.ceil(pay * price);
  }
  const iPay = initialPay();

  function monthPay() {
    return Math.ceil(
      (price - iPay) *
        ((0.035 * Math.pow(1 + 0.035, liz)) / (Math.pow(1 + 0.035, liz) - 1))
    );
  }
  const mPay = monthPay();

  function sum() {
    return Math.ceil(iPay + liz * mPay);
  }
  const totalSum = sum();

  return (
    <>
      <div className="name">Рассчитайте стоимость автомобиля в лизинг</div>
      <Input
        name="Стоимость автомобиля"
        type="range"
        min={1000000}
        max={6000000}
        onChange={handlePrice}
        step={100000}
        designation="&#8381;"
        placeholder={price}
        disabled={loading}
        theme={loading ? "disabled" : "nochange"}
      />
      <Input
        name="Первоначальный взнос"
        type="range"
        min={0.1}
        max={0.6}
        onChange={handlePay}
        step={0.01}
        designation={Math.ceil(pay * 100) + "%"}
        placeholder={iPay}
        disabled={loading}
        theme={loading ? "disabled" : " "}
      />

      <Input
        name="Срок лизинга"
        type="range"
        min={1}
        max={60}
        onChange={handleLiz}
        step={1}
        designation="мес."
        placeholder={liz}
        disabled={loading}
        theme={loading ? "disabled" : "nochange"}
      />
      <div className="title">
        <p>Сумма договора лизинга</p>
        <h1>{totalSum}&#8381;</h1>
      </div>
      <div className="title">
        <p>Ежемесячный платёж от </p>
        <h1>{mPay}&#8381; </h1>
      </div>
      <Button
        loading={loading}
        onClick={handleSubmit}
        title={buttontext}
        disabled={!enabled}
      />
    </>
  );
}
