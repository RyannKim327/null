class SuffixTreeNode {
    public children: Map<string, SuffixTreeNode>;
    public isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
class SuffixTree {
    private root: SuffixTreeNode;

    constructor() {
        this.root = new SuffixTreeNode();
    }

    // Method to insert a suffix into the tree
    public insert(suffix: string): void {
        let currentNode = this.root;

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEnd = true;
    }

    // Function to build the suffix tree from the input string
    public build(text: string): void {
        const length = text.length;

        // Insert all suffixes
        for (let i = 0; i < length; i++) {
            this.insert(text.substring(i));
        }
    }

    // Method to search for a pattern in the suffix tree
    public search(pattern: string): boolean {
        let currentNode = this.root;

        for (let char of pattern) {
            if (!currentNode.children.has(char)) {
                return false; // Not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode.isEnd; // Check if it is a complete suffix
    }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.build(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nana")); // true
console.log(suffixTree.search("band")); // false
