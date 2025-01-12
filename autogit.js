def bwt(s):
    """
    Burrows-Wheeler Transform (BWT) algorithm

    Args:
        s (str): input string

    Returns:
        str: BWT-transformed string
    """
    n = len(s)
    matrix = [s[i:] + s[:i] for i in range(n)]  # Create a matrix of rotations
    matrix.sort()  # Sort the matrix lexicographically
    return ''.join([row[-1] for row in matrix])  # Take the last column as the BWT

def ibwt(bwt_s):
    """
    Inverse Burrows-Wheeler Transform (IBWT) algorithm

    Args:
        bwt_s (str): BWT-transformed string

    Returns:
        str: original string
    """
    n = len(bwt_s)
    matrix = [[''] * n for _ in range(n)]  # Create an empty matrix
    for i, c in enumerate(bwt_s):
        matrix[i][0] = c  # Fill in the first column
    for j in range(1, n):
        for i in range(n):
            matrix[i][j] = matrix[(i - 1) % n][j - 1]  # Fill in the rest of the matrix
    matrix.sort()  # Sort the matrix lexicographically
    return ''.join(matrix[0])  # Take the first row as the original string
public class BWT {
    public static String bwt(String s) {
        int n = s.length();
        String[] matrix = new String[n];
        for (int i = 0; i < n; i++) {
            matrix[i] = s.substring(i) + s.substring(0, i);
        }
        Arrays.sort(matrix);
        StringBuilder bwtS = new StringBuilder();
        for (String row : matrix) {
            bwtS.append(row.charAt(row.length() - 1));
        }
        return bwtS.toString();
    }

    public static String ibwt(String bwtS) {
        int n = bwtS.length();
        String[] matrix = new String[n];
        for (int i = 0; i < n; i++) {
            matrix[i] = "";
        }
        for (int i = 0; i < n; i++) {
            matrix[i] = bwtS.charAt(i) + matrix[i];
        }
        Arrays.sort(matrix);
        StringBuilder s = new StringBuilder();
        for (String row : matrix) {
            s.append(row.charAt(0));
        }
        return s.toString();
    }
}
#include <string>
#include <vector>
#include <algorithm>

std::string bwt(const std::string& s) {
    int n = s.length();
    std::vector<std::string> matrix(n);
    for (int i = 0; i < n; i++) {
        matrix[i] = s.substr(i) + s.substr(0, i);
    }
    std::sort(matrix.begin(), matrix.end());
    std::string bwtS;
    for (const auto& row : matrix) {
        bwtS += row.back();
    }
    return bwtS;
}

std::string ibwt(const std::string& bwtS) {
    int n = bwtS.length();
    std::vector<std::string> matrix(n);
    for (int i = 0; i < n; i++) {
        matrix[i] = "";
    }
    for (int i = 0; i < n; i++) {
        matrix[i] = bwtS[i] + matrix[i];
    }
    std::sort(matrix.begin(), matrix.end());
    std::string s;
    for (const auto& row : matrix) {
        s += row.front();
    }
    return s;
}
fn bwt(s: &str) -> String {
    let n = s.len();
    let mut matrix: Vec<String> = (0..n).map(|i| {
        let mut rotated = s[i..].to_string();
        rotated.push_str(&s[..i]);
        rotated
    })
    .collect();
    matrix.sort_unstable();
    matrix.into_iter().map(|row| row.chars().last().unwrap()).collect()
}

fn ibwt(bwt_s: &str) -> String {
    let n = bwt_s.len();
    let mut matrix: Vec<String> = vec![String::new(); n];
    for
