/**
 * Converts word in camel case to phrase in lower case
 * (camelCase -> camel case)
 * Use for docs comments or in test descriptions.
 * 
 * @param {String} word camel case word.
 * @returns converted phrase.
 */
module.exports.convertToPhrase = word => toLowerCasePhrase(word).join(' ');

/**
 * Converts word to capitalized phrase
 * (camelCase -> Camel case)
 * Use for docs comments or in test descriptions.
 * 
 * @param {String} word camel case word.
 * @returns capitalized phrase.
 */
module.exports.convertToPhraseAndCapitalize = word => capitalize(toLowerCasePhrase(word).join(' '));

/**
 * Converts word in camel case to snake case
 * (camelCase -> camel_case)
 * 
 * @param {String} word camel case word.
 * @returns snake case word.
 */
module.exports.toSnakeCase = word => toLowerCasePhrase(word).join('_');

/**
 * Converts word in camel case to kebab case
 * (camelCase -> camel-case)
 * 
 * @param {String} word camel case word.
 * @returns kebab case word.
 */
module.exports.toKebabCase = word => toLowerCasePhrase(word).join('-');

/**
 * Capitalizes given word.
 * 
 * @param {String} word to capitalize
 * @returns updated word
 */
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
module.exports.capitalize = capitalize;

/**
 * Formats given date to 'dd-mm-yyyy-hh-mm-ss'
 * 
 * @param {Date} date
 * @returns formatted date string.
 */
module.exports.formatDate = (date) => {
    let dd = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (dd < 10 ? '0' : '') + `${dd}-`
           + (month < 10 ? '0' : '') + `${month}-`
           + year + '-'
           + (hours < 10 ? '0' : '') + `${hours}-`
           + (minutes < 10 ? '0' : '') + `${minutes}-`
           + (seconds < 10 ? '0' : '') + `${seconds}-`;
}

/**
 * Converts camel case word to string[].
 * 
 * @param {String} word camel case word
 * @returns String[]
 */
function toLowerCasePhrase(word) {
    return word.split(/(?=[A-Z])/g).map(w => w.toLocaleLowerCase());
}
