const temp = (ques, ans) => ques.split('').findIndex((char, i) =>
	char !== ans.substr(i, 1));

const highlight = (question, answer) => {
	const index = temp(question, answer);

	const highlighted = question.slice(0, index);

	// eslint-disable-next-line no-param-reassign
	question = question.slice(index);

	return { question, highlighted };
};

export default highlight;
