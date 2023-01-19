import React, {useState} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@Context/AppContext'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu);
  }
  const handleToggleOrders = ()=>{
    setToggleOrders(!toggleOrders);
  }
  const handleToggleMobileMenu = ()=>{
    setToggleMobileMenu(!toggleMobileMenu);
  }
  const {state} = React.useContext(AppContext)
 return (
 <nav>
  <img src={menu} alt="menu" className="menu" onClick={handleToggleMobileMenu}/>
  <div className="navbar-left">
    <img src={logo} alt="logo" className="logo" />
    <ul>
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <a href="/clothes">Clothes</a>
      </li>
      <li>
        <a href="/electronics">Electronics</a>
      </li>
      <li>
        <a href="/forniture">Furnitures</a>
      </li>
      <li>
        <a href="/toys">Toys</a>
      </li>
      <li>
        <a href="/others">Others</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <ul>
      <li 
      className="navbar-email"
      onClick={handleToggleMenu}
      >
        platzi@example.com
      </li>
      <li
      className="navbar-shopping-cart"
      onClick={handleToggleOrders}
      >
        <img src={shoppingCart} alt="shopping cart" />
        {state.cart.length > 0 ? <div>{state.cart.length}</div>
        : <div>+</div> }
      </li>
    </ul>
  </div>
  {toggleMenu && <Menu/>}
  {toggleOrders && <MyOrder togleOrder = {handleToggleOrders}/>}
  {toggleMobileMenu && <MobileMenu toggleMobileMenu = {handleToggleMobileMenu}/>}

</nav>

 );
};

export default Header;