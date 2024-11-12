// Select the button and the hidden div
const loginButton = document.getElementById('loginButton');
// const hiddenDiv = document.getElementById('hiddenDiv');
const show = document.getElementById('hiddenDiv');
const hide = document.getElementById('hiddenDiv');

// Add a click event listener to the button
loginButton.addEventListener('click', () => {
    // Remove the 'hidden' class to make the div visible
    hiddenDiv.classList.remove('see');
});