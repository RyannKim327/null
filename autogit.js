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

    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}
function isPalindrome(array) {
    const reversedArray = [...array].reverse();
    return JSON.stringify(array) === JSON.stringify(reversedArray);
}
function isLinkedListPalindrome(list) {
    const array = list.toArray();
    return isPalindrome(array);
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(isLinkedListPalindrome(linkedList)); // Output: true
