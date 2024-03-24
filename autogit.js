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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

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

    delete(word) {
        let deleteHelper = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }
            let char = word[index];
            if (!node.children[char]) {
                return false;
            }
            let shouldDeleteNode = deleteHelper(node.children[char], word, index + 1);
            if (shouldDeleteNode) {
                delete node.children[char];
                return Object.keys(node.children).length === 0;
            }
            return false;
        };

        deleteHelper(this.root, word, 0);
    }
}

// Example usage
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
trie.insert("app");
console.log(trie.search("app")); // true
trie.delete("app");
console.log(trie.search("app")); // false
