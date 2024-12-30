function longestCommonPrefix(strings) {
    if (strings.length == 0) {
        return "";
    }
    
    let prefix = strings[0];
    
    for (let i = 1; i < strings.length; i++) {
        let currentString = strings[i];
        let j = 0;
        
        while (j < prefix.length && j < currentString.length && prefix[j] == currentString[j]) {
            j++;
        }
        
        prefix = prefix.slice(0, j);
        
        if (prefix === "") {
            break; // No common prefix
        }
    }
    
    return prefix;
}

let strings = ["apple", "apply", "appreciate"];
let result = longestCommonPrefix(strings);
console.log(result); // Output: "app"
