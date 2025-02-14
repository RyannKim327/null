class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    endIndices: number[];

    constructor() {
        this.children = new Map();
        this.endIndices = [];
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode();
        this.text = text;
        this.buildSuffixTree();
    }

    private buildSuffixTree() {
        const length = this.text.length;
        for (let i = 0; i < length; i++) {
            this.insertSuffix(this.text.substring(i), i);
        }
    }

    private insertSuffix(suffix: string, index: number) {
        let currentNode = this.root;
        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.endIndices.push(index); // Store the starting index of the suffix
    }

    public search(pattern: string): number[] {
        let currentNode = this.root;
        for (let char of pattern) {
            if (!currentNode.children.has(char)) {
                return []; // Pattern not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode.endIndices; // Return all starting indices of the pattern
    }
}

// Usage
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree.search("ana")); // Output the starting indices of "ana"
