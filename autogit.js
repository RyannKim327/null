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

    add(value) {
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

        let start = 0;
        let end = values.length - 1;

        while (start < end) {
            if (values[start] !== values[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}

// Test the palindrome check
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);

console.log(list.isPalindrome()); // Output: true

list.add(5);
console.log(list.isPalindrome()); // Output: false
