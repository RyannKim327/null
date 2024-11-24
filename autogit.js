int find_length(Node* head) {
    int length = 0;
    Node* current = head;
    
    while (current != NULL) {
        length++;
        current = current->next;
    }
    
    return length;
}
