// Rotate the content to reveal it when the page loads
window.onload = function() {
  document.getElementById('wrapper').style.transform = 'rotateX(0deg)'; // Rotate the content to reveal it
};
// Define an array of image URLs
const imageUrls = [
  'images/phone.png',
  'images/shine.png',
  'images/tosin.png',
  'images/globe.png',
  // Add more image URLs as needed
];

// Get the changing image element
const changingImage = document.getElementById('changingImage');

// Function to change the image
function changeImage() {
  // Get a random index from the imageUrls array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  // Set the src attribute of the changing image to the randomly selected image URL
  changingImage.src = imageUrls[randomIndex];
}

// Change the image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);

        // // Define a style element
        // var style = document.createElement('style');
        // style.type = 'text/css';
        // style.innerHTML = `
        //     @font-face {
        //         font-family: 'password';
        //         src: url('data:font/woff;base64,d09GRgABAAAAAA0cAA0AAAAA.............') format('woff');
        //     }
        // `;
        // // Append the style to the head
        // document.getElementsByTagName('head')[0].appendChild(style);

        // // Apply the font family to the password input
        // var passwordInput = document.getElementById('password');
        // passwordInput.style.fontFamily = 'password';
 // Select the password input and the toggle button
     function togglePassword() {
        var passwordInput = document.getElementById('password');
        var toggleImg = document.getElementById('toggleImg');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleImg.src = 'images/open.png'; // Change to show icon
        } else {
            passwordInput.type = 'password';
            toggleImg.src = 'images/hide.png'; // Change to hide icon
        }
    }