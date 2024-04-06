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

    isPalindrome() {
        if (!this.head) {
            return true;
        }

        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let current = slow;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        let firstHalf = this.head;
        let secondHalf = prev;
        while (secondHalf) {
            if (firstHalf.data !== secondHalf.data) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true;
    }
}

// Example
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(2);
ll.add(1);

console.log(ll.isPalindrome()); // Output: true
