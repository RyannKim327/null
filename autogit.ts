class Node<T> {
    public  T;
    public left: Node<T> | null = null;
    public right: Node<T> | null = null;
    public parent: Node<T> | null = null;
    public color: 'RED' | 'BLACK';

    constructor( T) {
        this.data = data;
        this.color = 'RED'; // New nodes are initially red
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(x: Node<T>): void {
        const y = x.right;
        if (!y) return; 

        x.right = y.left;
        if (y.left) y.left.parent = x;

        y.parent = x.parent;
        if (!x.parent) {
            this.root = y; 
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    private rotateRight(y: Node<T>): void {
        const x = y.left;
        if (!x) return; 

        y.left = x.right;
        if (x.right) x.right.parent = y;

        x.parent = y.parent;
        if (!y.parent) {
            this.root = x; 
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    private fixInsert(z: Node<T>): void {
        while (z.parent && z.parent.color === 'RED') {
            if (z.parent === z.parent.parent?.left) {
                const y = z.parent.parent?.right;
                if (y && y.color === 'RED') {
                    // Case 1: z's uncle is red
                    z.parent.color = 'BLACK';
                    y.color = 'BLACK';
                    z.parent.parent!.color = 'RED';
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.right) {
                        // Case 2: z is right child
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    // Case 3: z's uncle is black
                    z.parent.color = 'BLACK';
                    if (z.parent.parent) {
                        z.parent.parent.color = 'RED';
                        this.rotateRight(z.parent.parent);
                    }
                }
            } else {
                const y = z.parent.parent?.left;
                if (y && y.color === 'RED') {
                    z.parent.color = 'BLACK';
                    y.color = 'BLACK';
                    z.parent.parent!.color = 'RED';
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = 'BLACK';
                    if (z.parent.parent) {
                        z.parent.parent.color = 'RED';
                        this.rotateLeft(z.parent.parent);
                    }
                }
            }
        }
        this.root!.color = 'BLACK'; // Ensure the root is always black
    }

    public insert( T): void {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            this.root.color = 'BLACK'; // Root is always black
            return;
        }
        
        let current: Node<T> | null = this.root;
        let parent: Node<T> | null = null;

        while (current) {
            parent = current;
            if (newNode.data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (newNode.data < parent!.data) {
            parent!.left = newNode;
        } else {
            parent!.right = newNode;
        }

        this.fixInsert(newNode);
    }

    public inOrderTraversal(node: Node<T> | null = this.root): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data, node.color);
            this.inOrderTraversal(node.right);
        }
    }

    public getRoot(): Node<T> | null {
        return this.root;
    }
}

// Example usage
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.inOrderTraversal();
