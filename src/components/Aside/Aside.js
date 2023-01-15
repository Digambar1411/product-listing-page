import React from "react";
import { useFilter } from "../../context/FilterContext";
import "./Aside.css";

function Aside({mobileAside, setMobileAside}) {
	const {
		filterState: { brands, sizes, idealFors },
		filterDispatch,
	} = useFilter();

	const brandValues = [
		"Adidas",
		"FastColors",
		"Samah",
		"Kamini",
		"Nixyo",
		"Roadster",
	];

	const sizesArray = ["S", "M", "L", "XL"];
	const idealForValues = ["Men", "Women"];
	const rating = [4, 3];

	return (
		<div className={`flex-col ${mobileAside ? "mobile-aside" :"aside"}`}>
			<div className="flex-row justify-btwn aside-header">
				{mobileAside ? <span
                    className="material-icons-outlined close-card"
                    onClick={() => setMobileAside(false)}
                >
                    close
                </span> :<span>Filters</span>}
				<span
					className="clear"
					onClick={() => filterDispatch({ type: "CLEAR", payload: "" })}
				>
					Clear
				</span>
			</div>
			<div className="filter-section flex-col">
				<span>Brand</span>
				{brandValues.map((brand) => {
					return (
						<div key={brand}>
							<input
								type="checkbox"
								checked={brands.includes(brand)}
								onChange={() =>
									filterDispatch({ type: "FILTER_BY_BRAND", payload: brand })
								}
							/>
							<label htmlFor={brand}>{brand}</label>
						</div>
					);
				})}
			</div>

			<div className="filter-section flex-col">
				<span>Size</span>
				{sizesArray.map((size) => {
					return (
						<div key={size}>
							<input
								type="checkbox"
								checked={sizes.includes(size)}
								onChange={() =>
									filterDispatch({ type: "FILTER_BY_SIZE", payload: size })
								}
							/>
							<label htmlFor={size}>{size}</label>
						</div>
					);
				})}
			</div>

			<div className="filter-section flex-col">
				<span>Ideal For</span>
				{idealForValues.map((value) => {
					return (
						<div key={value}>
							<input
								type="checkbox"
								checked={idealFors.includes(value)}
								onChange={() =>
									filterDispatch({
										type: "FILTER_BY_IDEAL_FOR",
										payload: value,
									})
								}
							/>
							<label htmlFor={value}>{value}</label>
						</div>
					);
				})}
			</div>

			<div className="filter-section flex-col">
				<span>Customer Rating</span>
				{rating.map((value) => {
					return (
						<div key={value}>
							<input
								type="radio"
								name="rating"
								onClick={() =>
									filterDispatch({ type: "FILTER_BY_RATING", payload: value })
								}
							/>
							<label htmlFor="rating">{value} ⭐ & above</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export { Aside };
