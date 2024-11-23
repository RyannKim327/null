#include <iostream>

struct Node {
    int data;
    Node* next;
    
    Node(int data) : data(data), next(nullptr) {}
};

Node* reverseLinkedList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;
    
    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    
    head = prev;
    
    return head;
}

void printList(Node* node) {
    while (node != nullptr) {
        std::cout << node->data << " ";
        node = node->next;
    }
    std::cout << std::endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    
    std::cout << "Original Linked List:" << std::endl;
    printList(head);
    
    head = reverseLinkedList(head);
    
    std::cout << "Reversed Linked List:" << std::endl;
    printList(head);
    
    return 0;
}
