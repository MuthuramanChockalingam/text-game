import { React } from 'react';
import context from '../core/context';

const Answer = () =>
	<div>
		<input
			type="text"
			value={ context.state.answer }
			onChange={ (evt) => context.actions.setScore(evt.target.value) }
		/>
	</div>;

export default Answer;
