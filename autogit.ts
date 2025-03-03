class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let main_ptr: ListNode | null = head;
    let ref_ptr: ListNode | null = head;

    // Move ref_ptr to nth node from head
    let count = 0;
    while (count < n) {
        if (ref_ptr === null) {
            // If n is greater than the number of nodes
            return null;
        }
        ref_ptr = ref_ptr.next;
        count++;
    }

    // Move both pointers until ref_ptr reaches the end
    while (ref_ptr !== null) {
        main_ptr = main_ptr?.next || null;
        ref_ptr = ref_ptr.next;
    }

    return main_ptr; // main_ptr is now pointing to the nth node from the end
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the 2nd node from the end
const nthNode = findNthFromEnd(head, 2);
if (nthNode) {
    console.log(nthNode.value); // Output: 4
} else {
    console.log("Node not found");
}
