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

    // Method to append a new node at the end of the list
    append(value: number) {
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
            slow = slow!.next; // Move slow pointer by 1
            fast = fast.next.next; // Move fast pointer by 2
        }
        
        return slow; // Slow will be at the middle element
    }

    // Utility method to print the list (for debugging)
    printList(): void {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Linked List:");
list.printList();

const middleNode = list.findMiddle();
if (middleNode) {
    console.log("The middle element is:", middleNode.value);
} else {
    console.log("The list is empty.");
}
