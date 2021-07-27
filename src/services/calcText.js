const temp = (field, needle) => field.split('').findIndex((char, i) =>
	char !== needle.substr(i, 1));

const matchString = (field, needle) => {
	const index = temp(field, needle);
	const matched = field.slice(0, index);
	const unmatched = field.slice(index);

	return { unmatched, matched };
};

export default matchString;
