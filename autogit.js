class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function findMiddleElement(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Find the middle element
const middleElement = findMiddleElement(node1);
console.log('Middle element:', middleElement.value);
