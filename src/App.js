import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">Dictionary App</header>
				<main>
					<Dictionary />
				</main>

				<footer className="App-footer">
					{" "}
					<small>
						Coded by Enise Kizilaslan, open-sourced by{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/EniseK/dictionary-project"
						>
							GitHub,
						</a>{" "}
						and hosted on{" "}
						<a
							href="https://app.netlify.com/sites/dictionary-app-project/overview"
							target="_blank"
							rel="noreferrer"
						>
							Netlify.
						</a>
					</small>
				</footer>
			</div>
		</div>
	);
}

export default App;
