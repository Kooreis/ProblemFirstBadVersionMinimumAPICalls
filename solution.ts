Here is a TypeScript solution for the problem. This solution uses a binary search algorithm to minimize the number of API calls.

```typescript
class VersionControl {
    isBadVersion(version: number): boolean {
        // This is a placeholder implementation. In a real-world scenario, this method would call the API to check if the version is bad.
        // For the purpose of this example, let's assume that versions greater than 5 are bad.
        return version > 5;
    }
}

class Solution extends VersionControl {
    solve(n: number): number {
        let left = 1;
        let right = n;
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (this.isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}

// Usage
let solution = new Solution();
console.log(solution.solve(10)); // Outputs: 6
```

In this code, the `VersionControl` class has a method `isBadVersion` which checks if a version is bad. The `Solution` class extends `VersionControl` and has a method `solve` which finds the first bad version. The `solve` method uses a binary search algorithm to minimize the number of calls to `isBadVersion`. The `solve` method takes an argument `n` which is the total number of versions. The `solve` method returns the first bad version.