function bwtTransform(input) {
  let transformArray = [];
  
  for (let i = 0; i < input.length; i++) {
    transformArray.push(input.substr(i) + input.substr(0, i));
  }

  transformArray.sort();

  let transformedString = '';
  for (let i = 0; i < transformArray.length; i++) {
    transformedString += transformArray[i].charAt(input.length - 1);
  }

  return transformedString;
}
let inputString = 'example';
let transformedString = bwtTransform(inputString);
console.log(transformedString); // Output: eelpmax
