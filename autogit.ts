class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
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
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a complete word in the trie
    search(word: string): boolean {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    // Check if any word in the trie starts with the given prefix
    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }

    // Remove a word from the trie
    remove(word: string): boolean {
        return this.removeHelper(this.root, word, 0);
    }

    private removeHelper(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false; // Word not found
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0; // True if node has no children
        }

        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) {
            return false; // Word not found
        }

        const shouldDeleteChild = this.removeHelper(childNode, word, index + 1);
        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0; // Return true if no children remain
        }

        return false; // Word is still present
    }
}

// Example usage
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
trie.insert("how");
console.log(trie.search("hello")); // true
console.log(trie.search("hey")); // false
console.log(trie.startsWith("he")); // true
trie.remove("hi");
console.log(trie.search("hi")); // false
