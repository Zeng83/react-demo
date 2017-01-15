import React, {Component, PropTypes} from "react";

class Footer extends Component{
  render() {
    const {addItem, deleteAll} = this.props;
    return (
      <div>
        <button
          className="pure-button button-secondary button-small"
          onClick={addItem}>
            add
        </button>
        <button
          className="pure-button button-error button-small"
          onClick={deleteAll}>
            deleteAll
          </button>
      </div>
    )
  };
}

Footer.propTypes = {
  addItem: PropTypes.func,
  deleteAll: PropTypes.func
};

Footer.defaultProps = {
  addItem: () => {},
  deleteAll: () => {}
};

export default Footer