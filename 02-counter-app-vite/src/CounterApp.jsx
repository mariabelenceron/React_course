import { useState } from 'react'  //Hook

import PropTypes from 'prop-types'



// Functional Component
export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value)
    
    const handleAdd = () => {
        // setCounter(counter + 1)
        setCounter((c) => c + 1)
    }
    
    const handleSubtract = () => setCounter(counter - 1)
    
    const handleReset = () => setCounter(value)

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleSubtract }>-1</button>
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}


// Configuraciones
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}