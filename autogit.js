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

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Print the original linked list
let current = node1;
while (current) {
    console.log(current.value);
    current = current.next;
}

// Reverse the linked list
let reversedHead = reverseLinkedList(node1);

// Print the reversed linked list
current = reversedHead;
while (current) {
    console.log(current.value);
    current = current.next;
}
