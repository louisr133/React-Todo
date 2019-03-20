import React from 'react';
import TodoForm from "./TodoForm";
import Todo from './Todo';



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    constructor() {
      super();
      // state === data (what our data looks like at any given point... what
      // is the "state" of my data right now)
      // this state object is the "brain" of the component tree
      // this is NOT muttable - we will change "state" following immutability principles
      const tdList = [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ];
      
      
      this.state = {
        td: tdList,
        task: '',
        id: '',
        completed: false
      };
    }
  
    handleChanges = event => {
      console.log('event: ', event.target);
      // update the name property on state
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    updateList = event => {
      event.preventDefault();
      const newTodo = {
        task: this.task.name,
        id: this.id.name,
      };
  
      this.setState({
        td: [...this.state.td, newTodo]
      });
    };
  
    // const td = students;
    render() {
      // this.state.td.push({ name: 'Neville' });
      return (
        <div>
  
          <div className="class-list">
            {this.state.td.map((i, index) => (
              <Todo key={index} studentProp={i} />
            ))}
          </div>
          <TodoForm
            task= {this.task.name}
            id={this.id.name}
            handleChanges={this.handleChanges}
            updateList={this.updateList}
          />
        </div>
      );
    }
  }
  