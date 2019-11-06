import React, {Component} from 'react';

import json from './emoji.json';

class typeemo extends Component{

    render(){
       
        const emojiList=json.map((shareholder)=>
        <div className="shareholder">
    {shareholder.symbol}{shareholder.title}
              
              
              
            </div>)
        return(<h1>{emojiList}</h1>);
    }
}

export default typeemo

