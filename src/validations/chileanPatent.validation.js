export const chileanPatentValidation = (value) => {
	const patent = /((?![AEIOUMNÑQ])[A-Z]{4})[0-9]{2}|[A-Z]{2}[0-9]{4}/;
	return patent.test(value);
};
