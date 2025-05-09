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

    // Method to append a new node at the end of the linked list
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

    // Method to find the middle element of the linked list
    findMiddle(): ListNode | null {
        if (!this.head) {
            return null; // The list is empty
        }

        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next; // Move slow pointer by 1
            fastPointer = fastPointer.next.next; // Move fast pointer by 2
        }

        return slowPointer; // Slow pointer is now at the middle
    }
}

// Example Usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

const middleNode = linkedList.findMiddle();
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`);
} else {
    console.log("The linked list is empty.");
}
