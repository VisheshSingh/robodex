import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

class App extends Component {
  state = {
    robots: []
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

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField);
    });

    return robots.length ? (
      <div className="tc">
        <h1 className="f1">RoboDex</h1>
        <SearchBar searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    ) : (
      <h2 className="tc f2">Loading...</h2>
    );
  }
}
const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
