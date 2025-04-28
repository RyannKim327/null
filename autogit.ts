class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number, next: ListNode | null = null) {
        this.data = data;
        this.next = next;
    }
}
function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const nextNode = current.next;   // Store the next node
        current.next = prev;             // Reverse the link
        prev = current;                  // Move prev forward
        current = nextNode;              // Move current forward
    }

    return prev; // Prev is the new head of the reversed list
}
