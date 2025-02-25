class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    // Search if a word exists in the trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    // Helper function to find the node corresponding to the last character of the prefix/word
    private findNode(word: string): TrieNode | null {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                return null; // Not found
            }
            node = node.children.get(char)!;
        }
        return node; // Found
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("ho")); // false
