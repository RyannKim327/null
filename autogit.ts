enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
}

class Node<T> {
  value: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;
  parent: Node<T> | null = null;
  color: Color;

  constructor(value: T, color: Color = Color.RED) {
    this.value = value;
    this.color = color;
  }
}

class RedBlackTree<T> {
  root: Node<T> | null = null;

  private rotateLeft(node: Node<T>) {
    const rightChild = node.right!;
    node.right = rightChild.left;
    if (rightChild.left) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;
    if (!node.parent) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  private rotateRight(node: Node<T>) {
    const leftChild = node.left!;
    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;
    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  insert(value: T) {
    const newNode = new Node<T>(value);
    if (!this.root) {
      newNode.color = Color.BLACK;
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent: Node<T> | null = null;

    while (current) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (value < parent!.value) {
      parent!.left = newNode;
    } else {
      parent!.right = newNode;
    }

    this.insertFixUp(newNode);
  }

  private insertFixUp(node: Node<T>) {
    while (node.parent && node.parent.color === Color.RED) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (!grandparent) break;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle && uncle.color === Color.RED) {
          // Case 1 - recolor
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent.right) {
            // Case 2 - rotate left
            node = parent;
            this.rotateLeft(node);
          }
          // Case 3 - rotate right
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent.left;

        if (uncle && uncle.color === Color.RED) {
          // Mirror Case 1 - recolor
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandparent.color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent.left) {
            // Mirror Case 2 - rotate right
            node = parent;
            this.rotateRight(node);
          }
          // Mirror Case 3 - rotate left
          parent.color = Color.BLACK;
          grandparent.color = Color.RED;
          this.rotateLeft(grandparent);
        }
      }
    }

    if (this.root) {
      this.root.color = Color.BLACK;
    }
  }

  // Optional: simple in-order traversal to check tree contents
  inOrderTraversal(node: Node<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
const tree = new RedBlackTree<number>();
[10, 20, 30, 15, 25, 5, 1].forEach(v => tree.insert(v));
console.log(tree.inOrderTraversal()); // Should print sorted values
