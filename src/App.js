import React, { Component } from 'react';
import Items from './component/Items';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      items:[
        {id:1,name:'mohammed',skills:'html',age:20},
        {id:2,name:"John",skills:'css',age:17},
        {id:3,name:'Ali',skills:'python',age:23}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Items items={this.state.items}/>
    
      
      </div>
    );
  }
}

export default App;
