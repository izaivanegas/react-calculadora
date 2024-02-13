import {useState} from "react";


const Calculadora = ()=>{
    const [count, setCount] = useState(0);


    function andleAdd(){
        setCount(count+1);
        console.log("Esto es:"+count);
    }
    function andledSub(){
        setCount(count-1);
    }


    return(
        <div className="box">
            <p>{count}</p>
            <button onClick={andleAdd} className="add" >Add</button>
            <button onClick={andledSub} className="sub">Sub</button>
        </div>
    );

}

export default Calculadora;