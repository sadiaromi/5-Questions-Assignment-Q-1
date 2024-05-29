//..........................Q# 1.........................
//...................create the function to count the number of vowels witin the string..............
function countVowels(inputString) {
    //Convert the inputstring into lowercase 
    const lowerCaseString = inputString.toLowerCase();
    //.............................Vowels.......................
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // Create counter for vowel count
    let vowelCount = 0;
    //Iterate through each character in the string
    for (const char of lowerCaseString) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
//..............Example...................
const inputString = "Hey lets learn some vowels";
const result = countVowels(inputString);
console.log(`The number of vowels in '${inputString}' is/are: ${result}`);
export {};
