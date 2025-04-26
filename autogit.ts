class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start?: number;
    end?: number;
    suffixLink?: SuffixTreeNode;

    constructor() {
        this.children = new Map();
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode();
        this.buildSuffixTreeNaive();
    }

    private buildSuffixTreeNaive() {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(startIndex: number) {
        let currentNode = this.root;
        let currentIndex = startIndex;

        while (currentIndex < this.text.length) {
            const currentChar = this.text[currentIndex];
            if (!currentNode.children.has(currentChar)) {
                // No edge starting with currentChar, create a new leaf
                const leaf = new SuffixTreeNode();
                leaf.start = currentIndex;
                leaf.end = this.text.length;
                currentNode.children.set(currentChar, leaf);
                break;
            } else {
                // Traverse edge
                let nextNode = currentNode.children.get(currentChar)!;
                // For simplicity, assume edges are single characters (non-compressed)
                // In practice, you'd store edge labels and potentially compress
                currentNode = nextNode;
                currentIndex++;
            }
        }
    }

    // Additional methods like search, traversal, etc., can be added here
}
