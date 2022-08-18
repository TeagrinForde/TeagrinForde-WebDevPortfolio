import React from 'react';//REACT is a front-end framework used to develop SPAs using JSX
import ReactDOM from 'react-dom';//REACT initiates VDOM
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root')); //ReactDOM.render links html to JS Parent (App)
