```cpp
#include <iostream>

bool isBadVersion(int version);

int firstBadVersion(int n) {
    int left = 1;
    int right = n;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

bool isBadVersion(int version) {
    // This is a placeholder function. In a real scenario, this function would call an API to check if the version is bad.
    // For the purpose of this problem, let's assume that all versions greater than or equal to 3 are bad.
    return version >= 3;
}

int main() {
    int n;
    std::cout << "Enter the total number of versions: ";
    std::cin >> n;
    int firstBad = firstBadVersion(n);
    std::cout << "The first bad version is: " << firstBad << std::endl;
    return 0;
}
```