// Linked list node definition
function Node(data) {
  this.data = data;
  this.next = null;
}

// Function to find the middle element of a linked list
function findMiddleElement(head) {
  let count = 0;
  let current = head;
  let middle = head;

  while (current !== null) {
    if (count % 2 !== 0) {
      middle = middle.next;
    }
    current = current.next;
    count++;
  }
  
  return middle.data;
}

// Example linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let middleElement = findMiddleElement(head);
console.log("Middle Element:", middleElement);
