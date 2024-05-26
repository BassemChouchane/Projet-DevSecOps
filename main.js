// Define an array of quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display the quote
function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
    document.getElementById('quoteContainer').style.display = 'block';
}

// Function to handle getting a quote
function getQuote() {
    displayQuote();
    sendEmailForm();
}

// Function to send email form
function sendEmailForm() {
    const formData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        review: document.getElementById('userReview').value,
    };

    fetch('send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully');
            // Reset form fields here if needed
        } else {
            console.error('Error submitting form');
        }
    })
    .catch(error => console.error('Error:', error));
}
