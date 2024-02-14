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
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("cat");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("banana"));  // Output: true
console.log(trie.search("cat"));     // Output: true
console.log(trie.search("dog"));     // Output: false
