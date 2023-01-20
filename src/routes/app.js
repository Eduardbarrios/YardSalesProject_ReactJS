import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import SendEmail from '@pages/SendEmail';
import CreatePassword from '@pages/CreatePassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import Clothes from '@pages/Categories/Clothes';
import Electronics from '@pages/Categories/Electronics';
import Forniture from '@pages/Categories/Forniture';
import Shoes from '@pages/Categories/Shoes';
import Toys from '@pages/Categories/Toys';
import Others from '@pages/Categories/Others';
import NotFound from '@pages/NotFound';
import AppContext from '@Context/AppContext'
import useInicialState from '@Hooks/useInicialState'
import '@styles/global.css'

const App = () => {
  const inicialState = useInicialState()
  return (
  <AppContext.Provider value={inicialState}>
   <BrowserRouter basename='/YardSalesProject_ReactJS'>
    <Layout>
      <Routes>
          <Route exact path='/' element ={<Home/>}/>
          <Route exact path='/login' element  ={<Login/>}/>
          <Route exact path='/recovery-password' element ={<RecoveryPassword/>}/>
          <Route exact path="/send-email" element={<SendEmail/>} />
					<Route exact path="/new-password" element={<CreatePassword/>} />
					<Route exact path="/account" element={<MyAccount/>} />
					<Route exact path="/signup" element={<CreateAccount/>} />
					<Route exact path="/checkout" element={<Checkout/>} />
					<Route exact path="/orders" element={<Orders/>} />
          <Route path='/clothes' element = {<Clothes/>}/>
          <Route path='/electronics' element = {<Electronics/>}/>
          <Route path='/forniture' element = {<Forniture/>}/>
          <Route path='/shoes' element = {<Shoes/>}/>
          <Route path='/Toys' element = {<Toys/>}/>
          <Route path='/others' element = {<Others/>}/>
          <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </Layout>
   </BrowserRouter>
  </AppContext.Provider>
  )
}

export default App