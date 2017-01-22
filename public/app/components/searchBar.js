import React, {Component, PropTypes} from "react";

class SearchBar extends Component{
  render() {
    const {filterItem, searchByLocation, searchByType} = this.props;

    return (
      <div>
        <div className="search-form">
          <input
            className="search-input"
            type="text"
            onKeyUp={filterItem}
            placeholder="hungry? search food from here"/>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="search-type"
              value="location"
              onClick={() => searchByLocation()}
            />&nbsp;Filted By location
          </span>
          <span>
            <input
              type="radio"
              name="search-type"
              value="type of food"
              onClick={() => searchByType()}
            />&nbsp;Filted By type of Food
          </span>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterItem: PropTypes.func,
  searchByLocation: PropTypes.func,
  searchByType: PropTypes.func
};

SearchBar.defaultProps = {
  filterItem: () => {},
  searchByLocation: () => {},
  searchByType: () => {}
};

export default SearchBar
