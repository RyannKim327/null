class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number;
    suffixLink: SuffixTreeNode | null;

    constructor(start: number = -1, end: number = -1) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }

    // Helper method to get the length of the substring represented by this node
    getLength(): number {
        return this.end - this.start + 1;
    }
}
class ActivePoint {
    activeNode: SuffixTreeNode;
    activeEdge: string | null;
    activeLength: number;

    constructor(root: SuffixTreeNode) {
        this.activeNode = root;
        this.activeEdge = null;
        this.activeLength = 0;
    }
}
class SuffixTree {
    root: SuffixTreeNode;
    text: string;
    activePoint: ActivePoint;
    remaining: number; // Number of suffixes yet to be added
    lastCreatedNode: SuffixTreeNode | null;

    constructor() {
        this.root = new SuffixTreeNode();
        this.text = "";
        this.activePoint = new ActivePoint(this.root);
        this.remaining = 0;
        this.lastCreatedNode = null;
    }

    // Public method to build the suffix tree
    build(text: string): void {
        this.text = text;
        this.root.suffixLink = this.root;

        for (let i = 0; i < text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    // Extend the suffix tree by adding the next character
    private extendSuffixTree(index: number): void {
        this.lastCreatedNode = null;
        this.remaining++;

        while (this.remaining > 0) {
            if (this.activePoint.activeLength === 0) {
                this.activePoint.activeEdge = this.text[index];
            }

            if (!this.activePoint.activeNode.children.has(this.activePoint.activeEdge!)) {
                const newNode = new SuffixTreeNode(index, this.text.length - 1);
                this.activePoint.activeNode.children.set(this.activePoint.activeEdge!, newNode);

                if (this.lastCreatedNode !== null) {
                    this.lastCreatedNode.suffixLink = this.activePoint.activeNode;
                    this.lastCreatedNode = null;
                }
            } else {
                const nextNode = this.activePoint.activeNode.children.get(this.activePoint.activeEdge!)!;
                if (this.walkDown(nextNode)) continue;

                if (this.text[nextNode.start + this.activePoint.activeLength] === this.text[index]) {
                    if (this.lastCreatedNode !== null && this.activePoint.activeNode !== this.root) {
                        this.lastCreatedNode.suffixLink = this.activePoint.activeNode;
                        this.lastCreatedNode = null;
                    }
                    this.activePoint.activeLength++;
                    break;
                }

                const splitEnd = nextNode.start + this.activePoint.activeLength - 1;
                const splitNode = new SuffixTreeNode(nextNode.start, splitEnd);
                this.activePoint.activeNode.children.set(this.activePoint.activeEdge!, splitNode);

                const newNode = new SuffixTreeNode(index, this.text.length - 1);
                splitNode.children.set(this.text[index], newNode);

                nextNode.start += this.activePoint.activeLength;
                splitNode.children.set(this.text[nextNode.start], nextNode);

                if (this.lastCreatedNode !== null) {
                    this.lastCreatedNode.suffixLink = splitNode;
                }
                this.lastCreatedNode = splitNode;
            }

            this.remaining--;
            if (this.activePoint.activeNode === this.root && this.activePoint.activeLength > 0) {
                this.activePoint.activeLength--;
                this.activePoint.activeEdge = this.text[index - this.remaining + 1];
            } else if (this.activePoint.activeNode !== this.root) {
                this.activePoint.activeNode = this.activePoint.activeNode.suffixLink!;
            }
        }
    }

    // Helper method to check if we can walk down the tree
    private walkDown(node: SuffixTreeNode): boolean {
        if (this.activePoint.activeLength >= node.getLength()) {
            this.activePoint.activeEdge = this.text[node.start + this.activePoint.activeLength];
            this.activePoint.activeLength -= node.getLength();
            this.activePoint.activeNode = node;
            return true;
        }
        return false;
    }

    // Optional: Print the tree for debugging
    printTree(node: SuffixTreeNode = this.root, level: number = 0): void {
        console.log(" ".repeat(level * 2) + `Node(${node.start}, ${node.end})`);
        for (const [char, child] of node.children.entries()) {
            console.log(" ".repeat(level * 2 + 2) + `Edge(${char}) ->`);
            this.printTree(child, level + 1);
        }
    }
}
const suffixTree = new SuffixTree();
suffixTree.build("banana");
suffixTree.printTree();
