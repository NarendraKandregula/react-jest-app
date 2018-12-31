import * as React from 'react'
import * as PropTypes from 'prop-types'

export interface TodoProps {
  onClick: () => void,
  completed: boolean,
  text: string
}

class Todo extends React.Component<TodoProps, {}> {

  constructor(props: TodoProps){
    super(props);
  }

  public render(){
    return(<li
      onClick={this.props.onClick}
      style={{
        textDecoration: this.props.completed ? 'line-through' : 'none'
      }}
    >
      {this.props.text}
    </li>)
  }
}


export default Todo
