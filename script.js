const QUOTES = [
    { text: "You can totally do this!",                      source: "" },
    { text: "Try again. Fail again. Fail Better.",           source: "Samuel Beckett" },
    { text: "I can and I will!",                             source: "" },
    { text: "Take the risk or lose the chance!",             source: "" },
    { text: "No guts, no story!",                            source: "Chris Brady" },
    { text: "Fight till the last gas!",                      source: "William Shakespeare" },
    { text: "Stay hungry. Stay foolish.",                    source: "Steve Jobs" },
    { text: "The past does not equal the future!",           source: "Tony Robbins" },
    { text: "You can do anything you set your mind to!",     source: "" },
    { text: "We are twice armed if we fight with faith!",    source: "Plato" },
    { text: "The wisest mind has something yet to learn!",   source: "George Santanaya" },
    { text: "Persistence guaranteed that results are inevitable!", source: "Paramahansa Yogananda" },
    { text: "I would rather die on my feet than live on my knees.", source: "Euripides" },
    { text: "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got!", source: "Tim Cook" },
    { text: "You matter.", source: ""},
]

let inspireButtonElement = document.getElementById("inspire-button"),
    quoteBoxElement = document.getElementById("quote-box"),
    quoteTextElement = document.getElementById("quote-text"),
    quoteSourceElement = document.getElementById("quote-source");


function getRandomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
    
inspireButtonElement.onclick = function () {
    var quote = getRandomQuote();

    quoteTextElement.textContent = quote.text;
    quoteSourceElement.textContent = quote.source;

    if (!inspireButtonElement.classList.contains("bottom"))
        inspireButtonElement.classList.add("bottom");
    if (!quoteBoxElement.classList.contains("show"))
        quoteBoxElement.classList.add("show");
}

