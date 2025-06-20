// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the middle element of a linked list
function findMiddle(head: ListNode | null): number | null {
    if (!head) return null; // Handle empty list case

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps
    }

    // At this point, the slow pointer is at the middle
    return slow!.value;
}

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Example usage
const list = createLinkedList([1, 2, 3, 4, 5]); // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
console.log(findMiddle(list)); // Output: 3 (middle element)

const evenList = createLinkedList([1, 2, 3, 4, 5, 6]); // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log(findMiddle(evenList)); // Output: 4 (second middle element in an even-length list)
