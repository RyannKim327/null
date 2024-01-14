class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Method to insert a word into the trie
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            if (!node.children[character]) {
                node.children[character] = new TrieNode();
            }
            node = node.children[character];
        }
        node.isWord = true;
    }

    // Method to search for a word in the trie
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            if (!node.children[character]) {
                return false;
            }
            node = node.children[character];
        }
        return node.isWord;
    }

    // Method to check if a word has any prefix in the trie
    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const character = prefix[i];
            if (!node.children[character]) {
                return false;
            }
            node = node.children[character];
        }
        return true;
    }
}
// Create a new trie
const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("banana");
trie.insert("mango");

// Search for words
console.log(trie.search("apple"));    // Output: true
console.log(trie.search("banana"));   // Output: true
console.log(trie.search("mango"));    // Output: true
console.log(trie.search("orange"));   // Output: false

// Check for prefixes
console.log(trie.startsWith("app"));   // Output: true
console.log(trie.startsWith("ban"));   // Output: true
console.log(trie.startsWith("man"));   // Output: false
