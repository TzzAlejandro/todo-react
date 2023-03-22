import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Añade un nuevo TODO!</label>
            <textarea placeholder="Descubrir SEXO 2" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };