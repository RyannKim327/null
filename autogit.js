class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor() {
        this.root = new Node();
    }

    insertSuffix(suffix) {
        let currentNode = this.root;

        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];

            if (!currentNode.children[char]) {
                currentNode.children[char] = new Node();
            }

            currentNode = currentNode.children[char];
        }
    }

    buildTree(string) {
        for (let i = 0; i < string.length; i++) {
            const suffix = string.slice(i);
            this.insertSuffix(suffix);
        }
    }

    searchSubstring(substring) {
        let currentNode = this.root;

        for (let i = 0; i < substring.length; i++) {
            const char = substring[i];

            if (!currentNode.children[char]) {
                return false;
            }

            currentNode = currentNode.children[char];
        }

        return true;
    }
}

// Usage example
const suffixTree = new SuffixTree();
suffixTree.buildTree("banana");
console.log(suffixTree.searchSubstring("ana")); // Output: true
console.log(suffixTree.searchSubstring("xyz")); // Output: false
