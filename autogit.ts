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
}
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || n <= 0) {
        return null; // Handle edge cases
    }

    let firstPointer: ListNode | null = head;
    let secondPointer: ListNode | null = head;

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

    // secondPointer now points to the nth node from the end
    return secondPointer;
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

const n = 2; // Find 2nd node from the end
const result = findNthFromEnd(linkedList.head, n);

if (result) {
    console.log(`The ${n}th node from the end has value: ${result.value}`);
} else {
    console.log(`The ${n}th node from the end does not exist.`);
}
