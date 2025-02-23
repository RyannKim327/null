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

    constructor() {
        this.root = new SuffixTreeNode();
    }

    // Insert a suffix into the suffix tree
    insert(suffix: string) {
        let currentNode = this.root;

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true;
    }

    // Build the suffix tree from a given string
    build(text: string) {
        for (let i = 0; i < text.length; i++) {
            this.insert(text.substring(i));
        }
    }

    // Search for a pattern in the suffix tree
    search(pattern: string): boolean {
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

// Example usage
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.build(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
