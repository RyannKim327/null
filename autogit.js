<!DOCTYPE html>
<html>
<head>
    <title>User Input Example</title>
</head>
<body>
    <h1>User Input Example</h1>
    <label for="userInput">Enter your name:</label>
    <input type="text" id="userInput">
    <button onclick="displayInput()">Submit</button>
    <p id="output"></p>

    <script>
        function displayInput() {
            var userInput = document.getElementById('userInput').value;
            document.getElementById('output').innerText = 'Hello, ' + userInput + '!';
        }
    </script>
</body>
</html>
