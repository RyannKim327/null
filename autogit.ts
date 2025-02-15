class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
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

    buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(this.text.slice(i));
        }
    }

    insertSuffix(suffix: string) {
        let currentNode = this.root;

        for (const char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }

        currentNode.isEndOfWord = true;
    }

    search(pattern: string): boolean {
        let currentNode = this.root;

        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }

        return true; // Found the pattern in the tree
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
