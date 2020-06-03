(function() {
    // Mark the the first tab content and header for every tabs element as active (easier to do via js than hugo)
    document.querySelectorAll('.tabs .tab-content:first-child, .tabs .tab-header:first-child').forEach(el =>
        el.classList.add('active'));

    // Tab header button handler
    function tabHeaderClickHandler(e) {
        // Index of the clicked button in the tab headers
        let idx = [...this.parentElement.children].indexOf(this);
        
        // Try find the content element by this index
        let trg = this.closest('.tabs').querySelector(`.tab-content:nth-child(${idx + 1})`);
        if (trg != null) {
            // If the target content exists, remove active from other contents and add to target
            this.closest('.tabs').querySelectorAll('.tab-content.active, .tab-header.active').forEach(el =>
                el.classList.remove('active'));
            trg.classList.add('active');
            this.classList.add('active');
        }
    }

    // Add the above event listener to all tab header buttons
    document.querySelectorAll('.tab-header').forEach(el =>
        el.addEventListener('click', tabHeaderClickHandler));
})();