# Random Quote Generator

This JavaScript code generates and displays random quotes on a web page. Users can click a button to get a new random quote. The quotes are stored in an array, and a random quote is selected from the array and displayed when the button is clicked.

## Usage

To use this random quote generator in your web page, follow these steps:

1. Include the HTML structure for your web page as shown in your HTML file.

2. Create a `<p>` element with the `id="text"` to display the random quote.

3. Create a button with the `id="new-quote"` to trigger the generation of a new random quote.

4. Define an array called `quotes` containing the quotes you want to display.

5. Include the JavaScript code in a separate JavaScript file (e.g., `ng_quotes.js`) or within a `<script>` tag in your HTML file.

6. Use the `quote.innerHTML` property to display the initial random quote when the page loads.

7. Add an event listener to the "New Quote" button to change the displayed quote when the button is clicked.

## Code Explanation

- The `quotes` array contains a collection of quotes that you want to display randomly.

- The `getRandomQuote()` function generates a random index within the range of the `quotes` array to select a random quote.

- The initial quote is displayed when the page loads using the `quote.innerHTML` property.

- An event listener is added to the "New Quote" button (`newQuote`). When the button is clicked, a new random quote is selected and displayed on the web page.

## Customization

You can customize this random quote generator by modifying the `quotes` array to include your own collection of quotes. You can also style the web page further and change the button text as needed.

Feel free to adapt and integrate this code into your web projects to add a dynamic random quote feature.

## License

This code is provided under the [MIT License](LICENSE.md). You are free to use and modify it as per the terms of the license.

