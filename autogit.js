function reverseLinkedList(head) {
    // ...
}
    if (!head || !head.next) {
        return head;
    }
    let previous = null;
    let current = head;
    let next = null;
    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
function reverseLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }

    let previous = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
}
const reversedList = reverseLinkedList(yourLinkedListHead);
