import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
