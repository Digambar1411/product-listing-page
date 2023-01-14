const sortByPrice = (data, type) => {
	return type
		? type === "LOW TO HIGH"
			? data.sort((a, b) => a.price - b.price)
			: data.sort((a, b) => b.price - a.price)
		: data;
};

const filterByBrand = (data, brandArray) =>
	brandArray.length
		? data.filter((item) => brandArray.includes(item.brand))
		: data;

const filterBySize = (data, sizeArray) =>
	sizeArray.length
		? data.filter((item) => sizeArray.includes(item.size))
		: data;

const filterByIdealFor = (data, idealForArray) =>
	idealForArray.length
		? data.filter((item) => idealForArray.includes(item.idealFor))
		: data;

const filterByRating = (data, rating) => {
	return rating
		? data.filter((item) => Number(item.rating) >= Number(rating))
		: data;
};

export {
	sortByPrice,
	filterByBrand,
	filterBySize,
	filterByIdealFor,
	filterByRating,
};
