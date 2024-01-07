class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "black"; // Red nodes are represented by color "red" and black nodes by color "black"
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Helper method to perform left rotation
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null)
      rightChild.left.parent = node;

    rightChild.parent = node.parent;

    if (node.parent === null)
      this.root = rightChild;
    else if (node === node.parent.left)
      node.parent.left = rightChild;
    else
      node.parent.right = rightChild;

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Helper method to perform right rotation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null)
      leftChild.right.parent = node;

    leftChild.parent = node.parent;

    if (node.parent === null)
      this.root = leftChild;
    else if (node === node.parent.right)
      node.parent.right = leftChild;
    else
      node.parent.left = leftChild;

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Helper method to fix violations after insertion
  fixViolation(node) {
    while (node !== this.root && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = "black";
  }

  // Insert a value into the tree
  insert(value) {
    const node = new Node(value);
    let temp = null;
    let current = this.root;

    while (current !== null) {
      temp = current;
      if (value < current.value)
        current = current.left;
      else
        current = current.right;
    }

    node.parent = temp;

    if (temp === null)
      this.root = node;
    else if (value < temp.value)
      temp.left = node;
    else
      temp.right = node;

    this.fixViolation(node);
  }
}
const tree = new RedBlackTree();
tree.insert(7);
tree.insert(3);
tree.insert(18);
tree.insert(10);
tree.insert(22);
tree.insert(8);
tree.insert(11);
tree.insert(26);
tree.insert(2);
tree.insert(6);
tree.insert(13);

console.log(tree);
