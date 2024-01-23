class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];

            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }

            node = node.children[ch];
        }

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];

            if (!node.children[ch]) {
                return false;
            }

            node = node.children[ch];
        }

        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const ch = prefix[i];

            if (!node.children[ch]) {
                return false;
            }

            node = node.children[ch];
        }

        return true;
    }
}
// Create a new Trie
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

// Search for words in the Trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false

// Check if a prefix exists in the Trie
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("ora")); // Output: true
console.log(trie.startsWith("gra")); // Output: false
