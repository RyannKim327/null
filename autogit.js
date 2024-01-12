function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}
const linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

console.log(hasCycle(linkedList));  // false

// Creating a cycle
linkedList.next.next.next = linkedList;

console.log(hasCycle(linkedList));  // true
