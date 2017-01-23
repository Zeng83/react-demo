import React, {Component, PropTypes} from "react";

class Footer extends Component{
  render() {
    const {deleteAll} = this.props;
    return (
      <div>
        <button
          className="pure-button button-error button-small"
          onClick={deleteAll}>
            Remove all
          </button>
      </div>
    )
  };
}

Footer.propTypes = {
  deleteAll: PropTypes.func
};

Footer.defaultProps = {
  deleteAll: () => {}
};

export default Footer
