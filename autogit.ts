class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean; // To mark the end of a word

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            // If the character doesn't exist in children, create a new TrieNode
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            // Move to the next node
            currentNode = currentNode.children.get(char)!; // Using non-null assertion since we just added it
        }

        // Mark the end of the word
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            // If the character is not found, return false
            if (!currentNode.children.has(char)) {
                return false;
            }
            // Move to the next node
            currentNode = currentNode.children.get(char)!;
        }

        // Return true if we reached the end of the word; otherwise, false
        return currentNode.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            // If the character is not found, return false
            if (!currentNode.children.has(char)) {
                return false;
            }
            // Move to the next node
            currentNode = currentNode.children.get(char)!;
        }

        // If we reach here, it means the prefix exists
        return true;
    }
}

// Example usage of the Trie

const trie = new Trie();
trie.insert("hello");
trie.insert("world");
trie.insert("hi");

console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("hi"));    // true
console.log(trie.search("hell"));  // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("wor")); // true
console.log(trie.startsWith("h"));   // true
console.log(trie.startsWith("x"));   // false
