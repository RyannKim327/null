async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: { results: Array<{ name: { first: string; last: string } }> } = await response.json();
    const user = data.results[0];
    console.log(`Random user: ${user.name.first} ${user.name.last}`);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

fetchRandomUser();
