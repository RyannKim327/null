function reverseLinkedList(head) {
    let previous = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous; // New head of the reversed linked list
}
// Linked list node structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log('Original Linked List:');
let current = head;
while (current) {
    console.log(current.value);
    current = current.next;
}

let reversedHead = reverseLinkedList(head);

console.log('Reversed Linked List:');
current = reversedHead;
while (current) {
    console.log(current.value);
    current = current.next;
}
Original Linked List:
1
2
3
4
Reversed Linked List:
4
3
2
1
