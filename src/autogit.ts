class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}
function findMiddle(head: ListNode | null): number | null {
    if (!head) return null; // Handle the case where the list is empty

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;          // Move slow pointer by one step
        fast = fast.next.next;      // Move fast pointer by two steps
    }

    // When the loop ends, slow points to the middle element
    return slow!.data;
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
const list = createLinkedList([1, 2, 3, 4, 5]); // Odd-length list
console.log(findMiddle(list)); // Output: 3

const list2 = createLinkedList([1, 2, 3, 4, 5, 6]); // Even-length list
console.log(findMiddle(list2)); // Output: 4 (second middle element)
