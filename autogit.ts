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

    // Insert a word into the trie
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true; // mark the end of the word
    }

    // Search for a word in the trie
    search(word: string): boolean {
        const node = this._findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this._findNode(prefix) !== null;
    }

    // Helper function to find the node based on the word
    private _findNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                return null;  // Character not found, return null
            }
            currentNode = currentNode.children[char];
        }
        return currentNode; // Return the node corresponding to the last character
    }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");
trie.insert("hi");

console.log(trie.search("hello")); // Output: true
console.log(trie.search("hell")); // Output: false
console.log(trie.startsWith("he")); // Output: true
console.log(trie.startsWith("wor")); // Output: true
console.log(trie.startsWith("woa")); // Output: false
