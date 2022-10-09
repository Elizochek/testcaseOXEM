import {Button} from "./components/Button/Button"
import {Input} from "./components/Input/Input"
import {useState} from "react"
import 'boxicons/css/boxicons.min.css';
import './/App.scss';

function App(){
  const [price, setPrice]=useState("1000000")
  const [pay, setPay]=useState(0.1*Number(price))
  const [liz, setLiz]=useState("1")
  const [loading, setLoading] = useState(false);

  function handlePrice (value){
    setPrice(value)
}
function handlePay (value){
  setPay(value)
}
function handleLiz (value){
  setLiz(value)
}
function monthPay() {
  return Math.ceil((Number(price) - Number(pay)) * ((0.035 * Math.pow((1 + 0.035), Number(liz))) / (Math.pow((1 + 0.035), Number(liz)) - 1)))
}
const mPay = monthPay()
function sum () {
  return Math.ceil(Number(pay) + Number(liz) * Number(mPay))
}
const totalSum = sum()

function percent () {
  return Math.ceil(Number(pay)/Number(price)*100)+"%"
}
const per = percent ()
const enabled=
Number(price)>1000000 &&
Number(pay)>100000 && Number(liz)>0;

const buttontext= loading?" ": "Оставить заявку"

  return (

    <div className="App"> 
    <style type="text/css">{`
        @font-face {
          font-family:'Nekst Black';
          src: url(${require('./fonts/Nekst-Black.woff2')}) format('woff2');
          @font-face {
            font-family:'Gilroy';
            src: url(${require('./fonts/Gilroy-Regular.woff2')}) format('woff2')

        `}</style>
    <div className="name">Рассчитайте стоимость автомобиля в лизинг</div>
      <Input 
     name="Стоимость автомобиля" 
     type="range" 
     min="1000000" 
     max="6000000" 
     onChange={handlePrice} 
     step="100000" 
     test="&#8381;"
     placeholder={price}
     disabled={loading}
     theme={loading ? "disabled" : "nochange"}/>
      <Input 
      name="Первоначальный взнос" 
      type="range" 
      min={0.1*Number(price)}
      max={price} 
      onChange={handlePay} 
      step="10000" 
      test={per}
      placeholder={pay}
      disabled={loading}
      theme={loading ? "disabled" : " "}/>
      
      <Input 
      name="Срок лизинга" 
      type="range" 
      min="1" 
      max="70" 
      onChange={handleLiz} 
      step="1" 
      test="мес."
      placeholder={liz}
      disabled={loading}
      theme={loading ? "disabled" : "nochange"}/>
        <div className="test"> 
        <p> Сумма договора лизинга </p>
        <h1>{totalSum}&#8381;</h1>
        </div>
        <div className="test">
          <p>Ежемесячный платёж от </p>
          <h1>{mPay}&#8381; </h1>
          </div>
      <Button 
       loading={loading}
       onClick={() => setLoading(!loading)}
      title={buttontext}
      disabled={!enabled}/>
    </div>
  )
}

export default App;
