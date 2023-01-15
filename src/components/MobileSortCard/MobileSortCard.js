import React from "react";
import { useFilter } from "../../context/FilterContext";
import "./MobileSortCard.css";

function MobileSortCard({ setSortMenu, sortTypeValues }) {
	const {
		filterState: { sortType },
		filterDispatch,
	} = useFilter();

	return (
		<div className="mobile-sort-card">
			<span
				class="material-icons-outlined close flex-center"
				onClick={() => setSortMenu(false)}
			>
				close
			</span>
			<ul className="flex-col flex-center">
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
		</div>
	);
}

export { MobileSortCard };
