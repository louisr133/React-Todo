import React from 'react';
import TodoForm from "./TodoForm";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
      super();

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
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    updateList = event => {
      event.preventDefault();
      const newTodo = {
        task: this.state.task,
        id: this.state.id
      };
  
      this.setState({
        td: [...this.state.td, newTodo]
      });
    };
    render() {
      return (
        <div>
          <div className="class-list">
            {this.state.td.map((i, index) => (
              <Todo key={index} tdProp={i} />
            ))}
          </div>
          <TodoForm
            task={this.state.task}
            id={this.state.id}
            handleChanges={this.handleChanges}
            updateList={this.updateList}
          />
        </div>
      );
    }
  }
  
  export default TodoList;