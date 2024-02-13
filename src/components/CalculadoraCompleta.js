import {useState} from "react";



const CalculadoraCompleta = () =>{
const[resultado, setResultado] = useState(0);
const[operacion,setOperacion] = useState("@");
const[numeroA, setNumeroA]= useState("0");
const[numeroB, setNumeroB]= useState("0");
const[closeNumber, setCloseNumber] = useState(false);



   function evaluaClic(valor){
        console.log("In:"+ valor);
        if( isOperator(valor) ){
            console.log("Este es operador");
            if( closeNumber ){
                console.log("El primer numero esta cerrado");
                if( isEqual(valor)){
                    console.log("Es igual!!!!");
                    console.log(numeroA +" "+operacion+" " +numeroB);
                    setResultado(doOperation(numeroA,numeroB,operacion));
                    setNumeroA("0");
                    setNumeroB("0");
                    setOperacion("@");
                    setCloseNumber(false);
                }else{
                    if( operacion == valor){
                        console.log("Se pulso el mismo operador, no sehace nada");
                    }else{
                            console.log("Se cambio el operador:"+valor);
                            setOperacion(valor);
                            setNumeroB("0");
                            console.log("Se resetea el valor de numeroB.....")
                    }
                }
            }else{
                console.log("se cierra primer numero: " + numeroA);
                setCloseNumber(true);
                setResultado(parseInt(numeroA,10));
                setOperacion(valor);
            }

        }else{
            if( !closeNumber ){
                setNumeroA(numeroA+valor);
                console.log("Este es numeroAA:"+numeroA);
                setResultado(parseInt(numeroA,10))
            }else{
                setNumeroB(numeroB+valor);
                console.log("Este es numeroB:"+numeroB);
                setResultado(parseInt(numeroB,10))
            }

        }




    }


    function doOperation(numberA , numberB, operator){
       switch (operator){
           case '+':
               return parseInt(numberA, 10)+ parseInt(numberB,10);
           case '-':
               return parseInt(numberA, 10)- parseInt(numberB,10);
           case '*':
               return parseInt(numberA, 10)* parseInt(numberB,10);
           case '/':
               return parseInt(numberA, 10)/ parseInt(numberB,10);
           default:
               return 0;


       }

    }


    function isOperator(value){
        switch(value){
            case '+':
                return true;
            case '-':
                return true;
            case '*':
                return true;
            case '/':
                return true;
            case '=': return true;
            default:
                return false;
        }
    }

    /**
     * Verifica si es un igual
     * @param value
     * @returns {boolean}
     */
     function isEqual(value){
       return ( value == "=" )? true:false ;
     }

return(
 <div className="App" >
     <p>{resultado}</p>
     <button className="button" onClick={()=>evaluaClic('1')} >1</button>
     <button className="button" onClick={()=>evaluaClic('2')} >2</button>
     <button className="button" onClick={()=>evaluaClic('3')} >3</button><br/>
     <button className="button" onClick={()=>evaluaClic('4')}>4</button>
     <button className="button" onClick={()=>evaluaClic('5')}>5</button>
     <button className="button" onClick={()=>evaluaClic('6')}>6</button><br/>
     <button className="button" onClick={()=>evaluaClic('7')}>7</button>
     <button className="button" onClick={()=>evaluaClic('8')}>8</button>
     <button className="button" onClick={()=>evaluaClic('9')}>9</button><br/>
     <button className="button" onClick={()=>evaluaClic('+')}>+</button>
     <button className="button" onClick={()=>evaluaClic('0')}>0</button>
     <button className="button" onClick={()=>evaluaClic('-')}>-</button><br/>
     <button className="button" onClick={()=>evaluaClic('*')}>*</button>
     <button className="button" onClick={()=>evaluaClic('/')}>/</button>
     <button className="button" onClick={()=>evaluaClic('=')}>=</button>

 </div>
);

}
export default CalculadoraCompleta;