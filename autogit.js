class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// Test example
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log('Original linked list:');
let current = head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}

head = reverseLinkedList(head);

console.log('Reversed linked list:');
current = head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}
