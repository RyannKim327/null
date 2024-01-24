class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTreeNode(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTreeNode(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  // Pre-order traversal: visit node, traverse left subtree, traverse right subtree
  traversePreOrder() {
    console.log(this.value); // or do something else with the value
    if (this.left) {
      this.left.traversePreOrder();
    }
    if (this.right) {
      this.right.traversePreOrder();
    }
  }

  // In-order traversal: traverse left subtree, visit node, traverse right subtree
  traverseInOrder() {
    if (this.left) {
      this.left.traverseInOrder();
    }
    console.log(this.value); // or do something else with the value
    if (this.right) {
      this.right.traverseInOrder();
    }
  }

  // Post-order traversal: traverse left subtree, traverse right subtree, visit node
  traversePostOrder() {
    if (this.left) {
      this.left.traversePostOrder();
    }
    if (this.right) {
      this.right.traversePostOrder();
    }
    console.log(this.value); // or do something else with the value
  }
}
const tree = new BinaryTreeNode(5);

tree.insert(3);
tree.insert(8);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(9);

console.log(tree.contains(4)); // Output: true
console.log(tree.contains(6)); // Output: false

console.log('Pre-order traversal:');
tree.traversePreOrder();

console.log('In-order traversal:');
tree.traverseInOrder();

console.log('Post-order traversal:');
tree.traversePostOrder();
