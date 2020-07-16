import React, { Component } from 'react';
import Header from '../src/components/header'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/footer';
import AppRoutes from './components/appRoutes'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
    )
  }
}

export default App;
