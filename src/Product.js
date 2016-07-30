import React from 'react';
import stars from './stars.png';
import jeans from './jeans.jpg';
import add_to_cart from './add_to_cart.png';

const Product = React.createClass({
	render() {
		return (
			<div className="App">
				<p>Loomstate</p>
				<img src={stars} alt="4/5 stars"/>
				<h1>Boyfriend Jeans</h1>
				<img className="product-img" src={jeans} role="presentation"/>
				<div className="pricing">
					<p>List Price: $49.99</p>
					<p className="save">Price: $29.99</p>
					<p className="save">You Save: $20.00</p>
				</div>
				<h2>Description</h2>
				<p style={{textDecoration: 'underline'}}>Tap to see Product Description</p>
				<h2>Features & Details</h2>
				<ul className="" style={{textAlign:'left'}}>
					<li>100% recycled material</li>
					<li>Machine Wash</li>
				</ul>
				<button>
				<img className="img" src={add_to_cart} alt="buy"/>
				</button>
			</div>
		);
	}
})

export default Product;
