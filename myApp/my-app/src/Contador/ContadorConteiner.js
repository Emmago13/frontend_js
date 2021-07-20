import React,{useState} from 'react'
import Contador from './Contador'

const ContadorConteiner = () => {
    const [result, setResult] = useState(0)
    const [message, setMessage] = useState("")

    const handlerSum = () =>{
        if (result<20) {
            setMessage("")
            setResult(result+1)
        }else{
            setMessage("No se puede sumar más")
        }
    }
    const handlerRest = () =>{
        if (result>0) {
            setMessage("")
            setResult(result-1)
        }else{
            setMessage("No se puede restar más")
        }
    }

    // const handlerContador = (operacion) => {
    //     operacion === "+" ? setResult(result+1) : setResult(result-1)
    // }



    return(
        <Contador handlerSum={handlerSum} handlerRest={handlerRest} result={result} message={message} />
    )
}

export default ContadorConteiner;