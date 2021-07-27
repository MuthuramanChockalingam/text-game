import { React } from 'react';
import context from '../core/context';
import matchString from '../services/calcText';

const question = () => {
	const { unmatched, matched }
    = matchString(context.state.question, context.state.answer);

	return <div>
		<span style={ { color: 'blue' } }>{ matched }</span>
		<span>{ unmatched }</span>
	</div>;
};

export default question;
