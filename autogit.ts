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

    // Method to find the nth node from the end
    findNthFromEnd(n: number): ListNode | null {
        let first: ListNode | null = this.head;
        let second: ListNode | null = this.head;

        // Move the first pointer n nodes ahead
        for (let i = 0; i < n; i++) {
            if (first === null) {
                return null; // n is larger than the size of the list
            }
            first = first.next;
        }

        // Move both pointers until the first pointer reaches the end
        while (first !== null) {
            first = first.next;
            second = second.next;
        }

        // The second pointer is now at the nth node from the end
        return second;
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const n = 2;
const node = list.findNthFromEnd(n);
if (node) {
    console.log(`The ${n}th node from the end is: ${node.value}`);
} else {
    console.log(`The list is shorter than ${n} nodes.`);
}
