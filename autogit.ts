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

    // Method to find the middle element
    findMiddle(): number | null {
        let slowPointer: ListNode | null = this.head;
        let fastPointer: ListNode | null = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer ? slowPointer.next : null; // Move slow pointer by 1
            fastPointer = fastPointer.next.next; // Move fast pointer by 2
        }

        return slowPointer ? slowPointer.value : null; // Return the value of the middle node
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log(linkedList.findMiddle()); // Output: 3
