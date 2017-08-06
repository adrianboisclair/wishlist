import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getWishList } from '../actions';
import SearchComponent from './SearchComponent';

/**
 * Wishlist Component - This renders a list that is pulled from the DB
 */
class WishListComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {list: []};
    this.getWishListByUser();
  }

  getBaseUrl() {
    return window.location.hostname !== 'localost' ? '/api' : '/public/api';
  }

  /**
   * Add to Wishlist
   * @param e
   * @returns {AxiosPromise}
   */
  addToWishList(e) {
    const base = this.getBaseUrl();
    const userId = window.userId;
    const currentWishList = JSON.parse(this.state.list.text);
    const newItem = [e.target.getAttribute("data-name")];
    const text = JSON.stringify(currentWishList.concat(newItem));

    if(!currentWishList.includes(newItem[0])) {
      this.setState({list : { text: text }});
      const request = axios.post(`${base}/wishlists/${userId}`, {_method: 'PUT', text, user_id: userId});
      request.then(response => {
        return response.data;
      });
      return request;
    } else {
      alert('You\'ve already added ' + newItem[0] + ' to your wishlist. Try adding a new pup.');
    }

  }

  removeFromWishlist(e) {
    const wishList = JSON.parse(this.state.list.text);
    let i = wishList.indexOf(e.target.getAttribute('data-name'));

    // e.target.parentNode.parentNode.classList.add('removing'); // slowly remove item from view

    setTimeout(()=> {
      if(i != -1) {
        wishList.splice(i, 1);
      }
      this.setState({ list: { text: JSON.stringify(wishList) } });
      this.updateWishlist(wishList);
    }, 250); // remove item from list
  }

  updateWishlist(list) {
    const base = this.getBaseUrl();
    const request = axios.post(`${base}/wishlists/${userId}`, {_method: 'PUT', text: JSON.stringify(list), user_id: userId});
    request.then(response => {
      return response.data;
    });
    return request;
  }

  /**
   * Get Wishlist by User ID
   * @returns {AxiosPromise}
   */
  getWishListByUser() {
    const base = this.getBaseUrl();
    const userId = window.userId;
    const request = axios.get(`${base}/wishlists/${userId}`);
    const _this = this;
    request.then(response => {
      _this.setState({list: response.data});
      return response.data;
    });
    return request;
  }

  /**
   * Render List Items
   * @param items
   * @returns {XML}
   */
  renderItems(items) {
    if(items !== undefined && items.length){
      return(
        <ul className="list-group scroll">
          {items.map( (item, index)=> {
            return (
              <li className="list-group-item" key={index} id={'item-' + index}>
                {item}
                <button className="btn btn-default btn-xs" data-name={item}
                        onClick={this.removeFromWishlist.bind(this)} type="button">
                  <span data-name={item} className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button>
                </li>
            );
          }) }
        </ul>
      );
    } else {
      return(
        <div>
          Your wishlist is currently empty. Please search for and/or add a puppy!
        </div>
      );
    }
  }

  /**
   * Render the Wishlist container
   * @returns {XML}
   */
  renderWishList() {
    if(this.state.list) {
      return (
        <div className="wishlist">
          <h3>My WishList</h3>
          {this.renderItems(eval(this.state.list.text))}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <SearchComponent addToWishList={this.addToWishList.bind(this)} userId={window.userId}/>
        {this.renderWishList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.list
  }
};

// TODO: setup action creators
const mapDispatchToProps = (dispatch) => {
  return {
    getWishList: ()=> dispatch(getWishList(1))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListComponent);