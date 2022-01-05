import React from 'react';
import './Contador.css';
import '../Button/Button';

const Contador = ({handlerSum,handlerRest,result,message}) => {

    return(
        <section className='section--counter'>
            <h1>Counter</h1>
            <div className="counter--display">
                <button className='counter--btn' onClick={handlerRest}>-</button>
                <div className='result'>{result}</div>
                <button className='counter--btn' onClick={handlerSum}>+</button>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </section>
    )
}

export default Contador