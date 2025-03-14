// Define the LinkedList Node class
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to find the middle of the linked list
function findMiddleElement(head: ListNode | null): number | null {
    // If the list is empty, return null
    if (!head) return null;

    // Initialize slow and fast pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Move fast pointer two steps and slow pointer one step
    while (fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // If the list has even number of nodes, return the second middle node
    // If the list has odd number of nodes, slow will be at the middle
    return slow ? slow.val : null;
}

// Example usage
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

// Test cases
const list1 = createLinkedList([1, 2, 3, 4, 5]); // Odd number of nodes
console.log(findMiddleElement(list1)); // Output: 3

const list2 = createLinkedList([1, 2, 3, 4, 5, 6]); // Even number of nodes
console.log(findMiddleElement(list2)); // Output: 3
