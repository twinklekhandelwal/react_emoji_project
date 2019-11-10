import React, { Component } from 'react';
import './index.css';

import json from './emoji.json';

function search_emoji(query) {
	return function(x) {
		return (
			x.keywords.toLowerCase().includes(query.toLowerCase()) ||
			x.title.toLowerCase().includes(query.toLowerCase())
		);
	};
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

	copyToClipboard = symbol => {
		var textField = document.createElement('textarea');
		textField.innerText = symbol;

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
				<div class="main-containt">
					{this.state.jsondata.filter(search_emoji(this.state.query)).map(Emoji => (
						<div className="emojis-containt">
							<p class="symbol">
								{Emoji.symbol}
								{Emoji.title}
							</p>

							<p className="copy" onClick={() => this.copyToClipboard(Emoji.symbol)}>
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
