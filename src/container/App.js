import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField);
    });

    return !isPending ? (
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
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobotsReducer.isPending,
  robots: state.requestRobotsReducer.robots,
  err: state.requestRobotsReducer.err
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
