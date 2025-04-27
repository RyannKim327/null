class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: Node, newNode: Node): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: Node | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    inOrderTraversal(node: Node | null): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }

    preOrderTraversal(node: Node | null): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(node.value);
            result.push(...this.preOrderTraversal(node.left));
            result.push(...this.preOrderTraversal(node.right));
        }
        return result;
    }

    postOrderTraversal(node: Node | null): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(...this.postOrderTraversal(node.left));
            result.push(...this.postOrderTraversal(node.right));
            result.push(node.value);
        }
        return result;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

console.log("In-order Traversal:", bst.inOrderTraversal(bst.root)); // [2, 5, 7, 10, 15]
console.log("Search 7:", bst.search(7)); // true
console.log("Search 8:", bst.search(8)); // false
