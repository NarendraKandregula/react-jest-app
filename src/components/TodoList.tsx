import * as React from 'react'
import * as PropTypes from 'prop-types'
import Todo from './Todo'

export interface TodoProp {
  id: number,
  completed: boolean,
  text: string
}
export interface TodoListProps {
  todos: [TodoProp],
  toggleTodo: (arg0 :number)=> {}
}

class TodoList extends React.Component<TodoListProps, {}>{

  constructor(props: TodoListProps){
    super(props);
  }

  public render(){
    return(<ul>
      {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this.props.toggleTodo(todo.id)}
        />
      )}
    </ul>)
  }
}


export default TodoList
