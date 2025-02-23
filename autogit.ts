class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

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
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to find the middle element of the linked list
    findMiddle(): ListNode | null {
        let slow: ListNode | null = this.head;
        let fast: ListNode | null = this.head;

        while (fast && fast.next) {
            slow = slow?.next || null; // Move slow by 1
            fast = fast.next.next; // Move fast by 2
        }

        return slow; // slow is now at the middle
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const middleNode = list.findMiddle();
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: The middle element is: 3
}
