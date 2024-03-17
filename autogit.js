
function findNthFromEnd(head, n) {
    let ptr1 = head;
    let ptr2 = head;

    // Move ptr2 forward by n nodes
    for (let i = 0; i < n; i++) {
        if (ptr2 === null) {
            return null; // not enough nodes in the list
        }
        ptr2 = ptr2.next;
    }

    // Move ptr1 and ptr2 together until ptr2 reaches the end
    while (ptr2 !== null) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    // ptr1 will now point to the nth node from the end
    return ptr1;
}
