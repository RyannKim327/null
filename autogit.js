class SuffixTreeNode {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new SuffixTreeNode();
        for (let i = 0; i < text.length; i++) {
            this.addSuffix(text.substring(i) + '$');
        }
    }

    addSuffix(suffix) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!node.children[char]) {
                node.children[char] = new SuffixTreeNode();
            }
            node = node.children[char];
        }
    }

    search(pattern) {
        let node = this.root;
        for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("apple")); // false
