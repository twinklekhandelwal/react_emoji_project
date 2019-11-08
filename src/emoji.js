import React, { Component } from 'react';
import Inputs from './input';
import json from './emoji.json';

class Typeemo extends Component {
	constructor(props) {
		super(props);

		this.state = { jsondata: json, query: '', copySuccess: json };
	}

	copyToClipboard = text => {
		// console.log('text', text)
		this.setState({ copySuccess: json.symbol });

		var textField = document.createElement('textarea');
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};

	render() {
		const emojiList = this.state.jsondata.filter(Inputs.search_emoji(this.state.query)).map(shareholder => (
			<div className="shareholder">
				<p>
					{shareholder.symbol}
					{shareholder.title}
				</p>

				<p className="copy" onClick={this.copyToClipboard}>
					Click to copy emoji
				</p>
			</div>
		));
		return <h1>{emojiList}</h1>;
	}
}

export default Typeemo;
