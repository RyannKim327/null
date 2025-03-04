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

    // Function to insert a suffix into the suffix tree
    insertSuffix(suffix: string) {
        let currentNode = this.root;
        
        for (const char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true; // Mark the end of the suffix
    }

    // Function to build the suffix tree from a string
    buildSuffixTree(text: string) {
        // Insert all suffixes into the tree
        for (let i = 0; i < text.length; i++) {
            this.insertSuffix(text.substring(i));
        }
    }

    // Function to search for a substring in the suffix tree
    search(substring: string): boolean {
        let currentNode = this.root;

        for (const char of substring) {
            if (!currentNode.children.has(char)) {
                return false; // Char not found
            }
            currentNode = currentNode.children.get(char)!;
        }

        return true; // Found the substring
    }
}
// Example usage
const suffixTree = new SuffixTree();
const text = "bananas";
suffixTree.buildSuffixTree(text);

// Search for substrings
console.log(suffixTree.search("anana"));  // Output: true
console.log(suffixTree.search("nan"));     // Output: true
console.log(suffixTree.search("nana"));    // Output: true
console.log(suffixTree.search("abcd"));     // Output: false
