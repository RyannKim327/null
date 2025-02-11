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
    append(value: number): void {
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

    // Method to find the middle element
    findMiddle(): number | null {
        let slow = this.head;
        let fast = this.head;

        if (!this.head) return null; // If the list is empty

        while (fast && fast.next) {
            slow = slow.next;        // Move slow pointer by 1
            fast = fast.next.next;  // Move fast pointer by 2
        }

        return slow ? slow.value : null; // Returning the value of the middle node
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.findMiddle()); // Output: 3
