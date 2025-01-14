numbers = [1, 2, 3, 4, 5]
mean = sum(numbers) / len(numbers)
print(mean)
import statistics
numbers = [1, 2, 3, 4, 5]
mean = statistics.mean(numbers)
print(mean)
List<Double> numbers = Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);
double sum = 0;
for (double num : numbers) {
    sum += num;
}
double mean = sum / numbers.size();
System.out.println(mean);
List<Double> numbers = Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);
double mean = numbers.stream().mapToDouble(d -> d).sum() / numbers.size();
System.out.println(mean);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
const mean = sum / numbers.length;
console.log(mean);
#include <vector>
#include <numeric>

std::vector<double> numbers = {1.0, 2.0, 3.0, 4.0, 5.0};
double sum = std::accumulate(numbers.begin(), numbers.end(), 0.0);
double mean = sum / numbers.size();
std::cout << mean << std::endl;
numbers = [1, 2, 3, 4, 5]
mean = numbers.sum.to_f / numbers.size
puts mean
