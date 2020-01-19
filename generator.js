const fs = require('fs');
const metadata = require('./input/metadata');

// TODO: Merge constants to one object.

/**
 * Contains possible file extensions.
 */
const EXT = {
    java: 'java',
    nodejs: 'js',
    csharp: 'cs'
};

/**
 * Contains possible languages.
 */
const LANGUAGES = ['java', 'nodejs', 'csharp'];

/**
 * Contains messages in case of success generating files.
 */
const SUCCESS_MESSAGES = {
    java: '',
    nodejs: '',
    csharp: ''
};

const CLASSES = {
    java: ['DTO', 'RequestDTO', 'Entity', 'Service', 'Controller'],
    nodejs: [],
    csarp: []
};

const INTERFACES = {
    java: ['IRepository', 'IService', 'IController'],
    nodejs: [],
    csharp: []
};

/**
 * Error messages.
 */
const ERRORS = {
    FAILED_CREATE_FILE: 'Failed to create the file.'
}

/**
 * CRUD generator.
 */
class CRUDGenerator {

    constructor() {
        if (!LANGUAGES.includes(metadata.language)) {
            throw new Error("Wrong language!");
        }

        this.name = metadata.name;
        this.language = metadata.language;
        this.basePackage = metadata.basePackage || metadata.name + 's';
    }

    // TODO: Fix && refactor.
    /**
     * Creates new classes in base directory.
     */
    createClasses() {
        CLASSES[this.language].forEach(c => {
            const template = require(`./templates/${this.language}/${c}`);
            const data = template(this.name, this.basePackage);
            this.writeToFile(`${this.name}s/${this.name[0].toUpperCase() 
                + this.name.slice(1)
                + `${/(DTO || Entity)$/.test(c) ? '' : 's'}`
                + c }.${EXT[this.language]}`,
                data);
        });
    }

    // TODO: Fix && refactor.
    /**
     * Creates interfaces in base directory.
     */
    createInterfaces() {
        INTERFACES[this.language].forEach(i => {
            const template = require(`./templates/${this.language}/${i}`);
            const data = template(this.name, this.basePackage);
            this.writeToFile(`${this.name}s/I${this.name[0].toUpperCase() 
                + this.name.slice(1)
                + 's'
                + i.slice(1) }.${EXT[this.language]}`,
                data);
        });
    }

    /**
     * Creates base directory.
     */
    createBaseDirectory() {
        if (!fs.existsSync(this.name + 's')){
            fs.mkdirSync(this.name + 's');
        }
    }

    /**
     * Writes data to file.
     * @param {String} filename name of file.
     * @param {String} data file content.
     */
    writeToFile(filename, data) {
        fs.writeFile(filename, data, 'utf8', err => {
            if (err) {
                throw err;
            }
        });
    }
}

const crudGenerator = new CRUDGenerator();
crudGenerator.createBaseDirectory();
crudGenerator.createInterfaces();
crudGenerator.createClasses();
