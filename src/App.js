// import { Component } from "react";
import { useState, useEffect } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

	console.log('render');

	const [searchField, setSearchField] = useState(''); // [value, setValue] 
	const [doggies, setDoggies] = useState([]);
	const [filteredDoggies, setFilterDoggies] = useState(doggies);
	// console.log({searchField}); curly braces are there to make it an object but actually it is not, it is a string

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setDoggies(users));
	}, []);

	useEffect(() => {
		const newFilteredDoggies = doggies.filter((doggy) => {
			return doggy.name.toLowerCase().includes(searchField);
		});

		setFilterDoggies(newFilteredDoggies);
	}, [doggies, searchField]);

	const onSearchChange  = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className="app-title">Cat Labels</h1>
 
			<SearchBox
				className='doggies-search-box'
				onChangeHandler={onSearchChange}
				placeholder='search here...'
			/>
			<CardList doggies={filteredDoggies} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			doggies: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(
// 					() => {
// 						return { doggies: users };
// 					},
// 					() => {}
// 				)
// 			);
// 	}

// 	onSearchChange = (event) => {
// 		console.log(event.target.value);
// 		const searchField = event.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { doggies, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredDoggies = doggies.filter((doggy) => {
// 			return doggy.name.toLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className='App'>
// 				<h1 className="app-title">Cat Labels</h1>

// 				<SearchBox
// 					className='doggies-search-box'
// 					onChangeHandler={onSearchChange}
// 					placeholder='search here...'
// 				/>
// 				<CardList doggies={filteredDoggies} />
// 			</div>
// 		);
// 	}
// }

export default App;
