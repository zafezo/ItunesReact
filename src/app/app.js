import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hello from './components/hello';

const rootEl = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div className="app container">
       <Hello/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, rootEl);
