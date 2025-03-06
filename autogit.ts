class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
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
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        currentNode.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    // Helper function to find a node corresponding to a given word/prefix
    private findNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return null; // Not found
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        return currentNode; // Return the node corresponding to the last character
    }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");
trie.insert("hi");

console.log(trie.search("hello")); // true
console.log(trie.search("hell"));  // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("wo")); // true
console.log(trie.startsWith("hi")); // true
console.log(trie.startsWith("hii")); // false
