import React, { Component } from 'react';

import json from './emoji.json';

function search_emoji(query){
	return function(x){
		return x.keywords.toLowerCase().includes(query.toLowerCase()) ;
	}
}
class typeemo extends Component {
	constructor(props) {
		super(props);

		this.state = {jsondata:json,query:'' ,copySuccess: ''};
	}
	copyToClipboard = (e) => {
		this.div.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the the whole text area selected.
		e.target.focus();
		this.setState({ copySuccess: 'Copied!' });
	  };
	
	render() {
		const emojiList = this.state.jsondata.filter(search_emoji(this.state.query)).map(shareholder => (
			<div className="shareholder" >
				{shareholder.symbol}
				{shareholder.title}
				{this.state.copyToClipboard}
				<div class="copy">
				<h1 >copy</h1></div>
				
			</div>
			
		));
		return <h1>{emojiList}</h1>;
	}
}

export default typeemo;
