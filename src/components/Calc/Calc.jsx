import "../Calc/Calc.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useState } from "react";
import { getData } from "../../rest";

export function Calc() {
  const [price, setPrice] = useState(1000000);
  const [pay, setPay] = useState(0.1 * price);
  const [month, setMonth] = useState(1);
  const [loading, setLoading] = useState(false);

  const enabled = price > 1000000 && pay > 100000 && month > 0;
  const buttontext = loading ? " " : "Оставить заявку";

  function handleSubmit() {
    setLoading(!loading);
  }
  //     const data=getData({
  //         "car_coast":price,
  //         "initail_payment":pay,
  //         "initail_payment_percent": per,
  //         "lease_term": month,
  //         "total_sum": totalSum,
  //         "monthly_payment_from": mPay
  //       })
  //       if(data.success===true) {setLoading(false)}

  //   }

  function handlePrice(value) {
    setPrice(value);
  }
  function handlePay(value) {
    setPay(value);
  }
  function handleMonth(value) {
    setMonth(value);
  }

  function monthPay() {
    return Math.ceil(
      (price - pay) *
        ((0.035 * Math.pow(1 + 0.035, month)) /
          (Math.pow(1 + 0.035, month) - 1))
    );
  }
  const mPay = monthPay();

  function sum() {
    return Math.ceil(Number(month)*Number(mPay)+Number(pay));
  }
  const totalSum = sum();

  function persent() {
    return Math.ceil(pay/price*100)
  }
  const per=persent()

  return (
    <>
      <div className="name">Рассчитайте стоимость автомобиля в лизинг</div>
      <Input
        name="Стоимость автомобиля"
        type="range"
        minValue={1000000}
        maxValue={6000000}
        min={1000000}
        max={6000000}
        onChange={handlePrice}
        step={100000}
        designation="&#8381;"
        defoultValue={price}
        disabled={loading}
        theme={loading ? "disabled" : "nochange"}
      />
      <Input
        name="Первоначальный взнос"
        minValue={0.1 * price}
        maxValue={0.6*price}
        defoultValue={0.1 * price}
        min={0.1 * price}
        max={0.6 * price}
        onChange={handlePay}
        step={0.01 * price}
        designation={per + "%"}
        disabled={loading}
        theme={loading ? "disabled" : " "}
      />

      <Input
        defoultValue={month}
        name="Срок лизинга"
        minValue={1}
        maxValue={60}
        min={1}
        max={60}
        onChange={handleMonth}
        step={1}
        designation="мес."
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
