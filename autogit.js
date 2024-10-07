Node findMiddle(Node head) {
    Node slowPtr = head;
    Node fastPtr = head;

    while (fastPtr != null && fastPtr.next != null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    return slowPtr;
}
