class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false; // Flag to mark the end of a word
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
            
            if (!(char in current.children)) {
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
            
            if (!(char in current.children)) {
                return false;
            }
            
            current = current.children[char];
        }
        
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            
            if (!(char in current.children)) {
                return false;
            }
            
            current = current.children[char];
        }
        
        return true;
    }
}

// Usage example
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: false
console.log(trie.startsWith("app")); // Output: true
