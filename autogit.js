#include <iostream>
#include <stack>
using namespace std;

// Definition for a singly-linked list node
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool isPalindrome(ListNode* head) {
    stack<int> stk;
    ListNode* curr = head;

    while (curr != nullptr) {
        stk.push(curr->val);
        curr = curr->next;
    }

    curr = head;
    while (!stk.empty()) {
        if (curr->val != stk.top()) {
            return false;
        }
        stk.pop();
        curr = curr->next;
    }

    return true;
}

int main() {
    // Create a sample linked list: 1 -> 2 -> 3 -> 2 -> 1
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(2);
    head->next->next->next->next = new ListNode(1);

    if (isPalindrome(head)) {
        cout << "Linked list is a palindrome." << endl;
    } else {
        cout << "Linked list is not a palindrome." << endl;
    }

    return 0;
}
