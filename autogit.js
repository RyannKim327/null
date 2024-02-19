<!DOCTYPE html>
<html>
<head>
    <title>Async Task Example</title>
    <script>
        function connectAsync() {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        console.log(xhr.responseText);
                    } else {
                        console.error('Error:', xhr.statusText);
                    }
                }
            };

            xhr.open('GET', 'https://api.example.com/data', true); // Connecting to a sample API endpoint
            xhr.send();
        }
    </script>
</head>
<body>
    <button onclick="connectAsync()">Connect</button>
</body>
</html>
