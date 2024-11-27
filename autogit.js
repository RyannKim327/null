#include <iostream>

struct Node {
    int data;
    Node* next;
};

Node* findNthNodeFromEnd(Node* head, int n) {
    if (head == nullptr) {
        return nullptr;
    }

    int length = 0;
    Node* current = head;

    // Calculate the length of the linked list
    while (current != nullptr) {
        length++;
        current = current->next;
    }

    // Calculate the position of the nth node from the beginning
    int positionFromStart = length - n;

    // Move the current pointer to the node at positionFromStart
    current = head;
    for (int i = 0; i < positionFromStart && current != nullptr; i++) {
        current = current->next;
    }

    return current;
}

int main() {
    Node* head = new Node{1, new Node{2, new Node{3, new Node{4, new Node{5, nullptr}}}}};
    int n = 2;
    Node* result = findNthNodeFromEnd(head, n);

    if (result) {
        std::cout << "The data in the " << n << "th node from the end is: " << result->data << std::endl;
    } else {
        std::cout << "The node does not exist." << std::endl;
    }

    return 0;
}
