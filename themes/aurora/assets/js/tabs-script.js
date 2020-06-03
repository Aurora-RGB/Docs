(function() {
    // Mark the the first tab content and header for every tabs element as active (easier to do via js than hugo)
    document.querySelectorAll('.tabs').forEach(el => setActiveIndex(el, 0));

    // Tab header button handler
    function tabHeaderClickHandler(e) {
        // Index of the clicked button in the tab headers
        let idx = [...this.parentElement.children].indexOf(this);
        let container = this.closest('.tabs');

        // If the container has a group, find other tab controls with the same group name
        if (container.dataset.tabsSyncGroup)
            document.querySelectorAll(`.tabs[data-tabs-sync-group="${container.dataset.tabsSyncGroup}"]`).forEach(el =>
                setActiveIndex(el, idx));

        // If there is no group, just update this element only
        else
            setActiveIndex(container, idx);
    }

    /** Sets the active tab of the container to the given index
     * @param {HTMLElement} container The .tabs container to set the active tab in
     * @param {number} index The index of the tab to set active. */
    function setActiveIndex(container, index) {
        // Try find content at the target idx. It there is no content, do nothing
        let trg = container.querySelector(`.tab-content:nth-child(${index + 1})`);
        if (trg != null) {
            // Remove existing active classes
            container.querySelectorAll('.tab-content.active, .tab-header.active').forEach(el =>
                el.classList.remove('active'));

            // Add active to target content and header
            trg.classList.add('active');
            container.querySelector(`.tab-header:nth-child(${index + 1})`).classList.add('active');
        }
    }

    // Add the above event listener to all tab header buttons
    document.querySelectorAll('.tab-header').forEach(el =>
        el.addEventListener('click', tabHeaderClickHandler));
})();