class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
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
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(this.text.substring(i));
        }
    }

    private insertSuffix(suffix: string) {
        let currentNode = this.root;

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }

        currentNode.isEnd = true;  // Mark the end of the suffix
    }

    // Method to check if a substring exists in the suffix tree
    hasSubstring(substring: string): boolean {
        return this.search(substring) !== null;
    }

    private search(substring: string): SuffixTreeNode | null {
        let currentNode = this.root;

        for (let char of substring) {
            if (!currentNode.children.has(char)) {
                return null;
            }
            currentNode = currentNode.children.get(char)!;
        }

        return currentNode.isEnd ? currentNode : null; // return node if it's an end of some suffix
    }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.hasSubstring("ana")); // Output: true
console.log(suffixTree.hasSubstring("nan")); // Output: true
console.log(suffixTree.hasSubstring("band")); // Output: false
