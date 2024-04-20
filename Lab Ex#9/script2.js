const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mousemove', function(event) {
    console.log(`Mouse coordinates: [${event.clientX}, ${event.clientY}]`);
});
