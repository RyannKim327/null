class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let lengthA = 0;
    let lengthB = 0;
    let currentA: ListNode | null = headA;
    let currentB: ListNode | null = headB;

    // Calculate lengths of both lists
    while (currentA) {
        lengthA++;
        currentA = currentA.next;
    }
    while (currentB) {
        lengthB++;
        currentB = currentB.next;
    }

    // Reset pointers
    currentA = headA;
    currentB = headB;

    // Align the start points
    while (lengthA > lengthB) {
        currentA = currentA!.next; // Move A forward
        lengthA--;
    }
    while (lengthB > lengthA) {
        currentB = currentB!.next; // Move B forward
        lengthB--;
    }

    // Find intersection
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}

// Example usage:
// Create linked lists and call the function to find intersection
