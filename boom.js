var bright = 1

// Access the DIV element with the ID "content"
const contentDiv = document.getElementById("content");

function brighter(){
  socket.emit("command", {list:["background","//i.pinimg.com/736x/83/ed/b2/83edb2da08d58dd8a0bf93479b4968ba.jpg"]})
// Apply the sepia filter using CSS filter property
contentDiv.style.filter = "brightness("+ bright +")"; // Adjust the value (0-1) for intensity
bright++
}

// Ensure the CSS is applied after the element is rendered (optional)
window.addEventListener("DOMContentLoaded", () => {
  contentDiv.style.filter = "brightness("+ bright +")";
});

// Create a new Audio object
const sound = new Audio();

// Set the source of the sound (replace with your audio file URL)
sound.src = "https://cdn.discordapp.com/attachments/1084218636807438408/1201912935580966973/Explosisdfgon_Cutoff-1.wav"; // Replace with your audio file extension

// Optional: Set additional audio properties (e.g., volume, loop)
sound.volume = 0.5; // Set volume to 50%
// sound.loop = true; // Uncomment to loop the sound

// Play the sound
sound.play();

setInterval(function(){brighter()},40)
