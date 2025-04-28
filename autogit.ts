class SuffixTreeNode {
    public children: Map<string, SuffixTreeNode>;
    public isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
class SuffixTree {
    private root: SuffixTreeNode;

    constructor() {
        this.root = new SuffixTreeNode();
    }

    // Insert a string's suffixes into the tree
    insert(text: string): void {
        const length = text.length;
        for (let i = 0; i < length; i++) {
            this.insertSuffix(text.substring(i, length));
        }
    }

    // Insert a suffix into the tree
    private insertSuffix(suffix: string): void {
        let currentNode = this.root;

        for (const char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true; // Mark the end of a suffix
    }

    // Search for a substring in the suffix tree
    search(pattern: string): boolean {
        return this.searchPattern(this.root, pattern);
    }

    // Helper function to search for the pattern recursively
    private searchPattern(node: SuffixTreeNode, pattern: string): boolean {
        let currentNode = node;

        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true; // Pattern found
    }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.insert(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("na"));  // true
console.log(suffixTree.search("xyz")); // false
