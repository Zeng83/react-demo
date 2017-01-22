import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import get from "lodash/get";
import React, { Component } from "react";
import classNames from "classnames";

const DEFAULT_IMAGE = "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/d53e550ec367/assets/img/default_avatars/user_30_square.png";

class Content extends Component {
  render() {
    const {items, filter} = this.props;
    const itemsArr = map(items, (item, index) =>
      <LiItem filter={filter} item={item} key={index} />
    );

    return (
      <ul className="item-list-wrapper">
        {itemsArr}
      </ul>
    );
  }
}

class LiItem extends Component {
  _renderImage() {
    const {item} = this.props;
    const imageSrc = item.Image
      ? item.Image
      : "//image.freepik.com/free-icon/question-mark_318-52837.jpg";
    return (
      <div className="item-image">
        <a href={item.Url}><img src={imageSrc} /></a>
      </div>
    );
  }

  _renderReview() {
    const {item} = this.props
    const AverageRating = get(item, "Rating.AverageRating", 0);

    return (<span>Average Review: {AverageRating}</span>);
  }

  _renderCategory() {
    const {item} = this.props;
    const categorys = get(item, "Categories.Category", []);

    return (
      <span>
        {map(item.Categories.Category || [], (_categroy, index) => {
          return (<a className="catetory" href="#">{_categroy.content}&nbsp;</a>);
        })}
      </span>
    );
  }

  render() {
    const {filter, item} = this.props;
    const liClass = classNames("list-item", {
      "hidden": !isEmpty(filter) && filter != item
    });
    const lastReviewIntro = get(item, "Rating.LastReviewIntro", "");

    return (
      <li className={liClass}>
        <div className="item-wrapper">
          <div className="item-top">
            <div className="item-info">
              {this._renderImage()}
              <div className="item-detail">
                <ul className="item-detail-list">
                  <li className="item-detail-list-item">
                    <a className="item-title" href={item.Url}>{item.Title}</a>
                  </li>
                  <li className="item-detail-list-item">
                    {this._renderReview()}
                  </li>
                  <li className="item-detail-list-item">
                    {this._renderCategory()}
                  </li>
                </ul>
              </div>
            </div>
            <div className="item-address">
              <span>{item.Address}</span><br />
              <span>{item.Phone}</span>
            </div>
          </div>
          <div className="item-bottom">
            <div className="last-reviewer-image">
              <img className="photo-box-img" src={DEFAULT_IMAGE} />
            </div>
            <div className="last-reviewer-content">
              <span>{lastReviewIntro}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Content
