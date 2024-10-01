// Define an array of integers
int[] numbers = {4, 2, 7, 1, 5};

// Sort the array in ascending order
Arrays.sort(numbers);

// Print the sorted array
System.out.println("Sorted array in ascending order:");
for (int number : numbers) {
    System.out.print(number + " ");
}

// Sort the array in descending order
Arrays.sort(numbers);
Arrays.sort(numbers, Collections.reverseOrder());

// Print the sorted array
System.out.println("\nSorted array in descending order:");
for (int number : numbers) {
    System.out.print(number + " ");
}
