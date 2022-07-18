import { List } from "./components";

function App() {
	return (
		<div className="container m-auto flex flex-col items-center">
			<h1 className="text-3xl font-medium mt-10">Countdown</h1>
			<button className="button button-primary mt-10">Add Countdown</button>
			<List />
		</div>
	);
}

export default App;
