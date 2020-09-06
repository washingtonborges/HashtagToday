import React from 'react';
import Tweet from './components/Tweet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>#Hahtagtoday</strong>
      </header>
      <Tweet
        avatar='https://i.picsum.photos/id/495/536/354.jpg?hmac=zuvX-7elHGS7AKwiBMaTOxxfSmzdW35fmQT9BVHCojo'
        name='Lorem Ipsum'
        nickname='loremipsum'
        time='1h'
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas risus ipsum, quis lacinia nulla tempor vitae'
      />
    </div>
  );
}

export default App;
