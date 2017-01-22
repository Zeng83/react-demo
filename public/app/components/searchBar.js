import get from "lodash/get";
import debounce from "lodash/debounce";
import React, {Component, PropTypes} from "react";

const DEBOUNCE_RATE = 1000;

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this._typingSearch = this._typingSearch.bind(this);
    this.debouncedUpdate = debounce(this.debouncedUpdate.bind(this), DEBOUNCE_RATE);
  }

  _typingSearch(e) {
    const {filterItem} = this.props;

    this.cancelDebouncedUpdate()
    this.debouncedUpdate(get(e, "target.value"));
  }

  debouncedUpdate(value) {
    const {filterItem} = this.props;

    filterItem(value);
  }

  cancelDebouncedUpdate() {
    this.debouncedUpdate.cancel();
  }

  render() {
    const {filterItem, searchByLocation, searchByType} = this.props;

    return (
      <div>
        <div className="search-form">
          <input
            className="search-input"
            type="text"
            onKeyUp={this._typingSearch}
            placeholder="hungry? search food from here"/>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="search-type"
              value="type of food"
              onClick={searchByType}
            />&nbsp;Filted By type of Food
          </span>
          <span>
            <input
              type="radio"
              name="search-type"
              value="location"
              onClick={searchByLocation}
            />&nbsp;Filted By location
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
