const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Every moment is a fresh beginning.",
    author: "T.S. Eliot"
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('new-quote');

function getRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = `"${random.text}"`;
    authorEl.textContent = `– ${random.author}`;
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);
}

button.addEventListener('click', getRandomQuote);

// Add keyboard accessibility (Enter key)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') getRandomQuote();
});

// Load first quote on page load
window.onload = getRandomQuote;
