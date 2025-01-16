interface Person {
  name: string;
  age: number;
}

function greetPerson(person: Person) {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

interface InputFields {
  name: HTMLInputElement;
  age: HTMLInputElement;
}

function readInputFields(): InputFields {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const ageInput = document.getElementById('age') as HTMLInputElement;

  return { name: nameInput, age: ageInput };
}

function handleFormSubmit(event: Event) {
  event.preventDefault();

  const inputFields = readInputFields();
  const person: Person = {
    name: inputFields.name.value,
    age: parseInt(inputFields.age.value, 10)
  };

  greetPerson(person);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleFormSubmit);
});
<!DOCTYPE html>
<html>
<head>
  <title>TypeScript Input Example</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <br />
    <label for="age">Age:</label>
    <input type="number" id="age" />
    <br />
    <button type="submit">Submit</button>
  </form>

  <script src="example.ts"></script>
</body>
</html>
