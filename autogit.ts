interface UserName {
  title: string;
  first: string;
  last: string;
}

interface User {
  name: UserName;
  email: string;
  phone: string;
}

interface RandomUserApiResponse {
  results: User[];
}

async function fetchRandomUser(): Promise<User | null> {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return null;
    }
    const data: RandomUserApiResponse = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

// Use the function
fetchRandomUser().then(user => {
  if (user) {
    console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
  } else {
    console.log('Failed to fetch user.');
  }
});
