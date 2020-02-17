/**
 * Converts word in camel case to phrase in lower case
 * (camelCase -> camel case)
 * 
 * @param {String} word camel case word.
 * @returns converted phrase.
 */
module.exports.camelCaseToPhrase = word => toLowerCasePhrase(word).join(' ');

/**
 * Converts word in camel case to snake case
 * (camelCase -> camel_case)
 * 
 * @param {String} word camel case word.
 * @returns snake case word.
 */
module.exports.camelCaseToSnakeCase = word => toLowerCasePhrase(word).join('_');

/**
 * Converts word in camel case to kebab case
 * (camelCase -> camel-case)
 * 
 * @param {String} word camel case word.
 * @returns kebab case word.
 */
module.exports.camelCaseToKebabCase = word => toLowerCasePhrase(word).join('-');

/**
 * Converts camel case word to string[].
 * 
 * @param {String} word camel case word
 * @returns String[]
 */
function toLowerCasePhrase(word) {
    return word.split(/(?=[A-Z])/g).map(w => w.toLocaleLowerCase());
}
