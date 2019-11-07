import React, { Component } from 'react';
import './index.css';
import Headers  from './emoji';
class inputlist extends Component {
	constructor(props) {
		super(props);

		this.state = { a: 'twinkle',
	 };
	}
	handleInputChange = () => {
		this.setState({
			query: this.search.value,
		});
	};
	

	render() {
		return (
			<form>
				<input ref={input => (this.search = input)} onChange={this.handleInputChange} class="searchinput" />
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
