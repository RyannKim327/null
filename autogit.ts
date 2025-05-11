enum Color {
  RED,
  BLACK,
}

class Node<T> {
  value: T;
  color: Color;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.color = Color.RED; // new nodes start red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class RedBlackTree<T> {
  private root: Node<T> | null = null;

  insert(value: T) {
    const newNode = new Node(value);
    this.insertNode(newNode);
    this.fixInsert(newNode);
  }

  // Standard BST insert with parent pointer updates
  private insertNode(newNode: Node<T>) {
    let y: Node<T> | null = null;
    let x: Node<T> | null = this.root;

    while (x !== null) {
      y = x;
      if (newNode.value < x.value) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    newNode.parent = y;
    if (y === null) {
      this.root = newNode; // tree was empty
    } else if (newNode.value < y.value) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }

    newNode.left = null;
    newNode.right = null;
    newNode.color = Color.RED;
  }

  private fixInsert(node: Node<T>) {
    // Fix violations of the red-black properties by recoloring and rotating
    while (node !== this.root && node.parent!.color === Color.RED) {
      // Identify parent and grandparent
      const parent = node.parent!;
      const grandparent = parent.parent;

      if (!grandparent) break;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;
        if (uncle && uncle.color === Color.RED) {
          // Case 1: uncle is red -> recolor
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent.right) {
            // Case 2: node is right child -> rotate left
            node = parent;
            this.rotateLeft(node);
          }
          // Case 3: node is left child -> rotate right
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateRight(grandparent);
        }
      } else {
        // Symmetric "mirror" cases for parent on right side
        const uncle = grandparent.left;
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent.left) {
            node = parent;
            this.rotateRight(node);
          }
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateLeft(grandparent);
        }
      }
    }
    this.root!.color = Color.BLACK;
  }

  rotateLeft(x: Node<T>) {
    const y = x.right!;
    x.right = y.left;
    if (y.left !== null) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  rotateRight(y: Node<T>) {
    const x = y.left!;
    y.left = x.right;
    if (x.right !== null) {
      x.right.parent = y;
    }
    x.parent = y.parent;
    if (y.parent === null) {
      this.root = x;
    } else if (y === y.parent.right) {
      y.parent.right = x;
    } else {
      y.parent.left = x;
    }
    x.right = y;
    y.parent = x;
  }

  // Optional: implement search, traversal, deletion, etc.
  
  inOrderTraversal(node: Node<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(18);
rbt.insert(7);
rbt.insert(15);
rbt.insert(16);

console.log(rbt.inOrderTraversal()); // Should print the numbers in sorted order
