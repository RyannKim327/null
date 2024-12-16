// Definition for a singly-linked list node
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public ListNode findMiddleElement(ListNode head) {
    if (head == null) {
        return null;
    }

    ListNode slow_ptr = head;
    ListNode fast_ptr = head;

    while (fast_ptr != null && fast_ptr.next != null) {
        slow_ptr = slow_ptr.next;
        fast_ptr = fast_ptr.next.next;
    }

    return slow_ptr;
}
