import Form from 'react-bootstrap/Form';
import './App.css';
import ToDoList from './ToDoList';
import { useState } from 'react';
function App() {


const [list,setlist] = useState ([]);
const [todo, settodo] = useState ("");

const handletodo = (e) =>{
e.preventDefault();

settodo(e.target.value);
}

const handleadd = (e) =>{

  setlist((prev) => [...prev, todo])
  settodo("");

};
console.log(list)

  return (
    <div className="App">
    <h1>TODO APP</h1>
    <Form.Control value = {todo} onChange = {handletodo} /><button onClick={handleadd} > Add </button>
    <ToDoList list = {list}/>
    </div>
  );
}

export default App;
