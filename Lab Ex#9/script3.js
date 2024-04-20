const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseout', function() {
    myDiv.textContent = "Mouse moved out of the div";
    console.log("Mouse moved out of the div");
});
