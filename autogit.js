class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let nodesA = [];
    let nodesB = [];

    let currentA = headA;
    while (currentA) {
        nodesA.push(currentA);
        currentA = currentA.next;
    }

    let currentB = headB;
    while (currentB) {
        nodesB.push(currentB);
        currentB = currentB.next;
    }

    let intersectionNode = null;
    for (let i = nodesA.length - 1, j = nodesB.length - 1; i >= 0 && j >= 0; i--, j--) {
        if (nodesA[i] === nodesB[j]) {
            intersectionNode = nodesA[i];
        } else {
            break;
        }
    }

    return intersectionNode;
}
