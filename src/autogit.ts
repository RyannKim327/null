interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[] | null> {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const users: User[] = await response.json();

    // Log the users to the console
    console.log("Fetched Users:", users);

    return users;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching users:", error);
    return null;
  }
}

// Call the function and handle the result
fetchUsers().then((users) => {
  if (users) {
    users.forEach((user) => {
      console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  } else {
    console.log("No users fetched.");
  }
});
Fetched Users: [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
  ...
]
User ID: 1, Name: Leanne Graham, Email: Sincere@april.biz
User ID: 2, Name: Ervin Howell, Email: Shanna@melissa.tv
...
Error fetching users: Error: HTTP error! Status: 404
No users fetched.
