function findMiddleElement(head) {
    let slowPtr = head;
    let fastPtr = head;
  
    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
  
    return slowPtr.value;
}
