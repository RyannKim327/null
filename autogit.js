#include <iostream>
#include <stack>

using namespace std;

struct Node {
    int data;
    Node* next;
    
    Node(int value) : data(value), next(nullptr) {}
};

bool isPalindrome(Node* head) {
    if (head == nullptr || head->next == nullptr) {
        // An empty list or a list with one node is considered a palindrome
        return true;
    }

    Node* slow = head;
    Node* fast = head;
    stack<int> firstHalf;

    while (fast != nullptr && fast->next != nullptr) {
        firstHalf.push(slow->data);
        slow = slow->next;
        fast = fast->next->next;
    }

    // Handle odd number of nodes
    if (fast != nullptr) {
        slow = slow->next;
    }

    while (slow != nullptr) {
        if (slow->data != firstHalf.top()) {
            return false;
        }
        firstHalf.pop();
        slow = slow->next;
    }

    return true;
}

int main() {
    // Create a linked list: 1->2->3->2->1
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(2);
    head->next->next->next->next = new Node(1);

    if (isPalindrome(head)) {
        cout << "Linked list is a palindrome." << endl;
    } else {
        cout << "Linked list is not a palindrome." << endl;
    }

    return 0;
}
