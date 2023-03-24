<!DOCTYPE html>
<html>
  <head>
    <title>Current Date and Time</title>
  </head>
  <body>
    <button onclick="showDateTime()">Show Date and Time</button>
    <p id="datetime"></p>
    <script>
      function showDateTime() {
        const dateTime = new Date();
        const dateTimeString = dateTime.toLocaleString();
        const dateTimeElement = document.getElementById('datetime');
        dateTimeElement.innerHTML = dateTimeString;
      }
    </script>
  </body>
</html>
