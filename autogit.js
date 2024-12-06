struct Node {
    int data;
    struct Node* next;
};

bool hasCycle(struct Node* head) {
    if (head == NULL) {
        return false;
    }

    struct Node* slow = head;
    struct Node* fast = head->next;

    while (fast != NULL && fast->next != NULL) {
        if (slow == fast) {
            return true; // Loop detected
        }
        slow = slow->next;
        fast = fast->next->next;
    }

    return false; // No loop found
}
