import React from 'react';
// import logo from './logo.svg';
import json from './emoji.json';

import './App.css';
import Header from './header';
import Input from './input';


function App() {
	return (
		<div>
			<Header />
			<Input emojiJson={json}/>

			
		</div>
	);
}

export default App;
