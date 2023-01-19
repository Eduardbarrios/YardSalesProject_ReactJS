import React from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@Context/AppContext'
import '@styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';

const MyOrder = ({togleOrder}) => {
	const {state} = React.useContext(AppContext)
	const sumTotal = ()=>{
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img className='arrow' src={flecha} alt="arrow" onClick={togleOrder} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) =>(
					<OrderItem indexValue = {index} product={product} key = {`orderItem-${index}`}/>
				))}
			</div>
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
		</aside>
	);
}

export default MyOrder;
