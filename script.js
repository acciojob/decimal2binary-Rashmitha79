function decimalToBinary(decimalNumber) {
    // Check if the input is a valid number
    if (isNaN(decimalNumber) || decimalNumber < 0 || !Number.isInteger(decimalNumber)) {
        return "Invalid input. Please enter a non-negative integer.";
    }

    // Base case: if the decimal number is 0, its binary representation is 0
    if (decimalNumber === 0) {
        return "0";
    }

    // Initialize an empty string to store the binary representation
    let binary = "";

    // Keep dividing the decimal number by 2 and storing the remainder until it becomes 0
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binary;
}

// Example usage
const decimalNumber = 25;
const binaryEquivalent = decimalToBinary(decimalNumber);
console.log(`The binary equivalent of ${decimalNumber} is: ${binaryEquivalent}`);
