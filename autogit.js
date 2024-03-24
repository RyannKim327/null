<!DOCTYPE html>
<html>
<head>
    <title>Input Example</title>
</head>
<body>
    <label for="userInput">Enter your name:</label>
    <input type="text" id="userInput">
    <button onclick="displayInput()">Submit</button>
    <p id="output"></p>

    <script>
        function displayInput() {
            const userInput = document.getElementById('userInput').value;
            document.getElementById('output').innerText = "Hello, " + userInput + "!";
        }
    </script>
</body>
</html>
