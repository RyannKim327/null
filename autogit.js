// Definition for singly-linked list
class Node {
    int val;
    Node next;
    
    Node(int val) {
        this.val = val;
        this.next = null;
    }
}

boolean hasCycle(Node head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    Node slow = head;
    Node fast = head.next;
    
    while (fast != null && fast.next != null) {
        if (slow == fast) {
            return true; // Cycle detected
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false; // No cycle found
}

// Usage
Node head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = head; // Create a cycle

System.out.println(hasCycle(head)); // Output will be true
