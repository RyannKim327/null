function getIntersection(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    // Find lengths of both linked lists
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // Calculate the difference in lengths
    let diff = Math.abs(lenA - lenB);

    // Traverse the longer linked list till the difference
    let currA = headA;
    let currB = headB;

    if (lenA > lenB) {
        while (diff > 0) {
            currA = currA.next;
            diff--;
        }
    } else if (lenA < lenB) {
        while (diff > 0) {
            currB = currB.next;
            diff--;
        }
    }

    // Traverse both linked lists until a common node is found
    while (currA && currB) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection found
}

function getLength(node) {
    let length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    return length;
}
