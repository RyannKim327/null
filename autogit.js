class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const getIntersectionNode = (headA, headB) => {
    let ptrA = headA;
    let ptrB = headB;

    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB;
        ptrB = ptrB ? ptrB.next : headA;
    }

    return ptrA;
};
const listA = new Node(4);
listA.next = new Node(1);
listA.next.next = new Node(8);
listA.next.next.next = new Node(4);
listA.next.next.next.next = new Node(5);

const listB = new Node(5);
listB.next = new Node(6);
listB.next.next = listA.next.next;

const intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode.value); // Output: 8
