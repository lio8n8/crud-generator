const fs = require('fs');
const entity = require('./input/entity');
const info = require('./input/info');
const metadata = require('./metadata');

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
        if (!LANGUAGES.includes(info.language)) {
            throw new Error("Wrong language!");
        }

        this.name = info.name;
        this.language = info.language;
        this.basePackage = info.basePackage || info.name + 's';
        this.entityName = this.name[0].toUpperCase() + this.name.slice(1);
        this.enityIdType = entity.find(p => p.name == 'id').type || 'String';
    }

    /**
     * Creates all needed classes and interfaces.
     */
    create() {
        metadata[this.language].forEach(item => {
            const template = require(item.filename);
            const className = (item.type == metadata.TYPES.interface ? 'I' : '') + this.entityName + 's' + item.part;
            const data = template({
                className,
                packageName: `${this.basePackage}.${item.subdirectory}`,
                name: this.name,
                entityName: this.entityName,
                enityIdType: this.enityIdType
            });

            this.writeToFile(`${this.name}s/${item.subdirectory}/${className}.${metadata.EXT[this.language]}`,
                data);
        });
    }

    /**
     * Creates directory.
     */
    createDirectory(name) {
        if (!fs.existsSync(name)){
            fs.mkdirSync(name);
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

// TODO: Fix.
crudGenerator.createDirectory(crudGenerator.name + 's');
Object.keys(metadata.SUBDIRECTORIES).forEach(
    subdir => crudGenerator.createDirectory(`${crudGenerator.name}s/${metadata.SUBDIRECTORIES[subdir]}` )
);

crudGenerator.create();
