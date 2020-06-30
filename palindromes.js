const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    processedString.split('')
    processedString.reverse()
    processedString = processedString.join('')
    return processedString
}

module.exports = palindromes
