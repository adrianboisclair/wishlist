import './bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import NavComponent from './components/NavComponent';
import WishListComponent from './components/WishListComponent';
import FooterComponent from './components/FooterComponent';

const appContainer = document.getElementById('app');
const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(middleware);

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent ctaText="Become a Walker!"/>
        <main className="container">
          <div className="alert alert-info">
            <p>
              <span style={{fontWeight: 'bold'}}>Notice:</span> Search for a dog breed and click the "plus" button to add to your wishlist.
              If you can't find a breed, simply enter the name and click "Add to DB".
              <a href="#" onClick={this.dismiss.bind(this)} className="alert-link"> Dismiss</a>
            </p>
          </div>
          <div className="alert alert-info">
            <p>
              <span style={{fontWeight: 'bold'}}>Notice:</span> Your wishlist is automatically saved any time you make any changes,
              so you can access your wishlist any time, any where!<a href="#" onClick={this.dismiss.bind(this)} className="alert-link"> Dismiss</a>
            </p>
          </div>
          <WishListComponent/>
        </main>
        <FooterComponent />
      </div>
    );
  }
  dismiss(e) {
    e.target.parentNode.parentNode.classList.add('hide');
  }
}

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , appContainer);