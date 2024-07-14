document.addEventListener("DOMContentLoaded", function() {
    const textboxes = document.getElementsByTagName('textbox');
    Array.from(textboxes).forEach(function(textbox) {
        const div = document.createElement('div');
        div.className = 'custom-textbox';
        div.innerHTML = textbox.innerHTML;
        textbox.parentNode.replaceChild(div, textbox);
    });
});
