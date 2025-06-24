class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number | null; // Optional: Start index of the substring
    end: number | null;   // Optional: End index of the substring

    constructor() {
        this.children = new Map();
        this.start = null;
        this.end = null;
    }

    // Helper method to add a child node
    addChild(char: string, node: SuffixTreeNode): void {
        this.children.set(char, node);
    }

    // Helper method to check if a child exists
    hasChild(char: string): boolean {
        return this.children.has(char);
    }

    // Helper method to get a child node
    getChild(char: string): SuffixTreeNode | undefined {
        return this.children.get(char);
    }
}
class SuffixTree {
    root: SuffixTreeNode;

    constructor() {
        this.root = new SuffixTreeNode();
    }

    // Method to build the suffix tree from a given string
    build(text: string): void {
        const n = text.length;

        // Insert all suffixes into the tree
        for (let i = 0; i < n; i++) {
            this.insertSuffix(text, i);
        }
    }

    // Helper method to insert a suffix into the tree
    private insertSuffix(text: string, start: number): void {
        let currentNode = this.root;
        const n = text.length;

        for (let i = start; i < n; i++) {
            const char = text[i];

            // If the current node has no child for this character, create a new node
            if (!currentNode.hasChild(char)) {
                const newNode = new SuffixTreeNode();
                newNode.start = i;
                newNode.end = n - 1; // The suffix ends at the last character
                currentNode.addChild(char, newNode);
            }

            // Move to the next node
            currentNode = currentNode.getChild(char)!;
        }
    }

    // Optional: Method to visualize the tree (for debugging)
    printTree(node: SuffixTreeNode = this.root, prefix = ""): void {
        for (const [char, child] of node.children) {
            console.log(`${prefix}${char}`);
            this.printTree(child, prefix + "  ");
        }
    }
}
const suffixTree = new SuffixTree();
const text = "banana";

// Build the suffix tree
suffixTree.build(text);

// Print the tree structure (for debugging purposes)
suffixTree.printTree();
