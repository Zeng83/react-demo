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
      <div>
        <h2>Find your favor restaurant from here</h2>
        <SearchBar filterItem={actions.filterItem}/>
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
