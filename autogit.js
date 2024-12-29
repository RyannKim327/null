#include <iostream>

struct Node {
    int data;
    Node* next;
};

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;

    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

bool isPalindrome(Node* head) {
    Node* slow = head;
    Node* fast = head;
    Node* prev_slow = nullptr;
    Node* mid_node = nullptr;
    bool palindrome = true;

    if (head != nullptr && head->next != nullptr) {
        while (fast != nullptr && fast->next != nullptr) {
            fast = fast->next->next;

            prev_slow = slow;
            slow = slow->next;
        }

        if (fast != nullptr) {
            mid_node = slow;
            slow = slow->next;
        }

        Node* second_half = slow;
        prev_slow->next = nullptr;
        second_half = reverseList(second_half);

        Node* first_half = head;

        while (second_half != nullptr) {
            if (first_half->data != second_half->data) {
                palindrome = false;
                break;
            }
            first_half = first_half->next;
            second_half = second_half->next;
        }

        // Revert the changes to the linked list
        second_half = reverseList(second_half);

        if (mid_node != nullptr) {
            prev_slow->next = mid_node;
            mid_node->next = second_half;
        } else {
            prev_slow->next = second_half;
        }
    }

    return palindrome;
}

Node* createNode(int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;
    return newNode;
}

int main() {
    Node* head = createNode(1);
    head->next = createNode(2);
    head->next->next = createNode(3);
    head->next->next->next = createNode(2);
    head->next->next->next->next = createNode(1);

    if (isPalindrome(head)) {
        std::cout << "Linked list is a palindrome." << std::endl;
    } else {
        std::cout << "Linked list is not a palindrome." << std::endl;
    }

    return 0;
}
