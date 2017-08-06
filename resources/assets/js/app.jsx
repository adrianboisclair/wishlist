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
        <NavComponent/>
        <main className="container">
          <div className="alert alert-success">
            <p>
              To get started, search for a dog breed and click the "plus" button to add to your wishlist.
              If you can't find a breed, simply enter the name and click "Add to DB".
              (<a href="#" onClick={this.dismiss.bind(this)}>dismiss</a>)
            </p>
          </div>
          <div className="alert alert-success">
            <p>
              Your wishlist is automatically saved any time you make any changes,
              so you can access your wishlist any time, any where!
              (<a href="#" onClick={this.dismiss.bind(this)}>dismiss</a>)
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