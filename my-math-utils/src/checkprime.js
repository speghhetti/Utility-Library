// Check prime number

// validate number

/**
 * @param {unknown} a
 * @returns {void}
 * @throws {TypeError}
 */

function validatenumber(a) {
  if (!Number.isFinite(a) || a < 0) {
    throw new TypeError("argument must be finite whole number");
  }
}

/**
 * @param {number} a
 * @return {boolean}
 */
// check prime function
export function checkprime(a) {
  validatenumber(a);
  if (a < 2) {
    throw new RangeError("Value cannot be 0");
  }

  if (!(a % 2 == 0 || a % 3 == 0 || a % 5 == 0)) {
    // numbers divisible by 2,3 or 5 are not prime numbers
    return true;
  } else {
    return false;
  }
}
