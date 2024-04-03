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

    let set = new Set();

    let temp = headA;
    while (temp) {
        set.add(temp);
        temp = temp.next;
    }

    temp = headB;
    while (temp) {
        if (set.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }

    return null;
}

// Example usage:
const commonNode = new Node(5);
const headA = new Node(1);
headA.next = new Node(3);
headA.next.next = commonNode;

const headB = new Node(2);
headB.next = commonNode;

const result = getIntersectionNode(headA, headB);
console.log(result); // Output: Node { value: 5, next: null }
