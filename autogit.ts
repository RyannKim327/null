class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new ListNode(value);
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

  isPalindrome(): boolean {
    const values: number[] = [];
    let current = this.head;

    // Convert the linked list to an array
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    // Check if the array is a palindrome
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

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(2);
list.append(1);

console.log(list.isPalindrome()); // Output: true
