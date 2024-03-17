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

    toArray() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    isPalindrome() {
        const arr = this.toArray();
        const reversedArr = [...arr].reverse();
        return JSON.stringify(arr) === JSON.stringify(reversedArr);
    }
}

// Example Usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(2);
linkedList.addNode(1);

console.log(linkedList.isPalindrome()); // Output: true
