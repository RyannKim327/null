// Node class represents a node in the red-black tree
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'RED'; // 'RED' or 'BLACK'
  }
}

// RedBlackTree class represents the red-black tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a key into the tree
  insert(key) {
    // Step 1: Perform a normal BST insertion
    const newNode = new Node(key);
    this.root = this.insertNode(this.root, newNode);

    // Step 2: Fix the tree by performing necessary rotations and recoloring
    this.fixTree(newNode);
  }

  // Insert a node in the tree (BST insertion)
  insertNode(root, newNode) {
    if (root === null) {
      return newNode;
    }

    if (newNode.key < root.key) {
      root.left = this.insertNode(root.left, newNode);
      root.left.parent = root;
    } else if (newNode.key > root.key) {
      root.right = this.insertNode(root.right, newNode);
      root.right.parent = root;
    }

    return root;
  }

  // Fix the tree after insertion
  fixTree(node) {
    while (node !== this.root && node.parent.color === 'RED') {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        // Case 1: uncle is RED
        if (uncle !== null && uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          // Case 2: uncle is BLACK and node is a right child
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          // Case 3: uncle is BLACK and node is a left child
          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateRight(node.parent.parent);
        }
      } else {
        // Same as above, but with left and right exchanged
        let uncle = node.parent.parent.left;

        if (uncle !== null && uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = 'BLACK';
  }

  // Rotate the tree left at node
  rotateLeft(node) {
    let rightChild = node.right;
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

  // Rotate the tree right at node
  rotateRight(node) {
    let leftChild = node.left;
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

  // Perform an in-order traversal of the tree
  inorderTraversal(node = this.root) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.key);
      this.inorderTraversal(node.right);
    }
  }

  // Perform a search for a key in the tree
  search(key, node = this.root) {
    if (node === null || key === node.key) {
      return node;
    }

    if (key < node.key) {
      return this.search(key, node.left);
    }

    return this.search(key, node.right);
  }
}

// Usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.inorderTraversal(); // Output: 10 20 30

const found = tree.search(20);
console.log(found); // Output: Node { key: 20, left: null, right: null, parent: Node, color: 'BLACK' }
