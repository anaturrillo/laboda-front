import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hola pepe :-)</p>;
  }
}

render(<App/>, document.getElementById('app'));