/* eslint-disable max-len */
import { React } from 'react';
import './App.scss';
import Answer from './components/answer';
import context from './core/context';
import highlight from './services/highlighted';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return <div className="App">
		<div className="score">Score: { context.state.score }</div>
		<div className="question">
			Question:{' '}
			<span style={ { color: 'blue' } }>
				{ highlight(context.state.question, context.state.answer).highlighted }
			</span>
			<span>
				{ highlight(context.state.question, context.state.answer).question }
			</span>
		</div>
		<div className="answer">{ Answer() }</div>
	</div>;
};

export default App;
