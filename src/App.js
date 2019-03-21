import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo'

class App extends React.Component {
  constructor(){
    super(); 
    
    let tdList = [];
         
    this.state = {
      tdl: tdList,
      task: '',
      id: '',
      completed: false
    };

     this.flip = id => {
       this.setState(

        this.state.tdl.map(o => {
          if(o.id === id){
            o.completed = !o.completed;
            return o;
          } else {
            return o;
          }
        })


       )
      
    };

    this.handleChanges = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.updateList = event => {
      event.preventDefault();
      const newTodo = {
        task: this.state.task,
        id: Date.now(),
        completed: false

      };




      this.setState({
        tdl: [...this.state.tdl, newTodo]
      });
      // console.log(this.state.tdl);
  };

  this.clearCompleted = event => {
    event.preventDefault();
    this.setState({
      tdl: this.state.tdl.filter(i => i.completed === false)
    });
};


  this.clearList = event => {
    event.preventDefault();
    this.setState({
      tdl: []
    });
  }

}

  render() {
    return (
      <div>
      <TodoList 
      state = {this.state}
      flip = {this.flip} />

      <TodoForm
        task={this.state.task}
        // id={this.state.id}
        handleChanges={this.handleChanges}
        updateList={this.updateList}
        clearCompleted ={this.clearCompleted}
        clearList={this.clearList}
      /> 

     
    </div>
    );
  }
}

export default App;
