import React from 'react';
import './searchBar.scss';

import Strings from '../../utils/strings';

class SearchBar extends React.Component {
  state = { term: '', error: '' };

  onInputChange = e => {
    const re = /[\w\s]+$/;
    if (e.target.value === "" || re.test(e.target.value)){
      this.setState({ term: e.target.value, error: '' });
    } else {
      this.setState({error: "Use letters or numbers only"})
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  renderError = () =>{
    return (
      <div className="ui pointing red basic label">
        {this.state.error}
      </div> 
    )
  }

  render() {
    return (
      <div className="search-bar-container">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label className="search-bar-label">{Strings.searchBarLabel}</label>
          </div>
          <div className="ui input action container search-bar">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Enter your keywords here..."
            />
            <button className="ui button purple fetch-gifs">Go!</button>
          </div>
          <div>
            {!this.state.error ? null : this.renderError() }
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;