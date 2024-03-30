const apiUrl = 'https://api.spacexdata.com/v4/launches/upcoming';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(launch => {
      console.log(`Mission Name: ${launch.name}`);
      console.log(`Rocket Name: ${launch.rocket}`);
      console.log(`Launch Date: ${new Date(launch.date_utc).toUTCString()}`);
      console.log('------------------------------------------');
    });
  })
  .catch(error => {
    console.log('An error occurred while fetching data:', error);
  });
