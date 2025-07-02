enum Color {
  Red,
  Black
}

class Node<T> {
  key: T;
  color: Color;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(key: T, color: Color = Color.Red) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null = null;

  // Public method to insert a key
  insert(key: T): void {
    const newNode = new Node(key);
    this._bstInsert(newNode);
    this.fixInsertion(newNode);
  }

  // Internal method for standard BST insertion
  private _bstInsert(node: Node<T>): void {
    let y: Node<T> | null = null;
    let x = this.root;

    while (x !== null) {
      y = x;
      if (node.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    node.parent = y;

    if (y === null) {
      // Tree was empty, new node is root
      this.root = node;
    } else if (node.key < y.key) {
      y.left = node;
    } else {
      y.right = node;
    }
  }

  // Fix violations after insertion
  private fixInsertion(node: Node<T>): void {
    while (node !== this.root && node.parent?.color === Color.Red) {
      const parent = node.parent!;
      const grandparent = parent.parent!;
      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle?.color === Color.Red) {
          // Case 1: Uncle is red - recolor
          parent.color = Color.Black;
          uncle.color = Color.Black;
          grandparent.color = Color.Red;
          node = grandparent;
        } else {
          if (node === parent.right) {
            // Case 2: Node is right child — rotate left
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent!;
          }
          // Case 3: Node is left child — rotate right
          parent.color = Color.Black;
          grandparent.color = Color.Red;
          this.rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent.left;

        if (uncle?.color === Color.Red) {
          // Mirror case 1
          parent.color = Color.Black;
          uncle.color = Color.Black;
          grandparent.color = Color.Red;
          node = grandparent;
        } else {
          if (node === parent.left) {
            // Mirror case 2
            this.rotateRight(parent);
            node = parent;
            parent = node.parent!;
          }
          // Mirror case 3
          parent.color = Color.Black;
          grandparent.color = Color.Red;
          this.rotateLeft(grandparent);
        }
      }
    }
    this.root!.color = Color.Black;
  }

  private rotateLeft(node: Node<T>): void {
    const rightChild = node.right!;
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

  private rotateRight(node: Node<T>): void {
    const leftChild = node.left!;
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

  // Search method (optional)
  search(key: T): Node<T> | null {
    let current = this.root;
    while (current !== null) {
      if (key === current.key) {
        return current;
      } else if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // In-order traversal (optional)
  inOrderTraversal(node: Node<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
console.log(tree.inOrderTraversal());  // Should output sorted keys
