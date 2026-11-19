// basic arithmetic
// operations covered : addition, subtraction, multiplication, divide
//-------------------------------------------------------------------------------------------------------------------------

//JsDoc

/**
 * @callback BinaryMathOp
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// validate nan or infinites
/**
 * Ensures both arguments are finite numbers, otherwise throws a TypeError.
 * @param {unknown} a
 * @param {unknown} b
 * @returns {void}
 * @throws {TypeError}
 */
function validateNumber(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("Both argument must be finite numbers");
  }
}

/** @type {BinaryMathOp} */
function addition(a, b) {
  validateNumber(a, b);
  return a + b;
}

/** @type {BinaryMathOp} */
function subtraction(a, b) {
  validateNumber(a, b);
  return a - b;
}

/** @type {BinaryMathOp} */
function multiplication(a, b) {
  validateNumber(a, b);
  return a * b;
}

/** @type {BinaryMathOp} */
function divide(a, b) {
  validateNumber(a, b);
  if (b == 0) {
    throw new RangeError("Cannot be divided by 0");
  }
  return a / b;
}

export {
  addition as add,
  subtraction as sub,
  multiplication as mul,
  divide as div,
};
