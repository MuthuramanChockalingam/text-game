import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	answer: '',
	score: config.scoreStart,
	question: rndString(refreshIDLength),
};

export default seed;
