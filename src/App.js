import { React } from 'react';
import './App.scss';
import Answer from './components/answer';
import context from './core/context';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return <div className="App">
		<div className="score">Score: { context.state.score }</div>
		<div className="question">Question: { context.state.question }</div>
		<div className="answer">{ Answer() }</div>
	</div>;
};

export default App;
