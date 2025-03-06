class TrieNode {
    // Each node has children and a flag to indicate if it's the end of a word
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!; // Non-null assertion since we've checked if it exists
        }
        node.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord; // Confirm it's end of a word
    }

    // Search for a prefix in the Trie
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null; // Just need to check existence of the prefix
    }

    // Helper function to find a node corresponding to the given word or prefix
    private findNode(word: string): TrieNode | null {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return null; // Prefix doesn't exist
            }
            node = node.children.get(char)!; // Move to the next child
        }
        return node; // Return the node corresponding to the end of word/prefix
    }
}

// Example usage
const trie = new Trie();
trie.insert("hello");
trie.insert("helium");

console.log(trie.search("hello")); // Output: true
console.log(trie.search("hell")); // Output: false
console.log(trie.startsWith("hel")); // Output: true
console.log(trie.startsWith("hey")); // Output: false
