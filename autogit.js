class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  has(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.has(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.has(value);
      }
    }
  }
}
const tree = new BinaryTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

console.log(tree.has(7)); // Output: true
console.log(tree.has(12)); // Output: false
