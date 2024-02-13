
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Calculadora from "./components/Calculadora";
import CalculadoraCompleta from "./components/CalculadoraCompleta";

export  default  function App() {

    const username = "Izai Vanegas De jeronimo";

    return (
      <div>
          <Header/>
          <CalculadoraCompleta/>
          <Footer/>
      </div>

    );

}


