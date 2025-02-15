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
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false; // Character not found
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        return currentNode.isEndOfWord; // Return true if it's the end of a word
    }

    // Check if there is any word in the Trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false; // Prefix not found
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        return true; // Prefix found
    }
}

// Example usage
const trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
console.log(trie.startsWith("hell")); // true
console.log(trie.startsWith("wor")); // true
console.log(trie.search("world")); // true
