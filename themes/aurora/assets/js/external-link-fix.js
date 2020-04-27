// Script that makes all external links have a target="_blank" attribute.
for (let link of document.querySelectorAll('main article a')) {
    if (link.hostname != window.location.hostname) {
        console.info(link);
        link.target = "_blank";
        link.rel = "noreferrer noopener";
    }
}
