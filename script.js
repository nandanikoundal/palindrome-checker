
function isPalindrome(str) {

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);
    return cleanStr === reverseStr;
}



function palindromeChecker(){

    const inputtext = document.getElementById('inputtext');
    const result = document.getElementById('result');

    if (isPalindrome(inputtext.value)) {
        result.textContent = `"${inputtext.value}" is a Palindrome`;
    } else {
        result.textContent = `"${inputtext.value}" is not a Palindrome`;
    }

}



document.getElementById('checkButton').addEventListener("click", palindromeChecker);