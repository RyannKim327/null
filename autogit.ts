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

    // Method to find the nth node from the end
    findNthFromEnd(n: number): ListNode | null {
        let firstPointer: ListNode | null = this.head;
        let secondPointer: ListNode | null = this.head;

        // Move firstPointer n nodes ahead
        for (let i = 0; i < n; i++) {
            if (firstPointer === null) {
                return null; // n is greater than the length of the list
            }
            firstPointer = firstPointer.next;
        }

        // Move both pointers until firstPointer reaches the end
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        // secondPointer is now at the nth node from the end
        return secondPointer;
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const n = 2;
const nthNode = list.findNthFromEnd(n);
if (nthNode) {
    console.log(`The ${n}th node from the end is: ${nthNode.value}`);
} else {
    console.log(`The list is shorter than ${n} nodes.`);
}
