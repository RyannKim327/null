<!DOCTYPE html>
<html>
<head>
    <title>Random JavaScript Code</title>
    <script>
        function displayInput() {
            var userInput = document.getElementById("input").value;
            alert("You entered: " + userInput);
        }
    </script>
</head>
<body>
    <h1>Random JavaScript Code</h1>
    <label for="input">Enter some text:</label>
    <input type="text" id="input">
    <button onclick="displayInput()">Display</button>
</body>
</html>
