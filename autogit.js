class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const getIntersectionNode = (headA, headB) => {
    const set = new Set();
    
    // Traverse the first linked list and store each node's value in a Set
    let curr = headA;
    while (curr !== null) {
        set.add(curr);
        curr = curr.next;
    }
    
    // Traverse the second linked list and check if the value exists in the Set
    curr = headB;
    while (curr !== null) {
        if (set.has(curr)) {
            return curr;
        }
        curr = curr.next;
    }
    
    return null; // No intersection found
};

// Example Usage
const list1 = new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))));
const list2 = new ListNode(5, new ListNode(6, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))));
const intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode);
