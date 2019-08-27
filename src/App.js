import React, { Component } from 'react';
import SearchBar from './Searchbar';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          robots: users
        });
      });
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField);
    });

    if (robots.length) {
      return (
        <div className="tc">
          <h1 className="f1">RoboDex</h1>
          <SearchBar searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    } else {
      return <h2 className="tc f2">Loading...</h2>;
    }
  }
}

export default App;
