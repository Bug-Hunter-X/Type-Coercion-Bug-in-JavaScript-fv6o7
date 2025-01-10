# Type Coercion Bug in JavaScript

This repository demonstrates a common type coercion issue in JavaScript that can lead to unexpected behavior.  The `foo` function intends to perform addition, but due to JavaScript's loose typing, it concatenates strings when a number and string are passed as arguments.

## Bug Description

The `bug.js` file shows the function `foo` which adds two numbers when both arguments are numbers. However, when a number and string are passed as arguments, the function concatenates them instead of performing arithmetic addition. This is a common source of errors in JavaScript.

## Solution

The `bugSolution.js` file provides a solution by explicitly converting the input arguments to numbers using `Number()` before performing the addition.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the files in a JavaScript environment (e.g., Node.js). Observe the different outputs.

This demonstrates the importance of explicit type checking and conversion in JavaScript to avoid unexpected type coercion behaviors.