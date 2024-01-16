class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findLinkedListLength(head) {
    let length = 0;
    let currentNode = head;

    while (currentNode !== null) {
        length++;
        currentNode = currentNode.next;
    }

    return length;
}
