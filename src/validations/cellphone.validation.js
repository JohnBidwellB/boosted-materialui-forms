export const chileanPhonesValidation = (value) => {
	const cellphone = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
	const fixedphone = /^((\+?56\s)?(0?2|0?3[2-5]|0?4[1-5]|0?5[123578]|0?6[13457]|0?7[1235])?(\s2\d{6}|\s\d{6}))$/;
	return cellphone.test(value) || fixedphone.test(value);
};
