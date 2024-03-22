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
            const ch = word[i];
            if (!current.children[ch]) {
                current.children[ch] = new TrieNode();
            }
            current = current.children[ch];
        }

        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            if (!current.children[ch]) {
                return false;
            }
            current = current.children[ch];
        }

        return current.isEndOfWord;
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
