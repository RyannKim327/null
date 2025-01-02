#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    if (!headA || !headB) {
        return nullptr;
    }
    
    ListNode *pA = headA;
    ListNode *pB = headB;
    
    while (pA != pB) {
        pA = pA ? pA->next : headB;
        pB = pB ? pB->next : headA;
    }
    
    return pA;
}

// Helper function to create linked list for testing
ListNode* createList(std::initializer_list<int> values) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    for (int val : values) {
        tail->next = new ListNode(val);
        tail = tail->next;
    }
    
    return dummy.next;
}

int main() {
    ListNode* listA = createList({4, 1, 8, 4, 5});
    ListNode* listB = createList({5, 6, 1, 8, 4, 5});

    listA->next->next->next->next->next = listB->next->next->next;

    ListNode* intersectionNode = getIntersectionNode(listA, listB);
    if (intersectionNode) {
        std::cout << "Intersection at node with value: " << intersectionNode->val << "\n";
    } else {
        std::cout << "No intersection found\n";
    }

    return 0;
}
