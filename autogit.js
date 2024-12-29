#include <iostream>

struct Node {
    int data;
    Node* next;
};

bool hasCycle(Node* head) {
    if (head == nullptr || head->next == nullptr) {
        return false;
    }

    Node* slow = head;
    Node* fast = head->next;

    while (fast != nullptr && fast->next != nullptr) {
        if (slow == fast) {
            return true; // cycle detected
        }
        slow = slow->next;
        fast = fast->next->next;
    }

    return false; // no cycle detected
}

int main() {
    Node* head = new Node{1, nullptr};
    head->next = new Node{2, nullptr};
    head->next->next = new Node{3, nullptr};
    head->next->next->next = head->next; // create a cycle

    if (hasCycle(head)) {
        std::cout << "Linked list contains a cycle." << std::endl;
    } else {
        std::cout << "Linked list does not contain a cycle." << std::endl;
    }

    return 0;
}
