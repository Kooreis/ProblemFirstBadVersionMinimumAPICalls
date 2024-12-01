```javascript
function isBadVersion(version) {
    // This is a placeholder for the API call which would return whether the version is bad or not.
    // In a real scenario, this function would make an API call to check if the version is bad.
    // For the purpose of this problem, let's assume that versions higher than 5 are bad.
    return version > 5;
}

function findFirstBadVersion(n) {
    let start = 1;
    let end = n;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (isBadVersion(mid)) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

console.log(findFirstBadVersion(10));
```