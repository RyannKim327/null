function randomSort(arr: number[]): number[] {
    const result: number[] = [];
    
    while (arr.length > 0) {
        // Pick a random index from the array
        const randomIndex = Math.floor(Math.random() * arr.length);
        
        // Find minimum element in the array
        const minElement = Math.min(...arr);
        
        // Push the minimum element to the result and remove it from the original array
        result.push(minElement);
        arr.splice(arr.indexOf(minElement), 1);
    }
    
    return result;
}

// Usage
const randomArray = [5, 3, 8, 4, 2];
const sortedArray = randomSort(randomArray);
console.log("Original Array:", randomArray);
console.log("Sorted Array:", sortedArray);
