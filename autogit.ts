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

    constructor() {
        this.root = new SuffixTreeNode();
    }

    insert(suffix: string): void {
        let currentNode = this.root;

        for (const char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEnd = true; // mark the end of a suffix
    }

    build(text: string): void {
        for (let i = 0; i < text.length; i++) {
            this.insert(text.slice(i)); // Insert all suffixes
        }
    }

    search(pattern: string): boolean {
        let currentNode = this.root;

        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false; // Pattern not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true; // Pattern found
    }
}

// Example Usage
const suffixTree = new SuffixTree();
suffixTree.build("banana");

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // false
