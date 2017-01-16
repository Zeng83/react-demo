import get from "lodash/get";
import React, {Component, PropTypes} from "react";
import SearchBar from "../components/searchBar";
import Content from "../components/content";
import Footer from "../components/footer";
import { connect } from "react-redux";
import ImmutableRenderMixin from "react-immutable-render-mixin";
import * as ItemsActions from "../actions";
import { bindActionCreators } from "redux";

class App extends Component{
  render() {
    const {actions, items, filter} = this.props;

    return (
      <div className="page-wrapper">
        <header className="header">
          <div className="header-wrapper">
            <nav className="nav-wrapper">
              <div className="left-nav"><span className="homepage-title">Demo</span></div>
              <div className="right-nav">
                <ul>
                  <li className="user-info-list">
                    <a href="#">User Name</a>
                  </li>
                  <li className="user-info-list">
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </nav>
            <SearchBar filterItem={actions.filterItem}/>
          </div>
        </header>
        <Content items={items} filter={filter} deleteItem={actions.deleteItem}/>
        <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/>
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array,
  filter: PropTypes.string
};

const mapState = (state) => {
  return {
    items: get(state, "items", []),
    filter: get(state, "filter")
  };
};

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(ItemsActions, dispatch)
});

export default connect(mapState, mapDispatch)(App)
