import React from 'react';

class CopyExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
      <div>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyToClipboard}>Copy</button> 
            {this.state.copySuccess}
          </div>
        }
        <form>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value='Some text to copy'
          />
        </form>
      </div>
    );
  }

}

export default CopyExample;