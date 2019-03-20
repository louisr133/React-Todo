import React from 'react';

function Todo(props) {
  return (
    
    <div className="class-list">
        <h3>{props.tdProp.task}</h3>
        <p>
        <strong>ID:</strong> {props.tdProp.id}
        </p>
  </div>
  );
}

export default Todo;
