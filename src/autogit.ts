interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON and return it as an array of User objects
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Example usage
(async () => {
  try {
    const users = await fetchUsers();
    console.log('Fetched Users:', users);

    // Display user names and emails
    users.forEach(user => {
      console.log(`User: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Failed to process users:', error);
  }
})();
Fetched Users: [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', ... },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', ... },
  ...
]
User: Leanne Graham, Email: Sincere@april.biz
User: Ervin Howell, Email: Shanna@melissa.tv
...
