<!DOCTYPE html>
<html>
  <head>
    <title>User Input Example</title>
    <script>
      function displayInput() {
        var userInput = document.getElementById("inputField").value;
        document.getElementById("output").innerHTML = "User Input: " + userInput;
      }
    </script>
  </head>
  <body>
    <h1>User Input Example</h1>
    <label for="inputField">Enter something:</label>
    <input type="text" id="inputField" />
    <button onclick="displayInput()">Display</button>
    <p id="output"></p>
  </body>
</html>
