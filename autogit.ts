// Definition for singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// Approach 1: Using Array Conversion (Simple but O(n) extra space)
function isPalindromeWithArray(head: ListNode | null): boolean {
    // Convert linked list to array
    const values: number[] = [];
    let current = head;
    
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    // Check if array is palindrome
    let left = 0;
    let right = values.length - 1;
    
    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Approach 2: Reverse and Compare (O(1) extra space)
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    
    // Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while (fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the list
    let secondHalf = reverseList(slow!.next);
    let firstHalf = head;
    
    // Compare both halves
    while (secondHalf) {
        if (firstHalf!.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

// Helper function to reverse a linked list
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
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    
    const head = new ListNode(values[0]);
    let current = head;
    
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    
    return head;
}

// Test cases
const palindromeList1 = createLinkedList([1,2,2,1]);
const palindromeList2 = createLinkedList([1,2,3,2,1]);
const nonPalindromeList = createLinkedList([1,2,3,4]);

console.log(isPalindrome(palindromeList1));  // true
console.log(isPalindrome(palindromeList2));  // true
console.log(isPalindrome(nonPalindromeList));  // false
