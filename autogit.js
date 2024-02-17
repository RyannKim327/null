class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;  // 0 for black, 1 for red
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
    this.TNULL = new Node(null, 0);  // Sentinel node representing null
  }

  // Left Rotation
  leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left != this.TNULL) {
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

  // Right Rotation
  rightRotate(y) {
    let x = y.left;
    y.left = x.right;
    if (x.right != this.TNULL) {
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

  insert(data) {
    let newNode = new Node(data, 1);  // New nodes are always red
    newNode.left = this.TNULL;
    newNode.right = this.TNULL;

    let current = this.root;
    let parent = null;

    while (current !== this.TNULL) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (parent === null) {
      this.root = newNode;
    } else if (newNode.value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    if (newNode.parent === null) {
      newNode.color = 0;  // root is always black
      return;
    }

    if (newNode.parent.parent === null) {
      return;
    }

    this.fixInsert(newNode);
  }

  fixInsert(k) {
    let u;
    while (k.parent.color === 1) {
      if (k.parent === k.parent.parent.right) {
        u = k.parent.parent.left; // uncle
        if (u.color === 1) {
          u.color = 0;
          k.parent.color = 0;
          k.parent.parent.color = 1;
          k = k.parent.parent;
        } else {
          if (k === k.parent.left) {
            k = k.parent;
            this.rightRotate(k);
          }
          k.parent.color = 0;
          k.parent.parent.color = 1;
          this.leftRotate(k.parent.parent);
        }
      } else {
        u = k.parent.parent.right; // uncle

        if (u.color === 1) {
          u.color = 0;
          k.parent.color = 0;
          k.parent.parent.color = 1;
          k = k.parent.parent;
        } else {
          if (k === k.parent.right) {
            k = k.parent;
            this.leftRotate(k);
          }
          k.parent.color = 0;
          k.parent.parent.color = 1;
          this.rightRotate(k.parent.parent);
        }
      }
      if (k === this.root) {
        break;
      }
    }
    this.root.color = 0;  // Always set root to black
  }
}
