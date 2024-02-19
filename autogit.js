class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new Node();
        for (let i = 0; i < text.length; i++) {
            this.addSuffix(text.slice(i));
        }
    }

    addSuffix(suffix) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!current.children[char]) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
    }

    search(pattern) {
        let current = this.root;
        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}
