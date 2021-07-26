import { React } from 'react';
import './App.scss';
import context from './core/context';

const App = () =>
	<div className="App">
		<div>Score: { context.state.score }</div>
		<div>Question: { context.state.question }</div>
	</div>
	;

export default App;
