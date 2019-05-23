const assert = require('assert');
const gcd = require('./gcd');

describe('Test for a function that returns the greatest common divisor of two integers', () => {

    it('should be a function', () => {
        assert.equal(typeof gcd, 'function');
    });

    it('should return a number', () => {
        assert.equal(gcd(24, 36), b);
    });

    it('should return a number', () => {
        assert.equal(gcd(24, 36), 12);
    });
    it('should return a number', () => {
        assert.equal(gcd(30, 48), 6);
    });
    it('should return a number', () => {
        assert.equal(gcd(10, 15), 5);
    });
    it('should return a number', () => {
        assert.equal(gcd(100, 25), 25);
    });
    it('should return a number', () => {
        assert.equal(gcd(13, 250), 1);
    });
    it('should return a number', () => {
        assert.equal(gcd(1300, 250), 50);
    });

});