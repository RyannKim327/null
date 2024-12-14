Node findNthFromEnd(Node head, int n) {
    Node slow = head;
    Node fast = head;

    // Move the fast pointer to the nth node from the beginning
    for (int i = 0; i < n; i++) {
        if (fast == null) {
            return null;  // The list is shorter than n
        }
        fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;  // slow is now pointing to the nth node from the end
}
