// Node class represents each node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class represents the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node to the end of the linked list
    append(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to get the length of the linked list
    getLength() {
        let current = this.head;
        let length = 0;

        while (current !== null) {
            length++;
            current = current.next;
        }

        return length;
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log("Length of the linked list: " + linkedList.getLength());  // Output: Length of the linked list: 4
