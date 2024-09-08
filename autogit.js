arr = [1, 2, 3, 2, 4, 3, 5]
arr = list(set(arr))
print(arr)
let arr = [1, 2, 3, 2, 4, 3, 5];
arr = [...new Set(arr)];
console.log(arr);
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 2, 4, 3, 5};
        ArrayList<Integer> uniqueList = new ArrayList<>();

        for (Integer num : arr) {
            if (!uniqueList.contains(num)) {
                uniqueList.add(num);
            }
        }

        Integer[] uniqueArr = uniqueList.toArray(new Integer[0]);
        System.out.println(Arrays.toString(uniqueArr));
    }
}
