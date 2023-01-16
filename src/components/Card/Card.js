import React from "react";
import "./Card.css";

function Card({ product }) {
	const { image, name, brand, price, size, idealFor, rating } = product;

	return (
		<div className="card border-box flex-col">
			<img src={image} alt={name} />
			<div className="card-details flex-col">
				<span className="brand">{brand}</span>
				<span className="name">{name}</span>
				<div className="flex-row price-section">
					<strong className="price">₹{price}</strong>
					<span className="line-through">₹1000</span>
					<span>10%</span>
					<span>{size}</span>
					<span>{idealFor}</span>
				</div>
				<div>{"⭐".repeat(`${rating}`)}</div>
			</div>
		</div>
	);
}

export { Card };
