class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindromeLinkedList(head) {
    let current = head;
    let array = [];

    // Traverse the linked list and push each node's value into the array
    while (current !== null) {
        array.push(current.value);
        current = current.next;
    }

    // Create a reversed copy of the array
    let reversedArray = array.slice().reverse();

    // Compare the original array with the reversed copy
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== reversedArray[i]) {
            return false;
        }
    }

    return true;
}

// Example linked list: 1 -> 2 -> 3 -> 2 -> 1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isPalindromeLinkedList(head)); // Output: true
