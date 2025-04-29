class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    endIndex: number | null;

    constructor() {
        this.children = new Map();
        this.endIndex = null; // This is used to mark the end of a suffix
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
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(index: number) {
        let currentNode = this.root;
        for (let i = index; i < this.text.length; i++) {
            const char = this.text[i];
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.endIndex = index; // Mark the end of this suffix
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;
        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false; // Pattern not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true; // Pattern found
    }

    public getAllSuffixes(node: SuffixTreeNode = this.root, suffix: string[] = [], results: string[] = []): string[] {
        if (node.endIndex !== null) {
            results.push(this.text.substr(node.endIndex));
        }
        for (const [char, childNode] of node.children) {
            this.getAllSuffixes(childNode, suffix.concat(char), results);
        }
        return results;
    }
}
// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);

// Search for a pattern
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("fruit")); // false

// Get all suffixes
console.log(suffixTree.getAllSuffixes()); // ['banana', 'anana', 'nana', 'ana', 'na', 'a']
