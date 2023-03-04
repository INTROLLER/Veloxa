const binaryContainer = document.querySelector('.main_home_holder1');
let numDigits = 200; // Default number of digits

// Adjust the number of digits generated based on the device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  numDigits = 100; // Reduce the number of digits for mobile devices
}

// Generate random binary digits, starting positions, animation properties, and append them to the container
for (let i = 0; i < numDigits; i++) {
  const binaryDigit = document.createElement('p');
  binaryDigit.classList.add('binary-digit1');
  binaryDigit.innerText = Math.round(Math.random()); // Generate a random 0 or 1
  binaryDigit.style.left = `${Math.random() * 90}%`; // Generate a random starting position
  binaryDigit.style.right = `${Math.random() * 90 + 4}%`; // Generate a random starting position
  binaryDigit.style.top = '180px'; // Set the starting position to the top
  binaryDigit.style.bottom = '850px'; // Set the ending position to the bottom
  binaryDigit.style.animationDuration = `${Math.random() * 5 + 5}s`; // Generate a random animation duration between 5-10 seconds
  binaryDigit.style.animationDelay = `${Math.random() * 10}s`; // Generate a random delay between 0-10 seconds
  binaryContainer.appendChild(binaryDigit);
}
