class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(input) {
        this.root = new Node();
        this.input = input;
        this.buildTree();
    }

    buildTree() {
        for (let i = 0; i < this.input.length; i++) {
            this.addSuffix(this.input.substring(i));
        }
    }

    addSuffix(suffix) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!(char in current.children)) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
    }

    search(substring) {
        let current = this.root;
        for (let i = 0; i < substring.length; i++) {
            let char = substring[i];
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana"));  // Output: true
console.log(suffixTree.search("xyz"));  // Output: false
