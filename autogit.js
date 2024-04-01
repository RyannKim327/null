// Fetching random advice from an API
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    console.log(data.slip.advice);
  })
  .catch(error => {
    console.error('Error fetching advice:', error);
  });
