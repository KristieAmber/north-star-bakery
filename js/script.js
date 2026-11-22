
/* North Star Bakery JavaScript */

// List of bakery products
const products = [
    "Sourdough Bread",
    "Croissants",
    "Muffins",
    "Cookies",
    "Custom Cakes"
];

// List of customer favorites
let favorites = [];

// Save favorites in the browser
function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Show the saved favorites on the page
function showFavorites() {
    const list = document.getElementById("favorites-list");
    const message = document.getElementById("favorites-message");

    list.innerHTML = "";

    if (favorites.length === 0) {
        message.textContent = "You have not saved any favorites yet.";
    } else {
        message.textContent = "Your favorites have been saved!";

        favorites.forEach(function(item) {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

// Add or remove a favorite
function toggleFavorite(product) {
    if (favorites.includes(product)) {
        favorites = favorites.filter(function(item) {
            return item !== product;
        });
    } else {
        favorites.push(product);
    }

    saveFavorites();
    showFavorites();
}

// Create buttons for each product
function showProducts() {
    const container = document.getElementById("product-buttons");

    products.forEach(function(product) {
        const button = document.createElement("button");
        button.textContent = product;

        button.addEventListener("click", function() {
            toggleFavorite(product);
        });

        container.appendChild(button);
    });
}

// Load favorites when the page opens
function loadFavorites() {
    const saved = localStorage.getItem("favorites");

    if (saved) {
        favorites = JSON.parse(saved);
    }

    showProducts();
    showFavorites();
}

// Start the favorites feature
if (document.getElementById("product-buttons")) {
    loadFavorites();
}


/* Contact Form Validation */

// Check the contact form before submitting
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const request = document.getElementById("request").value;
    const details = document.getElementById("details").value.trim();

    let valid = true;

    // Clear old error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("request-error").textContent = "";
    document.getElementById("details-error").textContent = "";

    // Check name
    if (name === "") {
        document.getElementById("name-error").textContent =
            "Please enter your name.";
        valid = false;
    }

    // Check email
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    // Check request type
    if (request === "") {
        document.getElementById("request-error").textContent =
            "Please select a request type.";
        valid = false;
    }

    // Check details
    if (details.length < 10) {
        document.getElementById("details-error").textContent =
            "Please enter at least 10 characters.";
        valid = false;
    }

    // Show a message if everything is correct
    if (valid) {
        alert("Your form looks good! This is a demo website.");
    }
}

// Connect validation to the form
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}
