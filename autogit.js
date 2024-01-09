// Red-Black Tree Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'black'; // New nodes are always colored black
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    // If the tree is empty, make the new node the root and color it black
    if (this.root === null) {
      this.root = newNode;
      this.root.color = 'black';
      return;
    }

    let current = this.root;
    let parent = null;

    // Find the position to insert the new node
    while (current !== null) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Set the parent of the new node
    newNode.parent = parent;

    // Insert the new node as left or right child of the parent
    if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    // Fix any violations of the Red-Black Tree properties
    this.fixViolations(newNode);
  }

  // Fix violations of the Red-Black Tree properties after an insertion
  fixViolations(node) {
    while (node !== this.root && node.parent.color === 'red') {
      let uncle;

      if (node.parent === node.parent.parent.left) {
        uncle = node.parent.parent.right;

        if (uncle !== null && uncle.color === 'red') {
          // Case 1: Node's uncle is red
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Node's uncle is black and node is a right child
            node = node.parent;
            this.rotateLeft(node);
          }

          // Case 3: Node's uncle is black and node is a left child
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        uncle = node.parent.parent.left;

        if (uncle !== null && uncle.color === 'red') {
          // Case 4: Node's uncle is red (mirror case of case 1)
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 5: Node's uncle is black and node is a left child (mirror case of case 2)
            node = node.parent;
            this.rotateRight(node);
          }

          // Case 6: Node's uncle is black and node is a right child (mirror case of case 3)
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = 'black'; // Ensure the root is always black
  }

  // Left rotation operation
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Right rotation operation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // In-order traversal of the tree
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(20);

tree.inOrderTraversal();
