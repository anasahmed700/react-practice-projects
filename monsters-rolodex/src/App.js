import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.compnent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  // lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // taking response and converting into json 
      .then((users) => this.setState({monsters: users}) // setting json data to the monsters array
      );
  }
  render() {
    return (
      <div className="App">
        <CardList name="Anas" />
        {this.state.monsters.map((monster, index) => (
          <div key={index}>
            <h1 key={monster.id}> {monster.name} </h1>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
