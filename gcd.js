// Write a function that returns the greatest common divisor of two integers.

module.exports = function gcd(a,b) {
    var R;
    while ((a % b) > 0)  {
            R = a % b;
            a = b;
            b = R;
    }
    return b;
};

///



