import React from 'react';

import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Product from './components/Product';
import CategoryList from './components/Category/CategoryList';
import Header from './components/Header';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/"><Home></Home> </Route>
        <Route exact path="/login"> <Login></Login> </Route>
        <ProtectedRoute exact path="/products"> <Product></Product> </ProtectedRoute>
        <ProtectedRoute exact path="/dashboard"> <DashBoard></DashBoard> </ProtectedRoute>
        <ProtectedRoute exact path="/category"> <CategoryList></CategoryList> </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
