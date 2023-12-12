console.log("Hello World")


let fancyButton = document.getElementById("fancyButton")
const buttonEffect = document.addEventListener("fancyButton",printHello)

function printHello() {
    console.log("sad")
}

const stars = document.querySelectorAll('.star');

// Add click event listener to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        document.getElementById('profRating').value = rating;
        highlightStars(rating);
    });
});

// Function to highlight stars up to the selected rating
function highlightStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}