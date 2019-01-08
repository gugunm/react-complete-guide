// program ini @ program inti untuk running di browser
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // ini buat custom tag yang berasal dari component Person

class App extends Component {
  // state itu untuk membuat dynamic variable, dan hanya bisa digunakan didalam Class extends Component.
  // state bisa dirubah di component lain, yang component lainnya juga pake Class extends Component
  state = {
    persons : [
      { name:"Gugun", age:21 },
      { name:"Aher", age:23 },
      { name:"Aris", age:22 },
    ],
    otherState : "this is another state."
  }

  switchNameHandler = (newName) => {
    // setState itu cara buat ngerubah isian yang ada didalam state, bisa ditentuin state mana aja yang akan diubah
    this.setState({
      persons : [
        { name:newName, age:21 },
        { name:"Reza", age:23 },
        { name:"Hanif", age:23 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        { name:"Gugun", age:21 },
        { name: event.target.value, age:23 },
        { name:"Hanif", age:22 },
      ]
    })
  }

  render() {
    // namanya Inline Style.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, Im React App </h1>
          {/* bind itu fungsinya buat ngelempar suatu value ke event handler, dan bisa buat ngerubah value state
          tapi sintaksnya bisa diubah jadi arrow function. ga usah pake bind lagi */}
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Mediamer !!!!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Media!!')}
            change={this.nameChangeHandler} >My Hobbies : Reading </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </header>
      </div>
    );
  }
}

export default App;
