class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

function areLinkedListsEqual(list1, list2) {
    let current1 = list1;
    let current2 = list2;
    
    while (current1 && current2) {
        if (current1.data !== current2.data) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    
    return true;
}

function isPalindromeLinkedList(list) {
    let slow = list.head;
    let fast = list.head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;
    
    let secondHalf = reverseLinkedList(slow);
    
    return areLinkedListsEqual(list.head, secondHalf);
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(isPalindromeLinkedList(linkedList)); // Output: true
