function showQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}
function generateQuote(event) {
  event.preventDefault();
  let userInput = document.querySelector("#userPrompt");
  let apiKey = "dfc8b6f54adt4d38bbe0o47364a63d82";
  let context =
    "You are a motivation and philosophy expert who makes quotes for people to get inspired. Your mission is to generate a quote.  Make sure your quotes are easy to understand, do not exceed 5 lines when stating the quote. Only provide one quote. Make sure to follow the users instructions.Sign the quote with  <strong> - SheCodes AI</strong> and place this element underneath the quote.";
  let prompt = ` Users instructions: Generate a quote about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${userInput.value}</div>`;
  axios.get(apiUrl).then(showQuote);
}
let quoteInput = document.querySelector("#quote-generator");
quoteInput.addEventListener("submit", generateQuote);
