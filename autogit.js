#include <iostream>

struct Node {
    int data;
    Node* next;
    
    Node(int value) : data(value), next(nullptr) {}
};

int LinkedListLength(Node* head) {
    int length = 0;
    Node* current = head;
    
    while (current != nullptr) {
        length++;
        current = current->next;
    }
    
    return length;
}

int main() {
    // Create a linked list
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    
    // Calculate the length of the linked list
    int length = LinkedListLength(head);
    
    std::cout << "Length of the linked list: " << length << std::endl;
    
    return 0;
}
