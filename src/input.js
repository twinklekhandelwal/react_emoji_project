import React, { Component } from 'react';
import './index.css';
// import Headers  from './emoji';

class inputlist extends Component {
	constructor(props) {
		super(props);

		this.state = { query: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({
			query: event.target.value,
		});
	}

	render() {
		return (
			<form>
				<input onChange={this.handleInputChange} className="searchinput" />
				<p />
			</form>
		);
	}
}

//     render(){
//         return(<div className="component-search-input">
//         <div>
//           <input type="text" class="searchinput" />
//         </div>
//       </div>)
//     }
// }

export default inputlist;
