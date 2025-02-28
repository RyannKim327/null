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

    // Insert a word into the Trie
    insert(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is a prefix in the Trie
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    // Helper function to find a node based on the word
    private findNode(word: string): TrieNode | null {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return null; // Character not found
            }
            node = node.children[char];
        }
        return node;
    }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("hell"));  // false
console.log(trie.startsWith("hell")); // true
