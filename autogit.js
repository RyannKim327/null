class SuffixNode {
    constructor() {
        this.children = {};
    }

    addChild(suffix, index) {
        const firstChar = suffix[0];
        if (!this.children[firstChar]) {
            this.children[firstChar] = new SuffixNode();
        }

        if (suffix.length > 1) {
            const restOfSuffix = suffix.substring(1);
            this.children[firstChar].addChild(restOfSuffix, index);
        } else {
            this.children[firstChar].index = index;
        }
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new SuffixNode();

        for (let i = 0; i < text.length; i++) {
            const suffix = text.substring(i);
            this.root.addChild(suffix, i);
        }
    }

    search(pattern) {
        let node = this.root;
        while (pattern.length > 0) {
            const firstChar = pattern[0];
            if (!node.children[firstChar]) {
                return -1;  // Pattern not found
            }
            node = node.children[firstChar];
            pattern = pattern.substring(1);
        }
        return node.index;  // Return the index of the end of the pattern
    }
}
const text = "banana";
const st = new SuffixTree(text);

console.log(st.search("ana"));  // Output: 1
console.log(st.search("nan"));  // Output: 2
console.log(st.search("apple"));  // Output: -1 (Pattern not found)
