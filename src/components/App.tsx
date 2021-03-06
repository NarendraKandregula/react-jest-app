import * as React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component<any, any> {
  constructor(props: any){
    super(props);
  }

  public render(){
    return(
      <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    )
  }
}

export default App;
