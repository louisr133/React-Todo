import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {
  // console.log(prop);
      return (
        <div>
        todo
        {props.state.tdl.map((i, index) => (
          <Todo
            id={i.id}
            key={index} 
            tdProp={i}
            flip = {props.flip}
          />
        ))}
      </div>
      );
    }
  
  export default TodoList;