/* Node structure for the linked list */
struct Node {
    int data;
    struct Node* next;
};

/* Function to find the length of a linked list */
int findLinkedListLength(struct Node* head) {
    int length = 0;
    struct Node* current = head;

    while (current != NULL) {
        length++;
        current = current->next;
    }

    return length;
}
