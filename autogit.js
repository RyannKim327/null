class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
function findMiddleElement(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
let node5 = new Node(5);
let node4 = new Node(4, node5);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

// Call the function to find the middle element
console.log(findMiddleElement(node1)); // Output: 3
