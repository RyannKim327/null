class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {}; // Maps characters to child nodes
        this.isEndOfWord = false; // Indicates if this node represents the end of a word
    }
}
class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    /**
     * Inserts a word into the Trie.
     * @param word - The word to insert.
     */
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            // If the character is not in the current node's children, add it
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            // Move to the child node
            currentNode = currentNode.children[char];
        }

        // Mark the end of the word
        currentNode.isEndOfWord = true;
    }

    /**
     * Searches for a word in the Trie.
     * @param word - The word to search for.
     * @returns True if the word exists in the Trie, otherwise false.
     */
    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            // If the character is not found, the word does not exist
            if (!currentNode.children[char]) {
                return false;
            }
            // Move to the child node
            currentNode = currentNode.children[char];
        }

        // Check if the last node marks the end of a word
        return currentNode.isEndOfWord;
    }

    /**
     * Checks if there is any word in the Trie that starts with the given prefix.
     * @param prefix - The prefix to check.
     * @returns True if there is at least one word with the prefix, otherwise false.
     */
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            // If the character is not found, no word with this prefix exists
            if (!currentNode.children[char]) {
                return false;
            }
            // Move to the child node
            currentNode = currentNode.children[char];
        }

        // If we reach here, the prefix exists in the Trie
        return true;
    }
}
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

// Search for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: true
console.log(trie.search("appl"));  // Output: false (not a complete word)

// Check for prefixes
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("bat")); // Output: false
