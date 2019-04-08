import React, {Component} from "react";
import { withTracker } from 'meteor/react-meteor-data';
import {Todos} from '../../api/collections.js';

class Top extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoText:"",
    }
  }

  addTodo(){
    Meteor.call('addTodo')
  }

  renderTodos(){
    let todos = this.props.todos;
    if(todos){
      return todos.map((todo,index)=>{
        return(
          <li key={index}>
            {todo.content}
          </li>
        );
      });
    }
  }

  submitForm(e){
    e.preventDefault();
    let todoText = this.state.todoText;
    Meteor.call('addTodo',todoText);
  }

  render(){
    return(
      <div>
        <div>topページ</div>
        

        <form onSubmit={(e)=>this.submitForm(e)}>
          <input type="text" onChange={(e)=>this.setState({todoText:e.target.value})} value={this.state.todoText}/>
          <input type="submit" value="リストに追加"/>
        </form>
        <a onClick={(e)=>this.addTodo(e)}>to do リストに追加</a>
        <ul>
        {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

export default withTracker(()=>{
  let todos;

  if(Meteor.subscribe('getTodos').ready()){
    todos = Todos.find().fetch();
  }

  return{
    todos:todos
  }
})(Top);