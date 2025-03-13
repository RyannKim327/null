class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    // If list is empty or has only one node, it's a palindrome
    if (!head || !head.next) return true;
    
    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while (fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the list
    let secondHalf = reverseList(slow!.next);
    
    // Step 3: Compare first and second half
    let firstHalf = head;
    
    while (secondHalf) {
        if (firstHalf!.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    
    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
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
console.log(isPalindrome(createLinkedList([1,2,2,1]))); // true
console.log(isPalindrome(createLinkedList([1,2]))); // false
console.log(isPalindrome(createLinkedList([1]))); // true
