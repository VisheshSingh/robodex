import React, { Component } from 'react';
import SearchBar from './Searchbar';
import CardList from './CardList';
import { robots } from './robots';
import './App.css';

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
  };

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboDex</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
