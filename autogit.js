// Red-Black Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.color = "red";
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

// Red-Black Tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert new value
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      this.root.color = "black";
      return;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      parentNode = currentNode;

      if (newNode.value < currentNode.value)
        currentNode = currentNode.left;
      else
        currentNode = currentNode.right;
    }

    newNode.parent = parentNode;

    if (newNode.value < parentNode.value)
      parentNode.left = newNode;
    else
      parentNode.right = newNode;

    this.fixViolations(newNode);
  }

  // Fix violations to maintain red-black properties
  fixViolations(node) {
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

  // Left rotation
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

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

  // Right rotation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null)
      this.root = leftChild;
    else if (node === node.parent.left)
      node.parent.left = leftChild;
    else
      node.parent.right = leftChild;

    leftChild.right = node;
    node.parent = leftChild;
  }

  // (Optional) Print the red-black tree in-order
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}
const tree = new RedBlackTree();

tree.insert(9);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(15);

tree.inOrderTraversal(tree.root);
