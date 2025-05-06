class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;

    // Convert the linked list to an array
    const values: number[] = [];
    let currentNode: ListNode | null = head;

    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    // Check if the array is a palindrome
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
// Create a linked list: 1 -> 2 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

// Check if the linked list is a palindrome
console.log(isPalindrome(head)); // Output: true

// Create a non-palindromic linked list: 1 -> 2 -> 3
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);

console.log(isPalindrome(head2)); // Output: false
