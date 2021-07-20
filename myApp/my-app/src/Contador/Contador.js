import React, {Fragment} from 'react'
import './Contador.css'
import '../Button/Button'
import Button from '../Button/Button'

const Contador = ({handlerSum,handlerRest,result,message}) => {

    return(
        <Fragment>
            <div className="div">
                <Button text="-" handlerClick={handlerRest} />
                <div>{result}</div>
                <Button text="+" handlerClick={handlerSum}/>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </Fragment>
    )
}

export default Contador