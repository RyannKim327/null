def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n
public static int largestPrimeFactor(int n) {
    int i = 2;
    while (i * i <= n) {
        if (n % i != 0) {
            i++;
        } else {
            n /= i;
        }
    }
    return n;
}
int largestPrimeFactor(int n) {
    int i = 2;
    while (i * i <= n) {
        if (n % i != 0) {
            i++;
        } else {
            n /= i;
        }
    }
    return n;
}
function largestPrimeFactor(n) {
    let i = 2;
    while (i * i <= n) {
        if (n % i !== 0) {
            i++;
        } else {
            n /= i;
        }
    }
    return n;
}
def largest_prime_factor(n)
  i = 2
  while i * i <= n
    if n % i != 0
      i += 1
    else
      n /= i
    end
  end
  n
end
