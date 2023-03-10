import React from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@Context/AppContext'
import close from '@icons/icon_close.svg';

const OrderItem = ({product, indexValue}) => {
	const {removeFromCart} = React.useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" className ='close_img' 
				onClick={()=>removeFromCart(indexValue)} />
		</div>
	);
}

export default OrderItem;
