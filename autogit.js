function findNthFromEnd(head, n) {
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < n; i++) {
        if (p1 === null) {
            return null;
        }
        p1 = p1.next;
    }

    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.value;
}
