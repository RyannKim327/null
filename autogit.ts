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

    // Insert suffixes of the string into the tree
    insertSuffixes(text: string) {
        const length = text.length;
        for (let i = 0; i < length; i++) {
            this.insert(text.substring(i));
        }
    }

    // Insert a single suffix into the tree
    private insert(suffix: string) {
        let node = this.root;
        for (const char of suffix) {
            if (!node.children.has(char)) {
                node.children.set(char, new SuffixTreeNode());
            }
            node = node.children.get(char)!;
        }
        node.isEnd = true; // Mark the end of the suffix
    }

    // Search for a substring in the suffix tree
    search(substring: string): boolean {
        let node = this.root;
        for (const char of substring) {
            if (!node.children.has(char)) {
                return false; // Not found
            }
            node = node.children.get(char)!;
        }
        return true; // Found
    }
}
const suffixTree = new SuffixTree();
const text = "banana";
suffixTree.insertSuffixes(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
