// Define the ListNode class
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int x) { 
        val = x; 
    }
}

// Function to check if a linked list is a palindrome
public boolean isPalindrome(ListNode head) {
    if(head == null || head.next == null) {
        return true;
    }
    
    // Find the middle of the linked list
    ListNode slow = head;
    ListNode fast = head;
    
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    ListNode secondHalf = reverseList(slow.next);
    
    // Compare the first and second halves
    ListNode p1 = head;
    ListNode p2 = secondHalf;
    
    while(p2 != null) {
        if(p1.val != p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return true;
}

// Function to reverse a linked list
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    
    while(curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}
