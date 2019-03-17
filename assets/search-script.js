// Custom-built Lunrjs-powered search script for the Aurora Docs.
// Will Bennion 2019.

(function() {
	// Create a list of documents from the HTML outputted by Jekyll. Each item in the hidden 'index' element is the content of one of the docs pages.
	// So, get all the children from the index element and map them onto an array of objects with a title and text element.
	const documents = Array.from(document.getElementById('index').children).map((el, i) => {
		return { index: i, title: el.dataset.title, link: el.dataset.link, text: el.textContent };
	});

	// Build the lunr index.
	let index = lunr(function() {
		this.ref('index'); // Use the index as the ref so it's easy to find in the documents array

		// Boost the title by a lot so that if the term appears in the title it gets priority e.g. searching "State" should return
		// the state variable page before anything else, regardless if another document has the word "state" three times as often.
		this.field('title', { boost: 100 });
		this.field('text');
		this.metadataWhitelist = ['position'];
		documents.forEach(doc => this.add(doc));
	});

	/** Sets the search term textbox and performs a search based on the 'q' parameter in the URL. */
	function setFromQueryString() {
		let searchParams = new URLSearchParams(window.location.search);
		if (searchParams.has("q")) {
			performSearch(searchParams.get("q"));
			document.getElementById('search-term').value = searchParams.get("q");
		}
	}

	/** Performs a lunr powered search on the documentation with the given query term.
	 * @param {string} str The term to search for. */
	function performSearch(str) {
		if (!str)
			document.getElementById('results').innerHTML = '<p>Please enter a search term.</p>';
		else {
			let results = index.search(str);
			console.log(results);
			document.getElementById('results').innerHTML = results.length ? results.map(createResult).reduce((a, b) => a + b) : '<p>No results found for this search term.</p>';
		}
	}

	/** Takes a single result from lunr and creates an element for it to be added to the results list.
	 * @param {{ref:number,score:number,matchData:{metadata:{[term:string]:{text?:{position:number[][]},title?:{position:number[][]}}}}}} result */
	function createResult(result) {
		// Reference to the doc that the result is for
		let doc = documents[result.ref];

		// A combined array of ALL textual matches, regardless of which keyword was matched
		let combined = [].concat.apply([], Object.values(result.matchData.metadata).map(v => v.text.position));
		combined.sort((a, b) => a[0] - b[0]);

		// Get an except from the document around where the first instance of the matched word was
		let p = combined[0];
		let startIdx = lastIndexOfAny(doc.text, p[0], ".", "\n", "?", ":", ";") + 1; // Find the start of the sentence which contains the matched word
		let endIdx = indexOfAny(doc.text, startIdx + 300, ".", "\n", "?", ":", ";") + 1; // Find the end of the next sentence that is atleast 300 characters from the first (so we get a decent excerpt in the case of short sentences)
		let matchedSentence = doc.text.substring(startIdx, endIdx); // Grab the text chosen to be the except

		// Insert the .highlight span elemnet into the except
		matchedSentence = matchedSentence.slice(0, p[0] - startIdx + 1)
			+ '<span class="highlight">'
			+ matchedSentence.slice(p[0] - startIdx + 1, p[0] - startIdx + 1 + p[1])
			+ '</span>'
			+ matchedSentence.slice(p[0] - startIdx + 1 + p[1]);

		// Return a list item with the document's title, a link to the doc and the excerpt
		return `<li><a class="title" href="${doc.link}">${doc.title}</a><p>${matchedSentence.trim()}</p></li>`;
	}

	/** Similar to `String.indexOf` but will return the first match of any of the given substrings. */
	function indexOfAny(string, position, ...substrings) {
		let indices = substrings.map(sub => string.indexOf(sub, position)).filter(idx => idx != -1);
		return indices.length ? Math.min.apply(null, indices) : -1;
	}
	
	/** Similar to `String.lastIndexOf` but will return the last match of any of the given substrings */
	function lastIndexOfAny(string, position, ...substrings) {
		let indices = substrings.map(sub => string.lastIndexOf(sub, position)).filter(idx => idx != -1);
		return indices.length ? Math.max.apply(null, indices) : -1;
	}


	// Perform an initial scan of the query URL and see if it has a 'q' param. If so, initially search for that term
	setFromQueryString();

	// Peform a search when the user navigates back/forwards (and thus changes the 'q' param in the url)
	window.addEventListener('popstate', setFromQueryString);

	// Perform the search & update 'q' param when the search form is submitted
	document.getElementById('search-form').addEventListener('submit', e => {
		e.preventDefault();
		let term = document.getElementById('search-term').value;
		performSearch(term);
		window.history.pushState('', '', '?q=' + encodeURIComponent(term));
	});
})();