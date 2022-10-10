import { Calc } from "./components/Calc/Calc";
import "boxicons/css/boxicons.min.css";
import ".//App.scss";

function App() {
  return (
    <div className="App">
      <style type="text/css">{`
        @font-face {
          font-family:'Nekst Black';
          src: url(${require("./fonts/Nekst-Black.woff2")}) format('woff2');
          @font-face {
            font-family:'Gilroy';
            src: url(${require("./fonts/Gilroy-Regular.woff2")}) format('woff2')

        `}</style>
      <Calc/>
    </div>
  );
}

export default App;
