// Node definition
class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Function to find the nth node from the end of a linked list
public Node findNthNodeFromEnd(Node head, int n) {
    Node first = head;
    Node second = head;

    // Move the 'first' pointer to the n-th node from the beginning
    for(int i = 0; i < n; i++) {
        if(first == null) {
            return null; // List size is less than n
        }
        first = first.next;
    }

    // Move the 'first' and 'second' pointers simultaneously
    while(first != null) {
        first = first.next;
        second = second.next;
    }

    return second;
}
