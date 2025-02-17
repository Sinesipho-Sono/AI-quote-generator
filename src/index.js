function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "Life is what you make it",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let quoteInput = document.querySelector("#quote-generator");

quoteInput.addEventListener("submit", generateQuote);
