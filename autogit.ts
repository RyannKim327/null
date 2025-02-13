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

    insert(word: string) {
        const length = word.length;
        for (let i = 0; i < length; i++) {
            const suffix = word.substring(i);
            this.insertSuffix(suffix);
        }
    }

    private insertSuffix(suffix: string) {
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
        return true; // can return `currentNode.isEndOfWord` to check if pattern is exact word
    }
}
const suffixTree = new SuffixTree();
const text = "banana";

suffixTree.insert(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("bana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("x")); // false
