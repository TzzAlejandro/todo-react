import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {item: todos,
        saveItem: saveTodos,
         loading,
         error,
       } = useLocalStorage("TODOS_V1", []);
     
     // El primer elemento de la matriz estado contiene los valores del estado y el segundo contiene una funcion para actualizar el estado.
     
     const [searchValue, setSearchValue] = React.useState("");
     const [openModal, setOpenModal] = React.useState(false);
   
     const completedTodos = todos.filter(todo => !!todo.completed).length;
   
     const totalTodos = todos.length;
   
     let searchedTodos = [];
     if(!searchValue.length >= 1) {
       searchedTodos = todos;
     } else {
       searchedTodos = todos.filter(todo => {
         const todoText = todo.text.toLowerCase();
         const searchText = searchValue.toLowerCase();
         // Le decimos el criterio de respuesta con un return, en este caso queremos todos los todos que contengan el texto de busqueda.
         return todoText.includes(searchText)
       })
     }
   
     const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    }
   
     const toggleCompleteTodo = (text) => {
       const todoIndex = todos.findIndex(todo => todo.text === text);
       const newTodos = [...todos];
       newTodos[todoIndex].completed = newTodos[todoIndex].completed === false
        ? true : false;
       saveTodos(newTodos);
     }
   
     const deleteTodo = (text) => {
       const todoIndex = todos.findIndex(todo => todo.text === text);
       const newTodos = [...todos];
       newTodos.splice(todoIndex, 1);
       saveTodos(newTodos);
     }
   
     
   
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };