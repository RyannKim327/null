#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

bool isPalindrome(Node* head) {
    if (!head || !head->next) {
        return true; // An empty list or single node list is considered a palindrome
    }

    Node* slow = head;
    Node* fast = head;
    Node* prev = nullptr;

    while (fast && fast->next) {
        prev = slow;
        slow = slow->next;
        fast = fast->next->next;
    }

    prev->next = nullptr; // Split the list into two halves

    // Reverse the second half of the list
    Node* prevNode = nullptr;
    Node* currentNode = slow;
    Node* nextNode;

    while (currentNode) {
        nextNode = currentNode->next;
        currentNode->next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    Node* p1 = head;
    Node* p2 = prevNode;

    while (p1 && p2) {
        if (p1->data != p2->data) {
            return false; // Not a palindrome
        }
        p1 = p1->next;
        p2 = p2->next;
    }

    // Reconstruct the original linked list
    prev = nullptr;
    currentNode = prevNode;
    while (currentNode) {
        nextNode = currentNode->next;
        currentNode->next = prev;
        prev = currentNode;
        currentNode = nextNode;
    }

    return true; // Palindrome
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(2);
    head->next->next->next->next = new Node(1);

    if (isPalindrome(head)) {
        std::cout << "Linked list is a palindrome" << std::endl;
    } else {
        std::cout << "Linked list is not a palindrome" << std::endl;
    }

    return 0;
}
