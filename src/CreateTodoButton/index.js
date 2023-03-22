import React from 'react';
import './CreateTodoButton.css'
import "../Modal"

function CreateTodoButton(props) {
    const onClickButton = () => {
        // Todos los actualizadores de estado tiene un prevState que es el estado previo, por lo que en este caso podemos usar el estado anterior que es false para cambiarlo a true y switchear entre estos dos cada que llamemos al onClick.
       props.setOpenModal(prevState => !prevState);
    };
    return (
        <button
        className='CreateTodoButton'
        onClick={onClickButton}>+</button>
        )
}

export { CreateTodoButton };