class TrieNode {
    public children: { [key: string]: TrieNode };
    public isEndOfWord: boolean;

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
    public insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    public search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if there is a word in the trie that starts with the given prefix
    public startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    // Optional: Delete a word from the trie
    public delete(word: string): boolean {
        return this.deleteHelper(this.root, word, 0);
    }

    private deleteHelper(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0; // Return true if no children left
        }

        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) {
            return false; // Word not found
        }

        const shouldDeleteChild = this.deleteHelper(childNode, word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }

        return false;
    }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // true
console.log(trie.search("hell"));  // false
console.log(trie.startsWith("hell")); // true

trie.delete("hello");
console.log(trie.search("hello")); // false
