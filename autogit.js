// TrieNode class to represent each node in the trie
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie class to represent the trie data structure
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Function to insert a word into the trie
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

    // Function to search for a word in the trie
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
}

// Usage
let trie = new Trie();
trie.insert("apple");
trie.insert("banana");
console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("grape")); // false
