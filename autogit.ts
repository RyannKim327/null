// Step 1: Define a node structure.
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Step 2: Create the linked list.
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node to the list
    add(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Step 3: Function to find the middle element.
    findMiddle(): ListNode | null {
        let slow: ListNode | null = this.head;
        let fast: ListNode | null = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow?.next || null; // Move slow one step
            fast = fast.next.next; // Move fast two steps
        }

        return slow; // slow will be at the middle when fast reaches the end
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

const middleNode = linkedList.findMiddle();
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: The middle element is: 3
}
