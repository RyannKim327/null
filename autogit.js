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
}
class BinarySearchTree {
  // ...

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }
}
class BinarySearchTree {
  // ...

  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
}
const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(60)); // Output: Node { value: 60, left: null, right: null }
console.log(bst.search(55)); // Output: null
