/**
 * Root templates directory.
 */
const TEMPLATE_DIRECTORY = 'templates';

/**
 * Contains all possible subdirectories.
 */
const SUBDIRECTORIES = {
    DTO: 'dto',
    MODELS: 'models',
    REPOSITORIES: 'repositories',
    SERVICES: 'services',
    CONTROLLERS: 'controllers',
    ROUTES: 'routes',
    CONVERTERS: 'converters',
    TESTS: 'tests'
};

const TYPES = {
    class: 'CLASS', 
    interface: 'INTERFACE'
};


/**
 * Contains possible file extensions.
 */
const EXT = {
    java: 'java',
    nodejs: 'js',
    csharp: 'cs'
};

// TODO: Add parameter to distinguish between plural and singular naming.
/**
 * Contains data needed for creating java files.
 */
const java = [
    {
        subdirectory: SUBDIRECTORIES.DTO,
        filename: `./${TEMPLATE_DIRECTORY}/java/DTO`,
        type: TYPES.class,
        part: 'DTO'
    },
    {
        subdirectory: SUBDIRECTORIES.DTO,
        filename: `./${TEMPLATE_DIRECTORY}/java/RequestDTO`,
        type: TYPES.class,
        part: 'RequestDTO'
    },
    {
        subdirectory: SUBDIRECTORIES.MODELS,
        filename: `./${TEMPLATE_DIRECTORY}/java/Entity`,
        type: TYPES.class,
        part: ''
    },
    {
        subdirectory: SUBDIRECTORIES.REPOSITORIES,
        filename: `./${TEMPLATE_DIRECTORY}/java/IRepository`,
        type: TYPES.interface,
        part: 'Repository'
    },
    {
        subdirectory: SUBDIRECTORIES.SERVICES,
        filename: `./${TEMPLATE_DIRECTORY}/java/IService`,
        type: TYPES.interface,
        part: 'Service'
    },
    {
        subdirectory: SUBDIRECTORIES.SERVICES,
        filename: `./${TEMPLATE_DIRECTORY}/java/Service`,
        type: TYPES.class,
        part: 'Service'
    },
    {
        subdirectory: SUBDIRECTORIES.CONTROLLERS,
        filename: `./${TEMPLATE_DIRECTORY}/java/IController`,
        type: TYPES.interface,
        part: 'Controller'
    },
    {
        subdirectory: SUBDIRECTORIES.CONTROLLERS,
        filename: `./${TEMPLATE_DIRECTORY}/java/Controller`,
        type: TYPES.class,
        part: 'Controller'
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
    SUBDIRECTORIES,
    TYPES,
    EXT,
    java,
    csharp,
    nodejs
};
