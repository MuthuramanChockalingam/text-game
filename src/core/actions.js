import isTrue from '../services/calcScore';
import { rndString } from '@laufire/utils/random';

const questionLength = 4;

const setScore = ({ state, data }) => (
	isTrue(state.question, data) === true
		? {
			score: state.score + 1,
			question: rndString(questionLength),
			answer: '',
		}
		: {
			score: state.score,
			question: state.question,
			answer: data,
		}
);

const actions = {
	setScore,
};

export default actions;
