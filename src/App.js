import './App.css';
import Add from './Assets/Add.svg';
import Del from './Assets/Del.svg';
import { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])
    
    const handleInput = (e)=>{
        setInputValue(e.target.value)
    }
    const hanldeAddTodos = ()=>{
        if(inputValue.trim() !== ""){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }
    
    const handleDeleteTodo = (index)=>{
        const updatedTodos = todos.filter((_, i) => i !== index)
        setTodos(updatedTodos)
    }
  return (
    <div className="App">
        <header>
            <h1>Todo List</h1>
            <div className="check">
                <input type="text" 
                value={inputValue} 
                onChange={handleInput}
                placeholder="Digite sua tarefa..." />
                
                <button onClick={hanldeAddTodos}>
                    <img src={Add} alt="Icone de adicionar" />
                </button>
            </div>
        </header>
    
        <ol>
            { todos.map((todo, index) => (
                <li key={index}> 
                    { todo } 
                    <button onClick={()=> handleDeleteTodo(index)}>
                        <img src={Del} alt="icone svg de apagar"/>
                    </button>
                </li>
            )) }
        </ol>
        
    </div>
  );
}

export default App;
