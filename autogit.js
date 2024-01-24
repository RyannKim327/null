function findNthNodeFromEnd(head, n) {
    // implementation here
}
let p1 = head;
let p2 = head;
for (let i = 0; i < n; i++) {
    if (p2 === null) {
        // Handle the scenario if 'n' is greater than the length of the linked list.
        return null;
    }
    p2 = p2.next;
}
while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
}
return p1;
function findNthNodeFromEnd(head, n) {
    let p1 = head;
    let p2 = head;
    
    for (let i = 0; i < n; i++) {
        if (p2 === null) {
            return null;
        }
        p2 = p2.next;
    }
    
    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return p1;
}
