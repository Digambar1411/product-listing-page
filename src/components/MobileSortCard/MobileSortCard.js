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
			<div className="mobile-sort-card-header" >
                <span>Sort By</span>
                <span
                    className="material-icons-outlined close-card"
                    onClick={() => setSortMenu(false)}
                >
                    close
                </span>
            </div>
			
				{sortTypeValues.map((value) => {

					return (
					<div key={value} className="mobile-sort-card-body">
                        <label htmlFor="sort-by-price">Price --{value}</label>
                        <input
                            type="radio"
                            name="sort-by-price"
							className={sortType === value.toUpperCase() ? "active" : ""}
							onClick={() => {
								filterDispatch({
									type: "SORT_BY_TYPE",
									payload: value,
								});
							}}
                        />
                        
                    </div>
					);
				})}
		
		</div>
	);
}

export { MobileSortCard };
