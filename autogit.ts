class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

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
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    // Helper function to find a node for the given word/prefix
    private findNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return null;
            }
            currentNode = currentNode.children.get(char)!; // Non-null assertion
        }
        return currentNode;
    }
}

// Example usage:
const trie = new Trie();
trie.insert('hello');
trie.insert('world');
console.log(trie.search('hello')); // true
console.log(trie.search('hell')); // false
console.log(trie.startsWith('wo')); // true
console.log(trie.startsWith('war')); // false
