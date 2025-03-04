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

    // A method to append a node to the linked list
    append(value: number): void {
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

    // A method to print the linked list
    printList(): void {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log('null');
    }

    // A method to reverse the linked list
    reverse(): void {
        let prev: ListNode | null = null;
        let current: ListNode | null = this.head;
        let next: ListNode | null = null;

        while (current !== null) {
            next = current.next; // store next node
            current.next = prev; // reverse the link
            prev = current; // move prev to current
            current = next; // move to next node
        }
        this.head = prev; // update head to the new first element
    }
}

// Example Usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Original Linked List:");
linkedList.printList();

linkedList.reverse();

console.log("Reversed Linked List:");
linkedList.printList();
