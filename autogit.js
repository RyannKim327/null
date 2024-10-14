Node findNthFromEnd(Node head, int n) {
    Node slowPtr = head;
    Node fastPtr = head;

    // Move fastPtr by n nodes
    for (int i = 0; i < n; i++) {
        if (fastPtr == null) {
            return null; // List is shorter than n
        }
        fastPtr = fastPtr.next;
    }

    // Move both pointers simultaneously
    while (fastPtr != null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }

    // At this point, slowPtr is pointing to the nth node from the end
    return slowPtr;
}
