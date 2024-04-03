import React from 'react'
import {
  BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom'
import './App.css'
import { AboutPage, AdminLoginPage, AdminPage, ContactPage, CustomersPage, LandingPage, LoginPage, OrdersPage, ProductsPage, SignUpPage, UserPage, ViewProduct } from './Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element={<LandingPage />}></Route>
        <Route exact path = '/about' element={<AboutPage />}></Route>
        <Route exact path = '/contact' element={<ContactPage />}></Route>
        <Route exact path = '/product' element={<ProductsPage />}></Route>
        <Route exact path = '/view-product/:id' element={<ViewProduct />}></Route>

        <Route exact path = '/user/login' element={<LoginPage />}></Route>
        <Route exact path = '/user/signup' element={<SignUpPage />}></Route>
        <Route exact path = '/user' element={<UserPage />}></Route>
        
        <Route exact path = '/admin/login' element={<AdminLoginPage />}></Route>
        <Route exact path = '/admin' element={<AdminPage />}></Route>
        <Route exact path = '/admin/customers' element={<CustomersPage />}></Route>
        <Route exact path = '/admin/orders' element={<OrdersPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
