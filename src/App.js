import React from 'react';
import Navigation from './components/Navigation.js'; //importing child components
import './App.css';

function App() { //parent component
  return <Navigation />;//child component beind injected
}
export default App;
