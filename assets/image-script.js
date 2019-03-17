// Custom built lightbox style script for the Aurora Docs.
// Also adds captions to images.
// Will Bennion 2019.

(function() {
	const targetImages = 'section img:not(.avatar):not(.emoji)';
	const [lightboxImageBackdrop, lightboxImage] = createLightboxElements();
	const lightboxMargin = 24; // Size around the edge of the lightbox
	let lightboxTargetImage;
	let lightboxOpen = false;

	// Assign the lightbox function to all non-avatar images and also add a caption
	// (which is the image's alt text) underneath them all.
	[...document.querySelectorAll(targetImages)].forEach(img => {
		// Add a click listener to show the image lightbox
		img.addEventListener('click', _ => {
			lightboxTargetImage = img;
			openLightbox();
		});

		// Add a caption to the image
		let caption = document.createElement('span');
		caption.classList.add('img-caption');
		caption.textContent = img.alt;
		img.parentNode.insertBefore(caption, img.nextSibling);
	});

	/** Opens the lightbox display using the `lightboxTargetImage` as the source image for uri and initial position. */
	function openLightbox() {
		// Make the moving image's source uri to be the one the one the user clicked
		lightboxImage.src = lightboxTargetImage.src;
		
		// Set the fixed position (relative to the viewport) of the lightbox element to match the with the viewport relative position of the clicked image.
		let bb = lightboxTargetImage.getBoundingClientRect();
		setLightboxPosition(bb.top, bb.left, bb.width);

		// Show backdrop and image element
		setLightboxBackdropVisible(true);
		setLightboxVisible(true);

		// I run this after a few ms rather than immediately so that the transition takes place. If I don't do this, it will immediately override the changes from
		// the `setLightboxPosition(bb.top, bb.left, bb.width)` call from above and the smooth transition won't play properly.
		setTimeout(() => {
			// We calculate a `scale` value for the image which will be the smallest scale required to make the image fill the available space in either direction.
			// That way, the image will fill the available space but will not be clipped.
			let scale = Math.min(
				(window.innerHeight - lightboxMargin * 2) / lightboxTargetImage.naturalHeight, // The scale the image would have to be for the width to fill available space
				(window.innerWidth - lightboxMargin * 2) / lightboxTargetImage.naturalWidth, // The scale the image would have to be for the height to fill available space
				1 // Do not go over 1, else we are scaling the image up and so it may look blurry
			);
			let newW = scale * lightboxTargetImage.naturalWidth, newH = scale * lightboxTargetImage.naturalHeight;
			setLightboxPosition((window.innerHeight - newH) / 2, (window.innerWidth - newW) / 2, newW);
		}, 100);

		lightboxOpen = true;
	}

	/** Closes the lightbox display using the `lightboxTargetImage` as the source element for the destination position. */
	function closeLightbox() {
		let bb = lightboxTargetImage.getBoundingClientRect();
		setLightboxPosition(bb.top, bb.left, bb.width);
		setLightboxBackdropVisible(false);
		setTimeout(setLightboxVisible, 400, false); // This time should match the duration time set in the $lightbox-transition variable of the `page/_iamge.scss` file
	}

	/** Helper function to set the top, left and width of the lightbox image all in one. */
	function setLightboxPosition(t, l, w) {
		lightboxImage.style.top = t + "px";
		lightboxImage.style.left = l + "px";
		lightboxImage.style.width = w + "px";
	}

	/** Sets whether or not the backdrop is visible. Note that the backdrop has a CSS transition so will not become invisible/visible immediately. */
	function setLightboxBackdropVisible(v) { lightboxImageBackdrop.classList[v ? 'remove' : 'add']('out'); }

	/** Sets whether or not the lightbox image is visible. This will happen immediately (no transition time). */
	function setLightboxVisible(v) { lightboxImage.style.display = v ? "block" : "none"; }

	/** Creates the required lightbox elements (backdrop and image) and returns them in an array. */
	function createLightboxElements() {
		// Create the element that will be the backdrop for our lightbox.
		let lightboxImageBackdrop = document.createElement('div');
		lightboxImageBackdrop.classList.add('lightbox-image-backdrop', 'out');
		lightboxImageBackdrop.addEventListener('click', closeLightbox);
		document.body.appendChild(lightboxImageBackdrop);

		// Create the image element that will appear over the top of the document.
		// I don't use the existing img element so that the document doesn't recalculate
		// the flow and cause the place where the image was to collapse.
		let lightboxImage = document.createElement('img');
		lightboxImage.classList.add('lightbox-image');
		lightboxImage.style.display = "none";
		document.body.appendChild(lightboxImage);

		return [lightboxImageBackdrop, lightboxImage];
	}
})();