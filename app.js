const generateBtn = document.getElementById('generateBtn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function fetchQuote() {
    try {
        generateBtn.innerText = 'Loading...';
        const response = await fetch("https://api.quotable.io/random?nocache=" + new Date().getTime(), {
            cache: "no-store"
        });
        const data = await response.json();
        quote.innerText = data.content;
        author.innerText = ` – ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quote.innerText = "An error occurred while fetching the quote.";
        author.innerText = "";
    } finally {
        generateBtn.textContent = 'Generate New Quote';
    }
}

generateBtn.addEventListener('click', fetchQuote);