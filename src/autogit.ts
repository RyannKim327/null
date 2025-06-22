       (root)
       / | \
     a  na  banana$
    /   |
   na$  na$
class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | undefined; // undefined for internal nodes
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end?: number) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }

    // Get the length of the edge label
    getEdgeLength(): number {
        return (this.end ?? -1) - this.start + 1;
    }
}

class SuffixTree {
    private root: SuffixTreeNode;
    private text: string;
    private activeNode: SuffixTreeNode;
    private activeEdge: number;
    private activeLength: number;
    private remaining: number;
    private lastNewNode: SuffixTreeNode | null;

    constructor(text: string) {
        this.text = text + "$"; // Add a terminal character
        this.root = new SuffixTreeNode(-1); // Root node
        this.activeNode = this.root;
        this.activeEdge = -1;
        this.activeLength = 0;
        this.remaining = 0;
        this.lastNewNode = null;

        // Build the suffix tree
        this.buildSuffixTree();
    }

    private buildSuffixTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    private extendSuffixTree(pos: number): void {
        this.lastNewNode = null;
        this.remaining++;

        while (this.remaining > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            const activeEdgeChar = this.text[this.activeEdge];
            if (!this.activeNode.children.has(activeEdgeChar)) {
                // Create a new leaf node
                this.activeNode.children.set(activeEdgeChar, new SuffixTreeNode(pos));
                this.addSuffixLink(this.activeNode);
            } else {
                const nextNode = this.activeNode.children.get(activeEdgeChar)!;
                const edgeLength = nextNode.getEdgeLength();

                if (this.activeLength >= edgeLength) {
                    // Move to the next node
                    this.activeEdge += edgeLength;
                    this.activeLength -= edgeLength;
                    this.activeNode = nextNode;
                    continue;
                }

                const nextChar = this.text[nextNode.start + this.activeLength];
                if (nextChar === this.text[pos]) {
                    // Character already exists, no need to split
                    this.activeLength++;
                    this.addSuffixLink(this.activeNode);
                    break;
                }

                // Split the edge
                const splitEnd = nextNode.start + this.activeLength - 1;
                const splitNode = new SuffixTreeNode(nextNode.start, splitEnd);
                this.activeNode.children.set(activeEdgeChar, splitNode);

                // Create a new leaf node
                splitNode.children.set(this.text[pos], new SuffixTreeNode(pos));

                // Update the existing node
                nextNode.start += this.activeLength;
                splitNode.children.set(this.text[nextNode.start], nextNode);

                this.addSuffixLink(splitNode);
            }

            this.remaining--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remaining + 1;
            } else {
                this.activeNode = this.activeNode.suffixLink || this.root;
            }
        }
    }

    private addSuffixLink(node: SuffixTreeNode): void {
        if (this.lastNewNode !== null) {
            this.lastNewNode.suffixLink = node;
        }
        this.lastNewNode = node;
    }

    // Utility function to print the tree (for debugging)
    public printTree(node: SuffixTreeNode = this.root, level: number = 0): void {
        for (const [char, child] of node.children.entries()) {
            console.log(" ".repeat(level * 2) + char + " -> " + this.text.slice(child.start, child.end ?? this.text.length));
            this.printTree(child, level + 1);
        }
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);
suffixTree.printTree();
