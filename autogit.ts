class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getLinkedListLength(head: ListNode | null): number {
    let length = 0;
    let current = head;
    
    while (current !== null) {
        length++;
        current = current.next;
    }
    
    return length;
}
function getLinkedListLengthRecursive(head: ListNode | null): number {
    if (head === null) return 0;
    return 1 + getLinkedListLengthRecursive(head.next);
}
function getLengthWithCounter(head: ListNode | null): number {
    let count = 0;
    
    for (let current = head; current !== null; current = current.next) {
        count++;
    }
    
    return count;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(getLinkedListLength(head)); // Output: 5
