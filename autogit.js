function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If there's a cycle, the slow and fast pointers will meet at some point
    if (slow === fast) {
      return true;
    }
  }

  return false; // No cycle found
}
let LinkedListNode = function (value) {
  this.value = value;
  this.next = null;
};

let head = new LinkedListNode(1);
let second = new LinkedListNode(2);
let third = new LinkedListNode(3);
let fourth = new LinkedListNode(4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // creating a cycle

console.log(hasCycle(head)); // Output: true
