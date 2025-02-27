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

    // Insert a word into the trie
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!; // Unsafe access, assume the char exists
        }
        node.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the trie
    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false; // Character not found
            }
            node = node.children.get(char)!;
        }
        return node.isEndOfWord; // Return true if it is the end of a word
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false; // Prefix not found
            }
            node = node.children.get(char)!;
        }
        return true; // Prefix found
    }
}

// Example usage:
const trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
console.log(trie.startsWith("wor")); // true
