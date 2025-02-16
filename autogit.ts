class SuffixTreeNode {
    children: { [key: string]: SuffixTreeNode } = {};
    isEndOfWord: boolean = false;

    constructor() {}
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
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(this.text.slice(i), i);
        }
    }

    private insertSuffix(suffix: string, index: number) {
        let currentNode = this.root;
        for (const char of suffix) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new SuffixTreeNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
        currentNode.children['$'] = new SuffixTreeNode(); // Unique end marker
    }

    search(pattern: string): boolean {
        let currentNode = this.root;
        for (const char of pattern) {
            if (!currentNode.children[char]) {
                return false; // Pattern not found
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord; // Check if it's an end of a suffix
    }
}

// Example usage:
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
