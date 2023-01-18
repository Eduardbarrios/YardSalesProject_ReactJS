import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@Hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';
//ver API en https://api.escuelajs.co/docs/

const ProductList = () => {
	
	const products = useGetProducts(API)
	//en la api dañaron la imagen del procto id=3
	const newProducts = products.filter( product => product.id !== 3)
	return (
		<section className="main-container">
			<div className="ProductList">
				{newProducts.map(product => (
					<ProductItem key = {product.id} product = {product}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
