#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* getIntersectionNode(Node* headA, Node* headB) {
    if (!headA || !headB) {
        return nullptr;
    }

    Node* tailA = headA;
    Node* tailB = headB;
    int lenA = 1;
    int lenB = 1;

    while (tailA->next) {
        tailA = tailA->next;
        lenA++;
    }

    while (tailB->next) {
        tailB = tailB->next;
        lenB++;
    }

    if (tailA != tailB) {
        return nullptr; // Lists do not intersect
    }

    Node* currA = headA;
    Node* currB = headB;

    while (lenA > lenB) {
        currA = currA->next;
        lenA--;
    }

    while (lenB > lenA) {
        currB = currB->next;
        lenB--;
    }

    while (currA != currB) {
        currA = currA->next;
        currB = currB->next;
    }

    return currA;
}
