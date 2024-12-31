// Definition for singly-linked list
class ListNode {
public:
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* findMiddle(ListNode* head) {
    if (head == NULL) {
        return NULL;
    }

    ListNode *slow = head;
    ListNode *fast = head;

    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}
