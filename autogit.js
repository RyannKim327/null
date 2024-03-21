function rabinKarpSearch(text, pattern){
    const prime = 101; // Prime number for hashing
    const base = 256; // Base for hashing

    function hash(text){ // Function to hash a string
        let hashValue = 0;
        for(let i=0; i<text.length; i++){
            hashValue = (hashValue * base + text.charCodeAt(i)) % prime;
        }
        return hashValue;
    }

    let patternHash = hash(pattern);
    let textHash = hash(text.substring(0, pattern.length));

    for(let i=0; i<=text.length - pattern.length; i++){
        if(patternHash === textHash){ // If hash matches, compare the strings
            if(text.substring(i, i + pattern.length) === pattern){
                console.log(`Pattern found at index ${i}`);
            }
        }
        textHash = (textHash - text.charCodeAt(i) * Math.pow(base, pattern.length-1)) % prime;
        textHash = (textHash * base + text.charCodeAt(i + pattern.length)) % prime;
        textHash = (textHash + prime) % prime;
    }
}

let text = 'ababcababcabcabababcabcbabcbabcbabc';
let pattern = 'abc';

rabinKarpSearch(text, pattern);
