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


	// SCROLL TO TOP BUTTON VISIBILITY
	let lastScroll = document.documentElement.scrollTop;
	let totalUpScroll = 0;
	let sttButton = document.querySelector('.scroll-to-top');
	let scrollLimit = document.body.scrollHeight - window.innerHeight;
	if (sttButton) {
		document.addEventListener('scroll', function(e) {
			let curScroll = document.documentElement.scrollTop;
			let scrollAmount = curScroll - lastScroll;
			if (scrollAmount > 0)
				totalUpScroll = 0;
			else
				totalUpScroll -= scrollAmount;
			
			// If we've reached (almost) to the bottom OR we've scrolled atleast 100px up and we're not already at the top, show the to-top button
			sttButton.classList[curScroll >= scrollLimit - 50 || (totalUpScroll > 100 && curScroll > 20) ? "remove" : "add"]('hidden');

			lastScroll = curScroll;
		});
		sttButton.addEventListener('click', function() {
			window.scroll({ top: 0, behavior: 'smooth' });
		});
	}
})();