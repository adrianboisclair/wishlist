import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Debounce} from 'react-throttle';

/**
 * Search Component
 * Renders a search box that displays results in real time
 */
class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {results: [], search: '', wishList: []};
  }

  /**
   * Update Search
   * @param event
   */
  updateSearch(event) {
    this.setState({search: event.target.value});
    this.getItemsByName(this.state.search);
  }

  getBaseUrl() {
    return window.location.hostname === 'localhost' ? '/api' : '/public/api';
  }

  /**
   * Get Items
   * @returns {AxiosPromise}
   */
  getItems() {
    const base = this.getBaseUrl();
    const request = axios.get(`${base}/breeds`);
    const _this = this;
    request.then(response => {
      _this.setState({results: response.data});
      return response.data;
    });
    return request;
  }

  /**
   * Get / Search through Items
   * @param term
   * @returns {AxiosPromise}
   */
  getItemsByName(term) {
    const base = this.getBaseUrl();
    const request = axios.get(`${base}/breeds/search/${term}`);
    const _this = this;
    request.then(response => {
      _this.setState({results: response.data});
      return response.data;
    });
    return request;
  }

  /**
   * Add a NEW Breed the the DB
   * @returns {AxiosPromise}
   */
  addNewBreed() {
    const base = this.getBaseUrl();
    const request = axios.post(`${base}/breeds/`, {text: this.state.search});
    request.then(response => {
      return response.data;
    });
    return request;
  }

  /**
   * Render Results
   * @returns {XML}
   */
  renderResults() {
    if (!this.state.results.length) {
      return (
        <p>No results found.</p>
      );
    }
    return (
      <div className="scroll">
        <ul className="list-group" style={{margin: '0'}}>
          {this.state.results.map(result => {
            return (
              <li className="list-group-item" key={result.id}>
                  {result.text}
                <button className="btn btn-default btn-xs" data-name={result.text}
                  onClick={this.props.addToWishList} type="button">
                  <span data-name={result.text} className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span></button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="search-component">
        <h3>Search for a Breed</h3>
        <div className="input-group">
          <Debounce time="200" handler="onChange">
            <input className="form-control" placeholder="Search" type="text" onChange={this.updateSearch.bind(this)}/>
          </Debounce>
          <button type="submit" className="btn btn-default" onClick={this.addNewBreed.bind(this)}>Add To DB</button>
        </div>
        {this.renderResults()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWishList: () => []
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
