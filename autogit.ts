class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node to the list
    append(value: number) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }
        
        return count;
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Length of linked list:", linkedList.length()); // Output: Length of linked list: 3
