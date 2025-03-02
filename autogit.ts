class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const visited = new Set<ListNode>();
    
    // Traverse the first linked list and store its nodes in the set
    let currentA = headA;
    while (currentA) {
        visited.add(currentA);
        currentA = currentA.next;
    }
    
    // Traverse the second linked list and check for an intersection
    let currentB = headB;
    while (currentB) {
        if (visited.has(currentB)) {
            return currentB; // Intersection found
        }
        currentB = currentB.next;
    }
    
    return null; // No intersection
}
function getLength(head: ListNode | null): number {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}

function advanceListByK(head: ListNode | null, k: number): ListNode | null {
    while (k > 0 && head) {
        head = head.next;
        k--;
    }
    return head;
}

function findIntersection(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const lenA = getLength(headA);
    const lenB = getLength(headB);
    
    // Align the starting point of both lists
    if (lenA > lenB) {
        headA = advanceListByK(headA, lenA - lenB);
    } else {
        headB = advanceListByK(headB, lenB - lenA);
    }
    
    // Traverse both lists in tandem to find intersection
    while (headA && headB) {
        if (headA === headB) {
            return headA; // Intersection found
        }
        headA = headA.next;
        headB = headB.next;
    }
    
    return null; // No intersection
}
const intersectNode = new ListNode(8);
const listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);
listA.next.next.next = intersectNode;

const listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = intersectNode;

// Call the function
const intersection = findIntersection(listA, listB);
console.log(intersection ? intersection.value : null); // Output: 8
