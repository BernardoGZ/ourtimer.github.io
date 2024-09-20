const targetDate = new Date('October 24, 2024 00:00:00').getTime();

const quotes = [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly. - Sam Keen",
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "Every love story is beautiful, but ours is my favorite.",
    // Add more quotes as needed
];

function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (remainingTime < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = "💖 Time's up! You can see your girlfriend now! 💖";
    }
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

const interval = setInterval(updateCountdown, 1000);
setInterval(displayRandomQuote, 60000); // Display a new quote every minute

updateCountdown(); // Initial call to display the countdown immediately
displayRandomQuote(); // Initial call to display a quote immediately