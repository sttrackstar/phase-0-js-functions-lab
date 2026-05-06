function calculateTax(amount) {
    return amount * 0.1; 
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(a, b) {
    return Math.max(a, b);
}

function isPalindrome(word) {
    const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}   

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };