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

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    findNthFromEnd(n) {
        if (n <= 0 || !this.head) {
            return null;
        }

        let fast = this.head;
        let slow = this.head;

        // Move fast pointer to the nth node from the beginning
        for (let i = 0; i < n; i++) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }

        // Move both pointers until the fast pointer reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        return slow.data;
    }
}

// Usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(linkedList.findNthFromEnd(2)); // Output: 4
