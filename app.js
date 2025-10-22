document.querySelector("button").addEventListener("click", function() {
    alert("Button clicked!");
});
radioButtons.forEach(function(button) {
    button.addEventListener("change", function() {
        alert("Radio button changed!");
    });
});