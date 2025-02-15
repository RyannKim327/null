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

    insert(word: string): void {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true;
    }

    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    private findNode(word: string): TrieNode | null {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return null;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
console.log(trie.startsWith("he")); // true
