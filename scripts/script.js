// Function to handle the click event on the red box
document.getElementById('red-box').addEventListener('click', function() {
    // Hide the red box
    document.getElementById('red-box').style.display = 'none';

    // Get the iframe element
    const iframe = document.getElementById('youtube-video');

    // Update the iframe src to include autoplay and make it visible
    iframe.src += "?autoplay=1";  // Add autoplay parameter to start video
    iframe.style.display = 'block';  // Show the iframe

    // Optionally hide the "Click Me" text and show the birthday message
    document.querySelector('.click-comment').style.display = 'none'; // Hide "Click Me" message
    document.querySelector('.happy-birthday-comment').style.display = 'block'; // Show "Happy Birthday" message
});
