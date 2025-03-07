class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null;

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
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

    private buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(index: number) {
        let currentNode = this.root;
        const suffix = this.text.substring(index);

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(index, null);
                currentNode.children.set(char, newNode);
            }
            currentNode = currentNode.children.get(char)!;
            currentNode.end = index + suffix.length; // Update end index
        }
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;
        for (let char of pattern) {
            if (!currentNode.children.has(char)) {
                return false; // Pattern not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true; // Pattern found
    }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
