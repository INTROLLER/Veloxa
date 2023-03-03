const binaryContainer = document.querySelector('.main_home_holder1');
const numDigits = 200; // Adjust the number of digits generated

// Generate random binary digits, starting positions, animation properties, and append them to the container
for (let i = 0; i < numDigits; i++) {
  const binaryDigit = document.createElement('div');
  binaryDigit.classList.add('binary-digit1');
  binaryDigit.innerText = Math.round(Math.random()); // Generate a random 0 or 1
  binaryDigit.style.left = `${Math.random() * 92}%`; // Generate a random starting position
  binaryDigit.style.right = `${Math.random() * 94}%`; // Generate a random starting position
  binaryDigit.style.top = '180px'; // Set the starting position to the top
  binaryDigit.style.bottom = '850px'; // Set the ending position to the bottom
  binaryDigit.style.animationDuration = `${Math.random() * 5 + 5}s`; // Generate a random animation duration between 5-10 seconds
  binaryDigit.style.animationDelay = `${Math.random() * 10}s`; // Generate a random delay between 0-10 seconds
  binaryContainer.appendChild(binaryDigit);
}
