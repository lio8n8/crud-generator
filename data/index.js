const EXT = require('./extensions');
const SUBDIRECTORIES = require('./subdirectories');
const javaFilenames = require('./java/filenames');

/**
 * Root templates directory.
 */
const TEMPLATE_DIRECTORY_ROOT = 'templates';

/**
 * Java template directory.
 */
const TEMPLATE_DIRECTORY_JAVA = `${TEMPLATE_DIRECTORY_ROOT}/java`;

/**
 * Groovy tests template directory.
 */
const TEMPLATE_DIRECTORY_GROOVY_TESTS = `${TEMPLATE_DIRECTORY_ROOT}/java/tests`;

/**
 * Contains data needed for creating java files.
 */
const java = [
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/DTO`,
        ...javaFilenames.dto
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/RequestDTO`,
        ...javaFilenames.requestDto
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Entity`,
        ...javaFilenames.model
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IRepository`,
        ...javaFilenames.iRepository
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IService`,
        ...javaFilenames.iService
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Service`,
        ...javaFilenames.service
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IController`,
        ...javaFilenames.iController
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Controller`,
        ...javaFilenames.controller
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Converter`,
        ...javaFilenames.converter
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Migration`,
        ...javaFilenames.migration
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_GROOVY_TESTS}/ServiceUnitTest`,
        ...javaFilenames.serviceUnitTest
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_GROOVY_TESTS}/ServiceIntegrationTest`,
        ...javaFilenames.serviceIntegrationTest
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_GROOVY_TESTS}/ControllerUnitTest`,
        ...javaFilenames.controllerUnitTest
    },
    {
        filename: `./${TEMPLATE_DIRECTORY_GROOVY_TESTS}/ControllerIntegrationTest`,
        ...javaFilenames.controllerIntegrationTest
    }
];

/**
 * Contains data needed for creating Node.js files.
 */
const nodejs = [];

/**
 * Contains data needed for creating C# files.
 */
const csharp = [];

module.exports = {
    java,
    csharp,
    nodejs
};
