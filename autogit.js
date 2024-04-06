class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(str) {
        this.root = new Node();
        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.substring(i));
        }
    }

    addSuffix(suffix) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
    }

    search(pattern) {
        let node = this.root;
        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example Usage
let suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("xyz")); // Output: false
