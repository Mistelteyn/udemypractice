import React from "react";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  onSearch = (event) =>{
    event.preventDefault();
      this.props.onSearchClick(this.state.searchInput);
  }

  render() {
    return (
      <div className="search-bar ui action input">
        <input
          type="text"
          value={this.state.searchInput}
          placeholder="Search..."
          onChange={event => this.setState({ searchInput: event.target.value })}
        />
        <button className="ui button" onClick={this.onSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
