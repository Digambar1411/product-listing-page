import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
	
	const reducerFunc = (state, action) => {
		switch (action.type) {
			case "SORT_BY_TYPE":
				return { ...state, sortType: action.payload.toUpperCase() };

			case "FILTER_BY_BRAND":
				return {
					...state,
					brands: state.brands.includes(action.payload)
						? state.brands.filter((brand) => brand !== action.payload)
						: [...state.brands, action.payload],
				};

			case "FILTER_BY_SIZE":
				return {
					...state,
					sizes: state.sizes.includes(action.payload)
						? state.sizes.filter((size) => size !== action.payload)
						: [...state.sizes, action.payload],
				};

			case "FILTER_BY_IDEAL_FOR":
				return {
					...state,
					idealFors: state.idealFors.includes(action.payload)
						? state.idealFors.filter((item) => item !== action.payload)
						: [...state.idealFors, action.payload],
				};

			case "FILTER_BY_RATING":
				return {
					...state,
					rating: action.payload,
				};

			case "CLEAR":
				return {
					brands: [],
					idealFors: [],
					sortType: null,
					sizes: [],
					rating: null,
				};

			default:
				return {
					state,
				};
		}
	};

	const initialValue = {
		brands: [],
		idealFors: [],
		sortType: null,
		sizes: [],
		rating: null,
	};

	const [filterState, filterDispatch] = useReducer(reducerFunc, initialValue);

	return (
		<FilterContext.Provider value={{ filterState, filterDispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

export { FilterProvider, useFilter };
