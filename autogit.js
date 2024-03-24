// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to find the intersection of two linked lists
function getIntersectionNode(headA, headB) {
    const listA = [];
    const listB = [];
  
    // Traverse linked list A and store nodes in listA
    while (headA) {
        listA.push(headA);
        headA = headA.next;
    }

    // Traverse linked list B and store nodes in listB
    while (headB) {
        listB.push(headB);
        headB = headB.next;
    }

    let intersectionNode = null;

    // Compare the two arrays to find the intersection
    for (let nodeA of listA) {
        for (let nodeB of listB) {
            if (nodeA === nodeB) {
                intersectionNode = nodeA;
                break;
            }
        }
        if (intersectionNode) {
            break;
        }
    }

    return intersectionNode;
}
