function copyLinkFromElement(elementId) {
    const el = document.getElementById(elementId);
    el.select();
    el.setSelectionRange(0, 99999); // For mobile devices
 
    // Copy the text inside the text field
    navigator.clipboard.writeText(el.value);
 
    // Alert the copied text
    alert(`${el.value} Copied!`);
}