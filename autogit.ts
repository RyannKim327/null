// HTML structure
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// Create a text input and a button
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type something...';

const button = document.createElement('button');
button.textContent = 'Submit';

// Create a paragraph to display the output
const output = document.createElement('p');

// Append elements to the app container
appContainer.appendChild(input);
appContainer.appendChild(button);
appContainer.appendChild(output);

// Add an event listener for the button
button.addEventListener('click', () => {
    const userInput: string = input.value; // Get the value from the input
    output.textContent = `You entered: ${userInput}`; // Display the input in the output paragraph
    input.value = ''; // Clear input field
});

// For a complete HTML document, the below could be in a script tag in an HTML file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Input Example</title>
</head>
<body>
    <script src="path_to_your_compiled_javascript.js"></script>
</body>
</html>
