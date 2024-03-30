// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to find the intersection point of two linked lists
function getIntersectionNode(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    let currentA = headA;
    let currentB = headB;

    // Traverse the longer list by the difference in lengths
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currentA = currentA.next;
        }
    } else if (lenB > lenA) {
        for (let i = 0; i < lenB - lenA; i++) {
            currentB = currentB.next;
        }
    }

    // Iterate over both lists in parallel to find the intersection point
    while (currentA !== currentB) {
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return currentA; // Returns the intersection node or null if there is no intersection
}

// Function to get the length of a linked list
function getLength(head) {
    let current = head;
    let length = 0;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

// Example usage
let commonNode = new ListNode(5);
commonNode.next = new ListNode(10);

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = commonNode;

let list2 = new ListNode(3);
list2.next = new ListNode(4);
list2.next.next = commonNode;

let intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode.val); // Output: 5
