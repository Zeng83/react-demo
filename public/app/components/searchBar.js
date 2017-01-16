import React, {Component, PropTypes} from "react";

class SearchBar extends Component{
  render() {
    const {filterItem} = this.props;

    return (
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          onKeyUp={filterItem}
          placeholder="hungry? search food from here"/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterItem: PropTypes.func
};

SearchBar.defaultProps = {
  filterItem: () => {}
};

export default SearchBar
