class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fastPointer: ListNode | null = head;
    let slowPointer: ListNode | null = head;

    // Move the fastPointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (fastPointer === null) {
            return null; // n is larger than the length of the list
        }
        fastPointer = fastPointer.next;
    }

    // Move both pointers until fastPointer reaches the end of the list
    while (fastPointer !== null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer!.next; // Using non-null assertion since we have ensured slowPointer is not null
    }

    // slowPointer is now at the nth node from the end
    return slowPointer;
}
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    let head: ListNode | null = null;
    let tail: ListNode | null = null;

    for (let num of arr) {
        const newNode = new ListNode(num);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail!.next = newNode;
            tail = newNode;
        }
    }
    
    return head;
}

// Example usage
const linkedList = createLinkedList([1, 2, 3, 4, 5]);
const n = 2;
const nthNode = findNthFromEnd(linkedList, n);

if (nthNode) {
    console.log(nthNode.value); // Outputs: 4
} else {
    console.log("Node not found.");
}
