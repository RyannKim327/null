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

    findNthFromEnd(n: number): ListNode | null {
        let mainPointer = this.head;
        let referencePointer = this.head;

        // Move referencePointer `n` nodes ahead
        let count = 0;
        while (count < n) {
            if (referencePointer === null) {
                console.log("The linked list has fewer than n nodes.");
                return null; // If n is greater than the number of nodes
            }
            referencePointer = referencePointer.next;
            count++;
        }

        // Move both pointers until referencePointer reaches the end
        while (referencePointer) {
            mainPointer = mainPointer!.next; // Use non-null assertion
            referencePointer = referencePointer.next;
        }

        return mainPointer; // This will be the nth node from the end
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
    console.log(`The linked list has fewer than ${n} nodes.`);
}
