# Unexpected Null Return with Undefined Arguments in JavaScript Function

This repository demonstrates a common JavaScript error where a function returns null when it encounters undefined arguments, even though it may be intended to handle only null values.  The issue is resolved by explicitly checking for both null and undefined values.

## Bug Description:

The `foo` function incorrectly handles undefined arguments by returning null. This behavior is unexpected if the function is meant to operate correctly with numeric inputs and handle only explicit null values.

## Solution:

The improved `foo` function in `bugSolution.js` correctly handles both null and undefined arguments, providing a more robust solution.
