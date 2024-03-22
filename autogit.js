class Node {
    constructor() {
        this.children = {};
        this.suffixLink = null;
    }
}
class SuffixTree {
    constructor(input) {
        this.root = new Node();
        this.input = input;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.input.length; i++) {
            this.addSuffix(this.input.substring(i));
        }
    }

    addSuffix(suffix) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix.charAt(i);
            if (!current.children[char]) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
    }
}
searchSubString(substring) {
    let current = this.root;
    for (let i = 0; i < substring.length; i++) {
        let char = substring.charAt(i);
        if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }
    return true;
}
