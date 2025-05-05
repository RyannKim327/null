class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
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

    // Search for a word in the Trie
    search(word: string): boolean {
        const node = this.getNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the Trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.getNode(prefix) !== null;
    }

    // Helper method to get the node representing the last character of the word/prefix
    private getNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                return null;
            }
            currentNode = currentNode.children[char];
        }

        return currentNode;
    }
}
const trie = new Trie();

// Inserting words
trie.insert("apple");
trie.insert("app");

// Searching for words
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("appl"));  // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("b"));  // false
class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

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

    search(word: string): boolean {
        const node = this.getNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        return this.getNode(prefix) !== null;
    }

    private getNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                return null;
            }
            currentNode = currentNode.children[char];
        }

        return currentNode;
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("appl"));  // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("b"));  // false
