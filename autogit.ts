class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true; // An empty list or a single node is a palindrome.
    }

    // Step 1: Convert linked list to array
    const values: number[] = [];
    let currentNode: ListNode | null = head;

    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    // Step 2: Check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true; // The linked list is a palindrome
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(1);

console.log(isPalindrome(head)); // true

const head2 = new ListNode(1);
head2.next = new ListNode(2);

console.log(isPalindrome(head2)); // false
