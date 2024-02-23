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
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}
function convertListToArray(list) {
  const array = [];
  let currentNode = list.head;

  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return array;
}
function isPalindrome(array) {
  const reversedArray = array.slice().reverse();
  return JSON.stringify(array) === JSON.stringify(reversedArray);
}
function isLinkedListPalindrome(list) {
  const array = convertListToArray(list);
  return isPalindrome(array);
}
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(2);
linkedList.addNode(1);

console.log(isLinkedListPalindrome(linkedList)); // Output: true
