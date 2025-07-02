class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // Step 1: Find middle using slow and fast pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let secondHalfReversed = reverseList(slow);

    // Step 3: Compare both halves
    let p1: ListNode | null = head;
    let p2: ListNode | null = secondHalfReversed;

    let result = true;
    while (result && p2) {
        if (p1!.val !== p2.val) {
            result = false;
        }
        p1 = p1!.next;
        p2 = p2.next;
    }

    // Step 4 (Optional): Restore the original list
    reverseList(secondHalfReversed);

    return result;
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}
const node5 = new ListNode(1);
const node4 = new ListNode(2, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(isPalindrome(node1)); // Output: true
