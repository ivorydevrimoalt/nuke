function replaceRandomElement() {
  // Get all elements on the page
  const allElements = document.querySelectorAll("*");

  // Filter out elements not containing text or with specific attributes to avoid unintended changes
  const textElements = Array.from(allElements).filter(
    element => element.textContent && !element.hasAttribute("data-ignore-replace")
  );

  // Check if there are any text elements
  if (textElements.length === 0) {
    console.error("No text elements found. Add data-ignore-replace attribute to exclude specific elements.");
    return;
  }

  setInterval(function(){
    replaceRandomElement();
  },Math.random() * 1250 + 1250)

  // Choose a random element
  const randomIndex = Math.floor(Math.random() * textElements.length);
  const chosenElement = textElements[randomIndex];

  // Replace its content with "replaced!"
  chosenElement.textContent = Math.floor(Math.random()*10000000000) + "NUKED";

  console.log("Replaced random element:", chosenElement);
}

// Optional: Call the function automatically (remove this line if you prefer manual execution)
setInterval(function(){
  replaceRandomElement();
},Math.random() * 1250 + 1250)
