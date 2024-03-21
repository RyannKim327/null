class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new Node();
        for (let i = 0; i < text.length; i++) {
            this.addSuffix(text.substring(i));
        }
    }

    addSuffix(suffix) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const currentChar = suffix[i];
            if (!currentNode.children[currentChar]) {
                currentNode.children[currentChar] = new Node();
            }
            currentNode = currentNode.children[currentChar];
        }
    }

    search(pattern) {
        let currentNode = this.root;
        for (let i = 0; i < pattern.length; i++) {
            const currentChar = pattern[i];
            if (!currentNode.children[currentChar]) {
                return false;
            }
            currentNode = currentNode.children[currentChar];
        }
        return true;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("ananas")); // false
