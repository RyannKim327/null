function reverseLinkedList(head) {
    let previousNode = null;
    let currentNode = head;

    while (currentNode !== null) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
}
let reversedHead = reverseLinkedList(head);
