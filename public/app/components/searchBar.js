import React, {Component, PropTypes} from "react";

class SearchBar extends Component{
  render() {
    const {filterItem} = this.props;

    return (
      <div className="pure-form">
        <input type="text" onKeyUp={filterItem} placeholder="search here" />
      </div>
    )
  }
}

SearchBar.propTypes = {
  filterItem: PropTypes.func
};

SearchBar.defaultProps = {
  filterItem: () => {}
};

export default SearchBar
