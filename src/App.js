import {Button} from "./components/Button/Button"
import {Input} from "./components/Input/Input"
import {useState} from "react"
import 'boxicons/css/boxicons.min.css';
import './/App.scss';

function App(){
  const [price, setPrice]=useState("500000")
  const [pay, setPay]=useState("50000")
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
function sum () {
  return Number(price)+Number(pay)
}
const s = sum()
function percent () {
  return Math.ceil(Number(pay)/Number(price)*100)+"%"
}
const per = percent ()
const enabled=
Number(price)>500000 &&
Number(pay)>50000 && Number(liz)>0;

const buttontext= loading?" ": "Оставить заявку"

  return (

    <div className="App"> 
    <div className="name"> <h1> Рассчитайте стоимость автомобиля в лизинг </h1></div>
      <Input 
     name="Стоимость автомобиля" 
     type="range" 
     min="500000" 
     max="5000000" 
     onChange={handlePrice} 
     step="10000" 
     test="₽"
     placeholder={price}/>
      <Input 
      name="Первоначальный взнос" 
      type="range" 
      min="50000" 
      max={price} 
      onChange={handlePay} 
      step="1000" 
      test={per}
      placeholder={pay}/>
      
      <Input 
      name="Срок лизинга" 
      type="range" 
      min="1" 
      max="70" 
      onChange={handleLiz} 
      step="1" 
      test="мес."
      placeholder={liz}/>
        <div className="test"> 
        <p> Сумма договора лизинга </p>
        <h1> {s}₽</h1>
        </div>
        <div className="test">
          <p>Ежемесячный платёж от </p>
          <h1>{pay}₽</h1>
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
