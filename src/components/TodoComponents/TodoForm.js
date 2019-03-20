import React from 'react';

// Making forms "controlled components"
// 1. add a property on state that controls each input
// 2. On the input, add a "value" attribute - pass in the state property to the value attr
// 3. Add onChange, and pass in the change handler function
// 4. on the input, add a "name" attr that is the same as the state property that is controlling that input

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.name}
        name="name"
        placeholder="Name"
        onChange={props.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
      />
      <input
        value={props.identity}
        placeholder="Identity"
        name="identity"
        onChange={props.handleChanges}
      />
      <input
        value={props.img}
        placeholder="Image"
        name="img"
        onChange={props.handleChanges}
      />
      <input
        value={props.age}
        placeholder="Age"
        name="age"
        onChange={props.handleChanges}
      />
      <input
        value={props.bestFriend}
        placeholder="Best Friend(s)"
        name="bestFriend"
        onChange={props.handleChanges}
      />
      <button onClick={props.updateList}>Add Student</button>
    </form>
  );
};

export default TodoForm;
