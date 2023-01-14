import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictioary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		//documentation: https://dictionaryapi.dev/

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<section>
				<h1>What word do you want to look up?</h1>
				<form onSubmit={search}>
					<input
						type="search"
						onChange={handleKeywordChange}
						defaultValue={PaymentResponse.defaultKeyword}
					/>
				</form>
				<div className="hint">
					suggested words: sunset, yoga, forest, sky...
				</div>
			</section>
			<Results results={results} />
		</div>
	);
}
