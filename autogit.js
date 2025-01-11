bool isPalindrome(struct Node* head) {
    struct Node* slow = head;
    struct Node* fast = head;
    struct Node* prev = NULL;

    // Find the middle of the list
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }

    // Reverse the second half of the list
    while (slow != NULL) {
        struct Node* temp = slow->next;
        slow->next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    while (prev != NULL) {
        if (head->value != prev->value) return false;
        head = head->next;
        prev = prev->next;
    }

    return true;
}
public boolean isPalindrome(Node head) {
    Node slow = head;
    Node fast = head;
    Node prev = null;

    // Find the middle of the list
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    while (slow != null) {
        Node temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    while (prev != null) {
        if (head.value != prev.value) return false;
        head = head.next;
        prev = prev.next;
    }

    return true;
}
def is_palindrome(head):
    slow = head
    fast = head
    prev = None

    # Find the middle of the list
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Reverse the second half of the list
    while slow:
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp

    # Compare the first half and the reversed second half
    while prev:
        if head.value != prev.value:
            return False
        head = head.next
        prev = prev.next

    return True
function isPalindrome(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    // Find the middle of the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    while (prev) {
        if (head.value !== prev.value) return false;
        head = head.next;
        prev = prev.next;
    }

    return true;
}
