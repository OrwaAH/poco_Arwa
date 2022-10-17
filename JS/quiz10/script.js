const gcd = function(x, y, ...z) {
    if (!y && z.length > 0) {
      return gcd(x, ...z);
    }
    if (!y) {
      return x;
    }
    return gcd(y, x % y, ...z);
  }

  console.log(gcd(6, 12, 8));
console.log(gcd(9, 15, 36));