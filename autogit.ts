class TrieNode {
    character: string;
    isEndOfWord: boolean;
    children: { [key: string]: TrieNode };

    constructor(character: string) {
        this.character = character;
        this.isEndOfWord = false;
        this.children = {};
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode('');
    }

    insert(word: string) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current.children[char]) {
                current.children[char] = new TrieNode(char);
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word: string): boolean {
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

    delete(word: string) {
        const deleteHelper = (node: TrieNode, index: number): boolean => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[index];
            if (!node.children[char] || !deleteHelper(node.children[char], index + 1)) {
                return false;
            }

            if (Object.keys(node.children[char].children).length === 0) {
                delete node.children[char];
                return Object.keys(node.children).length === 0;
            }

            return false;
        };

        deleteHelper(this.root, 0);
    }
}

// Usage example
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // Output: true
console.log(trie.search('app')); // Output: false
trie.delete('apple');
console.log(trie.search('apple')); // Output: false
