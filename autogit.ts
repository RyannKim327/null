// Definition for singly-linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the middle element of the linked list
function findMiddle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null; // If the list is empty
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Move slow by 1 and fast by 2
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // Slow is now at the middle node
}

// Example usage
function main() {
    // Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const middle = findMiddle(head);
    if (middle) {
        console.log("The middle element is:", middle.value); // Output: 3
    } else {
        console.log("The linked list is empty.");
    }
}

main();
