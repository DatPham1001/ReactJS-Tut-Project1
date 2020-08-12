import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CategoryList from './components/Category/CategoryList';
import Dashboard from './components/DashBoard';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetail';
import { ProtectedRoute } from './components/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <ProtectedRoute exact path="/products" component={Product}></ProtectedRoute>
        <ProtectedRoute exact path="/dashboard" component={Dashboard}></ProtectedRoute>
        <ProtectedRoute exact path="/category" component={CategoryList}></ProtectedRoute>
        <ProtectedRoute exact path='/product/:id' component={ProductDetail}></ProtectedRoute>
        
        {/* <Route exact path="/products" component={Product}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/category" component={CategoryList}></Route>
        <Route exact path='/product/:id' component={ProductDetail}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
