class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
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
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        
        let left = 0;
        let right = values.length - 1;
        while (left < right) {
            if (values[left] !== values[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

// Test the linked list for palindrome
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(2);
linkedList.addNode(1);

console.log(linkedList.isPalindrome()); // Output: true
