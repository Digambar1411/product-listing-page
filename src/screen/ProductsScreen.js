import "./ProductSreen.css";
import { Card, MobileSortCard } from "../components";
import { useFilter } from "../context/FilterContext";
import { products as data } from "../Database/products";
import {
	sortByPrice,
	filterByBrand,
	filterBySize,
	filterByIdealFor,
	filterByRating,
} from "../utils/utilsFunctions";
import { useEffect, useMemo, useState } from "react";

function ProductsScreen({ setMobileAside }) {
	const { filterState, filterDispatch } = useFilter();
	const { sortType, brands, sizes, idealFors, rating } = filterState;

	const sortTypeValues = ["Low to High", "High to Low"];

	const [sortMenu, setSortMenu] = useState(false);
	const [width, setWidth] = useState();

	const breakPoint2 = 768;

	const sortedProducts = useMemo(() => sortByPrice(data, sortType), [sortType]);
	const brandFilteredProducts = filterByBrand(sortedProducts, brands);
	const sizeFilteredProducts = filterBySize(brandFilteredProducts, sizes);
	const idealFilterdPorducts = filterByIdealFor(
		sizeFilteredProducts,
		idealFors
	);
	const finalProducts = filterByRating(idealFilterdPorducts, rating);

	const showSortMenu = () => {
		setSortMenu(true);
	};

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	}, [width]);

	return (
		<div className="container">
			{finalProducts.length > 0 ? (
				<p className="product-length-section">
					Showing {finalProducts.length} products
				</p>
			) : (
				<p className="product-length-section">No products to display</p>
			)}

			<div className="sort-section flex-row">
				<span>Sort By</span>
				<ul className="flex-row">
					{sortTypeValues.map((value) => {
						return (
							<li
								key={value}
								className={sortType === value.toUpperCase() ? "active" : ""}
								onClick={() => {
									filterDispatch({
										type: "SORT_BY_TYPE",
										payload: value,
									});
								}}
							>
								Price --{value}
							</li>
						);
					})}
				</ul>
				{width <= breakPoint2 && (
					<button className="sort-btn1" onClick={() => setMobileAside(true)}>
						<span className="material-icons-outlined">filter_list</span>
						Filter
					</button>
				)}
			</div>

			<div className="mobile-sort">
				<div className="flex-row space-around w-80">
					<button className="sort-btn" onClick={showSortMenu}>
						<span className="material-icons-outlined">sort</span>
						Sort
					</button>

					<button
						className="sort-btn filter-btn"
						onClick={() => setMobileAside(true)}
					>
						<span className="material-icons-outlined">filter_list</span>
						Filter
					</button>
				</div>
			</div>

			<div className="card-container">
				{finalProducts.map((product) => {
					return <Card product={product} key={product.id} />;
				})}
			</div>

			{sortMenu && (
				<MobileSortCard
					setSortMenu={setSortMenu}
					sortTypeValues={sortTypeValues}
				/>
			)}
		</div>
	);
}

export default ProductsScreen;
