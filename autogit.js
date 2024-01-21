class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current && current.value !== value) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
}
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

console.log(bst.search(4));  // Output: Node { value: 4, left: null, right: null }
console.log(bst.search(6));  // Output: null (not found)
