export const chileanCellphoneValidation = (value) => {
	const regularExpression = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
	return regularExpression.test(value);
};
