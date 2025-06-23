class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>(); // Stores child nodes
        this.isEndOfWord = false; // Marks if the node is the end of a word
    }
}
class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    /**
     * Inserts a word into the trie.
     * @param word - The word to insert.
     */
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                // Create a new node if the character doesn't exist
                currentNode.children.set(char, new TrieNode());
            }
            // Move to the next node
            currentNode = currentNode.children.get(char)!;
        }

        // Mark the end of the word
        currentNode.isEndOfWord = true;
    }

    /**
     * Searches for a word in the trie.
     * @param word - The word to search for.
     * @returns True if the word exists, false otherwise.
     */
    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false; // Word not found
            }
            currentNode = currentNode.children.get(char)!;
        }

        // Check if the last node marks the end of a word
        return currentNode.isEndOfWord;
    }

    /**
     * Checks if there is any word in the trie that starts with the given prefix.
     * @param prefix - The prefix to check.
     * @returns True if the prefix exists, false otherwise.
     */
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false; // Prefix not found
            }
            currentNode = currentNode.children.get(char)!;
        }

        return true; // Prefix exists
    }
}
// Create a new Trie instance
const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

// Search for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: true
console.log(trie.search("appl"));  // Output: false

// Check for prefixes
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("bat")); // Output: false
