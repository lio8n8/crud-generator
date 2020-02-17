const EXT = require('./extensions');
const SUBDIRECTORIES = require('./subdirectories');

/**
 * Root templates directory.
 */
const TEMPLATE_DIRECTORY_ROOT = 'templates';

/**
 * Java template directory.
 */
const TEMPLATE_DIRECTORY_JAVA = `${TEMPLATE_DIRECTORY_ROOT}/java`;

/**
 * Contains data needed for creating java files.
 */
const java = [
    {
        subdirectory: SUBDIRECTORIES.DTO,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/DTO`,
        name: {
            starts: '',
            ends: 'DTO'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.DTO,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/RequestDTO`,
        name: {
            starts: '',
            ends: 'RequestDTO'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.MODELS,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Entity`,
        name: {
            starts: '',
            ends: ''
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.REPOSITORIES,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IRepository`,
        name: {
            starts: '',
            ends: 'Repository'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.SERVICES,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IService`,
        name: {
            starts: 'I',
            ends: 'Service'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.SERVICES,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Service`,
        name: {
            starts: '',
            ends: 'Service'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.CONTROLLERS,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/IController`,
        name: {
            starts: 'I',
            ends: 'Controller'
        },
        ext: EXT.java
    },
    {
        subdirectory: SUBDIRECTORIES.CONTROLLERS,
        filename: `./${TEMPLATE_DIRECTORY_JAVA}/Controller`,
        name: {
            starts: '',
            ends: 'Controller'
        },
        ext: EXT.java
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
