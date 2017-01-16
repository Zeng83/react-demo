import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import React, { Component } from "react";

import classNames from 'classnames'

class Content extends Component {
  render() {
    const {items, filter, deleteItem} = this.props;

    const itemsArr = map(items, (item, index) =>
      <LiItem filter={filter} item={item} key={index} deleteItem={deleteItem} />
    );

    return (
      <ul>
        {itemsArr}
      </ul>
    );
  }
}

class LiItem extends Component {
  render() {
    const {filter, item, deleteItem} = this.props;
    const liClass = classNames({
      "hidden": !isEmpty(filter) && filter != item
    });

    return (
      <li className={liClass}>
        <span>{item}</span>
        <button onClick={deleteItem.bind(this, item)}>delete</button>
      </li>
    );
  }
}

export default Content
