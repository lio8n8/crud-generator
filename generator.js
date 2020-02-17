const fs = require('fs');
const entity = require('./input/entity');
const info = require('./input/info');
const SUBDIRECTORIES = require('./data/subdirectories');
const metadata = require('./data');

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
        this.entityIdType = entity.find(p => p.name == 'id').type || 'String';
    }

    /**
     * Creates all needed classes and interfaces.
     */
    create() {
        metadata[this.language].forEach(item => {
            const template = require(item.filename);
            const className = item.name.starts + this.entityName + item.name.ends;
            const data = template({
                className,
                packageName: `${this.basePackage}.${item.subdirectory}`,
                name: this.name,
                entityName: this.entityName,
                entityIdType: this.entityIdType
            });

            this.writeToFile(`${this.name}s/${item.subdirectory}/${className}.${item.ext}`,
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
Object.keys(SUBDIRECTORIES).forEach(
    subdir => crudGenerator.createDirectory(`${crudGenerator.name}s/${SUBDIRECTORIES[subdir]}` )
);

// TODO: Rewrite.
crudGenerator.create();
console.info('Module generated');
