// fibonacci

/**
 * @param {unknown} a
 * @returns {void}
 * @throws {TypeError}
 */

function validateNumber(n) {
  if (!Number.isFinite(n) || n < 0) {
    throw new TypeError("argument must be finite whole number");
  }
}

/**
 *
 * @param {number} n
 * @returns {{ sequence: number[], lastvalue: number }}
 */

export function fibonacci(n) {
  validateNumber(n);
  let fibonacciarray = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      fibonacciarray[i] = i;
      continue;
    }
    fibonacciarray[i] = fibonacciarray[i - 1] + fibonacciarray[i - 2];
  }
  return {
    sequence: fibonacciarray,
    lastvalue: fibonacciarray[fibonacciarray.length - 1],
  };
}

/**
 *
 * @param {number} n
 * @returns {number}
 */

export function factorial(n) {
  validateNumber(n);
  if (n <= 1) {
    return 1;
  }

  let value = 1;
  let i = n;
  do {
    value *= i;
    i--;
  } while (i > 1);

  return value;
}
