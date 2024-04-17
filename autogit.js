// TrieNode class
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie class
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Method to insert a word into the trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Method to search for a word in the trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Method to check if a word prefix exists in the trie
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example usage
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // Output: true
console.log(trie.search('app')); // Output: false
console.log(trie.startsWith('app')); // Output: true
