import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@Hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';
//ver API en https://api.escuelajs.co/docs/

const ProductList = ({categor}) => {
	
	const products = useGetProducts(API)
	let productsRender 
	const productsFilter= () =>{
		if(categor == 0){
			productsRender = products;
		}
		else{
			productsRender = products.filter(product => product.category.id == categor)
		}
		return productsRender
	}
	productsFilter()
	return (
		<section className="main-container">
			<div className="ProductList">
				{
						productsRender.map(product => (
					<ProductItem key = {product.id} product = {product}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
