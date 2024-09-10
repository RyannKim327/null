#include <iostream>
#include <vector>
using namespace std;

// Node definition for the linked list
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Function to check if a linked list is a palindrome
bool isPalindrome(Node* head) {
    vector<int> values;
    Node* current = head;
    
    // Store the elements of the linked list in an array
    while (current != nullptr) {
        values.push_back(current->data);
        current = current->next;
    }
    
    int i = 0, j = values.size() - 1;
    
    // Compare elements from the beginning and end of the array
    while (i < j) {
        if (values[i] != values[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
}

// Main function to test the palindrome check
int main() {
    Node *head = new Node(1);
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
