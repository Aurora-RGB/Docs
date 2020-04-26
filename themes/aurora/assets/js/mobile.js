(function() {

	// LEFT NAV
	let navMenu = document.querySelector('main nav');

	// Handler that opens the nav menu when the burger button is pressed
	document.querySelector('.nav-burger').addEventListener('click', function(e) {
		if (!document.body.classList.contains('nav-open')) {
			e.stopPropagation(); // Stop the below 'click outside' function from being called after this, immediately closing the menu
			document.body.classList.add('nav-open');
		}
	});

	// Click outside handler 
	document.addEventListener('click', function(e) {
		if (!navMenu.contains(e.target))
			document.body.classList.remove('nav-open');
	});


	// TABLE OF CONTENTS
	let tocHead = document.querySelector('.toc .toc-header');
	(tocHead == void 0) || tocHead.addEventListener('click', function() {
		document.querySelector('.toc').classList.toggle('collapsed');
	});
})();