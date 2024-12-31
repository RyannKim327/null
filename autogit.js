#include <iostream>
#include <unordered_set>

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    std::unordered_set<ListNode*> nodes_set;

    // Traverse the first linked list and store all nodes in the set
    ListNode* curr = headA;
    while (curr != nullptr) {
        nodes_set.insert(curr);
        curr = curr->next;
    }

    // Traverse the second linked list and check for intersection
    curr = headB;
    while (curr != nullptr) {
        if (nodes_set.find(curr) != nodes_set.end()) {
            return curr;
        }
        curr = curr->next;
    }

    // No intersection found
    return nullptr;
}

// Sample driver code
int main() {
    // Create two intersecting linked lists
    ListNode* node1 = new ListNode(1);
    node1->next = new ListNode(2);
    node1->next->next = new ListNode(3);

    ListNode* node2 = new ListNode(4);
    node2->next = node1->next;

    ListNode* intersectionNode = getIntersectionNode(node1, node2);
    if (intersectionNode != nullptr) {
        std::cout << "Intersection node value: " << intersectionNode->val << std::endl;
    } else {
        std::cout << "No intersection found" << std::endl;
    }

    return 0;
}
