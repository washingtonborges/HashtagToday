import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TweetList from './components/TweetList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>#Hahtagtoday</strong>
      </header>
      <Provider store={store}>
        <TweetList />
      </Provider>
    </div>
  );
}

export default App;
