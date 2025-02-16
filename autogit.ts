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

    insert(text: string): void {
        for (let i = 0; i < text.length; i++) {
            this.insertSuffix(text.substring(i));
        }
    }

    private insertSuffix(suffix: string): void {
        let currentNode = this.root;

        for (const char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true;
    }

    containsPattern(pattern: string): boolean {
        let currentNode = this.root;

        for (const char of pattern) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        
        return true; // pattern exists in the tree
    }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.insert(text);

console.log(suffixTree.containsPattern("ana")); // Output: true
console.log(suffixTree.containsPattern("na"));  // Output: true
console.log(suffixTree.containsPattern("xyz")); // Output: false
