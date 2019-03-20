import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        name="task"
        placeholder="Task"
        onChange={props.handleChanges} 
      />
      <input
        value={props.id}
        placeholder="ID"
        name="id"
        onChange={props.handleChanges}
      />
      <button onClick={props.updateList}>Add To Item</button>
    </form>
  );
};

export default TodoForm;
