class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null;
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }
}
class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode(-1, null);
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    insertSuffix(start: number) {
        let currentNode = this.root;
        let currentChar = this.text[start];

        for (let i = start; i < this.text.length; i++) {
            const char = this.text[i];

            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(start, null);
                currentNode.children.set(char, newNode);
                return;
            }

            currentNode = currentNode.children.get(char)!;
            if (currentNode.end === null) {
                currentNode.end = i;
                return;
            }

            // If we reach here, we need to split the edge
            const edgeLength = currentNode.end! - currentNode.start + 1;
            if (edgeLength <= i - start) {
                continue; // Move down the tree
            }

            // Split the edge
            const splitNode = new SuffixTreeNode(currentNode.start, currentNode.start + (i - start));
            currentNode.start += (i - start);
            currentNode.end = currentNode.start + edgeLength - 1;

            splitNode.children.set(this.text[currentNode.start], currentNode);
            currentNode = splitNode;
            currentNode.children.set(char, new SuffixTreeNode(start, null));
            return;
        }
    }

    // Additional methods can be added here (e.g., search, display, etc.)
}
const text = "banana";
const suffixTree = new SuffixTree(text);

// You can add methods to search for substrings, display the tree, etc.
