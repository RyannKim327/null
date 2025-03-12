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

    private buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(start: number) {
        let currentNode = this.root;
        let currentChar = this.text[start];

        for (let i = start; i < this.text.length; i++) {
            const char = this.text[i];
            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(i, null);
                currentNode.children.set(char, newNode);
                currentNode = newNode;
            } else {
                currentNode = currentNode.children.get(char)!;
            }
        }
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;
        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true;
    }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

// Searching for patterns
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
