import React, {useState} from "react";
import { Button } from "reactstrap";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim() !== "") {
      setTask([...task, input]);
      setInput(""); 
    }
  };

  const del=(index)=>{
  console.log(index);
     setTask(task.filter((_,i)=>i!=index))

  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}> {/* Wrap your input and button with a form */}
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit">+</Button> {/* Use type="submit" for the button */}
          </div>
        </form>
        <div>
          {task?.map((item, index) => (
            <>
            <h1 key={index}>{item}</h1>
            <Button onClick={()=>del(index)}>DELETE</Button>
            </>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
