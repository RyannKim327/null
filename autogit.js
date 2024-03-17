class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let lenA = getLength(headA);
    let lenB = getLength(headB);

    let currA = headA;
    let currB = headB;

    // Traverse the longer list by the difference in lengths
    while (lenA > lenB) {
        currA = currA.next;
        lenA--;
    }

    while (lenB > lenA) {
        currB = currB.next;
        lenB--;
    }

    // Traverse both lists in parallel
    while (currA && currB) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null;
}

function getLength(head) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}

// Example
// Intersected linked lists:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
//                   \
//                    7 -> 8 -> 9
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);
headA.next.next.next.next.next = new ListNode(6);

let headB = new ListNode(7);
headB.next = new ListNode(8);
headB.next.next = new ListNode(9);
headB.next.next.next = headA.next.next.next.next; // Intersection point

let intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode); // Output: ListNode { val: 5, next: ListNode { val: 6, next: null } }
