import React from 'react';
import "./Todo.css";


function Todo(props) {
  console.log(props)
  return (
    
    <div className="class-list"  >
        <h3 onClick={() => props.flip(props.id)} className = {props.tdProp.completed == true ? 'line' : ''}>{props.tdProp.task}</h3>
        <p>
        <strong>ID:</strong> {props.id} {props.tdProp.completed}
        </p>
        
  </div>



  );
}

export default Todo;
