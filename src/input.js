import React, { Component } from 'react';
import './index.css';
// import Headers  from './emoji';
import json from './emoji.json';
console.log(json);
function search_emoji(query) {
	return function(x) {
		return  (x.keywords.toLowerCase().includes(query.toLowerCase())|| x.title.toLowerCase().includes(query.toLowerCase()));
			
			
		
	}
}
class inputlist extends Component {
	constructor(props) {
		super(props);

		this.state = { jsondata: json, query: '', copySuccess: json.symbol };
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({
			query: event.target.value,
		});
	}
	
	copyToClipboard = text => {
		// console.log('text', text)
		// this.setState({ copySuccess: json.symbol });

		var textField = document.createElement('textarea');
		textField.innerText = json;
		console.log(textField.innerText)
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};
	

	render() {
		

		return (
			<div>
				<form>
					<input onChange={this.handleInputChange} className="searchinput" />

					
				</form>
				<div class="link">
				<a href="https://github.com/twinklekhandelwal/react_emoji_project.git">Fork me on Github</a>
					</div>
					<div class="top">
				{this.state.jsondata.filter(search_emoji(this.state.query)).map(shareholder => (
					<div className="shareholder">
						<p>
							{shareholder.symbol}
							{shareholder.title}
						</p>

						<p className="copy" onClick={this.copyToClipboard}>
							Click to copy emoji
						</p>
						
					</div>
				))}
				</div>
			</div>
		);
	}
}

export default inputlist;
