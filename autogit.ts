// Definition for a singly linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Definition for the linked list
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node to the linked list
    append(value: number) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log("Length of linked list:", list.length()); // Output: Length of linked list: 3
