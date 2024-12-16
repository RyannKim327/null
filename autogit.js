# Remove an element from a Python list
my_list = [1, 2, 3, 4, 5]
element_to_remove = 3
my_list.remove(element_to_remove)
print(my_list)
// Remove an element from a JavaScript array
let myArray = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let index = myArray.indexOf(elementToRemove);
if (index > -1) {
    myArray.splice(index, 1);
}
console.log(myArray);
// Remove an element from a Java array
int[] myArray = {1, 2, 3, 4, 5};
int elementToRemove = 3;
int index = -1;
for (int i = 0; i < myArray.length; i++) {
    if (myArray[i] == elementToRemove) {
        index = i;
        break;
    }
}
if (index > -1) {
    int[] newArray = new int[myArray.length - 1];
    System.arraycopy(myArray, 0, newArray, 0, index);
    System.arraycopy(myArray, index + 1, newArray, index, myArray.length - index - 1);
    System.out.println(Arrays.toString(newArray));
}
