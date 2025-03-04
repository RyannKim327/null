// Define the Node structure for the linked list
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Define the LinkedList class
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the list
    add(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    // Method to find the middle element
    findMiddle(): number | null {
        let slow: ListNode | null = this.head;
        let fast: ListNode | null = this.head;

        while (fast && fast.next) {
            slow = slow?.next || null;   // Move slow pointer by one step
            fast = fast.next.next;       // Move fast pointer by two steps
        }

        return slow ? slow.value : null; // Return the middle value or null if empty
    }
}

// Usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.findMiddle()); // Output: 3

const list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(3);
console.log(list2.findMiddle()); // Output: 2
