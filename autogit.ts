class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    
    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while (fast && fast.next) {
        slow = slow?.next || null;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    // Step 3: Compare the first half and the reversed second half
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // This is now the head of the reversed second half
    
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    
    return true;
}
