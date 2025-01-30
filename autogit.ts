class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head: Node): Node {
    let previous: Node | null = null;
    let current: Node = head;

    while (current !== null) {
        const next: Node = current.next!;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous!;
}
