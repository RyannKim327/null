class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer one step
        fast = fast.next.next;     // Move fast pointer two steps
        
        if (slow === fast) {       // If they meet, there's a cycle
            return true;
        }
    }
    
    return false; // No cycle found
}

// Example usage
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
head.next = second;
second.next = third;
third.next = second; // Creates a cycle

console.log(hasCycle(head)); // Output: true
