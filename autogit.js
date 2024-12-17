#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

// Function to find the length of a linked list
int findLength(Node* head) {
    int length = 0;
    Node* current = head;

    while (current != NULL) {
        length++;
        current = current->next;
    }

    return length;
}

// Main function
int main() {
    // Create a sample linked list
    Node* head = new Node();
    head->data = 1;
    
    Node* second = new Node();
    second->data = 2;
    
    Node* third = new Node();
    third->data = 3;
    
    // Connect the nodes
    head->next = second;
    second->next = third;
    third->next = NULL;

    // Find the length of the linked list
    int length = findLength(head);

    cout << "Length of the linked list: " << length << endl;

    return 0;
}
