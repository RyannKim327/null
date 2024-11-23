// Define the node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Function to find the length of a linked list
int findListLength(struct Node* head) {
    int length = 0;
    struct Node* current = head;

    while (current != NULL) {
        length++;
        current = current->next;
    }

    return length;
}
