import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
// import { robots } from './robots';
// destructured robots as its not 'export default' in robots.js
// therefor if only export is used, it means multiple exports are present although in robots its a single element (list)
// so we need to destructure it

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots =robots.filter(robot =>  robot.name.toLowerCase().includes(searchfield.toLowerCase()));
		return !robots.length ?
			<h1>Loading...</h1> : (filteredRobots.length ? 
				(
					<div className='tc'>
						<h1 className='f1'>RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					</div>
				) : 
				(
					<div className='tc'>
						<h1 className='f1'>RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<h2 className="empty">No robots with name {searchfield}</h2>
					</div>
				)
			)
	}
}

export default App;