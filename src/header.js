import React, { Component } from 'react';
import emojmage from './mau.png';
import emojjmage from './chau.png';
import './index.css';

class heading extends Component {
	constructor(props) {
		super(props);

		this.state = { a: 'twinkle' };
	}
	copyToClipboard = (e) => {
		this.input.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the the whole text area selected.
		e.target.focus();
		this.setState({ copySuccess: 'Copied!' });
	  };
	
	render() {
		return (
			<div class="header">
				<img src={emojmage} class="img-emo" />
				Emoji Search
				<img src={emojjmage} class="img-emo" />
			</div>
		);
	}
}

export default heading;
