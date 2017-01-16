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
      <ul className="item-list-wrapper">
        {itemsArr}
      </ul>
    );
  }
}

class LiItem extends Component {
  render() {
    const {filter, item, deleteItem} = this.props;
    const liClass = classNames("list-item", {
      "hidden": !isEmpty(filter) && filter != item
    });

    return (
      <li className={liClass}>
        <div className="item-wrapper">
          <div className="item-top">
            <div className="item-info">
              <div className="item-image">
                <a href="#"><img src="//image.freepik.com/free-icon/question-mark_318-52837.jpg" /></a>
              </div>
              <div className="item-detail">
                <ul className="item-detail-list">
                  <li className="item-detail-list-item">name</li>
                  <li className="item-detail-list-item">review</li>
                  <li className="item-detail-list-item">type of food</li>
                </ul>
              </div>
            </div>
            <div className="item-address">
              <span>streen number</span><br />
              <span>city, state, zipcode</span><br />
              <span>phone number</span>
            </div>
          </div>
          <button onClick={deleteItem.bind(this, item)}>Not my Favor</button>
        </div>
      </li>
    );
  }
}

export default Content
