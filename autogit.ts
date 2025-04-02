class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function findNthNodeFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    if (n > length) {
        return null;
    }

    let position = length - n;
    current = head;

    for (let i = 0; i < position; i++) {
        current = current.next;
    }

    return current;
}
