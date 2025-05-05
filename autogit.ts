class SuffixTreeNode {
    public children: Map<string, SuffixTreeNode> = new Map();
    public start: number | undefined;
    public end: number | undefined;

    constructor(start?: number, end?: number) {
        this.start = start;
        this.end = end;
    }
}

class SuffixTree {
    private root: SuffixTreeNode;
    private text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode();
        this.text = text;
        this.buildSuffixTree();
    }

    private buildSuffixTree(): void {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            const suffix = this.text.substring(i);
            this.insertSuffix(suffix, i);
        }
    }

    private insertSuffix(suffix: string, position: number): void {
        let currentNode = this.root;

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(position, undefined);
                currentNode.children.set(char, newNode);
            }
            currentNode = currentNode.children.get(char)!;
        }
    }

    public search(query: string): boolean {
        let currentNode = this.root;
        for (let char of query) {
            if (!currentNode.children.has(char)) {
                return false;  // Query not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true; // Query found
    }
}

// Example usage:
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("na")); // true
console.log(suffixTree.search("abc")); // false
