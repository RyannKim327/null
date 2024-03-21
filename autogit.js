function findIntersection(headA, headB) {
    let seenNodes = new Set();

    let currentA = headA;
    while (currentA) {
        seenNodes.add(currentA);
        currentA = currentA.next;
    }

    let currentB = headB;
    while (currentB) {
        if (seenNodes.has(currentB)) {
            return currentB;
        }
        currentB = currentB.next;
    }

    return null; // No intersection found
}
let intersectionNode = findIntersection(headA, headB);
if (intersectionNode) {
    console.log("Intersection node value: " + intersectionNode.value);
} else {
    console.log("No intersection found.");
}
