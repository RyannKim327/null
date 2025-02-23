class TrieNode {
    public children: Map<string, TrieNode>;
    public isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
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
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    public search(word: string): boolean {
        const node = this.getNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if the trie starts with a given prefix
    public startsWith(prefix: string): boolean {
        return this.getNode(prefix) !== null;
    }

    // Helper method to get the node corresponding to a prefix
    private getNode(prefix: string): TrieNode | null {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return null;
            }
            node = node.children.get(char)!;
        }
        return node;
    }
}

// Example usage
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
console.log(trie.search("hello")); // true
console.log(trie.search("hi"));    // true
console.log(trie.search("h"));     // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("ho")); // false
