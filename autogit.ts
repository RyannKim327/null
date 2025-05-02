class SuffixTreeNode {
    children: Map<string, SuffixTreeNode> = new Map();
    start: number = -1;
    end: number = -1;
    suffixLink: SuffixTreeNode | null = null;

    constructor(start?: number, end?: number) {
        if (start !== undefined) this.start = start;
        if (end !== undefined) this.end = end;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode();
        this.buildSuffixTree();
    }

    buildSuffixTree(): void {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.addSuffix(i);
        }
    }

    addSuffix(startIndex: number): void {
        let currentNode = this.root;
        let j = startIndex;
        while (j < this.text.length) {
            const currentChar = this.text[j];
            if (currentNode.children.has(currentChar)) {
                currentNode = currentNode.children.get(currentChar)!;
                j++;
            } else {
                const newNode = new SuffixTreeNode(startIndex, this.text.length);
                currentNode.children.set(currentChar, newNode);
                return;
            }
        }
    }

    contains(substring: string): boolean {
        let currentNode = this.root;
        let i = 0;
        while (i < substring.length) {
            const currentChar = substring[i];
            if (!currentNode.children.has(currentChar)) {
                return false;  // char not found, substring not present
            }
            currentNode = currentNode.children.get(currentChar)!;
            i++;
        }
        return true; // substring exists
    }

    // Optional: To print the tree structure for debugging
    print(node: SuffixTreeNode = this.root, prefix: string = ''): void {
        for (const [char, child] of node.children) {
            const edgeLabel = this.text.slice(child.start, child.end);
            console.log(prefix + edgeLabel);
            this.print(child, prefix + edgeLabel);
        }
    }
}

// Usage example
const text = "banana";
const suffixTree = new SuffixTree(text);
suffixTree.print(); // print the tree paths
console.log(suffixTree.contains("ana")); // true
console.log(suffixTree.contains("mango")); // false
