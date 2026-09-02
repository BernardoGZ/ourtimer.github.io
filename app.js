const targetDate = new Date('October 23, 2026 14:50:00').getTime();

const quotes = [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly. - Sam Keen",
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "Every love story is beautiful, but ours is my favorite.",
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "True love stories never have endings. - Richard Bach",
    "You are my today and all of my tomorrows. - Leo Christopher",
    "The best love is the kind that awakens the soul and makes us reach for more. - Nicholas Sparks",
    "In all the world, there is no heart for me like yours. - Maya Angelou",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
    "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "Love does not consist in gazing at each other, but in looking outward together in the same direction. - Antoine de Saint-Exupéry",
    "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "Where there is love, there is life. - Mahatma Gandhi",
    "Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
    "You don't marry someone you can live with, you marry someone you cannot live without.",
    "The greatest thing you'll ever learn is just to love and be loved in return. - Eden Ahbez",
    "Love is the bridge between you and everything. - Rumi",
    "If I had a flower for every time I thought of you, I could walk in my garden forever. - Alfred Tennyson",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
    "To love is nothing. To be loved is something. But to love and be loved, that's everything. - T. Tolis",
    "Love is not finding someone to live with. It's finding someone you can't live without.",
    "Love is the only reality and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation. - Rabindranath Tagore",
    "The giving of love is an education in itself. - Eleanor Roosevelt",
    "Love is like the wind, you can't see it but you can feel it. - Nicholas Sparks",
    "You are the source of my joy, the center of my world and the whole of my heart.",
    "I love you not only for what you are, but for what I am when I am with you. - Elizabeth Barrett Browning",
    "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you. - A. A. Milne",
    "Love is the master key that opens the gates of happiness. - Oliver Wendell Holmes",
    "To the world, you may be one person, but to one person you are the world. - Bill Wilson",
];

function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    if (remainingTime < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText =
            "💖 ¡Ya puedes ver a tu linda! 💖";
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteEl = document.getElementById('quote');
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.innerText = quotes[randomIndex];
        quoteEl.style.opacity = 1;
    }, 300);
}

const interval = setInterval(updateCountdown, 1000);
setInterval(displayRandomQuote, 60000); // Display a new quote every minute

updateCountdown(); // Initial call to display the countdown immediately
displayRandomQuote(); // Initial call to display a quote immediately