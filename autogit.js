#include <iostream>
#include <stack>
using namespace std;

struct Node {
    int data;
    Node* next;
};

bool isPalindrome(Node* head) {
    stack<int> s;
    Node* curr = head;

    // Traverse the linked list and store values in a stack
    while (curr != NULL) {
        s.push(curr->data);
        curr = curr->next;
    }

    // Traverse the linked list again and compare elements with stack
    curr = head;
    while (curr != NULL) {
        int top = s.top();
        s.pop();

        if (curr->data != top) {
            return false;
        }

        curr = curr->next;
    }

    return true;
}

int main() {
    Node* head = new Node{1, new Node{2, new Node{3, new Node{2, new Node{1, NULL}}}}};
    if (isPalindrome(head)) {
        cout << "The linked list is a palindrome." << endl;
    } else {
        cout << "The linked list is not a palindrome." << endl;
    }

    return 0;
}
