my_array = [1, 2, 3, 4, 5]
reversed_array = my_array[::-1]
print(reversed_array)
let myArray = [1, 2, 3, 4, 5];
let reversedArray = myArray.reverse();
console.log(reversedArray);
import java.util.Arrays;
public class ReverseArray {
    public static void main(String[] args) {
        int[] myArray = {1, 2, 3, 4, 5};
        int[] reversedArray = new int[myArray.length];
        
        for (int i = 0; i < myArray.length; i++) {
            reversedArray[i] = myArray[myArray.length - 1 - i];
        }
        
        System.out.println(Arrays.toString(reversedArray));
    }
}
