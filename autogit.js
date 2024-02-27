function hasCycle(head) {
    if (!head || !head.next) {
        return false; // If the list is empty or has only one node, there is no cycle
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // If fast pointer reaches the end, there is no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // If slow and fast pointers meet, there is a cycle
}
