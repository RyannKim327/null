class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    remove(value) {
        let current = this.head;
        
        if (current.value === value) {
            this.head = current.next;
            this.size--;
        } else {
            let previous = current;
            while (current.next) {
                if (current.value === value) {
                    previous.next = current.next;
                    this.size--;
                    break;
                }
                previous = current;
                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 2 3
list.remove(2);
list.print(); // Output: 1 3
